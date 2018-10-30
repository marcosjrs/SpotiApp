import { Artist } from "./artist";
import { Image } from "./image";

export class Song {
    constructor(
        public album_type:string,
        public artists: Artist[],
        public available_markets: string[],
        public external_urls: string,
        public href:string,
        public id:string,
        public images: Image[],
        public name:string,
        public release_date:string,
        public release_date_precision:string,
        public total_tracks: number,
        public type:string,
        public uri:string
    ){

    }
}
