/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'

const LongButton = ({ children, href, onClick }:LongButtonProps):JSX.Element => {
	if(href) return <Link href={href}>
		<div className="text-base bg-little-white dark:bg-discord-black text-black dark:text-gray-400 rounded flex hover:bg-little-white-hover dark:hover:bg-discord-dark-hover cursor-pointer px-4 py-4 mb-1">
			{children}
		</div>
	</Link>
	if(onClick) return <div onKeyDown={onClick} onClick={onClick} className="text-base bg-little-white dark:bg-discord-black text-black dark:text-gray-400 rounded flex hover:bg-little-white-hover dark:hover:bg-discord-dark-hover cursor-pointer px-4 py-4 mb-1">
		{children}
	</div>

	return <div  className="text-base bg-little-white dark:bg-discord-black text-black dark:text-gray-400 rounded flex hover:bg-little-white-hover dark:hover:bg-discord-dark-hover cursor-pointer px-4 py-4 mb-1">
		{children}
	</div>

  

}

export default LongButton

interface LongButtonProps {
    onClick?: (event: React.KeyboardEvent<HTMLDivElement>|React.MouseEvent<HTMLDivElement>) => void
    children: JSX.Element | JSX.Element[]
    href?: string
}