import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";

export default function GDPRPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">GDPR Compliance</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 14, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Our Commitment to GDPR</h2>
            <p className="text-muted-foreground leading-relaxed">
              ScholarPath is committed to complying with the General Data Protection Regulation (GDPR) (EU) 2016/679. This page outlines how we handle personal data of EU residents and your rights under the regulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Data Controller</h2>
            <p className="text-muted-foreground leading-relaxed">
              ScholarPath is the data controller for personal information collected through our website and services. We determine the purposes and means of processing your data.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <strong>Contact:</strong> castarokio@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Legal Basis for Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We process your data based on:</p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• <strong>Consent:</strong> When you subscribe to newsletters or opt into marketing communications</li>
              <li>• <strong>Contract:</strong> When you enroll in our services (we need your data to provide guidance)</li>
              <li>• <strong>Legitimate interests:</strong> To improve our services, prevent fraud, and ensure security</li>
              <li>• <strong>Legal obligations:</strong> To comply with tax, accounting, or regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Your Rights Under GDPR</h2>
            <ul className="text-muted-foreground space-y-2 ml-4">
              <li>• <strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
              <li>• <strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li>• <strong>Right to Erasure:</strong> Request deletion of your data ("Right to be Forgotten")</li>
              <li>• <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li>• <strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li>• <strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
              <li>• <strong>Rights Related to Automated Decision-Making:</strong> We do not use automated decision-making or profiling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. How to Exercise Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              To exercise any of your GDPR rights:
            </p>
            <ol className="text-muted-foreground space-y-1 ml-4">
              <li>1. Email us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a></li>
              <li>2. Specify which right you wish to exercise</li>
              <li>3. We will respond within 30 calendar days</li>
              <li>4. No fees apply unless requests are manifestly unfounded or excessive</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Transfers Outside the EEA</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may transfer your data outside the European Economic Area (EEA) to countries such as the United States (via Supabase and Vercel). We ensure appropriate safeguards are in place, including Standard Contractual Clauses and adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal data only as long as necessary. After account closure, data is deleted within 90 days unless we have a legal obligation to retain it longer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data, including SSL encryption, encrypted databases, access controls, and regular security audits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Supervisory Authority</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to lodge a complaint with your local supervisory authority. In the EU, you can contact your national data protection authority for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Data Processing Agreement (DPA)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are an organization using ScholarPath services, a Data Processing Agreement is available upon request. Contact us at <a href="mailto:castarokio@gmail.com" className="text-primary hover:underline">castarokio@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">Want to Delete Your Data?</h3>
          <p className="text-muted-foreground mb-4">You can request complete data removal at any time.</p>
          <a href="mailto:castarokio@gmail.com">
            <Button className="bg-gradient-to-r from-primary to-secondary text-white">
              Request Data Deletion
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
