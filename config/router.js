var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){//exportable functions. To export modules to other modules
	router.route('/students')
	.get(student.find)//execute the function in student.js
	.post(student.insert);
	
	router.route('/students/:id')
	.get(student.findOne)
	.put(student.update)
	.delete(student.remove);
	
	router.route('/teachers')
	.get(teacher.view)
	.put(teacher.add)
	.post(teacher.update)
	.delete(teacher.del);
	
	return router;
};
