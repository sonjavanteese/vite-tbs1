<script>
  export let title = "Nwp-Docs";
</script>

<div class="card">
  {#if title}
  <div class="card-header">{title}</div>
  {/if}
  <div class="card-body">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </div>
</div>
