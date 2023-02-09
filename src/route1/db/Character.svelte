<script>
  import JsonPanel from './JsonPanel.svelte';

  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faThermometerHalf, faUserCog, faTint, faUserFriends, faUsers, faUserTag, faGlobe, faNeuter } from '@fortawesome/free-solid-svg-icons';
  import Collapse from "../../lib/bs/Collapse.svelte";
  export let detail = false;
  export let d = {};
  
</script>
{#if d.origin}
{#if !detail}
  <!-- List Item { id, name, status, species, gender, hair, alias, origin, abilities, img_url } -->
  <header class="d-flex w-100 justify-content-between align-items-start">
    <h2 class="fs-2 mb-2" title="Name">
      <span class="text-muted" style="opacity: 0.5;"><Fa icon={faUserFriends} fw /></span>
      <span class="text-primary">{d.name}</span>
    </h2>
    <span class="badge rounded-pill text-bg-primary">
      <span class="">{d.id}</span>
    </span>
  </header>
  <article class="d-flex flex-column ps-0">
    <span class="text-secondary" title="Species"><Fa icon={faUserTag} fw /> {d.species}</span>
    <span class="text-secondary" title="Origin"><Fa icon={faGlobe} fw /> {d.origin}</span>
  </article> 
{:else}
  <!-- Details Item { id, name, status, species, gender, hair, alias, origin, abilities, img_url } -->
  <div class="d-flex w-100 justify-content-between align-items-start">
    <article class="d-flex flex-column ps-0" data-id={d.id}>
      <h1 class="fs-1 mb-3" title="Name">
        <span class="text-secondary" style="opacity: 0.5;"><Fa icon={faUserFriends} fw /></span>
        <span class="text-primary">{d.name}</span>
      </h1>
      <span class="text-secondary fs-5" title="Species"><Fa icon={faUserTag} fw /> {d.species}</span>
      <span class="text-secondary fs-5" title="Origin"><Fa icon={faGlobe} fw /> {d.origin}</span>
      <span class="text-secondary fs-5" title="Gender"><Fa icon={faNeuter} fw /> {d.gender}</span>
      <span class="text-secondary fs-5" title="Hair Color"><Fa icon={faTint} fw /> {d.hair}</span>
      <span class="text-secondary fs-5" title="Status"><Fa icon={faThermometerHalf} fw /> {d.status}</span>
    </article>
    <figure class="mb-0 ms-2 img-thumbnail">
      <img src={d.img_url} class="img-fluid" alt={d.name}>
      <figcaption class="text-truncate">{d.name}</figcaption>
    </figure>
  </div>
  <div>
    <Collapse open={false}>
      <svelte:fragment slot="trigger" let:toggle>
        <button type="button" class="btn btn-primary" on:click={toggle}>
          <Fa icon={faUsers} fw /> 
          <span> Alias </span>  
        </button>
      </svelte:fragment>
      <div class="my-2">
        <ul class="list-group">
          {#each d.alias as titel, i}       
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{titel}</span>
                <span class="badge bg-secondary badge-pill">{i+1}</span>
            </li>
          {:else}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>keine Einträge</span>
            </li>
          {/each}
        </ul>  
      </div>
    </Collapse>
	 <Collapse open={false}>
      <svelte:fragment slot="trigger" let:toggle>
        <button type="button" class="btn btn-primary" on:click={toggle}>
          <Fa icon={faUserCog} fw /> 
          <span> Abilities </span>  
        </button>
      </svelte:fragment>
      <div class="my-2">
        <ul class="list-group">
          {#each d.abilities as titel, i}       
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>{titel}</span>
              <span class="badge bg-secondary badge-pill">{i+1}</span>
            </li>
          {:else}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>keine Einträge</span>
            </li>
          {/each}
        </ul>  
      </div>
    </Collapse>
  </div>
  <JsonPanel d={d} />
{/if}
{/if}

<!-- 
  { id, name, status, species, gender, hair, alias, origin, abilities, img_url }
  s
-->