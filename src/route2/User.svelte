<script>
  import { Page, Loader } from "../lib/bs";
  import { supabase, _user } from "../lib/data";
  const label = "Start";
  let loading = false;
  let username, website, avatar, daten, level;

  const getProfile = async () => {
    try {
      const user = $_user;
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id);
      if (error) throw error;
      if (data) {
        let d = data[0];
        username = d.username;
        website = d.website;
        avatar = d.avatar;
        daten = d.daten;
        level = d.level;
        return data;
      }
    } catch (error) {
      alert("Error Login!");
    }
  };

  const updateProfile = async () => {
    try {
      loading = true;
      const user = $_user;
      const updates = {
        id: user.id,
        username,
        website,
        avatar,
        daten,
        level,
        updated_at: new Date(),
      };

      let { data, error } = await supabase
        .from("nwp_user")
        .upsert(updates)
        .select();
      // .upsert(updates, {
      // returning: 'minimal', // Don't return the value after inserting
      // })
      if (data) console.log("DDD", data);

      if (error) throw error;
    } catch (error) {
      alert(`Error Update: ${error.message}`, 1);
    } finally {
      loading = false;
    }
  };

  const signOut = async () => {
    try {
      loading = true;
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(`Error SignOut: ${error.message}`, 1);
    } finally {
      loading = false;
    }
  };

  let promise;

  $: if ($_user) {
    promise = getProfile();
  }
</script>



{#await promise}
  <Loader />
{:then data}
  <Page>
    <div class="container py-4">
      <header>
        <h4>{username ? username : "No User"}</h4>
        <h5>{level ? `Level ${level}` : "No Level"}</h5>
      </header>
      <a href="#/" class="btn btn-primary" role="button">Start</a>
      <a href="#/game" class="btn btn-primary" role="button">Game</a>
    </div>
  </Page>
{/await}
