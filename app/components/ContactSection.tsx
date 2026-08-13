"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBehance } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "8801816359730";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      "From Portfolio Contact Form:",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="contact"
      className="project-background relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">
            GET IN TOUCH
          </p>

          <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text font-serif italic text-transparent">
              Connect with Me
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* LEFT — Message Form */}
          <motion.div
            className="relative order-2 h-full overflow-hidden rounded-[24px] border border-white/12 bg-[#0c1424]/90 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] sm:p-8 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              {/* Form Header */}
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Start a conversation
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Send a message
                  </h3>
                </div>

                <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium text-slate-400 sm:block">
                  Usually replies within 24h
                </span>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col"
              >
                <div className="flex-1 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Name
                    </label>

                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#070c17]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:bg-[#070c17]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#070c17]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:bg-[#070c17]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#070c17]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:bg-[#070c17]"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex pt-6">
                  <button
                    type="submit"
                    className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_30px_rgba(103,232,249,0.16)] transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-300/30 sm:w-auto"
                  >
                    Send message
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* RIGHT — Contact Information */}
          <motion.aside
            className="relative order-1 h-full overflow-hidden rounded-[24px] border border-white/15 bg-linear-to-br from-[#141b31] via-[#0a1222] to-[#04060b] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] sm:p-7 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
            </div>

            <div className="relative flex h-full flex-col justify-between gap-7">
              {/* Contact Info */}
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-300/60" />

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Contact Info
                  </h3>

                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-fuchsia-300/60" />
                </div>

                <div className="grid gap-3 text-left">
                  {/* Email */}
                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.09] to-white/[0.035] p-3.5 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:from-cyan-400/[0.12] hover:to-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-xl">
                        📧
                      </span>

                      <div>
                        <div className="text-sm font-semibold text-white">
                          Email
                        </div>

                        <a
                          href="mailto:mazbahulislammeraj@gmail.com"
                          className="text-sm text-gray-300 transition group-hover:text-white"
                        >
                          mazbahulislammeraj@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.09] to-white/[0.035] p-3.5 transition hover:-translate-y-0.5 hover:border-purple-400/40 hover:from-purple-400/[0.12] hover:to-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 text-xl">
                        📱
                      </span>

                      <div>
                        <div className="text-sm font-semibold text-white">
                          Phone
                        </div>

                        <a
                          href="tel:+8801816359730"
                          className="text-sm text-gray-300 transition group-hover:text-white"
                        >
                          +880 1816 359730
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.09] to-white/[0.035] p-3.5 transition hover:-translate-y-0.5 hover:border-pink-400/40 hover:from-pink-400/[0.12] hover:to-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/15 text-xl">
                        📍
                      </span>

                      <div>
                        <div className="text-sm font-semibold text-white">
                          Location
                        </div>

                        <div className="text-sm text-gray-300">
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-300">
                    Social Media
                  </h4>

                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mezbahulislam/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-3 py-3 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2]/15">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#0A66C2"
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.425-.654 1.186-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331v5.532zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.927.762 1.941 1.715 0 .953-.771 1.715-1.984 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/MezbahulISLAMmeraj"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-3 py-3 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2]/15">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#1877F2"
                          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.7 4.533-4.7 1.312 0 2.684.235 2.684.235v2.967h-1.513c-1.49 0-1.954.93-1.954 1.884v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/mazbahulislam/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-3 py-3 transition hover:-translate-y-1 hover:border-pink-400/30 hover:bg-pink-400/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-pink-500/20 via-fuchsia-500/20 to-orange-400/20">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
<path
                          fill="#E1306C"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.156.263-2.924.562-.793.313-1.465.732-2.133 1.401-.67.669-1.088 1.34-1.401 2.133-.298.767-.504 1.643-.562 2.924-.058 1.28-.072 1.689-.072 4.948s.014 3.667.072 4.947c.058 1.281.264 2.156.562 2.924.313.793.732 1.465 1.401 2.133.669.669 1.34 1.088 2.133 1.401.767.298 1.643.504 2.924.562 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c1.281-.058 2.156-.264 2.924-.562.793-.313 1.465-.732 2.133-1.401.669-.669 1.088-1.34 1.401-2.133.298-.767.504-1.643.562-2.924.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.058-1.281-.264-2.156-.562-2.924-.313-.793-.732-1.465-1.401-2.133-.669-.669-1.34-1.088-2.133-1.401-.767-.298-1.643-.504-2.924-.562C15.667.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Mezbahul-241-15-929"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-3 py-3 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#FFFFFF"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </span>
                  </a>

                  {/* Behance */}
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Behance"
                    className="group flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] px-3 py-3 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                      <FaBehance className="h-5 w-5" />
                    </span>
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