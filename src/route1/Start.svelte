<script>
  export let label = "Final-Space Api";
  import bgImg1 from "../assets/bbg.svg";
  const navData = [
    {
      id: 0,
      name: "Episode",
      path: "/db/episode",
      url: "https://finalspaceapi.com/api/v0/episode/",
      templ: 1,
      detail: false
    },
    {
      id: 1,
      name: "Character",
      path: "/db/character",
      url: "https://finalspaceapi.com/api/v0/character/",
      templ: 2,
      detail: false
    },
    {
      id: 2,
      name: "Location",
      path: "/db/location",
      url: "https://finalspaceapi.com/api/v0/location/",
      templ: 3,
      detail: false
    },
    {
      id: 3,
      name: "Quote",
      path: "/db/quote",
      url: "https://finalspaceapi.com/api/v0/quote/",
      templ: 4,
      detail: false
    },
    { path: "/settings", name: "Settings" },
  ];
</script>


  <div class="mb-5">
    <img class="img-fluid" src={bgImg1} alt="" />
  </div>
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 mx-auto">
        <h2 class="h2 text-muted text-center mb-4">
          {label}
        </h2>
      
        <div class="mb-2 py-2 text-center">
              {#each navData as {path, name}}
                  <a class="btn btn-primary me-1 mb-1" href="#{path}">{name}</a>
              {/each}
        </div>
        
      </div>
  </div>

