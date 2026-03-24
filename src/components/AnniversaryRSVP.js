"use client";
import { useState } from "react";
import { contactDetails } from "@/content/site";

export default function AnniversaryRSVP({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [church, setChurch] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `RSVP for Anniversary\nName: ${name}\nChurch: ${church || "N/A"}`;
    const mailtoLink = `mailto:${contactDetails.email}?subject=Anniversary RSVP&body=${encodeURIComponent(emailBody)}`;
    const whatsappLink = `https://wa.me/${contactDetails.phone.replace(/\s+/g,'')}?text=${encodeURIComponent(emailBody)}`;

    window.open(mailtoLink, "_blank");
    window.open(whatsappLink, "_blank");

    setSubmitted(true);
  };

  if (!isOpen) return null; // modal not rendered if closed

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {submitted ? (
          <div className="rsvp-thankyou">
            <h3>Thank you for your RSVP!</h3>
            <p>We look forward to seeing you at the anniversary service 🎉</p>
            <button onClick={() => setIsOpen(false)} className="btn btn-secondary">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rsvp-form">
            <h3>RSVP for Church Anniversary</h3>
            <label>
              Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Church (optional)
              <input
                type="text"
                value={church}
                onChange={(e) => setChurch(e.target.value)}
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}