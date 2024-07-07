const express = require('express');
const router = express.Router();

const accountsController = require('../controllers/accounts');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', accountsController.getAll);

router.get('/:id', accountsController.getSingle);

router.post('/', isAuthenticated, accountsController.createUser);

router.put('/:id', isAuthenticated, accountsController.updateUser);

router.delete('/:id', isAuthenticated, accountsController.deleteUser);

module.exports = router;