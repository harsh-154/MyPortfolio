import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_fctm82s',    // 🔁 Replace with your EmailJS service ID
      'template_10o3o3c',   // 🔁 Replace with your EmailJS template ID
      e.target,
      'c7tNwxxBVqdroEMUY'     // 🔁 Replace with your EmailJS public key
    )
    .then(() => {
      setSuccess("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setSuccess("Failed to send message.");
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 md:px-8 flex items-center justify-center">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:mx-auto after:mt-4 after:rounded-full animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Contact Me
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 animate-fade-in-up">
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-400 mt-4">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
