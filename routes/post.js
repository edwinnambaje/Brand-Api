const PostController = require('../controllers/postController');
const router=require('express').Router();
const User=require('../models/User');
const Post=require('../models/Posts');


//create
router.post('/',PostController.creatPost);
//update
router.put('/:id',PostController.updatPost);
//delete
router.delete('/:id',PostController.deletPost);
//Get
router.get('/:id',PostController.gettPost);
//GetAll
router.get('/',PostController.gettAll);

module.exports=router;