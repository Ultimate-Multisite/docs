---
title: Tema Bouer Onboarding Vloei
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Proses

Superdav AI Agent v1.12.0 stel 'n begeleide **Theme Builder onboarding-proses** bekend wat jou help om 'n aangepaste bloktema te skep tydens jou aanvanklike opstelling. Dit vervang die ou Site Builder-modus met 'n meer buigsame, agent-geassisteerde benadering.

## Wat is die Theme Builder Onboarding Proses? {#what-is-the-theme-builder-onboarding-flow}

Die Theme Builder onboarding-proses is 'n interaktiewe opstel-wond (setup wizard) wat:

- Jou deur ontwerpbesluite lei (kleure, tipografie, uitleg)
- Jou webwerf se visuele identiteitsvoorkeure vang
- 'n aangepaste bloktema genereer wat op jou behoeftes afgestel is
- Die tema outomaties aktiveer wanneer dit voltooi is

Die proses word aangedryf deur die **Setup Assistant agent**, wat verduidelikende vrae vra en jou tema geleidelik bou.

## Begin die Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Eerste-Keer Opstelling {#first-run-setup}

Wanneer jy Superdav AI Agent vir die eerste keer op 'n nuwe WordPress-installasie laat loop, sal jy die volgende sien:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Kies **"Build a custom theme"** om die Theme Builder onboarding-proses in te gaan.

### Handmatige Aktivering {#manual-activation}

Jy kan ook enige tyd die Theme Builder onboarding begin deur te vra:

```
"Start the Theme Builder onboarding"
```

of

```
"Help me create a custom theme"
```

## Die Onboarding Stappe {#the-onboarding-steps}

### Stap 1: Moduskeuse {#step-1-mode-selection}

Die Setup Assistant agent vra oor jou voorkeur:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** word aanbeveel vir die meeste gebruikers; die agent maak ontwerpvoorstelle gebaseer op jou bedryf en doelwitte.

### Stap 2: Webwerf Spesifikasie {#step-2-site-specification}

Jy sal oor jou webwerf gevra word:

- **Site purpose**: E-handel, blog, portfolio, SaaS, ens.
- **Target audience**: Wie is jou besoekers?
- **Brand colors**: Primêre en sekondêre kleure (of "Ek is nie seker nie")
- **Tone**: Professioneel, kreatief, speels, minimalisties, ens.

Hierdie inligting word in jou **site_brief** geheue gestoor, wat agents in toekomstige sessies verwys.

### Stap 3: Ontwerpstelsel Besluite {#step-3-design-system-decisions}

Die agent lei jou deur die keuse van ontwerp-tokens:

- **Typography**: Lettertipefamilie (serif, sans-serif, monospace) en grootte-skal
- **Color palette**: Primêre, sekondêre, aksent en neutrale kleure
- **Spacing**: Kompak, normaal of ruimtelike uitlegte
- **Motion**: Animasië en oorgange (indien gewens)

### Stap 4: Tema Generasie {#step-4-theme-generation}

Die Setup Assistant agent bou jou aangepaste bloktema met:

- `theme.json` wat al jou ontwerp-tokens bevat
- Bloktemplates vir algemene uitlegte (hoofblad, blog, kontak)
- Aangepaste blokstyl wat by jou ontwerpstelsel pas
- Tema-metadata en WordPress-ondersteuningsverklaringe

### Stap 5: Aktivering en Verifikasie {#step-5-activation-and-verification}

Die tema word outomaties geaktiveer, en jy sal die volgende sien:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Jy kan dan jou webwerf besoek om te verifieer dat die tema korrek vertoon word.

## Webwerf Spesifikasie en site_brief Geheue {#site-specification-and-sitebrief-memory}

Tydens die onboarding vang die agent jou webwerf se spesifikasie in 'n **site_brief** gehemekategorie. Dit sluit in:

- Webwerf doel en doelwitte
- Besoekersgroep
- Brandkleure en toon
- Ontwerpvoorkeure
- Inhoudsstruktuur

### Hoekom site_brief Belangrik Is {#why-sitebrief-matters}

In toekomstige sessies verwys agents na jou site_brief om:

- Ontwerp-konsistensie oor veranderinge te handhaaf
- Funksies voor te stel wat by jou webwerf se doel pas
- Konteksbewuste aanbevelings te gee
- Om te verhoed dat opstel-vrae herhaal word

### Bekyk Jou site_brief {#viewing-your-sitebrief}

Jy kan die agent vra:

```
"Show me my site brief"
```

of

```
"What do you know about my site?"
```

Die agent sal jou gestoor webwerf spesifikasie wys.

## Aanpas Na Onboarding {#customizing-after-onboarding}

Nadat die Theme Builder onboarding voltooi is, kan jy:

### Gebruik die Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Vra vir ontwerpverfynings:

```
"Refine the typography to be more modern"
```

of

```
"Adjust the color palette to be warmer"
```

Die **Design System Aesthetics skill** lei jou deur gerigte ontwerpopdaterings.

### Wysig theme.json Direk {#edit-themejson-directly}

Vir gevorderde gebruikers, wysig `/wp-content/themes/[theme-name]/theme.json` om te pas:

- Kleur-tokens
- Tipografie-skale
- Spasering-waardes
- Rand- en skadu-definisië

### Skep Aangepaste Bloktemplates {#create-custom-block-templates}

Gebruik die WordPress blokredigeerder om aangepaste templates te skep vir:

- Hoofblad-uitleg
- Blog-plasing-bladsye
- Produkbladsye
- Kontakvorms

## Vergelyking: Ou tege Nuwe Onboarding {#comparison-old-vs-new-onboarding}

| Funksie | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|---------------------|
| Opstelmetode | Wizard-gebaseerde vorm | Agent-gelei gesprek |
| Tema generasie | Beperkte templates | Aangepaste raamwerk |
| Ontwerp-tokens | Handmatige invoer | Begeleide besluite |
| Buigsamheid | Vasgestelde opsies | Aanpasbaar |
| Toekomstige opdaterings | Word nie verwys nie | Gestoor in site_brief |

## Probleemoplossing {#troubleshooting}

**Die onboarding-proses het nie voltooi nie**
- Herbegin die proses: "Start the Theme Builder onboarding"
- Kontroleer dat jou WordPress-installasie op datum is
- Verifieer dat die Setup Assistant agent geaktiveer is

**My site_brief word nie gebruik nie**
- Bevestig dat die agent toegang het tot geheue
- Vra die agent om my site brief te "recall"
- Kontroleer dat geheue in jou instellings geaktiveer is

**Die gegenereerde tema pas nie by my voorkeure nie**
- Gebruik die Design System Aesthetics skill om dit te verfyn
- Vra die agent om die tema te "regenerate with [specific changes]"
- Wysig theme.json direk vir presiese beheer

## Volgende Stappe {#next-steps}

Nadat Theme Builder onboarding voltooi is:

1. **Verifieer jou webwerf**: Besoek jou webwerf om die nuwe tema te sien
2. **Verfyn die ontwerp**: Gebruik Design System Aesthetics skill vir aanpassings
3. **Voeg inhoud by**: Begin met die bou van jou webwerf se inhoud
4. **Verken vermoëns**: Leer oor ander agent-vermoëns soos scaffold-block-theme en activate-theme
