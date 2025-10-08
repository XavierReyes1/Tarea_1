function obtenerUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuarios = {
        1: { id: 1, nombre: 'Juan' },
        2: { id: 2, nombre: 'María' }
      };
      resolve(usuarios[id]);
    }, 1000);
  });
}



obtenerUsuario(1)
  .then((usuario1) => {
    return obtenerUsuario(2).then((usuario2) => {
      return { usuario1, usuario2 };
    });
  })
  .then(({ usuario1, usuario2 }) => {
    console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
  });
