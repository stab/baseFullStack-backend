// https://expressjs.com/en/guide/routing.html

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user')

/* POST new user */
router.post('/', auth, userCtrl.createUser);

/* GET all users. */
router.get('/', auth, userCtrl.getAllUsers);

/* GET one user. */
router.get('/:pk', auth, userCtrl.getOneUser);

/* DELETE one user. */
router.delete('/:pk', auth, userCtrl.deleteUser);

/* UPDATE one user. */
router.put('/:pk', auth, userCtrl.modifyUser);

module.exports = router;
