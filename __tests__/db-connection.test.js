const db = require("../db/connection");

describe("Database connection", () => {
  afterAll(async () => {
    await db.destroy();
  });

  it("should respond to a basic SELECT query", async () => {
    const result = await db.raw("SELECT 1 + 1 AS result");
    expect(result.rows[0].result).toBe(2);
  });
  it("should return the seeded post entries", async () => {
    const result = await db("posts").select();
    expect(result).toHaveLength(4);
    expect(result[0].author).toEqual("Ethan");
  });
});
