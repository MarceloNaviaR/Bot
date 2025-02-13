export default class Bot {
  saludar(nombre = "", edad = 0, genero = "") {
    edad = parseInt(edad, 10);
    if (isNaN(edad)) edad = 0; // Evita error con valores no numéricos

    let titulo = "";
    if (edad >= 30) {
        if (genero.toLowerCase() === "masculino") {
            titulo = "Sr.";
        } else if (genero.toLowerCase() === "femenino") {
            titulo = "Sra.";
        }
    }

    if (!nombre) return "Hola"; // Si no hay nombre, solo dice "Hola"
    
    return `Hola, ${titulo} ${nombre}`.trim();
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
