const knex = require('knex')(require('./knexfile'))

module.exports = {
  createUser ({ username, password, direct, type }) {
    console.log(`Add user ${username} with password ${password} direct: ${direct} type: ${type}`)
    return knex('user').insert({
      username,
      password,
      direct,
      type
    })
  }
}
