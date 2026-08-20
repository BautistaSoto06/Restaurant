import { Milanesa } from './Milanesa.js';
import { FoodBuilder } from './FoodBuilder.js';

export class MilanesaBuilder extends FoodBuilder {
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
     * @param {string} conPapas
     */
    setConPapas(conPapas) {
        this.conPapas = conPapas;
        return this;
    }

    /**
     * @returns {Milanesa}
     */
    build() {
        const milanesa = new Milanesa(this);
        this.reset();
        return milanesa;
    }
}
