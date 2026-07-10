---
title: Habilitats conscients del tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Habilitats conscients del tema {#theme-aware-skills}

Superdav AI Agent v1.10.0 incorpora quatre noves habilitats integrades conscients del tema que s'adapten automàticament al tema de WordPress que teniu actiu. Aquestes habilitats ofereixen guies i capacitats especialitzades adaptades a l'arquitectura i les funcionalitats del vostre tema.

## Què són les habilitats conscients del tema? {#what-are-theme-aware-skills}

Les habilitats conscients del tema són bases de coneixement i equips d'eines preconfigurats que l'assistència AI selecciona automàticament basant-se en el tema de WordPress que teniu actiu al vostre lloc web. Quan canvieu de tema, les habilitats disponibles de l'assistència s'actualitzen automàticament, sense necessitat de configuració manual.

Cada habilitat inclou:

- **Documentació específica del tema** — Guia sobre com utilitzar i personalitzar el tema
- **Referències de blocs i patrons** — Blocs, patrons i opcions de disseny disponibles
- **Exemples de personalització** — Fragments de codi i patrons de configuració per a tasques comunes
- **Mehores pràctiques** — Recomanacions per a l'arquitectura i el flux de treball del tema

## Habilitats conscients del tema disponibles {#available-theme-aware-skills}

### Temes de blocs (Block Themes) {#block-themes}

**S'aplica a:** Temes que utilitzen l'arquitectura basada en blocs de WordPress (Full Site Editing).

L'habilitat Block Themes proporciona guies sobre:

- Crear i editar templates utilitzant l'editor de blocs
- Treballar amb patrons de blocs i blocs reutilitzables
- Personalitzar els estils globals i les configuracions de theme.json
- Utilitzar blocs i variacions de tema
- Crear patrons de blocs personalitzats per al vostre lloc

**S'activa automàticament quan:** El vostre tema actiu és un tema de blocs (s'hi suporta la funcionalitat `block-templates`).

### Temes clàssics (Classic Themes) {#classic-themes}

**S'aplica a:** Temes tradicionals de WordPress que utilitzen templates PHP i l'editor clàssic.

L'habilitat Classic Themes proporciona guies sobre:

- Treballar amb fitxers de templates PHP i hooks
- Personalitzar l'aparença del tema mitjançant el Customizer
- Utilitzar àrees de widgets i sidebars
- Modificar CSS i desenvolupament de temes fills (child theme)
- Entendre la jerarquia del tema i les etiquetes de template

**S'activa automàticament quan:** El vostre tema actiu és un tema clàssic (no de blocs).

### Kadence Blocks {#kadence-blocks}

**S'aplica a:** Llocs que utilitzen el plugin Kadence Blocks per a un disseny avançat basat en blocs.

L'habilitat Kadence Blocks proporciona guies sobre:

- Utilitzar la biblioteca avançada de blocs de Kadence (Hero, Testimonials, Pricing, etc.)
- Configurar les configuracions dels blocs de Kadence i les opcions de responsivitat
- Crear dispositius personalitzats amb els blocs de cuadrícula i contenidor de Kadence
- Integrar els blocs de Kadence amb el vostre tema
- Aproveurar el sistema de disseny i els presets de Kadence

**S'activa automàticament quan:** El plugin Kadence Blocks està actiu al vostre lloc.

### Kadence Theme {#kadence-theme}

**S'aplica a:** Llocs que utilitzen el tema Kadence per a disseny i personalització basats en blocs.

L'habilitat Kadence Theme proporciona guies sobre:

- Personalitzar el tema Kadence mitjançant estils globals i theme.json
- Utilitzar els patrons i templates integrats de Kadence
- Configurar les configuracions i opcions del tema Kadence
- Crear dissenys personalitzats amb el sistema de disseny de Kadence
- Integrar Kadence amb plugins i eines populars

**S'activa automàticament quan:** El tema Kadence és el vostre tema actiu.

## Com es seleccionen les habilitats {#how-skills-are-selected}

L'assistència detecta automàticament el vostre tema actiu i els plugins instal·lats a cada missatge. Si hi ha una habilitat conscient del tema que coincideixi, es carrega automàticament al context de l'assistència. No necessiteu habilitar o canviar habilitats manualment.

### Múltiples habilitats {#multiple-skills}

Si diverses habilitats s'apliquen al vostre lloc (per exemple, si teniu actius tant Kadence Blocks com Kadence Theme), l'assistència té accés a totes les habilitats aplicables i pot referenciar guies de cada una.

### Canvi de temes {#switching-themes}

Quan canvieu el vostre tema actiu, les habilitats disponibles de l'assistència s'actualitzen automàticament al missatge següent. Per exemple:

1. Estàn utilitzant un tema de blocs amb l'habilitat **Block Themes** activa.
2. Canvieu a un tema clàssic.
3. Al vostre missatge següent, l'habilitat **Classic Themes** es carrega automàticament i l'habilitat **Block Themes** ja no està disponible.

## Utilitzar habilitats conscients del tema {#using-theme-aware-skills}

Per aprofitar una habilitat conscient del tema, només descriuu el que voleu fer a la interfície de xat. L'assistència referenciarà la guia de l'habilitat adequada automàticament.

### Prompts d'exemple {#example-prompts}

**Per a Block Themes:**
> "Crea una secció hero amb una imatge de fons i text centrat utilitzant patrons de blocs."

**Per a Classic Themes:**
> "Afegeix una àrea de widgets personalitzada a la sidebar utilitzant un tema fill (child theme)."

**Per a Kadence Blocks:**
> "Crea una secció de testimonis utilitzant el bloc de Testimonials de Kadence."

**Per a Kadence Theme:**
> "Personalitza la disposició del capçal i l'estil del menú de navegació."

L'assistència proporcionarà guies i exemples de codi específics del tema, adaptats al vostre tema i plugins actius.

:::note
Les habilitats conscients del tema estan disponibles automàticament en Superdav AI Agent v1.10.0 i versions posteriors. No és necessària cap configuració o preparació addicional.
:::
