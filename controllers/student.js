var db = require(__dirname+'/../lib/mysql');

exports.find = function(req, res, next){
	db.query("SELECT* FROM student", //SQL statement
	function(err, rows){ //ERROR HANDLING
	if(err) return next(err); //IF ERROR: SKIPS ALL THE ROUTE HANDLERS
	res.send(rows);
	});
};

exports.findOne = function(req, res, next){
	db.query("SELECT * FROM student WHERE id = ?", [req.params.id],
	function (err, rows){
	if (err) return next (err);
	if (rows.length === 0)
		res.status(404).send('Student not found!');
	res.send(rows[0]);
	});
};

exports.insert = function(req, res, next){
	db.query("INSERT INTO student (studno, name) VALUES (?, ?)", [req.body.studno, req.body.name],
	function (err, rows){
	if (err) return next (err);
	res.send(rows);
	});
};

exports.update = function(req, res, next){
	db.query("UPDATE student SET ? WHERE id = ?", [req.body, req.params.id],
	function (err, rows){
	if (err) return next (err);
	res.send(rows);
	});
};

exports.remove = function(req, res, next){
	db.query("DELETE FROM student WHERE id = ?", [req.params.id],
	function (err, rows){
	if (err) return next (err);
	res.send(rows);
	});
};
