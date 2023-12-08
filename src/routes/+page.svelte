<script>
    export let data
</script>

<section class="flex flex-col items-center px-5">
    <ul class="grid grid-flow-row min-w-screen">
        <p class="place-self-start text-2xl pb-5">Index of /brain/cache/thoughts</p>
        <div class="grid grid-flow-col gap-6 place-items-center border-b-2 border-black">
            <p>Name</p>
            <p>Modified</p>
            <p>Desc.</p>
        </div>
        {#each data.posts as post}
            <li class="grid grid-flow-col grid-cols-3 gap-2 place-content-between border-b border-dotted border-gray-500 py-2 break-words last:border-b-0">
                <a class="text-pink-500 underline"href={post.slug}>{post.title}</a>
                <p>{post.date}</p>
                <p>{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style lang="postcss">
</style>