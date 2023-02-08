<script>
  import JsonPanel from './JsonPanel.svelte';

  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faBook, faTv, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
  export let detail = false;
  export let d = {};
  
</script>

{#if !detail}
  <!-- List Item -->
  <div class="d-flex w-100 justify-content-between align-items-start">
    <h4 class="mb-1">
      {d.name ? d.name : ''} 
      {d.quote ? d.quote : ''}</h4>
    <small class="text-muted">{d.id}</small>
  </div>
{:else}
  <!-- Details Item -->
  <div class="p-4 my-2 border">
    <div class="d-flex flex-column">
      <div class="d-flex w-100 justify-content-between align-items-start">
        <h4 class="mb-1">{d.name}</h4>
        <small class="text-muted">{d.id}</small>
      </div>
    </div>
  </div>
  <JsonPanel d={d} />
{/if}
