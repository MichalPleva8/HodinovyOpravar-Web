import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FormData {
	name: string
	email: string
	phone: string
	service: string
	message: string
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			// Developer will implement actual API call
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSubmitStatus('success')
				setFormData({ name: '', email: '', phone: '', service: '', message: '' })
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
			{/* Name */}
			<div>
				<label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
					Meno <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="focus:ring-primary w-full rounded-lg border border-neutral-400 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
				/>
			</div>

			{/* Email */}
			<div>
				<label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
					Email <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="focus:ring-primary w-full rounded-lg border border-neutral-400 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
				/>
			</div>

			{/* Phone */}
			<div>
				<label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">
					Telefón <span className="text-red-500">*</span>
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					required
					className="focus:ring-primary w-full rounded-lg border border-neutral-400 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
				/>
			</div>

			{/* Service */}
			<div>
				<label
					htmlFor="service"
					className="mb-2 block text-sm font-medium text-neutral-700"
				>
					Služba
				</label>
				<select
					id="service"
					name="service"
					value={formData.service}
					onChange={handleChange}
					className="focus:ring-primary w-full rounded-lg border border-neutral-400 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
				>
					<option value="">Vyberte službu</option>
					<option value="voda-kurenie">Voda & kúrenie</option>
					<option value="elektrika">Elektrika</option>
					<option value="opravy-aut">Opravy áut/bicyklov</option>
					<option value="malovanie">Maľovanie</option>
					<option value="ine">Iné</option>
				</select>
			</div>

			{/* Message */}
			<div>
				<label
					htmlFor="message"
					className="mb-2 block text-sm font-medium text-neutral-700"
				>
					Správa <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					required
					className="focus:ring-primary w-full resize-none rounded-lg border border-neutral-400 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
				/>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-primary hover:bg-primary-hover rounded-button w-full px-6 py-3 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
			>
				{isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
			</button>

			{/* Status Messages */}
			{submitStatus === 'success' && (
				<p className="text-center text-green-600">Správa bola úspešne odoslaná!</p>
			)}
			{submitStatus === 'error' && (
				<p className="text-center text-red-600">Chyba pri odosielaní. Skúste to znovu.</p>
			)}
		</form>
	)
}
