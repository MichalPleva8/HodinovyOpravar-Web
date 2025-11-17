import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Developer will implement actual API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Meno <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Telefón <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
          Služba
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Správa <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-6 rounded-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Odosiela sa...' : 'Odoslať správu'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">Správa bola úspešne odoslaná!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">Chyba pri odosielaní. Skúste to znovu.</p>
      )}
    </form>
  );
}
