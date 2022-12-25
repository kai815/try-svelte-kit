<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>SevelteKitブログ</h1>
  <ul>
  {#each data.items as item}
    <li>
      <a href="{item._id}">{item.title}</a>
    </li>
  {/each}
  </ul>
</section>

<style>
section {
  display: flex;
  flex-direction: column;
}
</style>
