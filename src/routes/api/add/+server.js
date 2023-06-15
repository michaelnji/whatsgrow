/* eslint-disable no-unused-vars */
// @ts-nocheck
import dotenv from 'dotenv';
import vCardsJS from 'vcards-js';
import { v4 as uuidv4 } from 'uuid';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

// initiating supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }) {
	if (params.name === 'create' && params.phone === '06') {
		//create a new vCard
		var vCard = vCardsJS();
		//SELECT ALL CONTACTS
		const { data, error } = await supabase.from('VERIFIED_USERS').select();
		//populating vcard file
		var finalVcard = '';
		data.forEach((e) => {
			vCard.cellPhone = e.phone;
			vCard.firstName = '🎱' + e.name + ' WG';
			finalVcard = finalVcard + vCard.getFormattedString();
		});

		if (error) {
			return error;
		}

		// uploading to supabase
		var assetName = `public/vCard_0${uuidv4(10)}.vcf`;
		const { currentVCF, error1 } = await supabase.storage
			.from('vcffiles')
			.upload(assetName, finalVcard, {
				cacheControl: '3600',
				upsert: false
			});
		if (error1) {
			return error1;
		}

		// updating anonymous stats
		const { data: total_file, ar } = await supabase.from('Anonymous').select('total_files');

		const { final_total_files, far } = await supabase
			.from('Anonymous')
			.update({ total_files: total_file[0].total_files + 1 })
			.eq('id', 4)
			.select();

		const { vcfC, error2 } = await supabase
			.from('Anonymous')
			.update({ vcf_content: finalVcard })
			.eq('id', 4)
			.select();

		const { data: total_users, err } = await supabase.from('Anonymous').select('total_gained');

		const { final_total_users, er } = await supabase
			.from('Anonymous')
			.update({ total_gained: total_users[0].total_gained + data.length })
			.eq('id', 4)
			.select();

		const finalData = JSON.stringify(vcfC);
		return new Response(Object(finalData));
	} else if (params.name === 'delete' && params.phone === '09') {
		// deleting data for new batch to start
		const { vcfC, error2 } = await supabase
			.from('Anonymous')
			.update({ vcf_content: null })
			.eq('id', 4)
			.select();
		const { error } = await supabase.from('VERIFIED_USERS').delete().eq('isVIP', false);
		console.log(error);
		if (error || error2) return error || error2;
		const finalData = JSON.stringify(vcfC);
		return new Response(Object(finalData));
	} else {
		//  signing up user
		const { data, error } = await supabase
			.from('VERIFIED_USERS')
			.insert({ name: params.name, phone: params.phone })
			.select();

		// if an error occurs, sends down error message
		if (error) {
			return {
				status: 400,
				body: {
					error,
					message: 'An error occurred.'
				}
			};
		}
		// if successful sends down a user object containing the new user's information
		const finalData = JSON.stringify(data);
		return new Response(Object(finalData));
	}
}
