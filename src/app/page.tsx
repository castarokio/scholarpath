"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Star,
} from "lucide-react";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated background gradient
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-violet-100/50 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-indigo-100/50 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Hero Section
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <AnimatedBackground />
      <FloatingParticles />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm bg-white/80 backdrop-blur-sm border border-violet-200 text-violet-700 hover:bg-violet-50 transition-colors cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            New scholarships available for 2025
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block text-zinc-900">Your Gateway to</span>
          <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Global Education
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-zinc-600 mb-10 leading-relaxed"
        >
          Expert guidance for studying abroad with scholarships. Access premium courses
          and personalized consulting to achieve your academic dreams.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/study-abroad" className="flex items-center gap-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-6 text-lg shadow-xl shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </Link>
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-2 border-zinc-200 hover:border-violet-300 hover:bg-violet-50/50 transition-all duration-300"
            >
              Explore Courses
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Students Guided" },
            { value: "50+", label: "Partner Universities" },
            { value: "$2M+", label: "Scholarships Won" },
            { value: "98%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-zinc-300 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-violet-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Study Abroad",
      description: "Personalized guidance for university applications, visas, and scholarships worldwide.",
      color: "from-blue-500 to-cyan-500",
      href: "/study-abroad",
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Access exclusive scholarship opportunities and funding options for international students.",
      color: "from-violet-500 to-purple-500",
      href: "/study-abroad",
    },
    {
      icon: BookOpen,
      title: "Courses",
      description: "Premium courses on IELTS preparation, application strategies, and academic writing.",
      color: "from-emerald-500 to-teal-500",
      href: "/courses",
    },
    {
      icon: Users,
      title: "1-on-1 Consulting",
      description: "Get dedicated support from experts who have helped hundreds achieve their dreams.",
      color: "from-orange-500 to-red-500",
      href: "/study-abroad",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions designed to take you from dream to reality
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative p-8 rounded-3xl bg-white border border-zinc-200 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-600/10 transition-all duration-500"
                >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
                    <p className="text-zinc-600 mb-6">{service.description}</p>

                    <div className="flex items-center text-violet-600 font-medium">
                      Learn more
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const features = [
    "Personalized roadmap for your goals",
    "Expert consultants with 10+ years experience",
    "Proven track record of success",
    "Exclusive scholarship database access",
    "24/7 support throughout your journey",
    "Money-back guarantee on select programs",
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">Why ScholarPath</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6">
              Trusted by Students Worldwide
            </h2>
            <p className="text-zinc-600 text-lg mb-8">
              We combine expertise, technology, and personalized attention to give you
              the best chance at achieving your educational goals abroad.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-zinc-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-600 p-1">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-violet-400/30 via-purple-400/30 to-indigo-400/30 blur-3xl"
              />
              <div className="relative bg-white rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-200 to-indigo-200 border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-sm font-medium text-violet-700">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">500+ Students</div>
                    <div className="text-sm text-zinc-500">Trust ScholarPath</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { name: "Sarah M.", country: "Now at MIT", rating: 5 },
                    { name: "Ahmed K.", country: "Now at Oxford", rating: 5 },
                    { name: "Lisa T.", country: "Now at Stanford", rating: 5 },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-xl bg-zinc-50 border border-zinc-100"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-zinc-900">{testimonial.name}</span>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-zinc-500">{testimonial.country}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-12 sm:p-16 text-center overflow-hidden">
          {/* Animated background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-30"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent_50%)]" />
          </motion.div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Join hundreds of students who have achieved their dreams with ScholarPath.
              Your future starts today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/study-abroad">
                <Button
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-white/90 px-8 py-6 text-lg shadow-xl"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  View Courses
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
}
