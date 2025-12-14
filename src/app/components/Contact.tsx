"use client";

import { useRef } from "react";
import { useGsapTextReveal } from "../hooks/useGsapTextReveal";
import { socialLinks } from "../data/socialLinks";
import { MailIcon, ArrowUpRightIcon } from "./icons/SocialIcons";

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGsapTextReveal(headingRef, { stagger: 0.03 });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 border-t border-[#E5E7EB]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-16">
          <span className="text-sm font-semibold text-[#2ECC71] tracking-widest uppercase mb-4 block">
            03 — CONTACT
          </span>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
          >
            LET&apos;S WORK
            <br />
            TOGETHER
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div data-aos="fade-right" data-aos-delay="100">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities, creative ideas, or possibilities to be part of your
              vision.
            </p>

            <div className="mb-8">
              <a
                href="mailto:akbarwjyy8@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-[#2ECC71] transition-all duration-300 hover:scale-105"
              >
                <MailIcon />
                LET&apos;S CONNECT
                <ArrowUpRightIcon />
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                FOLLOW ME
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50 + 200}
                    className="w-12 h-12 border border-[#E5E7EB] rounded-full flex items-center justify-center text-gray-600 hover:border-[#2ECC71] hover:text-[#2ECC71] hover:bg-[#2ECC71]/10 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#2ECC71] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#2ECC71] transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#2ECC71] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-[#2ECC71] transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
