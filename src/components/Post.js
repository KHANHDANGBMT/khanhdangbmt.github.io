import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Code from './Code';
import './assets/css/post.css';
import { marked } from 'marked';
import Metric from './Metric';

const Post = () => {
  const [postContent, setPostContent] = useState('');
  const [frontMatter, setFrontMatter] = useState({
    title: '',
    tag: ''
  });
  let { year, month, day, fileName } = useParams();

  useEffect(() => {
    import(`../pages/blog/${year}/${month}/${day}/${fileName}`).then((res) => {
      fetch(res.default)
        .then((response) => {
          return response.text();
        })
        .then((markdown) => {
          const frontMatterEnd = markdown.indexOf('---', 4);
          if (frontMatterEnd > -1) {
            const frontMatterLines = markdown
              .substring(4, frontMatterEnd)
              .split('\n');
            const frontMatterObj = {};
            frontMatterLines.forEach((acc, line) => {
              if (acc.length) {
                const [key, value] = acc.split(':');
                frontMatterObj[key] = value.replaceAll('\r', '');
              }
            });
            setFrontMatter({
              title: frontMatterObj?.title,
              tag: frontMatterObj?.tag
            });

            setPostContent(markdown.substring(frontMatterEnd + 3).trim());
          } else {
            setPostContent(markdown);
          }
        })
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">
          {JSON.stringify(frontMatter)}
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
      </div>
    </article>
  );
};

export default Post;
