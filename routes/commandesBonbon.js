const {router} = require('express');
const commandesBonbonController = require('../controllers/commandesBonbon.js');
const checkAuth = require('../middleware/checkAuth.js');

const router = new Router();


router.get('/commandesBonbons', checkAuth, commandesBonbonController.getAll);
router.post('/commandesBonbons', checkAuth, commandesBonbonController.create);
router.get('/commandesBonbons/:id', checkAuth, commandesBonbonController.getOne);
router.patch('/commandesBonbons/:id', checkAuth, commandesBonbonController.update);
router.delete('/commandesBonbons/:id', checkAuth, commandesBonbonController.delete);

module.exports = router;