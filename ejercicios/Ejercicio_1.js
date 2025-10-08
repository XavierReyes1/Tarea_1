function agruparPorPropiedad(arreglo, propiedad) {
  return arreglo.reduce((acc, item) => {
    const clave = item[propiedad];
    if (!acc[clave]) {
      acc[clave] = [];
    }
    acc[clave].push(item);
    return acc;
  }, {});
}


const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];
console.log('1. Agrupar por propiedad:');
console.log(agruparPorPropiedad(datos, 'categoria'));