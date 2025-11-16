// components/ContactForm.tsx
"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions";
import { Send, Loader2 } from "lucide-react";
import React from "react";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setMessage(result.message || "Success!");
        setIsError(false);
        formRef.current?.reset();
      } else {
        setMessage(result.error || "An error occurred.");
        setIsError(true);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-md border-none bg-white/10 p-3 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-brand-cyan"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full rounded-md border-none bg-white/10 p-3 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-brand-cyan"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        required
        className="w-full rounded-md border-none bg-white/10 p-3 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-brand-cyan"
      />
      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-cyan px-8 py-3.5 font-semibold text-brand-dark transition-all hover:bg-white hover:text-brand-blue disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        <span>{isPending ? "Sending..." : "Send Message"}</span>
      </button>

      {message && (
        <p className={`mt-2 text-center ${isError ? 'text-red-400' : 'text-green-300'}`}>
          {message}
        </p>
      )}
    </form>
  );
}