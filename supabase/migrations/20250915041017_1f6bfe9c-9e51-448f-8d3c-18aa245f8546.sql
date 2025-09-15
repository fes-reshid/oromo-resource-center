-- Fix enrollments security by adding proper SELECT policies  
-- Create SELECT policy that only allows authenticated admin users to view enrollment applications
CREATE POLICY "Only admins can view enrollment applications" 
ON public.enrollments 
FOR SELECT 
TO authenticated
USING (public.is_admin_user());

-- Create UPDATE policy for admins to update enrollment status
CREATE POLICY "Only admins can update enrollment applications" 
ON public.enrollments 
FOR UPDATE 
TO authenticated
USING (public.is_admin_user());

-- Create DELETE policy for admins (if needed for data management)
CREATE POLICY "Only admins can delete enrollment applications" 
ON public.enrollments 
FOR DELETE 
TO authenticated
USING (public.is_admin_user());