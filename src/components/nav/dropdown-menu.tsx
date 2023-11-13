import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function NavDropdownMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='default'>
					<Menu className='text-green-950' size={24} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Menu</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<span>Inicio</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Carreiras</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Sobre</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<span>Segurança</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />

				<DropdownMenuItem>
					<span>Registre-se</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<span>Entrar</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
