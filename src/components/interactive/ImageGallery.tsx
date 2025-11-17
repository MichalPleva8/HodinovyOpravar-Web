import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Image {
	src: string
	alt: string
	caption?: string
}

interface ImageGalleryProps {
	images: Image[]
	columns?: 2 | 3 | 4
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

	const openLightbox = (index: number) => {
		setSelectedIndex(index)
		// Prevent body scroll when lightbox is open
		document.body.style.overflow = 'hidden'
	}

	const closeLightbox = () => {
		setSelectedIndex(null)
		// Re-enable body scroll
		document.body.style.overflow = ''
	}

	const goToPrevious = () => {
		if (selectedIndex === null) return
		setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
	}

	const goToNext = () => {
		if (selectedIndex === null) return
		setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (selectedIndex === null) return

		if (e.key === 'Escape') {
			closeLightbox()
		} else if (e.key === 'ArrowLeft') {
			goToPrevious()
		} else if (e.key === 'ArrowRight') {
			goToNext()
		}
	}

	const gridColsClass = {
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
	}[columns]

	return (
		<>
			{/* Gallery Grid */}
			<div className={`grid ${gridColsClass} gap-6`}>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => openLightbox(index)}
						className="group rounded-card focus:ring-primary relative overflow-hidden focus:ring-2 focus:outline-none"
					>
						<img
							src={image.src}
							alt={image.alt}
							className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-neutral-800 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
						{image.caption && (
							<div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-neutral-800 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<p className="text-sm font-medium text-white">{image.caption}</p>
							</div>
						)}
					</button>
				))}
			</div>

			{/* Lightbox Modal */}
			{selectedIndex !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/95"
					onClick={closeLightbox}
					onKeyDown={handleKeyDown}
					tabIndex={-1}
				>
					{/* Close Button */}
					<button
						onClick={closeLightbox}
						className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
						aria-label="Zavrieť galériu"
					>
						<X className="h-6 w-6 text-white" />
					</button>

					{/* Previous Button */}
					<button
						onClick={(e) => {
							e.stopPropagation()
							goToPrevious()
						}}
						className="absolute left-4 z-50 rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
						aria-label="Predchádzajúci obrázok"
					>
						<ChevronLeft className="h-6 w-6 text-white" />
					</button>

					{/* Next Button */}
					<button
						onClick={(e) => {
							e.stopPropagation()
							goToNext()
						}}
						className="absolute right-4 z-50 rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
						aria-label="Nasledujúci obrázok"
					>
						<ChevronRight className="h-6 w-6 text-white" />
					</button>

					{/* Image Container */}
					<div
						onClick={(e) => e.stopPropagation()}
						className="mx-4 max-h-[90vh] max-w-7xl"
					>
						<img
							src={images[selectedIndex].src}
							alt={images[selectedIndex].alt}
							className="max-h-[90vh] max-w-full rounded-lg object-contain"
						/>
						{images[selectedIndex].caption && (
							<p className="mt-4 text-center text-lg text-white">
								{images[selectedIndex].caption}
							</p>
						)}
					</div>

					{/* Image Counter */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2">
						<p className="text-sm font-medium text-white">
							{selectedIndex + 1} / {images.length}
						</p>
					</div>
				</div>
			)}
		</>
	)
}
