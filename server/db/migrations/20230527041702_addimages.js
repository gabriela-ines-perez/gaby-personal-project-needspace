/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('needs', function (table) {
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.table('needs', function (table) {
    table.dropColumn('image')
  })
}
