import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  nombreLower: string='vicent';
  nombreUpper: string='VICENT';
  nombreCompleto: string='ViCeNt RiBeS';

  fecha: Date = new Date(); //Dia de hoy
  

}
