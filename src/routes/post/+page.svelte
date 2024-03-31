<script>
    import { onMount } from 'svelte';
  
    let post = {};
    let data ={};
    let comments = [];
    
    onMount(async () => {
        const params = new URLSearchParams(window.location.search);
        const id = Object.fromEntries(params.entries()).id;
        data.postId = id
        if (id) {
            try {
                const response = await fetch(`/api/getPost?id=${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                post = await response.json();
            } catch (error) {
                console.error("Fetching post failed", error);
            }
            try {
                const res = await fetch(`/api/getComment?id=${id}`)
                if (!res.ok) {
                    throw new Error(`Error: ${res.statusText}`)
                }
                comments = await res.json()
            } catch {
                console.error("Fetching post failed", error);
            }
        }
    });
    
    const data_submit = async () => {
        if (
            data.name == undefined | 
                data.content == undefined |
                data.name == "" |
                data.content == "" 
                
        ) {
    
            alert("Please input user name and content.")
        } else {
            try {
                const res = await fetch("/api/newcomment", {
                    method : 'POST',
                    headers : {
                        'Content-type': 'application/json'
                    },
                    body : JSON.stringify(data)
                })
            } catch {
                alert("Network Error")
            }
            comments = [...comments, {name : data.name, content : data.content}]
            data.name = ""
            data.content = ""
        }
    }
</script>

<div id="post">
    <h1>{post.title}</h1>
    <h2>ID : {post.id} | Name : {post.name}</h2>
    <h2 style="white-space: pre;">{post.content}</h2>
    
    <br>
    <hr>
    <br>

    {#each comments as comment}
        <h3>{comment.name} : {comment.content}</h3>
    {/each}

    
    <br>
    <form on:submit|preventDefault={data_submit}>
        <input type="text" placeholder="Please insert name." bind:value={data.name}><br>
        <textarea type="text" placeholder="Please insert content." bind:value={data.content}></textarea><br>
        <button type="submit">Submit</button>
    </form>
</div>
  