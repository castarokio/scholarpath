"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Play,
} from "lucide-react";
import testimonials from "@/content/testimonials.json";

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  university: string;
  country: string;
  quote: string;
  rating: number;
  hasVideo: boolean;
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide]);

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  );

  return (
    <section
      className="py-20 bg-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Student testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Quote className="w-3 h-3 mr-1" />
            What Students Say
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from real students who achieved their dreams with ScholarPath's guidance.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden lg:flex bg-background shadow-lg"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden lg:flex bg-background shadow-lg"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <motion.div
              key={`${currentIndex}-${itemsPerView}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${
                itemsPerView === 1 ? "grid-cols-1" :
                itemsPerView === 2 ? "grid-cols-1 md:grid-cols-2" :
                "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {currentTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Avatar and Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={testimonial.photo}
              alt={`${testimonial.name}'s photo`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">
              {testimonial.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {testimonial.university}
            </p>
            <Badge variant="secondary" className="mt-1 text-xs">
              {testimonial.country}
            </Badge>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote */}
        <div className="relative pl-4 border-l-2 border-primary/30 mb-4">
          <Quote className="w-4 h-4 text-primary/50 absolute -left-2.5 top-0" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            {testimonial.quote}
          </p>
        </div>

        {/* Video Badge */}
        {testimonial.hasVideo && (
          <Badge variant="outline" className="gap-1">
            <Play className="w-3 h-3" />
            Video Available
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
