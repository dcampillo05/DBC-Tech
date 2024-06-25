import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Variáveis de ambiente SUPABASE_URL ou SUPABASE_KEY não definidas.");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
