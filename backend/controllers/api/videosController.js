const connection = require('../database/databaseController')

module.exports.list = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM video', 
        function (err, result) {
          if (err) throw err;
          console.log(result);
          return null
    });
  });
  return
}