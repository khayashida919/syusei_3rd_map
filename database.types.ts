export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "3rd-map": {
        Row: {
          address: string
          created_at: string
          googleLink: string
          id: number
          isOpen: boolean
          lat: number
          lng: number
          memo: string
          name: string
          state: Database["public"]["Enums"]["state"]
        }
        Insert: {
          address?: string
          created_at?: string
          googleLink?: string
          id?: number
          isOpen?: boolean
          lat?: number
          lng?: number
          memo?: string
          name?: string
          state?: Database["public"]["Enums"]["state"]
        }
        Update: {
          address?: string
          created_at?: string
          googleLink?: string
          id?: number
          isOpen?: boolean
          lat?: number
          lng?: number
          memo?: string
          name?: string
          state?: Database["public"]["Enums"]["state"]
        }
        Relationships: []
      }
      relate: {
        Row: {
          createdAt: string
          fromUserId: number
          id: number
          toUserId: number
        }
        Insert: {
          createdAt?: string
          fromUserId: number
          id?: number
          toUserId: number
        }
        Update: {
          createdAt?: string
          fromUserId?: number
          id?: number
          toUserId?: number
        }
        Relationships: [
          {
            foreignKeyName: "relate_fromUserId_fkey"
            columns: ["fromUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "relate_toUserId_fkey"
            columns: ["toUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          company: string
          createdAt: string | null
          hurigana: string
          iconUrl: string | null
          id: number
          meishiBackUrl: string | null
          meishiFrontUrl: string | null
          name: string
          role: string
          userUid: string
        }
        Insert: {
          company?: string
          createdAt?: string | null
          hurigana?: string
          iconUrl?: string | null
          id?: number
          meishiBackUrl?: string | null
          meishiFrontUrl?: string | null
          name?: string
          role?: string
          userUid?: string
        }
        Update: {
          company?: string
          createdAt?: string | null
          hurigana?: string
          iconUrl?: string | null
          id?: number
          meishiBackUrl?: string | null
          meishiFrontUrl?: string | null
          name?: string
          role?: string
          userUid?: string
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
      state: "full" | "low" | "empty"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
