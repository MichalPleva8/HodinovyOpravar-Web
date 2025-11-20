import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Service {
	id: string
	title: string
	icon: string
	description: string
	slug: string
	image?: string
}

interface ServicesCarouselProps {
	services: Service[]
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(3)
	const totalPages = Math.ceil(services.length / itemsPerPage)

	// Detect screen size and set items per page
	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 768) {
				setItemsPerPage(1) // Mobile: 1 item
			} else if (window.innerWidth < 1024) {
				setItemsPerPage(2) // Tablet: 2 items
			} else {
				setItemsPerPage(3) // Desktop: 3 items
			}
		}

		updateItemsPerPage()
		window.addEventListener('resize', updateItemsPerPage)
		return () => window.removeEventListener('resize', updateItemsPerPage)
	}, [])

	const handlePrevious = () => {
		setProgress(0) // Reset progress when manually navigating
		setCurrentIndex((prev) => {
			const newIndex = prev - itemsPerPage
			if (newIndex < 0) {
				// Loop to the last complete page
				const lastPageStart = Math.floor((services.length - 1) / itemsPerPage) * itemsPerPage
				return lastPageStart
			}
			return newIndex
		})
	}

	const handleNext = () => {
		setProgress(0) // Reset progress when manually navigating
		setCurrentIndex((prev) => {
			const newIndex = prev + itemsPerPage
			if (newIndex >= services.length) {
				// Loop to the start
				return 0
			}
			return newIndex
		})
	}

	// Reset to first page when itemsPerPage changes
	useEffect(() => {
		setCurrentIndex(0)
		setProgress(0)
	}, [itemsPerPage])

	// Auto-advance carousel
	useEffect(() => {
		const progressInterval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					return 0
				}
				return prev + 1.538 // Update every 100ms for smooth animation (100ms * 65 = 6500ms)
			})
		}, 100)

		return () => clearInterval(progressInterval)
	}, [])

	// Advance to next slide when progress reaches 100%
	useEffect(() => {
		if (progress >= 100) {
			handleNext()
		}
	}, [progress])

	return (
		<div className="relative">
			{/* Navigation Buttons - Desktop Only */}
			<div className="pointer-events-none absolute top-1/2 right-0 left-0 z-10 hidden -translate-y-1/2 justify-between lg:flex">
				{/* Left Arrow - Secondary Button Style */}
				<button
					onClick={handlePrevious}
					className="border-primary text-primary hover:bg-primary-hover hover:border-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active pointer-events-auto -ml-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white active:translate-y-0"
					aria-label="Predchádzajúce služby"
				>
					<ChevronLeft className="h-8 w-8" />
				</button>

				{/* Right Arrow - Primary Button Style */}
				<button
					onClick={handleNext}
					className="bg-primary hover:bg-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active pointer-events-auto -mr-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0"
					aria-label="Ďalšie služby"
				>
					<ChevronRight className="h-8 w-8" />
				</button>
			</div>

			{/* Services Grid - With slide animation */}
			<div className="overflow-hidden py-4">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
					}}
				>
					{services.map((service) => (
						<div
							key={service.id}
							className="w-full flex-shrink-0 px-0 md:px-3 lg:px-4 md:w-1/2 lg:w-1/3"
						>
							<a
								href={`/sluzby/${service.slug}`}
								className="shadow-card hover:shadow-card-hover group relative block flex h-full max-h-[450px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-300 bg-white transition-all duration-300 hover:-translate-y-1 md:max-h-[500px] lg:max-h-[600px]"
							>
								{service.image ? (
									<div className="h-[45%] w-full overflow-hidden md:h-[40%] lg:h-1/2">
										<img
											src={service.image}
											alt={service.title}
											className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
										/>
									</div>
								) : (
									<div className="bg-primary/10 group-hover:bg-primary/20 m-6 mb-4 flex h-16 w-16 items-center justify-center rounded-lg transition-colors">
										<svg
											className="text-primary h-8 w-8"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
								)}

								{/* Icon in the middle */}
								{service.icon && (
									<img
										src={`/images/services/icons/${service.icon}.svg`}
										alt=""
										className="pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-20 md:w-auto md:top-[40%] lg:top-1/2"
									/>
								)}

								<div className="flex flex-col items-center px-6 py-6 text-center lg:py-8">
									<h3 className="text-h3 group-hover:text-primary mt-8 mb-2 text-neutral-800 transition-colors duration-300 md:mt-12 lg:mt-12">
										{service.title}
									</h3>
									<p className="text-body mb-6 line-clamp-3 text-neutral-600">
										{service.description}
									</p>

									<p className="text-primary text-base leading-[18px] font-bold md:text-lg md:leading-5">
										Zistiť viac
									</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>

			{/* Page Indicator */}
			<div className="mt-6 flex justify-center gap-2">
				{Array.from({ length: totalPages }).map((_, index) => {
					const isActive = Math.floor(currentIndex / itemsPerPage) === index
					return (
						<button
							key={index}
							onClick={() => {
								setProgress(0)
								setCurrentIndex(index * itemsPerPage)
							}}
							className={`relative h-2 cursor-pointer overflow-hidden rounded-full transition-all duration-200 ${
								isActive
									? 'w-8 bg-neutral-300'
									: 'w-2 bg-neutral-400 hover:bg-neutral-500'
							}`}
							aria-label={`Strana ${index + 1}`}
						>
							{isActive && (
								<div
									className="bg-primary absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-linear"
									style={{ width: `${progress}%` }}
								/>
							)}
						</button>
					)
				})}
			</div>

			{/* Navigation Buttons - Mobile/Tablet Only */}
			<div className="mt-12 flex justify-center gap-4 lg:hidden">
				{/* Left Arrow - Secondary Button Style */}
				<button
					onClick={handlePrevious}
					className="border-primary text-primary hover:bg-primary-hover hover:border-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white active:translate-y-0"
					aria-label="Predchádzajúce služby"
				>
					<ChevronLeft className="h-8 w-8" />
				</button>

				{/* Right Arrow - Primary Button Style */}
				<button
					onClick={handleNext}
					className="bg-primary hover:bg-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0"
					aria-label="Ďalšie služby"
				>
					<ChevronRight className="h-8 w-8" />
				</button>
			</div>
		</div>
	)
}
