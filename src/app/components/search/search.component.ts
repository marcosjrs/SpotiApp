import { Component, OnInit } from '@angular/core';
import { ClientSpotifyDataService } from 'src/app/services/client-spotify-data.service';
import { Artists } from 'src/app/models/artists';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists:Artists;
  showLoading:boolean;

  constructor( private spotifySvc:ClientSpotifyDataService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    if(termino.length > 2){
      this.showLoading = true;
      this.spotifySvc.getArtists(termino).subscribe(artists=>{
        this.artists = artists
        this.showLoading = false;
      });
    }
  }

}
