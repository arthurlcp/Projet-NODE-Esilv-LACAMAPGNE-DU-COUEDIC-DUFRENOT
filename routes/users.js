const {Router} = require('express');
const userController = require('../controllers/user.js');
const checkAuth = require('../middleware/checkAuth.js');

const router = new Router();

router.get('/users', checkAuth, userController.getAll);
router.post('/users', userController.create);
router.get('/users/:id', checkAuth, userController.getOne);
router.patch('/users/:id', checkAuth, userController.update);
router.delete('/users/:id', checkAuth, userController.delete);

module.exports = router;