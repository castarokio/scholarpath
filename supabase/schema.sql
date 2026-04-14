-- ScholarPath Database Schema
-- Run this in your Supabase SQL Editor
-- Updated: April 2026 - Complete schema with all tables

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

-- Scholarships table
CREATE TABLE IF NOT EXISTS scholarships (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  country TEXT NOT NULL,
  description TEXT NOT NULL,
  benefits TEXT NOT NULL,
  amount TEXT NOT NULL,
  deadline TEXT NOT NULL,
  requirements TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  degree TEXT DEFAULT 'Bachelor',
  university TEXT,
  field_of_study TEXT,
  scholarship_type TEXT DEFAULT 'Merit-Based',
  full_funding BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings table (for admin controls)
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Success Stories table
CREATE TABLE IF NOT EXISTS success_stories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  university TEXT NOT NULL,
  story TEXT NOT NULL,
  image_url TEXT,
  country TEXT,
  program_type TEXT,
  testimonial_video_url TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comments table (pending approval)
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'done')),
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
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

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

-- Allow anyone to view active scholarships
CREATE POLICY "Allow public read active scholarships" ON scholarships
  FOR SELECT TO PUBLIC USING (active = true);

-- Allow public read settings
CREATE POLICY "Allow public read settings" ON settings
  FOR SELECT TO PUBLIC USING (true);

-- Allow public read active stories
CREATE POLICY "Allow public read stories" ON success_stories
  FOR SELECT TO PUBLIC USING (active = true);

-- Allow public insert comments
CREATE POLICY "Allow public insert comments" ON comments
  FOR INSERT TO PUBLIC WITH CHECK (true);

-- Allow public insert consultations
CREATE POLICY "Allow public insert consultations" ON consultations
  FOR INSERT TO PUBLIC WITH CHECK (true);

-- Only authenticated users can update enrollments
CREATE POLICY "Allow authenticated update on enrollments" ON enrollments
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Authenticated (admin) full access to all tables
CREATE POLICY "Allow authenticated manage settings" ON settings
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated manage stories" ON success_stories
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated manage comments" ON comments
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated manage consultations" ON consultations
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Allow authenticated manage scholarships" ON scholarships
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

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

CREATE TRIGGER update_scholarships_updated_at BEFORE UPDATE ON scholarships
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_success_stories_updated_at BEFORE UPDATE ON success_stories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_consultations_updated_at BEFORE UPDATE ON consultations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default settings
INSERT INTO settings (key, value) VALUES
('students_guided', '500'),
('success_rate', '98'),
('phone_visible', 'true'),
('phone_number', '+213540211250'),
('whatsapp_link', 'https://chat.whatsapp.com/JmOSWKmyJJoLc1jw0BFtT0'),
('telegram_link', 'https://t.me/scholarpathoff'),
('email', 'castarokio@gmail.com'),
('analytics_ga4', ''),
('analytics_meta_pixel', ''),
('hotjar_id', '')
ON CONFLICT (key) DO NOTHING;

-- Insert sample scholarships
INSERT INTO scholarships (title, country, description, benefits, amount, deadline, requirements, status, degree, university, field_of_study, scholarship_type, full_funding) VALUES
('Fulbright Foreign Student Program', 'USA', 'Fully funded scholarships for graduate students to study in the United States.', 'Full tuition, living stipend, health insurance, airfare', 'Full Funding', '2026-10-01', ARRAY['Bachelor''s degree required', 'English proficiency (TOEFL/IELTS)', 'Strong academic record', 'Leadership potential'], 'open', 'Master/PhD', 'Multiple Universities', 'Various Fields', 'Merit-Based', true),
('Chevening Scholarships UK', 'UK', 'UK government''s global scholarship programme for future leaders.', 'Full tuition, monthly stipend, airfare, visa fees', 'Full Funding', '2026-11-05', ARRAY['2+ years work experience', 'Undergraduate degree', 'English language requirements', 'Return to home country for 2 years'], 'open', 'Master', 'UK Universities', 'Various Fields', 'Merit-Based', true),
('Australia Awards Scholarships', 'Australia', 'Scholarships funded by the Australian Government for developing countries.', 'Full tuition, airfare, living allowance, health cover', 'Full Funding', '2026-04-30', ARRAY['Citizen of eligible country', 'Academic excellence', 'English proficiency', 'Development impact statement'], 'open', 'Bachelor/Master', 'Australian Universities', 'Various Fields', 'Country-Specific', true),
('DAAD Scholarships Germany', 'Germany', 'Scholarships for international students to study in Germany.', 'Monthly stipend, health insurance, travel allowance', '€861/month', '2026-09-15', ARRAY['Completed bachelor degree', 'Academic excellence', 'Language requirements vary', 'Motivation letter'], 'open', 'Master/PhD', 'German Universities', 'Various Fields', 'Merit-Based', false),
('Vanier Canada Graduate Scholarships', 'Canada', 'Prestigious doctoral scholarships for students with leadership skills.', '$50,000 per year for 3 years', '$50,000/year', '2026-11-01', ARRAY['Nomination by Canadian institution', 'First-class academic average', 'Research potential', 'Leadership abilities'], 'open', 'PhD', 'Canadian Universities', 'Research Fields', 'Merit-Based', false),
('NL Scholarship Netherlands', 'Netherlands', 'Scholarship for non-EEA students studying in the Netherlands.', '€5,000 first year + remaining tuition', '€5,000 + tuition', '2026-05-01', ARRAY['Non-EEA nationality', 'Bachelor diploma', 'English proficiency', 'Apply to participating institution'], 'open', 'Bachelor/Master', 'Dutch Universities', 'Various Fields', 'Country-Specific', false);

-- Insert sample success stories
INSERT INTO success_stories (name, university, story, country, image_url, active) VALUES
('Ahmed Benali', 'University of Toronto', 'Got full scholarship through ScholarPath guidance. Changed my life! The team helped me with everything from essay writing to visa preparation. I couldn''t have done it without them.', 'Canada', NULL, TRUE),
('Sarah Mohamed', 'Imperial College London', 'From application to acceptance in 3 months. Professional service! My consultant was incredibly knowledgeable about UK universities and scholarship opportunities.', 'UK', NULL, TRUE),
('Maria Santos', 'University of Melbourne', 'ScholarPath helped me secure a 75% scholarship to study in Australia. Their IELTS course was a game-changer for my application.', 'Australia', NULL, TRUE),
('Omar Hassan', 'TU Munich', 'I was confused about studying in Germany until ScholarPath clarified everything. They helped me find English-taught programs with funding.', 'Germany', NULL, TRUE);
