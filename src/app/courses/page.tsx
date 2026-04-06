"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Play,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  Loader2,
} from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  original_price: number | null;
  duration: string;
  students: number;
  rating: number;
  lessons: number;
  level: string;
  free: boolean;
  image: string | null;
  active: boolean;
}

const categories = [
  { id: "all", label: "All Courses" },
  { id: "test-prep", label: "Test Prep" },
  { id: "writing", label: "Writing" },
  { id: "strategy", label: "Strategy" },
  { id: "guide", label: "Free Guides" },
];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/courses");
      if (!response.ok) throw new Error("Failed to fetch courses");
      const data = await response.json();
      setCourses(data.courses || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = activeCategory === "all"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  const featuredCourse = courses.find(c => c.id === 1) || courses[0];

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
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              New courses added weekly
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-zinc-900">Master Your</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Academic Journey
              </span>
            </h1>

            <p className="text-xl text-zinc-600 mb-8">
              Premium courses designed by experts. From test prep to application strategies,
              everything you need to succeed.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: BookOpen, label: `${courses.length}+ Courses` },
                { icon: Users, label: "2,000+ Students" },
                { icon: Award, label: "Expert Instructors" },
                { icon: Star, label: "4.8/5 Rating" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm"
                >
                  <item.icon className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-zinc-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Course Banner */}
      {featuredCourse && (
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-600 p-8 md:p-12"
            >
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <Badge className="mb-4 bg-white/20 text-white border-0">Featured Course</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {featuredCourse.title}
                  </h2>
                  <p className="text-white/80 mb-6">
                    Our most popular course. Learn from an expert who scored Band 8.5.
                    Join 200+ students who achieved their target scores.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      <span>{featuredCourse.rating} (127 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{featuredCourse.students} students</span>
                    </div>
                  </div>
                  <Link href={`/enroll?course=${featuredCourse.id}`}>
                    <Button
                      size="lg"
                      className="bg-white text-violet-600 hover:bg-white/90"
                    >
                      Enroll Now - ${featuredCourse.price}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="hidden md:flex justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-9xl"
                  >
                    {featuredCourse.image || "🎯"}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Course Grid */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="flex-wrap h-auto gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-full px-6"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Courses */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-7xl">{course.image || "📚"}</div>
                    {course.free && (
                      <Badge className="absolute top-4 left-4 bg-emerald-500 text-white border-0">
                        FREE
                      </Badge>
                    )}
                    {!course.free && course.original_price && course.original_price > course.price && (
                      <Badge className="absolute top-4 left-4 bg-rose-500 text-white border-0">
                        -{Math.round((1 - course.price / course.original_price) * 100)}%
                      </Badge>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span>•</span>
                      <span>{course.lessons} lessons</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-violet-600 transition-colors">
                      {course.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        {course.free ? (
                          <span className="text-2xl font-bold text-emerald-600">Free</span>
                        ) : (
                          <>
                            <span className="text-2xl font-bold text-zinc-900">
                              ${course.price}
                            </span>
                            {course.original_price && course.original_price > course.price && (
                              <span className="text-sm text-zinc-400 line-through">
                                ${course.original_price}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      <Link href={`/enroll?course=${course.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-violet-600 hover:text-violet-700 hover:bg-violet-50"
                        >
                          {course.free ? "Start Free" : "Enroll"}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500">No courses found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
