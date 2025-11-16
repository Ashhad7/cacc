// components/WhatsappFloat.tsx
import { MessageSquare } from "lucide-react"; // Using MessageSquare as a substitute

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/923047089742"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#1EBE5D]"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-8 w-8" />
    </a>
  );
}