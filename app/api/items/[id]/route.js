import { NextResponse } from 'next/server';
import { items } from '@/lib/data';

export async function GET(request, { params }) {
    const { id } = await params;
    const item = items.find((i) => i.id == id);

    if (!item) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
}
