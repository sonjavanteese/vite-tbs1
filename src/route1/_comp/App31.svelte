<script>
  import { onMount } from 'svelte';
  import App3Tb from './TopBar.svelte';
  import App3Sb from './SideBar.svelte';
  import Router, {push} from "svelte-spa-router";
  import routes from "../routes";
  export let label = "Nwp-App-3";
  export let setPage;
  const navData = [
    { path: "/", name: "Start" },
    { path: "/game", name: "Game" },
    { path: "/user", name: "User" },
    { path: "/settings", name: "Settings" },
  ];
  let open;
  const toggle = () => {
    open = !open;
  };
  console.log(`${label} init!`)
  onMount(() => {
    console.log(`${label} mounted!`)
    push('/')
  })
</script>

<App3Tb bind:open {label} {toggle} {setPage} />

    <main class="overflow-hidden">
        <div class="g-0 h-100 row">
            <App3Sb bind:open {label} {toggle} {setPage} {navData} />

            <article class="col" data-pg-name="Content">
                <Router {routes} />                                       
            </article>
        </div>
    </main>



<style>
  article {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>


