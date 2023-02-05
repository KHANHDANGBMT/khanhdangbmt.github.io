import fs from 'fs-extra';
import path from 'path';
import fm from 'gray-matter';
import { globby } from 'globby';
import { parseISO } from 'date-fns';
import readingTime from 'reading-time';

/**
 * This looks at the ./src/pages/blog directory and creates a route manifest that can be used
 * in the sidebar and footers, and (in theory) category and author pages.
 *
 * For now, the blog manifest is a big array in reverse chronological order.
 */

import { remark } from 'remark';
import externalLinks from 'remark-external-links';
import images from 'remark-images';
import unrwapImages from 'remark-unwrap-images';
import html from 'remark-html';
// const customHeaders = require('./remark-header-custom-ids'); // Custom header id's for i18n
// const smartyPants = require('./remark-smartypants'); // Cleans up typography

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(externalLinks)
    // .use(customHeaders)
    .use(images)
    .use(unrwapImages)
    // .use(smartyPants)
    .use(html)
    .process(markdown);
  return result.toString();
}

Promise.resolve()
  .then(async () => {
    const routes = [];
    const blogPosts = await globby('src/pages/blog/**/*.md');
    console.log(blogPosts, 'blog post');

    for (let postpath of blogPosts) {
      const [year, month, day, title] = postpath
        .replace('src/pages/blog/', '')
        .split('/');

      const rawStr = await fs.readFile(postpath, 'utf8');
      console.log(rawStr, 'rawStr');
      const { data, excerpt, content } = fm(rawStr, {
        excerpt: function firstLine(file, options) {
          file.excerpt = file.content.split('\n').slice(0, 2).join(' ');
        }
      });
      const contentPost = await markdownToHtml(content.trimLeft().trim());

      routes.unshift({
        path: postpath.replace('src/pages', ''),
        date: [year, month, day].join('-'),
        title: data.title,
        author: data.author,
        tag: data.tag,
        // excerpt: content,
        readingTime: readingTime(content).text
      });

      await fs.writeFile(
        path.resolve(`./src/json/${[year, month, day].join('-')}.json`),
        JSON.stringify({render: contentPost}, null, 2)
      );
    }

    const sorted = routes.sort((post1, post2) =>
      parseISO(post1.date) > parseISO(post2.date) ? -1 : 1
    );
    const blogManifest = {
      routes: sorted
    };

    await fs.writeFile(
      path.resolve('./src/json/blogIndex.json'),
      JSON.stringify(blogManifest, null, 2)
    );
  })
  .catch(console.error);
