"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  FileText,
  Play,
  Search,
  Download,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Mail,
  Send,
  ChevronDown,
  Zap,
  MessageCircle,
} from "lucide-react";
import faqData from "@/content/faq.json";

const blogArticles = [
  {
    id: 1,
    title: "How to Write a Winning Statement of Purpose (SOP)",
    excerpt: "Learn the proven framework that helped our students get accepted to top universities. Includes real examples and templates.",
    category: "Applications",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
    slug: "write-winning-sop",
  },
  {
    id: 2,
    title: "Visa Interview Tips: What Officers Really Want to Hear",
    excerpt: "Former visa officers share insider tips on how to ace your interview and avoid common mistakes that lead to rejections.",
    category: "Visa Guide",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    slug: "visa-interview-tips",
  },
  {
    id: 3,
    title: "Budgeting for Study Abroad: Complete Financial Guide",
    excerpt: "Everything you need to know about funding your international education, from scholarships to part-time work options.",
    category: "Finance",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    slug: "budgeting-study-abroad",
  },
  {
    id: 4,
    title: "IELTS vs TOEFL: Which Test Should You Take?",
    excerpt: "A comprehensive comparison to help you choose the right English proficiency test for your target universities.",
    category: "Test Prep",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
    slug: "ielts-vs-toefl",
  },
  {
    id: 5,
    title: "Top 10 Scholarships for International Students in 2026",
    excerpt: "Discover the most lucrative scholarship opportunities available this year, with application deadlines and requirements.",
    category: "Scholarships",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
    slug: "top-scholarships-2026",
  },
  {
    id: 6,
    title: "Choosing the Right Country: Study Abroad Comparison",
    excerpt: "Compare costs, opportunities, and quality of life across popular study destinations to make an informed decision.",
    category: "Destinations",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=400&fit=crop",
    slug: "country-comparison",
  },
];

const downloadableGuides = [
  {
    id: 1,
    title: "Country Comparison Checklist",
    description: "Compare costs, universities, visa requirements, and opportunities across 30+ countries",
    format: "PDF",
    size: "2.4 MB",
    icon: FileText,
  },
  {
    id: 2,
    title: "Scholarship Application Timeline",
    description: "Month-by-month guide to maximize your scholarship applications throughout the year",
    format: "PDF",
    size: "1.8 MB",
    icon: FileText,
  },
  {
    id: 3,
    title: "SOP Templates & Examples",
    description: "10 winning statement of purpose templates from successful applicants",
    format: "PDF",
    size: "3.1 MB",
    icon: FileText,
  },
  {
    id: 4,
    title: "Visa Documentation Checklist",
    description: "Complete list of required documents for student visas in USA, UK, Canada, and Australia",
    format: "PDF",
    size: "1.2 MB",
    icon: FileText,
  },
];

const videoLibrary = [
  {
    id: 1,
    title: "How to Use ScholarPath Platform",
    description: "Quick walkthrough of all features",
    duration: "3:45",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504ff?w=600&h=340&fit=crop",
  },
  {
    id: 2,
    title: "5 Scholarship Essay Mistakes to Avoid",
    description: "Common errors that cost students funding",
    duration: "8:20",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Visa Interview Mock Session",
    description: "Real interview scenario with commentary",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=340&fit=crop",
  },
];

export default function ResourcesPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubmitted(true);
      setEmail("");
      // TODO: Send to your email service
    }
  };

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
              <BookOpen className="w-4 h-4 mr-2" />
              Resource Hub
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Everything You Need to</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Succeed Abroad
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Expert guides, templates, and resources to help you navigate every step of your study abroad journey.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search guides, articles, templates..."
                className="pl-12 h-14 text-lg"
                aria-label="Search resources"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Articles */}
      <section id="articles" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Latest Articles</Badge>
            <h2 className="text-3xl font-bold text-foreground">Expert Guides & Tips</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section id="guides" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Free Downloads</Badge>
            <h2 className="text-3xl font-bold text-foreground">Guides & Templates</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadableGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                      <guide.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{guide.format} • {guide.size}</span>
                        <Button variant="outline" size="sm" className="h-7 text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library */}
      <section id="videos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Video Library</Badge>
            <h2 className="text-3xl font-bold text-foreground">Learn by Watching</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoLibrary.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                        <Play className="w-6 h-6 text-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
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

          <div className="space-y-6">
            {faqData.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => (
                    <Card key={qIndex} className="overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(`${catIndex}-${qIndex}`)}
                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent/50 transition-colors"
                        aria-expanded={activeFaq === `${catIndex}-${qIndex}`}
                      >
                        <span className="font-medium text-foreground pr-4 text-sm sm:text-base">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            activeFaq === `${catIndex}-${qIndex}` ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeFaq === `${catIndex}-${qIndex}` ? "auto" : 0,
                          opacity: activeFaq === `${catIndex}-${qIndex}` ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-muted-foreground">
                          {item.answer}
                        </div>
                      </motion.div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-12 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Get Weekly Study Abroad Tips
              </h2>
              <p className="text-white/90 mb-6">
                Join 5,000+ students receiving expert advice, scholarship alerts, and exclusive resources.
              </p>

              {newsletterSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                >
                  <Zap className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">You're in! Check your inbox for confirmation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                    aria-label="Email for newsletter"
                  />
                  <Button type="submit" className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </form>
              )}

              <p className="text-white/70 text-xs mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://t.me/castarokio" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on Telegram
                </Button>
              </Link>
              <Link href="mailto:castarokio@gmail.com">
                <Button variant="outline" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </Link>
              <Link href="/study-abroad">
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
