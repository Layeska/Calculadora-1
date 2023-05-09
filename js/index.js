class Display{
    constructor(pantallaResult,pantallaValor){
        this.pantallaResult = pantallaResult;
        this.pantallaValor = pantallaValor;
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.calculador =  new Calculadora();
        this.signos = {
            sumar: "+",
            restar: "-",
            multiplicar: "*",
            dividir: "/"
        }
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores()
    }

    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return this.valorActual = this.valorActual.toString() + numero.toString();
        console.log("agregarNumero");
        this.imprimirValores()
    }

    imprimirValores(){
        this.pantallaValor.textContent = this.valorActual;
        this.pantallaResult.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
    }
    
}

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



