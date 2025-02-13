import Bot from "./bot.js";

describe("Bot", () => {
  const bot = new Bot();

  it("debería saludar con 'Hola'", () => {
    expect(bot.saludar()).toEqual("Hola");
  });

  it("debería saludar por nombre", () => {
    expect(bot.saludarPorNombre("Carlos")).toEqual("Hola, Carlos");
  });

  it("debería saludar por la hora", () => {
    const saludo = bot.saludarPorHora();
    expect(["Buenos días", "Buenas tardes", "Buenas noches"]).toContain(saludo);
  });

  it("debería saludar por género", () => {
    expect(bot.saludarPorGenero("Ana", "femenino")).toEqual("Hola, Sra. Ana");
    expect(bot.saludarPorGenero("Juan", "masculino")).toEqual("Hola, Sr. Juan");
    expect(bot.saludarPorGenero("Alex", "otro")).toEqual("Hola, Alex");
  });

  it("debería saludar por edad", () => {
    expect(bot.saludarPorEdad("Mario", 35)).toEqual("Hola, Sr. Mario");
    expect(bot.saludarPorEdad("Lucía", 25)).toEqual("Hola, Lucía");
  });

  it("debería saludar en español", () => {
    expect(bot.saludarEnEspanol("Pedro")).toEqual("Hola, Pedro");
  });

  it("debería saludar en inglés", () => {
    expect(bot.saludarEnIngles("Emily")).toEqual("Hello, Emily");
  });
});
