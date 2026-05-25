'use client';

import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'mazbahulislammeraj@gmail.com',
            link: 'mailto:mazbahulislammeraj@gmail.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+880 1816359730',
            link: 'tel:+8801816359730'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Dhaka, Bangladesh',
            link: '#'
        }
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.637h3.554v1.36c.425-.654 1.186-1.586 2.882-1.586 2.105 0 3.684 1.375 3.684 4.331v5.532zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.927.762 1.941 1.715 0 .953-.771 1.715-1.984 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        },
        {
            name: 'Email',
            url: 'mailto:mazbahulislammeraj@gmail.com',
            icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-20 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-screen blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-medium">GET IN TOUCH</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent italic font-serif">Connect</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Information Cards */}
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>

                            <div className="relative">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 break-all">
                                    {info.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Project Collaboration"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Quick Info & Social Links */}
                    <div className="space-y-8">
                        {/* Why Connect Card */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">Why Reach Out?</h3>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="text-2xl flex-shrink-0">💡</div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Innovative Ideas</h4>
                                        <p className="text-gray-400 text-sm">I love discussing innovative project ideas and technical solutions.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl flex-shrink-0">🤝</div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Collaboration</h4>
                                        <p className="text-gray-400 text-sm">Open to freelance projects and full-time opportunities.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl flex-shrink-0">⚡</div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                                        <p className="text-gray-400 text-sm">I typically respond to messages within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl flex-shrink-0">🚀</div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Full Stack Development</h4>
                                        <p className="text-gray-400 text-sm">Experienced in building complete web applications from concept to deployment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-4 bg-white/5 border border-white/20 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                                    >
                                        <div className="group-hover:scale-110 transition-all duration-300">
                                            {social.icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Response Time Banner */}
                <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-xl text-center">
                    <p className="text-gray-200">
                        <span className="font-bold text-white">⏱️ Response Time:</span> I typically get back to you within 24 hours during business days.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
