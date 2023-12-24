
import request from 'supertest';

import app from '../src/app';
import PRODUCT from '../src/database/InMemory';

describe('Product API', () => {

    beforeAll(() => {
        console.log('Unit Testing Start...')
    });

    afterAll(() => {
        console.log('All Test cases end...')
        console.log('EXIT')
    });

    it('success - products list should not be empty {GET /api/products}', async () => {

        const response = await request(app).get('/api/products');

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual(PRODUCT);
    });

    it('success - should get a specific product by ID {GET /api/products/1}', async () => {

        const response = await request(app).get('/api/products/1');

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual(PRODUCT.find(p => p.id === 1));

    });

    it('error - should not get a specific product by ID {GET /api/products/123}', async () => {

        const response = await request(app).get('/api/products/123');

        expect(response.status).toBe(404);
        expect(response.body.message).toEqual('Product not found');

    });

    it('success - should add a product in product list {POST /api/products}', async () => {
        const newProduct = {
            "name": "this is my test product"
        };
        const response = await request(app).post('/api/products')
            .send(newProduct)
            .set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body.message).toHaveProperty('id')

    });

    it('error - should not add a product in product list {POST /api/products}', async () => {
        const newProduct = {
            "name-temp": "this is my test product"
        };
        const response = await request(app).post('/api/products')
            .send(newProduct)
            .set('Accept', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body.message).toEqual('name required in body')

    });

    it('error - should not delete a product from the product list {DELETE /api/products/36}', async () => {

        const response = await request(app).delete('/api/products/36');

        expect(response.status).toBe(404);
        expect(response.body.message).toEqual('Product not found')

    });

    it('success - should delete a product from the product list {DELETE /api/products/3}', async () => {
        
        const response = await request(app).delete('/api/products/3');

        expect(response.status).toBe(200);
        expect(response.body.message).toEqual('deleted')

    });

});



