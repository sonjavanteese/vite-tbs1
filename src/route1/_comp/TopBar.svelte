<script>
  export let label = "Nwp-App";
  export let setPage;
  export let toggle;
</script>

<header class="sticky-top">
    <nav class="navbar bg-primary navbar-dark navbar-expand-lg" data-bs-theme="dark">
      <a href="#/" class="navbar-brand ms-2 mb-0 h1">{label}</a>
      <button
        class="navbar-toggler me-2"
        on:click={toggle}
        type="button"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
    </nav>
</header>



