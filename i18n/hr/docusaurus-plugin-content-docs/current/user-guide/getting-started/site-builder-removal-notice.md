---
title: Obavijest o uklanjanju načina za izgradnju stranice
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Obavijest o uklanjanju načina izgradnje stranica (Site Builder Mode) {#site-builder-mode-removal-notice}

**Način izgradnje stranica (Site Builder mode) je uklonjen u Superdav AI Agent v1.12.0.** Ako ste koristili način izgradnje stranica, trebali biste migrirati na **Setup Assistant agent** za kreiranje tema i postavljanje stranice.

## Što se dogodilo? {#what-happened}

### Način izgradnje stranica (Stari) {#site-builder-mode-legacy}

Način izgradnje stranica bio je interfejs zasnovan na vodiču (wizard-based interface) za:

- Kreiranje stranica iz predložaka
- Konfiguriranje osnovnih postavki
- Odabir teme
- Postavljanje početnog sadržaja

### Što ga zamjenjuje? {#what-replaced-it}

**Setup Assistant agent** sada obrađuje svu funkcionalnost načina izgradnje stranica s:

- Više fleksibilnim postavkama vođenim agentom
- Boljim opcijama za prilagođavanje teme
- Integracijom s onboardingom Theme Buildera
- Trajnim memorijom `site_brief` za buduće sesije

## Ako ste koristili način izgradnje stranica (Site Builder Mode) {#if-you-were-using-site-builder-mode}

### Vaše stranice su sigurne {#your-sites-are-safe}

- Postojeće stranice kreirane pomoću načina izgradnje stranica i dalje rade
- Bez gubitka podataka ili prekida rada stranice
- Možete nastaviti normalno upravljati svojim stranicama

### Migrirajte na Setup Assistant agent {#migrate-to-setup-assistant-agent}

Za novo postavljanje stranice ili promjene teme, koristite Setup Assistant agent:

```
"Pomozi mi postaviti novu stranicu"
```

ili

```
"Počni onboarding Theme Buildera"
```

Setup Assistant agent nudi istu funkcionalnost s većom fleksibilnošću.

## Poređenje: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funkcija | Site Builder (Uklonjen) | Setup Assistant (Novo) |
|---------|----------------------|----------------------|
| Metoda postavljanja | Vodič (Wizard form) | Razgovor s agentom |
| Odabir teme | Predodređeni predlošci | Prilagođena generacija |
| Prilagođavanje | Ograničene opcije | Potpuni dizajn sustav |
| Site brief | Nije pohranjen | Trajna memorija |
| Buduće sesije | Ponovni postavljanje | Korištenje pohranjenog site_briefa |
| Fleksibilnost | Fiksni radni tok | Adaptivni razgovor |

## Migracija na Setup Assistant agent {#migrating-to-setup-assistant-agent}

### Za nove stranice {#for-new-sites}

Umjesto korištenja načina Site Builder mode:

1. Zahtjevajte: "Pomozi mi postaviti novi sajt"
2. Agent Pomoćnik za postavljanje će vas voditi kroz:
   - Svrhu i ciljeve sajta
   - Ciljnu publiku
   - Brend identitet
   - Generiranje teme
   - Početno konfiguriranje

### Za postojeće sajtove {#for-existing-sites}

Ako imate postojeći sajt iz Site Builder mode:

1. Možete nastaviti ga koristiti onako kako je već.
2. Da biste ažurirali temu, zahtijevajte: "Redizajniraj mi moj sajt"
3. Agent Pomoćnik za postavljanje će vam pomoći da kreirate novu temu
4. Vaš podaci o sajtu ostaju nepromijenjeni

### Za promjene teme {#for-theme-changes}

Umjesto odabira teme u Site Builder modu:

1. Zahtijevajte: "Promijeni mi temu"
2. Agent Pomoćnik za postavljanje će:
   - Pitati vas o vašim preferencijama dizajna
   - Generirati prilagođenu temu
   - Aktivirati je na vašem sajtu

## Ključne razlike {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Odaberite šablon
2. Odaberite temu
3. Konfigurišajte osnovne postavke
4. Gotovo
```

### Agent Pomoćnik za postavljanje (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Opisz svrhu vašeg sajta
2. Definišite ciljnu publiku
3. Odaberite preferencije dizajna
4. Agent generira prilagođenu temu
5. Agent aktivira temu
6. Sažetak sajta se sprema za buduće sesije
```

## Prednosti Agent Pomoćnika za postavljanje (Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Više fleksibilno {#more-flexible}

- Opisujte svoj sajt prirodnim jezikom
- Dobijate prilagođene preporuke
- Prilagodite se svojim specifičnim potrebama

### Bolja prilagodba {#better-customization}

- Generiranje prilagođene teme
- Odluke o dizajnom sustavu (Design System)
- Trajno skladištenje dizajnih tokena (design tokens)

### Trajna memorija {#persistent-memory}

- Vaš `site_brief` se sprema
- Budući agenti razumiju vaš sajt
- Ne morate ponavljati informacije o postavljanju

### Integrirani radni tok (Workflow) {#integrated-workflow}

- Onboarding za Theme Builder
- Vještina estetike Design Systema
- Sposobnost kontrole vidljivosti (Visibility controls)
- Sve zajedno rade bez zagušenja

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Ne mogu pronaći Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode je uklonjen. Umjesto njega koristite Agent Pomoćnik za postavljanje:

"Pomođite mi postaviti novi sajt"

### Želim ponovno napraviti sajt iz Site Buildera {#i-want-to-recreate-a-site-from-site-builder}

Možete ga ponovno napraviti pomoću agenta Setup Assistant:

1. Zahtjevajte: "Pomoć mi postaviti novi sajt"
2. Opisz svrhu i dizajn vašeg originalnog sajta
3. Agent će generirati sličan tema
4. Vaš `site_brief` će biti pohranjen za buduće reference

### Moj postojeći sajt iz Site Buildera ne radi {#my-existing-site-builder-site-isnt-working}

Sajti napravljeni s Modele Site Buildera nastavljaju raditi. Ako imate problema:

1. Provjerite da li je vaš tema još uvijek aktivna
2. Provjerite da li su vam pluginovi omogućeni
3. Provjerite WordPress logove grešaka
4. Kontaktirajte podršku ako problemi nastavljaju

### Možete li koristiti moje stare Site Builder šablone? {#can-i-still-use-my-old-site-builder-templates}

Šabloni Site Buildera više nisu dostupni. Međutim:

- Vaši postojeći sajtovi i dalje rade
- Možete ponovno napraviti slične sajtove pomoću agenta Setup Assistant
- Agent Setup Assistant nudi vam više opcija za prilagodbu

## Sljedeći koraci {#next-steps}

1. **Za nove sajtove**: Koristite agenta Setup Assistant
2. **Za postojeće sajtove**: Nastavite ih koristiti onako kako su
3. **Za promjene teme**: Zahtijevajte pomoć od agenta Setup Assistant
4. **Za usavršavanje dizajna**: Koristite skill Design System Aesthetics

## Srodne teme {#related-topics}

- **Theme Builder Onboarding**: Vođeno postavljanje za prilagođene teme
- **Setup Assistant Agent**: Postavljanje sajta vođeno agentom
- **Site Specification Skill**: Odredite ciljeve i publiku vašeg sajta
- **Design System Aesthetics Skill**: Usavršite vizitnu identitet vašeg sajta
