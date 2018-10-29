var posts = [];
var id = 0;

module.exports = {
    createPost(req,res){
        const { text, time } = req.body;
        posts.push({id,text,time});
        id++;
        res.status(200).send(posts);
    },
    readPost(req,res){
        res.status(200).send(posts);
    },
    updatePost(req,res){
        const { text } = req.body;
        const updateId = req.params.id;
        const postIndex = posts.findIndex(post => post.id == updateId);
        let post = posts[ postIndex ];
    
        posts[ postIndex ] = {
            id: post.id,
            text: text || post.text,
            time: post.time
        }
        res.status(200).send(posts);
    },
    deletePost(req,res){
        const deleteId = req.params.id;
        postIndex = posts.findIndex(post => post.id == deleteId);
        posts.splice(postIndex, 1);
        res.status(200).send(posts);
    }
}
