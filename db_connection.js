require('dotenv').config();
const {Pool} = require('pg');

const is_a_production = process.env.NODE_ENV === "production";