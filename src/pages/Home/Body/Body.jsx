/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Post from "../../../Components/Post/Post";
import { client } from "../../../lib/client";

import './body.scss';
const Body = () => {
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
    <main className="main">
        <h3 className="recent-post__header">
          Recent blog posts
        </h3>
        <section className="recent-posts">
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
              author={blogItem.name}
            />
            ))
          }
        </section>
    </main>
  )
}
export default Body;
