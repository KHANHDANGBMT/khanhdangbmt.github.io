import Markdown from 'markdown-to-jsx';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Code from './Code';

const Post = () => {
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    // import(`../pages/${id}.md`).then((res) => {
    //   fetch(res.default)
    //     .then((response) => response.text())
    //     .then((response) => setPostContent(response))
    //     .catch((err) => {
    //       console.log(err);
    //       setPostContent(<div>Can not read invalid article</div>);
    //     });
    // });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
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
              {/* {postContent} */}
            </Markdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
