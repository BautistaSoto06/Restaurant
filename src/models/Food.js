export class Food {
    constructor(id, price, stock, name, image_url, ingredients, type) {
        this.id = id;
        this.price = price;
        this.stock = stock;
        this.name = name;
        this.image_url = image_url;
        this.ingredients = ingredients;
        this.type = type;
    }

    getBaseData() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            stock: this.stock,
            image_url: this.image_url,
            ingredients: this.ingredients,
            type: this.type
        };
    }
}