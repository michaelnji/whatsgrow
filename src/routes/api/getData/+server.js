/* eslint-disable no-unused-vars */
// @ts-nocheck
import dotenv from 'dotenv';
import vCardsJS from 'vcards-js';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

// initiating supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const GET = async (params) => {
	//Gets the anonymous information from the Anonymous table in the database
	const { data, error } = await supabase.from('Anonymous').select();

	// if an error occurs, sends down error as a response object
	if (error) {
		const finalData = JSON.stringify({
			data: [{ vcf_content: '', total_files: 0, total_gained: 0 }]
		});
		return new Response(finalData);
	}

	//returns the anonymous information from the Anonymous table in the database
	const finalData = JSON.stringify(data);
	return new Response(Object(finalData));
};
