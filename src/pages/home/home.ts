import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {

  }

  converExpToBin(){
    var numero = parseInt(this.exponente.toString());
    this.binario = numero.toString(2);
    this.arrayBinario = this.binario.split("");
  }

}
