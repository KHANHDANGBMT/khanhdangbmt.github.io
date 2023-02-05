import fs from 'fs-extra';
import path from 'path';
import fm from 'gray-matter';
import { globby } from 'globby';
import { parseISO } from 'date-fns';
import readingTime from 'reading-time';

Promise.resolve()
  .then(async () => {
    const routes = [];
    const blogPosts = await globby('src/pages/blog/**/*.md');

    for (let postpath of blogPosts) {
      const [year, month, day, title] = postpath
        .replace('src/pages/blog/', '')
        .split('/');

      const rawStr = await fs.readFile(postpath, 'utf8');
      const { data, excerpt, content } = fm(rawStr, {
        excerpt: function firstLine(file, options) {
          file.excerpt = file.content.split('\n').slice(0, 2).join(' ');
        }
      });

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
        path.resolve(`./src/json/${[year, month, day, title].join('-')}.json`),
        JSON.stringify({ render: content }, null, 2)
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
