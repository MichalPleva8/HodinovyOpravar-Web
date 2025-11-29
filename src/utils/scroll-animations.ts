/**
 * Scroll Animations Utility
 * Handles IntersectionObserver-based scroll animations and counter animations
 */

interface CounterElement extends HTMLElement {
	dataset: {
		animate?: string
		counterTarget?: string
		counterSuffix?: string
		counterPrefix?: string
		animateDelay?: string
	}
}

/**
 * Animate a counter from 0 to target value
 */
function animateCounter(element: CounterElement) {
	const target = parseInt(element.dataset.counterTarget || '0', 10)
	const duration = 1500 // 1.5 seconds for counter animation
	const suffix = element.dataset.counterSuffix || ''
	const prefix = element.dataset.counterPrefix || ''
	const delay = parseInt(element.dataset.animateDelay || '0', 10)

	// Save existing suffix HTML (like colored + span) if present
	const suffixSpan = element.querySelector('span')
	const hasSuffixHTML = suffixSpan && suffix === '+'

	setTimeout(() => {
		const startTime = performance.now()

		function update(currentTime: number) {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)

			// Easing function - ease out
			const easeProgress = 1 - Math.pow(1 - progress, 3)

			const currentValue = Math.floor(easeProgress * target)

			// Update content while preserving suffix HTML structure if needed
			if (hasSuffixHTML && suffixSpan) {
				// Clear and update just the text node, keep the span
				const textNode = element.childNodes[0]
				if (textNode && textNode.nodeType === Node.TEXT_NODE) {
					textNode.textContent = `${prefix}${currentValue}`
				} else {
					element.childNodes[0]?.remove()
					element.insertBefore(document.createTextNode(`${prefix}${currentValue}`), suffixSpan)
				}
			} else {
				element.textContent = `${prefix}${currentValue}${suffix}`
			}

			if (progress < 1) {
				requestAnimationFrame(update)
			} else {
				// Final value
				if (hasSuffixHTML && suffixSpan) {
					const textNode = element.childNodes[0]
					if (textNode && textNode.nodeType === Node.TEXT_NODE) {
						textNode.textContent = `${prefix}${target}`
					}
				} else {
					element.textContent = `${prefix}${target}${suffix}`
				}
			}
		}

		requestAnimationFrame(update)
	}, delay)
}

/**
 * Initialize scroll animations
 */
export function initScrollAnimations() {
	// Check if IntersectionObserver is supported
	if (!('IntersectionObserver' in window)) {
		// Fallback: show all elements immediately
		const elements = document.querySelectorAll('[data-animate]')
		elements.forEach((el) => {
			;(el as HTMLElement).style.opacity = '1'
		})
		return
	}

	const elements = document.querySelectorAll('[data-animate]')

	// Create single IntersectionObserver for all elements
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement
					const delay = element.dataset.animateDelay || '0'
					const duration = element.dataset.animateDuration || '600'
					const animateOnce = element.dataset.animateOnce !== 'false'

					// Set animation delay and duration as inline styles
					element.style.animationDelay = `${delay}ms`
					element.style.animationDuration = `${duration}ms`

					// Add visible class to trigger animation
					element.classList.add('is-visible')

					// Handle counter animation
					if (element.dataset.animate === 'counter') {
						animateCounter(element as CounterElement)
					}

					// Unobserve if animate-once is true (default behavior)
					if (animateOnce) {
						observer.unobserve(element)
					}
				} else {
					// Only remove class if animate-once is false (replay on re-enter)
					if (entry.target.getAttribute('data-animate-once') === 'false') {
						entry.target.classList.remove('is-visible')
					}
				}
			})
		},
		{
			threshold: 0.1, // Trigger when 10% of element is visible
			rootMargin: '-50px 0px -50px 0px', // Trigger 50px before entering viewport
		}
	)

	// Observe all elements with data-animate attribute
	elements.forEach((el) => {
		observer.observe(el)
	})
}

/**
 * Initialize animations that should trigger on page load (no scroll)
 * Used for hero sections and above-the-fold content
 */
export function initImmediateAnimations() {
	const elements = document.querySelectorAll('[data-animate-immediate="true"]')

	elements.forEach((element) => {
		const htmlElement = element as HTMLElement
		const delay = htmlElement.dataset.animateDelay || '0'
		const duration = htmlElement.dataset.animateDuration || '600'

		// Set animation delay and duration
		htmlElement.style.animationDelay = `${delay}ms`
		htmlElement.style.animationDuration = `${duration}ms`

		// Trigger animation immediately
		htmlElement.classList.add('is-visible')

		// Handle counter animation
		if (htmlElement.dataset.animate === 'counter') {
			animateCounter(htmlElement as CounterElement)
		}
	})
}
