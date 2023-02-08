// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Game from './Game.svelte';
import NotFound from './NotFound.svelte';
import Start from './Start.svelte';
import User from './User.svelte';
// @endindex

  const routes = {
    '/': Start,
    '/game': Game,
    '/user': User,
    '*': NotFound
  }
  
  export default routes;