const PostController = require('../controllers/postController');
const router=require('express').Router();
const auth=require('../middleware/auth');
const upload=require('../helpers/multer')


//create
router.post('/',upload.upload.single('image'),auth.verifyTokenAndRole,PostController.creatPost);
//get all
router.get('/all',auth.verifyToken,PostController.gettAll);
//update
router.put('/update/{id}',auth.verifyTokenAndRole,PostController.updatPost);
//delete
router.delete('/delete/{id}',auth.verifyTokenAndRole,PostController.deletPost);
//Get by id
router.get('/{id}',auth.verifyToken,PostController.gettPost);

module.exports=router;