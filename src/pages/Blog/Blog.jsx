import { useEffect, useState } from "react"
import { client } from "../../lib/client"

import Post from "../../Components/Post/Post";

import './blog.scss';
const Blog = () => {
  const [ blogs, setBlogs ] = useState([]);

  useEffect(()=>{
    client.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        categories[]->{
          title,
        },
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`
    ).then(data=>{
      setBlogs(data);
      console.log(data)
    }).catch(console.error)

  }, [])
    
  
  return (
    <section className="blog">
      <h1>All Blog Posts</h1>
      <div className="posts">
        {
            blogs && blogs.map((blogItem)=> (
              <Post
                key={blogItem.title}
                title={blogItem.title}
                slug={blogItem.slug.current}
                publishedAt={blogItem.publishedAt}
                categories={blogItem.categories}
                url={blogItem.mainImage.asset.url}
                alt={blogItem.mainImage.alt}
                author={blogItem.name}/>
            ))
        }
      </div>
    </section>
  )
}

export default Blog