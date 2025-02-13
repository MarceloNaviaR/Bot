import Bot from "./bot.js";

const bot = new Bot();

document.getElementById("saludar").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value || "Usuario";
    const genero = document.getElementById("genero").value;
    const edad = parseInt(document.getElementById("edad").value) || 0;
    document.getElementById("resultado").textContent = bot.saludarPorGenero(nombre, genero) + " " + bot.saludarPorEdad(nombre, edad);
});

document.getElementById("saludarHora").addEventListener("click", () => {
    document.getElementById("resultado").textContent = bot.saludarPorHora();
});

document.getElementById("saludarEspanol").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value || "Usuario";
    document.getElementById("resultado").textContent = bot.saludarEnEspanol(nombre);
});

document.getElementById("saludarIngles").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value || "User";
    document.getElementById("resultado").textContent = bot.saludarEnIngles(nombre);
});
