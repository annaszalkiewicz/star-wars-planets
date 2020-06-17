import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailsComponent } from './planets-list/planet-details/planet-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'planets',
    component: PlanetDetailsComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: PlanetsListComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
