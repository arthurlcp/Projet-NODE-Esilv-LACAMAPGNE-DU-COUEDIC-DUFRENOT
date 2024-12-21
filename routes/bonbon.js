const {Router} = require('express');
const bonbonController = require('../controllers/bonbon.js');
const checkAuth = require('../middleware/checkAuth.js');

const router = new Router();
router.get('/bonbons', checkAuth, bonbonController.getAll);
router.post('/bonbons', checkAuth, bonbonController.create);
router.get('/bonbons/:id', checkAuth, bonbonController.getOne);
router.patch('/bonbons/:id', checkAuth, bonbonController.update);
router.delete('/bonbons/:id', checkAuth, bonbonController.delete);

module.exports = router;