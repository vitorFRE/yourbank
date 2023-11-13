import Image from 'next/image'

const images = [
	{
		src: '/images/logo-desktop.svg',
		alt: 'Logo Yourbank desktop',
		width: 157,
		height: 41,
		classes: 'hidden xl:block'
	},
	{
		src: '/images/logo-laptop.svg',
		alt: 'Logo Yourbank laptop',
		width: 117,
		height: 31,
		classes: 'hidden sm:block xl:hidden'
	},
	{
		src: '/images/logo-mobile.svg',
		alt: 'Logo Yourbank mobile',
		width: 102,
		height: 27,
		classes: 'sm:hidden'
	}
]

const LogoImages = () => (
	<>
		{images.map((image, index) => (
			<Image
				key={index}
				className={image.classes}
				src={image.src}
				alt={image.alt}
				width={image.width}
				height={image.height}
			/>
		))}
	</>
)

export default LogoImages
