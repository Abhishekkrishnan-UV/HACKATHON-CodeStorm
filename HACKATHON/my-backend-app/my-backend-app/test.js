const db = require('./db');

db.query('SELECT 1 + 1 AS solution', (err, rows) => {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
