"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Camera,
  Play,
  MessageCircle,
  Link as LinkLucide,
  Mail,
  Phone,
  Shield,
  CreditCard,
} from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Study Abroad", href: "/study-abroad" },
    { label: "Scholarships", href: "/study-abroad#programs" },
    { label: "Courses", href: "/courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Destinations", href: "/study-abroad#destinations" },
  ],
  resources: [
    { label: "Resource Hub", href: "/resources" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Visa Guide", href: "/visa-guide" },
    { label: "Destinations", href: "/destinations" },
    { label: "FAQ", href: "/resources#faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about" },
    { label: "Partners", href: "/about" },
    { label: "Contact", href: "/about#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "GDPR Compliance", href: "/gdpr" },
  ],
};

const socialLinks = [
  { icon: Camera, href: "https://www.instagram.com/castarokio/", label: "Instagram" },
  { icon: MessageCircle, href: "https://t.me/castarokio", label: "Telegram" },
  { icon: Play, href: "#", label: "YouTube" },
  { icon: LinkLucide, href: "#", label: "LinkedIn" },
];

const paymentMethods = ["Visa", "Mastercard", "Stripe", "Bank Transfer"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ScholarPath
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs text-sm leading-relaxed">
              Empowering students worldwide to achieve their dreams of studying abroad with expert guidance, verified scholarships, and end-to-end support.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="mailto:castarokio@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                castarokio@gmail.com
              </a>
              <a href="tel:+213540211250" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +213 540 211 250
              </a>
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Programs</h3>
            <ul className="space-y-2.5">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-success" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-success" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-5 w-5 text-primary" />
              <span>Secure Payments via Stripe</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="text-xs text-muted-foreground">We accept:</span>
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-3 py-1.5 bg-background border border-border rounded-md text-xs font-medium text-muted-foreground"
              >
                {method}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} ScholarPath. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made with ❤️ for students worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
