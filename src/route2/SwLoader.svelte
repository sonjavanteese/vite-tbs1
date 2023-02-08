<script>
    export let url = "https://swapi.dev/api/films/";
    const fetchData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  };

  let promise = fetchData(url);
</script>

{#await promise then data}
  <slot {data} />
{/await}


