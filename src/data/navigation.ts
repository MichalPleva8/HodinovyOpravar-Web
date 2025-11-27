// Navigation Data - Hodinový opravár
// Centralized navigation links for Header and Footer

export interface NavigationLink {
	name: string
	href: string
}

export const navigation: NavigationLink[] = [
	{ name: 'Domov', href: '/#' },
	{ name: 'Služby', href: '/#sluzby' },
	{ name: 'Referencie', href: '/#referencie' },
	{ name: 'FAQ', href: '/#faq' },
	{ name: 'Kontakt', href: '/#kontakt' },
]
