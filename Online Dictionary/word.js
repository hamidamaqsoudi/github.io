const { rejects } = require('assert');
let mysql = require('mysql2');

let lookup = function (w) {

    const db = mysql.createConnection({
        server : 'localhost',
        user : 'admin',
        password : 'Admin@123',
        database: 'entries',
        port: 3306,
        options : {trustServerCertificate : true}
    });

    let p = new Promise((res, rej) => {

        db.query("SELECT definition, wordtype FROM entries WHERE word=?", [w], (err, result, fields) => {
            if (err) {
                console.log(err);
                //rej(err);
            }
            res(result)
        })

    });
    return p;


}

module.exports = {
    lookup
}