import { PortableText } from "@portabletext/react"
import { client } from "../../lib/client"
import { useEffect } from "react"
import { useState } from "react"
import PortableTextImage from "../../Components/PortableImage"
import { useParams } from "react-router"

const BlogPost = () => {

  const [ blogPost, setBlogPost ] = useState([])

  const slug = useParams();
  console.log(slug.blogpost)

  const imgComp = {
    types: {
      image: PortableTextImage, // Use your custom image component (if created)
    },
  };

  useEffect(()=>{
    client.fetch(
      `*[slug.current == "${slug.blogpost}"] {
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
      }`
    ).then(data=>{
      setBlogPost(data[0]);
      console.table(data[0]);
    }).catch(console.error)
  }, [])
  return (
    <div>
      <PortableText value={blogPost.body} components={imgComp}/>
    </div>
  )
}

export default BlogPost