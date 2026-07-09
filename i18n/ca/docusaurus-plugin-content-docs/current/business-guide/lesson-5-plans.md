---
title: 'Liçona 5: Dissenyar els teus plans'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Aula 5: Disseny dels teus plans {#lesson-5-designing-your-plans}

Els teus nivells de plans no són només nivells de preu; són un reflex de com operen realment els teus clients de niș. En aquesta aula, dissenyaràs nivells de producte que es puguin adaptar a les necessitats reals de les empreses de fitness en diferents etapes.

## On acab vam {#where-we-left-off}

FitSite té tres templates preparats (Studio Essential, Gym Pro, Fitness Chain). Ara creem els plans que determinen a què tenen accés els clients i què haurà de pagar.

## Pensar en segments de clients {#thinking-in-customer-segments}

L'error que la majoria de la gent fa és dissenyar plans basats en funcions tècniques (emmagatzematge, banda passava, nombre de pàgines). Els teus clients de niș no pensen en aquests termes. Un propietari de gimnàsio pensa en el que necessita per gestionar el seu negoci.

Per als estudis de fitness, hi ha tres segments naturals:

| Segment | Qui són | El que necessiten |
|---------|-------------|----------------|
| **Entrenadors sol·licituds / petits estudis** | 1-3 treballadors, una ubicació, acabant de començar | Un lloc web professional, informació de classes, formulari de contacte |
| **Gimnàsios establerts** | 5-20 treballadors, una ubicació, en creixement | Tot el que hi ha abans més reserva, blog, galeria, domini personalitzat |
| **Cires de fitness** | Múltiples ubicacions, marca establerta | Tot el que hi ha abans més multi-site, pàgines d'ubicació, directori de treballadors |

Els teus plans han de corresponre a aquests segments, no a feines arbitraries de funcions.

## Creació dels plans FitSite {#creating-the-fitsite-plans}

Navega a **Ultimate Multisite > Products > Add Product** per a cada plan.

### Plan 1: FitSite Starter -- $49/mes {#plan-1-fitsite-starter----49month}

**Objectiu**: Entrenadors sol·licituds i petits estudis

**Pesta Description**:
- Nom: FitSite Starter
- Descripció: "Tot el que necessita un entrenador personal o un petit estudi per veure professional en línia."

**Pesta General**:
- Tipus de producte: Plan
- Rol del client: Administrator

**Pesta Site Templates**:
- Permetre templates de lloc: Enabled
- Templates disponibles: Només Studio Essential

**Limitacions**:
- Llocs: 1
- Espai de disc: 1 GB
- Domini personalitzat: Disabled (utilitza `studioname.fitsite.com`)

**Pesta Plugins**:
- Plugin de formulari de contacte: Force Activate
- Plugin de SEO: Force Activate
- Plugin de reserva: Not Available (incentiu d'actualització)

**Pesta Themes**:
- El teu tema seleccionat: Force Activate
- Tots els altres temes: Hidden

### Plan 2: FitSite Growth -- $99/mes {#plan-2-fitsite-growth----99month}

**Objectiu**: Gimnàsios establerts d'una sola ubicació

**Pesta Description**:
- Nom: FitSite Growth
- Descripció: "Per a gimnàsios establerts que estan preparats per fer creixement de la seva presència en línia i atraure nous membres."

**Pesta Site Templates**:
- Templates disponibles: Studio Essential i Gym Pro

**Limitacions**:
- Llocs: 1
- Espai de disc: 5 GB
- Domini personalitzat: Enabled

**Pesta Plugins**:
- Tot el que hi ha a Starter, més:
- Plugin de reserva: Force Activate
- Plugin de galeria: Force Activate
- Funcionalitat de blog: Available

**Pesta Up & Downgrades**:
- Grup de plans: FitSite Plans
- Ordre de producte: 2

### Plan 3: FitSite Pro -- $199/mes {#plan-3-fitsite-pro----199month}

**Objectiu**: Cires de fitness amb múltiples ubicacions

**Pesta Description**:
- Nom: FitSite Pro
- Descripció: "La plataforma completa per a marques de fitness amb múltiples ubicacions."

**Pesta Site Templates**:
- Templates disponibles: Els tres templates

**Limitacions**:
- Llocs: 5 (un per ubicació)
- Espai de disc: 20 GB
- Domini personalitzat: Enabled

**Pesta Plugins**:
- Tot el que hi ha a Growth, més:
- Tots els plugins premium: Force Activate

**Pesta Up & Downgrades**:
- Grup de plans: FitSite Plans
- Ordre de producte: 3

## Configuració del grup de plans {#setting-up-the-plan-group}

El grup de plans assegura que els clients només puguin actualitzar o degradar dins de la família de plans FitSite. A la pestanya **Up & Downgrades** de cada plan:

1. Assigna el **Plan Group** a "FitSite Plans" per als tres plans.
2. Assigna el **Product Order** a 1 (Starter), 2 (Growth), 3 (Pro).

Això crea una ruta d'actualització clara: Starter → Growth → Pro.

## Afegir *Order Bumps* {#adding-order-bumps}

Els *order bumps* són productes addicionals que es ofereixen durant el pagament. Per FitSite, considera:

- **Extra Storage Pack** ($19/mes) -- 5 GB addicionals d'espai de disc
- **Priority Support** ($29/mes) -- temps de resposta més ràpids
- **Additional Site** ($39/mes) -- per a clients que necessiten més llocs dels que permet el seu plan

Crea aquests com productes de tipus **Package** a Ultimate Multisite i associa-los als plans corresponents.

## Per què funciona aquesta estructura {#why-this-structure-works}

- **Starter** elimina barreres d'entrada: preu baix, oferta simple, posa els entrenadors en línia ràpidament.
- **Growth** afegeix les funcions que els gimnàsios de fet demanen: reserva, galeries, dominis personalitzats.
- **Pro** serveix al segment de valor alt que necessita suport multi-ubicació.
- **Order bumps** permeten als clients personalitzar sense complicar els plans principals.
- **Ruta d'actualització clara** significa que els clients creixen amb tu en lloc de marxar.

## La xarxa FitSite fins ara {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## El que vam construir en aquesta aula {#what-we-built-this-lesson}

- **Tres nivells de plans** associats a segments reals de negocis de fitness.
- **Control de funcions** utilitzant els controls de plugins i templates d'Ultimate Multisite.
- **Un grup de plans** amb una ruta d'actualització clara.
- **Productes *order bump*** per a rendes addicionals.
- **Una estructura de preus** basada en el valor per al client, no en les especificacions tècniques.

---

**Pròximament:** [Aula 6: L'Experiència d'Alta](lesson-6-checkout) -- construïm un flux de pagament que converteixi propietaris d'estudis de fitness en clients pagadors.
