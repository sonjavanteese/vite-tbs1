<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faChevronLeft,
    faFileExport,
  } from "@fortawesome/free-solid-svg-icons";
  import { Collapse, Button, Card } from "sveltestrap";
  let isOpen = false;
  import EditorTemp from "./components/EditorTemp.svelte";
  import { Loader, Spacer, Page } from "../lib/bs";
  import { onMount } from "svelte";
  import { supabase, _user, sleep } from "../lib/data";
  import { toast } from "@zerodevx/svelte-toast";
  const label = "GameEditor1 Detail";
  export let params = {};
  let currentPage = params && params.id ? params.id : 0;
  let open = false;
  let pages = [];
  const toggle = () => {
    open = !open;
  };
  let filter = { id: currentPage };
  const getAllPs = async () => {
    try {
      const { data, error } = await supabase
        .from("game_story")
        .select("page,pageTitel");
      if (error) throw error;
      if (data) return data;
    } catch (error) {
      alert(error.message);
    }
  };
  const detPage = async () => {
    let filterSets = filter;
    let query = supabase
      .from("game_story")
      .select(
        "imgUrl,storyText,choice1,choice2,choice1Text,choice2Text,pageTitel,op1,page"
      );
    if (filterSets && filterSets.id) {
      query = query.eq("page", filterSets.id);
    }
    query = query.order("page", {
      ascending: filterSets.asc ? filterSets.asc : false,
    });
    let { data, error } = await query;
    if (data) {
      return data;
    } else {
      throw new Error(error, data);
    }
  };
  const getPages = async () => {
    promise = detPage();
  };

  const addNewPage = async () => {
    // try {
    //   const { data, error } = await supabase
    //     .from("todos")
    //     .insert([{ task: newTask, user_id: $user.id }]);
    //     await getPages();
    //   newTask = "";
    // } catch (err) {
    //   console.log(err);
    // }
  };
  let editing;
  const updatePage = async (d) => {
    try {
      editing = true;
      let ud = {
        imgUrl: d.imgUrl,
        storyText: d.storyText,
        choice1: d.choice1,
        choice2: d.choice2,
        choice1Text: d.choice1Text,
        choice2Text: d.choice2Text,
        pageTitel: d.pageTitel,
        op1: d.op1,
      };
      const { data, error } = await supabase
        .from("game_story")
        .update(ud)
        .eq("page", d.page);
      await getPages();
    } catch (err) {
      console.log(err);
    } finally {
      toast.push("Page Updated", { duration: 1000 });
      editing = false;
    }
  };

  const deletePage = async (d) => {
    console.log("DeletePage", d.page);
    return;
    // try {
    //   const { data, error } = await supabase
    //     .from("todos")
    //     .delete()
    //     .eq("page", d.page);
    //   await getPages();
    // } catch (err) {
    //   console.log(err);
    // }
  };
  console.log(`${label} init!`);
  onMount(async () => {
    console.log(`${label} mount!`);
    pages = await getAllPs();
  });
  let promise = detPage();
</script>

<Page>
  <div class="container-lg">
    <div class="d-flex align-items-center px-2 py-2">
      <aside class="btn-toolbar me-auto" role="toolbar" aria-label="Toolbar">
        <div class="btn-group ms-1" role="group" aria-label="Back">
          <button
            type="button"
            class="btn btn-link btn-sm"
            on:click={() => history.back()}
          >
            <Fa icon={faChevronLeft} />
          </button>
        </div>
      </aside>
      <div class="fs-5">Story Details</div>
    </div>
    <Spacer />
    {#await promise}
      <Loader />
    {:then data}
      <section class="py-2">
        {#each data as d, i}
          <!-- pageType,imgUrl,storyText,choice1,choice2,choice1Text,choice2Text,pageTitel,videoUrl,audioUrl,daten,op1,page -->
          <div class="d-flex flex-row align-items-stretch border-bottom">
            <article class="flex-grow-1 d-flex flex-column px-2 py-2">
              <h4 class="mb-1 fs-2 fw-semibold">
                {d.pageTitel} (<span class="text-primary">{d.page}</span>)
              </h4>
              <p
                class="fw-medium text-muted my-1 fs-6"
                style="font-size: 0.85rem;"
              >
                {d.storyText}
              </p>
              <div class="">
                <span class="text-muted me-1"><Fa icon={faFileExport} /></span>
                <span class="badge bg-primary">{d.choice1}</span>
                <span class="text-primary ms-2">{d.choice1Text}</span>
              </div>
              {#if d.choice1 != d.choice2}
                <div class="text-truncate">
                  <span class="text-muted me-1"><Fa icon={faFileExport} /></span
                  >
                  <span class="badge bg-danger">{d.choice2}</span>
                  <span class="text-danger ms-2">{d.choice2Text}</span>
                </div>
              {/if}
            </article>
            <aside class="py-2 ps-2">
              <img
                height="140"
                width="180"
                src={d.imgUrl}
                style="object-fit: contain;"
              />
            </aside>
          </div>
        {/each}
      </section>

      <section class="py-2">
        <Button
          color="primary"
          on:click={() => (isOpen = !isOpen)}
          class="mb-3"
        >
          {isOpen ? 'Close' : 'Edit'}
        </Button>
        <Collapse {isOpen}>
          <Card body>
            <EditorTemp arr={pages} page={data[0]} {updatePage} {deletePage} />
          </Card>
        </Collapse>
      </section>
    {/await}
  </div>
</Page>

ü