export default class Bot {
  saludar() {
      return "Hola";
  }

  saludarPorNombre(nombre) {
      return `Hola, ${nombre}`;
  }

  saludarPorHora() {
      const hora = new Date().getHours();
      if (hora < 12) return "Buenos días";
      if (hora < 18) return "Buenas tardes";
      return "Buenas noches";
  }

  saludarPorGenero(nombre, genero) {
    if (genero.toLowerCase() === "masculino") {
        return `Hola, Sr. ${nombre}`;
    } else if (genero.toLowerCase() === "femenino") {
        return `Hola, Sra. ${nombre}`;
    }
    return `Hola, ${nombre}`; // Si no se especifica género, solo saluda con el nombre
}

saludarPorEdad(nombre, edad) {
    edad = parseInt(edad, 10);
    if (isNaN(edad)) return "Error: Edad no válida";
    if (edad >= 30) return `Hola, Sr. ${nombre}`;
    return "Hola"; // Ya no pone Sr./Sra. por defecto
}

  saludarEnEspanol(nombre) {
      return `Hola, ${nombre}`;
  }

  saludarEnIngles(nombre) {
      return `Hello, ${nombre}`;
  }
}
