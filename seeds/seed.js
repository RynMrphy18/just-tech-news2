

const {Comment, User, Post} = require("../models")
let comment = {
    comment_text: "Helloooeeee",
    user_id: 1,
    post_id:1
}
let user = {
    username: "Hellofisheeee",
    email: "Hellofisheee@gmail.com",
    password:"passwordeee"
}
let post = {
    title: "tedereeeeee",
    post_url: "https://app.slack.com/client/TLXH0JYKB/C02JNPNQNLUe",
    user_id: 1
}

User.create(user).then(()=> {
    Post.create(post).then(()=> {
        Comment.create(comment)
    })
    
})