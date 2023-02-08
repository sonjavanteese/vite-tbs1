<script>
  import Page from "./lib/bs/Page.svelte";
</script>

<main>
  <Page center>
    <div class="container-fluid">
      <slot><!-- optional fallback --></slot>
    </div>
  </Page>
</main>
