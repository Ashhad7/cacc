// app/actions.ts
"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Resend } from 'resend'; // <-- Import Resend
import { ContactEmailTemplate } from '@/components/ContactEmailTemplate'; // <-- Import your new template

// Initialize clients
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  // 1. Get form data
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // 2. Simple server-side validation
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  // 3. Validate environment variables
  const toEmail = process.env.RESEND_TO_EMAIL;
  if (!process.env.RESEND_API_KEY || !toEmail) {
    console.error("Missing Resend environment variables");
    // This is a server configuration error, don't expose details to the client
    return { success: false, error: "Server configuration error." };
  }

  // 4. Run both tasks in parallel
  try {
    await Promise.all([
      // Task 1: Save to database
      prisma.contactSubmission.create({
        data: {
          name,
          email,
          message,
        },
      }),
      
      // Task 2: Send email with Resend
      resend.emails.send({
        // NOTE: For testing, Resend allows 'onboarding@resend.dev'
        // To use your own domain (e.g., 'no-reply@cacc-website.com'), 
        // you must add and verify it in your Resend dashboard.
        from: 'onboarding@resend.dev', 
        to: toEmail,
        subject: `New CACC Website Message from ${name}`,
        replyTo: email, // Set the reply-to to the user's email
        react: <ContactEmailTemplate name={name} email={email} message={message} />,
      })
    ]);

    // If both succeed:
    revalidatePath("/#contact");
    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    // If either task fails:
    console.error("Form submission error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}