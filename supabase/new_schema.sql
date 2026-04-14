-- Complete Schema for ScholarPath

-- Drop existing tables if needed (be careful in production)
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS success_stories CASCADE;
DROP TABLE IF EXISTS consultations CASCADE;
DROP TABLE IF EXISTS settings CASCADE;

-- Settings table (for admin controls)
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings
INSERT INTO settings (key, value) VALUES
('students_guided', '0'),
('success_rate', '85'),
('phone_visible', 'true'),
('phone_number', '+213540211250'),
('whatsapp_link', 'https://chat.whatsapp.com/JmOSWKmyJJoLc1jw0BFtT0'),
('telegram_link', 'https://t.me/scholarpathoff'),
('email', 'castarokio@gmail.com')
ON CONFLICT (key) DO NOTHING;

-- Success Stories table
CREATE TABLE IF NOT EXISTS success_stories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  university TEXT NOT NULL,
  story TEXT NOT NULL,
  image_url TEXT,
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

-- Update scholarships table (already exists, add if not)
ALTER TABLE IF EXISTS scholarships
ADD COLUMN IF NOT EXISTS degree TEXT DEFAULT 'Bachelor';

-- Insert sample success stories
INSERT INTO success_stories (name, university, story, active) VALUES
('Ahmed Benali', 'University of Toronto', 'Got full scholarship through ScholarPath guidance. Changed my life!', TRUE),
('Sarah Mohamed', 'Imperial College London', 'From application to acceptance in 3 months. Professional service!', TRUE)
ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Policies for public read
CREATE POLICY "Allow public read settings" ON settings FOR SELECT TO PUBLIC USING (true);
CREATE POLICY "Allow public read stories" ON success_stories FOR SELECT TO PUBLIC USING (active = true);
CREATE POLICY "Allow public insert comments" ON comments FOR INSERT TO PUBLIC WITH CHECK (true);
CREATE POLICY "Allow public insert consultations" ON consultations FOR INSERT TO PUBLIC WITH CHECK (true);

-- Policies for authenticated (admin) full access
CREATE POLICY "Allow authenticated manage all" ON settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated manage stories" ON success_stories FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated manage comments" ON comments FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated manage consultations" ON consultations FOR ALL TO authenticated USING (true) WITH CHECK (true);
