import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { SelezionePersonaggioComponent } from './selezione-personaggio/selezione-personaggio.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'selezione-personaggio', component: SelezionePersonaggioComponent },
  {path:'settings', component:SettingsComponent},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
