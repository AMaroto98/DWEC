class Persona {

    constructor(nombre, apellido, familia, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.familia = familia;
        this.rol = rol;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getFamilia() {
        return this.familia;
    }

    setFamilia(familia) {
        this.familia = familia;
    }

    getRol() {
        return this.rol;
    }

    setRol(rol) {
        this.rol = rol;
    }
}

export default Persona;