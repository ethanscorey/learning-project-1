/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("id");
    table.string("title", 255).notNullable();
    table.string("slug", 255).notNullable();
    table.string("excerpt", 255);
    table.string("author", 255);
    table.string("image_url", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
