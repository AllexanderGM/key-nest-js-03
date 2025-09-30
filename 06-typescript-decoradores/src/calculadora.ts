import { mostrarOperacion } from "./decoradores";

class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }

  //@mostrarOperacion
  resta(a: number, b: number): number {
    return a - b;
  }

  //@mostrarOperacion
  multiplica(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}

const calculadora = new Calculadora();

calculadora.sumar(2, 3);
calculadora.resta(5, 2);
calculadora.multiplica(3, 4);
calculadora.divide(10, 2);
