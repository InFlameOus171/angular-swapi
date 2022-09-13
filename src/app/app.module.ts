import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { MapToRouterLinkPipe } from './shared/pipes/mapToRouterLink/map-to-router-link.pipe';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { MapToCharacterPipe } from './shared/pipes/mapToCharacter/map-to-character.pipe';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { ToRouteUrlPipe } from './shared/pipes/toRouteUrl/to-route-url.pipe';
import { HttpRequestInterceptor } from './shared/services/http-request-interceptor.service';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { IsUrlPipe } from './shared/pipes/isUrl/is-url.pipe';
import { ToUrlListPipe } from './shared/pipes/toUrlList/to-url-list.pipe';
import { LinkListComponent } from './components/link-list/link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    MapToRouterLinkPipe,
    FilmDetailsComponent,
    MapToCharacterPipe,
    PeopleDetailsComponent,
    ToRouteUrlPipe,
    CharacterListComponent,
    SearchComponent,
    IsUrlPipe,
    ToUrlListPipe,
    LinkListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
