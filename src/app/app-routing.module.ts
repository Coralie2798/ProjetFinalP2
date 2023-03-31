import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './component/experience/experience.component';



const routes: Routes = [
  {path:"experience", component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
