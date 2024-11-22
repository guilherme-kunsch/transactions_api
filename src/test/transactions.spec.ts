import { test, beforeAll, afterAll, describe } from "vitest";
import request from "supertest";
import { app } from "../app";

describe("Transactions", () => {
    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });

    test("user can create new transactions", async () => {
        await request(app.server)
            .post("/transactions")
            .send({
                title: "New Transaction",
                amount: 8000,
                type: "debit",
            })
            .expect(201);
    });
})


