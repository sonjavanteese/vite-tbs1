// @index(['./*.svelte', './list/*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export {
  default as Character
}
from './Character.svelte';
export {
  default as Episode
}
from './Episode.svelte';
// export { default as JsonPanel } from './JsonPanel.svelte';
export {
  default as Location
}
from './Location.svelte';
export {
  default as Quote
}
from './Quote.svelte';
export {
  default as View
}
from './View.svelte';
// @endindex
export const apiData = [{
    id: 0,
    name: "Episoden",
    path: "/db/episode/",
    page: "episode",
    url: "https://finalspaceapi.com/api/v0/episode/",
    templ: 1,
    detail: false
  },
  {
    id: 1,
    name: "Figuren",
    path: "/db/character/",
    page: "character",
    url: "https://finalspaceapi.com/api/v0/character/",
    templ: 2,
    detail: false
  },
  {
    id: 2,
    name: "Locations",
    path: "/db/location/",
    page: "location",
    url: "https://finalspaceapi.com/api/v0/location/",
    templ: 3,
    detail: false
  },
  {
    id: 3,
    name: "Zitate",
    path: "/db/quote/",
    page: "quote",
    url: "https://finalspaceapi.com/api/v0/quote/",
    templ: 4,
    detail: false
  },
];
export const fetchData = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    if (data) return data;
    throw error;
  } catch (error) {
    alert(error);
  }
}

export const sleep = (delay = 1000) => new Promise(resolve => setTimeout(resolve, delay));