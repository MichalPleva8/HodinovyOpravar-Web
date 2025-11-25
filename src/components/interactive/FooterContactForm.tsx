import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormData {
	name: string
	email: string
	phone: string
	message: string
}

export default function FooterContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			const response = await fetch('/api/send-offer.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			const data = await response.json()

			if (response.ok && data.success) {
				setSubmitStatus('success')
				setFormData({ name: '', email: '', phone: '', message: '' })
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			console.error('Form submission error:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-3">
			{/* Name */}
			<div>
				<input
					type="text"
					id="footer-name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Vaše meno"
					required
					className="w-full rounded-[10px] border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-500 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
			</div>

			{/* Email */}
			<div>
				<input
					type="email"
					id="footer-email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Váš email"
					required
					className="w-full rounded-[10px] border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-500 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
			</div>

			{/* Phone */}
			<div>
				<input
					type="tel"
					id="footer-phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Telefónne číslo"
					required
					className="w-full rounded-[10px] border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-500 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
			</div>

			{/* Message */}
			<div>
				<textarea
					id="footer-message"
					name="message"
					rows={3}
					value={formData.message}
					onChange={handleChange}
					placeholder="Vaša správa"
					required
					className="w-full resize-none rounded-[10px] border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-500 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				/>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full rounded-[10px] bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
			>
				{isSubmitting ? 'Odosiela sa...' : 'Odoslať'}
			</button>

			{/* Status Messages */}
			{submitStatus === 'success' && (
				<p className="text-center text-sm text-green-600">Správa odoslaná!</p>
			)}
			{submitStatus === 'error' && (
				<p className="text-center text-sm text-red-600">
					Chyba pri odosielaní. Skúste znovu.
				</p>
			)}
		</form>
	)
}
