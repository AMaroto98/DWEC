export async function getCities() {
  const citiesFetch = await fetch(
    "https://raw.githubusercontent.com/David-Haim-zz/CountriesToCitiesJSON/master/countriesToCities.json",
    {}
  );

  const citiesData = await citiesFetch.json();

  console.log(citiesData);

  const db = indexedDB.open("Cities", 1);
  console.log(db);

  db.onupgradeneeded = function (ev) {
    const dataBase = ev.target.result;
    const cityObjStore = dataBase.createObjectStore("City", { keyPath: "name", });

    for (const country in citiesData) {
      if (citiesData.hasOwnProperty(country)) {
        const city = citiesData[country];
        cityObjStore.add({name: city})
      }
    }
  };
}

// function saveCities(citiesData) {

//   const db = indexedDB.open("Cities", 1);

//   db.onupgradeneeded = function (ev) {
//     const dataBase = ev.target.result;
//     const cityObjStore = dataBase.createObjectStore("City", { keyPath: "name", });

//     for (const country in citiesData) {
//       if (citiesData.hasOwnProperty(country)) {
//         const city = citiesData[country];
//         cityObjStore.add({name: city})
//       }
//     }
//   };
// }
