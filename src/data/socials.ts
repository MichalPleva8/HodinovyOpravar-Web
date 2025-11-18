// Social Media Links - Hodinový opravár
// Social media profiles and links

export interface SocialLink {
	name: string
	url: string
	icon: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'linkedin'
}

export const socials: SocialLink[] = [
	{
		name: 'Facebook',
		url: 'https://facebook.com',
		icon: 'facebook',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com',
		icon: 'instagram',
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com',
		icon: 'linkedin',
	},
]
