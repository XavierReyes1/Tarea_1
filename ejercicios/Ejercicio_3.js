function promedioPonderado(notas) {
  const sumaTotal = notas.reduce((acc, nota) => {
    return acc + (nota.valor * nota.peso);
  }, 0);
  return sumaTotal;
}


const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];
console.log('Promedio ponderado:'+" "+promedioPonderado(notas));
