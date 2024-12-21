const {Router} = require('express');
const categorieBonbonController = require('../controllers/categorieBonbon.js');
const checkAuth = require('../middleware/checkAuth.js');

const router = new Router();

router.get('/categoriesBonbons', checkAuth, categorieBonbonController.getAll);
router.post('/categoriesBonbons', checkAuth, categorieBonbonController.create);
router.get('/categoriesBonbons/:id', checkAuth, categorieBonbonController.getOne);
router.patch('/categoriesBonbons/:id', checkAuth, categorieBonbonController.update);
router.delete('/categoriesBonbons/:id', checkAuth, categorieBonbonController.delete);

module.exports = router;