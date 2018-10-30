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

  getQuery(query){
    const headers = new HttpHeaders({
      "Authorization":"Bearer "+ environment.Token
    });
    return this.httpClient.get(`https://api.spotify.com/v1/${query}`, {headers})
  }

  getNewReleases():Observable<Albums>{
    return this.getQuery('browse/new-releases').pipe(
                    map((data)=>data["albums"])
                  );
  }
   

  getArtists( name:string ):Observable<Artists>{
    return this.getQuery('search?type=artist&q='+name)
                .pipe(
                  map((data)=>data["artists"])
                );
  }

  getArtist( name:string ):Observable<any>{
    return this.getQuery('artists/'+name).pipe(
      map((data)=>{
        console.log(data)
        return data;
      })
    );
  }
   
}
