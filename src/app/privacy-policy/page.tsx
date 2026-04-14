import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 14, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              ScholarPath ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-foreground mb-2">2.1 Personal Information</h3>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Name and contact information (email, phone number)</li>
              <li>• Academic records and transcripts (when you enroll)</li>
              <li>• Payment information (processed securely via Stripe)</li>
              <li>• Communication preferences and consent records</li>
            </ul>
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.2 Automatically Collected</h3>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• IP address and device information</li>
              <li>• Browser type and settings</li>
              <li>• Usage data (pages visited, time spent, click patterns)</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Provide personalized study abroad guidance and scholarship matching</li>
              <li>• Process enrollments and manage your application</li>
              <li>• Send newsletters, updates, and promotional materials (with consent)</li>
              <li>• Improve our website and services</li>
              <li>• Comply with legal obligations</li>
              <li>• Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Service providers (Supabase for database, Stripe for payments, Resend for emails)</li>
              <li>• Partner universities (with your explicit consent)</li>
              <li>• Legal authorities when required by law</li>
              <li>• Business successors in case of merger or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Retention & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide services. We implement industry-standard security measures including SSL encryption, encrypted databases, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you are a resident of the European Economic Area, you have the right to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Access your personal data</li>
              <li>• Rectify inaccurate data</li>
              <li>• Request deletion of your data ("Right to be Forgotten")</li>
              <li>• Restrict or object to data processing</li>
              <li>• Data portability (receive your data in a structured format)</li>
              <li>• Withdraw consent at any time</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise these rights, contact us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookie Usage</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential cookies for site functionality, analytics cookies to understand usage patterns, and marketing cookies for personalized advertising. You can manage your preferences via our cookie consent banner or browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our site integrates with Supabase (database), Stripe (payments), Google Analytics (analytics), and Calendly (booking). These services have their own privacy policies. We recommend reviewing them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under 16. We do not knowingly collect personal information from children. If you believe we have, contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or prominent notice on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">
                castarokio@gmail.com
              </a>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Have Questions About Your Data?</h3>
          <p className="text-muted-foreground mb-4">We're here to help you understand and control your information.</p>
          <Link href="/about#contact">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
