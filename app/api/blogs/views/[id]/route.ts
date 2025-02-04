// app/api/blogs/views/[id]/route.ts
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        console.log("aq shemovida")
        const response = await fetch(
            `${process.env.API_URL}/api/blogs/${params.id}`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${process.env.API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        views: {
                            increment: 1
                        }
                    }
                })
            }
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
    }
}