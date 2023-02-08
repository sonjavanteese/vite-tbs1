<script>
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faBook, faTv, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
  export let detail = false;
  export let d = {};
  
</script>

{#if !detail}
  <!-- List Item -->
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h5 class="fs-3 mb-2">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faTv} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h5>
    <span class="badge rounded-pill text-bg-primary d-flex justify-content-between align-items-center">
      <Fa icon={faList} />
      <span class="ms-2">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column ps-2">
    <small class="text-secondary"><Fa icon={faCalendar} fw /> {d.air_date}</small>
    <span><Fa icon={faFilm} fw /> {d.director}</span>
    <span><Fa icon={faBook} fw /> {d.writer}</span>
  </article> 
{:else}
  <!-- Details Item -->
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h5 class="fs-3 mb-2">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faTv} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h5>
    <span class="badge rounded-pill text-bg-primary d-flex justify-content-between align-items-center">
      <Fa icon={faList} />
      <span class="ms-2">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column ps-2">
    <small class="text-secondary"><Fa icon={faCalendar} fw /> {d.air_date}</small>
    <span><Fa icon={faFilm} fw /> {d.director}</span>
    <span><Fa icon={faBook} fw /> {d.writer}</span>
  </article>
{/if}
