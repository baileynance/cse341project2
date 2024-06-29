const express = require('express');
const router = express.Router();

const showsController = require('../controllers/shows');

router.get('/', showsController.getAll);

router.get('/:id', showsController.getSingle);

router.post('/', showsController.createUser);

router.put('/:id', showsController.updateUser);

router.delete('/:id', showsController.deleteUser);

module.exports = router;