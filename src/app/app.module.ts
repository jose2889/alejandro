import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { headercomponent } from './header/header.component';
import { footercomponent } from './footer/footer.component';
import { derechocomponent } from './right/derecho.component';
import { leftcomponent } from './left/izquierdo.component';
import { RegistroComponent } from './registro/registro.component';
import { PrestaActivosComponent } from './presta-activos/presta-activos.component';
import { ConfigprestamosComponent } from './configprestamos/configprestamos.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [ 
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'pa', component: PrestaActivosComponent},
  {path: 'configpres', component: ConfigprestamosComponent},
  { path: '',  redirectTo: '/inicio',  pathMatch: 'full'},
  { path: '**', component: NoencontradoComponent }

];

@NgModule({
  declarations: [
    AppComponent, headercomponent, footercomponent, derechocomponent, leftcomponent, RegistroComponent, PrestaActivosComponent, ConfigprestamosComponent, NoencontradoComponent, InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
