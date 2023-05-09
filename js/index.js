class Calculadora{
    sumar(num1,num2){
        return num1 + num2;
    }
    restar(num1,num2){
        return num1 - num2;
    }
    dividir(num1,num2){
        return num1 / num2;
    }
    multiplicar(num1,num2){
        return num1 * num2;
    }
}

const pantallaValor = document.getElementsByClassName("datos")
const pantallaResult = document.getElementsByClassName("resultado");
const numero = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");

const display = new Display(pantallaResult,pantallaValor);

numero.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

operadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})



