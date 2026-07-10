---
title: Tema Builder-aren introduktua flujoa
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 introduce batua **Theme Builder onboarding flow** (prozesua-erregistroa) eta gure lehen eskaintzaren artean, moduaa espezializatuta tema bat dezake duzun modu guiaatzen du. Horrek eskien Site Builder modua iragatik, agent-berri eta modu erabilgarri batekin erantzuten du.

## Zer da Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow (prozesua-erregistroa) da interactive setup wizard bat da, zein:

- Desainierazpenak (kolorrak, tipografia, layout) gau egiten du
- Iragatik sitearen iraupizazio-identitatea preferentziak hartzen du
- Bezatzera beharrezko espezializatuta custom block theme bat ematen du
- Maite jakin denean tema bat automatikoki aktibatzen du

Flowa **Setup Assistant agent** (Eskaintza Aurretarri agent) batekin erabil da, zein iragailu eta tema bat gradientean ezartzen du.

## Theme Builder Onboarding-aren Hautala {#starting-the-theme-builder-onboarding}

### Lehen Erregistroa (First-Run Setup) {#first-run-setup}

WordPress instalazio berria Superdav AI Agent lehen aldiz erabilduenean, hiru iragatik aurkitu duzu:

```
Superdav AI Agent-ra etorri!

Zer egin nahi du?
1. Tema bat dezake (Theme Builder)
2. Tema jakin bat erabil
3. Iragailua horretan ez egin

"Tema bat dezake" (Build a custom theme) iragatu behar du Theme Builder onboarding flow-ra sartzeko.
```

**"Tema bat dezake"** (Build a custom theme) aukera hautatu behar du Theme Builder onboarding flow-ra sartzeko.

### Manual Aktibazioa {#manual-activation}

Bestean ere, edinean jakin denean Theme Builder onboarding-aren lehen aldiz erabil dezake:

```
"Start the Theme Builder onboarding"
```

edo

```
"Help me create a custom theme"
```

## Onboarding-aren Iragailuak (The Onboarding Steps) {#the-onboarding-steps}

### Iragailua 1: Modua Hautzea (Mode Selection) {#step-1-mode-selection}

Setup Assistant agenta iragailu du zure preferentziaz:

```
Zer moduan egin nahi du tema bat dezake?
- Guia da (Iragailu eta sizun du)
- Handia da (Aplikazioak eragatu eta sizun du)
```

**Guia modu**a (Guided mode) gure erabiltzaile guztietatik hautatuta dago; agenta zure industria eta objetivo horiek onboatu design rekomendazioak ematen du.

### Iragailua 2: Site-aren Espezifikazioa (Site Specification) {#step-2-site-specification}

Zure site berri ezagutzeko eskatzen da:

- **Webgunea eragiketa**: E-commerce, bloga, portfolio, SaaS, eta beste.
- **Target lehenengiak**: Zer irzuk handiarenak?
- **Kolore brandaren**: Kolore nagusia eta ikuspetsa (alde "ez seguruago)

Hau informazioak **site_brief** memori-an ematen dira, zehar erabiliko dituzte.

### Irrenditua 3: Design System erabakiak {#step-3-design-system-decisions}

Agenteak design token-ekonbideak gurekin batzuk egitean induzirazten:

- **Tipografia**: Fontaren familia (serifa, sans-serifa, monospace) eta diseinua
- **Kolore paleta**: Nagusia, ikuspetsa, akentua eta neutral koloreak
- **Espazioa**: Compactu, normal edo espazio handi layout-ek

### Irrenditua 4: Theme Generazioa {#step-4-theme-generation}

Setup Assistant agenteak design token guztietan hartuta irrenditua (scaffold) egiten duzu custom block theme-a:

- Design token guztiak dituzten `theme.json`
- Komun batzuk layout-ek (homepage, blog, contact) beste template-ek
- Design systemare ondikan batzen duen custom block style-ak
- Theme metadata eta WordPress suporta deklarazioak

### Irrenditua 5: Aktibazioa eta Bidezkaegia {#step-5-activation-and-verification}

Theme-ak otomatikoki aktibatzen dira, eta hiru iragatik erabiliz piztu duzu:

```
✓ Theme-ak customa da!
  Tema-ren nabiz: [Site Nuanarekin] Tema
  Koloreak: [Nagusia] / [Ikuspetsa]
  Tipografia: [Fontaren Familia]

  Design berria ikusteko sitean jarraitu.
```

Ondore, theme-a lehenengatik erabiliz bidezkaegia daiteke ikustea.

## Site Especificazioa eta site_brief Memoria {#site-specification-and-sitebrief-memory}

Onboarding-ean, agenteak sitearen spesifikazioa **site_brief** memori kategorian hartzen duzu. Horrek barne dut:

- Site-aren irrenditua eta objetivoak
- Target lehenengiak
- Brandaren koloreak eta tonoa
- Design preferentziak
- Kontuentuaren estructura

### Site_brief-ek zer eskerrak? {#why-sitebrief-matters}

Ondorekin, agenteak site_brief-era erabiliz:

### Designa zeenezarearen daiteko {#viewing-your-sitebrief}

*   Aldakileetan diseinu batzuk onartu behar duzu.
*   Site-aren objektuarekin batzuk jatorbatzen menn dizkio.
*   Kontestu-erakundea onartzeko emateak egin dezakezu.
*   Setup gailaupena ez duzu iradokizun berriz.

### Site-aren txosten zehaztea ikusteko {#customizing-after-onboarding}

Agenteari gure site-aren txosten ezagututako informazioa galduria:

```
"Meni site-aren txosten erakusten"
```

noki, edo

```
"Meni site-aren zer jakin duzu?"
```

Agentiaren daiteko site-aren zehaztea emateko.

## Onboardingaren ondoren diseinatu {#use-the-design-system-aesthetics-skill}

Theme Builder onboardinga amaitu ondoren, hauek egin dezakezu:

### Design System Aesthetics skill-a erabiliz {#edit-themejson-directly}

Diseinuak onartzeko eskatzen dituztezu:

```
"Tipografia modernizatzeko onartu"
```

noki, edo

```
"Kolorearen paleta gurean gogoratzen du"
```

**Design System Aesthetics skill-a** daiteke ditu design update-ak targetatuta erabiliz.

### theme.json-a direktu egiten {#create-custom-block-templates}

Advanced user-ek, `/wp-content/themes/[theme-name]/theme.json` editu dezake luzean:

*   Kolorearen tokenak
*   Tipografia skala-ak
*   Espazioen (spacing) jarduerak
*   Bordes eta sombra definizioak

### Custom Block Templates sortzeko {#comparison-old-vs-new-onboarding}

WordPress block editora erabiliz sortu egin dezakezu custom templates hauek bitartean:

*   Homepage layout-ek
*   Blog post mga-gehiak
*   Product pages
*   Contact forms

## Hautala: Begoera vs. Berria Onboardinga {#troubleshooting}

| Karakteristika | Site Builder (Begoera) | Theme Builder (Berria) |
| :--- | :--- | :--- |
| Setup metodo | Wizard-baztertuta forma | Agente-goidatutako jola |
| Tema sortzea | Template batzuk besterik | Custom scaffolding |
| Design tokens | Manual erregistroa | Goidatutako erabakiak |
| Flexibilidad | Opsio batzuk fijoak | Erabiltzen dituen |
| Update-ak iraupiztzeko | Ez dago referentzia | site_briefan ematen daiteke |

## Problema ezarpenak (Troubleshooting) {#next-steps}

**Onboarding flowa amaitu ez du**
*   Flowa berriro aurkitu: "Start the Theme Builder onboarding"
*   WordPress instalazioa update-duna jakinaraztezu
*   Setup Assistant agente-a aktiboa daiko jabanak

**Nire `site_brief` ez da erabiltzen**
- Ezin daiko agenteak memoria erabiliz jakin nahi du.
- Agenteari "nire site briefa almarri" (recall my site brief) esatu.
- Memorya osoan erabiliz jakinarazten (enabled in your settings).

**Erabiltzailearen tema ez du batzu nahi duten aukerakarekin**
- Design System Aesthetics skilla erabiliz itxura dauden modifikatzeko.
- Agenteari "[bestelako aukerakarekin] tema berri generatu" (regenerate the theme with [specific changes]) esatu.
- Tema.json-era direktu zuzenean kontrola egiteko.

## Irudiak (Next Steps)

Theme Builder-ren irudietan:

1. **Sitea jabatuz jakinarazten**: Erri lehiakarekin tema berria ikusteko sitean jarraitu.
2. **Disainioa modifikatu**: Ajustamenduak egin dezake Design System Aesthetics skilla erabiliz.
3. **Kontenua gehitu**: Sitearen kontentua ezarritzea hasten duzu.
4. **Aplikazioak ikustu**: scaffold-block-theme eta activate-theme bezala beste agente aplikazioak ezagutatu.
