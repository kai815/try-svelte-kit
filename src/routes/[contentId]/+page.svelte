<script lang="ts">
  import type { PageData } from "./$types";
  export let data:PageData;
</script>

<svelte:head>
  <title>data.title</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
  <h1>data.title</h1>
  {@html data.body}
</section>
<style>
h1 {
  font-size: 30px;
  font-weight: bold;
}
section :global(h2){
  font-size:20px;
  font-weight:bold;
  text-decoration: underline solid red 2px;
}

</style>
