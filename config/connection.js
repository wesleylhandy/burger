var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection({JAWSDB_URL});
} else {
	connection = mysql.createConnection({
	  host: "localhost",
	  user: "applications",
	  password: "runningfromnode",
	  database: "burgers_db"
	});
}

connection.connect();

module.exports = connection;