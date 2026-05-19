import { supabase } from "@/integrations/supabase/client";

export const authService = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  async register(email: string, password: string, name: string, profileType: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, profile_type: profileType },
        emailRedirectTo: window.location.origin,
      },
    });
    return { data, error };
  },
};