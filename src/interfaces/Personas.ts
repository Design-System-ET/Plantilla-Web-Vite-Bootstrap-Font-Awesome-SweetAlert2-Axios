export interface Personas {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;

    saludar(): string;
}