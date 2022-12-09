"use strict";
const pg = require('pg');
let config = {
    host: 'localhost',
    port: 5432,
    database: 'typescript_test',
    max: 10,
    idleTimeoutMillis: 30000,
};
const pool = new pg.Pool(config);
module.exports = pool;
