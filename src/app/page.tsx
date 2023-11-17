import { HeroSection } from '@/components/home/hero-section'
import { ProductsSection } from '@/components/home/products-section'

export default function Home() {
	return (
		<main className='container'>
			<HeroSection />
			<ProductsSection />
		</main>
	)
}
