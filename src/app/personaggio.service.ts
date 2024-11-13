import { Injectable } from '@angular/core';
import { Personaggio } from './personaggio';

@Injectable({
  providedIn: 'root'
})
export class PersonaggioService {

  personaggio:Personaggio=new Personaggio("Giulia","assets/personaggio.PNG");

  constructor() { }

  setPersonaggio(input:Personaggio){
    this.personaggio=input;

  }
  getPersonaggio(){
    return this.personaggio;
  }



}
