import { Seller } from "./sellers";
export class Product{
    id!:number;
    name:string;
    description:string;
    picture:string;
    price:number;
    seller:Seller;

    constructor(
        name:string = "Lunette",
        description:string = "Lunette anti lumière blue",
        picture:string ="",
        price:number= 4500,
        seller:Seller={
            id: 0,
            name:"",
            telephone: "",
            coordinate:{lat:"0",long:"0"}
        }
        ){
                this.name = name;
                this.description = description;
                this.picture = picture;
                this.price = price;
                this.seller=seller
    }
    

}