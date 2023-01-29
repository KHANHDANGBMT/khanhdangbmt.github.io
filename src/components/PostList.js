import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Code from './Code';
import listPost from '../json/blogIndex.json'

const PostList = () => {
  const [postList, setPostList] = useState('');
  console.log(listPost);

  useEffect(() => {
    setPostList(listPost)
  }, []);

  return (
    <>
      <article className="article">
        <div className="container">
          <div className="post-wrapper">
            <Markdown
              options={{
                overrides: {
                  Code: {
                    component: Code
                  }
                }
              }}
            >
              {JSON.stringify(postList)}
            </Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostList;
