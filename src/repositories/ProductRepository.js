import pool from '../config/db.js';
import { Food } from '../models/Food.js';

/**
 * Patrón Repository para gestionar los Productos / Alimentos (Food) en MySQL.
 */
export class ProductRepository {
    /**
     * Guarda un nuevo producto en la base de datos MySQL.
     * @param {Food|Object} product - Instancia de producto o datos del producto a guardar.
     * @returns {Promise<Food>} El producto guardado con su ID asignado.
     */
    async save(product) {
        const query = `
            INSERT INTO products (name, price, stock, image_url, ingredients, type)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            product.name,
            product.price,
            product.stock,
            product.image_url,
            product.ingredients || '',
            product.type
        ];

        const [result] = await pool.execute(query, values);
        
        return new Food(
            result.insertId,
            product.price,
            product.stock,
            product.name,
            product.image_url,
            product.ingredients || '',
            product.type
        );
    }

    /**
     * Obtiene todos los productos de la base de datos.
     * @returns {Promise<Food[]>} Lista de productos como instancias de Food.
     */
    async findAll() {
        const query = 'SELECT * FROM products';
        const [rows] = await pool.execute(query);

        return rows.map(row => new Food(
            row.id,
            row.price,
            row.stock,
            row.name,
            row.image_url,
            row.ingredients,
            row.type
        ));
    }

    /**
     * Obtiene un producto por su ID.
     * @param {number|string} id - ID del producto.
     * @returns {Promise<Food|null>} El producto encontrado o null si no existe.
     */
    async findById(id) {
        const query = 'SELECT * FROM products WHERE id = ?';
        const [rows] = await pool.execute(query, [id]);

        if (rows.length === 0) {
            return null;
        }

        const row = rows[0];
        return new Food(
            row.id,
            row.price,
            row.stock,
            row.name,
            row.image_url,
            row.ingredients,
            row.type
        );
    }

    /**
     * Actualiza los datos de un producto existente.
     * @param {number|string} id - ID del producto a actualizar.
     * @param {Object} productData - Nuevos datos del producto.
     * @returns {Promise<boolean>} Devuelve true si se actualizó correctamente.
     */
    async update(id, productData) {
        const query = `
            UPDATE products 
            SET name = ?, price = ?, stock = ?, image_url = ?, ingredients = ?, type = ?
            WHERE id = ?
        `;
        const values = [
            productData.name,
            productData.price,
            productData.stock,
            productData.image_url,
            productData.ingredients || '',
            productData.type,
            id
        ];

        const [result] = await pool.execute(query, values);
        return result.affectedRows > 0;
    }

    /**
     * Elimina un producto por su ID.
     * @param {number|string} id - ID del producto a eliminar.
     * @returns {Promise<boolean>} Devuelve true si el producto fue eliminado.
     */
    async delete(id) {
        const query = 'DELETE FROM products WHERE id = ?';
        const [result] = await pool.execute(query, [id]);
        return result.affectedRows > 0;
    }
}
