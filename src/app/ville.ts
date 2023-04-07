export class Ville {
    private _id_ville:number;
    private _nom:string;

    constructor(id:number, nom:string){
        this._id_ville=id
        this._nom=nom
    }

    
    public get nom() : string {
        return this.nom
    }
    
    public get id_ville() : number {
        return this._id_ville
    }
    
    
}
