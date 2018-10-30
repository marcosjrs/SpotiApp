import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ROUTES } from '../app.routes';
import { FirstUrlOfImagesPipe } from './pipes/first-url-of-images.pipe';
import { InfoComponent } from './components/shared/info/info.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { urlSecurizadaSpotifyPipe } from './pipes/urlSecurizadaSpotify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    FirstUrlOfImagesPipe,
    InfoComponent,
    LoadingComponent,
    urlSecurizadaSpotifyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
