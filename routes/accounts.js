const express = require('express');
const router = express.Router();

const accountsController = require('../controllers/accounts');

router.get('/', accountsController.getAll);

router.get('/:id', accountsController.getSingle);

router.post('/', accountsController.createUser);

router.put('/:id', accountsController.updateUser);

router.delete('/:id', accountsController.deleteUser);

module.exports = router;