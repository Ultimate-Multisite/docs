---
title: Vještine s obzirom na temu
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Vještine s obzirom na temu

Superdav AI Agent v1.10.0 dolazi s četiri nova ugrađena vještina koje se prilagođavaju vašem trenutnom WordPress temi. Ove vještine pružaju specijalizirano vođenje i mogućnosti prilagođene arhitekturi i značajkama vaše teme.

## Šta su vještine s obzirom na temu?

Vještine s obzirom na temu su unaprijed konfigurirane baze znanja i skupovi alata koje AI asistent automatski bira na temelju trenutno aktivne WordPress teme na vašem sajtu. Kada promijenite teme, dostupne vještine asistenta se ažuriraju automatski — bez potrebe za ručnom konfiguracijom.

Svaka vještina uključuje:

- **Tematsku dokumentaciju** — vođenje o korištenju i prilagođavanju teme
- **Referencu na blokove i obrasce (patterns)** — dostupni blokovi, obrasci i opcije dizajna
- **Primjere prilagodbe** — kod fragmente i obrasci konfiguracije za uobičajene zadatke
- **Najbolje prakse** — preporuke za arhitekturu teme i radni tok

## Dostupne vještine s obzirom na temu

### Teme sa blokovima (Block Themes)

**Primjenjuje se na:** Teme koje koriste arhitekturu zasnovanu na blokovima WordPressa (Full Site Editing).

Vještina za Teme sa blokovima pruža vođenje o:

- Kreiranju i uređivanju šablona pomoću block editora
- Radu s obrascima blokova i ponovnim blokovima
- Prilagođavanju globalnih stilova i postavki `theme.json`
- Korištenju tematskih blokova i varijacija
- Izgradnji prilagođenih oblika blokova za vaš sajt

**Automatski se aktivira kada:** Vaša aktivna tema je tema sa blokovima (podržava značajku `block-templates`).

### Klasične teme (Classic Themes)

**Primjenjuje se na:** Tradicionalne WordPress teme koje koriste PHP šablone i klasični editor.

Vještina za Klasične teme pruža vođenje o:

Rad s PHP šablone i hookovi
Prilagođavanje izgleda teme putem Customizera
Korištenje widgetskih područja i bočnih panela
Modifikacija CSS-a i razvoj child theme-a
Razumijevanje hijerarhije tema i template tagova

**Automatski se aktivira kada:** Vaša aktivna tema je klasična (ne blok teme).

### Kadence Blocks

**Primjenjuje se na:** Site koji koriste plugin Kadence Blocks za napredno dizajn baziran na blokovima.

Vještina Kadence Blocks pruža smjernice o:

- Korištenju napredne biblioteke blokova Kadence (Hero, Testimonials, Pricing itd.)
- Konfiguriranju postavki i responsivnih opcija Kadence blokova
- Izgradnji prilagođenih rasporeda s Kadence grid i container blokovima
- Integraciji Kadence blokova s vašom temom
- Koristenju dizajnog sustava i predložaka Kadence

**Automatski se aktivira kada:** Plugin Kadence Blocks je aktivan na vašem sajtu.

### Kadence Theme

**Primjenjuje se na:** Site koji koriste Kadence temu za dizajn baziran na blokovima i prilagođavanje.

Vještina Kadence Theme pruža smjernice o:

- Prilagođavanju teme Kadence putem globalnih stilova i theme.json
- Korištenju ugrađenih obrazaca i predložaka Kadence blokova
- Konfiguriranju postavki i opcija teme Kadence
- Izgradnji prilagođenog dizajna s dizajnim sustavom Kadence
- Integraciji Kadence s popularnim pluginovima i alatima

**Automatski se aktivira kada:** Je li Kadence tema vaša aktivna tema.

## Kako se biraju vještine

Asistent automatski prepoznaje vašu aktivnu temu i instalirane pluginove na svakoj poruci. Ako je dostupna vještina koja odgovara temi, ona se automatski učitava u kontekst asistenta. Ne morate ručno omogućavati ili mijenjati vještine.

### Višestruke vještine

Ako se više vještina primjenjuju na vašem sajtu (na primjer, ako imate aktivne i Kadence Blocks i Kadence Theme), asistent ima pristup svim primjenjivim vještinama i može se osloniti na smjernice iz svake od njih.

### Promjena teme

Kada promijenite aktivnu temu, dostupne vještine asistenta se automatski ažuriraju u sljedećoj poruci. Na primjer:

1. Koristite blok temu s aktivnom vještinom **Block Themes**.
2. Prebacite se na klasičnu temu.
3. U sljedećoj poruci, vještina **Classic Themes** se automatski učita, a vještina **Block Themes** više nije dostupna.

## Korištenje teme-osnovanih vještina (Theme-Aware Skills)

Da biste iskoristili vještinu koja je osnovana na temi, jednostavno opišite što želite postići u chat sučelju. Asistent će automatski se osvrnuti na smjernice odgovarajuće vještine.

### Primjeri upita (Prompts)

**Za Block Themes:**
> "Kreiraj sekciju za naslov s pozadinskom slikom i centriranim tekstom koristeći blokove."

**Za Classic Themes:**
> "Dodaj prilagođenu područje widgeta u bočnu traku pomoću child theme-a."

**Za Kadence Blocks:**
> "Izgradi sekciju za recenzije koristeći Kadence Testimonials blok."

**Za Kadence Theme:**
> "Prilagodi raspored zaglavlja i stil navigacijskog membara."

Asistent će pružiti smjernice specifične za temu i primjere koda prilagođene vašoj aktivnoj temi i pluginovima.

:::note
Teme-osnovane vještine su automatski dostupne u Superdav AI Agent verziji 1.10.0 i novijšoj. Nije potrebno dodatno postavljanje ili konfiguriranje.
:::
