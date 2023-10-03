const connection = require('../database/databaseController')

module.exports.list = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM product', 
        function (err, result) {
            if (err) throw err;
            console.log(result[0]);
    });
  });
  return
}