import { Pizza } from './Pizza.js';
import { FoodBuilder } from './FoodBuilder.js';

export class PizzaBuilder extends FoodBuilder {
    constructor() {
        super();
        this.customNotes = "";
    }

    reset() {
        super.reset();
        this.customNotes = "";
        return this;
    }

    /**
     * @param {string} customNotes
     */
    setCustomNotes(customNotes) {
        this._validateString(customNotes, "las notas personalizadas no pueden estar vacías");
        this.customNotes = customNotes;
        return this;
    }

    /**
     * @returns {Pizza}
     */
    build() {
        const pizza = new Pizza(this);
        this.reset();
        return pizza;
    }
}
