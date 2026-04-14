import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Terms of Service</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 14, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the ScholarPath website and services, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              ScholarPath provides:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Study abroad guidance and consulting</li>
              <li>• Scholarship matching and application assistance</li>
              <li>• Educational courses (IELTS preparation, essay writing, etc.)</li>
              <li>• University application support</li>
              <li>• Visa preparation and documentation assistance</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not guarantee university admission or scholarship awards. Our role is to provide guidance and support throughout the process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Accounts</h2>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• You must provide accurate and complete information</li>
              <li>• You are responsible for maintaining account confidentiality</li>
              <li>• You must notify us immediately of unauthorized access</li>
              <li>• We reserve the right to suspend accounts for violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Payment & Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Fees:</strong> Our services are offered at the prices displayed on our pricing page. Prices may change without notice for new customers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Refunds:</strong> We offer a 14-day money-back guarantee for Pro and Premium plans if we cannot match you with at least one suitable scholarship. To request a refund, contact us at castarokio@gmail.com within 14 days of purchase.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Exceptions:</strong> Refunds are not available after scholarship matching is completed, after services have been fully rendered, or for Basic (free) tier users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on ScholarPath, including text, graphics, logos, and course materials, is the property of ScholarPath and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Use our services for fraudulent or illegal activities</li>
              <li>• Submit false information on applications or documents</li>
              <li>• Harass, abuse, or harm our consultants or staff</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Reproduce or resell our content or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              ScholarPath shall not be liable for: university admission decisions, scholarship outcomes, visa approvals, or any indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid for our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party sites (universities, scholarship providers, payment processors). We are not responsible for the content or privacy practices of these sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of the jurisdiction in which ScholarPath operates. Any disputes will be resolved in the courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, contact us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Questions About Our Terms?</h3>
          <p className="text-muted-foreground mb-4">Our team is happy to clarify any concerns.</p>
          <Link href="/about#contact">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
