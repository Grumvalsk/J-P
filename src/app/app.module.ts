import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { SelezionePersonaggioComponent } from './selezione-personaggio/selezione-personaggio.component';

@NgModule({
  declarations: [AppComponent, SelezionePersonaggioComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
