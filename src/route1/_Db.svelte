<script>
  import { onMount } from "svelte";
  import Fa from 'svelte-fa/src/fa.svelte';
  import View from './db/View.svelte';
  import Episode from "./db/Episode.svelte";
  import Character from "./db/Character.svelte";
  import Location from "./db/Location.svelte";
  import Quote from "./db/Quote.svelte";
  // import Loader from "../lib/bs/Loader.svelte";
  import { faFilm, faBook, faTv, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
  const apiData = [
    {
      id: 0,
      name: "Episode",
      path: "episode",
      url: "https://finalspaceapi.com/api/v0/episode/",
      templ: 1,
      detail: false
    },
    {
      id: 1,
      name: "Character",
      path: "character",
      url: "https://finalspaceapi.com/api/v0/character/",
      templ: 2,
      detail: false
    },
    {
      id: 2,
      name: "Location",
      path: "location",
      url: "https://finalspaceapi.com/api/v0/location/",
      templ: 3,
      detail: false
    },
    {
      id: 3,
      name: "Quote",
      path: "quote",
      url: "https://finalspaceapi.com/api/v0/quote/",
      templ: 4,
      detail: false
    },
  ];
  const fetchData = async (url = "https://finalspaceapi.com/api/v0/episode/") => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data) return data;
      throw error;
    } catch (error) {
      alert(error);
    }
  };
  export let label = "Final-Space Api";
  export let params = {};
  let promise = fetchData();
  let temp = 0;
  let header = "Episode";
  $: if ((params && params.page) || (params && params.id)) {
    let d = apiData.find((x) => x.path === params.page);
    temp = d.templ;
    if (params.id) {
      header = d.name;
      promise = fetchData(d.url + params.id);
    } else {
      header = d.name;
      promise = fetchData(d.url);
    }
  }

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
  });
</script>

<div class="container-md">
  <section class="py-5">
    <div class="mx-auto">
      <h5 class="fs-5 fw-semibold text-info">{label}</h5>
      <h2 class="display-5 fw-bold mt-2 mb-4 text-muted">
        <span class="text-capitalize">{params.page}</span>
      </h2>
      {#each apiData as { path, name }}
        <a
          class="btn btn-outline-info d-inline-block me-1 mb-1"
          class:active={path === params.page}
          href="#/db/{path}/">{name}</a
        >
      {/each}
    </div>
  </section>

  <section>
    {#await promise}
      <div class="py-5 text-center">loading</div>
    {:then daten}
      {#if Array.isArray(daten)}
      <div class="bg-light rounded-2 mb-3 p-2">
        <div>{temp}</div>
        <pre class="my-0">{Object.keys(daten[0]).join(', ')}</pre>
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
      {:else}
        <!-- Detail Panel [daten] -->
        <article>
          {#if daten.air_date}
              <Episode d={daten} detail={true} />
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
  </section>
</div>
