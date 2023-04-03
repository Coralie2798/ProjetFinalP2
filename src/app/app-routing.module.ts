import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './component/experience/experience.component';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
<<<<<<< HEAD
import { TrajetComponent } from './component/trajet/trajet.component';
=======
import { LieuxComponent } from './lieux/lieux.component';
import { FormulaireLieuxComponent } from './formulaire-lieux/formulaire-lieux.component';
import { FormulaireExperienceGeneraleComponent } from './formulaire-experience-generale/formulaire-experience-generale.component';
>>>>>>> 6b6ad63520f1787a27e958f1347e98a87b3adaac



const routes: Routes = [
  {path:"experience", component:ExperienceComponent},
  {path:"utilisateur", component:UtilisateurComponent},
  {path:"inscription", component:FormulaireInscriptionComponent},
<<<<<<< HEAD
  {path:"trajet", component:TrajetComponent}

=======
  {path:"connexion", component:ConnexionFormulaireComponent},
  {path:"lieux", component:LieuxComponent},
  {path:"lieuxformulaire", component:FormulaireLieuxComponent},
  {path:"ajouterExperience", component:FormulaireExperienceGeneraleComponent}
>>>>>>> 6b6ad63520f1787a27e958f1347e98a87b3adaac
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
