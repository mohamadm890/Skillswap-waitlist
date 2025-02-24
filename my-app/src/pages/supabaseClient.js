// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and public API key (you can find them in your Supabase project settings)
const supabaseUrl = process.env.NEXT_PUBLIC_API_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
