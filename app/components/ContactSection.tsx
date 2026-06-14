"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const whatsappNumber = "8801816359730";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      "From Portfolio Contact Form:",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/80 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">GET IN TOUCH</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic font-serif">Connect with Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Message Box (Form) */}
          <motion.div
            className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/8 via-white/5 to-white/3 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-400/30 hover:-translate-y-1.5 transition-all duration-300 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="my-2 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex h-full flex-col">
                <div className="flex-1 space-y-2.5">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none transition placeholder:text-gray-500 focus:border-pink-400/60 focus:bg-black/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none transition placeholder:text-gray-500 focus:border-pink-400/60 focus:bg-black/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full resize-none rounded-xl border border-white/15 bg-black/20 px-4 py-2.5 text-white outline-none transition placeholder:text-gray-500 focus:border-pink-400/60 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div className="pt-3 flex">
                  <button className="ml-auto inline-flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-cyan-500/30">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Information + Social Media */}
          <motion.aside
            className="relative h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-linear-to-br from-slate-950 via-slate-900 to-black p-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30 hover:-translate-y-1.5 transition-all duration-300 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative flex h-full flex-col justify-between gap-4">
              <div className="my-2 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">Contact Info</h3>
                <div className="grid gap-2.5 text-left">
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40 hover:bg-white/8">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-xl">📧</span>
                      <div>
                        <div className="text-sm font-medium text-white">Email</div>
                        <a href="mailto:mazbahulislammeraj@gmail.com" className="text-sm text-gray-300 transition group-hover:text-white">mazbahulislammeraj@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-purple-400/40 hover:bg-white/8">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 text-xl">📱</span>
                      <div>
                        <div className="text-sm font-medium text-white">Phone</div>
                        <a href="tel:+8801816359730" className="text-sm text-gray-300 transition group-hover:text-white">+880 1816 359730</a>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-pink-400/40 hover:bg-white/8">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/15 text-xl">📍</span>
                      <div>
                        <div className="text-sm font-medium text-white">Location</div>
                        <div className="text-sm text-gray-300">Dhaka, Bangladesh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">Social Media</h4>
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2]/15">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.425-.654 1.186-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331v5.532zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.927.762 1.941 1.715 0 .953-.771 1.715-1.984 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-white">LinkedIn</span>
                  </a>

                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2]/15">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.7 4.533-4.7 1.312 0 2.684.235 2.684.235v2.967h-1.513c-1.49 0-1.954.93-1.954 1.884v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg>
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-white">Facebook</span>
                  </a>

                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-pink-400/30 hover:bg-pink-400/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 via-fuchsia-500/20 to-orange-400/20">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#E1306C" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.772 1.153 4.92 4.92 0 011.153 1.772c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.153 1.772 4.92 4.92 0 01-1.772 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.772-1.153 4.92 4.92 0 01-1.153-1.772c-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427A4.92 4.92 0 013.789 2.951 4.92 4.92 0 015.561 1.798c.457-.163 1.257-.349 2.427-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.74 0 8.332.014 7.052.072 5.774.13 4.89.327 4.12.589a6.99 6.99 0 00-2.53 1.64A6.99 6.99 0 00.59 4.759C.327 5.53.13 6.414.072 7.692.014 8.972 0 9.38 0 12s.014 3.028.072 4.308c.058 1.278.255 2.162.518 2.933a6.99 6.99 0 001.64 2.53 6.99 6.99 0 002.53 1.64c.771.263 1.655.46 2.933.518C8.972 23.986 9.38 24 12 24s3.028-.014 4.308-.072c1.278-.058 2.162-.255 2.933-.518a6.99 6.99 0 002.53-1.64 6.99 6.99 0 001.64-2.53c.263-.771.46-1.655.518-2.933C23.986 15.028 24 14.62 24 12s-.014-3.028-.072-4.308c-.058-1.278-.255-2.162-.518-2.933a6.99 6.99 0 00-1.64-2.53A6.99 6.99 0 0019.24.59c-.771-.263-1.655-.46-2.933-.518C15.028.014 14.62 0 12 0zm0 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zm0 10.164A4.002 4.002 0 1116.002 12 4.007 4.007 0 0112 16.002zm6.406-10.845a1.44 1.44 0 10-1.44 1.44 1.44 1.44 0 001.44-1.44z" /></svg>
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-white">Instagram</span>
                  </a>

                  <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </span>
                    <span className="text-sm text-gray-200 group-hover:text-white">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
