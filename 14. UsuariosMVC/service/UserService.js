import { User } from "../model/User.js";
import { Transport } from "../model/Transport.js";

export async function getUsers() {
  let usersList = [];

  const usersFetch = await fetch(
    "http://34.90.153.139/ejercicios/usuarios.php",
    {}
  );

  const usuarios = await usersFetch.json();
  usuarios.forEach((user) => {
    const newUser = new User(
      user.iduser,
      user.username,
      user.name,
      user.surname,
      user.transport
    );
    const transporte = getTransport2(user.transport);
    console.log(transporte);
    usersList.push(newUser);
  });

  console.log(usersList);

  return usersList;
}

// async function getTransport(idTransport) {
//   const transportFetch = await fetch(
//     "http://34.90.153.139/ejercicios/transporte.php?id=" + idTransport,
//     {}
//   );

//   const transportes = await transportFetch.json();
//   const newTransport = new Transport(
//     transportes.id,
//     transportes.nombre,
//     transportes.url_image
//   );
//   console.log(newTransport);
//   return newTransport;
// }

async function getTransport2(idTransport) {
  const transportFetch = await fetch(
    "http://34.90.153.139/ejercicios/transporte.php?id=" + idTransport,
    {}
  );

  const mapaTransportes = new Map([]);
  const transportes = await transportFetch.json();

  console.log(transportes);

  transportes.forEach((transporte) => {
    const newTransport = new Transport(
      transporte.id,
      transporte.nombre,
      transporte.url_image
    );
    mapaTransportes.set(newTransport);
  });
  console.log(mapaTransportes);
  return mapaTransportes;
}

export function printTable(users) {
  const table = document.querySelector("table");

  let infoToInsert = "";

  users.forEach((user) => {
    let id = user.id;
    let username = user.username;
    let name = user.name;
    let surname = user.surname;

    infoToInsert +=
      "<tr><td>" +
      id +
      "</td>" +
      "<td>" +
      username +
      "</td>" +
      "<td>" +
      name +
      "</td>" +
      "<td>" +
      surname +
      "</td> </tr>";
  });

  table.innerHTML += infoToInsert;
}
