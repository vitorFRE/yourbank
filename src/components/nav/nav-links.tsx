'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const NavItems = [
	{ href: '/', label: 'Inicio' },
	{ href: '/dsa', label: 'Carreiras' },
	{ href: '/dsaa', label: 'Sobre' },
	{ href: '/dasdas', label: 'Segurança' }
]

interface LinksProps {
	className?: string
}

export const Links: React.FC<LinksProps> = ({ className }) => {
	const pathname = usePathname()
	return (
		<nav className={className}>
			<ul className='flex items-center flex-col lg:flex-row gap-4 lg:gap-6 xl:text-lg'>
				{NavItems.map((i) => {
					return (
						<li key={i.label}>
							<Link
								href={i.href}
								className={buttonVariants({
									variant: pathname === i.href ? 'outline' : 'ghost'
								})}>
								{i.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
