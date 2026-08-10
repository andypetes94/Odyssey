import { posts } from "../data/tripData.js"
import "./Blog.css"

export default function Blog() {
  return (
    <section className="section container">
      <span className="eyebrow">Blog</span>
      <h1>Notes from the road</h1>
      <p className="blog-intro">
        Updates written (and filmed) by whichever one of us has signal and
        energy that day.
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card card" key={post.id}>
            {post.placeholder && <span className="blog-card__badge">Coming soon</span>}
            <h3>{post.title}</h3>
            <p className="blog-card__meta">
              {post.author} &middot; {post.date}
            </p>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
