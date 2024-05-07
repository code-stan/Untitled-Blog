import { PortableText } from "@portabletext/react"
import { client } from "../../lib/client"
import { useEffect } from "react"
import { useState } from "react"
import PortableTextImage from "../../Components/PortableImage"
import { useParams } from "react-router"
import { format } from "date-fns"

import "./blogpost.scss";
const BlogPost = () => {
  const [ blogPost, setBlogPost ] = useState([])
  const {blogpost} = useParams();

  const imgComp = {
    types: {
      image: PortableTextImage,
    },
  };

  useEffect(()=>{
    client.fetch(
      `*[slug.current == "${blogpost}"] {
        title,
        slug,
        body,
        publishedAt,
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
      setBlogPost(data[0]);
      console.table(data[0]);
    }).catch(console.error)
  }, [])
  return (
    <div className="post-page">
      <div className="heading-container">
        {
          blogPost.length !== 0 &&
          (<div className="text-container">
            <p>{blogPost.publishedAt && format(new Date(blogPost.publishedAt), "dd MMMM yyyy")}</p> • by <p>{blogPost.name}</p>
            <h1 className="post-title">{blogPost.title}</h1>
          </div>)
        }
        {
          blogPost.mainImage && 
          (<figure>
              <img src={blogPost.mainImage.asset.url} alt={blogPost.mainImage.alt} />
            </figure>)
        }
      </div>
      <div className="body-wrapper">
        <div className="children-container">
          <PortableText value={blogPost.body} components={imgComp}/>
        </div>
      </div>
    </div>
  )
}

export default BlogPost