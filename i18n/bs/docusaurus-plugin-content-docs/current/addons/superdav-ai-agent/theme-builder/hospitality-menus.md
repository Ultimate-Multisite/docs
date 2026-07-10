---
title: Meniji za ugostiteljstvo
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Meniji za ugostiteljstvo {#hospitality-menus}

Funkcija **Meniji za ugostiteljstvo** omogućava Theme Builderu da generiše i ugrađuje strukturirane menije hrane i pića direktno na vaš WordPress sajt.

## Pregled {#overview}

Theme Builder sada može kreirati profesionalne, strukturirane menije za ugostiteljske firme, uključujući restorane, kafe, barove i usluge cateringa. Ovi meniji su potpuno integrisani u dizajn vašeg sajta i lako se mogu ažurirati i upravljati.

## Podržani tipovi ugostiteljstva {#supported-hospitality-types}

- **Restorani** — meniji za uslugu pijenja i jela
- **Kafe** — meniji za kafu i lagane užine
- **Barovi i lounge-ovi** — meniji pića i predjela
- **Pekarnice** — meniji za kolače i hljeb
- **Usluge cateringa** — opcije menija za događaje
- **Food Truckovi** — meniji za mobilne usluge hrane
- **Pivare i vinarije** — meniji pića sa opisima

## Struktura menija {#menu-structure}

### Kategorije menija {#menu-categories}

Meniji su organizovani u kategorije:

- **Predjela** — početne jela i male tanjuriće
- **Glavni jela** — glavni obroci
- **Prilozi** — dodaci i povrće
- **Desserti** — slatki užine
- **Pića** — napici (alkoholni i bezalkoholni)
- **Specijaliteti** — dnevni ili sezonski specijaliteti

### Format stavke menija {#menu-item-format}

Svaka stavka menija uključuje:

```json
{
  "name": "Grilovani losos",
  "description": "Sveži atlantski losos sa maslacem i limunom",
  "price": "$24.95",
  "dietary_info": ["Bez glutena", "Visok protein"],
  "allergens": ["Riba"],
  "availability": "Dnevno"
}
```

#### Polja stavke {#item-fields}

| Polje | Tip | Opis |
|-------|------|-------------|
| `name` | string | Naziv jela ili pića |
| `description` | string | Detaljan opis stavke |
| `price` | string | Cena (formatirana sa valutom) |
| `dietary_info` | array | Dijetetski atributi (Vegan, Bez glutena, itd.) |
| `allergens` | array | Uobičajeni alergeni (Orašasti plodovi, Orah, itd.) |
| `availability` | string | Kada je dostupno (Dnevno, Sezonski, itd.) |

## Kreiranje menija za ugostiteljstvo {#creating-hospitality-menus}

### Korak 1: Pružite informacije o meniju {#step-1-provide-menu-information}

Recite Theme Builderu o vašem meniju:

```
Kreiraj meniju za italijanski restoran sa predjelima,
tjesteninom, glavnim jelima i desertima. Uključi cijene i opise.
```

### Korak 2: Theme Builder generiše meni {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Kreira strukturiranu stranicu menija
2. Dizajnira je da odgovara temi vašeg sajta
3. Organizuje stavke u kategorije
4. Formatira cijene i opise
5. Dodaje informacije o dijeti i alergenima

### Korak 3: Pregled i prilagođavanje {#step-3-review-and-customize}

Možete:

1. Urediti stavke menija i cijene
2. Dodati ili ukloniti kategorije
3. Ponovo rasporediti stavke unutar kategorija
4. Ažurirati opise i informacije o dijeti
5. Podesiti stil i raspored

## Opcije prikaza menija {#menu-display-options}

### Potpuna stranica menija {#full-menu-page}

Posvećena stranica koja prikazuje vaš kompletan meni:

- Organizovan po kategorijama
- Pretraživač i filtrabilan
- Format za štampu
- Dizajn prilagođen mobilnim uređajima

### Widget menija {#menu-widget}

Ugradite sekcije menija na druge stranice:

- Predložene stavke na početnoj stranici
- Dnevni specijaliteti u sidebaru
- Meni pića na stranici bara
- Izložba deserti u footeru

### PDF meniji {#menu-pdf}

Generišite preuzimajući PDF meni:

- Profesionalno formatiranje
- Kvalitet spreman za štampu
- Uključuje slike i opise
- Lako za dijeljenje i slanje putem e-pošte

## Informacije o dijeti i alergenima {#dietary-and-allergen-information}

### Dijetetski atributi {#dietary-attributes}

Označite stavke dijetetskim informacijama:

- **Vegan** — bez životinjskih proizvoda
- **Vegetarijanski** — bez mesa
- **Bez glutena** — sigurno za celijakiju
- **Bez mliječnih proizvoda** — bez mliječnih proizvoda
- **Bez orašastih plodova** — bez oraha ili kikirikija
- **Nisko ugljenog hidratnog** — smanjeni ugljeni hidrati
- **Visok protein** — bogat proteinima

### Upozorenja o alergenima {#allergen-warnings}

Uključite uobičajene alergene:

- **Orašasti plodovi** — orasi i kikiriki
- **Orah** — krustasei i školjke
- **Riba** — sve vrste ribe
- **Mliječni proizvodi** — mlijeko i mliječni proizvodi
- **Jaja** — pileća jaja
- **Soja** — sojini proizvodi
- **Gluten** — pšenično brašno i žitarice sa glutenom
- **Susam** — sjemenski susam i ulje

## Upravljanje menijima {#menu-management}

### Ažuriranje cijena {#updating-prices}

Lako ažurirajte cijene menija:

1. Idite na stranicu menija
2. Kliknite na "Uredi meni"
3. Ažurirajte cijene stavki
4. Sačuvajte promjene
5. Promjene se odmah pojavljuju na vašem sajtu

### Dodavanje sezonskih stavki {#adding-seasonal-items}

Kreirajte sezonske varijacije menija:

1. Kreirajte novu verziju menija
2. Dodajte sezonske stavke
3. Označite stavke kao "Sezonske"
4. Rasporedite datume dostupnosti
5. Automatski prikazuju se tokom sezone

### Upravljanje specijalitetima {#managing-specials}

Prikazujte dnevne ili sedmične specijalitete:

1. Kreirajte kategoriju "Specijaliteti"
2. Dodajte stavke sa datumima dostupnosti
3. Istaknite specijalitete na početnoj stranici
4. Ažurirajte dnevno ili sedmično
5. Arhivirajte stare specijalitete

## Integracija sa Theme Builderom {#integration-with-theme-builder}

Kada koristite Theme Builder za ugostiteljske sajtove:

1. **Automatsko prepoznavanje menija** — prepoznaje da li je vaš posao u gastronomiji/pićima
2. **Kreiranje stranice menija** — generiše profesionalne stranice menija
3. **Poklapanje dizajna** — meniji odgovaraju temi vašeg sajta
4. **Optimizacija za mobilne uređaje** — meniji se lijepo prikazuju na telefonima
5. **SEO optimizacija** — meniji su prijateljski nastrojeni za pretraživače

## Najbolje prakse {#best-practices}

### Dizajn menija {#menu-design}

- **Jasna organizacija** — logička struktura kategorija
- **Čitljivi opisi** — ukusni i informativni
- **Dosljedno određivanje cijena** — jasna valuta i formatiranje
- **Profesionalne fotografije** — slike hrane visokog kvaliteta
- **Prazan prostor** — ne pretrpavajte stranicu

### Sadržaj {#content}

- **Precizni opisi** — opisujte stavke tačno
- **Isticanje specijaliteta** — neka specijaliteti zaista ističu
- **Uključivanje alergena** — uvijek navedite alergene
- **Redovno ažuriranje** — održavajte cijene i stavke aktuelnim
- **Upotreba ukusnog jezika** — učinite stavke da zvuče neodoljivo

### Pristupačnost {#accessibility}

- **Čitljivi fontovi** — koristite jasne, čitljive fontove
- **Dovoljan kontrast** — osigurajte da je tekst čitljiv
- **Dijetetske oznake** — jasno označite dijeta opcije
- **Upozorenja o alergenima** — istaknite alergene
- **Prikladno za mobilne uređaje** — testirajte na svim uređajima

## Primjeri {#examples}

### Struktura menija restorana {#restaurant-menu-structure}

```
Predjela
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Tjestenina
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Glavna jela
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserti
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Struktura menija kafe {#cafe-menu-structure}

```
Kafa
├── Espresso
├── Cappuccino
└── Latte

Kolači
├── Croissants
├── Muffins
└── Scones

Sendviči
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarijanski wrap
```

## Povezani sadržaj {#related-features}

- [Kreiranje menija](../abilities/create-menu.md) — kreiranje navigacionih menija
- [Smjer dizajna](./design-direction.md) — prilagođavanje dizajna vašeg sajta
- [Intervju o otkrićima](./discovery-interview.md) — planiranje strukture vašeg sajta
