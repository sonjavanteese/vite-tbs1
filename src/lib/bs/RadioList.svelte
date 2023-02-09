<script>
  // const placehold = ({body}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="{body && body !== '' ? 42 : 28}" height="{body && body !== '' ? 42 : 28}"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></g></svg>`;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let data = [
    {
      titel: "Bahraini Dinar",
      value: "bhd",
      body: ".د.ب"
    },
    {
      titel: "British Pound Sterling",
      value: "gbp",
    },
  ];
  export let selected = '';
  export let noimg = false;
  export let width = "460px";
  const onChange = (e) => dispatch('changed', {value: e.currentTarget.value});
  $: liststyle = `max-width: ${width}; margin: 1rem auto;`;
</script>

<div
  class="list-group list-group-checkable d-grid gap-2 border-0 w-auto"
  style={liststyle}
>
  {#each data as { titel, value, body, path, img }, i}
    <input
      class="list-group-item-check pe-none"
      type="radio"
      bind:group={selected}
      titel="curr1"
      id="listGroupCheck{i}"
      value={value}
      on:change={onChange}
    />
    <label
      class="d-flex justify-content-between list-group-item py-1 rounded-3"
      for="listGroupCheck{i}"
    >
      <div class="py-2">
        <strong>{titel}</strong>
        {#if body && body !== ''}
          <span class="d-block small opacity-50">{body}</span>
        {/if}
      </div>
      <div class="align-self-center">
        {#if !noimg}
        {#if !path || !img}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="{body && body !== '' ? 42 : 28}" height="{body && body !== '' ? 42 : 28}"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></g></svg>
        {:else}
        <img src="{path}{img}" alt="" class="flag rounded" height="{body && body !== '' ? 42 : 28}" width="{body && body !== '' ? 42 : 28}">
        {/if}
        {/if}
      </div>
    </label>
  {/each}
</div>

<style>
  img.flag {
    object-fit: cover;
    opacity: 0.4;
  }

  .form-check-input:checked + .form-checked-content {
    opacity: 0.5;
  }

  .form-check-input-placeholder {
    border-style: dashed;
  }
  [contenteditable]:focus {
    outline: 0;
  }

  .list-group-checkable .list-group-item {
    cursor: pointer;
  }
  .list-group-item-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  .list-group-item-check:hover + .list-group-item {
    background-color: var(--bs-light);
  }
  .list-group-item-check:checked + .list-group-item {
    color: #fff;
    background-color: var(--bs-blue);
  }
  .list-group-item-check[disabled] + .list-group-item,
  .list-group-item-check:disabled + .list-group-item {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }

  .list-group-radio .list-group-item {
    cursor: pointer;
    border-radius: 0.5rem;
  }
  .list-group-radio .form-check-input {
    z-index: 2;
    margin-top: -0.5em;
  }
  .list-group-radio .list-group-item:hover,
  .list-group-radio .list-group-item:focus {
    background-color: var(--bs-light);
  }

  .list-group-radio .form-check-input:checked + .list-group-item {
    background-color: var(--bs-body);
    border-color: var(--bs-blue);
    box-shadow: 0 0 0 2px var(--bs-blue);
  }
  .list-group-radio .form-check-input[disabled] + .list-group-item,
  .list-group-radio .form-check-input:disabled + .list-group-item {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }
</style>
