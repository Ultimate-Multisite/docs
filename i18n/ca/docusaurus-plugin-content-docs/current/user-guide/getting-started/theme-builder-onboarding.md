---
title: Flot de benvinguda del Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flux de Benvinguda del Constructor de Temes

Superdav AI Agent v1.12.0 presenta un **flux de benvinguda del Constructor de Temes** guiat que et ajuda a crear un tema de blocs personalitzat durant la teva configuració inicial. Això substitueix el mode Site Builder (Constructor de Lloc) anterior per un enfoque més flexible i assistit per agent.

## Què és el Flux de Benvinguda del Constructor de Temes?

El flux de benvinguda del Constructor de Temes és un assistent de configuració interactiu que:

- Et guia a través de les decisions de disseny (colors, tipografia, disposició)
- Captura les preferències d'identitat visual del teu lloc web
- Genera un tema de blocs personalitzat adaptat a les teves necessitats
- Activa el tema automàticament quan es completa

El flux està alimentat per l'**agent Setup Assistant**, que fa preguntes aclaridoras i construeix el teu tema incrementalment.

## Com començar el Constructor de Temes

### Configuració inicial

Quan llances Superdav AI Agent per primera vegada en una nova instal·lació de WordPress, veuràs:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Selecciona **"Build a custom theme"** (Construir un tema personalitzat) per entrar al flux de benvinguda del Constructor de Temes.

### Activació manual

També pots començar el flux de benvinguda del Constructor de Temes en qualsevol moment demanant:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## Els Passos de Benvinguda

### Pas 1: Selecció de Mode

L'agent Setup Assistant et pregunta sobre la teva preferència:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

El **mode guiat** és recomanat per a la majoria dels usuaris; l'agent fa recomanacions de disseny basades en la teva indústria i els teus objectius.

### Pas 2: Especificació del Lloc Web

Et preguntaran sobre el teu lloc web:

- **Objectiu del lloc**: Comerç electrònic, blog, portefoli, SaaS, etc.
- **Públic objectiu**: Qui són els teus visitadors?
- **Colors de marca**: Colors primaris i secundaris (o "No ho sé")
- **Tonalitat**: Professional, creatiu, divertit, mínim, etc.

Aquesta informació es guarda a la teva memòria **site_brief**, que els agents consulten en sessions futures.

### Pas 3: Decisions del Sistema de Disseny

L'agent et guia a través de la selecció de *tokens* de disseny:

- **Tipografia**: Família de fonts (serif, sans-serif, monospace) i escala de mida
- **Paleta de colors**: Colors primaris, secundaris, d'accent i neutres
- **Espai**: Disposicions compactes, normals o amplses
- **Moviment**: Animacions i transicions (si es desitja)

### Pas 4: Generació del Tema

L'agent Setup Assistant prepara el teu tema de blocs personalitzat amb:

- `theme.json` que conté tots els teus *tokens* de disseny
- Plantilles de blocs per a disposicions comunes (pàgina inicial, blog, contacte)
- Estils de blocs personalitzats que coincideixen amb el teu sistema de disseny
- Metadades del tema i declaracions de suport de WordPress

### Pas 5: Activació i Verificació

El tema s'activa automàticament i veuràs:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Després pots visitar el teu lloc web per verificar que el tema s'està mostrant correctament.

## Especificació del Lloc Web i Memòria site_brief

Durant el benvingut, l'agent captura la especificació del teu lloc web en una categoria de memòria **site_brief**. Això inclou:

- Objectiu i objectius del lloc web
- Públic objectiu
- Colors i tonalitat de marca
- Preferències de disseny
- Estructura de contingut

### Per què és important site_brief

En sessions futures, els agents consulten el teu site_brief per:

- Mantenre la consistència del disseny durant els canvis
- Suggerir funcions alineades amb l'objectiu del teu lloc web
- Proporcionar recomanacions amb context
- Evitar repetir preguntes de configuració

### Veure el teu site_brief

Pots demanar a l'agent:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

L'agent mostrarà la especificació del teu lloc web emmagatzemada.

## Personalització després del benvingut

Després que el Constructor de Temes completi el benvingut, pots:

### Utilitzar la Habilitat d'Estètica del Sistema de Disseny

Demanar refinements de disseny:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

La **abilitat d'Estètica del Sistema de Disseny** et guia a través de petites actualitzacions de disseny.

### Editar theme.json Directament

Per a usuaris avançats, edita `/wp-content/themes/[theme-name]/theme.json` per ajustar:

- Tokens de color
- Escales de tipografia
- Valors d'espai
- Definicions de bord i ombra

### Crear Plantilles de Blocs Personalitzades

Utilitza l'editor de blocs de WordPress per crear plantilles personalitzades per a:

- Disposicions de pàgina inicial
- Pàgines d'articles de blog
- Pàgines de producte
- Formularis de contacte

## Comparativa: Anterior vs. Nou Benvingut

| Funcionalitat | Site Builder (Antic) | Theme Builder (Nou) |
|---------|----------------------|-------------------|
| Mètode de configuració | Formaritzat amb assistència | Conversació guiada per agent |
| Generació de tema | Plantilles limitades | Estructura personalitzada |
| Tokens de disseny | Entrada manual | Decisions guiades |
| Flexibilitat | Opcions fixades | Personalitzable |
| Actualitzacions futures | No es refereixen | Emmagatzemades en site_brief |

## Solucionar Problemes

**El flux de benvinguda no es va completar**
- Reinicia el flux: "Start the Theme Builder onboarding"
- Comprova que la teva instal·lació de WordPress està actualitzada
- Verifica que l'agent Setup Assistant està habilitat

**El meu site_brief no s'està utilitzant**
- Confirma que l'agent té accés a la memòria
- Pedeu a l'agent que "recall my site brief" (recordi el meu site_brief)
- Comprova que la memòria està habilitada a la teva configuració

**El tema generat no coincideix amb les meves preferències**
- Utilitza l'abilitat d'Estètica del Sistema de Disseny per afinar-lo
- Pedeu a l'agent que "regenerate the theme with [specific changes]" (regeneri el tema amb [canvis específics])
- Edita theme.json directament per un control precís

## Pròxims Passos

Després de completar el benvingut del Constructor de Temes:

1. **Verifica el teu lloc**: Visita el teu lloc web per veure el nou tema
2. **Afina el disseny**: Utilitza l'abilitat d'Estètica del Sistema de Disseny per ajustaments
3. **Afegeix contingut**: Comença a construir el contingut del teu lloc web
4. **Explora habilitats**: Aprendeu sobre altres habilitats de l'agent com a scaffold-block-theme i activate-theme
