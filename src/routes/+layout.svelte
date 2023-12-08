<script>
    import "../app.css";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";

    import "@fontsource/courier-prime"
</script>

<div>
    <Header />
    <div class="mt-3 border border-black border-dotted" />
    <main class="pt-10 pb-10">
        <slot />
    </main>
</div>

<style lang="postcss">
    :global(body) {
        font-family: "Courier Prime", sans-serif;;
    }
</style>