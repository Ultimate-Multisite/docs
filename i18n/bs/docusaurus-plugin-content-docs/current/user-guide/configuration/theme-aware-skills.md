---
title: Tema-svjestane vještine
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tematski Svjestne Vještine

Superdav AI Agent v1.10.0 dolazi sa četiri nove ugrađene tematski svjestne vještine koje se automatski prilagođavaju vašoj aktivnoj WordPress temi. Ove vještine pružaju specijalizovano vođstvo i mogućnosti prilagođene arhitekturi i značajkama vaše teme.

## Šta su Tematski Svjestne Vještine? {#what-are-theme-aware-skills}

Tematski svjestne vještine su unaprijed konfigurisane baze znanja i setovi alata koje AI asistent automatski bira na osnovu WordPress teme koja je trenutno aktivna na vašem sajtu. Kada promijenite temu, dostupne vještine asistenta automatski se ažuriraju — nije potrebna ručna konfiguracija.

Svaka vještina uključuje:

- **Tematski specifična dokumentacija** — uputstva o korištenju i prilagođavanju teme
- **Reference blokova i patterna** — dostupni blokovi, patterni i dizajnerske opcije
- **Primjeri prilagođavanja** — kodni snipeti i obrasci konfiguracije za uobičajene zadatke
- **Najbolje prakse** — preporuke za arhitekturu i radni tok teme

## Dostupne Tematski Svjestne Vještine {#available-theme-aware-skills}

### Block Themes (Blok teme) {#block-themes}

**Primjenjuje se na:** Teme koje koriste WordPress blok-baziranu (Full Site Editing) arhitekturu.

Vještina Block Themes pruža upute za:

- Kreiranje i uređivanje šablona pomoću blok editora
- Rad s blok patternima i ponovno upotrebljivim blokovima
- Prilagođavanje globalnih stilova i postavki theme.json
- Korištenje tematskih blokova i varijanti
- Izgradnju prilagođenih blok patterna za vaš sajt

**Automatski aktivira se kada:** Vaša aktivna tema blok tema je (podržava značajnost `block-templates`).

### Classic Themes (Klasične teme) {#classic-themes}

**Primjenjuje se na:** Tradicionalne WordPress teme koje koriste PHP šablone i klasični editor.

Vještina Classic Themes pruža upute za:

- Rad s PHP šablon datotekama i hookovima
- Prilagođavanje izgleda teme putem Customizera
- Korištenje widget area i sidebara
- Modifikovanje CSS-a i razvoj child temama
- Razumijevanje hijerarhije teme i tagova šablona

**Automatski aktivira se kada:** Vaša aktivna tema klasična (ne blok) tema je.

### Kadence Blocks {#kadence-blocks}

**Primjenjuje se na:** Sajtove koji koriste plugin Kadence Blocks za napredan blok-baziran dizajn.

Vještina Kadence Blocks pruža upute za:

- Korištenje napredne biblioteke blokova Kadence (Hero, Testimonials, Pricing, itd.)
- Konfigurisanje postavki blokova Kadence i responsivnih opcija
- Izgradnju prilagođenih rasporeda sa Kadence grid i container blokovima
- Integraciju blokova Kadence sa vašom temom
- Iskorištavanje dizajnerskog sistema i predizmeta Kadence

**Automatski aktivira se kada:** Plugin Kadence Blocks je aktivan na vašem sajtu.

### Kadence Theme {#kadence-theme}

**Primjenjuje se na:** Sajtove koji koriste Kadence temu za blok-bazirani dizajn i prilagođavanje.

Vještina Kadence Theme pruža upute za:

- Prilagođavanje Kadence teme putem globalnih stilova i theme.json
- Korištenje ugrađenih blok patterna i šablona Kadence
- Konfigurisanje postavki i opcija Kadence teme
- Izgradnju prilagođenih dizajna sa dizajnerskim sistemom Kadence
- Integraciju Kadence sa popularnim pluginovima i alatima

**Automatski aktivira se kada:** Kadence tema je vaša aktivna tema.

## Kako se Vještine Biraju {#how-skills-are-selected}

Asistent automatski detektuje vašu aktivnu temu i instalirane pluginove na svaku poruku. Ako postoji odgovarajuća tematski svjestna vještina, ona se automatski učitava u kontekst asistenta. Nije potrebno ručno omogućavati ili mijenjati vještine.

### Više Vještina {#multiple-skills}

Ako više vještina odgovara vašem sajtu (na primjer, ako imate aktivne i Kadence Blocks i Kadence Theme), asistent ima pristup svim primjenjivim vještinama i može se osvrnuti na uputstva iz svake.

### Promjena Tema {#switching-themes}

Kada promijenite aktivnu temu, dostupne vještine asistenta automatski se ažuriraju na sljedeću poruku. Na primjer:

1. Koristite blok temu sa aktivnom vještinom **Block Themes**.
2. Prebacujete se na klasičnu temu.
3. Na vašoj sljedećoj poruci, vještina **Classic Themes** je automatski učitana, a vještina **Block Themes** više nije dostupna.

## Korištenje Tematski Svjestnih Vještina {#using-theme-aware-skills}

Da biste iskoristili tematski svjestnu vještinu, jednostavno opišite šta želite da uradite u interfejsu za chat. Asistent će automatski pozvati odgovarajuća uputstva vještine.

### Primjeri Promptova {#example-prompts}

**Za Block Themes:**
> "Kreiraj hero sekciju sa pozadinskom slikom i centriranim tekstom koristeći blok pattern."

**Za Classic Themes:**
> "Dodaj prilagođeni widget area na sidebar koristeći child temu."

**Za Kadence Blocks:**
> "Izgradi sekciju s testimonijalima koristeći Kadence Testimonials blok."

**Za Kadence Theme:**
> "Prilagodi izgled headera i stilizovanje navigacionog menija."

Asistent će pružiti tematski specifična uputstva i kodne primjere prilagođene vašoj aktivnoj temi i pluginovima.

:::note
Tematski svjestne vještine su automatski dostupne u Superdav AI Agent v1.10.0 i novijim verzijama. Nije potrebno dodatno podešavanje ili konfiguracija.
:::
