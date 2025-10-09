-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact messages
CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view contact messages
CREATE POLICY "Only admins can view contact messages"
ON public.contact_messages
FOR SELECT
TO authenticated
USING (is_admin_user());

-- Only admins can update contact messages
CREATE POLICY "Only admins can update contact messages"
ON public.contact_messages
FOR UPDATE
TO authenticated
USING (is_admin_user());

-- Only admins can delete contact messages
CREATE POLICY "Only admins can delete contact messages"
ON public.contact_messages
FOR DELETE
TO authenticated
USING (is_admin_user());