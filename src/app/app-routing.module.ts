import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ExperienceComponent } from './component/experience/experience.component';



const routes: Routes = [
  {path:"experience", component:ExperienceComponent}
=======
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';

const routes: Routes = [
  {path:"utilisateur", component:UtilisateurComponent},
  {path:"inscription", component:FormulaireInscriptionComponent}

>>>>>>> 698a33edcca081253b8741cdbb345fea730cd7e9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
