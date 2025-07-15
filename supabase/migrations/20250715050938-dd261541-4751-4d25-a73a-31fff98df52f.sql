-- Create membership applications table
CREATE TABLE public.membership_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  surname TEXT NOT NULL,
  is_married BOOLEAN NOT NULL DEFAULT false,
  spouse_name TEXT,
  date_of_birth DATE NOT NULL,
  address TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  home_number TEXT,
  email TEXT NOT NULL,
  next_of_kin_name TEXT NOT NULL,
  next_of_kin_mobile TEXT NOT NULL,
  child_1 TEXT,
  child_2 TEXT,
  child_3 TEXT,
  child_4 TEXT,
  child_5 TEXT,
  child_6 TEXT,
  member_signature TEXT NOT NULL,
  witness_name TEXT,
  date_signed DATE NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create venue bookings table
CREATE TABLE public.venue_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  applicant_name TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  purpose TEXT NOT NULL,
  booking_date DATE NOT NULL,
  expected_attendees INTEGER NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room_area TEXT,
  needs_tables BOOLEAN DEFAULT false,
  needs_chairs BOOLEAN DEFAULT false,
  needs_audio BOOLEAN DEFAULT false,
  needs_projector BOOLEAN DEFAULT false,
  other_equipment TEXT,
  agreed_to_terms BOOLEAN NOT NULL DEFAULT false,
  cost_amount DECIMAL(10,2) DEFAULT 300.00,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.venue_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies (public submissions, admin management)
CREATE POLICY "Anyone can submit membership applications" 
ON public.membership_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit venue booking requests" 
ON public.venue_bookings 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_membership_applications_updated_at
BEFORE UPDATE ON public.membership_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_venue_bookings_updated_at
BEFORE UPDATE ON public.venue_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();