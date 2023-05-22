require('dotenv').config()
const {Client, Pool} = require('pg')

const DB_URL = process.env.DB_URL
const db = new Pool({connectionString: DB_URL})

module.exports = db