const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ong', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => { await connection.destroy();});
    it('Should to be able to create a new ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "test",
            email: "eu@test.com",
            whatsapp: "31975940098",
            city: "test",
            uf: "mg"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});