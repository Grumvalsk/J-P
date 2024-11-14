import { Component, OnInit } from '@angular/core';
import { PersonaggioService } from '../personaggio.service';
import { Personaggio } from '../personaggio';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  personaggio!: Personaggio; // Non inizializzare subito
  isJumping = false; // Stato che controlla se il personaggio è già in salto
  punteggio: number = 0;

  constructor(private personaggioService: PersonaggioService) {}

  ngOnInit() {
    // Recupera il personaggio selezionato all'avvio del componente
    this.personaggio = this.personaggioService.getPersonaggio();
    console.log("Personaggio selezionato nel gioco:", this.personaggio.nome);
  }

  // Funzione per far saltare il personaggio
  jump() {
    if (!this.isJumping) {
      this.isJumping = true; // Impostiamo lo stato su 'salto in corso'

      const personaggioElement = document.getElementById('personaggio');
      if (personaggioElement) {
        personaggioElement.classList.add('jump'); // Aggiungi la classe che avvia l'animazione
      }

      // Dopo che l'animazione è finita, rimuoviamo la classe e resettiamo lo stato
      setTimeout(() => {
        if (personaggioElement) {
          personaggioElement.classList.remove('jump'); // Rimuoviamo la classe di salto
        }
        this.isJumping = false; // Permettiamo un nuovo salto
      }, 1000); // Tempo che deve coincidere con la durata dell'animazione (1 secondo)
    }
  }
}
