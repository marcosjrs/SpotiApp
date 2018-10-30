import { Artist } from "./artist";

export class Artists {
    constructor(public href: string,
                public items: Artist[],
                public limit: number,
                public next: string,
                public offset: number,
                public previous: number,
                public total: number){

    }
    
}
