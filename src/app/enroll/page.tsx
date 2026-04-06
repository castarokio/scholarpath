"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Send,
  Phone,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function EnrollPage() {
  const searchParams = useSearchParams();
  const program = searchParams.get("program");
  const course = searchParams.get("course");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProgramName = () => {
    if (program) {
      const programs: Record<string, string> = {
        "study-1": "Complete Study Abroad Package",
        "study-2": "Scholarship Hunt Pro",
        "study-3": "Visa & Documentation",
        "study-4": "IELTS Crash Course + Consulting",
      };
      return programs[program] || "Study Abroad Program";
    }
    if (course) {
      const courses: Record<string, string> = {
        "1": "IELTS Mastery: Band 7+ Strategy",
        "2": "Scholarship Essay Writing",
        "3": "Study Abroad 101: Complete Guide",
        "4": "TOEFL iBT Complete Course",
        "5": "University Application Strategy",
        "6": "GRE Quantitative Reasoning",
      };
      return courses[course] || "Course";
    }
    return "Program";
  };

  const getProgramId = () => {
    if (program) {
      return parseInt(program.replace("study-", ""));
    }
    return null;
  };

  const getCourseId = () => {
    if (course) {
      return parseInt(course);
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          program_id: getProgramId(),
          course_id: getCourseId(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enrollment");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50/50 to-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Link
                href={program ? "/study-abroad" : "/courses"}
                className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {program ? "Study Abroad" : "Courses"}
              </Link>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Badge className="mb-4 bg-white/20 text-white border-0">
                      Enrollment Request
                    </Badge>
                    <h1 className="text-2xl font-bold">{getProgramName()}</h1>
                    <p className="text-white/80 mt-2">
                      Fill in your details and we&apos;ll contact you within 24 hours
                    </p>
                  </motion.div>
                </CardHeader>

                <CardContent className="p-8">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-700">{error}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-zinc-400" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-2"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-zinc-400" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-zinc-400" />
                        Phone Number (WhatsApp)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-zinc-400" />
                        Additional Message (Optional)
                      </Label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us more about your goals..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2 w-full px-3 py-2 rounded-md border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Request
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <Card className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-zinc-900 mb-4"
                >
                  Request Submitted!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-zinc-600 mb-8 max-w-md mx-auto"
                >
                  Thank you, {formData.name}! We&apos;ve received your enrollment request
                  for {getProgramName()}. Our team will contact you at{" "}
                  {formData.phone} within 24 hours to discuss payment and next steps.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-violet-50 border border-violet-200">
                    <p className="text-sm text-violet-800">
                      <strong>What happens next?</strong>
                    </p>
                    <ul className="text-sm text-violet-700 mt-2 space-y-1 text-left">
                      <li>1. We&apos;ll review your request</li>
                      <li>2. Contact you via WhatsApp/Email</li>
                      <li>3. Confirm payment details</li>
                      <li>4. Grant access to your program</li>
                    </ul>
                  </div>

                  <Link href="/">
                    <Button variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </motion.div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
