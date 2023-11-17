import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	ArrowLeftRight,
	BadgeCheck,
	Bitcoin,
	DollarSign,
	Euro,
	Gem,
	Plus
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export const HeroSection = () => {
	return (
		<section className='flex flex-col md:flex-row xl:gap-36 2xl:gap-48 gap-20'>
			<div className='flex flex-col lg:max-w-[650px] items-center md:items-start justify-center md:justify-start mt-12'>
				<Badge className='flex gap-2 bg-neutral-900 py-2 pl-2 pr-4' variant='secondary'>
					<BadgeCheck size={20} className='text-primary' /> Sem verificação de crédito.
				</Badge>
				<h1 className='font-medium text-[28px] lg:text-[38px] leading-[42px] text-center md:text-left mt-3'>
					Bem-vindo ao YourBank Potencializando a sua{' '}
					<span className='text-primary'>jornada financeira</span>
				</h1>
				<p className='text-white/90 leading-[21px] text-sm lg:text-base text-center md:text-left mt-2'>
					No YourBank, nossa missão é oferecer soluções bancárias abrangentes que
					capacitam indivíduos e empresas a alcançar seus objetivos financeiros. Estamos
					comprometidos em fornecer serviços personalizados e inovadores que priorizam as
					necessidades de nossos clientes.
				</p>
				<Button className='mt-[30px] lg:mt-[40px]'>Abrir conta</Button>
			</div>

			<div className='flex justify-center relative md:mt-16'>
				<div className='flex items-center gap-1 2xl:gap-2 rounded-md px-3 py-2 bg-green-500/20 absolute -top-9 lg:-top-10 left-0 sm:-left-6 lg:-left-8 xl:-left-11'>
					<div className='bg-primary bg-green-500 rounded-full p-2 w-min h-min'>
						<Plus size={18} className='text-neutral-900' />
					</div>
					<div>
						<span className='text-[10.2px] lg:text-[13.7px] 2xl:text-[17.3px]'>
							+ R$5000,00
						</span>
						<p className='font-light text-[8.2px] lg:text-[11px] 2xl:text-[13.8px]'>
							Renda Mensal
						</p>
					</div>
				</div>

				<Image
					className='absolute -z-10 -top-5 -right-4 md:-right-6 xl:-right-28'
					src={'/images/Abstract.svg'}
					alt='detalhes'
					width={220}
					height={201}
				/>

				<Card className='w-[305px] lg:w-[410px] 2xl:w-[515px] bg-neutral-900'>
					<CardContent className='p-5'>
						<p className='text-[10px] lg:text-sm 2xl:text-[17.3px] font-medium mb-3'>
							Suas Transações
						</p>
						<div className='flex justify-between border bg-neutral-900 py-2 px-3 relative rounded-sm z-[4]'>
							<div className='flex items-center gap-2'>
								<div className='bg-primary rounded-full p-[5px] w-min h-min'>
									<ArrowLeftRight className='text-neutral-900 w-4 h-4 2xl:w-5 2xl:h-5' />
								</div>
								<div className='flex flex-col'>
									<span className='font-light text-[9px] lg:text-[12.3px] 2xl:text-[15.6px] leading-[13,8px]'>
										Transação
									</span>
									<p className='text-[10px] lg:text-[13.7px] 2xl:text-[17.3px] leading-[15px]'>
										Luscas Silva
									</p>
								</div>
							</div>
							<p className='font-medium text-[12.3px] lg:text-[16.5px] 2xl:text-[20px] self-end'>
								-R$84.00
							</p>
						</div>

						<div className='z-[3] flex justify-between border bg-neutral-900 py-2 px-3 mx-3 rounded-sm relative -top-3 opacity-50'>
							<div className='flex items-center gap-2'>
								<div className='bg-primary rounded-full p-[5px] w-min h-min'>
									<ArrowLeftRight className='text-neutral-900 w-4 h-4 2xl:w-5 2xl:h-5' />
								</div>
								<div className='flex flex-col'>
									<span className='font-light text-[9px] lg:text-[12.3px] 2xl:text-[15.6px] leading-[13,8px]'>
										Transação
									</span>
									<p className='text-[10px] lg:text-[13.7px] 2xl:text-[17.3px] leading-[15px]'>
										João Santos
									</p>
								</div>
							</div>
							<p className='font-medium text-[12.3px] lg:text-[16.5px] 2xl:text-[20px] self-end'>
								-R$93.00
							</p>
						</div>

						<div className='z-[2] flex justify-between border bg-neutral-900 py-2 px-3 mx-6 rounded-sm relative -top-6 opacity-25'>
							<div className='flex items-center gap-2'>
								<div className='bg-primary rounded-full p-[5px] w-min h-min'>
									<ArrowLeftRight className='text-neutral-900 w-4 h-4 2xl:w-5 2xl:h-5' />
								</div>
								<div className='flex flex-col'>
									<span className='font-light text-[9px] lg:text-[12.3px] 2xl:text-[15.6px] leading-[13,8px]'>
										Transação
									</span>
									<p className='text-[10px] lg:text-[13.7px] 2xl:text-[17.3px] leading-[15px]'>
										Alice Kenley
									</p>
								</div>
							</div>
							<p className='font-medium text-[12.3px] lg:text-[16.5px] 2xl:text-[20px] self-end'>
								-R$63.00
							</p>
						</div>

						<p className='text-[10px] lg:text-sm 2xl:text-[17.3px] font-medium mb-3'>
							Câmbio
						</p>

						<div className='grid grid-cols-2 border bg-neutral-900 rounded-sm'>
							<div className=' p-3 border-r border-b'>
								<div className='flex gap-1 items-center'>
									<Image
										src={'/images/BRL.svg'}
										width={20}
										height={20}
										alt='Bandeira do Brasil'
										className='lg:w-[27px] 2xl:w-[34px] lg:h-[27px] 2xl:h-[34px]'
									/>
									<span className='text-[9.2px] lg:text-[12.3px] 2xl:text-base'>BRL</span>
								</div>
								<p className='text-[8.2px] lg:text-[11px] 2xl:text-[13.8px] text-white/90 font-light mt-1'>
									Real Brasileiro
								</p>
							</div>
							<div className='p-3 border-b'>
								<div className='flex gap-1 items-center'>
									<Image
										src={'/images/USD.svg'}
										width={20}
										height={20}
										className='lg:w-[27px] 2xl:w-[34px] lg:h-[27px] 2xl:h-[34px]'
										alt='Bandeira do EUA'
									/>
									<span className='text-[9.2px] lg:text-[12.3px] 2xl:text-base'>USD</span>
								</div>
								<p className='text-[8.2px] lg:text-[11px] 2xl:text-[13.8px] text-white/90 font-light mt-1'>
									Dólar dos Estados Unidos
								</p>
							</div>
							<div className='px-3 py-4 border-r'>
								<p className='font-medium text-[10.2px] lg:text-[13.7px] 2xl:text-[17.3px]'>
									2458,35
								</p>
							</div>
							<div className='px-3 py-4'>
								<p className='font-medium text-[10.2px] lg:text-[13.7px] 2xl:text-[17.3px]'>
									500
								</p>
							</div>
						</div>

						<Button className='bg-green-500/20 2xl:text-base hover:text-neutral-900 text-green-500 w-full mt-4'>
							Trocar
						</Button>
					</CardContent>
				</Card>

				<div className='flex gap-1 items-center absolute -bottom-[64px] -right-[0px] xl:-right-7 bg-green-500/20 rounded-full py-2 pr-2 pl-3'>
					<p className='text-[9.2px] lg:text-[12.3px] 2xl:text-[15.6px]'>
						Moeda suportada
					</p>
					<div className='flex gap-1 bg-neutral-900 p-1 rounded-full'>
						<div className=' bg-green-950 rounded-full p-[5px] w-min h-min'>
							<Bitcoin className='text-green-500 w-[14px] h-[14px] 2xl:w-5 2xl:h-5' />
						</div>
						<div className=' bg-green-950 rounded-full p-[5px] w-min h-min'>
							<Euro className='text-green-500 w-[14px] h-[14px] 2xl:w-5 2xl:h-5' />
						</div>
						<div className=' bg-green-950 rounded-full p-[5px] w-min h-min'>
							<Gem className='text-green-500 w-[14px] h-[14px] 2xl:w-5 2xl:h-5' />
						</div>
						<div className=' bg-green-950 rounded-full p-[5px] w-min h-min'>
							<DollarSign className='text-green-500 w-[14px] h-[14px] 2xl:w-5 2xl:h-5' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
