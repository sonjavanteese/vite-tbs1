<script>
  export let flush = false;
</script>


<nav class="list-group" class:list-group-flush={flush}>
<slot />
</nav>
