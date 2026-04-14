"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Globe,
  GraduationCap,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Loader2,
} from "lucide-react";

interface Scholarship {
  id: number;
  title: string;
  country: string;
  description: string;
  benefits: string;
  amount: string;
  deadline: string;
  requirements: string[];
  status: "open" | "closed";
}

const destinations = [
  { name: "USA", count: "200+ universities", flag: "🇺🇸" },
  { name: "UK", count: "150+ universities", flag: "🇬🇧" },
  { name: "Canada", count: "100+ universities", flag: "🇨🇦" },
  { name: "Australia", count: "80+ universities", flag: "🇦🇺" },
  { name: "Germany", count: "60+ universities", flag: "🇩🇪" },
  { name: "Netherlands", count: "40+ universities", flag: "🇳🇱" },
];

export default function StudyAbroadPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      const response = await fetch("/api/scholarships");
      if (!response.ok) throw new Error("Failed to fetch scholarships");
      const data = await response.json();
      setScholarships(data.scholarships || []);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 bg-violet-100 text-violet-700 border-violet-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Limited spots available
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-zinc-900">Study Abroad With</span>
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>

            <p className="text-xl text-zinc-600 mb-8">
              From university selection to landing in your dream country, we guide you
              every step of the way. Join 500+ successful students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#programs">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8"
                >
                  View Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#destinations">
                <Button variant="outline" size="lg" className="px-8">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Globe, value: "30+", label: "Countries" },
              { icon: GraduationCap, value: "630+", label: "Universities" },
              { icon: DollarSign, value: "$50M+", label: "Scholarships" },
              { icon: Users, value: "500+", label: "Students" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm"
              >
                <stat.icon className="w-6 h-6 text-violet-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Top Destinations</Badge>
            <h2 className="text-3xl font-bold text-zinc-900">Where Dreams Take Flight</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-violet-300 hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-2">{dest.flag}</div>
                <div className="font-semibold text-zinc-900">{dest.name}</div>
                <div className="text-sm text-zinc-500">{dest.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Scholarships</Badge>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Available Scholarships</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Select the package that fits your needs. All programs include personalized
              support from our expert consultants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full overflow-hidden ${
                  scholarship.status === "open" ? "border-violet-300 shadow-lg shadow-violet-600/10" : "opacity-75"
                }`}>
                  <div className="absolute top-0 right-0">
                    <Badge className={`rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl border-0 ${
                      scholarship.status === "open"
                        ? "bg-emerald-500 text-white"
                        : "bg-zinc-400 text-white"
                    }`}>
                      {scholarship.status === "open" ? "Open" : "Closed"}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-zinc-900">{scholarship.country}</span>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">{scholarship.title}</h3>
                    <p className="text-zinc-600 text-sm mt-2">{scholarship.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="p-4 bg-violet-50 rounded-xl mb-4">
                      <p className="text-sm font-semibold text-violet-900">Benefits:</p>
                      <p className="text-sm text-violet-700">{scholarship.benefits}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {scholarship.amount}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Deadline: {scholarship.deadline}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {scholarship.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>

                    {scholarship.status === "open" ? (
                      <Link href={`/enroll?scholarship=${scholarship.id}`} className="w-full">
                        <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full" variant="outline">
                        Applications Closed
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {scholarships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">No scholarships available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Process</Badge>
            <h2 className="text-3xl font-bold text-zinc-900">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book a Call",
                description: "Schedule a free consultation to discuss your goals and budget.",
              },
              {
                step: "02",
                title: "Choose Program",
                description: "Select the package that best fits your needs and timeline.",
              },
              {
                step: "03",
                title: "Make Payment",
                description: "Complete payment via bank transfer or other agreed method.",
              },
              {
                step: "04",
                title: "Start Journey",
                description: "Get matched with your consultant and begin your transformation.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xl font-bold mb-4 shadow-lg shadow-violet-600/25">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
