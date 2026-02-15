import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company or organization name must be at least 2 characters'),
  role: z.enum([
    'Travel Agency',
    'Tour Operator',
    'DMC/Ground Handler',
    'Lodge/Accommodation',
    'Community-Based Tourism Organization',
    'Tourism Board/Government',
    'Other',
  ], {
    required_error: 'Please tell us who you are',
  }),
  interests: z
    .array(z.string())
    .min(1, 'Please select at least one area of interest'),
  hearAbout: z
    .enum(['Google search', 'LinkedIn', 'Referral', 'Conference/Event', 'Press/Media', 'Other'], {
      required_error: 'Please select an option or leave this field empty',
    })
    .optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interests: [],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      name="contact" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* Netlify hidden fields prevents spam */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don't fill this: <input name="bot-field" /></label>
      </p>

      {/* Full name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company / Organization */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company / Organization Name *
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
            errors.company ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Your company or organization"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      {/* I am a... */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
          I am a... *
        </label>
        <select
          id="role"
          {...register('role')}
          className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
            errors.role ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select an option</option>
          <option value="Travel Agency">Travel Agency</option>
          <option value="Tour Operator">Tour Operator</option>
          <option value="DMC/Ground Handler">DMC/Ground Handler</option>
          <option value="Lodge/Accommodation">Lodge/Accommodation</option>
          <option value="Community-Based Tourism Organization">
            Community-Based Tourism Organization
          </option>
          <option value="Tourism Board/Government">Tourism Board/Government</option>
          <option value="Other">Other</option>
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
        )}
      </div>

      {/* Interests (multi-select via checkboxes) */}
      <div>
        <p className="block text-sm font-medium text-gray-700 mb-2">
          What are you interested in? * (Select all that apply)
        </p>
        <div className="space-y-2">
          {[
            'Sourcing community-based experiences',
            'Distributing my products globally',
            'Becoming a preferred partner',
            'Tourism board partnership',
            'General inquiry',
            'Request a demo',
          ].map((label) => (
            <label key={label} className="flex items-start space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                value={label}
                {...register('interests')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        {errors.interests && (
          <p className="mt-1 text-sm text-red-600">{errors.interests.message}</p>
        )}
      </div>

      {/* How did you hear about us? */}
      <div>
        <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
          How did you hear about us? (optional)
        </label>
        <select
          id="hearAbout"
          {...register('hearAbout')}
          className="w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors border-gray-300"
        >
          <option value="">Select an option</option>
          <option value="Google search">Google search</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Referral">Referral</option>
          <option value="Conference/Event">Conference/Event</option>
          <option value="Press/Media">Press/Media</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message (optional) */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none border-gray-300"
          placeholder="Share any additional context or questions..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            Thank you! Your message has been sent. We'll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
