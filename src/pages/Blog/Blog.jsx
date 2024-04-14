import { useEffect, useState } from "react"
import { client } from "../../lib/client"

import Post from "../../Components/Post/Post";
import { blogData } from "../../Components/Post/data";

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
      console.table(data);
    }).catch(console.error)
  }, [])

  const posts = blogData.map((item)=>(
      <Post {...item} key={item.description}/>
  ))
    
  
  return (
    <section className="blog">
      <h1>ALL BLOG POSTS</h1>
      <div className="posts">
        {posts}
      </div>
    </section>
  )
}

export default Blog