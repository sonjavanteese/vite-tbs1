<script>
  /* import App2 from "./route2/App2.svelte";
  import App1 from "./App1.svelte"; */
  import App3 from "./route1/App3.svelte";
  // let current = 2;
  // const setPage = (i = 0) => (current = i);
</script>

<!-- {#if current == 1}
  <App2 {setPage} />
{:else if current == 2} -->
  <App3 />
<!-- {:else}
  <App1>
    <div class="text-center">
      <button type="button" class="btn btn-primary" on:click={() => setPage(1)}>Layout 1</button>
      <button type="button" class="btn btn-primary" on:click={() => setPage(2)}>Layout 2</button>
    </div>
  </App1>
{/if} -->
