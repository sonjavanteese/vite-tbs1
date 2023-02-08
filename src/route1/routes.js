// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
// import App3 from './App3.svelte';
import Db from './Db.svelte';
import NotFound from './NotFound.svelte';
import Settings from './Settings.svelte';
import Start from './Start.svelte';
// @endindex

  const routes = {
    '/': Start,
    '/db/:page': Db,
    '/db/:page/:id': Db,
    '/settings': Settings,
    '*': NotFound
  }
  
  export default routes;