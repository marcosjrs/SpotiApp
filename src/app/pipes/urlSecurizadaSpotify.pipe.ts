import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'urlSecurizadaSpotify'
})
export class urlSecurizadaSpotifyPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( "https://open.spotify.com/embed?uri=" + value );
  }

}
