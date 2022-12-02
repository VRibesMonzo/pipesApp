import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayusculas:boolean=false;
  ordenarPor: string='';
  heroes: Heroe[]=[
  {
    nombre:'Superman',
    vuela:true,
    color:Color.azul
  },
  {
    nombre:'Batman',
    vuela:false,
    color:Color.negro
  },
  {
    nombre:'Robin',
    vuela:false,
    color:Color.verde
  },
  {
    nombre:'Dardevil',
    vuela:false,
    color:Color.rojo
  },
  {
    nombre:'Linterna verde',
    vuela:true,
    color:Color.verde
  }
]
  constructor() { }



  cambiar() {
    this.enMayusculas=!this.enMayusculas;
  }
 
  cambiarOrden(valor:string) {
    this.ordenarPor=valor;
  } 
}
