import { ShoppingCart } from './ShoppingCart.js';

function normalizeItem(item) {
    if (!item?.product?.id) {
        throw new Error("Formato de item inválido en el arreglo de items");
    }
    const isPositiveNumber = typeof item.quantity === 'number' && item.quantity > 0;
    return { product: item.product, quantity: isPositiveNumber ? item.quantity : 1 };
}

function validateProductAndQuantity(product, quantity) {
    if (!product?.id) {
        throw new Error("Producto inválido");
    }
    if (typeof quantity !== 'number' || quantity <= 0) {
        throw new Error("La cantidad debe ser un número mayor a 0");
    }
}

export class ShoppingCartBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.userId = null;
        this.items = [];
        this.createdDate = Date.now();
        return this;
    }

    /**
     * @param {string} userId
     */
    setUserId(userId) {
        if (!userId || typeof userId !== 'string' || userId.trim() === '') {
            throw new Error("El ID de usuario es obligatorio para el carrito");
        }
        this.userId = userId;
        return this;
    }

    /**
     * @param {Array} items - Array de objetos { product, quantity }
     */
    setItems(items) {
        if (!Array.isArray(items)) {
            throw new TypeError("Los items deben ser un arreglo");
        }
        this.items = items.map(normalizeItem);
        return this;
    }  
    
    /**
     * @param {Object} product
     * @param {number} quantity
     */
    addItem(product, quantity = 1) {
        validateProductAndQuantity(product, quantity);

        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
            return this;
        }

        this.items.push({ product, quantity });
        return this;
    }

    /**
     * @param {number} timestamp
     */
    setCreatedDate(timestamp) {
        if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
            throw new TypeError("La fecha de creación debe ser un timestamp válido");
        }
        this.createdDate = timestamp;
        return this;
    }

    build() {
        if (!this.userId) {
            throw new Error("No se puede construir el carrito sin un ID de usuario");
        }
        const result = new ShoppingCart(this.userId, [...this.items]);
        if ('createdDate' in result || Object.isExtensible(result)) {
            result.createdDate = this.createdDate;
        }
        this.reset();
        return result;
    }
}