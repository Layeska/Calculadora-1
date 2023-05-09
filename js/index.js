const pantallaValor = document.querySelector(".datos")
const pantallaResult = document.querySelector(".resultado");
const numero = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");

const display = new Display(pantallaValor,pantallaResult);

numero.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

operadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})
