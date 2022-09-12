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
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
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
