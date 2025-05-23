# Journal

Since this is for my own edification, I want to include a journal documenting my
progress each day/learning session.

## Day One

### Summary

I put together the basic skeleton of the code necessary for Milestone 1. My main
goal was really just to figure out the very basics of Knex and Express, neither
of which I've used before. I also wanted to set up linting/formatting tools.

### Main Challenges

Setting up ESLint was unexpectedly hard. The transition from the legacy config
to the flat config means that a lot of the information available online is out
of date, so I had to do my best to translate it into modern syntax.

### Next Steps

I need to set up initial migrations for the database (i.e., create the `posts`
table and seed it with dummy data) and write the code to actually query the
table and return the results through the API endpoint.

I think I also need to set up a `knexfile.js` in the root directory to allow for
running migrations from the command line.

### Reflections

Express feels very Flask-y. Not in the way that its syntax works, per se, but in
the basic concept of writing functions to return data for each endpoint. I like
the simplicity, but I wonder how to evaluate its merits relative to Flask or
even just a simple straightforward PHP set up.

## Day Two

### Summary

A somewhat shorter day. I wrote my first migration and seeded the DB with some
dummy data. I also wrote a basic function to retrieve posts from the DB.

### Main Challenges

It took me a bit to get the hang of working with knex. At first, I didn't
realize it was an async function (d'oh), so I was just returning an empty
promise. Then, I got the code working, but Jest would hang after each test,
because I didn't close the DB connection.

### Next Steps

I want to pause to do some code cleaning/modernization. I'd like to introduce
Vite at some point in this project, which I think will mean that I need to
convert everything to ESM syntax where possible. Maybe not, IDK! I need to
research, because I've never used Vite before. After that, we're on to Milestone
2!

### Reflections

There has to be a better way to close the DB connection after each test. I don't
want to copy `afterAll` into every single test that could conceivably touch the
DB connection. I should figure out the best way to do that.
