<script>
    let data = {
        name: '',
        title: '',
        content: ''
    };
    
    async function data_submit(){
        const res = await fetch("/api/newPost", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error("Network Error")
        }
    }
</script>

<div id="upPost">
    <form on:submit|preventDefault={data_submit}>
        <input type="text" placeholder="Please insert name." bind:value={data.name}><br>
        <input type="text" placeholder="Please insert title." bind:value={data.title}><br>
        <textarea type="text" placeholder="Please insert content." bind:value={data.content}></textarea><br>
        <button type="submit">Submit</button>
    </form>
</div>