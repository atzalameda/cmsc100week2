var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){//exportable functions. To export modules to other modules
	router.route('/students')
	.get(student.find);//execute the function in student.js
	
	router.route('/teachers')
	.get(teacher.view);
	
	router.route('/teachers')
	.put(teacher.add);
	
	router.route('/teachers')
	.post(teacher.update);
	
	router.route('/teachers')
	.delete(teacher.del);
	
	return router;
};
