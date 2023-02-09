<script>
	import { fetchData, sleep } from './';
  export let url = "https://finalspaceapi.com/api/v0/character/1";
  export let delay = 0;
  const getData = async (url, delay) => {
      await sleep(delay);
      let data = await fetchData(url);
      if (data) return data; 
  };
  let promise = getData(url, delay);
</script>

{#if $$slots.loader}
  {#await promise}
    <slot name="loader" />
  {:then data}
    <slot {data} />
  {/await}
{:else}
  {#await promise then data}
    <slot {data} />
  {/await}
{/if}
