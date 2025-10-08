function cargarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos cargados correctamente');
    }, 2000);
  });
}


console.log('Simular carga (espera 2 segundos):');
cargarDatos().then((mensaje) => {
  console.log(mensaje);
});