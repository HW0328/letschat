import connectToDatabase from "$lib/db";
import { json } from "@sveltejs/kit";

export async function GET(req) {
    const id = req.url.searchParams.get('id');
    const db = await connectToDatabase();
    const post = await db.get("SELECT * FROM posts WHERE id = ?", id);
    console.log(post);
    console.log(id);
    return json( post );
};