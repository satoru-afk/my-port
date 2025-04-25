import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      // Optionally show a success message to the user here
      alert("Thank you! Your message has been sent."); // Basic example
    } catch (error) {
      console.error("EmailJS Error:", error);
      // Optionally show an error message to the user here
      alert("Oops, something went wrong. Please try again."); // Basic example
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="py-20 flex justify-center">
      {" "}
      {/* Added flex and justify-center to center the form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl w-full max-w-3xl" // Added max-w-3xl to limit form width on larger screens
      >
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          {" "}
          {/* Added text-center */}
          Get In Touch
        </h2>
        <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              {" "}
              {/* Corrected typo from 'clas' to 'className="flex flex-col"' and added flex-col for proper stacking */}
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                {/* Added basic label styling */}
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What’s your good name?"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white" // Added padding, border, rounded corners, and focus styles
                required
              />
            </div>
            <div className="flex flex-col">
              {" "}
              {/* Added flex-col for proper stacking */}
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                {/* Added basic label styling */}
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What’s your email address?"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent  bg-white" // Added padding, border, rounded corners, and focus styles
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            {" "}
            {/* Added flex-col for proper stacking */}
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              {" "}
              {/* Added basic label styling */}
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows="5"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent  resize-none bg-white" // Added padding, border, rounded corners, focus styles, and resize-none
              required
            />
          </div>
          <div className="flex justify-center">
            
            {/* Added to center the button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary cursor-pointer text-primary px-8 py-3 rounded-lg font-medium hover:bg-secondary-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed" // Improved button padding, added hover effect, transition, and disabled styles
              disabled={loading} // Disable button while loading
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
