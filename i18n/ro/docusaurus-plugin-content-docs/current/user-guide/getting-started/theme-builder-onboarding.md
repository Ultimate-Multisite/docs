---
title: Flux de onboarding pentru Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxul de Onboarding în Theme Builder

Superdav AI Agent v1.12.0 introduce un **flux de onboarding în Theme Builder** ghidat care vă ajută să creați o temă personalizată bazată pe blocuri în timpul configurării inițiale. Acest lucru înlocuiește modul Site Builder (cel vechi) cu o abordare mai flexibilă, asistată de un agent.

## Ce este Fluxul de Onboarding în Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Fluxul de onboarding în Theme Builder este un asistent de configurare interactiv care:

- Vă ghidează prin deciziile de design (culori, tipografie, layout)
- Înregistrează preferințele vizuale ale site-ului dumneavoastră
- Generează o temă personalizată bazată pe blocuri, adaptată nevoilor dumneavoastră
- Activează tema automat la finalizare

Fluxul este alimentat de **agentul Setup Assistant**, care vă adresează întrebări de clarificare și vă construiește tema în etape.

## Pornirea Onboarding-ului Theme Builder {#starting-the-theme-builder-onboarding}

### Configurare la prima utilizare {#first-run-setup}

Când porniți Superdav AI Agent pentru prima dată pe o instalare nouă de WordPress, veți vedea:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Selectați **"Build a custom theme"** pentru a intra în fluxul de onboarding în Theme Builder.

### Activare manuală {#manual-activation}

De asemenea, puteți începe onboarding-ul Theme Builder în orice moment solicitând:

```
"Start the Theme Builder onboarding"
```

sau

```
"Help me create a custom theme"
```

## Etapele Onboarding-ului {#the-onboarding-steps}

### Pasul 1: Selectarea Modului {#step-1-mode-selection}

Agentul Setup Assistant vă întreabă despre preferințele dumneavoastră:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Modul ghidat (Guided mode)** este recomandat pentru majoritatea utilizatorilor; agentul face recomandări de design bazate pe industria și obiectivele dumneavoastră.

### Pasul 2: Specificația Site-ului {#step-2-site-specification}

Veți primi întrebări despre site-ul dumneavoastră:

- **Scopul site-ului**: E-commerce, blog, portofoliu, SaaS etc.
- **Audiența țintă**: Cine sunt vizitatorii dumneavoastră?
- **Culorile brandului**: Culori principale și secundare (sau "Nu sunt sigur")
- **Tonul**: Profesional, creativ, jucăuș, minimal, etc.

Aceste informații sunt stocate în memoria dumneavoastră **site_brief**, pe care agentul o va consulta în sesiunile viitoare.

### Pasul 3: Deciziile Sistemului de Design {#step-3-design-system-decisions}

Agentul vă ghidează prin selectarea token-urilor de design:

- **Tipografie**: Familia de font (serif, sans-serif, monospace) și scala de dimensiuni
- **Paleta de culori**: Culori principale, secundare, accent și neutre
- **Spațiere**: Layout-uri compacte, normale sau spațioase
- **Mișcare (Motion)**: Animații și tranziții (dacă este dorit)

### Pasul 4: Generarea Temei {#step-4-theme-generation}

Agentul Setup Assistant vă creează structura (scaffolds) pentru tema personalizată bazată pe blocuri, incluzând:

- `theme.json` care conține toate token-urile de design
- Template-uri de blocuri pentru layout-uri comune (pagină de acasă, blog, contact)
- Stiluri de blocuri personalizate care se potrivesc sistemului dumneavoastră de design
- Metadate ale temei și declarații de suport WordPress

### Pasul 5: Activarea și Verificarea {#step-5-activation-and-verification}

Tema este activată automat și veți vedea:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Apoi, puteți vizita site-ul pentru a verifica dacă tema afișează corect.

## Specificația Site-ului și Memoria site_brief {#site-specification-and-sitebrief-memory}

În timpul onboarding-ului, agentul înregistrează specificațiile site-ului dumneavoastră într-o categorie de memorie numită **site_brief**. Aceasta include:

- Scopul și obiectivele site-ului
- Audiența țintă
- Culorile și tonul brandului
- Preferințele de design
- Structura conținutului

### De ce contează site_brief {#why-sitebrief-matters}

În sesiunile viitoare, agenții consultă site_brief pentru a:

- Menține consistența designului în cazul modificărilor
- Sugera funcționalități aliniate scopului site-ului dumneavoastră
- Oferi recomandări contextuale
- Evita repetarea întrebărilor de configurare

### Vizualizarea site_brief-ului {#viewing-your-sitebrief}

Puteți cere agentului:

```
"Show me my site brief"
```

sau

```
"What do you know about my site?"
```

Agentul vă va afișa specificațiile site-ului stocate.

## Personalizarea după Onboarding {#customizing-after-onboarding}

După ce onboarding-ul Theme Builder se încheie, puteți:

### Folosi Skill-ul Estetic Design System {#use-the-design-system-aesthetics-skill}

Solicitați rafinări de design:

```
"Refine the typography to be more modern"
```

sau

```
"Adjust the color palette to be warmer"
```

**Skill-ul Estetic Design System** vă ghidează prin actualizări de design țintite.

### Editați direct theme.json {#edit-themejson-directly}

Pentru utilizatorii avansați, editați `/wp-content/themes/[theme-name]/theme.json` pentru a ajusta:

- Token-uri de culoare
- Scale-uri de tipografie
- Valorile de spațiere
- Definirile de bord și umbră

### Creați Template-uri de Bloc Personalizate {#create-custom-block-templates}

Folosiți editorul de blocuri WordPress pentru a crea template-uri personalizate pentru:

- Layout-uri de pagină de acasă
- Pagini de post blog
- Pagini de produs
- Formulare de contact

## Comparativ: Onboarding Vechi vs. Nou {#comparison-old-vs-new-onboarding}

| Funcționalitate | Site Builder (Vechi) | Theme Builder (Nou) |
|---------|----------------------|-------------------|
| Metoda de configurare | Formular bazat pe wizard | Conversație ghidată de agent |
| Generarea temei | Template-uri limitate | Structură personalizabilă (scaffolding) |
| Token-uri de design | Introducere manuală | Decizii ghidate |
| Flexibilitate | Opțiuni fixe | Personalizabilă |
| Actualizări viitoare | Nu sunt referențate | Stocate în site_brief |

## Depanșare {#troubleshooting}

**Fluxul de onboarding nu s-a finalizat**
- Reporniți fluxul: "Start the Theme Builder onboarding"
- Verificați că instalarea WordPress este actualizată
- Asigurați-vă că agentul Setup Assistant este activat

**site_brief-ul meu nu este folosit**
- Confirmați că agentul are acces la memorie
- Cereți agentului să "recall my site brief"
- Verificați că memoria este activată în setările dumneavoastră

**Tema generată nu se potrivește preferințelor mele**
- Folosiți Skill-ul Estetic Design System pentru a o rafina
- Cereți agentului să "regenerate the theme with [specific changes]"
- Editați direct theme.json pentru un control precis

## Pași Următori {#next-steps}

După finalizarea onboarding-ului Theme Builder:

1. **Verificați site-ul**: Vizitați site-ul pentru a vedea tema nouă
2. **Rafinați designul**: Folosiți Skill-ul Estetic Design System pentru ajustări
3. **Adăugați conținut**: Începeți să construiți conținutul site-ului
4. **Explorați abilitățile**: Învățați despre alte abilități ale agentului, cum ar fi scaffold-block-theme și activate-theme
