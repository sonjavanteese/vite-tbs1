<script>
  import { fade } from "svelte/transition";
  export let label = "Nwp-App";
  export let setPage;
  export let open;
  export let toggle;
  export let navData = [];
  let closing = false;
  const BODY = document.querySelector("body");
  $: {
    if (open)
      BODY.setAttribute("style", "overflow: hidden; padding-right: 0px;");
    else BODY.removeAttribute("style");
  }
</script>

<aside
  class="border-end col-lg-3 sidebar-lg sidebar-start"
  class:open
  class:closing
  data-pg-name="SideBar"
  on:transitionstart={() => {
    if (!open) closing = true;
  }}
  on:transitionend={() => {
    if (!open) closing = false;
  }}
>
  <div class="sidebar-header">
    <h5 class="mb-0">{label}</h5>
    <button
      type="button"
      class="btn-close"
      on:click={toggle}
      aria-label="Close"
    />
  </div>
  <slot {toggle}>
    <ul class="list-group list-group-flush" data-pg-name="ListFlush">
      {#each navData as { path, name }}
        <a
          class="list-group-item list-group-item-action"
          href="#{path}"
          on:click={() => (open = false)}>{name}</a
        >
      {/each}

      <button
        class="list-group-item list-group-item-action list-group-item-danger py-3"
        on:click={setPage}>Select Layout</button
      >
    </ul>
    <hr class="my-0" />
  </slot>
  {#if $$slots.footer}
    <div class="py-4 px-2 mt-auto">
      <slot name="footer" />
    </div>
  {/if}
</aside>

{#if open}
  <div transition:fade={{ duration: 600 }} class="backdrop" on:click={toggle} />
{/if}

<style>
  aside {
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.7;
  }

  .sidebar-lg {
    --bs-sidebar-zindex: 1045;
    --bs-sidebar-width: 400px;
    --bs-sidebar-height: 30vh;
    --bs-sidebar-padding-x: 1rem;
    --bs-sidebar-padding-y: 1rem;
    --bs-sidebar-color: var(--bs-body-color);
    --bs-sidebar-bg: var(--bs-body-bg);
    --bs-sidebar-border-width: var(--bs-border-width);
    --bs-sidebar-border-color: var(--bs-border-color-translucent);
    --bs-sidebar-box-shadow: 0 0.125rem 0.25rem
      rgba(var(--bs-body-color-rgb), 0.075);
    --bs-sidebar-transition: transform 0.4s ease-in-out;
    --bs-sidebar-title-line-height: 1.5;
  }
  .sidebar-lg .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--bs-sidebar-padding-y) var(--bs-sidebar-padding-x);
    border-bottom: var(--bs-sidebar-border-width) solid
      var(--bs-sidebar-border-color);
  }
  @media (max-width: 991.98px) {
    .sidebar-lg {
      position: fixed;
      bottom: 0;
      z-index: var(--bs-sidebar-zindex);
      display: flex;
      flex-direction: column;
      max-width: 100%;
      color: var(--bs-sidebar-color);
      visibility: hidden;
      background-color: var(--bs-sidebar-bg);
      background-clip: padding-box;
      outline: 0;
      transition: var(--bs-sidebar-transition);
    }
    .sidebar-lg.closing {
      visibility: visible;
    }
  }
  @media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {
    .sidebar-lg {
      transition: none;
    }
  }
  @media (max-width: 991.98px) {
    .sidebar-lg.sidebar-start {
      top: 0;
      left: 0;
      width: var(--bs-sidebar-width);
      border-right: var(--bs-sidebar-border-width) solid
        var(--bs-sidebar-border-color);
      transform: translateX(-100%);
    }
  }
  @media (max-width: 991.98px) {
    .sidebar-lg.open:not(.hiding) {
      transform: none;
    }
    .sidebar-lg.open {
      visibility: visible;
    }
  }
  @media (min-width: 992px) {
    .sidebar-lg {
      --bs-sidebar-height: auto;
      --bs-sidebar-border-width: 0;
      background-color: transparent !important;
    }
    .sidebar-lg .sidebar-header {
      display: none;
    }
    /* .sidebar-lg .offcanvas-body {
      display: flex;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
      background-color: transparent !important;
    } */
  }

  /* 
  @media (max-width: 991.98px) {
    .sidebar-lg.offcanvas-end {
      top: 0;
      right: 0;
      width: var(--bs-sidebar-width);
      border-left: var(--bs-sidebar-border-width) solid var(--bs-sidebar-border-color);
      transform: translateX(100%);
    }
    .sidebar-lg.offcanvas-top {
      top: 0;
      right: 0;
      left: 0;
      height: var(--bs-sidebar-height);
      max-height: 100%;
      border-bottom: var(--bs-sidebar-border-width) solid var(--bs-sidebar-border-color);
      transform: translateY(-100%);
    }
    .sidebar-lg.offcanvas-bottom {
      right: 0;
      left: 0;
      height: var(--bs-sidebar-height);
      max-height: 100%;
      border-top: var(--bs-sidebar-border-width) solid var(--bs-sidebar-border-color);
      transform: translateY(100%);
    }
  } 
*/
</style>
