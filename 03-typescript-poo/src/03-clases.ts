class Carros {
  // Atributos
  public marca: string;
  public modelo: string;
  private anio: number;

  // Constructor
  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  // Getters y Setters
  get getAnio(): number {
    return this.anio;
  }

  // Métodos
  public obtenerInformacion(): string {
    return `${this.marca} ${this.modelo} (${this.anio})`;
  }

  public actualizarAnio(nuevoAnio: number): void {
    this.anio = nuevoAnio;
  }
}

const toyota = new Carros("Toyota", "Corolla", 2020);
/* =============================================== */

class Characters {
  public name: string;
  public species: string;
  public image: string;

  constructor(name: string, species: string, image: string) {
    this.name = name;
    this.species = species;
    this.image = image;
  }

  async obtenerPersonaje(): Promise<void> {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character/2");
      const character = res.status === 200 ? await res.json() : null;

      const { name, species, image } = character || {};

      if (character) {
        this.name = name;
        this.species = species;
        this.image = image;
      }
    } catch (error) {
      console.log("Error al obtener el personaje:", error);
    }
  }
}

const personaje = new Characters("Morty Smith", "Human", "url");
console.log(personaje);

async function fetchCharacter() {
  await personaje.obtenerPersonaje();
}

fetchCharacter();
