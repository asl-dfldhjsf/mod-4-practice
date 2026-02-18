import { fetchData } from "./fetchData.js";

 // get many things fetch
const fetchCollection = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=10');
console.log(fetchCollection[0]);