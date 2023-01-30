const listAllContacts = {
    tags:['Message'],
    description:"List all Messages",
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

const messageById = {
    tags:['Message'],
    description:"get the message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
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

const sendMessage = {
    tags:['Message'],
    description:"Send message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        username:{
                            type:"string",
                            description:"Your name",
                            example:"Nambaje Edwin"
                        },
                        email:{
                            type:"string",
                            description:"your email",
                            example:"Edwin@gmail.com"
                        },
                        message:{
                            type:"string",
                            description:"the message you want to send",
                            example:"hi, i want to give you a job"
                        },
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

const deleteContactById = {
    tags:['Message'],
    description:"Delete the message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
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


exports.messageRouteDocs = {
    "/api/messages":{
        post:sendMessage,
    },
    "/api/messages/{id}":{
        get:messageById
    },
    "/api/messages":{
        get:listAllContacts
    },
    "/api/messages/delete/{id}":{
        delete:deleteContactById
    }
}