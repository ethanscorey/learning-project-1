const request = require("supertest");
const app = require("../app");

describe("GET /api/ping", () => {
  it("responds with 200 and pong", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("pong");
  });
});
