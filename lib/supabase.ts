import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Logika deteksi di Browser Console (Tekan F12 untuk cek)
if (typeof window !== 'undefined') {
  console.log("Menghubungkan ke Supabase URL:", supabaseUrl);
}

// Jika salah satu kosong, hentikan proses dengan pesan yang jelas
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("CRITICAL: NEXT_PUBLIC_SUPABASE_URL atau ANON_KEY tidak ditemukan di .env.local. Cek lokasi file dan restart terminal.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);