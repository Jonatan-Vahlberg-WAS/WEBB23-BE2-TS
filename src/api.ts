/**
 * 
 * {
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
 */

//https://jsonplaceholder.typicode.com/posts

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    const posts: Post[] = await response.json();
    return posts;
  }
  throw new Error("Unable to get posts");
}

//TODO add a get post function that either gets a post or null through promises
async function getPost(postId: number): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (response.ok) {
    const post: Post = await response.json();
    return post;
  }
  return null;
}
type PostData = Omit<Post, "id">;
//TODO add a new post
async function addPost(post: PostData): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (response.ok) {
    const post: Post = await response.json();
    return post;
  }
  throw new Error("Unable to add post");
}

//TODO update a post
async function updatePost(postId: number, post: PostData): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  if (response.ok) {
    const post: Post = await response.json();
    return post;
  }
  throw new Error("Unable to update post");
}

//TODO delete a post
async function deletePost(postId: number): Promise<void> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );
  if (response.ok) {
    return;
  }
  throw new Error("Unable to delete post");
}

async function main() {
  try {
    const posts = await getPosts();
    console.log("Posts", `[${JSON.stringify(posts?.[0] || "", null, 2)}, ...]`);
    const post = await getPost(1);
    console.log("Post", post);
    const newPost = await addPost({
      userId: 1,
      title: "New Post",
      body: "New Post Body",
    });
    console.log("New Post", newPost);
    const updatedPost = await updatePost(1, {
      userId: 1,
      title: "Updated Post",
      body: "Updated Post Body",
    });
    console.log("Updated Post", updatedPost);
    await deletePost(newPost.id);
    console.log("Deleted Post", newPost);

    //get deleted post
    const deletedPost = await getPost(newPost.id);
    console.log("Deleted Post (should be null)", deletedPost);
  } catch (error) {
    console.error(error);
  }
}

// Run the main function
main();
