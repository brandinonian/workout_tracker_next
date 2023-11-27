import { tursoClient } from "@/utils/backend/tursoClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const { name, weight, duration, repetitions } = Object.fromEntries(formData);

    // Create redirect url
    const addNewUrl = req.nextUrl.clone();
    addNewUrl.pathname = '/add-new';

    if (
        typeof name !== 'string' ||
        typeof weight !== 'number' ||
        typeof weight !== 'string' ||
        typeof duration !== 'number' ||
        typeof duration !== 'string' ||
        typeof repetitions !== 'number' ||
        typeof repetitions !== 'string'
    ) {
        return NextResponse.redirect(addNewUrl + '?error=Wrong Types', {
            status: 422,
        });
    }

    const add = await tursoClient().execute({
        sql: 'insert into completed_exercises(timestamp, name, weight_lbs, duration_seconds, repetitions) values(NOW(), ?, ?, ?, ?);',
        args: [name, weight, duration, repetitions],
    });

    return NextResponse.redirect(addNewUrl + '?message=Exercise added!', {
        status: 302,
    });
}