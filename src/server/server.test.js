const request = require('supertest');
const http = require('http');
const app = require('./server'); // Adjust the path if necessary

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
    })
);

global.alert = jest.fn();

let server;
let address;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(0, () => {
        address = server.address(); // Get the dynamically assigned port
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('Express Server', () => {
    it('should return projectData on GET /all', async () => {
        const response = await request(`http://localhost:${address.port}`).get('/all');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({});
    }, 15000); // Increase timeout to 15 seconds
});