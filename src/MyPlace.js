import { Map } from "./UI/Map";

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector("header h1");
    headerTitleEl.textContent = address;
  }
}

const url = new URL(location.href);
console.log(url);
const queryParams = url.searchParams;
console.log(queryParams)
console.log(queryParams.get('lat'))
const coords = {
  lat: parseFloat(queryParams.get('lat')),
  lng: +queryParams.get('lng')
};
const address = queryParams.get('address');
console.log(address)
new LoadedPlace(coords, address);
