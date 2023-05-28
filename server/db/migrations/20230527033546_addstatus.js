/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.table('needs', function (table) {
    table.boolean('running')
  })
}

exports.down = function (knex) {
  return knex.schema.table('needs', function (table) {
    table.dropColumn('running')
  })
}
