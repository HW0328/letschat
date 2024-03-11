import connectToDatabase from "$lib/db";
import { json } from "@sveltejs/kit";

export const POST = async (req) => {
    const db = await connectToDatabase();
    const { request } = req;
    const { postId, name, content } = await request.json();
    console.log(postId + name + content);
    db.run("INSERT INTO comments ( post_id, name, content ) VALUES (?, ?, ?)", [postId, name, content])
    
    return json({msg : "Hello, World!"});
}