import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-paola',
  templateUrl: './paola.page.html',
  styleUrls: ['./paola.page.scss'],
})
export class PaolaPage implements OnInit {

  operacion:string;
  resultado:Number;
  formulario = this.fb.group({
    num1:[''],
    num2:[''],
    op:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  guardar(){
  //  console.log(this.formulario.value.num1);
    let numero1 = this.formulario.value.num1;
    let numero1Parsed = Number(numero1);
    let numero2= this.formulario.value.num2;
    let numero2Parsed = Number(numero2);
    let operacion = this.formulario.value.op;
    this.resultado;
    switch (operacion) {
      case '+':
        this.resultado = numero1Parsed + numero2Parsed;
        console.log(this.resultado);
        break;

      case '-':
        this.resultado = numero1Parsed - numero2Parsed;
        console.log(this.resultado);
        break;

      case 'x':
        this.resultado = numero1Parsed * numero2Parsed;
        console.log(this.resultado);
        break;

      case '÷':
        this.resultado = numero1Parsed / numero2Parsed;
        console.log(this.resultado);
        break;
      default:
        break;
    }


  }

}
