"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Globe, FileText, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const visaGuides = [
  {
    country: "USA",
    visaType: "F-1 Student Visa",
    flag: "🇺🇸",
    processingTime: "2-4 weeks",
    cost: "$160 + SEVIS $350",
    steps: [
      "Receive I-20 from university",
      "Pay SEVIS I-901 fee ($350)",
      "Complete DS-160 form online",
      "Schedule visa interview at US embassy",
      "Attend interview with required documents",
      "Wait for visa processing (2-4 weeks)",
    ],
    documents: ["Valid passport", "I-20 form", "DS-160 confirmation", "Financial proof", "Academic transcripts", "SEVIS receipt"],
    tips: "Demonstrate strong ties to home country. Show sufficient funds for at least one year of study.",
  },
  {
    country: "UK",
    visaType: "Student Visa (formerly Tier 4)",
    flag: "🇬🇧",
    processingTime: "3-8 weeks",
    cost: "£363 + Healthcare surcharge",
    steps: [
      "Receive Confirmation of Acceptance (CAS) from university",
      "Apply online via UK Visas and Immigration",
      "Pay application fee and healthcare surcharge",
      "Book biometrics appointment",
      "Attend visa appointment with documents",
      "Receive decision via email",
    ],
    documents: ["Valid passport", "CAS letter", "Financial proof", "TB test results", "Academic certificates", "English proficiency test"],
    tips: "Show funds held for at least 28 consecutive days. Include living costs (£1,334/month for London).",
  },
  {
    country: "Canada",
    visaType: "Study Permit",
    flag: "🇨🇦",
    processingTime: "4-12 weeks",
    cost: "CAD $150",
    steps: [
      "Receive Letter of Acceptance from designated learning institution",
      "Apply online via IRCC portal or at Visa Application Centre",
      "Submit biometrics if required",
      "Undergo medical exam (if required)",
      "Wait for processing",
      "Receive Port of Entry letter",
    ],
    documents: ["Valid passport", "Letter of Acceptance", "Financial proof", "Statement of purpose", "Police certificate", "Medical exam results"],
    tips: "Write a strong study plan explaining why you chose Canada and how it aligns with career goals.",
  },
  {
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    flag: "🇦🇺",
    processingTime: "4-6 weeks",
    cost: "AUD $650",
    steps: [
      "Receive Confirmation of Enrollment (CoE) from university",
      "Create ImmiAccount online",
      "Complete visa application (Form 157A)",
      "Pay visa fee",
      "Upload required documents",
      "Attend health examination if required",
    ],
    documents: ["Valid passport", "CoE", "Genuine Temporary Entrant statement", "Financial proof", "English proficiency", "Health insurance (OSHC)"],
    tips: "Write a compelling GTE statement explaining genuine intent to study and return home.",
  },
  {
    country: "Germany",
    visaType: "Student Visa / Student Applicant Visa",
    flag: "🇩🇪",
    processingTime: "6-12 weeks",
    cost: "€75",
    steps: [
      "Receive university admission letter",
      "Open blocked account (€11,208/year)",
      "Book appointment at German embassy",
      "Submit visa application with documents",
      "Attend interview if required",
      "Receive visa (valid for 3-6 months)",
      "Convert to residence permit after arrival",
    ],
    documents: ["Valid passport", "University admission", "Blocked account proof", "Health insurance", "Academic transcripts", "Motivation letter"],
    tips: "Apply 3 months before intended travel. Blocked account is mandatory for most applicants.",
  },
  {
    country: "Netherlands",
    visaType: "MVV (Entry Visa) + Residence Permit",
    flag: "🇳🇱",
    processingTime: "4-8 weeks",
    cost: "€174",
    steps: [
      "Receive admission from university",
      "University applies for MVV on your behalf",
      "Wait for IND (Immigration Service) decision",
      "Collect MVV from Dutch embassy",
      "Travel to Netherlands",
      "Collect residence permit after arrival",
    ],
    documents: ["Valid passport", "Admission letter", "Financial proof", "Health insurance", "TB test (if required)", "Criminal record check"],
    tips: "University handles most of the process. Ensure your passport is valid for at least 12 months.",
  },
];

export default function VisaGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Link href="/resources" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            <Badge className="mb-6" variant="secondary">
              <FileText className="w-4 h-4 mr-2" />
              Complete Visa Guide
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Student Visa</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Step-by-Step Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about applying for student visas to popular study destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country Guides */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {visaGuides.map((guide, index) => (
            <motion.div
              key={guide.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-muted/50 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{guide.flag}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{guide.country}</h2>
                          <p className="text-muted-foreground">{guide.visaType}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{guide.processingTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="w-4 h-4" />
                        <span>{guide.cost}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Steps */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        Application Steps
                      </h3>
                      <ol className="space-y-3">
                        {guide.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground text-sm pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Documents & Tips */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          Required Documents
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {guide.documents.map((doc) => (
                            <Badge key={doc} variant="outline" className="text-xs">{doc}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                        <div className="flex gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-amber-900 dark:text-amber-200 text-sm">Pro Tip</p>
                            <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">{guide.tips}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Help with Your Visa?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our visa experts can guide you through the entire process. Book a free consultation today.
            </p>
            <Link href="/about#contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
