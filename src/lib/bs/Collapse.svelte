<script>
  import * as transitions from "svelte/transition";
  export let open = false;
  export let animation = "slide";
  let _animation = transitions[animation];
  $: _animation =
    typeof animation === "function" ? animation : transitions[animation];
  const toggle = () => (open = !open);
</script>

<slot name="trigger" {open} {toggle} />

{#if open}
  <div transition:_animation|local>
    <slot />
  </div>
{/if}

<style>
  div {
    padding: var(--p, 0);
    margin: var(--m, 0);
  }
</style>
