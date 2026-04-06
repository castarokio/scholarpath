-- ScholarPath Database Schema
-- Run this in your Supabase SQL Editor

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  program_id INTEGER,
  course_id INTEGER,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  original_price INTEGER,
  duration TEXT NOT NULL,
  lessons INTEGER NOT NULL DEFAULT 0,
  level TEXT NOT NULL DEFAULT 'Beginner',
  free BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  image TEXT,
  category TEXT NOT NULL,
  rating DECIMAL(2,1) DEFAULT 4.5,
  students INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Programs table (Study Abroad)
CREATE TABLE IF NOT EXISTS programs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  duration TEXT NOT NULL,
  spots INTEGER NOT NULL DEFAULT 10,
  popular BOOLEAN DEFAULT FALSE,
  features TEXT[] DEFAULT '{}',
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample courses
INSERT INTO courses (title, description, price, original_price, duration, lessons, level, free, category, rating, students) VALUES
('IELTS Mastery: Band 7+ Strategy', 'Complete preparation for IELTS Academic. Learn proven strategies from an expert who scored Band 8.5.', 199, 399, '20 hours', 45, 'All Levels', FALSE, 'test-prep', 4.9, 234),
('Scholarship Essay Writing', 'Learn to craft compelling scholarship essays that win funding. Templates and real examples included.', 99, 199, '8 hours', 22, 'Intermediate', FALSE, 'writing', 4.8, 156),
('Study Abroad 101: Complete Guide', 'Everything you need to know about studying abroad. Free course to get you started.', 0, 0, '5 hours', 15, 'Beginner', TRUE, 'guide', 4.9, 892),
('TOEFL iBT Complete Course', 'Comprehensive TOEFL preparation with practice tests, speaking drills, and writing feedback.', 179, 349, '18 hours', 38, 'All Levels', FALSE, 'test-prep', 4.7, 178),
('University Application Strategy', 'Master the art of university applications. From shortlisting to acceptance letters.', 149, 299, '12 hours', 28, 'Intermediate', FALSE, 'strategy', 4.8, 203),
('GRE Quantitative Reasoning', 'Ace the math section of GRE. Covers all topics with shortcuts and strategies.', 129, 249, '15 hours', 32, 'Advanced', FALSE, 'test-prep', 4.6, 134);

-- Insert sample programs
INSERT INTO programs (title, description, price, duration, spots, popular, features) VALUES
('Complete Study Abroad Package', 'Full-service guidance from application to arrival. Includes university selection, essay editing, visa assistance, and scholarship search.', 999, '3-6 months', 15, TRUE, ARRAY['University shortlist & matching', 'Personal statement review', 'Application strategy sessions', 'Visa documentation support', 'Scholarship application help', 'Pre-departure orientation']),
('Scholarship Hunt Pro', 'Focused on finding and winning scholarships. We will identify the best opportunities and help you craft winning applications.', 499, '1-3 months', 20, FALSE, ARRAY['Scholarship database access', '20+ matching opportunities', 'Essay writing guidance', 'Application tracking', 'Interview preparation', 'Renewal support']),
('Visa & Documentation', 'Expert help with visa applications, documentation, and interview preparation to maximize your approval chances.', 299, '2-4 weeks', 30, FALSE, ARRAY['Document checklist & review', 'DS-160 form assistance', 'Financial documentation help', 'Mock visa interviews', 'SEVIS fee guidance', 'Post-approval support']),
('IELTS Crash Course + Consulting', 'Intensive IELTS preparation combined with study abroad consulting. Get the score you need and the guidance to use it.', 649, '4-8 weeks', 25, TRUE, ARRAY['20 hours live IELTS classes', 'Mock tests & scoring', '1-on-1 speaking practice', 'Writing feedback', 'Study plan creation', 'University guidance session']);

-- Enable RLS (Row Level Security)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to create enrollments (for the enrollment form)
CREATE POLICY "Allow public insert on enrollments" ON enrollments
  FOR INSERT TO PUBLIC WITH CHECK (true);

-- Only authenticated users can view enrollments (admin)
CREATE POLICY "Allow authenticated read on enrollments" ON enrollments
  FOR SELECT TO authenticated USING (true);

-- Allow anyone to view active courses
CREATE POLICY "Allow public read active courses" ON courses
  FOR SELECT TO PUBLIC USING (active = true);

-- Allow anyone to view active programs
CREATE POLICY "Allow public read active programs" ON programs
  FOR SELECT TO PUBLIC USING (active = true);

-- Only authenticated users can update
CREATE POLICY "Allow authenticated update on enrollments" ON enrollments
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_programs_updated_at BEFORE UPDATE ON programs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
