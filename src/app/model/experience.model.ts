export class Experience {

    id_voyage:number;
    description:string;
    photo:string;
    rating_moyen:number;

    constructor( description:string, photo:string, rating_moyen:number, id_voyage:number)
    {
        
        this.description=description,
        this.photo=photo,
        this.rating_moyen=rating_moyen
        this.id_voyage=id_voyage
    }



}
