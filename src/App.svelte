<script>
  import url from './lib/url';
  import AppBar from './lib/AppBar.svelte';
  import SideBar from './lib/SideBar.svelte';
  import Page from './lib/Page.svelte';
  import { List, ListItem } from './lib/list'
   let open;
    const openSb = () => {
        open = true;
    };
</script>


<SideBar bind:open let:toggle>
  <List flush>
      <ListItem href="#/" on:click={toggle}>
      Home
      <span slot="right" class="badge bg-secondary rounded-pill">1</span>
      </ListItem>
      <ListItem href="#/game" on:click={toggle}>
      Game
      <span slot="right" class="badge bg-secondary rounded-pill">2</span></ListItem>
      <ListItem href="#/settings" on:click={toggle}>Settings
      <span slot="right" class="badge bg-secondary rounded-pill">3</span></ListItem>
      <ListItem href="#/404" on:click={toggle}>404
      <span slot="right" class="badge bg-danger rounded-pill">4</span></ListItem>
  </List>
  <svelte:fragment slot="footer">
    <div class="d-grid gap-2">
      <button type="button" class="btn btn-danger" on:click={toggle}>Close</button>
    </div>
  </svelte:fragment>
</SideBar>
<AppBar {openSb} />



<main>
	{#if $url.hash === '' || $url.hash === '#/'}
  <Page class="py-4">
    <div class="container">
    <h1>Home Sweet Home</h1>
      <List flush>
        <ListItem href="#/">
        Home
        <span slot="right" class="badge bg-secondary rounded-pill">1</span>
        </ListItem>
        <ListItem href="#/game">
        Game
        <span slot="right" class="badge bg-secondary rounded-pill">2</span></ListItem>
        <ListItem href="#/settings">Settings
        <span slot="right" class="badge bg-secondary rounded-pill">3</span></ListItem>
        <ListItem href="#/404">404
        <span slot="right" class="badge bg-danger rounded-pill">4</span></ListItem>
      </List>
    </div>
  </Page>

	{:else if $url.hash === '#/game'}
    <Page class="py-4">
    <div class="container">
   <h1>Game</h1>
    </div>
  </Page>
	
	{:else if $url.hash === '#/settings'}
    <Page class="py-4">
    <div class="container">
    <h1>Settings</h1>
    </div>
  </Page>
	
	{:else}
   <Page class="py-4">
    <div class="container">
   <h1 class="text-danger">404 Not Found</h1>
    </div>
  </Page>
	{/if}
</main>



<footer class="bg-light">
<nav class="nav justify-content-around">
    <a href="#/" class="nav-link">Home</a>
    <a href="#/game" class="nav-link">Game</a>
    <a href="#/settings" class="nav-link">Settings</a>
</nav>
</footer>