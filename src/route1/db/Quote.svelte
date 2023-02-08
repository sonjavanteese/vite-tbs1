<script>
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFilm, faBook, faTv, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
  export let detail = false;
  export let d = {};
  
</script>

{#if !detail}
  <!-- List Item { id, quote, by, character, image } -->

    <div class="d-flex flex-column">
      <div class="d-flex w-100 justify-content-between align-items-start">
        <div class="mb-1 fs-4">
          <span class="text-primary" style="opacity: 0.5;">
            <Fa icon={faQuoteLeft} size="2x" fw />
          </span>
          <span class="text-muted">{d.by}</span>
        </div>
        <span class="text-muted" style="opacity: 0.8;">
           <img src="{d.image}" class="rounded-2" hidth="50" height="50" alt="">
        </span>
      </div>
      <blockquote class="py-3 px-2 display-6 fw-bold">
        <em>{d.quote}</em>
      </blockquote>
      <div>
       
      </div>
    </div>
{:else}
  <!-- Details Item -->
  <div class="display-1 text-danger">
    No Option
  </div>
{/if}
