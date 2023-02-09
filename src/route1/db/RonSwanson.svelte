<script>
  import ApiFetcher from './ApiFetcher.svelte';
  import Fa from "svelte-fa/src/fa.svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
  const apiUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
</script>

<ApiFetcher url={apiUrl} let:data>
    <figure>
        <blockquote class="blockquote fs-4 fw-semibold">
            <span class="text-primary me-2" style="opacity: 0.5;">
            <Fa icon={faQuoteLeft} size="2x" fw />
            </span>
            <em>{data[0]}</em>
        </blockquote>
        <figcaption class="blockquote-footer mt-1">
            <cite title="https://github.com/jamesseanwright/ron-swanson-quotes">@RonSwansonQuotes</cite>
        </figcaption>
    </figure>
</ApiFetcher>
