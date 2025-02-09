import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const WaitlistModal = () => {
	const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || '';
	const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
	const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';
	const [isOpenModal, setIsOpenModal] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const openModal = () => {
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setIsOpenModal(false);
	};

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading(true);

		const form = event.currentTarget;

		console.log(formRef.current);

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current || '', {
				publicKey: PUBLIC_KEY,
			})
			.then(
				() => {
					toast.success('Thanks for signing up');
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error('Something went wrong, try again');
				}
			)
			.finally(() => {
				form.reset();
				setLoading(false);
				closeModal();
			});
	};
	return (
		<>
			<button
				onClick={openModal}
				className='text-primary-light text-sm md:text-base cursor-pointer hover:underline font-swis'
			>
				Join the Party
			</button>
			<Transition show={isOpenModal} as={Fragment}>
				<Dialog as='div' className={'relative z-10'} onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/80' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-[20px] bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<div
										className='rounded-full flex justify-center items-center w-6 h-6 bg-[#F3F5FA]'
										onClick={closeModal}
									>
										<svg
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M6.00001 7.41417L1.70712 11.7071L0.292908 10.2928L4.5858 5.99995L0.292908 1.70706L1.70712 0.292847L6.00001 4.58574L10.2929 0.292847L11.7071 1.70706L7.41423 5.99995L11.7071 10.2928L10.2929 11.7071L6.00001 7.41417Z'
												fill='#646D7B'
											/>
										</svg>
									</div>
									<Dialog.Title
										as='h3'
										className='text-2xl md:text-4xl font-dms-serif font-bold mt-8 leading-6 text-gray-900'
									>
										Join the Party
									</Dialog.Title>
									<form
										ref={formRef}
										onSubmit={onSubmitHandler}
										className='mt-5'
									>
										<div>
											<p className='text-sm text-gray-500'>
												Be the first to receive updates regarding our upcoming
												physical restaurant launch celebration!
											</p>
											<div className='flex flex-col gap-1 mt-6'>
												<label
													htmlFor='user_email'
													className='text-sm text-body-alt'
												>
													{' '}
													Email Address
												</label>
												<input
													type='email'
													name='user_email'
													placeholder='youremail@gmail.com'
													className='py-3 px-2 border border-grey-200 text-body-alt outline-none rounded-lg'
												/>
											</div>
											<div className='hidden gap-1 mt-6'>
												<input
													type='text'
													name='message'
													defaultValue='Invite me to the physical launch party!'
													className='py-3 px-2 border border-grey-200 text-body-alt outline-none rounded-lg'
												/>
											</div>
										</div>
										<div className='mt-8'>
											<button
												type='submit'
												disabled={loading}
												className='inline-flex justify-center rounded-md border border-transparent bg-primary disabled:bg-primary/50 w-full text-white py-3 disabled:cursor-not-allowed'
											>
												{loading ? 'Sending...' : 'Submit'}
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default WaitlistModal;
