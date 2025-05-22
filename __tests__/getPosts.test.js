const request = require("supertest");
const app = require("../app");

describe("GET /api/posts", () => {
  it("responds with JSON and a list of posts", async () => {
    const res = await request(app).get("/api/posts");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);

    const post = res.body[0];
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("slug");
    expect(post).toHaveProperty("excerpt");
    expect(post).toHaveProperty("author");
  });
});
