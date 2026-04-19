import { Personas } from "../interfaces/Personas";

export class Persona implements Personas {
    id: number;
    nombre: string              
    apellido: string;
    edad: number
    email: string;

    constructor(id: number, nombre: string, apellido: string, edad: number, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }   

}