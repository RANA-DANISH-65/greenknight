import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage("");

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblykqka", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        form.reset(); // Clear form fields
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ Network error. Please try again later.");
    }

    setSubmitting(false);
  };

  return (
    <div id="contact" className="mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-gray-900 text-5xl font-extrabold">Contact Us</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly px-10 mt-10 gap-10">
        {/* Contact Info Boxes */}
        <div className="flex flex-col gap-5 w-full lg:w-1/3">
          <a
            href="mailto:info@greenknight.io"
            className="p-4 bg-gray-900 text-white text-center rounded px-10 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold">Email</h3>
            <p>info@greenknight.io</p>
            <p>Write To Us →</p>
          </a>
          <a
            href="https://www.facebook.com/GreenKnightOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900 text-white text-center rounded px-10 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold">Facebook</h3>
            <p>@GreenKnightOfficial</p>
            <p>Visit Us</p>
          </a>
          <a
            href="https://wa.me/923222777414"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900 text-white text-center rounded px-10 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p>+92 322 2777414</p>
            <p>Write To Us →</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="border-gray-900 p-3 rounded-full border-4 outline-none"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-gray-900 p-3 rounded-full border-4 outline-none"
              required
            />
            <input
              name="number"
              type="text"
              placeholder="Phone Number"
              className="border-gray-900 p-3 rounded-full border-4 outline-none"
            />
            <input
              name="address"
              type="text"
              placeholder="Address"
              className="border-gray-900 p-3 rounded-full border-4 outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="border-gray-900 p-3 rounded-3xl border-4 h-[100px] outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className={`p-5 rounded-full text-white text-lg transition ${
                submitting ? "bg-gray-500" : "bg-gray-900 hover:bg-gray-800"
              }`}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                className={`text-center text-sm mt-2 ${
                  statusMessage.includes("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
