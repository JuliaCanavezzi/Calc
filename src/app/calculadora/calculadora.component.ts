import { Component } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number=0;
  num2: number=0;
  soma: number=0;
  subtracao: number=0;
  multiplicacao: number=0;
  divisao: number=0;

  calc(){
    this.soma = this.num1 + this.num2;
  }
  sub(){
    this.subtracao = this.num1 - this.num2;
  }
  mult(){
    this.multiplicacao = this.num1 * this.num2;
  }
  div(){
    if(this.num2 == 0){
      alert("Não é possível DIVIDIR por ZERO!");
    }
    else{
      this.divisao=this.num1/this.num2;
    }
  }

  limpar(){
    this.num1 = 0;
    this.num2 = 0;
    this.soma = 0;
    this.subtracao = 0;
    this.multiplicacao = 0;
    this.divisao = 0;
  }
}
