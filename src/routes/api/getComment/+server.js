import connectToDatabase from "$lib/db";
import { json } from "@sveltejs/kit";

export const GET = async (req) => {
    const post_id = req.url.searchParams.get('id');
    const db = await connectToDatabase();
    const cmt = await db.all("SELECT * FROM comments WHERE post_id = ?", post_id)
    return json(cmt)
}