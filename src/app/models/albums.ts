import { Item } from "./item";

export class Albums {
    constructor(public href: string,
                public items: Item[],
                public limit: number,
                public next: string,
                public offset: number,
                public previous: number,
                public total: number){

    }
    
}
