import html from 'remark-html';
import highlight from 'remark-highlight.js';
import { unified } from 'unified';
import markdown from 'remark-parse';

function BlogPostPage({ blog }: any) {
	return (
		<div>
			<h1>{blog.title}</h1>
			<section dangerouslySetInnerHTML={{ __html: blog.content }}></section>
		</div>
	);
}

// pass props to BlogPostPage component
export async function getStaticProps(context: any) {
	const fs = require('fs');
	const matter = require('gray-matter');

	const slug = context.params.slug; // get slug from params
	const path = `${process.cwd()}/contents/${slug}.md`;

	// read file content and store into rawContent variable
	const rawContent = fs.readFileSync(path, {
		encoding: 'utf-8'
	});

	const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

	const result = await unified()
		.use(markdown)
		.use(highlight) // highlight code block
		.use(html)
		.process(content); // pass content to process

	return {
		props: {
			blog: {
				...data,
				content: result.toString()
			}
		}
	};
}

// generate HTML paths at build time
export async function getStaticPaths(context: any) {
	const fs = require('fs');

	const path = `${process.cwd()}/contents`;
	const files = fs.readdirSync(path, 'utf-8');

	const markdownFileNames = files.filter((fn: any) => fn.endsWith('.md')).map((fn: any) => fn.replace('.md', ''));

	return {
		paths: markdownFileNames.map((fileName: any) => {
			return {
				params: {
					slug: fileName
				}
			};
		}),
		fallback: false
	};
}

export default BlogPostPage;
