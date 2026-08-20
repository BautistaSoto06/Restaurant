import { Drink } from './Drink.js';
import { FoodBuilder } from './FoodBuilder.js';

export class DrinkBuilder extends FoodBuilder {
    constructor() {
        super();
        this.ingredients = null;
    }

    reset() {
        super.reset();
        this.ingredients = null;
        return this;
    }


    /**
     * @returns {Drink}
     */
    build() {
        const drink = new Drink(this);
        this.reset();
        return drink;
    }
}
