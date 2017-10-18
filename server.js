var { HarperDB } = require("./HarperDB.js");
var fastify = require("fastify")();
require('dotenv').load();

const db = new HarperDB();

db.connect(
  "http://localhost:9925",
  process.env.HARPERDB_USER,
  process.env.HARPERDB_PWRD
);

fastify.get('/list_users', (request, reply) => {
  db.request({ operation: 'list_users'})
    .then(response => {
      reply.send({ response })
    })
    .catch(e => console.error(e));
});

fastify.listen(3000, err => {
  if (err) throw err;
  console.log(`Server listening on ${fastify.server.address().port}`);
});
