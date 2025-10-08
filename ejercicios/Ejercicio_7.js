function contarPalabras(palabras) {
  return palabras.reduce((acc, palabra) => {
    acc[palabra] = (acc[palabra] || 0) + 1;
    return acc;
  }, {});
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

console.log(contarPalabras(palabras));