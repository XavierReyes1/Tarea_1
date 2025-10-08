function modificarPersona(persona, nuevoNombre) {
  return {
    ...persona,
    nombre: nuevoNombre,
    edad: persona.edad + 1
  };
}


const persona = { nombre: 'Luis', edad: 30 };
const nuevaPersona = modificarPersona(persona, 'Carlos');
console.log(nuevaPersona);
console.log('Original:', persona);