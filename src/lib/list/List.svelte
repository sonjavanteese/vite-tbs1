<script>
  export let flush = false;
</script>

<div {...$$restProps}>
  <nav class="list-group" class:list-group-flush={flush}>
  <slot />
  </nav>
</div>