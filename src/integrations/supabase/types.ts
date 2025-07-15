export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      membership_applications: {
        Row: {
          address: string
          child_1: string | null
          child_2: string | null
          child_3: string | null
          child_4: string | null
          child_5: string | null
          child_6: string | null
          created_at: string
          date_of_birth: string
          date_signed: string
          email: string
          first_name: string
          home_number: string | null
          id: string
          is_married: boolean
          member_signature: string
          mobile_number: string
          next_of_kin_mobile: string
          next_of_kin_name: string
          spouse_name: string | null
          status: string | null
          surname: string
          updated_at: string
          witness_name: string | null
        }
        Insert: {
          address: string
          child_1?: string | null
          child_2?: string | null
          child_3?: string | null
          child_4?: string | null
          child_5?: string | null
          child_6?: string | null
          created_at?: string
          date_of_birth: string
          date_signed: string
          email: string
          first_name: string
          home_number?: string | null
          id?: string
          is_married?: boolean
          member_signature: string
          mobile_number: string
          next_of_kin_mobile: string
          next_of_kin_name: string
          spouse_name?: string | null
          status?: string | null
          surname: string
          updated_at?: string
          witness_name?: string | null
        }
        Update: {
          address?: string
          child_1?: string | null
          child_2?: string | null
          child_3?: string | null
          child_4?: string | null
          child_5?: string | null
          child_6?: string | null
          created_at?: string
          date_of_birth?: string
          date_signed?: string
          email?: string
          first_name?: string
          home_number?: string | null
          id?: string
          is_married?: boolean
          member_signature?: string
          mobile_number?: string
          next_of_kin_mobile?: string
          next_of_kin_name?: string
          spouse_name?: string | null
          status?: string | null
          surname?: string
          updated_at?: string
          witness_name?: string | null
        }
        Relationships: []
      }
      venue_bookings: {
        Row: {
          agreed_to_terms: boolean
          applicant_name: string
          booking_date: string
          contact_number: string
          cost_amount: number | null
          created_at: string
          email: string
          end_time: string
          expected_attendees: number
          id: string
          needs_audio: boolean | null
          needs_chairs: boolean | null
          needs_projector: boolean | null
          needs_tables: boolean | null
          organization: string | null
          other_equipment: string | null
          purpose: string
          room_area: string | null
          start_time: string
          status: string | null
          updated_at: string
        }
        Insert: {
          agreed_to_terms?: boolean
          applicant_name: string
          booking_date: string
          contact_number: string
          cost_amount?: number | null
          created_at?: string
          email: string
          end_time: string
          expected_attendees: number
          id?: string
          needs_audio?: boolean | null
          needs_chairs?: boolean | null
          needs_projector?: boolean | null
          needs_tables?: boolean | null
          organization?: string | null
          other_equipment?: string | null
          purpose: string
          room_area?: string | null
          start_time: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          agreed_to_terms?: boolean
          applicant_name?: string
          booking_date?: string
          contact_number?: string
          cost_amount?: number | null
          created_at?: string
          email?: string
          end_time?: string
          expected_attendees?: number
          id?: string
          needs_audio?: boolean | null
          needs_chairs?: boolean | null
          needs_projector?: boolean | null
          needs_tables?: boolean | null
          organization?: string | null
          other_equipment?: string | null
          purpose?: string
          room_area?: string | null
          start_time?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
