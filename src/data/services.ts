// Services Data - Hodinový opravár
// All handyman services offered

export interface Service {
	id: string
	title: string
	icon: string
	description: string
	image?: string
	slug: string
	included: string[]
}

export const services: Service[] = [
	{
		id: '1',
		title: 'Voda & kúrenie',
		icon: 'wrench',
		description:
			'Opravy vodovodov, inštalácie, výmena batérií a radiátorov. Riešime úniky vody, upchané odpady a problémy s kúrením.',
		slug: 'voda-kurenie',
		image: '/images/services/voda.jpg',
		included: [
			'Opravy vodovodných potrubí a únikov',
			'Výmena batérií, umývadiel a WC',
			'Inštalácie a opravy kúrenia',
			'Výmena a údržba radiátorov',
			'Riešenie upchátych odpadov',
			'Montáž sprchových kútov',
		],
	},
	{
		id: '2',
		title: 'Elektrika',
		icon: 'zap',
		description:
			'Elektroinštalácie, opravy elektrospotrebičov a montáže. Profesionálne riešenie elektrických problémov.',
		slug: 'elektrika',
		image: '/images/services/elektrika.jpg',
		included: [
			'Elektroinštalácie v bytoch a domoch',
			'Opravy elektrospotrebičov',
			'Montáž a výmena svietidiel',
			'Výmena zásuviek a vypínačov',
			'Riešenie porúch elektroinštalácie',
			'Zapojenie spotrebičov',
		],
	},
	{
		id: '3',
		title: 'Opravy áut a bicyklov',
		icon: 'car',
		description:
			'Základné opravy a údržba motorových vozidiel a bicyklov. Výmeny pneumatík, olejov a bežná servisná práca.',
		slug: 'opravy-aut-bicyklov',
		image: '/images/services/auto.jpg',
		included: [
			'Výmena pneumatík a kolies',
			'Výmena olejov a filtrov',
			'Opravy a servis bicyklov',
			'Výmena brzdových platničiek',
			'Základná údržba vozidiel',
			'Opravy reťazí a prevodov bicyklov',
		],
	},
	{
		id: '4',
		title: 'Maľovanie a natieranie',
		icon: 'paint-brush',
		description:
			'Interiérové a exteriérové maľovanie stien, stropov a povrchov. Príprava podkladu a profesionálne natieranie.',
		slug: 'malovanie',
		image: '/images/services/malovanie.jpg',
		included: [
			'Maľovanie interiérov (steny, stropy)',
			'Maľovanie exteriérov (fasády, ploty)',
			'Príprava podkladu a penetrácia',
			'Natieranie dverí a okien',
			'Dekoratívne maľby',
			'Oprava poškodených povrchov',
		],
	},
	{
		id: '5',
		title: 'Montáže nábytku',
		icon: 'package',
		description:
			'Montáž a zostavenie nábytku všetkých typov. IKEA, JYSK a ďalší nábytok rýchlo a profesionálne.',
		slug: 'montaze-nabytku',
		image: '/images/services/nabytok.jpg',
		included: [
			'Montáž nábytku IKEA, JYSK',
			'Zostavenie skríň a políc',
			'Montáž kuchynských liniek',
			'Inštalácia pracovných stolov',
			'Upevnenie nábytku na stenu',
			'Demontáž starého nábytku',
		],
	},
	{
		id: '6',
		title: 'Drobné stavebné práce',
		icon: 'hammer',
		description:
			'Obkladanie, dlažby, opravy stien a iné stavebné práce. Od menších opráv po rekonštrukcie.',
		slug: 'stavebne-prace',
		image: '/images/services/stavba.jpg',
		included: [
			'Obkladanie kúpeľní a kuchýň',
			'Pokládka dlažieb a parkiet',
			'Opravy a sadrovanie stien',
			'Vŕtanie a kotvenie',
			'Montáž sadrokartónu',
			'Drobné murárske práce',
		],
	},
	{
		id: '7',
		title: 'Opravy v domácnosti',
		icon: 'home',
		description:
			'Všeobecné opravy a údržba v domácnosti. Riešenie rôznych problémov a drobných porúch.',
		slug: 'opravy-domacnost',
		image: '/images/services/domacnost.jpg',
		included: [
			'Opravy dverí a zámkov',
			'Výmena kľučiek a pántov',
			'Opravy okien a žalúzií',
			'Utesňovanie okien a dverí',
			'Vŕtanie a upevňovanie',
			'Údržba domácich spotrebičov',
		],
	},
	{
		id: '8',
		title: 'Záhradné práce',
		icon: 'flower',
		description:
			'Údržba záhrady, kosenie trávnikov, strihanie živých plotov a ďalšie záhradnícke služby.',
		slug: 'zahradne-prace',
		image: '/images/services/zahrada.jpg',
		included: [
			'Kosenie trávnikov',
			'Strihanie živých plotov',
			'Upratovanie záhrad',
			'Príprava záhonov',
			'Zimná údržba',
			'Likvidácia záhradného odpadu',
		],
	},
]
