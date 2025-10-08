function eliminarDuplicados(elementos, propiedad) {
  const vistos = new Set();
  return elementos.filter((item) => {
    const valor = item[propiedad];
    if (vistos.has(valor)) {
      return false;
    }
    vistos.add(valor);
    return true;
  });
}


const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];
console.log(eliminarDuplicados(elementos, 'id'));