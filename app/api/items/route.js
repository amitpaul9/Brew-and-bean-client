import { NextResponse } from 'next/server';
import { items } from '@/lib/data';

export async function GET() {
    return NextResponse.json(items);
}
