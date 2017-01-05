import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';

import { routing } from './app.routing';
import { SpotifyService } from "./services/spotify.service";
import { ArtistComponent } from './Components/artist/artist.component';
import { AlbumComponent } from './Components/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
