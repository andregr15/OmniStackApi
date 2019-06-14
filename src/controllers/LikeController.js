const Post = require('../models/Posts');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id);

        post.like += 1;

        await post.save();
        return res.json(post);
    }
};