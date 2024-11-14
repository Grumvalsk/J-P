import { Component, OnInit } from '@angular/core';
import { PersonaggioService } from '../personaggio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private service:PersonaggioService) {}
  ngOnInit(): void {
    console.log("PERSONAGGIO ATTUALE "+this.service.getPersonaggio().nome);

  }

}
