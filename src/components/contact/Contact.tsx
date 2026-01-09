"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href = `mailto:zawedakhter5786@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" data-bg="#0a0a0a" className="py-14 bg-surface scroll-mt-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted mb-16 max-w-2xl mx-auto"
        >
          Have a project, job opportunity, or just want to say hello?
          Fill the form below and I’ll get back to you.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            bg-background border border-border
            rounded-3xl p-8 md:p-10
            hover:shadow-2xl transition
          "
        >
          <form onSubmit={handleSubmit} className="grid gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-muted mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="
                  w-full rounded-xl border border-border
                  bg-surface px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-muted mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="
                  w-full rounded-xl border border-border
                  bg-surface px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-muted mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="
                  w-full rounded-xl border border-border
                  bg-surface px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
                placeholder="Write your message..."
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="
                mt-4 inline-flex items-center justify-center gap-2
                px-8 py-3 rounded-xl font-medium text-white
                bg-primary hover:bg-primary/90 transition
                cursor-pointer hover:text-amber-700
              "
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>

          {/* Direct Email + Socials */}
          <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail />
              </div>
              <p className="font-medium">
                Zawedakhter5786@gmail.com
              </p>
            </div>

            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/zawed116"
                target="_blank"
                className="text-muted hover:text-foreground transition hover:text-amber-600"
              >
                <Github size={26} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/in/zawed-akhter-3982bb26b/"
                target="_blank"
                className="text-muted hover:text-foreground transition hover:text-amber-700"
              >
                <Linkedin size={26} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
