"use server";

import { Resend } from "resend";

interface INewMessage {
	email: string;
	subject: string;
	message: string;
}

export const sendEmail = async ({ email, subject, message }: INewMessage) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	if (!process.env.RESEND_FROM_EMAIL_ADDRESS) {
		throw new Error("RESEND_FROM_EMAIL_ADDRESS is not defined.");
	}

	if (!process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS) {
		throw new Error("NEXT_PUBLIC_MY_EMAIL_ADDRESS is not defined.");
	}

	await resend.emails.send({
		from: process.env.RESEND_FROM_EMAIL_ADDRESS,
		to: process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS,
		subject: `[akiomatic] New Message from ${email}`,
		html: `<p><strong>Subject:</strong> ${subject}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
	});
};
