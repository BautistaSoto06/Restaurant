export class Burger extends Food {
    constructor(builder) {
        super(
            builder.id, 
            builder.price, 
            builder.stock, 
            builder.name, 
            builder.image_url, 
            builder.ingredients, 
            'burger'
        );
        
        this.customNotes = builder.customNotes;
    }
}