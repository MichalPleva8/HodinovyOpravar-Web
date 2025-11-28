import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

interface NavigationItem {
	name: string
	href: string
}

interface MobileMenuProps {
	navigation: NavigationItem[]
	phoneNumber?: string
	currentPath?: string
}

export default function MobileMenu({
	navigation,
	phoneNumber = '+421903566644',
	currentPath = '/',
}: MobileMenuProps) {
	const [isOpen, setIsOpen] = useState(false)

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	// Close menu on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				setIsOpen(false)
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<>
			{/* Mobile Menu Toggle Button */}
			<button
				onClick={toggleMenu}
				className="hover:text-primary focus:ring-primary -mr-2 rounded-lg p-2 text-neutral-700 transition-colors focus:ring-2 focus:outline-none md:hidden"
				aria-label={isOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
				aria-expanded={isOpen}
			>
				<div className="relative h-6 w-6">
					<Menu
						className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
					/>
					<X
						className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`}
					/>
				</div>
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-40 bg-neutral-800/50 md:hidden"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}

			{/* Mobile Menu Panel */}
			<div
				className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
			>
				{/* Menu Header */}
				<div className="flex items-center justify-between border-b border-neutral-300 p-6">
					<h2 className="text-h5 font-bold text-neutral-800">Menu</h2>
					<button
						onClick={closeMenu}
						className="hover:text-primary focus:ring-primary -mr-2 rounded-lg p-2 text-neutral-700 transition-colors focus:ring-2 focus:outline-none"
						aria-label="Zavrieť menu"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				{/* Navigation Links */}
				<nav className="p-6">
					<ul className="space-y-1">
						{navigation.map((item) => {
							const isActive = currentPath === item.href
							return (
								<li key={item.name}>
									<a
										href={item.href}
										onClick={closeMenu}
										className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
											isActive
												? 'bg-primary-light text-primary'
												: 'hover:text-primary text-neutral-700 hover:bg-neutral-200'
										} `}
									>
										{item.name}
									</a>
								</li>
							)
						})}
					</ul>
				</nav>

				{/* Call to Action */}
				<div className="absolute right-0 bottom-0 left-0 border-t border-neutral-300 bg-neutral-100 p-6">
					<a
						href={`tel:${phoneNumber}`}
						className="bg-primary hover:bg-primary-hover rounded-button shadow-button hover:shadow-button/60 inline-flex w-full items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-all duration-200"
					>
						<Phone className="h-5 w-5" />
						Zavolať teraz
					</a>
					<p className="mt-3 text-center text-sm text-neutral-600">
						{phoneNumber.replace('+421', '0')}
					</p>
				</div>
			</div>
		</>
	)
}
