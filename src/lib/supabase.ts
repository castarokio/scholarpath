import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Types for the database schema
export interface Enrollment {
  id: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
  program_id?: number;
  course_id?: number;
  status: "pending" | "paid" | "completed";
  created_at: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  original_price?: number;
  duration: string;
  lessons: number;
  level: string;
  free: boolean;
  active: boolean;
  image?: string;
  category: string;
}

export interface Program {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  spots: number;
  popular: boolean;
  features: string[];
  active: boolean;
}
