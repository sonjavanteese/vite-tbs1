<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faFileExport,
    faSortAmountUp,
    faSortAmountDown,
  } from "@fortawesome/free-solid-svg-icons";
  import { Loader, Spacer, Page } from "../lib/bs";
  import { onMount } from "svelte";
  import { supabase, _user, sleep } from "../lib/data";
  const label = "GameEditor1 List";
  let filter = { asc: true };

  const fetchAllPages = async () => {
    let filterSets = filter;
    let query = supabase
      .from("game_story")
      .select(
        "imgUrl,storyText,choice1,choice2,choice1Text,choice2Text,pageTitel,op1,page"
      );
    if (filterSets && filterSets.id) {
      query = query.eq("page", filterSets.id);
    }
    query = query.order("page", {
      ascending: filterSets.asc ? filterSets.asc : false,
    });
    let { data, error } = await query;
    if (data) {
      return data;
    } else {
      throw new Error(error, data);
    }
  };
  const fetchData = async () => {
    promise = fetchAllPages();
  };
  const sort = () => {
    filter.asc = !filter.asc;
    fetchData();
  };
  let promise = fetchAllPages();

  console.log(`${label} init!`);
  onMount(() => {
    console.log(`${label} mount!`);
  });
</script>

<Page>
  <header class="container-lg">
    <div class="d-flex align-items-center px-2 py-2">
      <div class="fs-5">Story Pages</div>
      <aside class="btn-toolbar ms-auto" role="toolbar" aria-label="Toolbar">
        <div class="btn-group ms-1" role="group" aria-label="Sort">
          <button type="button" class="btn btn-secondary" on:click={sort}>
            {#if filter.asc}
              <Fa icon={faSortAmountDown} />
            {:else}
              <Fa icon={faSortAmountUp} />
            {/if}
          </button>
        </div>
      </aside>
    </div>
    <Spacer />
  </header>
  
  {#await promise}
    <Loader />
  {:then data}
    <section class="container-lg">
      <div class="list-group list-group-flush">
        <!-- pageType,imgUrl,storyText,choice1,choice2,choice1Text,choice2Text,pageTitel,videoUrl,audioUrl,daten,op1,page -->
        {#each data as d, i}
          <a href="#/edit/{d.page}"
            class="list-group-item list-group-item-action flex-column">
            <div class="d-flex w-100 justify-content-between align-items-start">
              <h4 class="mb-1">{d.pageTitel}</h4>
              <span class="d-flex align-items-center">
                <span class="me-1 fw-thin">{d.page}</span>
                <span><Fa icon={faFileExport} /></span>
                <span class="badge bg-primary rounded-pill ms-1"
                  >{d.choice1}</span
                >
                {#if d.choice1 != d.choice2}
                  <span class="badge bg-danger rounded-pill ms-1"
                    >{d.choice2}</span
                  >
                {/if}
              </span>
            </div>
            <p class="mb-1 fs-6 text-truncate">{d.storyText}</p>
            <div class="mb-0 text-truncate">
              <small class="text-primary">{d.choice1Text}</small>
            </div>
            {#if d.choice1 != d.choice2}
              <div class="mb-0 text-truncate">
                <small class="text-danger">{d.choice2Text}</small>
              </div>
            {/if}
          </a>
        {/each}
      </div>
    </section>
  {/await}
</Page>
