'use strict';

const router = require('express').Router();
const Campus = require('../../db/models').Campus;
const Student = require('../../db/models').Student;

router.get('/', function(req, res, next){
	Student.findAll({
		include: [Campus]
	})
		.then(function(students){
			res.json(students);
		})
		.catch(next)
});

router.get('/:studentId', function(req, res, next){
	Student.findById(req.params.studentId)
		.then(function(student){
			res.json(student)
		})
		.catch(next)
});

router.put('/:studentId', function(req, res, next){
	console.log("~~~~id: " + JSON.stringify(req.params.studentId));
	console.log("~~~~body: " + JSON.stringify(req.body));
	Student.findById(req.params.studentId)
		.then(function(student){
			return student.update(req.body)
		})
		.then(function(updatedStudent){
			res.json(updatedStudent)
		})
		.catch(next)
});

router.post('/', function(req, res, next){
	return Student.create(req.body)
		.then(function(student){
			res.json(student);
		})
		.catch(next);
});

router.delete('/:studentId', function(req, res, next){
	return Student.destroy({
		where: {
			id: req.params.studentId
		}
	})
	.then(function(){
		res.sendStatus(200)
	})
	.catch(next)
});

module.exports = router;