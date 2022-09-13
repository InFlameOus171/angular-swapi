import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { PeopleComponent } from './pages/people/people.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
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
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
