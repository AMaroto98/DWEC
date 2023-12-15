import { User } from "../model/User.js";

export async function getUsers() {

  let usersList = [];

  const usersFetch = await fetch(
    "http://34.90.153.139/ejercicios/usuarios.php",
    {}
  );

  const usuarios = await usersFetch.json();
  usuarios.forEach((user) => {
    const newUser = new User(user.iduser, user.username, user.name, user.surname)
    usersList.push(newUser);
  });

  return usersList;
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
