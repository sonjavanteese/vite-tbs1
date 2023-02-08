<script>
  import { onMount } from 'svelte';
  import { List, ListItem, AppBar, SideBar, Auth, SignOut } from "../lib/bs";
  const navData = [
    { path: "/", name: "Start" },
    { path: "/game", name: "Game" },
    { path: "/edit", name: "Editor" },
    { path: "/user", name: "User" },
  ];
  import Router, {push} from "svelte-spa-router";
  import routes from "./routes";
  export let label = "Nwp-App-3";
  export let setPage;
  let open;
  const openSb = () => {
    open = true;
  };
  console.log(`${label} init!`)
  onMount(() => {
    console.log(`${label} mounted!`)
    push('/')
  })
</script>

<SideBar bind:open let:toggle>
  <List flush>
    {#each navData as { path, name }, i}
      <ListItem href="#{path}" on:click={toggle}>
        {name}
        <span slot="right" class="badge bg-secondary rounded-pill">{i + 1}</span
        >
      </ListItem>
    {/each}
  </List>
  <svelte:fragment slot="footer">
    <SignOut>
      <div class="d-grid gap-2">
        <button type="button" class="btn btn-danger" on:click={toggle}
          >Logout</button
        >
      </div>
    </SignOut>
  </svelte:fragment>
</SideBar>

<!-- <Auth></Auth> -->
<AppBar {openSb} {setPage} />
<main>
  <Router {routes} />
</main>
{#if $$slots.footer}
    <footer>
        <slot name="footer"><!-- optional fallback --></slot>
    </footer>
{/if}