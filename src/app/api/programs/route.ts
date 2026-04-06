import { createClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

// GET /api/programs - List all programs (public)
export async function GET() {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch programs" },
        { status: 500 }
      );
    }

    return NextResponse.json({ programs: data });
  } catch (error) {
    console.error("Error fetching programs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/programs - Create new program (admin only)
export async function POST(request: NextRequest) {
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

    const body = await request.json();

    const { data, error } = await supabase
      .from("programs")
      .insert(body)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to create program" },
        { status: 500 }
      );
    }

    return NextResponse.json({ program: data }, { status: 201 });
  } catch (error) {
    console.error("Error creating program:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
