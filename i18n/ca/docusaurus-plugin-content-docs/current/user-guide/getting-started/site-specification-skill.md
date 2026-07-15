---
title: Habilitat de Especificació de Lloc
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Habilitat de Especificació del Lloc

L'**habilitat de Especificació del Lloc** és un enfoque estructurat per capturar els objectius, l'audiència i l'identitat de marca del teu lloc web. Aquesta informació es guareix a la teva memòria **site_brief**, a la qual els agents es refereixen durant les sessions per proporcionar una assistència consistent i contextualment adequada.

## Què és la Especificació del Lloc? {#what-is-site-specification}

La Especificació del Lloc és el procés de documentar:

- **Objectiu del lloc**: Què fa el teu lloc i per què existeix
- **Audiència objectiu**: Qui visita el teu lloc i què necessita
- **Identitat de marca**: Els teus colors, to i estil visual
- **Objectius de negoci**: Com es veu el èxit per al teu lloc
- **Estructura de contingut**: Com està organitzat el teu lloc

Aquesta especificació es converteix en el teu **site_brief**, una memòria persistent que els agents utilitzen per entendre el context del teu lloc.

## Per què utilitzar la Especificació del Lloc? {#why-use-site-specification}

### Consistència entre sessions {#consistency-across-sessions}

Sense site_brief, hauràs de re-explicar l'objectiu del teu lloc cada vegada que comencis una nova sessió. Amb ell, els agents entenen immediatament:

- Els objectius i l'audiència del teu lloc
- Els colors i el to de la teva marca
- La teva estructura de contingut
- Els teus objectius de negoci

### Recomanacions millors {#better-recommendations}

Els agents utilitzen el teu site_brief per:

- Suggerir funcions alineades amb l'objectiu del teu lloc
- Recomanar estructures de contingut que es facin cas dels teus objectius
- Proposar dissenys consistents amb la teva marca
- Evitar suggerir funcions incompatibles

### Incorporació més ràpida {#faster-onboarding}

Els agents nous (o els agents en sessions noves) poden quedar-se a nivell ràpidment llegint el teu site_brief en lloc de fer preguntes aclaridories.

## Iniciant la Especificació del Lloc {#initiating-site-specification}

### Durant l'incorporació de Theme Builder {#during-theme-builder-onboarding}

L'habilitat de Especificació del Lloc s'inicia automàticament durant el **flux d'incorporació de Theme Builder**. L'agent Setup Assistant fa preguntes i construeix el teu site_brief.

### Iniciació manual {#manual-initiation}

Pots començar la Especificació del Lloc en qualsevol moment:

```
"Definim la especificació del meu lloc"
```

o

```
"Ajuda'm a crear un site brief"
```

## El Procés de Especificació del Lloc {#the-site-specification-process}

### Pas 1: Objectiu del Lloc {#step-1-site-purpose}

L'agent pregunta:

```
Quin és l'objectiu principal del teu lloc?
- Botiga de comerç electrònic
- Blog o lloc de contingut
- Portefol·li o mostra
- Aplicació SaaS
- Comunitat o fòrum
- Altres: [descreu]
```

Pots seleccionar una categoria o descriure el teu propi objectiu.

### Pas 2: Audiència objectiu {#step-2-target-audience}

```
Qui és la teva audiència principal?
- Consumadors / públi general
- Professionals empresarials
- Desenvolupadors / usuaris tècnics
- Estudiants / educadors
- Altres: [descreu]

Quals són les seves necessitats principals?
```

### Pas 3: Identitat de marca {#step-3-brand-identity}

```
Quals són els colors de la teva marca?
- Color principal: [selector de colors o codi hex]
- Color secundari: [selector de colors o codi hex]
- Color d'accent: [opcional]

Com descriuries el to de la teva marca?
- Professional / corporatiu
- Creatiu / artístic
- Jocut / informal
- Mínim / modern
- Acogordador / amigable
```

### Pas 4: Objectius de negoci {#step-4-business-goals}

```
Com es veu el èxit per al teu lloc?
- Generar *leads*
- Vendre productes
- Crear comunitat
- Compartir coneixement
- Estableixer autoritat
- Altres: [descreu]

Quin és el teu mètrica principal?
- Revenue
- Interacció d'usuàri
- Alcance de contingut
- Conversions
- Altres
```

### Pas 5: Estructura de contingut {#step-5-content-structure}

```
Com està organitzat el teu contingut?
- Plat (tot el contingut al mateix nivell)
- Jeràrquic (categories i subcategories)
- Cronològic (estil de blog)
- Basat en productes (catàleg)
- Altres: [descreu]

Quins tipus de contingut utilitzes?
- Articles de blog
- Paques de producte
- Estudis de cas
- Documentació
- Vídeos
- Altres
```

## La teva memòria site_brief {#your-sitebrief-memory}

Després de completar la Especificació del Lloc, la teva informació es guareix com a **site_brief** a la memòria del teu agent. Aquest és un registre estructurat que conté:

```json
{
  "site_purpose": "Botiga de comerç electrònic de joies artesanes",
  "target_audience": "Femmes d'edat 25-45, interessades en la moda sostenible",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Acogordador, artesanal, sostenible",
  "business_goals": ["Generar vendes", "Crear fidelitat de marca"],
  "primary_metric": "Revenue",
  "content_structure": "Catàleg de productes amb blog",
  "content_types": ["Paques de producte", "Articles de blog", "Històries de clients"]
}
```

## Veure i Actualitzar el teu site_brief {#viewing-and-updating-your-sitebrief}

### Veure el teu site_brief {#view-your-sitebrief}

Pregunta a l'agent:

```
"Mostra'm el meu site brief"
```

o

```
"Què saps del meu lloc?"
```

L'agent mostrarà la teva especificació guaradada.

### Actualitzar el teu site_brief {#update-your-sitebrief}

Si el teu lloc evoluciona, pots actualitzar-lo:

```
"Actualitza el meu site brief: ara ens dirigim a clients B2B"
```

o

```
"Actualitza la meva especificació del lloc"
```

Això reexecutarà l'habilitat de Especificació del Lloc utilitzant la teva informació existent com a punt de partida.

## Com utilitzen els Agents el site_brief {#how-agents-use-sitebrief}

### Recomanacions de disseny {#design-recommendations}

Quan demanes canvis de disseny, els agents es refereixen al teu site_brief:

```
Tu: "Redesigne la meva pàgina inicial"
Agent: "Basat en el teu site brief, et dirigeixes a dones d'edat 25-45
amb un to acogordador i artesanal. Crearé un disseny que emfatitzi
les teves joies artesanes i els valors sostenibles."
```

### Suggeriments de funcions {#feature-suggestions}

Els agents suggereixen funcions alineades amb els teus objectius:

```
Tu: "¿Quines funcions hauria de-hi afegir?"
Agent: "Per a una botiga de comerç electrònic centrada en la fidelitat del client,
et recomanaria: programa de fidelitat, ressenyes de clients, newsletter per correu electrònic
i recomanacions de productes."
```

### Estructura de contingut {#content-structure}

Els agents proposen l'organització del contingut basant-se en la teva estructura:

```
Tu: "¿Com hauria de-hi organitzar el meu blog?"
Agent: "Com que utilitzeu un catàleg de productes amb blog, et suggereixo
organitzar els articles per categoria de producte i crear 'guies de estil'
que mostrin múltiples productes junts."
```

## Les millors pràctiques {#best-practices}

### Ser específic {#be-specific}

En lloc de "audiència general", descriu la teva audiència real:

- ✓ "Dones d'edat 25-45, interessades en la moda sostenible"
- ✗ "Tothus"

### Actualitzar regularment {#update-regularly}

A mesura que el teu lloc evoluciona, actualitza el teu site_brief:

- Quan et canvia el focus cap a una nova audiència
- Quan afegeu noves línies de producte
- Quan canvia l'identitat de marca
- Quan canvien els objectius de negoci

### Utitzar terminologia consistent {#use-consistent-terminology}

Utitza els mateixos termes durant les sessions:

- ✓ Di sempre "joies sostenibles" (no "joies ecològiques" i "productes verds")
- ✓ Referete's de manera consistent a la teva audiència de la mateixa manera

### Incloure context {#include-context}

Proporciona un fons que ajuti els agents a entendre les teves decisions:

- "Ens dirigim a professionals que valoren la qualitat sobre el preu"
- "La nostra audiència és tècnicament avançada i espera un disseny modern"
- "Salgim d'un projecte inicial, així que necessitem solucions eficients en costos"

## Relació amb l'incorporació de Theme Builder {#relationship-to-theme-builder-onboarding}

L'habilitat de Especificació del Lloc està integrada al **flux d'incorporació de Theme Builder**. Quan completes l'incorporació, el teu site_brief es crea automàticament amb la informació que has proporcionat.

També pots executar la Especificació del Lloc de manera independent, si ho desitges:

- Afinar la teva especificació després de la configuració inicial
- Actualitzar el teu site brief a mesura que el teu lloc evoluciona
- Crear una especificació detallada abans de començar Theme Builder

## Solucionar problemes {#troubleshooting}

**El meu site_brief no s'està utilitzant**
- Confirma que l'agent té accés a la memòria
- Pedeu a l'agent que "recordi el meu site brief"
- Comprova que la memòria estigui habilitada a les teves configuracions

**Vull començar de nou amb un site_brief nou**
- Pedeu a l'agent: "Borra el meu site brief i comença des de zero"
- Després, executa la Especificació del Lloc de nou

**L'agent fa recomanacions que no es facen cas del meu site_brief**
- Pedeu a l'agent que "revisi el meu site brief"
- Actualitza el teu site_brief si està desactualitzat
- Proporciona context addicional en les teves peticions

## Pròxims passos {#next-steps}

Després de definir la teva especificació del lloc:

1. **Utilitza Theme Builder**: Crea un tema personalitzat basat en el teu site_brief
2. **Afina el disseny**: Utitza l'habilitat Design System Aesthetics per a un treball de disseny detallat
3. **Planifica el contingut**: Pedeu als agents recomanacions de estructura de contingut
4. **Construir funcions**: Sol·licita funcions alineades amb els teus objectius de negoci
