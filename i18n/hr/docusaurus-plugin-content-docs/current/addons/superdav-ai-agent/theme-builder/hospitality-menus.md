---
title: Ugostiteljski jelovnici
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Ugostiteljski jelovnici

Značajka **Ugostiteljski jelovnici** omogućuje Theme Builderu generiranje i ugrađivanje strukturiranih stranica jelovnika hrane i pića izravno u vaše WordPress web-mjesto.

## Pregled {#overview}

Theme Builder sada može izrađivati profesionalne, strukturirane stranice jelovnika za ugostiteljske tvrtke, uključujući restorane, kafiće, barove i catering usluge. Ti su jelovnici potpuno integrirani u dizajn vašeg web-mjesta i mogu se jednostavno ažurirati i upravljati.

## Podržane vrste ugostiteljstva {#supported-hospitality-types}

- **Restorani** — jelovnici za posluživanje za stolom
- **Kafići** — jelovnici kave i laganih jela
- **Barovi i loungeovi** — jelovnici pića i predjela
- **Pekarnice** — jelovnici peciva i kruha
- **Catering usluge** — opcije jelovnika za događaje
- **Food truckovi** — jelovnici mobilne usluge hrane
- **Pivovare i vinarije** — jelovnici pića s opisima

## Struktura jelovnika {#menu-structure}

### Kategorije jelovnika {#menu-categories}

Jelovnici su organizirani u kategorije:

- **Predjela** — uvodna jela i mali tanjuri
- **Glavna jela** — glavna jela
- **Prilozi** — prilozi i povrće
- **Deserti** — slatke poslastice
- **Pića** — pića (alkoholna i bezalkoholna)
- **Posebne ponude** — dnevne ili sezonske posebne ponude

### Format stavke jelovnika {#menu-item-format}

Svaka stavka jelovnika uključuje:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Polja stavke {#item-fields}

| Polje | Vrsta | Opis |
|-------|------|-------------|
| `name` | string | Naziv jela ili pića |
| `description` | string | Detaljan opis stavke |
| `price` | string | Cijena (formatirana s valutom) |
| `dietary_info` | array | Prehrambene oznake (vegansko, bez glutena itd.) |
| `allergens` | array | Uobičajeni alergeni (orašasti plodovi, školjke itd.) |
| `availability` | string | Kada je dostupno (dnevno, sezonski itd.) |

## Izrada ugostiteljskih jelovnika {#creating-hospitality-menus}

### Korak 1: Navedite informacije o jelovniku {#step-1-provide-menu-information}

Recite Theme Builderu o svom jelovniku:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Korak 2: Theme Builder generira jelovnik {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Izrađuje strukturiranu stranicu jelovnika
2. Dizajnira je tako da odgovara temi vašeg web-mjesta
3. Organizira stavke u kategorije
4. Formatira cijene i opise
5. Dodaje informacije o prehrani i alergenima

### Korak 3: Pregledajte i prilagodite {#step-3-review-and-customize}

Možete:

1. Urediti stavke jelovnika i cijene
2. Dodati ili ukloniti kategorije
3. Promijeniti redoslijed stavki unutar kategorija
4. Ažurirati opise i prehrambene informacije
5. Prilagoditi stiliziranje i raspored

## Opcije prikaza jelovnika {#menu-display-options}

### Cijela stranica jelovnika {#full-menu-page}

Namjenska stranica koja prikazuje vaš potpuni jelovnik:

- Organizirano po kategorijama
- Pretraživo i filtrabilno
- Raspored prilagođen ispisu
- Dizajn prilagodljiv mobilnim uređajima

### Widget jelovnika {#menu-widget}

Ugradite odjeljke jelovnika na druge stranice:

- Istaknute stavke na početnoj stranici
- Dnevne posebne ponude u bočnoj traci
- Jelovnik pića na stranici bara
- Izlog deserata u podnožju

### PDF jelovnika {#menu-pdf}

Generirajte PDF jelovnik za preuzimanje:

- Profesionalno formatiranje
- Kvaliteta spremna za ispis
- Uključuje slike i opise
- Jednostavno za dijeljenje i slanje e-poštom

## Prehrambene informacije i informacije o alergenima {#dietary-and-allergen-information}

### Prehrambene oznake {#dietary-attributes}

Označite stavke prehrambenim informacijama:

- **Vegansko** — bez životinjskih proizvoda
- **Vegetarijansko** — bez mesa
- **Bez glutena** — sigurno za celijakiju
- **Bez mliječnih proizvoda** — bez mliječnih proizvoda
- **Bez orašastih plodova** — bez orašastih plodova ili kikirikija
- **S malo ugljikohidrata** — smanjeni ugljikohidrati
- **Visok udio proteina** — bogato proteinima

### Upozorenja o alergenima {#allergen-warnings}

Uključite uobičajene alergene:

- **Orašasti plodovi** — orašasti plodovi i kikiriki
- **Školjke** — rakovi i mekušci
- **Riba** — sve vrste ribe
- **Mliječni proizvodi** — mlijeko i mliječni proizvodi
- **Jaja** — kokošja jaja
- **Soja** — proizvodi od soje
- **Gluten** — pšenica i žitarice koje sadrže gluten
- **Sezam** — sjemenke i ulje sezama

## Upravljanje jelovnikom {#menu-management}

### Ažuriranje cijena {#updating-prices}

Jednostavno ažurirajte cijene jelovnika:

1. Idite na stranicu jelovnika
2. Kliknite "Uredi jelovnik"
3. Ažurirajte cijene za stavke
4. Spremite promjene
5. Promjene se odmah pojavljuju na vašem web-mjestu

### Dodavanje sezonskih stavki {#adding-seasonal-items}

Izradite sezonske varijacije jelovnika:

1. Izradite novu verziju jelovnika
2. Dodajte sezonske stavke
3. Označite stavke kao "Sezonsko"
4. Zakažite datume dostupnosti
5. Automatski prikazujte tijekom sezone

### Upravljanje posebnim ponudama {#managing-specials}

Prikažite dnevne ili tjedne posebne ponude:

1. Izradite kategoriju "Posebne ponude"
2. Dodajte stavke s datumima dostupnosti
3. Istaknite posebne ponude na početnoj stranici
4. Ažurirajte dnevno ili tjedno
5. Arhivirajte stare posebne ponude

## Integracija s Theme Builderom {#integration-with-theme-builder}

Kada koristite Theme Builder za ugostiteljska web-mjesta:

1. **Automatsko prepoznavanje jelovnika** — prepoznaje jeste li tvrtka za hranu/piće
2. **Izrada stranice jelovnika** — generira profesionalne stranice jelovnika
3. **Usklađivanje dizajna** — jelovnici odgovaraju temi vašeg web-mjesta
4. **Optimizacija za mobilne uređaje** — jelovnici se lijepo prikazuju na telefonima
5. **SEO optimizacija** — jelovnici su prilagođeni tražilicama

## Najbolje prakse {#best-practices}

### Dizajn jelovnika {#menu-design}

- **Jasna organizacija** — logična struktura kategorija
- **Čitljivi opisi** — primamljivi i informativni
- **Dosljedne cijene** — jasna valuta i formatiranje
- **Profesionalne fotografije** — visokokvalitetne slike hrane
- **Prazan prostor** — nemojte pretrpati stranicu

### Sadržaj {#content}

- **Točni opisi** — točno opišite stavke
- **Istaknite posebne ponude** — neka se posebne ponude istaknu
- **Uključite alergene** — uvijek navedite alergene
- **Redovito ažurirajte** — održavajte cijene i stavke ažurnima
- **Koristite primamljiv jezik** — neka stavke zvuče ukusno

### Pristupačnost {#accessibility}

- **Čitljivi fontovi** — koristite jasna, čitljiva pisma
- **Dovoljan kontrast** — osigurajte da je tekst čitljiv
- **Prehrambene oznake** — jasno označite prehrambene opcije
- **Upozorenja o alergenima** — istaknuto prikažite alergene
- **Prilagođeno mobilnim uređajima** — testirajte na svim uređajima

## Primjeri {#examples}

### Struktura jelovnika restorana {#restaurant-menu-structure}

```
Predjela
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese salata

Jela od tjestenine
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Glavna jela
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Deserti
├── Tiramisu
├── Panna Cotta
└── Izbor gelata
```

### Struktura jelovnika kafića {#cafe-menu-structure}

```
Kava
├── Espresso
├── Cappuccino
└── Latte

Peciva
├── Kroasani
├── Muffini
└── Scones

Sendviči
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarijanski wrap
```

## Povezane značajke {#related-features}

- [Izradi izbornik](../abilities/create-menu.md) — izradite navigacijske izbornike
- [Smjer dizajna](./design-direction.md) — prilagodite dizajn svoje web-lokacije
- [Intervju za otkrivanje](./discovery-interview.md) — planirajte strukturu svoje web-lokacije
