import { Transport } from "../model/Transport.js";

export function User(id, username, name, surname, transport) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.transport = transport
}