<script>
    import { page } from "$app/stores"
</script>

<div class="flex flex-col items-center">
    <p>{$page.status} : {$page.error?.message}</p>
</div>

<style lang="postcss">
</style>