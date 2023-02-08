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


<!--
<div class="backdrop" class:open />

<aside class="border-end" class:open use:clickOutside on:click_outside={close}>
  <nav class="navbar bg-gradient bg-primary navbar-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Nwp-Studio</span>
    </div>
  </nav>
  <Spacer space={0} />
  <div class="list-group list-group-flush">
    {#each nav as { path, titel, sub }, id}
      <a
        href={path}
        use:link
        use:active
        on:click={close}
        class="list-group-item list-group-item-action flex-column
                align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{titel}</h5>
          <small class="text-muted">{id + 1}</small>
        </div>
      {#if sub && sub !== ''}
      <p class="mb-1">{sub}</p>
      {/if}  
      </a>
    {/each}
  
    <button
      on:click={toggleTheme}
      class="list-group-item list-group-item-action flex-column
            align-items-start"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Toggel Theme</h5>
        <span class="text-muted">
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M10 17V3a7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"
              clip-rule="evenodd"
            /></svg
          >
        </span>
      </div>
    </button>
  </div> 
   <Spacer space={0} />
    <SignOut>
      <div class="d-grid gap-2 px-2 mt-4">
        <button type="button" class="btn btn-danger">Logout</button>
      </div>
    </SignOut>
   
</aside> 
-->

<!-- 
<style>
  :root {
    --sb-width: 300px;
  }
  aside {
    overflow-y: auto;
    width: 100%;
    max-width: var(--sb-width);
    overflow-x: hidden;
    background-color: var(--bs-body-bg);
    color: var(--bs-body-color);
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #111;
    display: none;
    transition: opacity 0.15s linear;
  }
  aside {
    position: fixed;
    z-index: 1045;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 400ms ease-out;
  }
  aside.open {
    transform: translateX(0);
    transition: transform 400ms ease-out;
  }
  .backdrop.open {
    display: block;
    opacity: 0.5;
  }
</style>
 -->