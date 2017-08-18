// переписать потом все на классах

import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db/adb.db3');

exports.readAllAromas = function(callback) {
    let tQ = 'select * from aroma';
    db.all(tQ, callback);
};

export default db;