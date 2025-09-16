-- Add missing RLS policies for volunteer_applications table
-- Allow admins to view volunteer applications
CREATE POLICY "Only admins can view volunteer applications" 
ON public.volunteer_applications 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

-- Allow admins to update volunteer applications (e.g., status changes)
CREATE POLICY "Only admins can update volunteer applications" 
ON public.volunteer_applications 
FOR UPDATE 
TO authenticated
USING (public.is_admin_user());

-- Allow admins to delete volunteer applications
CREATE POLICY "Only admins can delete volunteer applications" 
ON public.volunteer_applications 
FOR DELETE 
TO authenticated
USING (public.is_admin_user());