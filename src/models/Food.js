export class Food {
    constructor(id, price, stock, name, image_url, ingeredients, type) {
        this.id = id;
        this.price = price;
        this.stock = stock;
        this.name = name;
        this.image_url = image_url;
        this.ingeredients = ingeredients;
        this.ingredients = ingeredients;
        this.type = type;
    }

    getBaseData() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            stock: this.stock,
            image_url: this.image_url,
            ingeredients: this.ingeredients,
            type: this.type
        };
    }
}