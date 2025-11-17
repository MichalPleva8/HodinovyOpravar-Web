// FAQ Data - Hodinový opravár
// Frequently Asked Questions

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export const faq: FAQItem[] = [
  {
    id: 1,
    question: 'Aké oblasti pokrývate?',
    answer: 'Poskytujeme služby v Žiline a okolí, vrátane oblastí ako Bytča, Martin, Rajec, Terchová a ďalších miest v okruhu približne 30 km od Žiliny. Pre väčšie projekty sme ochotní dohodnúť sa aj na väčšiu vzdialenosť.',
    category: 'Všeobecné',
  },
  {
    id: 2,
    question: 'Ako sa určuje cena za prácu?',
    answer: 'Cenu určujeme individuálne podľa typu a rozsahu práce. Pracujeme buď na hodinovú sadzbu alebo na základe dohodnutej ceny za celý projekt. Vždy vám pred začatím práce poskytneme jasnú cenovú ponuku bez skrytých poplatkov.',
    category: 'Ceny a platba',
  },
  {
    id: 3,
    question: 'Ako rýchlo sa môžete dostaviť?',
    answer: 'V prípade naliehavých záležitostí (únik vody, porucha elektroinštalácie) sa snažíme reagovať do niekoľkých hodín. Pri štandardných objednávkach sa zvyčajne dohodneme na termíne do 2-3 dní.',
    category: 'Termíny',
  },
  {
    id: 4,
    question: 'Potrebujem zabezpečiť materiál?',
    answer: 'Môžeme materiál zabezpečiť za vás, alebo môžete priniesť vlastný. Ak materiál obstaráme my, účtujeme ho za nákupnú cenu bez navýšenia. Vždy vám poradíme, aký materiál je najvhodnejší pre vašu prácu.',
    category: 'Materiál',
  },
  {
    id: 5,
    question: 'Poskytujete záruky na prácu?',
    answer: 'Áno, na všetky naše práce poskytujeme záruku. Dĺžka záruky závisí od typu práce - štandardne 6 mesiacov až 2 roky. Presné podmienky záruky vždy dohodneme pred začiatkom práce.',
    category: 'Záruka',
  },
  {
    id: 6,
    question: 'Môžem platiť kartou?',
    answer: 'Akceptujeme hotovostnú aj bezhotovostnú platbu. Pre väčšie projekty preferujeme prevod na účet. Pri menších opravách môžete platiť aj v hotovosti na mieste.',
    category: 'Ceny a platba',
  },
  {
    id: 7,
    question: 'Pracujete aj cez víkendy?',
    answer: 'Áno, po predchádzajúcej dohode pracujeme aj cez víkendy a sviatky. Snažíme sa prispôsobiť vašim potrebám a termínom.',
    category: 'Termíny',
  },
  {
    id: 8,
    question: 'Čo mám urobiť v prípade núdze (únik vody, výpadok elektriny)?',
    answer: 'V prípade núdze nás ihneď kontaktujte telefonicky na čísle 0903 56 66 44. Pokúsime sa dostať k vám čo najrýchlejšie. Pri úniku vody najprv uzavrite hlavný prívod vody, pri elektrických problémoch vypnite hlavný istič.',
    category: 'Núdzové situácie',
  },
  {
    id: 9,
    question: 'Robíte aj väčšie rekonštrukcie?',
    answer: 'Áno, venujeme sa aj rozsahlejším projektom ako rekonštrukcie kúpeľní, kuchýň alebo celých bytov. Pri väčších projektoch vám radi poskytneme nezáväznú cenovú ponuku a časový harmonogram.',
    category: 'Všeobecné',
  },
  {
    id: 10,
    question: 'Máte potrebné certifikáty a povolenia?',
    answer: 'Áno, disponujeme všetkými potrebnými certifikátmi a oprávneniami pre výkon remesiel. Sme poisťovaní a naša práca zodpovedá platným normám a predpisom.',
    category: 'Všeobecné',
  },
  {
    id: 11,
    question: 'Čo ak nie som spokojný s prácou?',
    answer: 'Vaša spokojnosť je pre nás priorita. Ak nie sте spokojný s výsledkom, kontaktujte nás a dohodneme sa na náprave. Chceme, aby každý zákazník bol s našou prácou maximálne spokojný.',
    category: 'Reklamácie',
  },
  {
    id: 12,
    question: 'Robíte aj opravy pre firmy?',
    answer: 'Áno, poskytujeme služby nielen pre domácnosti, ale aj pre firmy, kancelárie a prevádzky. Môžeme zabezpečiť pravidelnú údržbu alebo jednorázové opravy. Vystavujeme faktúry.',
    category: 'Všeobecné',
  },
];
