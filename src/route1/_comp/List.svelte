<script>
  export let label = "List";
  import thumb1 from "../../assets/thumb1.svg";
  let array1 = [1, 2, 3, 4, 5, 6];
</script>

<section class="py-5">
  <div class="container">
    <div class="row">
      {#each array1 as el}
        <div class="col-12 col-md-6 mb-5 mb-lg-4">
          <div class="row">
            <div class="col-12 col-lg-4 mb-4">
              <img class="img-fluid" src={thumb1} alt="" />
            </div>
            <div class="col-12 col-lg-8">
              <span><small class="text-muted">10 jun 2021 19:40</small></span>
              <h2 class="fw-bold mb-1">Artickel {el}</h2>
              <p class="mb-2 text-muted">
                <small
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                  aliquet orci.</small
                >
              </p>
              <a
                class="btn btn-outline-primary d-inline-flex align-items-center"
                href="#/"
              >
                <span>Read More</span>
                <span />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
