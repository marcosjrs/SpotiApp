import { Song } from "./song";

export class Albums {
    constructor(public href: string,
                public items: Song[],
                public limit: number,
                public next: string,
                public offset: number,
                public previous: number,
                public total: number){

    }
    
}
