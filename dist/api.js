"use strict";
/**
 *
 * {
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok) {
            const posts = yield response.json();
            return posts;
        }
        throw new Error("Unable to get posts");
    });
}
//TODO add a get post function that either gets a post or null through promises
function getPost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (response.ok) {
            const post = yield response.json();
            return post;
        }
        return null;
    });
}
//TODO add a new post
function addPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (response.ok) {
            const post = yield response.json();
            return post;
        }
        throw new Error("Unable to add post");
    });
}
//TODO update a post
function updatePost(postId, post) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PUT",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (response.ok) {
            const post = yield response.json();
            return post;
        }
        throw new Error("Unable to update post");
    });
}
//TODO delete a post
function deletePost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            return;
        }
        throw new Error("Unable to delete post");
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = yield getPosts();
            console.log("Posts", `[${JSON.stringify((posts === null || posts === void 0 ? void 0 : posts[0]) || "", null, 2)}, ...]`);
            const post = yield getPost(1);
            console.log("Post", post);
            const newPost = yield addPost({
                userId: 1,
                title: "New Post",
                body: "New Post Body",
            });
            console.log("New Post", newPost);
            const updatedPost = yield updatePost(1, {
                userId: 1,
                title: "Updated Post",
                body: "Updated Post Body",
            });
            console.log("Updated Post", updatedPost);
            yield deletePost(newPost.id);
            console.log("Deleted Post", newPost);
            //get deleted post
            const deletedPost = yield getPost(newPost.id);
            console.log("Deleted Post (should be null)", deletedPost);
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Run the main function
main();
