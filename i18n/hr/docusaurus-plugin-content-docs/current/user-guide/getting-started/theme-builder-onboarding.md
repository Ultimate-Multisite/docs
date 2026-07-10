---
title: Proces uvodne konfiguracije Theme Buildersa
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Proces za podešavanje Theme Buildera {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 uvodio je vodič kroz **Proces podešavanja Theme Buildera** koji vam pomaže da kreirate prilagođeni blok temelj (custom block theme) tokom početne postavke. Ovo zamenjuje staru način rada Site Buildera sa fleksibilnijim pristupom podržanim agentom.

## Šta je Proces za podešavanje Theme Buildera? {#what-is-the-theme-builder-onboarding-flow}

Proces za podešavanje Theme Buildera je interaktivni vodič (wizard) koji:

- Vam vodi kroz odluke o dizajnu (boje, tipografija, raspored)
- Prati vaše preferencije vizuelne identiteta vašeg sajta
- Generiše prilagođeni blok temelj prilagođen vašim potrebama
- Automatski aktivira temu kada je završen

Proces se pokreće pomoću **Setup Assistant agenta**, koji postavlja pojašnjavajuća pitanja i gradite vašu temu korak po korak.

## Pokretanje Procesu za podešavanje Theme Buildera {#starting-the-theme-builder-onboarding}

### Postavljanje pri prvom pokretanju (First-Run Setup) {#first-run-setup}

Kada prvi put pokrenete Superdav AI Agent na novoj instalaciji WordPressa, videćete:

```
Dobrodošli u Superdav AI Agent!

Šta želite da uradite?
1. Izgraditi prilagođenu temu (Theme Builder)
2. Koristiti postojeću temu
3. Preskočiti podešavanje za sada
```

Izaberite **"Izgraditi prilagođenu temu"** da biste ušli u Proces za podešavanje Theme Buildera.

### Ručno aktiviranje {#manual-activation}

Možete pokrenuti Proces za podešavanje Theme Buildera i bilo kada tako što ćete tražiti:

```
"Start the Theme Builder onboarding"
```

ili

```
"Help me create a custom theme"
```

## Koraci u procesu podešavanja {#the-onboarding-steps}

### Korak 1: Izbor načina rada (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent vas pita o vašoj preferenciji:

```
Kako želite da izgradite svoju temu?
- Vodič (Pita ću pitanja i izgradit ću je za vas)
- Praktično (Pokazat ću vam opcije a vi odlučujete)
```

**Vodični način rada (Guided mode)** se preporučuje većini korisnika; agent nudi predloge dizajna zasnovane na vašoj industriji i ciljevima.

### Korak 2: Specifikacija sajta (Site Specification) {#step-2-site-specification}

Pitaće vas će se o vašem sajtu:

- **Svrha sajma**: E-commerce, blog, portfolio, SaaS itd.
- **Ciljna publika**: Tko su posjetitelji?
- **Boje brenda**: Primarna i sekundarna boje (ili "ne znam")
- **Ton**: Profesionalan, kreativni, šaljiv, minimalan itd.

Ove informacije se čuvaju u vašoj memoriji **site_brief**, na koju agensi referiraju u budućim sesijama.

### Korak 3: Odluke o Design Systemu {#step-3-design-system-decisions}

Agent vas vodi kroz odabir design tokena (elementa dizajna):

- **Tipografija**: Porodica fontova (serif, sans-serif, monospace) i skala veličina
- **Paleta boja**: Primarna, sekundarna, akcentna i neutralna boje
- **Razmak**: Kompakni, normalni ili prostorni rasporedi
- **Kretanje (Motion)**: Animacije i tranzicije (ako je potrebno)

### Korak 4: Generiranje Teme {#step-4-theme-generation}

Agent pomoćnik za postavljanje (Setup Assistant agent) vam priprema prilagođenu blok temu s:

- `theme.json` koji sadrži sve vaše design tokenove
- Šablone blokova za uobičajene rasporede (početna stranica, blog, kontakt)
- Prilagodljive stilove blokova koje odgovaraju vašem design system-u
- Metapodaci teme i deklaracije podrške WordPressu

### Korak 5: Aktivacija i Provjera {#step-5-activation-and-verification}

Tema se automatski aktivira, a vi ćete vidjeti:

```
✓ Vaša prilagođena tema je sada aktivna!
  Naziv teme: Tema [Vaše ime sajta]
  Boje: [Primarna] / [Sekundarna]
  Tipografija: [Porodica fontova]

  Posjetite svoj sajt kako biste provjerili novi dizajn.
```

Zatim možete posjetiti svoj sajt kako biste potvrdili da tema ispisuje ispravno.

## Specifikacija sajta i memorija site_brief {#site-specification-and-sitebrief-memory}

Prije početka rada, agent snima specifikaciju vašeg sajta u kategoriji memorije **site_brief**. To uključuje:

- Svrhu i ciljeve sajta
- Ciljnu publiku
- Boje brenda i ton
- Preferencije dizajna
- Strukturu sadržaja

### Zašto je site_brief važan {#why-sitebrief-matters}

U budućim sesijama, agensi će se oslanjati na vaš **site_brief** kako bi:

Održavajte konzistentan dizajn tijekom promjena
Predlažite značajke usklađene s svrhom vaše stranice
Dajte preporuke koje su prilagođene kontekstu
Izbjegavajte ponavljanje pitanja o postavkama

### Pregled vašeg site_briefa {#viewing-your-sitebrief}

Možete pitati agenta:

```
"Show me my site brief"
```

ili

```
"What do you know about my site?"
```

Agent će prikazati vaše pohranjene specifikacije stranice.

## Prilagođavanje nakon postavljanja (Onboarding) {#customizing-after-onboarding}

Nakon što se završi postavljanje Theme Buildera, možete:

### Koristiti vještinu Dizajna sustava (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

Zahtijivati poboljšanja dizajna:

```
"Refine the typography to be more modern"
```

ili

```
"Adjust the color palette to be warmer"
```

**Vještina Dizajna sustava** će vas voditi kroz ciljane ažuriranja dizajna.

### Direktno uređivati theme.json {#edit-themejson-directly}

Za napredne korisnike, uredite `/wp-content/themes/[theme-name]/theme.json` kako biste prilagodili:

- Bojne tokene (Color tokens)
- Skale tipografije
- Vrijednosti razmaka (Spacing values)
- Definicije granica i sjena (Border and shadow definitions)

### Kreirati vlastite šablone bloka (Custom Block Templates) {#create-custom-block-templates}

Koristite WordPress block editor za kreiranje prilagođenih šablona za:

- Rasporede početne stranice (Homepage layouts)
- Stranice blogova (Blog post pages)
- Stranice proizvoda (Product pages)
- Kontakt forme (Contact forms)

## Poređenje: Stari vs. Novi Onboarding {#comparison-old-vs-new-onboarding}

| Značajka | Site Builder (Stari) | Theme Builder (Novi) |
|---|---|---|
| Metoda postavljanja | Form na temelju vodiča (Wizard-based form) | Razgovor vođen agentom (Agent-guided conversation) |
| Generiranje teme | Ograničene šablone (Limited templates) | Prilagodljivi okvir (Custom scaffolding) |
| Dizajnerski tokeni | Ručno unos (Manual entry) | Vodična odluka (Guided decisions) |
| Fleksibilnost | Fiksne opcije (Fixed options) | Prilagodljivo (Customizable) |
| Buduća ažuriranja | Nisu referencirani (Not referenced) | Pohranjeni u site_briefu |

## Rješavanje problema (Troubleshooting) {#troubleshooting}

**Postavljanje nije završeno**
- Ponovno pokrenite proces: "Start the Theme Builder onboarding"
- Provjerite da je vaš WordPress instalacija ažurirana
- Provjerite da je aktiviran agent Setup Assistant

**Moj `site_brief` se ne koristi**
- Provjerite jesu li agentu pristup memoriji
- Zamolite agenta da "vgeriše moj site brief" (recall my site brief)
- Provjerite je li memorija omogućena u vašim postavkama

**Generirani tema ne odgovara mojim preferencijama**
- Koristite skill Design System Aesthetics za usavršavanje
- Zamolite agenta da "regenerira temu s [specifičnim promjenama]" (regenerate the theme with [specific changes])
- Direktno uredite `theme.json` za preciznu kontrolu

## Sljedeći koraci {#next-steps}

Nakon što završite onboarding Theme Builder-a:

1. **Provjerite svoj site**: Posjetite svoj сайт kako biste vidjeli novu temu
2. **Usavršite dizajn**: Koristite skill Design System Aesthetics za prilagodbe
3. **Dodajte sadržaj**: Počnite graditi sadržaj vašeg sajta
4. **Istražite mogućnosti**: Naučite o drugim sposobnostima agenta poput scaffold-block-theme i activate-theme
