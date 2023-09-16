const app = require('../src/app');
//const login = require('../src/utils/users')
//const controller = require('../src/controllers')
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {

    // beforEach(async function(){
    //     await controller.reset()
    // })

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const res = await agent.get('/rickandmorty/character/1').expect(200);
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('species');
            expect(res.body).toHaveProperty('gender');
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('origin');
            expect(res.body).toHaveProperty('image');

        })

        it('Si hay un error responde con status: 500', async () => {
            const res = await agent.get('/rickandmorty/character/jose')
            expect(res.statusCode).ToBe(500)
        })
    })
    // describe('GET /rickandmorty/login', () => {
    //     it('Al ejecutar las ruta "/login" deve obtener un objeto con la propiedad access y su valor en true', () => {
    //         expect()
    //     })
    // })
})

