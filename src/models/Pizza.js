import { Food } from './Food.js';

export class Pizza extends Food {
    constructor(builder) {
        super(
            builder.id, 
            builder.price, 
            builder.stock, 
            builder.name, 
            builder.image_url, 
            builder.ingredients, 
            'pizza'
        );
        
        this.customNotes = builder.customNotes;
    }
}
