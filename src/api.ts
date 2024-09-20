
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
    body: string
}

async function getPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(response.ok) {
        const posts: Post[] = await response.json()
        console.log(posts)
        return posts
    }
    throw new Error("Unable to get posts")
}

//TODO add a get post function that either gets a post or null through promises

//TODO add a new post

//TODO update a post

//TODO delete a post

try {

    getPosts()
} catch(error) {
    console.error(error)
}

