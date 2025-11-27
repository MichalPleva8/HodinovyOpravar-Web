// FAQ Data - Hodinový opravár
// Frequently Asked Questions

export interface FAQItem {
	id: number
	question: string
	answer: string
	answerHtml?: string
	category?: string
}

export const faq: FAQItem[] = [
	{
		id: 1,
		question: 'Aké profesionálne oprávnenia a certifikáty vlastním?',
		answer: '',
		answerHtml: `
			<p class="mb-4">Disponujem všetkými potrebnými certifikátmi a oprávneniami pre výkon odborných prác. Všetky moje oprávnenia sú platné a pravidelne obnovované. Nižšie nájdete dokumenty na stiahnutie:</p>
			<ul class="space-y-2">
				<li><a href="/licenses/Opravnenie na samostatnu montaz VTZ - plynovych.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú montáž VTZ - plynových</a></li>
				<li><a href="/licenses/Opravnenie na samostatnu montaz VTZ - tlakovych.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú montáž VTZ - tlakových</a></li>
				<li><a href="/licenses/Opravnenie na samostatnu obsluhu VTZ - plynovych.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú obsluhu VTZ - plynových</a></li>
				<li><a href="/licenses/Opravnenie na samostatnu obsluhu VTZ - tlakovych.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú obsluhu VTZ - tlakových</a></li>
				<li><a href="/licenses/Opravnenie na samostatnu obsluhu kvapalinovych kotlov.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú obsluhu kvapalinových kotlov</a></li>
				<li><a href="/licenses/Opravnenie na samostatnu obsluhu nizkotlakovych kotolni.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie na samostatnú obsluhu nízkotlakových kotolní</a></li>
				<li><a href="/licenses/Opravnenie samostatny elektrotechnik.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Oprávnenie samostatný elektrotechnik</a></li>
				<li><a href="/licenses/Preukaz obsluhy stavebnych strojov.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Preukaz obsluhy stavebných strojov</a></li>
				<li><a href="/licenses/Zvaracsky preukaz.jpg" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Zváračský preukaz</a></li>
				<li><a href="/licenses/osvedcenie o poisteni.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Osvedčenie o poistení</a></li>
			</ul>
		`,
		category: 'Certifikáty',
	},
	{
		id: 2,
		question: 'Aké sú náklady na dopravu?',
		answer: '',
		answerHtml: `
			<p class="mb-4">Dopravné sa účtuje podľa vzdialenosti od mesta Žilina. Transparentný cenník zabezpečuje, že viete presne, čo platíte:</p>
			<div class="mb-4">
				<h4 class="font-bold text-neutral-800 mb-2">Dopravné:</h4>
				<ul class="space-y-2">
					<li class="flex justify-between">
						<span>Cena výjazdu mimo mesta (Žilina)</span>
						<span class="font-semibold">0,70 € / km</span>
					</li>
					<li class="flex justify-between">
						<span>Parkovné</span>
						<span class="font-semibold">v prípade, že je platené</span>
					</li>
				</ul>
			</div>
			<p class="text-sm text-neutral-600 mt-4">Cena dohodou. Nie som platcom DPH.</p>
		`,
		category: 'Ceny a platba',
	},
]
