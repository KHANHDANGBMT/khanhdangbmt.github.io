import { useEffect, useState } from 'react';
import listPost from '../json/blogIndex.json';
import './assets/css/postList.css';
import './assets/css/header.css';
import Navbar from './NavBar';

const PostList = () => {
  const [postList, setPostList] = useState('');

  useEffect(() => {
    const postList = listPost.routes.map((item) => (
      <div className="post-child">
        <div className="post-text">
          <p className="post-tag">{item.title}</p>
          <h5 className="post-title">{item.title}</h5>
          <p className="post-reading-time">{item.readingTime}</p>
          <p className="post-date">{item.date}</p>
        </div>
        <div className="post-img"></div>
      </div>
    ));
    setPostList(postList);
  }, []);

  return (
    <>
      <div className="container blog-wrapper">
        <Navbar className="custom" />
        <div className="blog-intro">
            Khanh Dang blog:{' '}
            <span class="FewWi">knowledge, and  experience to elevate our minds</span>
        </div>
        <h4 className="post-list-title">All stories</h4>
        <div className="post-wrapper">{postList}</div>
      </div>
    </>
  );
};

export default PostList;
