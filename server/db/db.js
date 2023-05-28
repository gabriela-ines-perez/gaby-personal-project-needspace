const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const db = connection

function getNeeds() {
  return db('needs').select()
}

function addNeed(need, expiry, image) {
  return db('needs').insert({
    need: need,
    expiry: expiry,
    image: image,
  })
}

function updateRunningTrue(id) {
  return db('needs').where('id', id).update('running', true)
}

function updateRunningFalse(id) {
  return db('needs').where('id', id).update('running', false)
}

module.exports = {
  getNeeds,
  addNeed,
  updateRunningTrue,
  updateRunningFalse,
}
