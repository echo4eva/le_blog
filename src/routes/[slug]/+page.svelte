<script>
    export let data
</script>

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

<head>
    <title>{data.meta.title}</title>
</head>
<article class="flex flex-col min-w-screen items-center">
    <div class="text-xs pb-5 px-5">
        <p>pwd: <a href="/" class="underline">/brain/cache/thoughts/</a><span class="text-sm text-pink-500">{data.meta.title}</span></p>
        <p >Last Modified @ {data.meta.date}</p>
    </div>
    <div class="prose px-5">
        <svelte:component this={data.content} />
    </div>
</article>