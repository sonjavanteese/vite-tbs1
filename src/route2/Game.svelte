<script>
  import SwLoader from "./SwLoader.svelte";

  import { Page, Loader } from "../lib/bs";
  const label = "SW Api";
  const fetchData = async () => {
    let response = await fetch("https://swapi.dev/api/films/4/");
    let data = await response.json();
    return [data];
  };
  let promise = fetchData();
</script>

<Page>
  <div class="container py-5">
    <h1 class="display-2 fw-bold mb-2">Nwp-Studio</h1>
    <p class="fs-3 text-muted mb-4">{label}</p>
    <button
      class="btn btn-primary btn-lg"
      type="button"
      on:click={() => {
        promise = fetchData();
      }}>Sandbox</button
    >
  </div>

  {#await promise}
    <Loader />
  {:then daten}
    <div class="container">
   <!--    <details>
        <div>
          <pre>{JSON.stringify(Object.keys(daten.results[0]), null, 2)}</pre>
        </div>
      </details> -->

      <div class="list-group list-group-flush">
        {#each daten as { title, episode_id, opening_crawl, director, producer, starships, planets }}
          <button class="list-group-item list-group-item-action flex-column">
            <div class="d-flex w-100 justify-content-between align-items-start">
              <h4 class="fs-2 fw-semibold mb-1">{title}</h4>
              <span class="badge rounded-pill text-bg-danger">{episode_id}</span>
            </div>
            <div class="mb-1">
              <em>{opening_crawl}</em>
            </div>
            <div class="fs-5"><span class="text-muted">{director}</span></div>
            <div class="fs-5"><span class="text-muted">{producer}</span></div>
            <div>
              <h5>Starships</h5>
              {#each starships as url}
                <SwLoader {url} let:data>
                  <span class="badge bg-secondary me-1 mb-1">{data.name}</span>
                </SwLoader>
              {/each}
            </div>
            <div>
              <h5>Planets</h5>
              {#each planets as url}
                <SwLoader {url} let:data>
                  <span class="badge bg-primary me-1 mb-1">{data.name}</span>
                </SwLoader>
              {/each}
            </div>
          </button>
        {/each}
      </div>
    </div>
  {/await}
</Page>
