const db = require("../db/connection");
const getPosts = require("../getPosts");

describe("Get posts from the DB.", () => {
  afterAll(async () => {
    await db.destroy();
  });

  it("returns a list of posts", async () => {
    const posts = await getPosts("posts");
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);

    const post = posts[0];
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("slug");
    expect(post).toHaveProperty("excerpt");
    expect(post).toHaveProperty("author");
    expect(post.author).toEqual("Ethan");
  });
});
