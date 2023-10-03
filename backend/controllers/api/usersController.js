const connection = require('../database/databaseController')

module.exports.list = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM user', 
        function (err, result) {
            if (err) throw err;
            console.log(result);
    });
  });
  return
}

module.exports.create = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM user', 
        function (err, result) {
            if (err) throw err;
            console.log(result);
    });
  });
  return
}

module.exports.update = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM user', 
        function (err, result) {
            if (err) throw err;
            console.log(result);
    });
  });
  return
}

module.exports.delete = () => {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query(
        'SELECT * FROM user', 
        function (err, result) {
            if (err) throw err;
            console.log(result);
    });
  });
  return
}
