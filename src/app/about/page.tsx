"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  Target,
  Heart,
  Sparkles,
  Mail,
  MessageCircle,
  ArrowRight,
  Link as LinkIcon,
  Award,
} from "lucide-react";
import Link from "next/link";
import teamData from "@/content/team.json";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your achievements. Every strategy is designed to get you results.",
  },
  {
    icon: Heart,
    title: "Student-First",
    description: "Your dreams are our priority. We personalize every approach to fit your unique journey.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We never compromise on quality. Expert guidance that you can trust every step of the way.",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "USA",
    university: "MIT",
    quote: "ScholarPath helped me secure a full scholarship to MIT. The personalized guidance made all the difference.",
    avatar: "SM",
  },
  {
    name: "Ahmed Hassan",
    country: "UK",
    university: "Oxford",
    quote: "From IELTS prep to visa application, they guided me through every step. Highly recommended!",
    avatar: "AH",
  },
  {
    name: "Lisa Chen",
    country: "Canada",
    university: "University of Toronto",
    quote: "The scholarship essay course alone was worth 10x what I paid. Landed 3 major scholarships!",
    avatar: "LC",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-6">About ScholarPath</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
              Empowering Dreams,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                One Student at a Time
              </span>
            </h1>
            <p className="text-xl text-zinc-600">
              ScholarPath was founded with a simple mission: make quality study abroad
              guidance accessible to every ambitious student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-600">
                <p>
                  After navigating the complex world of international education myself,
                  I realized how many talented students miss opportunities simply because
                  they don&apos;t have the right guidance.
                </p>
                <p>
                  ScholarPath started as a passion project to help friends and family.
                  Today, it&apos;s helped over 500 students achieve their dreams of
                  studying at top universities worldwide.
                </p>
                <p>
                  We combine personal experience, professional expertise, and genuine
                  care for every student who trusts us with their future.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
                  F
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">Founder</div>
                  <div className="text-sm text-zinc-500">Education Consultant</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Students Guided" },
                { value: "$2M+", label: "Scholarships Won" },
                { value: "50+", label: "Partner Universities" },
                { value: "30+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-zinc-200 text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-zinc-900">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white mb-4">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-zinc-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-zinc-900">Success Stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-zinc-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-zinc-500">
                          {testimonial.university}
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-600 italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/success-stories">
              <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                Read More Success Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4" variant="secondary">Our Team</Badge>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Meet Your Advisors</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Our certified consultants have helped hundreds of students achieve their study abroad dreams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    {/* Photo */}
                    <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                      <Avatar className="w-full h-full">
                        <AvatarImage src={member.photo} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-3xl">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Info */}
                    <h3 className="font-bold text-lg text-zinc-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.title}</p>

                    {/* Credentials */}
                    <div className="flex items-center justify-center gap-1 mb-3">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span className="text-xs text-zinc-500">{member.credentials}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
                      {member.bio}
                    </p>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about#contact">
              <Button variant="outline">
                Book a Consultation with Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Have questions? Reach out and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/study-abroad">
                  <Button
                    size="lg"
                    className="bg-white text-violet-600 hover:bg-white/90"
                  >
                    Explore Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/60">
                  Or contact us directly via email or WhatsApp
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
