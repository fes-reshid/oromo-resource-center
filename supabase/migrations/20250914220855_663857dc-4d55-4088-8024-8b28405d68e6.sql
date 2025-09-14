-- Fix venue_bookings security by adding proper SELECT policies
-- First, create a security definer function to check if user has admin role
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- For now, return false since no authentication is implemented
  -- This will need to be updated when authentication and user roles are added
  RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Create SELECT policy that only allows authenticated admin users to view bookings
CREATE POLICY "Only admins can view venue bookings" 
ON public.venue_bookings 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

-- Create UPDATE policy for admins to update booking status
CREATE POLICY "Only admins can update venue bookings" 
ON public.venue_bookings 
FOR UPDATE 
TO authenticated
USING (public.is_admin_user());

-- Create DELETE policy for admins (if needed for cancellations)
CREATE POLICY "Only admins can delete venue bookings" 
ON public.venue_bookings 
FOR DELETE 
TO authenticated
USING (public.is_admin_user());