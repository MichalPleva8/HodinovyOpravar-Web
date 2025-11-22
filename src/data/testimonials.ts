// Testimonials Data - Hodinový opravár
// Customer reviews and feedback

export interface Testimonial {
	id: number
	name: string
	headline: string
	text: string
	date: string
	service?: string
	avatar?: string
}

export const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Karin Hoffmann',
		headline: 'Neskutočne šikovný, všestranný a ochotný odborník',
		text: 'Pán Synák je neskutočne šikovný, všestranný a ochotný odborník. 100% odporúčam všetkým, ktorí potrebujú akúkoľvek pomoc, opravu v domácnosti. Absolutne dôveryhodný človek, ktorému (ako nikomu ešte) som bez obáv nechala klúče od domu, aby mi pomohol s demontážou a zároveň montážou nového sprchového boxu. Veľká vďaka.',
		date: '2024-05-11',
		service: 'Voda & kúrenie',
		avatar: '/images/testimonials/karin-hoffmann.jpg',
	},
	{
		id: 2,
		name: 'Matúš Formanek',
		headline: 'Všestranný, veľmi šikovný majster a ochotný človek',
		text: 'Ďakujeme za pomoc pri menších prerabkach v byte. Pán Synak nám vždy ochotne so všetkým pomohol. Vrele odporúčame! Všestranný, veľmi šikovný majster a ochotný človek 🙂',
		date: '2022-08-24',
		service: 'Drobné stavebné práce',
		avatar: '/images/testimonials/matus-formanek.jpg',
	},
	{
		id: 3,
		name: 'Martina Samuhelova',
		headline: 'Odviedol skvelú prácu a odtok opäť funguje ako nový',
		text: 'Ďakujem za rýchlu pomoc s upchatým kuchynským drezom! Pozdravy posiela aj spokojný manžel 😊 Odviedol skvelú prácu a odtok opäť funguje ako nový. Ochotný, šikovný a sympatický. Nemám, čo vytknúť, za mňa TOP!',
		date: '2022-01-17',
		service: 'Voda & kúrenie',
		avatar: '/images/testimonials/martina-samuhelova.jpg',
	},
	{
		id: 4,
		name: 'Janka Lásloplová',
		headline: 'Veľmi prekvapivé bolo s akou rýchlosťou pán pracuje',
		text: 'Super, ochotný, vecný, veľmi šikovný. Veľmi prekvapivé bolo s akou rýchlosťou pán pracuje. Boli sme veľmi spokojný.',
		date: '2022-01-08',
		service: 'Opravy v domácnosti',
		avatar: '/images/testimonials/janka-laslopova.jpg',
	},
	{
		id: 5,
		name: 'Mária Holišová',
		headline: 'Rýchla a spoľahlivá pomoc v domácnosti',
		text: 'Roman je veľmi ochotný a nápomocný a určite sa na neho obrátim aj v budúcnosti. Vrelo jeho služby odporúčam všetkým, ktorí potrebujú rýchlu a spoľahlivú pomoc v domácnosti. A ja mu veľmi, veľmi ďakujem 🙂',
		date: '2021-10-17',
		service: 'Opravy v domácnosti',
		avatar: '/images/testimonials/maria-holisova.jpg',
	},
	{
		id: 6,
		name: 'Monika Frolek Maroszova',
		headline: 'Odporúčame všetkými desiatimi',
		text: 'Roman nám dnes celej rodine zachránil nedelný obed, ktorý ostal uviaznuty na balkóne za zaseknutymi balkónovými dverami 🤦‍♀️. Nedeľa rano nie je ozaj čas, kedy sa ľahko zháňa pomoc v takejto situácii, takze obrovská vďaka za to, ako rýchlo, ochotne a s prehľadom všetko "zmákol"!!! Odporúčame všetkými desiatimi!!! 🖐️🖐️. Ešte raz velka vďaka!!!',
		date: '2021-10-03',
		service: 'Opravy v domácnosti',
		avatar: '/images/testimonials/monika-maroszova.jpg',
	},
	{
		id: 7,
		name: 'Janka Szabová Koštová',
		headline: 'Poradí si zo všetkým, veľmi ústretový, rýchly',
		text: 'Veľmi šikovný človek, poradí si zo všetkým, veľmi ústretový, rýchly, sympatický..bola som maximálne spokojná, v prípade potreby odporúčam Hodinového opravára p.Synáka',
		date: '2021-01-21',
		service: 'Opravy v domácnosti',
		avatar: '/images/testimonials/janka-kostova.jpg',
	},
	{
		id: 8,
		name: 'Monika Kormancová',
		headline: 'Ráno som volala, poobede už montoval a pomohol',
		text: 'Odporúčam služby p.Synaka :-)Ráno som volala, poobede už montoval a pomohol 👌🏼 Skvelý prístup, šikovný, naozaj môžem len a len odporučiť 👍🏼',
		date: '2020-11-19',
		service: 'Montáže nábytku',
		avatar: '/images/testimonials/monika-kormancova.jpg',
	},
]
