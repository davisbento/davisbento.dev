import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Davi S. Bento</title>
				<meta name='description' content="Davi's Blog" />
				<link rel='icon' href='/avatar.png' />
			</Head>

			<main className='flex flex-col items-center justify-center mt-16 gap-8'>
				<div className='flex flex-col items-center'>
					<h1 className='text-2xl text-white'>Davi S. Bento - Senior Full Stack Developer</h1>
					<Image src='/avatar.png' alt='Avatar Image' height={150} width={150} />
				</div>

				<div>
					<ul className='flex flex-col items-center'>
						<li className='text-lg'>
							<a href='https://github.com/davisbento' target='_blank' rel='noopener noreferrer'>
								Github
							</a>
						</li>
						<li className='text-lg'>
							<a href='https://linkedin.com/in/davisbento' target='_blank' rel='noopener noreferrer'>
								Linkedin
							</a>
						</li>
					</ul>
				</div>

				{/* <ul>
					{blogs.map((blog: any) => {
						return (
							<li key={blog.id}>
								<Link href={`/blog/${blog.slug}`}>
									<a>{blog.title}</a>
								</Link>
							</li>
						);
					})}
				</ul> */}
			</main>
		</div>
	);
};

// This function gets called at build time on server-side.
// export async function getStaticProps() {
// 	const fs = require('fs');
// 	const matter = require('gray-matter');
// 	const { v4: uuid } = require('uuid');

// 	const files = fs.readdirSync(`${process.cwd()}/contents`, 'utf-8');

// 	const blogs = files
// 		.filter((fn: any) => fn.endsWith('.md'))
// 		.map((fn: any) => {
// 			const path = `${process.cwd()}/contents/${fn}`;
// 			const rawContent = fs.readFileSync(path, {
// 				encoding: 'utf-8'
// 			});
// 			const { data } = matter(rawContent);

// 			return { ...data, id: uuid() };
// 		});

// 	// By returning { props: blogs }, the IndexPage component
// 	// will receive `blogs` as a prop at build time
// 	return {
// 		props: { blogs }
// 	};
// }

export default Home;
