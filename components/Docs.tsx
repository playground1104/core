import Container from '@components/Container'
import Wave from '@components/Wave'
import SEO from './SEO'

const Docs = ({ title, header, description, subheader, children }: DocsProps): JSX.Element => {
	return (
		<>
			<SEO
				title={typeof header === 'string' ? header : title}
				description={description || subheader}
			/>
			<div className='dark:bg-discord-black bg-discord-blurple'>
				<Container className='pb-10 pt-20' ignoreColor>
					<h1 className='mt-10 text-center text-gray-100 text-4xl font-bold sm:text-left'>
						{header}
					</h1>
					<h2 className='mt-5 text-center text-gray-200 text-xl font-medium sm:text-left'>
						{description}
					</h2>
					<h2 className='mt-5 text-center text-gray-200 text-xl font-medium sm:text-left'>
						{subheader}
					</h2>
				</Container>
			</div>
			<Wave
				color='currentColor'
				className='hidden dark:text-discord-black text-discord-blurple dark:bg-discord-dark bg-white md:block'
			/>
			<Container className='pb-20'>
				<div>{children}</div>
			</Container>
		</>
	)
}

export default Docs

interface DocsProps {
	header: string | JSX.Element
	title?: string
	description?: string
	subheader?: string
	children: JSX.Element | JSX.Element[]
}
