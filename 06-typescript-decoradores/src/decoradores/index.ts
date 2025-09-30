export function mostrarOperacion(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Ejecutando método: ${propertyKey}`);
    console.log(`Con argumentos:`, args);

    const result = originalMethod.apply(this, args);

    console.log(`Resultado:`, result);
    return result;
  };
}
