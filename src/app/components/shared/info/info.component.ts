import { Component, OnInit, Input } from '@angular/core';
import { Albums } from 'src/app/models/albums';
import { Artists } from 'src/app/models/artists';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() dataCollection: Albums | Artists;

  constructor(private router: Router) { }

  showArtist(item) {
    let artistId = item.type == "album" ? item.artists[0].id : item.id;
    this.router.navigate(["/artist", artistId]);
  }

  ngOnInit() {
  }

}
