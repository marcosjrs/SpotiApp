import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Albums } from '../models/albums';
import { Observable } from 'rxjs';
import { map,throttleTime } from 'rxjs/operators';
import { Artist } from '../models/artist';
import { Artists } from '../models/artists';

@Injectable({
  providedIn: 'root'
})
export class ClientSpotifyDataService {

  constructor(private httpClient:HttpClient) { }

  getClientID(){
    return environment.Client_ID;
  }

  getClientSecret(){
    return environment.Client_Secret;
  }

  getToken(){
    return environment.Token;
  }

  getNewReleases():Observable<Albums>{
    const headers = new HttpHeaders({
      "Authorization":"Bearer "+ this.getToken()
    });
    return this.httpClient
    .get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(
      map((data)=>data["albums"])
    );
    ;
  }
   

  getArtists( name:string ):Observable<Artists>{
    const headers = new HttpHeaders({
      "Authorization":"Bearer "+ this.getToken()
    });
    return this.httpClient
    .get('https://api.spotify.com/v1/search?type=artist&q='+name, {headers})
    .pipe(
      map((data)=>data["artists"])
    );
  }
   
}
