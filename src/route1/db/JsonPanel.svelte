<script>
  export let d = {};
</script>

<footer class="mt-2 py-4">
  <details>
    <summary class="fs-6 fw-semibold">Json</summary>
    <div class="mt-2 px-2 py-2 bg-light rounded-2">
      <pre>{JSON.stringify(d, null, 2)}</pre>
    </div>
  </details>
</footer>

