import { Component, OnInit } from '@angular/core';
import { ClientSpotifyDataService } from 'src/app/services/client-spotify-data.service';
import { Albums } from 'src/app/models/albums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albums:Albums;
  showLoading:boolean;
  errMsg:string;

  constructor(private spotifySvc:ClientSpotifyDataService) { 
  }

  ngOnInit() {
    this.showLoading = true;
    this.spotifySvc.getNewReleases().subscribe(albums=>{
      this.albums=albums;
      this.showLoading = false;
      this.errMsg ="";
    },
    (err)=>{
      this.errMsg = err.error.error.message;
    }
    );
  }

}
