<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faBook, faTv, faCalendar, faList, faUserFriends } from '@fortawesome/free-solid-svg-icons';
  import Collapse from "../../lib/bs/Collapse.svelte";
  import JsonPanel from "./JsonPanel.svelte";
  import ApiFetcher from "./ApiFetcher.svelte";
  export let detail = false;
  export let d = {};
  const handleClick = (e) => {
      let eobj = {
        title: 'OnClick',
        node: e.currentTarget
      }
      dispatch("clicked", eobj);
  };
</script>
{#if d.air_date}
{#if !detail}
  <!-- List Item {id, name, air_date, director, writer, characters, img_url} -->
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h5 class="fs-2 mb-2">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faTv} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h5>
    <span class="fs-6 badge rounded-pill text-bg-danger">
      <span class="">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column ps-0">
    <span class="text-secondary fs-6"><Fa icon={faCalendar} fw /> {d.air_date}</span>
    <span class="text-secondary"><Fa icon={faList} fw /> {d.id}</span>
  </article> 
{:else}
  <!-- Detail Item {id, name, air_date, director, writer, characters, img_url} -->
  <div class="d-flex w-100 justify-content-between align-items-start">
    <article class="d-flex flex-column ps-0" data-id={d.id} on:click={handleClick}>
      <h1 class="fs-1 mb-3">
        <span class="text-muted" style="opacity: 0.5;"><Fa icon={faTv} fw /></span>
        <span class="text-primary">{d.name}</span>
      </h1>
      <span class="text-secondary fs-6"><Fa icon={faCalendar} fw /> {d.air_date}</span>
      <span class="text-secondary fs-5 fw-bold"><Fa icon={faList} fw /> {d.id}</span>
      <span class="text-muted fs-5"><Fa icon={faFilm} fw /> {d.director}</span>
      <span class="text-muted fs-5"><Fa icon={faBook} fw /> {d.writer}</span>
    </article>
    <figure class="mb-0 ms-2">
      <img src={d.img_url} class="img-fluid" alt="img{d.id}">
      <figcaption class="text-truncate">{d.name}</figcaption>
    </figure>
  </div>
  <div>
    <Collapse open={false}>
      <svelte:fragment slot="trigger" let:toggle>
        <button type="button" class="btn btn-primary" on:click={toggle}>
          <Fa icon={faUserFriends} fw /> 
          <span> Figuren </span>  
        </button>
      </svelte:fragment>
      <div class="my-2">
        <ul class="list-group">
          {#each d.characters as url, i}       
            <ApiFetcher url={url} let:data>
              <li slot="loader" class="list-group-item d-flex justify-content-center">
                <span class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </span>
              </li>
              
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{data.name}</span>
                <span class="badge bg-secondary badge-pill">{i+1}</span>
              </li>
            </ApiFetcher>
            {:else}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>keine Einträge</span>
            </li>
          {/each}
        </ul>  
      </div>
    </Collapse>
  </div>
  
  <JsonPanel {d} />
{/if}
{/if}

<style>
  figure {
    max-width: 40%;
  }
</style>

<!--
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h2 class="fs-2 mb-2">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faTv} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h2>
    <span class="fs-6 badge rounded-pill text-bg-danger">
      <span class="">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column ps-0" data-id={d.id} on:click={handleClick}>

    <span class="text-secondary fs-6"><Fa icon={faCalendar} fw /> {d.air_date}</span>
    <span class="text-secondary fs-5 fw-bold"><Fa icon={faList} fw /> {d.id}</span>
    <span class="text-muted fs-5"><Fa icon={faFilm} fw /> {d.director}</span>
    <span class="text-muted fs-5"><Fa icon={faBook} fw /> {d.writer}</span>
  </article>
-->