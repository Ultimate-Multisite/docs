---
title: Pranešimas apie Site Builder Mode pašalinimą
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Powiadomimas dėl usitvirtinimo režimo pašalinimo

**Usitvirtinimo režimas buvo pašalytas Superdav AI Agent v1.12.0.** Jei naudojote Site Builder režimą, turite pereiti prie **Setup Assistant agent** (Asistentio agentas) kūrimui temų ir svetainės nustatymams.

## Kas įvyko? {#what-happened}

### Site Builder režimas (senasis) {#site-builder-mode-legacy}

Site Builder režimas buvo vizualizuotas procesas (wizard), skirtas:

- Svetainų kūrimui iš šablonų
- Pagrindinių nustatyjimo konfigūracijai
- Temų pasirinkimui
- Pradarginio turinio nustatymui

### Kas jį atliko? {#what-replaced-it}

**Setup Assistant agent** dabar tvarko visą Site Builder funkcijų su:

- Darbu, gamybos (agent) vadinamu nustatymu
- Geriačiais temų personalizavimo galimybėmis
- Integracija su Theme Builder įkurimo procesą
- Persistente `site_brief` sąmoningumu ateityrinkiniams sesijoms

## Jei naudojote Site Builder režimą {#if-you-were-using-site-builder-mode}

### Jūsų svetainės yra saugos {#your-sites-are-safe}

- Su Site Builder režimu sukurtos esamos svetainės vis dar veiks
- Nėra duomenų praradimo ar svetainės neradų
- Galite toliau normaliai valdyti savo svetainis

### Pereikite prie Setup Assistant agent {#migrate-to-setup-assistant-agent}

Naujų svetaini nustatymui arba temų pakeitimams naudokite Setup Assistant agent:

```
"Padėkite man nustatyti naują svetainę"
```

ar

```
"Pradėkime temų kūrimo įkurimo procesą"
```

Setup Assistant agent siūlo tą pačią funkcijų, bet su didesniam judėjimo laiku.

## Palyginimas: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Pavadinimas | Site Builder ( pašalytas) | Setup Assistant (naujas) |
|---------|----------------------|----------------------|
| Nustatymo būdas | Wizard forma | Agentų pokalbis |
| Temų pasirinkimas | Predefined šablonai | Pridastomas kūrimas |
| Personalizavimas | Apribotu pasirinkimų | Pilnas dizaino sistemas |
| Svetainės aprašymas | Nenaudojamas | Persistentes sąmoningumas |
| Ateityrinkinis sesijai | Įvaizduojama nustatymas | Naudokite išsaugotą `site_brief` |
| Elgimys | Fixed workflow (fiksuotas procesas) | Adaptiutinis pokalbis |

## Pereikimas prie Setup Assistant agent {#migrating-to-setup-assistant-agent}

### Naujoms svetainėms {#for-new-sites}

Nenaikite vietojant svetaininką (Site Builder mode):

1. Prašymas: „Padėkime naujo svetainės nustatymui“
2. Nustatymo asistentas agentas pabaigo jums:
   - Svetainės tikslus ir tikslai
   - Tikslinė auditorija
   - Prekės ženklos identitas
   - Temų generavimas
   - Pradinis nustatymas

### Esamų svetainių przypadku {#for-existing-sites}

Jei turite esamą svetainę, kuri buvo sujungta svetaininkio režimu (Site Builder mode):

1. Jūs galite ją tęsti naudoti kaip yra
2. Aby atnaujinti temą, prašykite: „Redesize my site“ (Pakeiskite savo svetainę dizainą)
3. Nustatymo asistentas agentas padės jums sukurti naują temą
4. Jūsų svetainės duomenys bus likti nepasikeisti

### Temų pakeitimai {#for-theme-changes}

Nenaikite svetaininkio režimo temų pasirinkimą:

1. Prašymas: „Change my theme“ (Pakeiskite savo temą)
2. Nustatymo asistentas agentas padės jums:
   - Užduoti klausimus apie jūsų dizaino preferencijas
   - Generuoti pritaikytą temą
   - Aktyvuoti ją jūsų svetainėje

## Pagrindiniai skirtumai {#key-differences}

### Svetaininkio režimas (Site Builder Mode) {#site-builder-mode}

```
1. Pasirinkite šabloną
2. Pasirinkite temą
3. Nustatykite pagrindines nustatymus
4. Apiegamoma
```

### Nustatymo asistentas agentas (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Apibūdinkite jūsų svetainės tikslą
2. Nurodykite savo tikslinę auditoriją
3. Pasirinkite dizaino preferencijas
4. Agentas generuoja pritaikytą temą
5. Agentas aktyvuoja temą
6. Svetainės apibūdinimas saugomas ateitymoms

```

## Nustatymo asistento agentaro naudingumas {#benefits-of-setup-assistant-agent}

### Labiau įtrauklingas {#more-flexible}

- Apibūdinkite savo svetainę natūraliu kalbu
- Gaukite pritaikytus pasiūlymus
- Prisigręžkite prie jūsų specifinių poreikių

### Geresnis personalizavimas {#better-customization}

- Pritaikytos temų generavimas
- Dizaino sistemos sprendimai
- Persistenti dizaino tokenai

### Persistente sąmena {#persistent-memory}

- Jūsų `site_brief` saugomas
- Ateityji agentai supranta jūsų svetainę
- Nenaudojami naujai nustatymo informacijos repetavimas

### Integruotas procesas {#integrated-workflow}

- Temų kūrimo įtraukimas (Theme Builder onboarding)
- Dizaino sistemos estetiikos įgūdžius
- Matomumo kontrolės galimybė
- Visi darbai veikia kartu be problemų

## Problemos atšalinimas {#troubleshooting}

### Negaukia svetaininkio režimo (Site Builder mode) {#i-cant-find-site-builder-mode}

Svetaininkio režimas buvo pašalintas. Nuaikite nustatymo asistentą agentą:

"Pagalmas, kaip galėčiau nustatyti naują svetainę?"

### Noriu atnaujinti svetainę iš Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Jūs galite ją atnaujinti su agentu Setup Assistant:

1. Prašymas: "Pagalmas, kaip galėčiau nustatyti naują svetainę"
2. Apibūdinkite jūsų originalios svetainės tikslą ir dizainą
3. Agentas sukuria panašų temą
4. Jūsų `site_brief` bus išsaugotas ateitymo atsakymui

### Mano esamoji Site Builder svetainė ne veikia {#my-existing-site-builder-site-isnt-working}

Esančios svetainės, kurios sukurtos naudojant Site Builder režimą, vis dar veikia. Jei susiraupytum problemas:

1. Patikrinkite, ar jūsų tema vis dar yra aktyvi
2. Patikrinkite, ar jūsų pluginai yra įjungti
3. Patikrinkite WordPress erorodžius (error logs)
4. Susisiekite su pagalba, jei problemos laiko nebuvą

### Ar galėčiau naudoti mano senus Site Builder šablonus? {#can-i-still-use-my-old-site-builder-templates}

Site Builder šablonai dabar nėra gyvykiami. Tačiau:

- Jūsų esamos svetainės vis dar veikia
- Jūs galite sukurti panašias svetainės su agentu Setup Assistant
- Agentas Setup Assistant siūlo daugiau nustatymų variantų

## Ką daryti toliau {#next-steps}

1. **Nauji svetainės**: Naudokite agentą Setup Assistant
2. **Esamos svetainės**: Toliau naudokite juos kaip yra
3. **Temų keitimas**: Prašykite pagalbos nuo agento Setup Assistant
4. **Dizaino tobulinimas**: Naudokite įgūdžių Design System Aesthetics

## Susiję su temomis {#related-topics}

- **Theme Builder Onboarding**: Paskutinis nustatymas kurti pritaikytą temą
- **Setup Assistant Agent**: Svetainės nustatymas pagal agento vadovimą
- **Site Specification Skill**: Nurodykite jūsų svetainės tikslus ir auditoriją
- **Design System Aesthetics Skill**: Tobulinkite jūsų svetainės vizualią identitetą
