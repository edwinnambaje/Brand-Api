const PostController = require('../controllers/postController');
const CommentController = require('../controllers/commentController');
const LikeController = require('../controllers/likeController');
const router=require('express').Router();
const auth=require('../middleware/auth');
const upload=require('../helpers/multer')


//create
router.post('/',upload.upload.single('image'),auth.verifyTokenAndRole,PostController.creatPost);
//get all
router.get('/all',PostController.gettAll);
//update
router.put('/update/:id',upload.upload.single('image'),auth.verifyTokenAndRole,PostController.updatPost);
//delete
router.delete('/delete/:id',auth.verifyTokenAndRole,PostController.deletPost);
//Get by id
router.get('/:id',PostController.gettPost);
//like
router.post('/:id/like', LikeController.like);
router.post('/:id/unlike', LikeController.unlike);
//comment
router.post("/comment/:id",CommentController.createComment);
router.get("/comment/:id",CommentController.getComment);
// router.delete("/comment/:commentId",CommentController.deleteComment);
module.exports=router;