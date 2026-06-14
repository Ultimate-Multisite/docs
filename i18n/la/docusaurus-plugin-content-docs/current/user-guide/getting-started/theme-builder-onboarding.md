---
title: Fluxus Onboarding Thematicus
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxus Onboarding Flow del Theme Builder

Superdav AI Agent v1.12.0 introduce un **fluxus onboarding flow** per il Theme Builder che ti aiuta a creare un tema a blocchi personalizzato durante la tua configurazione iniziale. Questo sostituisce il vecchio modalità Site Builder con un approccio più flessibile, assistito dall'agente.

## Cos'è il Fluxus Onboarding Flow?

Il fluxus onboarding flow è un wizard di configurazione interattivo che:

- Ti guida attraverso le decisioni di design (colori, tipografia, layout)
- Cattura le tue preferenze sull'identità visiva del tuo sito
- Genera un tema a blocchi personalizzato su misura per le tue esigenze
- Attiva automaticamente il tema una volta completato

Il flusso è alimentato dall'**Setup Assistant agent**, che pone domande chiarificatrici e costruisce il tuo tema in modo incrementale.

## Avviare il Fluxus Onboarding

### Configurazione Iniziale (First-Run Setup)

Quando lanci per la prima volta Superdav AI Agent su una nuova installazione di WordPress, vedrai:

```
Benvenuto in Superdav AI Agent!

Cosa vorresti fare?
1. Costruire un tema personalizzato (Theme Builder)
2. Usare un tema esistente
3. Saltare la configurazione per ora
```

Seleziona **"Costruisci un tema personalizzato"** per entrare nel fluxus onboarding del Theme Builder.

### Attivazione Manuale

Puoi anche iniziare il fluxus onboarding del Theme Builder in qualsiasi momento richiedendo:

```
"Avvia il fluxus onboarding del Theme Builder"
```

o

```
"Aiutami a creare un tema personalizzato"
```

## I Passaggi dell'Onboarding

### Passo 1: Selezione della Modalità (Mode Selection)

L'Setup Assistant agent ti chiede la tua preferenza:

```
Come vorresti costruire il tuo tema?
- Guidato (Ti farò domande e lo costruirò per te)
- Pratico (Ti mostrerò le opzioni e tu decidi)
```

La **modalità guidata** è consigliata per la maggior parte degli utenti; l'agente fa raccomandazioni di design basate sul tuo settore e sui tuoi obiettivi.

### Passo 2: Specifiche del Sito (Site Specification)

Ti verrà chiesto informazioni sul tuo sito:

- **Scopus situm**: E-commerce, blog, portfolio, SaaS, etc.
- **Audientis target**: Qui sunt visitores vester?
- **Colores brand**: Colores primarii et secundarii (vel "non sum sic scio")
- **Tonalitas**: Professionalis, creativus, ludicus, minimus, etc.

Haec informația est in memoria tua **site_brief**, quam agentia referunt in sessionibus futura.

### Gradus 3: Decisiones Systematis Design

Agentia te ducit per eligendos design token:

- **Typographia**: Familia fontis (serif, sans-serif, monospace) et scala magnitudinis
- **Paletă colorum**: Colores primarii, secundarii, accentui et neutri
- **Spatium**: Layout compactus, ordinarius vel spaciousus
- **Motio**: Animationes et transitiones (si desiderabant)

### Gradus 4: Generatio Thematis

Agentia Auxilii Setup structurat thematum tuum cum:

- `theme.json` qui omnes design tokens tuos continet
- Template blocorum pro layoutibus commonibus (homepage, blog, contactus)
- Stylus blocorum customis concordans cum systemate design tua
- Metadata thematis et declarationes supporti WordPress

### Gradus 5: Activatio et Verificatio

Thema est automatico activum, et videris:

```
✓ Thematum tuum customis nunc est in opere!
  Nomen Thematis: Thema [Nomen Situi]
  Colores: [Primarius] / [Secundarius]
  Typographia: [Familia Fontis]

  Visita situm tuum ut novam dispositionem vides.
```

Postea potes visitare situm tuum ut verifiques quod thema recte ostenditur.

## Specifica Situi et Memoria site_brief

In introductione, agentia capturat specification situi in categoria memoria **site_brief**. Hoc includit:

- Scopus situi et obiectiva
- Audientis target
- Colores brand et tonalitas
- Preferentias design
- Structuram contentus

### Quid site_brief Significat

In sessionibus futura, agentia referunt tuum site_brief ut:

### Manutent consistency designis omni mutationibus
### Suggeras features quae ad finem tuum sita sunt
### Proferas recommendationes contextu cognoscendas
### Evade repetendum quaestionum configurationis

## Spectare brevietatem sita (site_brief)

Agentem petere potes:

```
"Mendac meam brevietatem sita"
```

vel

```
"Quid scis de sita mea?"
```

Agentus tuam memoriam specificationis sitae exibet.

## Customizare post onboarding

Post completio onboarding Theme Builder, potes:

### Utas habilitatem aestheticae systematis design (Design System Aesthetics skill)

Petas refinementes designitatis:

```
"Typographiam ad modernitatem melius perfice"
```

vel

```
"Palet colorum ad calorem melius ajusta"
```

**Habilitas aestheticae systematis design** te per actualitates designitatis dirigit.

### Edit theme.json directum

Ad usum expertorum, edit `/wp-content/themes/[theme-name]/theme.json` ut adjustas:

- Tokens colorum
- Scalas typographicae
- Valores interspatiorum
- Definitiones bordi et umbrae (shadow)

### Crea templates blocus customes

Usa editor bloc WordPress ad creare templates customes pro:

- Layouts hominisque paginae index
- Paginas postuum in blogu
- Paginas productorum
- Formulis contactus

## Comparatio: Novum vs. Vetere Onboarding

| Caracter | Site Builder (Vetere) | Theme Builder (Novum) |
|---------|----------------------|-------------------|
| Methodus setup | Formus per wizard | Conversatio guidata agentis |
| Generatio theme | Templates limitati | Scaffolding custom |
| Tokens designi | Inscriptio manualis | Decisiones dirigatae |
| Flexibilitas | Optiones fixae | Customizabilis |
| Update futura | Non refertatur | In site_brief conservatur |

## Solutio problematum (Troubleshooting)

**Fluxus onboarding non completus est**
- Redi fluxum: "Inicia onboarding Theme Builder"
- Verifica quod installation WordPress tua est ad tempus
- Verificas quod agentus Setup Assistant activus est

**Mea sit_brief me non usum est**
- Confirmare si agentem accessus ad memoriam habet
- Petere agenum "me memoriam recovere"
- Verificare si memoria in statibus tuis activata est

**Tema generatum non concordat cum preferentibus meis**
- Ut Skill Design System Aesthetics utrumque refinat
- Petere agenum "temam regenerare cum [specific changes]"
- Editare theme.json directum ad control precisum

## Prosequenda Gradus

Post completum onboarding Theme Builder:

1. **Verificare situm tuum**: Visita situm tuum ut novum themam vides
2. **Refinare designem**: Ut Skill Design System Aesthetics ad adjustmentes usus
3. **Adde contentum**: Inceptare constructionem contenti situi tui
4. **Explorare potestates**: Discendere de aliis potestatibus agentium ut scaffold-block-theme et activate-theme
