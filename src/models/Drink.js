import { Food } from './Food.js';

export class Drink extends Food {
    constructor(builder) {
        super(
            builder.id, 
            builder.price, 
            builder.stock, 
            builder.name, 
            builder.image_url, 
            null, // Las bebidas no poseen ingredientes
            'drink'
        );
        
    }
}

export { Drink as Bebida };
