<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  // import Episode from "./db/Episode.svelte";
  // import Character from "./db/Character.svelte";
  // import Location from "./db/Location.svelte";
  // import Quote from "./db/Quote.svelte";
  // import Loader from "../lib/bs/Loader.svelte";
  import { faFilm, faBook, faTv, faCalendar } from '@fortawesome/free-solid-svg-icons';
  export let label = "Final-Space Api";
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
      path: "Quote",
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
  export let params = {};
  let promise = fetchData();
  let temp = 0;
  let detail = false;
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
</script>

<div class="container">
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


        <nav class="list-group list-group-flush">
          {#each daten as d, i}
            <a href="#/db/{params.page}/{d.id}" class="list-group-item list-group-item-action d-flex flex-column">
              
              {#if d.air_date}
                <header class="d-flex w-100 justify-content-between align-items-start">
                  <h3 class="mb-2">
                    <Fa icon={faTv} fw />
                    {d.name}
                  </h3>
                  <small class="text-muted">E{d.id}</small>
                </header>
                <span class="text-info"><Fa icon={faCalendar} fw /> {d.air_date}</span>
                <span><Fa icon={faFilm} fw /> {d.director}</span>
                <span><Fa icon={faBook} fw /> {d.writer}</span>
              {:else}
                <div class="d-flex w-100 justify-content-between align-items-start">
                  <h4 class="mb-1">
                    {d.name ? d.name : ''} 
                    {d.quote ? d.quote : ''}</h4>
                  <small class="text-muted">{d.id}</small>
                </div>
              {/if}
              <!-- {#if d.director}
              
              {/if}
              {#if d.writer}
              <span><Fa icon={faBook} fw /> {d.writer}</span>
              {/if} -->
            </a>
          {/each}
        </nav>
      <!-- name, air_date, director, writer, characters, img_url -->

      {:else}
        <div class="p-4 my-2 border">
          <div class="d-flex flex-column">
            <div class="d-flex w-100 justify-content-between align-items-start">
              <h4 class="mb-1">{daten.name}</h4>
              <small class="text-muted">{daten.id}</small>
            </div>
          </div>
        </div>
        <div class="py-2">
          <details>
            <div class="px-2 py-2 bg-light rounded-2">
              <pre>{JSON.stringify(daten, null, 2)}</pre>
            </div>
          </details>
        </div>
      {/if}
    {/await}
  </section>
</div>
