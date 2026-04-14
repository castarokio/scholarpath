"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Globe, DollarSign, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const destinations = [
  {
    country: "United States",
    flag: "🇺🇸",
    code: "us",
    universities: "4,000+ universities",
    avgTuition: "$25,000-$55,000/year",
    postStudyWork: "1-3 years OPT",
    visaSuccess: "85%",
    livingCost: "$10,000-$20,000/year",
    topUniversities: ["MIT", "Stanford", "Harvard", "Caltech"],
    highlights: ["World's top universities", "Diverse programs", "Strong research opportunities", "OPT work authorization"],
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=600&h=400&fit=crop",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    code: "gb",
    universities: "150+ universities",
    avgTuition: "£15,000-£38,000/year",
    postStudyWork: "2 years Graduate Route",
    visaSuccess: "90%",
    livingCost: "£12,000-£15,000/year",
    topUniversities: ["Oxford", "Cambridge", "Imperial College", "UCL"],
    highlights: ["Prestigious universities", "Shorter degrees (3 yrs)", "Graduate visa", "Rich cultural heritage"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    code: "ca",
    universities: "100+ universities",
    avgTuition: "CAD $15,000-$35,000/year",
    postStudyWork: "Up to 3 years PGWP",
    visaSuccess: "75%",
    livingCost: "CAD $10,000-$15,000/year",
    topUniversities: ["Toronto", "UBC", "McGill", "Waterloo"],
    highlights: ["Affordable education", "PR pathways", "Safe & welcoming", "Bilingual environment"],
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    code: "au",
    universities: "40+ universities",
    avgTuition: "AUD $20,000-$45,000/year",
    postStudyWork: "2-4 years",
    visaSuccess: "80%",
    livingCost: "AUD $20,000-$27,000/year",
    topUniversities: ["Melbourne", "Sydney", "ANU", "Monash"],
    highlights: ["High quality of life", "Work while studying", "Beautiful climate", "Strong job market"],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    code: "de",
    universities: "400+ universities",
    avgTuition: "€0-€3,000/year (public)",
    postStudyWork: "18 months job seeker",
    visaSuccess: "88%",
    livingCost: "€11,208/year (blocked account)",
    topUniversities: ["TU Munich", "Heidelberg", "LMU", "RWTH Aachen"],
    highlights: ["Free/low tuition", "Strong economy", "Engineering excellence", "18-month job search"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop",
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    code: "nl",
    universities: "40+ universities",
    avgTuition: "€8,000-€20,000/year",
    postStudyWork: "1 year orientation",
    visaSuccess: "92%",
    livingCost: "€800-€1,200/month",
    topUniversities: ["Amsterdam", "Delft", "Utrecht", "Leiden"],
    highlights: ["English-taught programs", "Innovation hub", "Central Europe location", "High visa approval"],
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&h=400&fit=crop",
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Badge className="mb-6" variant="secondary">
              <Globe className="w-4 h-4 mr-2" />
              Study Destinations
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Where Will Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey Take You?</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore top study destinations with detailed guides on costs, universities, and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={`${dest.country} skyline`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-3xl">{dest.flag}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{dest.country}</h3>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs">Universities</p>
                        <p className="font-medium text-foreground">{dest.universities}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs">Avg. Tuition</p>
                        <p className="font-medium text-foreground">{dest.avgTuition}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs">Post-Study Work</p>
                        <p className="font-medium text-foreground">{dest.postStudyWork}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground text-xs">Living Cost</p>
                        <p className="font-medium text-foreground">{dest.livingCost}</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Universities */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Top Universities</p>
                    <div className="flex flex-wrap gap-1">
                      {dest.topUniversities.map((u) => (
                        <Badge key={u} variant="secondary" className="text-xs">{u}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 mb-4">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/study-abroad" className="w-full">
                    <Button variant="outline" className="w-full">
                      Explore Programs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Undecided?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our consultants can help you choose the perfect destination based on your goals, budget, and preferences.
            </p>
            <Link href="/about#contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
