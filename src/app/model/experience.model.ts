export class Experience {

    id_voyage:number;
    destination:string;
    description:string;
    photo:string;
    rating_moyen:number;

    constructor(destination:string, description:string, photo:string, rating_moyen:number, id_voyage:number)
    {
        this.destination=destination,
        this.description=description,
        this.photo=photo,
        this.rating_moyen=rating_moyen
        this.id_voyage=id_voyage
    }

public get Destination() : string {
    return this.destination;
}

}
