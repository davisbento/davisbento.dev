import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = ({ blogs }: any) => {
	console.log(blogs);
	return (
		<div>
			<Head>
				<title>Davi S. Bento</title>
				<meta name='description' content="Davi's Blog" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center justify-center'>
				<h1 className='text-2xl'>Posts</h1>

				<ul>
					{blogs.map((blog: any) => {
						return (
							<li key={blog.id}>
								<Link href={`/blog/${blog.slug}`}>
									<a>{blog.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</main>
		</div>
	);
};

// This function gets called at build time on server-side.
export async function getStaticProps() {
	const fs = require('fs');
	const matter = require('gray-matter');
	const { v4: uuid } = require('uuid');

	const files = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8');

	const blogs = files
		.filter((fn: any) => fn.endsWith('.md'))
		.map((fn: any) => {
			const path = `${process.cwd()}/contents/${fn}`;
			const rawContent = fs.readFileSync(path, {
				encoding: 'utf-8'
			});
			const { data } = matter(rawContent);

			return { ...data, id: uuid() };
		});

	// By returning { props: blogs }, the IndexPage component
	// will receive `blogs` as a prop at build time
	return {
		props: { blogs }
	};
}

export default Home;
