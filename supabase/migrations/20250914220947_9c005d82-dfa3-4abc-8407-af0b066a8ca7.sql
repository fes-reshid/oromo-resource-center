-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- For now, return false since no authentication is implemented
  -- This will need to be updated when authentication and user roles are added
  RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;