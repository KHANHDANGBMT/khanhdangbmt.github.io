import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Code from './Code';
import './assets/css/post.css';

const Post = ({ location }) => {
  const { tag, date, readingTime } = useLocation().state;
  const [postContent, setPostContent] = useState('');
  let { year, month, day, fileName } = useParams();

  useEffect(() => {
    const importData = async () => {
      const data = await import(
        `../json/${year}-${month}-${day}-${fileName}.json`
      );
      console.log(data, 'data');
      setPostContent(
        data.render
          .replaceAll('<code>', '<Code>')
          .replaceAll('</code>', '</Code>')
      );
    };
    importData();
  }, []);

  return (
    <article className="article">
      <div className="container article-content">
        <div>
          <p className="tag">{tag}</p>
          <p>{date}</p>
        </div>
        <Markdown
          options={{
            overrides: {
              Code: {
                component: Code
              }
            }
          }}
        >
          {postContent}
        </Markdown>
      </div>
    </article>
  );
};

export default Post;
