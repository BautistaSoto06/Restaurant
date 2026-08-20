import { Burger } from './Burger.js';
import { FoodBuilder } from './FoodBuilder.js';

export class BurgerBuilder extends FoodBuilder {
    constructor() {
        super();
        this.customNotes = "";
    }

    reset() {
        super.reset();
        this.setMetaValue('customNotes', "");
        return this;
    }

    /**
     * @param {string} customNotes
     */
    setCustomNotes(customNotes) {
        this._validateString(customNotes, "las notas personalizadas no pueden estar vacías");
        this.setMetaValue('customNotes', customNotes);
        return this;
    }

    /**
     * @returns {Burger}
     */
    build() {
        const burger = new Burger(this);
        this.reset();
        return burger;
    }
}