'use strict';

const router = require('express').Router();
const Campus = require('../../db/models').Campus;
const Student = require('../../db/models').Student;

router.get('/', function(req, res, next){
	Campus.findAll({})
		.then(function(campuses){
			res.json(campuses)
		})
		.catch(next)
});

router.get('/:campusId', function(req, res, next){
	Campus.scope('populated').findById(req.params.campusId)
		.then(function(campus){
			res.json(campus)
		})
		.catch(next);
});

router.post('/', function(req, res, next){
	return Campus.create(req.body)
		.then(function(campus){
			res.json(campus)
		})
		.catch(next);
});

router.put('/:campusId', function(req, res, next){
	Campus.findById(req.params.campusId)
		.then(function(campus){
			return campus.update(req.body);
		})
		.then(function(updatedCampus){
			res.json(updatedCampus)
		})
		.catch(next);
});

router.delete('/:campusId', function(req, res, next){
	Student.update({
		campusId: null,
	}, {
		where: {
			campusId: req.params.campusId
		}
	})
	.then(function(){
		return Campus.destroy({
			where: {
				id: req.params.campusId
			}
		})
	})
	.then(function(){
		res.sendStatus(200)
	})
	.catch(next)
});

module.exports = router;