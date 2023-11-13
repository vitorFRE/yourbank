'use client'
import { Button } from './ui/button'
import { Links } from './nav/nav-links'
import LogoImages from './nav/logo-images'
import { NavDropdownMenu } from './nav/dropdown-menu'

export const Header = () => {
	return (
		<header className='container mt-10 xl:mt-8 2xl:mt-12'>
			<div className='bg-neutral-900 rounded-full border flex justify-between items-center py-4 xl:py-5 px-4 xl:px-6 2xl:px-8'>
				{/* Logo */}
				<LogoImages />

				{/* Nav links */}
				<Links className='hidden lg:block' />

				{/* Buttons register/login */}
				<div className='hidden gap-5 lg:flex'>
					<Button variant={'ghost'}>Registrar</Button>
					<Button>Entrar</Button>
				</div>

				{/* Nav mobile */}
				<div className='lg:hidden'>
					<NavDropdownMenu />
				</div>
			</div>
		</header>
	)
}
