import { Food } from './Food.js';

export class Milanesa extends Food {
    constructor(builder) {
        super(
            builder.id, 
            builder.price, 
            builder.stock, 
            builder.name, 
            builder.image_url, 
            builder.ingredients, 
            'milanesa'
        );
        this.conPapas = builder.conPapas;
        this.customNotes = builder.customNotes;
    }
}
