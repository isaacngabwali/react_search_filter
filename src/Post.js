const Post = ({ post }) => {
    return (
        <article>
            <h2>{post.name}</h2>
            <p>{post.price}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post
