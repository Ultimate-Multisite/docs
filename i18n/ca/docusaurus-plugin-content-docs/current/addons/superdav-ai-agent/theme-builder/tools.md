---
title: Eines i configuració
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Eines i configuració

Theme Builder utilitza un conjunt d’eines per analitzar, dissenyar i construir el teu lloc WordPress. A la versió 1.16.0, **sd-ai-agent/site-scrape ara és una eina de Tier 1**, cosa que la fa disponible per defecte a Theme Builder. Superdav AI Agent v1.18.0 també introdueix un paquet complementari Advanced distribuït per separat per a fluxos de treball de desenvolupadors de confiança; aquestes eines no formen part del paquet principal de WordPress.org i s’han d’instal·lar i autoritzar per separat.

## Eines disponibles

### Eines de Tier 1 (sempre disponibles)

Les eines de Tier 1 estan disponibles per defecte a Theme Builder sense cap configuració addicional.

#### sd-ai-agent/site-scrape

**Propòsit:** Analitzar llocs web existents per extreure inspiració de disseny, estructura de contingut i funcionalitat.

**Capacitats:**

- **Anàlisi de llocs web** — rastrejar i analitzar llocs web de competidors o d’inspiració
- **Extracció de disseny** — identificar colors, fonts i patrons de maquetació
- **Estructura de contingut** — entendre l’organització i la jerarquia de les pàgines
- **Detecció de funcionalitats** — identificar plugins i funcionalitat
- **Anàlisi de rendiment** — comprovar la velocitat de la pàgina i l’optimització
- **Anàlisi SEO** — revisar metaetiquetes i dades estructurades

**Ús:**

```
Analitza el disseny de example.com i fes-lo servir com a inspiració per al meu lloc.
```

**Què extreu:**

- Paleta de colors i ús del color
- Tipografia (fonts i mides)
- Estructura de maquetació i espaiat
- Patrons de navegació
- Organització del contingut
- Ús d’imatges i mitjans
- Elements interactius
- Capacitat de resposta en mòbil

**Limitacions:**

- No pot rastrejar llocs protegits amb contrasenya
- Respecta robots.txt i les polítiques del lloc
- Pot no capturar contingut dinàmic
- Els llocs amb molt JavaScript poden tenir una anàlisi limitada
- Els llocs grans poden trigar més a analitzar-se

### Eines de Tier 2 (opcionals)

Les eines de Tier 2 estan disponibles quan s’activen explícitament a la configuració de Theme Builder.

#### Analítica avançada

Proporciona mètriques de rendiment detallades:

- Temps de càrrega de la pàgina
- Core Web Vitals
- Puntuació SEO
- Puntuació d’accessibilitat
- Puntuació de bones pràctiques

#### Optimitzador de contingut

Analitza i suggereix millores per a:

- Llegibilitat
- Optimització SEO
- Ús de paraules clau
- Estructura del contingut
- Ubicació de crides a l’acció

### Eines de Tier 3 (Premium)

Les eines de Tier 3 requereixen configuració addicional o funcionalitats premium.

#### Generador de contingut amb IA

Genera contingut per a:

- Descripcions de productes
- Pàgines de serveis
- Entrades de blog
- Metadescripcions
- Text de crides a l’acció

#### Eines de disseny avançades

Proporciona capacitats de disseny avançades:

- Generació de CSS personalitzat
- Creació d’animacions
- Disseny d’elements interactius
- Teoria avançada del color
- Optimització tipogràfica

### Eines complementàries Advanced (paquet separat)

El paquet complementari Advanced es distribueix per separat de la versió principal de Superdav AI Agent. Està pensat per a entorns de desenvolupadors i propietaris de llocs de confiança on els administradors permeten explícitament que l’agent utilitzi eines d’alt impacte.

Les capacitats del complement Advanced poden incloure:

- **Eines del sistema de fitxers** — inspeccionar i modificar fitxers aprovats en entorns de confiança
- **Eines de base de dades** — consultar o actualitzar dades del lloc quan s’autoritzi explícitament
- **Eines WP-CLI** — executar ordres de manteniment i inspecció de WordPress
- **Eines de distribuïdor REST** — cridar endpoints REST registrats mitjançant fluxos de treball de despatx controlats
- **Eines de creador de plugins** — crear esquelets i iterar sobre codi de plugin
- **Eines d’instantània Git** — crear instantànies abans d’operacions de desenvolupament arriscades
- **Eines de gestió d’usuaris** — ajudar a revisar o ajustar registres d’usuari quan estigui permès
- **Eines de benchmark** — executar benchmarks de rendiment o capacitat per a la revisió de desenvolupament

No documentis aquestes eines com a eines de Theme Builder disponibles generalment per a totes les instal·lacions. Només estan disponibles quan el paquet complementari Advanced està instal·lat, activat i restringit a administradors de confiança.

## Configuració d’eines

### Activar eines

Per activar eines addicionals a Theme Builder:

1. Ves a **Gratis AI Agent → Configuració**
2. Ves a **Theme Builder → Eines**
3. Activa o desactiva les eines segons calgui
4. Desa la configuració

### Permisos d’eines

Algunes eines requereixen permisos:

- **Rastreig del lloc** — requereix accés a Internet
- **Analítica** — requereix integració amb Google Analytics
- **Generació de contingut** — requereix claus d’API
- **Funcionalitats avançades** — poden requerir una subscripció premium
- **Eines complementàries Advanced** — requereixen el paquet Advanced distribuït per separat i confiança explícita de l’administrador

### Claus d’API i credencials

Configura les claus d’API per a les eines que les requereixen:

1. Ves a **Gratis AI Agent → Configuració → Claus d’API**
2. Introdueix les credencials per a cada eina
3. Prova la connexió
4. Desa-ho de manera segura

### Instal·lar el paquet complementari Advanced

El paquet complementari Advanced es publica per separat del ZIP principal de WordPress.org. Instal·la’l només des del canal oficial de distribució del projecte per a la versió i després restringeix-hi l’accés als administradors de confiança. Revisa les passarel·les d’aprovació humana i el comportament de les instantànies git abans d’activar eines de sistema de fitxers, base de dades, WP-CLI, distribuïdor REST, creador de plugins, gestió d’usuaris o benchmark en un lloc de producció.

## Ús de sd-ai-agent/site-scrape

### Ús bàsic

Demana a Theme Builder que analitzi un lloc web:

```
Analitza el disseny del lloc del meu competidor a competitor.com
i suggereix millores de disseny per al meu lloc.
```

### Anàlisi específica

Sol·licita tipus específics d’anàlisi:

```
Extreu la paleta de colors de example.com i fes-la servir com a inspiració.
```

```
Analitza l’estructura de navegació de example.com i aplica una
organització similar al meu lloc.
```

```
Comprova la capacitat de resposta en mòbil de example.com i assegura’t que el meu lloc
sigui igualment responsiu.
```

### Anàlisi comparativa

Compara diversos llocs:

```
Compara els dissenys de site1.com i site2.com i crea un disseny
que combini els millors elements de tots dos.
```

## Limitacions i consideracions de les eines

### Limitació de freqüència

- L'extracció de dades té límits de freqüència per evitar la sobrecàrrega del servidor
- Es poden limitar diverses sol·licituds al mateix lloc
- Els llocs grans poden trigar més a analitzar-se

### Precisió del contingut

- És possible que el contingut dinàmic no es capturi completament
- El contingut renderitzat amb JavaScript pot ser incomplet
- Les dades en temps real poden no quedar reflectides
- Part del contingut pot estar darrere de murs de pagament

### Consideracions legals i ètiques

- Respecteu robots.txt i les polítiques del lloc
- No extregueu contingut amb drets d'autor per reproduir-lo
- Feu servir l'anàlisi com a inspiració, no per copiar
- Verifiqueu que teniu drets per utilitzar el contingut extret
- Seguiu les condicions de servei dels llocs analitzats

### Impacte en el rendiment

- Extreure dades de llocs grans pot trigar
- Diverses extraccions simultànies poden ser més lentes
- La connectivitat de xarxa afecta la velocitat
- Els conjunts de dades grans poden requerir més processament

## Bones pràctiques

### Ús de l'anàlisi del lloc

1. **Analitzeu diversos llocs** — recopileu inspiració de diverses fonts
2. **Centreu-vos en l'estructura** — apreneu patrons de maquetació i organització
3. **Extraieu colors** — utilitzeu paletes de colors com a punts de partida
4. **Estudieu la tipografia** — identifiqueu combinacions de fonts que us agradin
5. **Reviseu la navegació** — enteneu l'organització del menú

### Extracció de dades ètica

1. **Respecteu robots.txt** — seguiu les directrius del lloc
2. **No copieu contingut** — utilitzeu l'anàlisi només com a inspiració
3. **Verifiqueu els drets** — assegureu-vos que podeu utilitzar el contingut extret
4. **Atribuïu les fonts** — reconegueu les fonts d'inspiració
5. **Seguiu les condicions** — compliu les condicions de servei del lloc

### Maximització de l'eficàcia de l'eina

1. **Sigueu específics** — sol·liciteu tipus d'anàlisi concrets
2. **Proporcioneu context** — expliqueu el propòsit del vostre lloc
3. **Establiu expectatives** — descriviu els vostres objectius de disseny
4. **Itereu** — refineu en funció dels resultats
5. **Combineu eines** — utilitzeu diverses eines per a una anàlisi completa

## Resolució de problemes

### El lloc no es pot extreure

- Comproveu si el lloc és accessible públicament
- Verifiqueu que robots.txt permet l'extracció de dades
- Proveu un lloc diferent
- Comproveu la connexió a internet
- Contacteu amb suport si el problema persisteix

### Anàlisi incompleta

- El lloc pot tenir contingut dinàmic
- És possible que JavaScript no es renderitzi completament
- Els llocs grans poden esgotar el temps d'espera
- Proveu d'analitzar pàgines específiques en lloc d'això
- Sol·liciteu tipus d'anàlisi específics

### Rendiment lent

- Els llocs grans triguen més a analitzar-se
- Diverses extraccions simultànies són més lentes
- La connectivitat de xarxa afecta la velocitat
- Proveu-ho durant hores de menys activitat
- Analitzeu primer seccions més petites

## Documentació relacionada

- [Entrevista de descoberta](./discovery-interview.md) — recopileu informació de disseny
- [Direcció de disseny](./design-direction.md) — refineu el vostre disseny
- [Menús d'hospitalitat](./hospitality-menus.md) — creeu pàgines de menú
