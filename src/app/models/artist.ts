import { Image } from "./image";

export class Artist {
    constructor(
        public external_urls:{spotify:string},
        public href:string,
        public id:string,
        public name:string,
        public type:string,
        public uri:string,
        public followers:{href:string, total: number},
        public genres:string[],
        public images:Image[],
        public popularity: number
    ){

    }
}
