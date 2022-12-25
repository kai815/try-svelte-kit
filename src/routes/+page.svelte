<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  //試し
  const test = `<h2>テスト</h2>`
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>SevelteKitブログ</h1>
  {@html test}
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
