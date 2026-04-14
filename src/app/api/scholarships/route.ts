import { createClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

// GET /api/scholarships - List all scholarships (public)
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");
    const status = searchParams.get("status");

    let query = supabase
      .from("scholarships")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false });

    if (country && country !== "all") {
      query = query.eq("country", country);
    }

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch scholarships" },
        { status: 500 }
      );
    }

    return NextResponse.json({ scholarships: data });
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/scholarships - Create new scholarship (admin only)
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const { data, error } = await supabase
      .from("scholarships")
      .insert(body)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to create scholarship" },
        { status: 500 }
      );
    }

    return NextResponse.json({ scholarship: data }, { status: 201 });
  } catch (error) {
    console.error("Error creating scholarship:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
