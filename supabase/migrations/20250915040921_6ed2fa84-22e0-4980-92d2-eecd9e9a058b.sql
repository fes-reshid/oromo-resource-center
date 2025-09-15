-- Fix membership_applications security by adding proper SELECT policies
-- Create SELECT policy that only allows authenticated admin users to view membership applications
CREATE POLICY "Only admins can view membership applications" 
ON public.membership_applications 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

-- Create UPDATE policy for admins to update application status
CREATE POLICY "Only admins can update membership applications" 
ON public.membership_applications 
FOR UPDATE 
TO authenticated
USING (public.is_admin_user());

-- Create DELETE policy for admins (if needed for data management)
CREATE POLICY "Only admins can delete membership applications" 
ON public.membership_applications 
FOR DELETE 
TO authenticated
USING (public.is_admin_user());