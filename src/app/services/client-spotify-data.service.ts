import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Albums } from '../models/albums';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getNewReleases():Observable<Albums>{
    const headers = new HttpHeaders({
      "Authorization":"Bearer BQDzNg1ZV8QS_kV5I7b6yyG2rCSiTWLY-JEEF-O_uLkHcoJ-gFkJOrtHyJu7sBdG7ohsdspVKe5pPKaZzLQ"
    });
    return this.httpClient
    .get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe(
      map((data)=>data["albums"])
    );
    ;
  }
   
}
