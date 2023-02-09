<script>
  import { onMount } from "svelte";
  import { fetchData, View, Episode, Character, Location, Quote, apiData } from './db';
  import Loader from "../lib/bs/Loader.svelte";
  const getData = async (url = "https://finalspaceapi.com/api/v0/episode/") => {
    let data = await fetchData(url);
      if (data) return data;
  };
  export let label = "Final-Space Api";
  export let params = {};
  let promise = getData();
  let header = "Episoden";
  $: if ((params && params.page) || (params && params.id)) {
    let obj = apiData.find((x) => x.page === params.page);
    let url = obj.url ? obj.url : 'https://finalspaceapi.com/api/v0/episode/';
    header = obj.name;
    if (params.id) {
      promise = getData(url + params.id);
    } else {
      promise = getData(url);
    }
  }
  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
  });
</script>

<div class="container-md">
  <header class="py-5">
    <div class="mx-auto">
      <h5 class="fs-5 fw-semibold text-info">{label}</h5>
      <h2 class="display-5 fw-bold mt-2 mb-4 text-muted">
        <span class="text-capitalize">{params.page ? params.page : 'Error Params Page'}</span>
      </h2>
      {#each apiData as { path, name }}
        <a
          class="btn btn-outline-info d-inline-block me-1 mb-1"
          class:active={path === params.page}
          href="#/db/{path}/">{name}</a>
      {/each}
    </div>
  </header>
  {#await promise}
    <Loader />
  {:then daten}
    {#if Array.isArray(daten)}
      <section>
        <div class="bg-light rounded-2 mb-3 p-2">
          <div>{header}</div>
        </div>
        <!-- List Panel [d] -->
        <nav class="list-group list-group-flush">
          {#each daten as d, i}
            <a href="#/db/{params.page}/{d.quote ? '' : d.id}" class="list-group-item list-group-item-action d-flex flex-column py-3 px-3">
              {#if d.air_date}
                <Episode d={d} detail={false} />
              {:else if d.type}
                <Location d={d} detail={false} />         
              {:else if d.origin}
                <Character d={d} detail={false} />   
              {:else if d.quote}
                <Quote d={d} detail={false} />        
              {:else}
                <View d={d} detail={false} />
              {/if}
            </a>
          {/each}
        </nav>
      </section>
    {:else}
      <!-- Detail Panel [daten] -->
      <article>
        {#if daten.air_date}
          <Episode d={daten} detail={true} on:clicked={(e) => { console.log('CLICKED: ', e.detail) }} />
        {:else if daten.type}
          <Location d={daten} detail={true} />      
        {:else if daten.origin}
          <Character d={daten} detail={true} />        
        {:else}
          <View d={daten} detail={true} />
        {/if}
      </article>        
    {/if}
  {/await}
</div>