<script>
  export let label = "Archiv";
  import bgImg1 from "../assets/bbg.svg";
  const navData = [
    { path: "/db/films", name: "Films" },
    { path: "/db/starships", name: "Starships" },
    { path: "/db/planets", name: "Planets" },
    { path: "/settings", name: "Settings" },
  ];
</script>


  <div class="mb-5">
    <img class="img-fluid" src={bgImg1} alt="" />
  </div>
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 mx-auto">
        <p class="h4 text-muted mb-4">
          {label}
        </p>
        <p class="lead text-muted mb-4">
          These types of questions led me to miss numerous deadlines, and I
          wasted time and energy in back-and-forth communication. Sadly, this
          situation could have been avoided if the wireframes had provided
          enough detail.
        </p>
        <div class="mb-2 py-2">
              {#each navData as {path, name}}
                  <a class="btn btn-primary d-inline-block mx-1" href="#{path}">{name}</a>
              {/each}
        </div>
        
      </div>
  </div>

