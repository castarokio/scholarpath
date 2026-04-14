import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function RefundPolicyPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Refund Policy</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 14, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              ScholarPath is committed to providing high-quality study abroad guidance. We stand behind our services and offer a fair refund policy to ensure your confidence in working with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. 14-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For <strong>Pro ($199)</strong> and <strong>Premium ($499)</strong> plans, we offer a 14-day money-back guarantee under the following conditions:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• You must request a refund within 14 calendar days of payment</li>
              <li>• We have not yet matched you with at least one suitable scholarship opportunity</li>
              <li>• You have not received any consulting services or document reviews</li>
              <li>• Your account is in good standing with no policy violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Non-Refundable Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The following are not eligible for refunds:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Basic (Free) tier:</strong> No payment was made</li>
              <li>• <strong>After scholarship matching:</strong> Once we've provided matching opportunities, services are considered rendered</li>
              <li>• <strong>Individual courses:</strong> Once course content has been accessed</li>
              <li>• <strong>Visa application fees:</strong> Third-party government fees are non-refundable</li>
              <li>• <strong>After 14 days:</strong> Requests made beyond the guarantee period</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To request a refund:
            </p>
            <ol className="text-muted-foreground space-y-1 ml-4">
              <li>1. Email us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a></li>
              <li>2. Include your name, email address, and order/receipt number</li>
              <li>3. State the reason for your refund request</li>
              <li>4. Our team will review your request within 5 business days</li>
              <li>5. If approved, refunds are processed within 7-10 business days via the original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Partial Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              In exceptional circumstances (e.g., significant service disruption on our end), we may offer partial refunds even after the 14-day period. Each case is evaluated individually.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Visa Rejection</h2>
            <p className="text-muted-foreground leading-relaxed">
              If your student visa is rejected despite following our guidance, we offer <strong>free reapplication support</strong> for your next attempt. We do not provide monetary refunds for visa rejections, as the final decision rests with immigration authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. University Rejection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee university admission. If you are not accepted into any universities, we will provide additional application support at no extra cost but do not offer refunds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update this refund policy. Changes will not affect existing customers who have already purchased services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about refunds? Email us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a> or reach out via our Telegram channel.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Need a Refund?</h3>
          <p className="text-muted-foreground mb-4">We process refund requests within 5-10 business days.</p>
          <a href="mailto:castarokio@gmail.com">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">
              Request Refund
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
