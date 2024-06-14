export class Bench {
    id: string;
    title:string;
    kilos:string;
    reps:string;


    constructor(id: string, title:string, kilos:string,reps:string){
        this.id = id;
        this.title= title;
        this.kilos= kilos;
        this.reps = reps;
    }
}
