<script>
  import { onMount } from "svelte";
  import { _op } from '../../data';
  import toggleTheme from './toggelTheme';
  const Html = document.querySelector("html");
  onMount(async () => {
    let c = Html.hasAttribute("data-bs-theme");
    if ($_op.op3.dark && $_op.op3.dark !== c) toggleTheme();
  });
</script>



