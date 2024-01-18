export async function getCities() {
  const citiesFetch = await fetch(
    "https://raw.githubusercontent.com/David-Haim-zz/CountriesToCitiesJSON/master/countriesToCities.json",
    {}
  );

  const citiesData = await citiesFetch.json();

  console.log(citiesData);

  saveCities(citiesData)

//   return citiesData;
}

function saveCities(data) {
  const db = indexedDB.open("Cities", 2);

  db.onupgradeneeded = function (ev) {
    const dataBase = ev.target.result;
    const cityObjStore = dataBase.createObjectStore("City", {
      keyPath: "name", });
    // cityObjStore.add({data});
  };
}
