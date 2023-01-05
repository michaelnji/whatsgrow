// @ts-nocheck
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

// initiating supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function post({ params }) {
  //  signing up user
  let { user, error } = await supabase.auth.signUp({
    email: params.email,
    password: params.password
  });

  // if an error occurs, sends down error message
  if (error) {
    return {
      status: 400,
      body: {
        error
      }
    };
  }
  // if successful sends down a user object containing the new user's information
  return {
    status: 200,

    body: {
      user
    }
  };
}
