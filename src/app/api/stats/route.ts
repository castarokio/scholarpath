import { createClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

// GET /api/stats - Get dashboard statistics (admin only)
export async function GET() {
  try {
    const supabase = await createClient();

    // Check if user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get enrollment stats
    const { data: enrollments, error: enrollmentsError } = await supabase
      .from("enrollments")
      .select("status, created_at");

    if (enrollmentsError) {
      console.error("Supabase error:", enrollmentsError);
      return NextResponse.json(
        { error: "Failed to fetch stats" },
        { status: 500 }
      );
    }

    // Get courses count
    const { count: coursesCount, error: coursesError } = await supabase
      .from("courses")
      .select("*", { count: "exact", head: true })
      .eq("active", true);

    if (coursesError) {
      console.error("Supabase error:", coursesError);
    }

    // Calculate stats
    const totalEnrollments = enrollments?.length || 0;
    const pendingPayment = enrollments?.filter(e => e.status === "pending").length || 0;
    const paidEnrollments = enrollments?.filter(e => e.status === "paid").length || 0;
    const completedEnrollments = enrollments?.filter(e => e.status === "completed").length || 0;

    // Get this week's enrollments
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const thisWeekEnrollments = enrollments?.filter(
      e => new Date(e.created_at) > oneWeekAgo
    ).length || 0;

    // Calculate estimated revenue (mock calculation based on typical prices)
    const avgCoursePrice = 150;
    const avgProgramPrice = 600;
    const estimatedRevenue = (paidEnrollments * avgCoursePrice) + (completedEnrollments * avgProgramPrice);

    return NextResponse.json({
      stats: {
        totalEnrollments,
        pendingPayment,
        paidEnrollments,
        completedEnrollments,
        thisWeekEnrollments,
        activeCourses: coursesCount || 0,
        estimatedRevenue,
      }
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
