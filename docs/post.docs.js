const listAllBlogs = {
    tags:['Blog'],
    description:"List all Blogs",
    security: [
        {
          token: [],
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getBlogById = {
    tags:['Blog'],
    description:"Get blog by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createBlog = {
    tags:['Blog'],
    description:"Create a Blog post",
    security: [
        {
          token: [],
        },
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        desc:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deleteBlogPost = {
    tags:['Blog'],
    description:"Delete the blog post by id",
    security: [
        {
          token: [],
        },
      ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updateBlogPost = {
    tags:['Blog'],
    description:"Update a Blog post",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        desc:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the blog post"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}
const likeBlog = {
    tags:['Blog'],
    description:"Like a Post",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}
const unlikeBlog = {
    tags:['Blog'],
    description:"Unlike a Post",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the blog",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}
const postComment = {
    tags:['Blog'],
    description:"Post Comment",
      parameters:[
        {
            name:"id",
            in:"path",
            description:"id of user",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        name:{
                            type:"string",
                            description:"username",
                            example:"edwin"
                        },
                        comment:{
                            type:"string",
                            description:"comment on a post",
                            example:"Its a nice post"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}
const getComment = {
    tags:['Blog'],
    description:"All Comments on a Post",
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}
const deleteComment = {
    tags:['Blog'],
    description:"Delete the blog comment by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the comment",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}
exports.blogRouteDocs = {
    "/api/posts":{
        post:createBlog
    },
    "/api/posts/all":{
        get:listAllBlogs
    },
    "/api/posts/{id}":{
        get:getBlogById
    },
    "/api/posts/delete/{id}":{
        delete:deleteBlogPost
    },
    "/api/posts/update/{id}":{
        put:updateBlogPost
    },
    "/api/posts/{id}/like":{
        post:likeBlog
    },
    "/api/posts/{id}/unlike":{
        put:unlikeBlog
    },
    "/api/posts/{id}/comment":{
        post:postComment
    },
    "/api/posts/comments":{
        get:getComment
    },
    "/api/posts/delete/comment/{id}":{
        delete:deleteComment
    }
}