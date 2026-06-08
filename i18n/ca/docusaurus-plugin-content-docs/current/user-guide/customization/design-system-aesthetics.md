---
title: Estètica de Sistemes de Disseny
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Habilitat d'Estètica del Sistema de Disseny

L'**habilitat d'Estètica del Sistema de Disseny** és un enfoque guiat per refinar l'identitat visual del teu lloc web. T'ajuda a prendre decisions consistents sobre tipografia, color, espai i *tokens* de moviment que definen el teu sistema de disseny.

## Què és l'Estètica del Sistema de Disseny?

L'Estètica del Sistema de Disseny és una habilitat estructurada que cobreix:

- **Tipografia**: Famílies de fonts, tamanys, pesos i interlineals
- **Color**: Paletes primàries, secundàries, d'accent i neutres
- **Espaçament**: Escales de *padding*, marge i *gap*
- **Bordes**: *Tokens* de raiol i amplitud
- **Ombres**: *Tokens* d'elevació i profunditat
- **Moviment**: Animacions i transicions

Aquestes decisions es capturen al fitxer `theme.json` del teu tema, creant un sistema visual cohesionat.

## Per què utilitzar l'Estètica del Sistema de Disseny?

### Consistència

Un sistema de disseny garanteix:

- Que tot el text utilitzi la mateixa escala tipogràfica
- Que els colors es facin servir de manera consistent a tot el teu lloc web
- Que l'espai seguiu un patró previsible
- Que les animacions es sentin unitàries

### Eficiència

En lloc de prendre decisions de disseny pàgina per pàgina, tu:

- Defines els *tokens* una sola vegada
- Els apliques a tota la pàgina
- Els actualitzes globalment canviant un valor

### Flexibilitat

Puets:

- Ajustar tot el teu sistema de disseny ràpidament
- Experimentar amb estètiques diferents
- Mantenre la consistència de la marca mentre et desenvolupes

## Activació de l'Habilitat d'Estètica del Sistema de Disseny

### Activació Manual

Pots iniciar l'habilitat en qualsevol moment:

```
"Ajuda a refinar el meu sistema de disseny"
```

o

```
"Millorem l'estètica del meu lloc web"
```

o

```
"Guia-me a través de les decisions del sistema de disseny"
```

### Suggeriments Automàtics

Els agents poden suggerir utilitzar l'habilitat quan:

- Sol·licites canvis de disseny
- Sol·licites un rediseño "modern" o "profesional"
- Desitges millorar la consistència visual
- Estàs preparant el llançament del teu lloc web

## El Procés d'Estètica del Sistema de Disseny

### Pas 1: Tipografia

L'agent pregunta sobre les teves eleccions de fonts:

```
Quin és el teu estil tipogràfic preferit?
- Serif (tradicional, elegant)
- Sans-serif (modern, net)
- Monospace (tècnic, centrat en codi)

Per a la font de titulars:
- Desitges una font de titulars distincta, o utilitzar la mateixa que el text del cos?
- Preferència: negreta, elegant, jocat, minimal?

Per a la font del cos:
- La llegibilitat és clau. Prefereixes:
  - Text més gran i amb més espai
  - Text compacte i eficient
  - Tamany estàndard
```

L'agent després defineix:

- **Font de titulars**: Font principal per a títols i titulars
- **Font del cos**: Font per a paràgrafs i text del cos
- **Font monospace**: Font per a codi i contingut tècnic
- **Escala de tamanys**: Tamanys predefinits (petit, base, gran, XL, etc.)
- **Escala de pesos**: Pesos de font (regular, metà, negreta, etc.)
- **Interlineal**: Espai entre línies per a la llegibilitat

### Pas 2: Paleta de Colors

```
Definim la teva paleta de colors.

Color primari (el color de la teva marca):
- Actual: [mostra el color existent]
- Canviar a: [selector de colors o codi hex]

Color secundari (color de suport):
- Actual: [mostra el color existent]
- Canviar a: [selector de colors o codi hex]

Color d'accent (destaquen i CTA):
- Actual: [mostra el color existent]
- Canviar a: [selector de colors o codi hex]

Paleta neutra (tons de gris per a text, bordes, fons):
- Clar: [color]
- Mitjà: [color]
- Fosc: [color]
```

L'agent crea una paleta completa incloent:

- Colors primaris, secundaris i d'accent
- Tons de gris neutres (clar, mitjà, fosc)
- Colors semàntics (èxit, advertència, error)
- Estats de *hover* i actius

### Pas 3: Espaçament

```
Quanta respiració vols?

Preferència d'escala d'espaiament:
- Compacte (dispositius tancats, eficients)
- Normal (espaiament equilibrat)
- Ampli (espai blanc generós)

Aquest ho afecta:
- El *padding* dins de botons i cartes
- Els marges entre seccions
- El *gap* entre elements de la quadrícula
```

L'agent defineix *tokens* d'espaiament:

- Unitat base (normalment 4px o 8px)
- Escala: xs, sm, md, lg, xl, 2xl
- Valors específics per a *padding*, marge, *gap*

### Pas 4: Bordes i Ombres

```
Profunditat i definició visual:

Preferència de raiol de bord:
- Afut (sense redondeig)
- Sutil (raiol petit)
- Arrounted (raiol mitjà)
- Molt arrounted (raiol gran)

Profunditat de l'ombra:
- Plat (sense ombres)
- Sutil (ombres lleugeres)
- Pronunciat (ombres fortes)
```

L'agent crea:

- *Tokens* de raiol de bord (per a botons, cartes, *inputs*)
- *Tokens* d'ombra per nivells d'elevació
- *Tokens* d'amplitud de bord

### Pas 5: Moviment i Animació

```
Com hauria de sentir-se el teu lloc web quan és interactiu?

Preferència d'animació:
- Mínima (sense animacions)
- Sutil (transicions suaus)
- Jocuda (animacions notables)

Animacions específiques:
- Transicions de pàgina: desvanir, desllizar, o cap?
- Hover de botó: escala, canvi de color, o ambdós?
- Estats de càrrega: *spinner*, esquelet, o barra de progrés?
```

L'agent defineix:

- Durades de transició (ràpid, normal, lent)
- Funcions d'ajustament (*easing functions*) (ease-in, ease-out, ease-in-out)
- *Keyframes* d'animació per a interaccions comunes

## Aplicació de l'Estètica del Sistema de Disseny

### Aplicació Automàtica

Després de completar l'habilitat, l'agent:

1. Actualitza el `theme.json` del teu tema amb tots els *tokens*
2. Aplica el sistema de disseny al teu tema actiu
3. Regenera els estils dels blocs per fer-los coincidir amb el nou sistema
4. Activa el tema actualitzat

### Aplicació Manual

També pots editar `theme.json` directament:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Veure el teu Sistema de Disseny

### Preguntar a l'Agent

```
"Mostra'm el meu sistema de disseny"
```

o

```
"Quins són els meus *tokens* de disseny actuals?"
```

L'agent mostrarà la teva tipografia, colors, espaiament i altres *tokens*.

### Veure theme.json

Obre `/wp-content/themes/[theme-name]/theme.json` en un editor de text per veure les definicions *raw* dels *tokens*.

## Actualització del teu Sistema de Disseny

### Actualitzacions Ràpides

Pega'r a l'agent canvis específics:

```
"Fes el color primari més fosc"
```

o

```
"Augmenta l'escala d'espaiament un 20%"
```

o

```
"Canvia la font de titulars a una serif"
```

### Rediseño Complet

Re-executa l'habilitat d'Estètica del Sistema de Disseny:

```
"Redesigne el meu sistema de disseny complet"
```

Aquest et guiarà a través de totes les decisions de nou, començant pels teus valors actuals.

### Actualitzacions Parcials

Actualitza aspectes específics:

```
"Només actualitza la paleta de colors, mantén el reste"
```

## Les Millors Pràctiques del Sistema de Disseny

### Consistència

- Utitzar els mateixos *tokens* en tota la pàgina
- No crear colors o tamanys de forma puntual
- Referenciar *tokens* en lloc de codificar valors rígidament

### Nomenclatura

Utitzar noms clars i semàntics:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Escalabilitat

Disseny el teu sistema per escalar:

- Utitzar unitats relatives (rem, em) en lloc de píxels
- Crear *scales* (xs, sm, md, lg, xl) en lloc de valors arbitraris
- Planificar addicions futures

### Documentació

Documentar el teu sistema de disseny:

- Per què vas triar colors específics
- Quan utilitzar cada *token*
- Excepcions i casos bord

## Patrons Comuns del Sistema de Disseny

### Minimalista Modern

- Tipografia sans-serif (Inter, Helvetica)
- Paleta de colors limitada (2-3 colors)
- Espaiament generós
- Ombres subtils
- Animacions suaus i ràpides

### Càlid i Amigable

- Combinació de serif i sans-serif
- Paleta de colors càlida (naranja, gris càlid)
- Angles arrounted
- Ombres suaus
- Animacions jocudes

### Corporatiu Professional

- Sans-serif net (Roboto, Open Sans)
- Paleta neutra amb color d'accent
- Espaçament estructurat
- Ombres mínimes
- Transicions subtils

### Creatiu i Atrevit

- Tipografia distintiva
- Paleta de colors atrevida
- Espaiament variat
- Ombres fortes
- Animacions notables

## Solucionar Problemes

**Els canvis del meu sistema de disseny no es veuen**
- Barreja la *cache* del navegador
- Reconstruyeix el teu lloc web si utilitzes un generador estàtic
- Comprova que `theme.json` és JSON vàlid
- Verifica que el tema estigui actiu

**Els colors es veuen diferents en diferents pàgines**
- Comprova la coexistència de CSS conflictiu en plugins
- Verifica que totes les pàgines utilitzin el mateix tema
- Barreja qualsevol plugin de *caching*

**Vull revertir a un sistema de disseny anterior**
- Pregunta a l'agent: "Mostra'm l'historial del meu sistema de disseny"
- Edita manualment `theme.json` per retornar als valors anteriors
- Re-executa l'habilitat amb decisions diferents

## Pròxims Passos

Després de definir el teu sistema de disseny:

1. **Revisa el teu lloc web**: Visita el teu lloc web per veure el nou disseny
2. **Refina més**: Fes ajustaments utilitzant l'habilitat de nou
3. **Crear *templates***: Crea *templates* de blocs personalitzats utilitzant els teus *tokens* de disseny
4. **Documentar**: Comparteix el teu sistema de disseny amb els membres de l'equip
