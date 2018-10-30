import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientSpotifyDataService } from 'src/app/services/client-spotify-data.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  id:number;
  artist:Artist;
  showLoading:boolean;

  constructor(private route:ActivatedRoute, private spotifySvc:ClientSpotifyDataService) { }

  ngOnInit() {
    this.showLoading = true;
    this.route.params.subscribe((params)=>{
      this.getArtist(params.id);
    });
  }

  getArtist(id){
    this.spotifySvc.getArtist(id).subscribe( artist => {
      this.artist = artist;
      this.showLoading = false;
    } );
  }


}
