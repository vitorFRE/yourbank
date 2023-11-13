import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'YourBank - Seu banco online.',
	description:
		'Desfrute da praticidade e segurança do seu banco online personalizado, o YourBank. Uma experiência financeira projetada para atender às suas necessidades, criada com a mais recente tecnologia.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body className={lexend.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
