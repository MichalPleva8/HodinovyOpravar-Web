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
		url: 'https://www.facebook.com/hodinovyopravarzilina/',
		icon: 'facebook',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/hodinovy_opravar_zilina/',
		icon: 'instagram',
	},
]
