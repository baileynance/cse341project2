const express = require('express');
const router = express.Router();

const showsController = require('../controllers/shows');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', showsController.getAll);

router.get('/:id', showsController.getSingle);

router.post('/', isAuthenticated, showsController.createUser);

router.put('/:id', isAuthenticated, showsController.updateUser);

router.delete('/:id', isAuthenticated, showsController.deleteUser);

module.exports = router;