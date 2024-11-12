import { expect, test, beforeAll, afterAll } from "vitest"
import request from 'supertest'
import { app } from "../app";

beforeAll(async () => {
    await app.ready()
})

afterAll(async() => {
    await app.close()
})

test("Usuário", async () => {
    await request(app.server)
        .post('/transactions')
        .send({
            title: 'New Transaction',
            amount: 6000,
            type: 'credit'
    })
    .expect(201)
})
