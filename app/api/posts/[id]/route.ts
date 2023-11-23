import {NextResponse} from 'next/server';
import {headers, cookies} from 'next/headers';
// import {redirect} from "next/navigation";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;

    const headersList = headers();
    const type = headersList.get('Content-Type');
    const cookiesList = cookies();
    const cookieValue = cookiesList.get('Cookie_1')?.value;

    // here should be written logic delete post

    // or/and returned data
    return NextResponse.json({ id, type, cookieValue });

    // redirect('/blog');
}