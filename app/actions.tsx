// app/actions.tsx
"use server";

import { PrismaClient } from "@prisma/client"; // <--- Import this
import { revalidatePath } from "next/cache";
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/ContactEmailTemplate';

const prisma = new PrismaClient(); // <--- Initialize this

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing Resend environment variables");
    return { success: false, error: "Server configuration error." };
  }

  const resend = new Resend(apiKey);

  try {
    await Promise.all([
      // 1. Save to Vercel Postgres
      prisma.contactSubmission.create({
        data: {
          name,
          email,
          message,
        },
      }),
      
      // 2. Send Email
      resend.emails.send({
        from: 'website@caccconsultant.com', 
        to: toEmail,
        subject: `New CACC Website Message from ${name}`,
        replyTo: email, 
        react: <ContactEmailTemplate name={name} email={email} message={message} />,
      })
    ]);

    revalidatePath("/#contact");
    revalidatePath("/admin");
    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}