import { Component, OnInit, Input } from '@angular/core';
import { Albums } from 'src/app/models/albums';
import { Artists } from 'src/app/models/artists';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() dataCollection:Albums|Artists;

  constructor() { }

  ngOnInit() {
  }

}
