<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faTerminal } from '@fortawesome/free-solid-svg-icons';
  import Collapse from "../../lib/bs/Collapse.svelte";
  export let d = {};
</script>

<footer class="mt-4 py-4">
  <Collapse open={false}>
    <svelte:fragment slot="trigger" let:toggle>
      <button type="button" class="btn btn-secondary" on:click={toggle}><Fa icon={faTerminal} fw /> JSON </button>
    </svelte:fragment>
    <div class="my-2 py-2">
       <div class="px-2 py-2 bg-light rounded-2">
        <pre>{JSON.stringify(d, null, 2)}</pre>
      </div>
    </div>
  </Collapse>
</footer>

