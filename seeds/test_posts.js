/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 1,
      slug: "foo",
      title: "Foo",
      author: "Ethan",
      image_url: "images/image1.jpg",
    },
    {
      id: 2,
      slug: "bar",
      title: "Bar",
      author: "Ethan",
      image_url: "images/image2.jpg",
    },
    {
      id: 3,
      slug: "baz",
      title: "Baz",
      author: "Ethan",
      image_url: "images/image3.jpg",
    },
    {
      id: 4,
      slug: "bip",
      title: "Bip",
      author: "Ethan",
      image_url: "images/image4.jpg",
    },
  ]);
};
