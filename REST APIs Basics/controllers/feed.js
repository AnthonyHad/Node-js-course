exports.getPosts = (req, res, next) => {
    //no res.render() because of rest apis

    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is the first post!'}]
    });  //default status code
};


//put is better for user data

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({ // 201 for success resouce creation
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content}
    });
}