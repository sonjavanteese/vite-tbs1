<script>
  import { onMount } from "svelte";
  import TopBar from "./_comp/TopBar.svelte";
  import SideBar from "./_comp/SideBar.svelte";
  import Router, { location } from "svelte-spa-router";
  import {apiData} from './db';
  import routes from "./routes";
  let label = "Nwp-App-3";
  let setPage = () => console.log("Set Page Function disabled");
  const navData = [
    { path: "/", name: "Start" },
    { path: "/settings", name: "Settings" },
  ];
  let open;
  const toggle = () => {
    open = !open;
  };
  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mounted!`);
  });
  console.log(apiData)
</script>

<TopBar {label} {toggle} />
<section>
  <SideBar bind:open {label} {toggle} {setPage}>
    <nav class="list-group list-group-flush" data-pg-name="ListFlush">

      {#each navData as { path, name }}
        <a
          class="list-group-item list-group-item-action"
          class:active={$location === path}
          href="#{path}"
          on:click={() => (open = false)}>{name}</a
        >
      {/each}
      {#each apiData as { path, name }}
        <a
          class="list-group-item list-group-item-action"
          class:active={$location.includes(path)}
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
