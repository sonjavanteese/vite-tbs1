<script>
  import { onMount } from "svelte";
  import TopBar from "./_comp/TopBar.svelte";
  import SideBar from "./_comp/SideBar.svelte";
  import Router, { push } from "svelte-spa-router";
  import routes from "./routes";
  export let label = "Nwp-App-3";
  export let setPage;
  const navData = [
    { path: "/", name: "Final-Space Api" },
    {
      id: 0,
      name: "Episode",
      path: "/db/episode",
      url: "https://finalspaceapi.com/api/v0/episode/",
      templ: false,
    },
    {
      id: 1,
      name: "Character",
      path: "/db/character",
      url: "https://finalspaceapi.com/api/v0/character/",
      templ: false,
    },
    {
      id: 2,
      name: "Location",
      path: "/db/location",
      url: "https://finalspaceapi.com/api/v0/location/",
      templ: false,
    },
    { path: "/settings", name: "Settings" },
  ];
  let open;
  const toggle = () => {
    open = !open;
  };
  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
    // push("/");
  });
</script>

<TopBar bind:open {label} {toggle} {setPage} />
<section>
<SideBar bind:open {label} {toggle} {setPage}>
  <nav class="list-group list-group-flush" data-pg-name="ListFlush">
    {#each navData as { path, name }}
      <a
        class="list-group-item list-group-item-action"
        href="#{path}"
        on:click={() => (open = false)}>{name}</a
      >
    {/each}
    </nav>
    <hr class="my-0" />

    <svelte:fragment slot="footer">
      <button class="d-block w-100 btn btn-danger py-2" on:click={setPage}>Select Layout</button>
    </svelte:fragment>
</SideBar>

  <main>
    <Router {routes} />
  </main>
</section>

<style>
  section {
    flex: 1;
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
    overflow: hidden;
  }
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
