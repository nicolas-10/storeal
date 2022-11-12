import { Product } from './product';
  
export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Lunette",
        description: "",
        price: 90,
        picture: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
        seller:{
            id:1,
            name:"Sabot&Fils",
            telephone:"22890023055",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },
    {
        id: 2,
        name: "Pommade",
        description: "",
        price: 139,
        picture: "https://images.pexels.com/photos/7796165/pexels-photo-7796165.jpeg?auto=compress&cs=tinysrgb&w=600",
        seller:{
            id:2,
            name:"daviPommade",
            telephone:"22878191021",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },
    {
        id: 3,
        name: "Chaussure",
        description: "",
        price: 200,
        picture: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        seller:{
            id:3,
            name:"LOLSociety",
            telephone:"22890323554",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },

    {
        id: 4,
        name: "Iphone 11 Pro Max",
        description: "",
        price: 980,
        picture: "https://imei.org/storage/files/images/756/preview/apple-iphone-11-pro-max-2.png",
        seller:{
            id:5,
            name:"KYS",
            telephone:"22872345678",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },
    {
        id: 5,
        name: "SAC à dos: Louis&Viton",
        description: "",
        price: 139,
        picture: "https://ca.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-a-dos-josh--N40365_PM2_Front%20view.jpg",
        seller:{
            id:5,
            name:"MOLIKA",
            telephone:"22892219091",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },
    {
        id: 6,
        name: "Habit complet",
        description: "",
        price: 200,
        picture: "https://images.pexels.com/photos/6765185/pexels-photo-6765185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        seller:{
            id:1,
            name:"NICOLASCHOOSE",
            telephone:"22893874808",
            coordinate:{
                lat:"66",
                long:"45"
            }
        }
    },
   
];