let nombre: string = "Juan";
let num: number = 30;
let booleano: boolean = true;
let cualquiera: any = "Hola";

console.log(`${nombre} - ${num} - ${booleano} - ${cualquiera}`);

let numeros: number[] = [1, 2, 3, 4, 5];

console.log(numeros);

let textos: string[] = ["Hola", "Mundo"];

console.log(textos);

let user: { id: number; name: string; email: string; habilidades: string[] } = {
  id: 1,
  name: "Juan",
  email: "juan@example.com",
  habilidades: ["JavaScript", "TypeScript", "Angular"],
};

function mostrarUsuario(usuario: {
  id: number;
  name: string;
  email: string;
  habilidades: string[];
}) {
  console.log(`ID: ${usuario.id}`);
  console.log(`Nombre: ${usuario.name}`);
  console.log(`Email: ${usuario.email}`);
  console.log(`Habilidades: ${usuario.habilidades.join(", ")}`);
}
