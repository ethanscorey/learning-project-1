const db = require("./db/connection");

const getPosts = async (table) => {
  return await db(table).select();
};

module.exports = getPosts;
