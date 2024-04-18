/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

import './post.scss';
const Post = ({ author, title, publishedAt, url, alt, slug, categories}) => {
    const categoryItems = categories && categories.map(item=>(
        (item !== null && <p key={item.title}>{item.title}</p>)
    ))
    return (
        <Link to={`/blogs/${slug}`} className="post-container">
            {/* POST IMAGE */}
            <div className="post-image">
                {url && <img src={url} alt={alt !== null ? alt : title }/>}
            </div>
            {/* POST CONTENT */}
            <div className="post-content">
                <div className="post-name-date">
                    {author} • {publishedAt && format(new Date(publishedAt), "dd MMMM yyyy")}
                </div>
                <div className="post-title" href="">
                    <h3 className="mod-ff">
                        {title}
                    </h3>
                    <img src="./assets/images/top-right.png" alt="" className="goto-icon" />
                </div>
                <p className="post-description">
                </p>
                <div className="post-tags">
                    {categoryItems}
                </div>
            </div>
        </Link>
    )
}
export default Post;