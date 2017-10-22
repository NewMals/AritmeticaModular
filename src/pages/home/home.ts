import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObjResultado } from "../Modelo/ObjResultado";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base: number = 0;
  exponente: number = 0;
  modulo: number = 0;
  binario: string;
  arrayBinario: Array<string>;
  resultado : number = 0;
  //ObjRestulado : ObjResultado;

  ArrayResultado : Array<ObjResultado> = new Array<ObjResultado>();

  constructor(public navCtrl: NavController) {

  }

  converExpToBin(){
    this.limpiarControles();

    var numero = parseInt(this.exponente.toString());
    this.binario = numero.toString(2);
    this.arrayBinario = this.binario.split("");
    
    this.operar();
  }

  operar(){
    var count = 1;
    this.arrayBinario.forEach( iteracion => 
      {
        var obj :  ObjResultado = new ObjResultado;

        console.log(iteracion);
        obj.iteracion = iteracion;
        obj.valorActual = (count == 1) ? 1 : this.ArrayResultado[this.ArrayResultado.length - 1].resultado;
        
        var resultadoPrevio = this.modular(obj.valorActual, obj.valorActual);

        if(iteracion == "1"){          
          obj.base = this.base;
          obj.resultado = this.modular(this.base, resultadoPrevio);
        }else {
          obj.resultado = resultadoPrevio;
        }
        
        this.ArrayResultado.push(obj);
        this.resultado = obj.resultado;
        count++;
      });
  }

  modular(base, valor): number{
      var potencia = base * valor;
      var division = Math.trunc(potencia / this.modulo);
      var multiplicacion = division * this.modulo;
      var resultado = potencia - multiplicacion;
      return resultado;
  }

  limpiarControles(){
    this.binario = "";
    this.ArrayResultado = new Array<ObjResultado>();
  }
}
