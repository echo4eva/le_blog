import { json } from "@sveltejs/kit"

export const prerender = true;

async function getPosts() {
    let posts = []

    // get paths of all posts
    const paths = import.meta.glob("/src/posts/*.md", {
        eager: true
    })

    // for all paths...
    // get file, file name (slug), export post metadata, push post to posts
    for (const path in paths) {
        const file = paths[path]
        const slug = path.split("/").at(-1)?.replace(".md", "")
        const metadata = file.metadata
        const post = { ...metadata, slug }
        post.published && posts.push(post)
    }

    // sort by date
    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )
    
    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}