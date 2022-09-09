import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleComponent } from './components/people/people.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'people',
    redirectTo: 'people/1',
    pathMatch: 'full',
  },
  {
    path: 'people/:page',
    component: PeopleComponent,
  },
  {
    path: 'people-details/:id',
    component: PeopleDetailsComponent,
  },
  {
    path: 'films/:id',
    component: FilmDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
