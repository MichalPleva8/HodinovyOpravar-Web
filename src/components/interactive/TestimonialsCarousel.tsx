import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Facebook } from 'lucide-react'

interface Testimonial {
	id: number
	name: string
	headline: string
	text: string
	date: string
	service?: string
	avatar?: string
}

interface TestimonialsCarouselProps {
	testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(2)
	const totalPages = Math.ceil(testimonials.length / itemsPerPage)

	// Detect screen size and set items per page
	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 1024) {
				setItemsPerPage(1) // Mobile and Tablet: 1 item
			} else {
				setItemsPerPage(2) // Desktop: 2 items
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
				const lastPageStart =
					Math.floor((testimonials.length - 1) / itemsPerPage) * itemsPerPage
				return lastPageStart
			}
			return newIndex
		})
	}

	const handleNext = () => {
		setProgress(0) // Reset progress when manually navigating
		setCurrentIndex((prev) => {
			const newIndex = prev + itemsPerPage
			if (newIndex >= testimonials.length) {
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
			{/* Navigation Buttons - Tablet and Desktop */}
			<div className="pointer-events-none absolute top-1/2 right-0 left-0 z-10 hidden -translate-y-1/2 justify-between md:flex">
				{/* Left Arrow - Secondary Button Style */}
				<button
					onClick={handlePrevious}
					className="border-primary text-primary hover:bg-primary-hover hover:border-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active pointer-events-auto -ml-2 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white active:translate-y-0 md:-ml-2 lg:-ml-6"
					aria-label="Predchádzajúce referencie"
				>
					<ChevronLeft className="h-8 w-8" />
				</button>

				{/* Right Arrow - Primary Button Style */}
				<button
					onClick={handleNext}
					className="bg-primary hover:bg-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active pointer-events-auto -mr-2 flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 md:-mr-2 lg:-mr-6"
					aria-label="Ďalšie referencie"
				>
					<ChevronRight className="h-8 w-8" />
				</button>
			</div>

			{/* Testimonials Grid - With slide animation */}
			<div className="overflow-hidden py-4">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
					}}
				>
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="w-full shrink-0 px-0 lg:w-1/2 lg:px-3">
							{/* Testimonial Card */}
							<div className="shadow-card hover:shadow-card-hover flex h-full w-full flex-col rounded-3xl border border-neutral-300 bg-white p-10 transition-all duration-300 hover:-translate-y-1 md:px-16 md:py-12 lg:p-12">
								<div className="mx-auto flex h-full w-full max-w-[600px] flex-col lg:max-w-none">
									{/* Headline */}
									<h3 className="text-h3 mb-3 text-neutral-800">
										"{testimonial.headline}"
									</h3>

									{/* Testimonial Text */}
									<p className="text-body mb-8 text-neutral-600">
										{testimonial.text}
									</p>

									{/* Author Info */}
									<div className="mt-auto flex items-center gap-4">
									<div className="relative">
										{testimonial.avatar ? (
											<img
												src={testimonial.avatar}
												alt={testimonial.name}
												className="h-16 w-16 rounded-full object-cover"
											/>
										) : (
											<div className="bg-primary/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
												<span className="text-primary text-xl font-bold">
													{testimonial.name.charAt(0)}
												</span>
											</div>
										)}
										{/* Facebook Badge */}
										<div className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#1877F2] shadow-sm">
											<Facebook className="h-3 w-3 fill-white text-white opacity-90" />
										</div>
									</div>

									<div>
										<p className="text-h5 text-primary mb-1">
											{testimonial.name}
										</p>
										<p className="text-h5 font-medium! text-neutral-700">
											{new Date(testimonial.date).toLocaleDateString(
												'sk-SK',
												{
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												}
											)}
										</p>
									</div>
								</div>
								</div>
							</div>
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

			{/* Navigation Buttons - Mobile Only */}
			<div className="mt-12 flex justify-center gap-4 md:hidden">
				{/* Left Arrow - Secondary Button Style */}
				<button
					onClick={handlePrevious}
					className="border-primary text-primary hover:bg-primary-hover hover:border-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] border bg-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-white active:translate-y-0"
					aria-label="Predchádzajúce referencie"
				>
					<ChevronLeft className="h-8 w-8" />
				</button>

				{/* Right Arrow - Primary Button Style */}
				<button
					onClick={handleNext}
					className="bg-primary hover:bg-primary-hover shadow-button hover:shadow-button-hover active:shadow-button-active flex h-16 w-16 cursor-pointer items-center justify-center rounded-[10px] text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0"
					aria-label="Ďalšie referencie"
				>
					<ChevronRight className="h-8 w-8" />
				</button>
			</div>
		</div>
	)
}
