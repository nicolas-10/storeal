export class Seller{
    id!:number;
    name:string;
    telephone:string;
    coordinate:Object = {
        lat:"",
        long:""
    }
    constructor(name:string="ABALO", telephone:string="00000000"){
        this.name=name;
        this.telephone=telephone;
        this.coordinate={
            lat:"",
            long:""
        }
    }

}