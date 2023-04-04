import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './component/experience/experience.component';
import { ConnexionFormulaireComponent } from './component/connexion-formulaire/connexion-formulaire.component';
import { FormulaireInscriptionComponent } from './component/formulaire-inscription/formulaire-inscription.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { CompagnieFormulaireComponent } from './component/compagnie-formulaire/compagnie-formulaire.component';

import { TrajetComponent } from './component/trajet/trajet.component';

import { LieuxComponent } from './lieux/lieux.component';
import { FormulaireLieuxComponent } from './formulaire-lieux/formulaire-lieux.component';
import { FormulaireExperienceGeneraleComponent } from './formulaire-experience-generale/formulaire-experience-generale.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormulaireGuideComponent } from './formulaire-guide/formulaire-guide.component';
import { GuideComponent } from './component/guide/guide.component';
import { FormulaireVilleComponent } from './formulaire-ville/formulaire-ville.component';



const routes: Routes = [
  {path:"experience", component:ExperienceComponent},
  {path:"utilisateur", component:UtilisateurComponent},
  {path:"inscription", component:FormulaireInscriptionComponent},
  {path:"connexion", component:ConnexionFormulaireComponent},
  {path:"compagnie", component:CompagnieFormulaireComponent},


  {path:"trajet", component:TrajetComponent},
  {path:"ville", component:VilleComponent},


  {path:"connexion", component:ConnexionFormulaireComponent},
  {path:"lieux", component:LieuxComponent},
  {path:"lieuxformulaire", component:FormulaireLieuxComponent},
  {path:"ajouterExperience", component:FormulaireExperienceGeneraleComponent},
  {path:"resto", component:RestaurantComponent},
  {path:"ajouterExperience", component:FormulaireExperienceGeneraleComponent},

  {path:"trajet", component:TrajetComponent},
  {path:"guideformulaire", component:FormulaireGuideComponent},
  {path:"guide", component:GuideComponent},
  {path:"villeformulaire", component:FormulaireVilleComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
