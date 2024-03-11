<script>
    import { onMount } from 'svelte';


    let posts = [];
    onMount(async () => {
        const res = await fetch("/api/post")
        if ( res.ok ) {
            posts = await res.json();
            console.log(posts)
        } else {
            console.log("occered err")
        }
    })
    

</script>

<div id="posts">
    {#each posts as post}
        <h2><a href="/post?id={post.id}">{post.title}</a></h2>
    {/each}
</div>