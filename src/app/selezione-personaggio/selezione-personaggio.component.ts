import { Component, HostListener } from '@angular/core';
import { Personaggio } from '../personaggio';
import { PersonaggioService } from '../personaggio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-selezione-personaggio',
  templateUrl: './selezione-personaggio.component.html',
  styleUrls: ['./selezione-personaggio.component.scss'],
})
export class SelezionePersonaggioComponent  {

  items = [
    { image: 'assets/kim.png' },
    { image: 'assets/salvini.jpg' },
    { image: 'assets/pitta.jpg' }
  ];
  personaggi=[
    new Personaggio("Giulia","assets/personaggio2.PNG"),
    new Personaggio("Pitta","assets/pitta.jpg"),
    new Personaggio("Kim","assets/kim.png")
  ]

  // Indice dell'immagine centrale
  currentIndex = 0;

  constructor(private service:PersonaggioService,private rotte:Router) { }

  scelgiPersonaggio(personaggio:Personaggio){
    this.service.setPersonaggio(personaggio)
    this.rotte.navigate(['/menu'])

  }
  // Funzione per spostare il carosello a sinistra
  moveLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  // Funzione per spostare il carosello a destra
  moveRight() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  // Aggiungi un listener per le frecce direzionali
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.moveRight();
    } else if (event.key === 'ArrowLeft') {
      this.moveLeft();
    }
  }
}
