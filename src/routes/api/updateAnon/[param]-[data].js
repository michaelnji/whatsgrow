// @ts-nocheck
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

// initiating supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function update({ params }) {
  const { data, error } = await supabase.from('Anonymous').select();

  // if an error occurs, sends down error message
  if (error) {
    return {
      status: 400,
      body: {
        error
      }
    };
  }
  //
  console.log(data);
  return {
    body: {
      data
    }
  };
}
