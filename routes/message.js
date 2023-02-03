const router=require('express').Router();
const MessageController=require('../controllers/messageController');
const auth=require('../middleware/auth');
const {messageValidate}=require('../validation/messageSchema')
const {validate}=require('../middleware/validate');

router.post('/create',validate(messageValidate),MessageController.creatMessage);
//Get
router.get('/:id',auth.verifyTokenAndRole,MessageController.gettOne)
//GetAll
router.get('/',auth.verifyTokenAndRole,MessageController.gettAll)
//delete
router.delete('/delete/:id',auth.verifyTokenAndRole,MessageController.delete);

module.exports=router;