export class Experience {

    id_voyage:number;
    description:string;
    photo:string;
    depense:number;
    rating_moyen:number;

    constructor( description:string, photo:string, depense:number, rating_moyen:number, id_voyage:number)
    {
        this.id_voyage=id_voyage
        this.description=description,
        this.photo=photo,
        this.depense=depense,
        this.rating_moyen=rating_moyen
        
    }



}
