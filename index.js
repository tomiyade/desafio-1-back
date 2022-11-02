class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }


    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor });
    }

    getBookNames() {
        const nombreLibro = this.libros.map(libros => libros.nombre)
        return nombreLibro
    }
}

let usuario = new Usuario("Tomas", "Yadevito",
    [{ nombre: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }]
    [{ nombre: "A sangre fría", autor: "Truman Capote" }], ["Perro", "Gato"]
)

console.log(usuario.getFullName());
usuario.addMascota("Loro")
console.log(usuario.countMascotas());
usuario.addBook("Harry Potter", "J.K Rowling");
console.log(usuario.getBookNames());