---
title: Noticio pri la forigo de Modo Konstrui Siton
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Notitzum pri Entferon de Modilo Konstrui (Site Builder Mode)

**La modilo Site Builder a espagi en Superdav AI Agent v1.12.0.** Se necese migri al **Setup Assistant agent** por kreo temoj kaj montri la siton.

## Kion Ok Fari? {#what-happened}

### Modilo Site Builder (Vétaj) {#site-builder-mode-legacy}

Modilo Site Builder estis interfaco bazita sur wizard por:

- Krei sitojn el temploj
- Konfigurigi bazajn ŝanĝojn
- Eliri temon
- Montri la inicialan enconponon de la enhavo

### Kion Ĝi Substitutis? {#what-replaced-it}

La **Setup Assistant agent** nun maneĝas ĉiuj funkciojn de Site Builder per:

- pli fleksabla, agen-gvidita montrado
- bone pli bonaj opcioj por personaligi temojn
- integriĝo kun la enkonfimo de Theme Builder
- persistanta memoro `site_brief` por futaj sesioj

## Se Vi Usis Modilo Site Builder {#if-you-were-using-site-builder-mode}

### Via Sitoj Estas Segure {#your-sites-are-safe}

- Ekzistantaj sitoj, kiuj estis kreitaj per modilo Site Builder, continus fari funkcion
- Sen da vinco de datum aŭ montri la siton
- Vi povas kontinui manĝi viajn sitojn normalan maniero

### Migri al Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Por nova montrado de sitio aŭ ŝanĝoj en temojn, uzu la Setup Assistant agent:

```
"Help me set up a new site"
```

aŭ

```
"Start the Theme Builder onboarding"
```

La Setup Assistant agent donas la saman funkcion per pli da fleksibiliteco.

## Komparado: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Karaktero | Site Builder (Drangi) | Setup Assistant (Nova) |
|---------|----------------------|----------------------|
| Montrado metodo | Wizard form | Agent konversacio |
| Temo selekto | Preddefinita temploj | Personalita generado |
| Personaligo | Limita opcioj | Plena dezajno sistema |
| Site brief | Ne estas apartigita | Persistanta memoro |
| Futaj sesioj | Repeti montron | Uzui apartigitan site_brief |
| Fleksibiliteco | Fikta flujo de laboro | Adaptiva konversacio |

## Migri al Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Por Novaj Sitoj {#for-new-sites}

Inplie de uzadon Mode Konstruktoro Stazo (Site Builder mode):

1. Pažakojon: "Padėk man nustatyti naują stazą"
2. Asistentus Nustatymo Agentas (Setup Assistant agent) patarito jums:
   - Stazo tikslumas ir tikslumai
   - Tikslinė auditorija
   - Brendo identitas
   - Temo generavimas
   - Pradinis nustatymas

### Eksistancinių Stazų Kur {#for-existing-sites}

Jei turite jau eksistantų stazų iš Mode Konstruktoro Stazo:

1. Jūs galite to naudoti kaip yra
2. Norėdami atnaujinti temą, pažakojon: "Redesizdu savo stazę" (Redesign my site)
3. Asistentus Nustatymo Agentas padės jums su naujo temos kūrimu
4. Jūsų stazo duomenys liks nepasikeisti

### Temų Keitimo Kur {#for-theme-changes}

Jei norite keisti temą, be Mode Konstruktoro Stazo pasirinkimo:

1. Pažakojon: "Keisdinti savo temą" (Change my theme)
2. Asistentus Nustatymo Agentas padės jums:
   - Paklausyti apie jūsų dizaino preferencijas
   - Generuoti pritaikytą temą
   - Aktyvuoti ją jūsų stazo ant stazo

## Pagrindinės Skirbliai (Key Differences) {#key-differences}

### Mode Konstruktoro Stazo (Site Builder Mode) {#site-builder-mode}

```
1. Pasirinkti šabloną
2. Pasirinkti temą
3. Nustatyti pagrindines nustatymus
4. Apsauga
```

### Asistentus Nustatymo Agentas (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Apibūdinti jūsų stazo tikslumą
2. Nustatyti jūsų tikslinę auditoriją
3. Pasirinkti dizaino preferencijas
4. Agentas generuoja pritaikytą temą
5. Agentas aktyvuoja temą
6. Stazo apibūdinimas saugomas ateitymo sesijoms
```

## Asistentus Nustatymo Agentų Privalumai (Benefits of Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Darbu Saugesnis (More Flexible) {#more-flexible}

- Apibūdinti savo stazę natūraliu kalbu
- Gauti pritaikytus rekomendacijas
- Prisiginti jūsų specifinėms poreikiams

### Geros Pritaikymo Kur (Better Customization) {#better-customization}

- Pritaikytos temų generavimas
- Dizaino sistemos sprendimai
- Persistanti dizaino tokenai

### Persistanti Memoria (Persistent Memory) {#persistent-memory}

- Jūsų `site_brief` saugomas
- Ateitymo agentai supranta jūsų stazę
- Nežreikia powtaryti nustatymo informacijos

### Integruotas Darbo Procesas (Integrated Workflow) {#integrated-workflow}

- Temų kūrimo įkurimas (Theme Builder onboarding)
- Dizaino sistemos esteties įgūdžius
- Matomumo kontrolės galimybė
- Visi darbai dirba kartu be problemų

## Problemos Atsilapimo (Troubleshooting) {#troubleshooting}

### Negaliu rasti Mode Konstruktoro Stazo {#i-cant-find-site-builder-mode}

Mode Konstruktoro Stazą buvo pašalintas. Nors naudokite Asistentus Nustatymo Agentą:

"Help mi konfigi nova siton"

### Mi vol recrei siton din Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Vi povas recrei ĝin kun la agento Asisto de Konfigo (Setup Assistant agent):

1. **Petilo:** "Help mi konfigi nova siton"
2. **Deskripi** la celon kaj la dezajnan de via originale sito
3. La agente generos similajn temojn
4. Via `site_brief` estas konservita por futura referenco

### Mia ekzista sito din Site Builder ne funkcias {#my-existing-site-builder-site-isnt-working}

Ekzistaj sitoj, kiuj estis kreitaj kun modo Site Builder, continus funkcii. Se vi havas problemo:

1. Kontrole se via tema estas aktiva
2. Verifuji se via pluginoj estas aktivaj
3. Kontrole WordPress erorlogojn (error logs)
4. Kontakti subtenon, se problemo persistas

### Ĉu mi povas uzi miajn vortajn ŝablonojn de Site Builder? {#can-i-still-use-my-old-site-builder-templates}

Vortaj ŝablonoj de Site Builder ne estas disponibile pli da. Tial:

- Via ekzistaj sitoj continus funkcii
- Vi povas recrei similajn sitojn kun la agento Asisto de Konfigo (Setup Assistant agent)
- La agento Asisto de Konfigo (Setup Assistant agent) provizas pli da opciojn por personaligi

## Proksimaj Paŝoj {#next-steps}

1. **Por novaj sitoj**: Uzu la agento Asisto de Konfigo (Setup Assistant agent)
2. **Por ekzistaj sitoj**: Kontinu uzi ilin kiel ili estas
3. **Por ŝanĝoj de temo**: Petu helpon de la agento Asisto de Konfigo (Setup Assistant agent)
4. **Por dezajno refina**: Uzu la abiliteco Estetiko de Sistemo de Dezajno (Design System Aesthetics skill)

## Relatitaj Temoj {#related-topics}

- **Onboarding de Modo Temo (Theme Builder Onboarding)**: Gvidita konfigo por vortaj temoj
- **Agento Asisto de Konfigo (Setup Assistant Agent)**: Sito konfigura gvitita per la agente
- **Abiliteco Specifika de Sito (Site Specification Skill)**: Defini la celojn kaj la publikon de via sito
- **Abiliteco Estetiko de Sistemo de Dezajno (Design System Aesthetics Skill)**: Refini la vizual identecon de via sito
