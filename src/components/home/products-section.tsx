import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Briefcase, PiggyBank, Wallet2 } from 'lucide-react'
import { Separator } from '../ui/separator'

export const ProductsSection = () => {
	return (
		<section className='mt-[134px]'>
			<h2 className='font-medium text-[28px] xl:text-[38px] 2xl:text-[48px] text-center'>
				Nossos <span className='text-primary'>Produtos</span>
			</h2>
			<p className='text-sm xl:text-base 2xl:text-lg font-light md:mx-auto md:max-w-[700px] text-gray-400 text-center'>
				Explore uma variedade de produtos bancários abrangentes e personalizáveis no
				YourBank, projetados para atender às suas necessidades financeiras e aspirações
				únicas.
			</p>

			<Tabs defaultValue='individuals' className='mt-5 flex flex-col items-center'>
				<TabsList className='grid w-full md:w-[550px]  h-full  grid-cols-2 bg-neutral-900 py-3 rounded-full px-3'>
					<TabsTrigger
						className='data-[state=active]:bg-primary data-[state=active]:text-neutral-900 rounded-full p-3'
						value='individuals'>
						Para Indivíduos
					</TabsTrigger>
					<TabsTrigger
						className='data-[state=active]:bg-primary data-[state=active]:text-neutral-900 rounded-full p-3'
						value='businesses'>
						Para Empresas
					</TabsTrigger>
				</TabsList>
				<TabsContent
					className='flex flex-col md:w-full md:flex-row md:justify-between md:gap-4 '
					value='individuals'>
					<div className='flex flex-col items-center justify-center mt-[60px]'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<Briefcase size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>
							Contas Correntes
						</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Aproveite o acesso fácil aos seus fundos com as nossas diversas opções de
							conta corrente. Beneficie-se de serviços bancários online e móveis, cartões
							de débito e acesso gratuito a caixas eletrônicos.
						</p>
					</div>
					<Separator className='my-[30px] md:hidden h-auto' />
					<div className='flex flex-col items-center justify-center mt-[60px] md:border-x md:px-20'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<PiggyBank size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>
							Contas Poupança
						</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Construa suas economias com taxas de juros competitivas e opções flexíveis
							de conta poupança. Seja para metas específicas ou crescimento patrimonial,
							encontre a conta certa para você.
						</p>
					</div>
					<Separator className='my-[30px] md:hidden' />
					<div className='flex flex-col items-center justify-center mt-[60px]'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<Wallet2 size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>Empréstimos</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Realize seus sonhos com opções flexíveis de empréstimos e hipotecas. Desde
							empréstimos pessoais até hipotecas residenciais, nossos experientes agentes
							de empréstimo o guiarão no processo de inscrição.
						</p>
					</div>
				</TabsContent>
				<TabsContent
					className='flex flex-col md:w-full md:flex-row md:justify-between md:gap-4'
					value='businesses'>
					<div className='flex flex-col items-center justify-center mt-[60px]'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<Briefcase size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>
							Contas Empresariais
						</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Aproveite o acesso fácil aos seus fundos com as nossas diversas opções de
							conta corrente. Beneficie-se de serviços bancários online e móveis, cartões
							de débito e acesso gratuito a caixas eletrônicos.
						</p>
					</div>
					<Separator className='my-[30px] md:hidden' />
					<div className='flex flex-col items-center justify-center mt-[60px] md:border-x md:px-20'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<PiggyBank size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>
							Poupança Empresariais
						</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Construa suas economias com taxas de juros competitivas e opções flexíveis
							de conta poupança. Seja para metas específicas ou crescimento patrimonial,
							encontre a conta certa para você.
						</p>
					</div>
					<Separator className='my-[30px] md:hidden' />
					<div className='flex flex-col items-center justify-center mt-[60px]'>
						<div className='p-2 bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full w-min h-min'>
							<div className='p-[14px] bg-gradient-to-t from-green-500/0 to-green-500/20 rounded-full'>
								<Wallet2 size={24} className='text-green-500 ' />
							</div>
						</div>
						<h3 className='text-xl leading-[30px] mt-5 mb-3 2xl:text-2xl'>
							Empréstimos Empresariais
						</h3>
						<p className='text-sm xl:text-base 2xl:text-lg max-w-[375px] font-light leading-[21px] text-center text-gray-400'>
							Realize seus sonhos com opções flexíveis de empréstimos e hipotecas. Desde
							empréstimos pessoais até hipotecas residenciais, nossos experientes agentes
							de empréstimo o guiarão no processo de inscrição.
						</p>
					</div>
				</TabsContent>
			</Tabs>
		</section>
	)
}
