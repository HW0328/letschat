<!-- head -->
<svelte.head>
    <title> Let`s Chat </title>
    <!-- <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
/> -->
    <link rel="stylesheet" href="./src/routes/+style.css">
    
</svelte.head>

<!-- navbar -->
<nav>
    <a href="./">Home</a>
    <a href="/newPost">New</a>
</nav>

<!-- app -->
<div id="app">
    <slot></slot>
</div>