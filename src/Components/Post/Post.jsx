/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { Link } from "react-router-dom";

import './post.scss';
const Post = ({imgBlock:{img, alt}, nameAndDate, title, description, tags:{tag1, tag2, tag3}}) => {
  return (
    <Link to="/blog/title" className="post-container">
        {/* POST IMAGE */}
        <div className="post-image">
            <img src={`./assets/images/${img}`} alt={alt}/>
        </div>
        {/* POST CONTENT */}
        <div className="post-content">
            <div className="post-name-date">
                {nameAndDate}
            </div>
            <a className="post-title" href="">
                <h3 className="mod-ff">
                    {title}
                </h3>
                <img src="./assets/images/top-right.png" alt="" className="goto-icon" />
            </a>
            <p className="post-description">
                {description}
            </p>
            <div className="post-tags">
                <p>{tag1}</p>
                <p>{tag2}</p>
                {tag3 && <p>{tag3}</p>}
            </div>
        </div>
    </Link>
  )
}
export default Post;