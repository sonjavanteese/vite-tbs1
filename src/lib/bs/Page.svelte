<script>
  // import { fade, fly } from "svelte/transition";
  // export let op_fade = { duration: 400 };
  // export let op_fly = { x: 300, duration: 1000 };
  export let center = false;
  export let noscroll = false;
  export let test = false;
</script>

<section class="page" class:center={center} class:noscroll={noscroll} class:test={test}>
  <slot />
  {#if $$slots.content}
		<div class="container-lg">
      <slot name="content"></slot>
    </div>
	{/if}
</section>




<style lang="scss">
  .page {
    --bg: var(--bs-body-bg);
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    &.center {
      align-items: center;
      justify-content: center;
    }
    &.noscroll {
      overflow-y: hidden !important;
    }
    &.test {
      border: 2px dashed red;
    }
  }
</style>
