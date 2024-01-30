const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Linking route / to AppController
router.get('/', AppController.getHomepage);

// Linking routes /students and /students/:major to StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
