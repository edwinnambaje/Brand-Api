const PostController = require('../controllers/postController');
const CommentController = require('../controllers/commentController');
const LikeController = require('../controllers/likeController');
const router=require('express').Router();
const auth=require('../middleware/auth');
const upload=require('../helpers/multer')

const {blogSchema}=require('../validation/blogSchema')
const {validate}=require('../middleware/validate');

//create
router.post('/',upload.upload.single('image'),validate(blogSchema),auth.verifyTokenAndRole,PostController.creatPost);
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
//unlike
router.put('/:id/unlike', LikeController.unlike);
//comment
router.put("/:id/comment",CommentController.createComment);
module.exports=router;