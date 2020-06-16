import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planets-list/planet-details/planet-details.component';


const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent
  },
  {
    path: 'planets',
    component: PlanetDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
