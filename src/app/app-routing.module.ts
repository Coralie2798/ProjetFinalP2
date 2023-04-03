import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path:"utilisateur", component:UtilisateurComponent},
  {path:"inscription", component:FormulaireInscriptionComponent},
  {path:"restaurant", component:RestaurantComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
