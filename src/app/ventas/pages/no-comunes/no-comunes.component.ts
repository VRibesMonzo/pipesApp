import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string='Susana';
  genero: string='femenino';

  
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }


  //i18nPlural
  clientes: string[]=['Maria','Pedro','Juan','Eduardo','Fernando'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other':'tenemos # clientes esperando'
  }

  cambiarNombre() {
    this.nombre='Vicent';
    this.genero='masculino';
  }
  quitarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Vicent',
    edad: 32,
    direccion: 'Gandia,Valencia'
  }

  //JSON Pipe
  heroes=[
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:false
    },
    {
      nombre: 'Aquaman',
      vuela:false
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6,7,8

  valorPromesa=new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    },3500);
  });
}
