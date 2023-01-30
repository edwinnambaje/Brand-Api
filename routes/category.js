const router=require('express').Router();
const CategoryController=require('../controllers/categoryController');
const auth=require('../middleware/auth');

router.post('/add',auth.verifyTokenAndRole,CategoryController.creatCategory);
router.get('/',auth.verifyTokenAndRole,CategoryController.gettCategory);
router.get('/:id',auth.verifyTokenAndRole,CategoryController.getCategory);
module.exports=router;