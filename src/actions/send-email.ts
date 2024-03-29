'use server'

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function actionSendEmail(prevState: any, formData: FormData): Promise<{success: boolean}> {
    const schema = z.object({
        sender: z.string().min(1),
        message: z.string().min(1)
    })

    try {
        const { sender, message } = schema.parse({
            sender: formData.get('sender'),
            message: formData.get('message')
        })

        const { data, error} = await sendEmail(sender, message)
    } catch {
        return { success: false}
    }
    return { success: true }
}

async function sendEmail(sender: string, message: string) {
    return await resend.emails.send({
    from: 'Gabrportfolio <onboarding@resend.dev>',
    to: 'gabrielbuxo1@gmail.com',
    subject: 'Portfolio Email!',
    react: EmailTemplate({ sender, message }),
    text: `${sender}\n${message}`
    });
}