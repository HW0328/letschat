import connect_db from '$lib/db';
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const db = await connect_db()
    const posts = await db.all("SELECT * FROM posts")

    return json(posts)

}
