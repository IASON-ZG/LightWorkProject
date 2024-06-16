export class Run {
    id: string;
    title: string;
    startedOn: string;
    completedOn: string;
    kilometers: string;
    location: string;
    username: string;

    constructor(id: string , title: string, startedOn: string, completedOn: string, kilometers: string, location: string,
        username: string
    )
    {
        this.id = id;
        this.title = title;
        this.startedOn = startedOn;
        this.completedOn = completedOn;
        this.kilometers = kilometers;
        this.location = location;
        this.username = username;
    }

    // constructor(){
        
    // }

}
