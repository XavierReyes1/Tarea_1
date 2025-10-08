function filtrarDisponibles(productos, categoria) {
  return productos.filter((p) => {
    return p.categoria === categoria && p.stock > 0;
  });
}


const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];
console.log(filtrarDisponibles(productos, 'ropa'));