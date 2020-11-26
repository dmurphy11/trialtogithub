/* 
following code principals were obtained and altared from https://www.sqlitetutorial.net/sqlite-nodejs/connect/ 
*/


const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the sample database.');
});


db.serialize(() => {
    db.each(`SELECT *
             FROM database`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.ID + "\t" + row.Name + "\t" + row.Age);
    });
  });



db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection for now.');
});