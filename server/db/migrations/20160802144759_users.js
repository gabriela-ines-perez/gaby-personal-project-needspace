exports.up = (knex) => {
  return knex.schema.createTable('needs', (table) => {
    table.increments('id').primary()
    table.string('need')
    table.string('expiry')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('needs')
}
