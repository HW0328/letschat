import connectToDatabase from "$lib/db"
import { json } from "@sveltejs/kit"

export const POST = async (req) => {
    const db = await connectToDatabase();
    const { request } = req;
    const { name, title, content } = await request.json()
    console.log(name, title, content)
    db.run("INSERT INTO posts (name, title, content) VALUES (?, ?, ?)", [name, title, content]);
    
    db.close()
    return json({name : name, title : title, content : content})
}