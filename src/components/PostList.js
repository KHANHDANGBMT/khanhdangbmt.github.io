import { useEffect, useState } from 'react';
import listPost from '../json/blogIndex.json';
import './assets/css/postList.css';
import './assets/css/header.css';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState('');

  useEffect(() => {
    import('../json/blogIndex.json').then((res) => {
      const postList = res.default.routes.map((item, index) => (
        <div className="post-child" key={index + new Date().getTime()}>
          <div className="post-text">
            <p className="post-tag">{item.tag}</p>
            <Link className="post-title" to={item.path}>
              {' '}
              {item.title}
            </Link>
            <p className="post-reading-time">{item.readingTime}</p>
            <p className="post-date">{item.date}</p>
          </div>
          <div className="post-img"></div>
        </div>
      ));
      setPostList(postList);
    });
  }, []);

  return (
    <>
      <div className="container blog-wrapper">
        <div className="blog-intro">
          Khanh Dang blog:{' '}
          <span className="FewWi">
            knowledge, and experience to elevate our minds
          </span>
        </div>
        <h4 className="post-list-title">All stories</h4>
        <div className="post-wrapper">{postList}</div>
      </div>
    </>
  );
};

export default PostList;
