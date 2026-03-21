"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim()
    };

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setStatus({ type: "error", message: "Please fill in all fields before sending." });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured yet. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: trimmed.name,
          email: trimmed.email,
          title: trimmed.subject,
          subject: trimmed.subject,
          message: trimmed.message,
          to_email: "therhemawordembassy@gmail.com",
          reply_to: trimmed.email
        },
        {
          publicKey
        }
      );

      setForm(initialState);
      setStatus({ type: "success", message: "Your message has been sent." });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Subject
        <input
          name="subject"
          type="text"
          placeholder="How can we help?"
          value={form.subject}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message here"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>
      <button className="button button--primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {status.message ? (
        <p className={`form-status form-status--${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
