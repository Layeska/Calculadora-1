class Display{
    constructor(pantallaValor,pantallaResult){
        this.pantallaResult = pantallaResult;
        this.pantallaValor = pantallaValor;
        this.calculador =  new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
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
     computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ''
        this.imprimirValores()
    }
    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores()
    }

    imprimirValores(){
        this.pantallaResult.textContent = this.valorActual;
        this.pantallaValor.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
        console.log('imprimiendo Result, ', this.pantallaResult.textContent)
        console.log('Imprimiendo valor: ', this.pantallaValor.textContent)
    }

    /*imprimirValores() {
        this.pantallaResult.textContent = this.valorActual;
        this.pantallaValor.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }*/

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual);
    }
}