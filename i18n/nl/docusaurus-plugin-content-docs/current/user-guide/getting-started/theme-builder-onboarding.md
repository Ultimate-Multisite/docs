---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 introduceert een begeleide **Theme Builder onboarding flow** waarmee u tijdens de initiële setup een aangepast block theme kunt creëren. Dit vervangt de verouderde Site Builder-modus door een flexibelere, door een agent ondersteunde aanpak.

## Wat is de Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

De Theme Builder onboarding flow is een interactieve setup wizard die:

- U door ontwerpbeslissingen leidt (kleuren, typografie, lay-out)
- De visuele identiteitspreferenties van uw site vastlegt
- Een aangepast block theme genereert dat is afgestemd op uw behoeften
- Het thema automatisch activeert wanneer het proces voltooid is

De flow wordt aangedreven door de **Setup Assistant agent**, die verduidelijkende vragen stelt en uw thema incrementeel opbouwt.

## De Theme Builder Onboarding Starten {#starting-the-theme-builder-onboarding}

### Eerste keer instellen {#first-run-setup}

Wanneer u Superdav AI Agent voor het eerst op een nieuwe WordPress-installatie start, ziet u:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Selecteer **"Build a custom theme"** om de Theme Builder onboarding flow te starten.

### Handmatige activatie {#manual-activation}

U kunt de Theme Builder onboarding ook op elk moment starten door te vragen:

```
"Start the Theme Builder onboarding"
```

of

```
"Help me create a custom theme"
```

## De Onboarding Stappen {#the-onboarding-steps}

### Stap 1: Modusselectie {#step-1-mode-selection}

De Setup Assistant agent vraagt naar uw voorkeur:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** wordt aanbevolen voor de meeste gebruikers; de agent geeft ontwerpaanbevelingen op basis van uw branche en doelen.

### Stap 2: Site specificatie {#step-2-site-specification}

U wordt gevraagd naar uw site:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, enz.
- **Target audience**: Wie zijn uw bezoekers?
- **Brand colors**: Primaire en secundaire kleuren (of "Ik weet het niet")
- **Tone**: Professioneel, creatief, speels, minimalistisch, enz.

Deze informatie wordt opgeslagen in uw **site_brief** geheugen, dat agents gebruiken in toekomstige sessies.

### Stap 3: Beslissingen over het Design Systeem {#step-3-design-system-decisions}

De agent begeleidt u bij de selectie van design tokens:

- **Typography**: Lettertypefamilie (serif, sans-serif, monospace) en schaal van de grootte
- **Color palette**: Primaire, secundaire, accent- en neutrale kleuren
- **Spacing**: Compacte, normale of ruimtelijke lay-outs
- **Motion**: Animaties en overgangen (indien gewenst)

### Stap 4: Thema Generatie {#step-4-theme-generation}

De Setup Assistant agent bouwt uw aangepaste block theme op met:

- `theme.json` met al uw design tokens
- Block templates voor veelvoorkomende lay-outs (homepage, blog, contact)
- Aangepaste block stijlen die overeenkomen met uw design systeem
- Thema metadata en WordPress support verklaringen

### Stap 5: Activatie en Verificatie {#step-5-activation-and-verification}

Het thema wordt automatisch geactiveerd, en u ziet:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

U kunt vervolgens uw site bezoeken om te verifiëren dat het thema correct wordt weergegeven.

## Site Specificatie en site_brief Geheugen {#site-specification-and-sitebrief-memory}

Tijdens de onboarding vangt de agent de specificatie van uw site op in een **site_brief** geheugen categorie. Dit omvat:

- Doel en doelen van de site
- Doelgroep
- Merk- en toonkleuren
- Ontwerpvoorkeuren
- Contentstructuur

### Waarom site_brief belangrijk is {#why-sitebrief-matters}

In toekomstige sessies verwijzen agents naar uw site_brief om:

- Behoud van designconsistentie bij wijzigingen
- Het voorstellen van functies die aansluiten bij het doel van uw site
- Contextbewuste aanbevelingen te geven
- Het vermijden van het herhalen van setupvragen

### Uw site_brief bekijken {#viewing-your-sitebrief}

U kunt de agent vragen:

```
"Show me my site brief"
```

of

```
"What do you know about my site?"
```

De agent toont uw opgeslagen site specificatie.

## Aanpassen na de Onboarding {#customizing-after-onboarding}

Nadat de Theme Builder onboarding is voltooid, kunt u:

### Gebruik de Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Vraag om ontwerpverbeteringen:

```
"Refine the typography to be more modern"
```

of

```
"Adjust the color palette to be warmer"
```

De **Design System Aesthetics skill** begeleidt u bij gerichte ontwerpupdates.

### Bewerk theme.json Direct {#edit-themejson-directly}

Voor geavanceerde gebruikers, bewerk `/wp-content/themes/[theme-name]/theme.json` om aan te passen:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Maak Aangepaste Block Templates {#create-custom-block-templates}

Gebruik de WordPress block editor om aangepaste templates te maken voor:

- Homepage lay-outs
- Blog post pagina's
- Productpagina's
- Contactformulieren

## Vergelijking: Oud vs. Nieuw Onboarding {#comparison-old-vs-new-onboarding}

| Functie | Site Builder (Legacy) | Theme Builder (Nieuw) |
|---------|----------------------|----------------------|
| Instelmethode | Wizard-gebaseerd formulier | Agent-geleigd gesprek |
| Thema generatie | Beperkte templates | Aangepast scaffolding |
| Design tokens | Handmatige invoer | Begeleide beslissingen |
| Flexibiliteit | Vaste opties | Aanpasbaar |
| Toekomstige updates | Wordt niet verwezen naar | Opgeslagen in site_brief |

## Probleemoplossing {#troubleshooting}

**De onboarding flow is niet voltooid**
- Start de flow opnieuw: "Start the Theme Builder onboarding"
- Controleer of uw WordPress-installatie up-to-date is
- Verifieer of de Setup Assistant agent is ingeschakeld

**Mijn site_brief wordt niet gebruikt**
- Bevestig dat de agent toegang heeft tot het geheugen
- Vraag de agent om "recall my site brief"
- Controleer of het geheugen is ingeschakeld in uw instellingen

**Het gegenereerde thema komt niet overeen met mijn voorkeuren**
- Gebruik de Design System Aesthetics skill om het te verfijnen
- Vraag de agent om "regenerate the theme with [specific changes]"
- Bewerk theme.json direct voor precieze controle

## Volgende Stappen {#next-steps}

Nadat u de Theme Builder onboarding heeft voltooid:

1. **Verifieer uw site**: Bezoek uw site om het nieuwe thema te zien
2. **Verfijn het ontwerp**: Gebruik de Design System Aesthetics skill voor aanpassingen
3. **Voeg content toe**: Begin met het bouwen van de content van uw site
4. **Ontdek mogelijkheden**: Leer over andere agent abilities zoals scaffold-block-theme en activate-theme
