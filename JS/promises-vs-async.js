const posts = [
    { title: "Post1", body: "some text.."},
    { title: "Post2", body: "asdasd..."}
];

// simulates getting posts from server
function getPosts() {
    setTimeout(() => {
        console.log(posts);
    }, 1000)
}

// ==== promise ====
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const errorFlag = true;
            if (!errorFlag) {
                posts.push(post);
                resolve()
            } else {
                reject('Something went wrong');
            }
        }, 2000)
    })
}

/*
createPost({title: "Post3", body: "aaaaa"})
    .then(getPosts)
    .catch(err => console.log(err));
*/

// ==== async/await ====
async function createPostAsync() {
    try {
        await createPost({title: "Post3", body: "aaaaa"});
    } catch (error) {
        console.log(error);
    }
    
    getPosts();
}

createPostAsync();