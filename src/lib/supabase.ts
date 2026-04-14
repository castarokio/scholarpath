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
  rating?: number;
  students?: number;
  created_at: string;
  updated_at: string;
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
  created_at: string;
  updated_at: string;
}

export interface Scholarship {
  id: number;
  title: string;
  country: string;
  description: string;
  benefits: string;
  amount: string;
  deadline: string;
  requirements: string[];
  status: "open" | "closed";
  degree: string;
  university?: string;
  field_of_study?: string;
  scholarship_type: string;
  full_funding: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SuccessStory {
  id: number;
  name: string;
  university: string;
  story: string;
  image_url?: string;
  country?: string;
  program_type?: string;
  testimonial_video_url?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  id: number;
  key: string;
  value: string | null;
  updated_at: string;
}

export interface Consultation {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  status: "pending" | "done";
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  name: string;
  email: string;
  message: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}
