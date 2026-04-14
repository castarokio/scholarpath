"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  Zap,
} from "lucide-react";

const pricingTiers = [
  {
    id: "basic",
    name: "Basic",
    description: "Start your journey with essential tools",
    price: 0,
    originalPrice: null,
    popular: false,
    features: [
      { text: "Scholarship matching", included: true },
      { text: "Application checklist", included: true },
      { text: "University database access", included: true },
      { text: "Community forum access", included: true },
      { text: "Email support", included: true },
      { text: "Consultant messaging", included: false },
      { text: "Application review", included: false },
      { text: "Document templates", included: false },
      { text: "Visa preparation", included: false },
      { text: "Airport pickup coordination", included: false },
    ],
    cta: "Get Started Free",
    href: "/enroll",
    variant: "outline" as const,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Everything you need for successful applications",
    price: 199,
    originalPrice: 399,
    popular: true,
    features: [
      { text: "Scholarship matching", included: true },
      { text: "Application checklist", included: true },
      { text: "University database access", included: true },
      { text: "Community forum access", included: true },
      { text: "Priority email support", included: true },
      { text: "Consultant messaging", included: true },
      { text: "Application review", included: true },
      { text: "Document templates", included: true },
      { text: "Visa preparation", included: false },
      { text: "Airport pickup coordination", included: false },
    ],
    cta: "Start Pro Plan",
    href: "/enroll?plan=pro",
    variant: "default" as const,
  },
  {
    id: "premium",
    name: "Premium",
    description: "End-to-end support for complete peace of mind",
    price: 499,
    originalPrice: 999,
    popular: false,
    features: [
      { text: "Scholarship matching", included: true },
      { text: "Application checklist", included: true },
      { text: "University database access", included: true },
      { text: "Community forum access", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Consultant messaging", included: true },
      { text: "Application review", included: true },
      { text: "Document templates", included: true },
      { text: "Visa preparation", included: true },
      { text: "Airport pickup coordination", included: true },
    ],
    cta: "Start Premium Plan",
    href: "/enroll?plan=premium",
    variant: "default" as const,
  },
];

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards via Stripe, bank transfers, and installment plans for Premium packages. All payments are secure and encrypted.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee if we cannot match you with at least one suitable scholarship. Contact us for full terms and conditions.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes! You can upgrade from Basic to Pro or Premium at any time. Your progress and saved items will carry over seamlessly.",
  },
  {
    question: "What if my visa is rejected?",
    answer: "Premium users receive comprehensive visa preparation support with a 98% success rate. If rejected, we'll help you understand why, strengthen your application, and reapply.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Invest in Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your needs. All plans include access to our scholarship database and expert guidance.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-success" />
              <span>14-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full flex flex-col overflow-hidden ${
                  tier.popular
                    ? "border-primary shadow-2xl shadow-primary/10 scale-105"
                    : "border-border"
                }`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                      <Star className="w-3 h-3 inline mr-1" />
                      MOST POPULAR
                    </div>
                  )}

                  <CardHeader className="pb-6">
                    <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>

                    <div className="mt-4 flex items-baseline gap-2">
                      {tier.originalPrice && (
                        <span className="text-muted-foreground line-through text-lg">
                          ${tier.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-bold text-foreground">
                        ${tier.price}
                      </span>
                      {tier.price > 0 && (
                        <span className="text-muted-foreground text-sm">one-time</span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          {feature.included ? (
                            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted-foreground/50"
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={tier.href} className="w-full">
                      <Button
                        variant={tier.variant}
                        size="lg"
                        className={`w-full ${
                          tier.popular
                            ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl"
                            : ""
                        }`}
                      >
                        {tier.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-3xl bg-success/5 border border-success/20">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                14-Day Money-Back Guarantee
              </h3>
              <p className="text-muted-foreground">
                If we cannot match you with at least one suitable scholarship within 14 days, 
                we'll refund your payment in full. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-medium text-foreground pr-4">{item.question}</span>
                    <Zap
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 sm:p-16 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of students who have achieved their dreams with ScholarPath. 
                Your future starts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/study-abroad">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-xl"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/about#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
