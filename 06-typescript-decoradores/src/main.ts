import "./calculadora";
import { mostrarOperacion } from "./decoradores";

function Deprecated(message?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const warning = message || `El método ${propertyKey} está deprecado`;
      console.warn(`⚠️ DEPRECADO: ${warning}`);

      return originalMethod.apply(this, args);
    };
  };
}

// ===================================================

class Mascota {
  nombre: string;
  raza: string;

  constructor(nombre: string, raza: string) {
    this.nombre = nombre;
    this.raza = raza;
  }

  @mostrarOperacion
  hacerSonido(nombreDuenio: string): string {
    return `${nombreDuenio} dice: ¡Guau Guau! Soy ${this.nombre}, un ${this.raza}.`;
  }

  @Deprecated("Método en desuso, usar mover_2() en su lugar.")
  mover(): string {
    return `${this.nombre} se está moviendo.`;
  }

  mover_2(): string {
    return `${this.nombre} está corriendo felizmente.`;
  }
}

// ===================================================

const miMascota = new Mascota("Firulais", "Labrador");
console.log(miMascota.hacerSonido("Juan"));
console.log(miMascota.mover());
