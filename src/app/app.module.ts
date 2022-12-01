import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


//Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

//Cambiar el local de la app
import localeVal from '@angular/common/locales/ca-ES-VALENCIA';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeVal);
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule,
    SharedModule,
   
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'ca-ES-VALENCIA' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
