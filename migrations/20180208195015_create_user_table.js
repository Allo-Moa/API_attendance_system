exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (t) {
   t.increments('id').primary()
   t.string('username').notNullable()
   t.string('password').notNullable()
   t.timestamps(false, true)
   t.string('direct')
   t.string('type')
 })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
