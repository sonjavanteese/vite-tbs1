<script>
    import Collapse from "../lib/bs/Collapse.svelte";
    import DocsBs from '../lib/bs/DocsBs.md';
    export let label = "Nwp-App";
    const navData = [
        { path: "/", name: "Final-Space Api" },
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

<div class="container-fluid">
  <section class="py-5">
      <div class="container-md">
          <div class="row align-items-center justify-content-center">
              <div class="col-12 col-md-6">
                  <div class="mx-auto mb-5">
                      <span class="text-muted">Lorem ipsum</span>
                      <h2 class="display-5 fw-bold mt-2 mb-4">{label}</h2>
                      <p class="lead text-muted mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.
                      </p>
                      {#each navData as {path, name}}
                        <a class="btn btn-primary d-inline-block me-1 mb-1" href="#{path}">{name}</a>
                      {/each}
                  </div>
              </div>
              <div class="col-12 col-md-6">
                  <div class="px-4 py-5 px-md-5 bg-light rounded mx-auto">
                      <div class="d-flex mb-5">
                          <span class="d-flex flex-shrink-0 me-3 me-lg-5 justify-content-center align-items-center rounded-circle bg-primary text-white" style="width: 48px; height: 48px;">1</span>
                          <div>
                              <p class="lead text-muted">
                                  Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.
                              </p>
                          </div>
                      </div>
                    
                  </div>
              </div>
          </div>
          <div>
            <Collapse open={false}>
                <svelte:fragment slot="trigger" let:toggle>
                  <button type="button" class="btn btn-primary" on:click={toggle}>BS5 Docs</button>
                </svelte:fragment>
                <div class="my-2 px-2 py-2border rounded-2">
                  <DocsBs />
                </div>
              </Collapse>
          </div>
      </div>
  </section>
</div>
