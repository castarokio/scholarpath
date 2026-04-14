"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Star,
  Play,
  Quote,
  ArrowRight,
  Sparkles,
  Globe,
  Loader2,
} from "lucide-react";
import { createClient } from "@/lib/supabase";
import type { SuccessStory } from "@/lib/supabase";
import testimonials from "@/content/testimonials.json";

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("success_stories")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        setStories(data);
      } else {
        // Fallback to static testimonials
        setStories([]);
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-secondary/10 text-secondary border-secondary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Real Students, Real Results
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Success</span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Stories
              </span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Hear from students who achieved their dreams with ScholarPath's guidance and support.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8"
          >
            {[
              { icon: GraduationCap, value: "500+", label: "Students Placed" },
              { icon: Globe, value: "30+", label: "Countries" },
              { icon: Star, value: "98%", label: "Success Rate" },
              { icon: Quote, value: "$2M+", label: "Scholarships Won" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-background border border-border shadow-sm"
              >
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-secondary" />
            </div>
          ) : stories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedStory(story)}
                  >
                    <CardContent className="p-6">
                      {/* Avatar */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-2xl font-bold">
                          {story.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Globe className="w-3 h-3" />
                            {story.university}
                          </div>
                          {story.country && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {story.country}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative pl-4 border-l-2 border-secondary/30">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {story.story.substring(0, 150)}...
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex items-center justify-between">
                        <Button variant="ghost" size="sm" className="text-secondary">
                          Read Full Story
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                        {story.testimonial_video_url && (
                          <Button variant="outline" size="sm">
                            <Play className="w-3 h-3 mr-1" />
                            Watch
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Static Testimonials Fallback */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-6">
                      {/* Avatar */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-secondary to-primary">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Globe className="w-3 h-3" />
                            {testimonial.university}
                          </div>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {testimonial.country}
                          </Badge>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative pl-4 border-l-2 border-secondary/30">
                        <Quote className="w-4 h-4 text-secondary/50 absolute -left-2.5 top-0" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Video Badge */}
                      {testimonial.hasVideo && (
                        <div className="mt-4">
                          <Badge variant="outline" className="gap-1">
                            <Play className="w-3 h-3" />
                            Video Testimonial Available
                          </Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of students who have achieved their dreams with ScholarPath. 
              Your journey starts with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/study-abroad">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-6 text-lg shadow-lg">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about#contact">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Story details"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-3xl font-bold">
                  {selectedStory.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedStory.name}</h3>
                  <p className="text-muted-foreground">{selectedStory.university}</p>
                  {selectedStory.country && (
                    <Badge variant="secondary" className="mt-1">
                      {selectedStory.country}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="prose prose-sm max-w-none mb-6">
                <p className="text-muted-foreground leading-relaxed">{selectedStory.story}</p>
              </div>

              {selectedStory.testimonial_video_url && (
                <div className="mb-6">
                  <Badge variant="outline" className="gap-2 mb-3">
                    <Play className="w-4 h-4" />
                    Video Testimonial
                  </Badge>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src={selectedStory.testimonial_video_url}
                      className="w-full h-full"
                      allowFullScreen
                      title={`${selectedStory.name}'s video testimonial`}
                    />
                  </div>
                </div>
              )}

              <Button onClick={() => setSelectedStory(null)}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
