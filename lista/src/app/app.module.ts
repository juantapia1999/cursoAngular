import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoComponent } from './components/destino/destino.component';
import { ListaDestinosComponent } from './components/lista-destinos/lista-destinos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    ListaDestinosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
