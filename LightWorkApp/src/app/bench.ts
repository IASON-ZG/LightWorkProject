export class Bench {
    id: string;
    title:string;
    kilos:string;
    reps:string;
    username:string;


    constructor(id: string, title:string, kilos:string,reps:string,username:string){
        this.id = id;
        this.title= title;
        this.kilos= kilos;
        this.reps = reps;
        this.username = username;
    }
}
