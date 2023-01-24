const router=require('express').Router();
const UserController=require('../controllers/userController');

router.put('/:id',UserController.updatUser);
router.delete('/:id',UserController.deletUser);
router.get('/:id',UserController.gettUser);


module.exports=router;