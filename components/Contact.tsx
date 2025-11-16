// components/Contact.tsx
import FadeInSection from "./FadeInSection";
import ContactForm from "./ContactForm"; // We'll create this next
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <FadeInSection id="contact" className="mx-auto mt-20 max-w-6xl rounded-2xl from-brand-green/90 to-brand-teal/90 p-8 shadow-2xl md:p-16">
      <h2 className="mb-10 text-center text-3xl font-semibold text-brand-cyan">Contact Us</h2>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Left: Info */}
        <div className="flex-1">
          <p className="mb-6 text-lg leading-relaxed">
            We’d love to hear from you. Whether you have questions, want to book an appointment, or simply need
            guidance — reach out anytime!
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-cyan" />
              <a href="mailto:info@cacc.ie" className="transition-colors hover:text-brand-cyan">
              communityacademicconsultant@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-cyan" />
              <span>+92-3047089742</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-cyan" />
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>

      {/* Map & Address Section */}
      <div className="mt-16">
        <div className="mx-auto mb-6 max-w-3xl rounded-2xl from-brand-teal to-brand-blue p-8 text-center shadow-xl">
          <MapPin className="mx-auto mb-3 h-8 w-8 text-brand-cyan" />
          <h3 className="mb-2 text-2xl font-semibold">Visit Us</h3>
          <p className="text-lg leading-relaxed">
            Suit No 33, 3rd Floor, RJ Mall,
            <br />
            Rashid Minhas Rd, Gulistan-e-Johar,
            <br />
            Karachi, 75050
          </p>
        </div>

        <div className="h-80 w-full overflow-hidden rounded-lg shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.446210427673!2d67.1133178759086!3d24.91686854332414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e5539002a1%3A0x68b913411c793c5c!2sR.J%20Mall!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="brightness-90 saturate-125"
          ></iframe>
        </div>
      </div>
    </FadeInSection>
  );
}