<script>
  import RonSwanson from './db/RonSwanson.svelte';
  import { apiData, fetchData } from "./db";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
  export let label = "Final-Space Api";
  import bgImg1 from "../assets/bbg.svg";
  const navData = apiData;
</script>

<header class="mb-5">
  <img class="img-fluid" src={bgImg1} alt="" />
</header>
<div class="container-md">
  <section class="row">
    <div class="col-12 col-md-10 col-lg-8 mx-auto">
      <h2 class="h2 text-muted mb-4">
        {label}
      </h2>
      <div class="mb-2 py-2">
        {#each navData as { path, name }}
          <a class="btn btn-primary me-1 mb-1" href="#{path}">{name}</a>
        {/each}
      </div>
    </div>
  </section>
  <section class="row py-4">
    <div class="col-12 col-md-10 col-lg-8 mx-auto">
      <h2 class="h2 text-muted mb-4">
        Ron-Swanson Api
      </h2>
      <RonSwanson />
    </div>
  </section>
</div>