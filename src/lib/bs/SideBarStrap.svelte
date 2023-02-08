<script>
  import Offcanvas from "sveltestrap/src/Offcanvas.svelte";
  export let open = false;
  export let label = "Menu";
  export let dark = false
  const toggle = () => (open = !open);
</script>


<Offcanvas
  isOpen={open}
  body={false}
  class="{dark ? 'text-bg-dark' : ''}"
  style="width: 380px"
  scroll
>
  <header class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">{label}</h5>
    <button type="button" class="btn-close  {dark ? 'btn-close-white' : ''}" on:click={toggle} aria-label="Close"></button>
  </header>
  <hr class="my-0">
    <slot {toggle} />
  <hr class="my-0">
  {#if $$slots.footer}
    <div class="py-4 px-2 mt-auto">
      <slot name="footer" />
    </div>
  {/if}
</Offcanvas>
