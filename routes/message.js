const router=require('express').Router();
const MessageController=require('../controllers/messageController');

router.post('/',MessageController.creatMessage);
//Get
router.get('/:id',MessageController.gettOne)
//GetAll
router.get('/',MessageController.gettAll)

module.exports=router;