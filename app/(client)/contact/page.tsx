"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";
import { MessageSquare, MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen pt-24 pb-12">
            <Container>
                {/* Header Section */}
                <div className="relative mb-20">
                    <div className="h-64 w-full bg-neutral-900 rounded-2xl overflow-hidden flex items-end p-8 relative">
                        <Image
                            src="/images/contact-us-card.png"
                            alt="Contact Us"
                            fill
                            className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient Overlay for smooth text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative z-10 text-white"
                        >
                            Contact Us
                        </motion.h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Info & Instant Support */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Get in Touch</h2>
                            <p className="text-neutral-400 leading-relaxed max-w-md">
                                Our team is available to assist with your orders, sizing inquiries, or any other feedback. Experience the premium support of Clotex LK.
                            </p>
                        </div>

                        {/* Instant Support Card */}
                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="w-5 h-5 text-white" />
                                <h3 className="font-bold uppercase tracking-wider">Instant Support</h3>
                            </div>
                            <p className="text-sm text-neutral-400 mb-6 font-light">
                                Need a quick answer? Reach our concierge team directly via WhatsApp for immediate assistance.
                            </p>
                            <Link
                                href="https://wa.me/"
                                target="_blank"
                                className="block w-full bg-white text-black font-bold text-center py-3 rounded uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors"
                            >
                                Message on WhatsApp
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-6">Follow Us</h3>
                            <div className="flex gap-6">
                                <SocialLink href="#" icon={FaInstagram} label="Instagram" />
                                <SocialLink href="#" icon={FaTiktok} label="TikTok" />
                                <SocialLink href="#" icon={FaFacebookF} label="Facebook" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 md:p-12"
                    >
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-4 rounded uppercase tracking-widest text-sm hover:bg-neutral-200 transition-colors mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* HQ Location Visual - Merged */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 relative w-full h-96 bg-neutral-900 rounded-2xl overflow-hidden group border border-neutral-800"
                >
                    {/* Map Background */}
                    <div className="absolute inset-0 z-0 bg-neutral-800">
                        <img
                            src="/images/polonnaruwa-map-v3.jpg"
                            alt="Polonnaruwa Map"
                            className="w-full h-full object-cover grayscale invert-[.85] contrast-125 brightness-75 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-[#0a0a0a]" />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="bg-neutral-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <MapPin className="w-10 h-10 text-white mx-auto mb-4" />
                            <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Clotex HQ</h3>
                            <p className="text-neutral-400 font-medium tracking-wide">818 Main street, Polonnaruwa 51000</p>
                            <div className="mt-6">
                                <a
                                    href="https://maps.google.com/?q=818+Main+street,+Polonnaruwa+51000"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-neutral-300 transition-colors border-b border-white pb-1"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <Link
        href={href}
        className="flex items-center gap-3 group"
    >
        <div className="p-2 border border-neutral-800 rounded-full group-hover:bg-white group-hover:text-black transition-all">
            <Icon className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">{label}</span>
    </Link>
);

export default ContactPage;
