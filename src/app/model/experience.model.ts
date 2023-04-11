export class Experience {

    id_voyage:number;
    description:string;
    photo:string;
    rating_moyen:number;
    id_trajet:number;
    id_ville:number

    constructor( description:string, photo:string, rating_moyen:number, id_voyage:number,id_trajet:number,id_ville:number)
    {
        
        this.description=description,
        this.photo=photo,
        this.rating_moyen=rating_moyen,
        this.id_voyage=id_voyage,
        this.id_trajet=id_trajet,
        this.id_ville=id_ville
    }



}
