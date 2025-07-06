'use client';

import Template from '@/components/layout/Template';
import { useState } from 'react';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		try {
			// In a real application, you would send this data to an API
			// For demonstration, we'll simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log('Form submitted:', formData);
			setSubmitted(true);
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: ''
			});
		} catch (err) {
			setError('An error occurred while submitting the form. Please try again.');
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Template>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-4xl font-bold mb-4 text-center'>Get In Touch</h1>
				<p className='text-xl text-gray-600 dark:text-gray-400 text-center mb-12'>
					Have a question or want to work together? Feel free to contact me!
				</p>

				<div className='grid md:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div>
						<h2 className='text-2xl font-bold mb-6'>Contact Information</h2>

						<div className='space-y-6'>
							<div className='flex items-start'>
								<div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
										<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
										<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
									</svg>
								</div>
								<div className='ml-4'>
									<h3 className='text-lg font-medium'>Email</h3>
									<p className='mt-1 text-gray-600 dark:text-gray-400'>
										<a href='mailto:hello@davisbento.dev' className='hover:underline'>
											hello@davisbento.dev
										</a>
									</p>
								</div>
							</div>

							<div className='flex items-start'>
								<div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<div className='ml-4'>
									<h3 className='text-lg font-medium'>Location</h3>
									<p className='mt-1 text-gray-600 dark:text-gray-400'>San Francisco, CA</p>
								</div>
							</div>

							<div className='flex items-start'>
								<div className='flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
										<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
									</svg>
								</div>
								<div className='ml-4'>
									<h3 className='text-lg font-medium'>Phone</h3>
									<p className='mt-1 text-gray-600 dark:text-gray-400'>
										<a href='tel:+11234567890' className='hover:underline'>
											+1 (123) 456-7890
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className='mt-12'>
							<h3 className='text-xl font-bold mb-4'>Connect with me</h3>
							<div className='flex space-x-4'>
								<a
									href='https://github.com/davisbento'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
								>
									<span className='sr-only'>GitHub</span>
									<svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'>
										<path
											fillRule='evenodd'
											d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
								<a
									href='https://linkedin.com/in/davisbento'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
								>
									<span className='sr-only'>LinkedIn</span>
									<svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' />
									</svg>
								</a>
								<a
									href='https://twitter.com/davisbento'
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
								>
									<span className='sr-only'>Twitter</span>
									<svg className='h-8 w-8' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
									</svg>
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className='bg-gray-100 dark:bg-gray-800 p-8 rounded-lg'>
						{submitted ? (
							<div className='text-center py-12'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-16 w-16 text-green-500 mx-auto mb-4'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<h3 className='text-2xl font-bold mb-2'>Message Sent!</h3>
								<p className='text-gray-600 dark:text-gray-400 mb-6'>
									Thank you for reaching out. I&apos;ll get back to you as soon as possible.
								</p>
								<button
									onClick={() => setSubmitted(false)}
									className='inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors'
								>
									Send Another Message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<label htmlFor='name' className='block text-sm font-medium mb-1'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900'
									/>
								</div>

								<div>
									<label htmlFor='email' className='block text-sm font-medium mb-1'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900'
									/>
								</div>

								<div>
									<label htmlFor='subject' className='block text-sm font-medium mb-1'>
										Subject
									</label>
									<select
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900'
									>
										<option value=''>Select a subject</option>
										<option value='Job Opportunity'>Job Opportunity</option>
										<option value='Project Inquiry'>Project Inquiry</option>
										<option value='Collaboration'>Collaboration</option>
										<option value='Other'>Other</option>
									</select>
								</div>

								<div>
									<label htmlFor='message' className='block text-sm font-medium mb-1'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={6}
										value={formData.message}
										onChange={handleChange}
										required
										className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900'
									></textarea>
								</div>

								{error && <div className='text-red-600 dark:text-red-400 text-sm'>{error}</div>}

								<div>
									<button
										type='submit'
										disabled={isSubmitting}
										className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors ${
											isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
										}`}
									>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</button>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</Template>
	);
}
