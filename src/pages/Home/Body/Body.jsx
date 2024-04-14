import Post from "../../../Components/Post/Post";
import { blogData } from "../../../Components/Post/data";

import './body.scss';
const Body = () => {
  return (
    <main className="main">
        <h3 className="recent-post__header">
          Recent blog posts
        </h3>
        <section className="recent-posts">
          {blogData.map((blogItem, i)=> <Post {...blogItem} key={i}/>)
          }
        </section>
    </main>
  )
}
export default Body;
