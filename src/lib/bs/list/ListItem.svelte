
<script>
  export let active = false;
  export let disabled = false;
  export let href = null;
  export let center = null;
</script>


{#if href}
<a 
  {href}
  on:click 
  class="list-group-item list-group-item-action d-flex justify-content-between" class:align-items-center={center} 
  class:active={active}
  {...$$restProps}>
    <span>
        <slot />
    </span> 
    {#if $$slots.right}
    <span>
      <slot name="right" />
    </span>
    {/if}
</a>
{:else}
  <button 
    on:click 
    class="list-group-item list-group-item-action d-flex justify-content-between" class:align-items-center={center} 
    class:active={active}
    {disabled} 
    {...$$restProps}>
      <span>
          <slot />
      </span> 
      {#if $$slots.right}
      <span>
        <slot name="right" />
      </span>
      {/if}
  </button>
{/if}