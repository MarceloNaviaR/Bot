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
      if (genero === "masculino") return `Hola, Sr. ${nombre}`;
      if (genero === "femenino") return `Hola, Sra. ${nombre}`;
      return `Hola, ${nombre}`;
  }

  saludarPorEdad(nombre, edad) {
      if (edad > 30) return `Hola, ${edad >= 50 ? "Don" : "Sr./Sra."} ${nombre}`;
      return `Hola, ${nombre}`;
  }

  saludarEnEspanol(nombre) {
      return `Hola, ${nombre}`;
  }

  saludarEnIngles(nombre) {
      return `Hello, ${nombre}`;
  }
}
