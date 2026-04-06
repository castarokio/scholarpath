"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  DollarSign,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  GraduationCap,
  LogOut,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

interface Enrollment {
  id: number;
  name: string;
  email: string;
  phone: string;
  program_id?: number;
  course_id?: number;
  status: "pending" | "paid" | "completed";
  created_at: string;
  message?: string;
}

interface Stats {
  totalEnrollments: number;
  pendingPayment: number;
  paidEnrollments: number;
  completedEnrollments: number;
  thisWeekEnrollments: number;
  activeCourses: number;
  estimatedRevenue: number;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<number | null>(null);

  const supabase = createClient();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch enrollments
      const enrollmentsRes = await fetch("/api/enrollments");
      if (!enrollmentsRes.ok) {
        if (enrollmentsRes.status === 401) {
          setError("Please sign in to access the admin dashboard");
          return;
        }
        throw new Error("Failed to fetch enrollments");
      }
      const enrollmentsData = await enrollmentsRes.json();
      setEnrollments(enrollmentsData.enrollments || []);

      // Fetch stats
      const statsRes = await fetch("/api/stats");
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData.stats);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const markAsPaid = async (id: number) => {
    try {
      setUpdating(id);
      const response = await fetch(`/api/enrollments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "paid" }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setEnrollments(enrollments.map(e =>
        e.id === id ? { ...e, status: "paid" } : e
      ));
    } catch (err) {
      console.error("Error updating enrollment:", err);
    } finally {
      setUpdating(null);
    }
  };

  const markAsCompleted = async (id: number) => {
    try {
      setUpdating(id);
      const response = await fetch(`/api/enrollments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "completed" }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setEnrollments(enrollments.map(e =>
        e.id === id ? { ...e, status: "completed" } : e
      ));
    } catch (err) {
      console.error("Error updating enrollment:", err);
    } finally {
      setUpdating(null);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">Pending Payment</Badge>;
      case "paid":
        return <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Paid</Badge>;
      case "completed":
        return <Badge variant="outline" className="text-violet-600 border-violet-200 bg-violet-50">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getProgramName = (enrollment: Enrollment) => {
    if (enrollment.program_id) {
      const programs: Record<number, string> = {
        1: "Complete Study Abroad Package",
        2: "Scholarship Hunt Pro",
        3: "Visa & Documentation",
        4: "IELTS Crash Course + Consulting",
      };
      return programs[enrollment.program_id] || "Study Abroad Program";
    }
    if (enrollment.course_id) {
      const courses: Record<number, string> = {
        1: "IELTS Mastery: Band 7+ Strategy",
        2: "Scholarship Essay Writing",
        3: "Study Abroad 101: Complete Guide",
        4: "TOEFL iBT Complete Course",
        5: "University Application Strategy",
        6: "GRE Quantitative Reasoning",
      };
      return courses[enrollment.course_id] || "Course";
    }
    return "Program";
  };

  const statCards = stats ? [
    { label: "Total Enrollments", value: stats.totalEnrollments.toString(), change: `+${stats.thisWeekEnrollments} this week`, icon: Users },
    { label: "Pending Payment", value: stats.pendingPayment.toString(), change: `${stats.pendingPayment} need follow-up`, icon: Clock },
    { label: "Revenue (Est)", value: `$${stats.estimatedRevenue.toLocaleString()}`, change: "From paid enrollments", icon: DollarSign },
    { label: "Active Courses", value: stats.activeCourses.toString(), change: "Available for enrollment", icon: BookOpen },
  ] : [];

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-violet-600 mx-auto mb-4" />
          <p className="text-zinc-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-50 pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center">
            <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">{error}</h2>
            <p className="text-zinc-600 mb-6">
              You need to be signed in to access the admin dashboard.
            </p>
            <Button onClick={() => window.location.href = "/admin/login"}>
              Sign In
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
            <p className="text-zinc-500">Manage enrollments, courses, and programs</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={fetchData} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="enrollments">Enrollments</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-zinc-500">{stat.label}</p>
                          <p className="text-3xl font-bold text-zinc-900 mt-1">
                            {stat.value}
                          </p>
                          <p className="text-sm text-zinc-500 mt-1">{stat.change}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-violet-100">
                          <stat.icon className="w-5 h-5 text-violet-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Enrollments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Enrollments</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setActiveTab("enrollments")}>
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrollments.slice(0, 3).map((enrollment, index) => (
                    <motion.div
                      key={enrollment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-zinc-50"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                            {enrollment.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-zinc-900">{enrollment.name}</p>
                          <p className="text-sm text-zinc-500">{getProgramName(enrollment)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {getStatusBadge(enrollment.status)}
                        <span className="text-sm text-zinc-400">
                          {new Date(enrollment.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                  {enrollments.length === 0 && (
                    <p className="text-center text-zinc-500 py-8">No enrollments yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enrollments Tab */}
          <TabsContent value="enrollments">
            <Card>
              <CardHeader>
                <CardTitle>All Enrollments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrollments.map((enrollment, index) => (
                    <motion.div
                      key={enrollment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-xl border border-zinc-200 hover:border-violet-300 transition-colors"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-lg">
                              {enrollment.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <p className="font-semibold text-zinc-900">{enrollment.name}</p>
                            <p className="text-sm text-zinc-600">{getProgramName(enrollment)}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-zinc-500">
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {enrollment.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                {enrollment.phone}
                              </span>
                            </div>
                            {enrollment.message && (
                              <p className="text-sm text-zinc-500 mt-2 italic">"{enrollment.message}"</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex flex-col items-end gap-2">
                            {getStatusBadge(enrollment.status)}
                            <span className="text-xs text-zinc-400">
                              {new Date(enrollment.created_at).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            {enrollment.status === "pending" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markAsPaid(enrollment.id)}
                                disabled={updating === enrollment.id}
                              >
                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                {updating === enrollment.id ? "Updating..." : "Mark Paid"}
                              </Button>
                            )}
                            {enrollment.status === "paid" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markAsCompleted(enrollment.id)}
                                disabled={updating === enrollment.id}
                              >
                                <CheckCircle2 className="w-4 h-4 mr-1" />
                                {updating === enrollment.id ? "Updating..." : "Complete"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {enrollments.length === 0 && (
                    <p className="text-center text-zinc-500 py-8">No enrollments yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab - Placeholder */}
          <TabsContent value="courses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Courses</CardTitle>
                <Button>+ Add New Course</Button>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-500 text-center py-8">
                  Course management coming soon. Use Supabase Dashboard for now.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-800 text-sm">
                    <strong>Status:</strong> Connected to Supabase. Data is now live.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl border border-zinc-200">
                    <h3 className="font-semibold text-zinc-900 mb-2">Database Connection</h3>
                    <p className="text-sm text-zinc-500">Status: <span className="text-emerald-600 font-medium">Connected</span></p>
                    <Button className="mt-4" variant="outline" disabled>
                      Connected
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200">
                    <h3 className="font-semibold text-zinc-900 mb-2">Notification Settings</h3>
                    <p className="text-sm text-zinc-500">Email notifications for new enrollments</p>
                    <Button className="mt-4" variant="outline">
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
