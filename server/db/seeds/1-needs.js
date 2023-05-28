exports.seed = function (knex) {
  return knex('needs').insert([
    { id: 99901, need: 'sunshine', expiry: 60000, image: '1' },
    { id: 99902, need: 'fun', expiry: 60000, image: '2' },
    { id: 99903, need: 'nurture', expiry: 30000, image: '3' },
    { id: 99904, need: 'nature', expiry: 1000, image: '4' },
  ])
}
