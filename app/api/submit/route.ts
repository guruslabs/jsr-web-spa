import { type NextRequest } from 'next/server'

import {google} from "googleapis";

type SheetForm = {
    name: string
    email: string
    phone: string
    service: string
    message: string
}

export async function POST (
    req: NextRequest
) {
    if (req.method !== 'POST') {
        return Response.error();
    }

    const body = await req.json() as SheetForm

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email, body.phone, body.service, body.message]
                ]
            }
        });

        return Response.json(response);

    }catch (e: any) {
        return Response.json(e);
    }
}