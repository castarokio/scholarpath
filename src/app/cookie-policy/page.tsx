import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiePolicyPage() {
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
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Cookie Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 14, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Types of Cookies We Use</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-6 mb-2">2.1 Essential Cookies (Always Active)</h3>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Session cookies:</strong> Keep you logged in during your visit</li>
              <li>• <strong>Security cookies:</strong> Protect your account and data</li>
              <li>• <strong>Preference cookies:</strong> Remember your settings (language, dark mode)</li>
              <li>• <strong>Consent cookies:</strong> Store your cookie consent choices</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-2">2.2 Analytics Cookies</h3>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Google Analytics:</strong> Track page views, traffic sources, and user behavior</li>
              <li>• <strong>Vercel Analytics:</strong> Monitor website performance and errors</li>
            </ul>
            <p className="text-muted-foreground text-sm mt-2">These help us understand how visitors interact with our site and improve our services.</p>

            <h3 className="text-lg font-medium text-foreground mt-6 mb-2">2.3 Marketing Cookies</h3>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Meta Pixel:</strong> Measure advertising effectiveness</li>
              <li>• <strong>Hotjar:</strong> Record sessions and generate heatmaps for UX improvement</li>
            </ul>
            <p className="text-muted-foreground text-sm mt-2">These enable personalized advertising and help us optimize the user experience.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You can manage your cookie preferences at any time:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Use the cookie consent banner on our website</li>
              <li>• Adjust your browser settings to block or delete cookies</li>
              <li>• Visit our settings page (if available) to update preferences</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Note: Blocking essential cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some cookies are placed by third-party services we use, including Google Analytics, Stripe, and Calendly. We do not control these cookies. Please review the respective privacy policies of these providers for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. How Long Cookies Persist</h2>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li>• <strong>Persistent cookies:</strong> Remain for 30 days to 2 years, depending on purpose</li>
              <li>• <strong>Consent cookies:</strong> Stored for 12 months before re-asking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy to reflect changes in technology, regulation, or our business practices. We will notify you of significant changes via email or website notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about our cookie usage? Email us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Manage Your Privacy</h3>
          <p className="text-muted-foreground mb-4">You can update your cookie preferences at any time by clearing your browser cookies and revisiting our site.</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
