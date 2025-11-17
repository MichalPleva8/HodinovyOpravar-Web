// Testimonials Data - Hodinový opravár
// Customer reviews and feedback

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ján Novák',
    location: 'Žilina',
    rating: 5,
    text: 'Výborná práca, rýchla reakcia. Opravil mi vodovodné potrubie za pár hodín. Určite odporúčam! Profesionálny prístup a férové ceny.',
    date: '2024-10-15',
    service: 'Voda & kúrenie',
  },
  {
    id: 2,
    name: 'Mária Kovačová',
    location: 'Bytča',
    rating: 5,
    text: 'Profesionálny prístup, férové ceny. Pomohol mi s elektroinštaláciou v celom byte. Všetko funguje perfektne a práca bola dokončená presne v dohodnutom termíne.',
    date: '2024-09-22',
    service: 'Elektrika',
  },
  {
    id: 3,
    name: 'Peter Horváth',
    location: 'Žilina - Vlčince',
    rating: 5,
    text: 'Rýchlo, kvalitne a za dobrú cenu. Opravil mi kúrenie tesne pred začiatkom zimy. Veľmi som spokojný s jeho prácou a komunikáciou.',
    date: '2024-11-05',
    service: 'Voda & kúrenie',
  },
  {
    id: 4,
    name: 'Eva Vargová',
    location: 'Žilina - Bôrik',
    rating: 5,
    text: 'Namaľoval mi celý byt za pár dní. Čistá práca, žiadny neporiadok. Veľmi ochotný a precízny. Môžem len odporučiť!',
    date: '2024-08-30',
    service: 'Maľovanie a natieranie',
  },
  {
    id: 5,
    name: 'Lukáš Balog',
    location: 'Rajec',
    rating: 5,
    text: 'Zložil mi celý nábytok z IKEA za jeden deň. Všetko sedí presne, žiadne problémy. Vrelo odporúčam pre každého, kto potrebuje pomoc s montážou.',
    date: '2024-10-01',
    service: 'Montáže nábytku',
  },
  {
    id: 6,
    name: 'Zuzana Tomášová',
    location: 'Martin',
    rating: 5,
    text: 'Vymenil mi batérie v kúpeľni a kuchyni. Rýchla a čistá práca, všetko fungovalo na prvý pokus. Cena bola férová a práca perfektná.',
    date: '2024-09-10',
    service: 'Voda & kúrenie',
  },
  {
    id: 7,
    name: 'Michal Kováč',
    location: 'Žilina - Hliny',
    rating: 5,
    text: 'Pomohol mi s výmenou pneumatík na aute a bicykli. Rýchlo, odborně a za dobrú cenu. Určite sa obrátim znova pri ďalších potrebách.',
    date: '2024-10-20',
    service: 'Opravy áut a bicyklov',
  },
  {
    id: 8,
    name: 'Andrea Lukáčová',
    location: 'Terchová',
    rating: 5,
    text: 'Profesionálne položil dlažbu v kúpeľni. Všetko presné, rovné, krásne spracované. Som veľmi spokojná s výsledkom!',
    date: '2024-07-18',
    service: 'Drobné stavebné práce',
  },
  {
    id: 9,
    name: 'Stanislav Rác',
    location: 'Žilina - Solinky',
    rating: 5,
    text: 'Opravil mi poškodené dvere a vymenil zámky. Rýchla reakcia, kvalitná práca. Môžem len odporučiť!',
    date: '2024-08-05',
    service: 'Opravy v domácnosti',
  },
  {
    id: 10,
    name: 'Katarína Moravcová',
    location: 'Bytča',
    rating: 5,
    text: 'Pravidelne mi pomáha s údržbou záhrady - kosenie, strihanie plotov. Vždy spoľahlivý a precízny. Odporúčam!',
    date: '2024-09-15',
    service: 'Záhradné práce',
  },
];
