---
title: Ets i Configuració
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Ets i Configuració

Theme Builder utilitza un set d'eutillats per analitzar, dissenyar i construir el teu site de WordPress. En la versió 1.16.0, **sd-ai-agent/site-scrape és ara una eutilla de Nivell 1 (Tier 1)**, cosa que la fa disponible per defecte en Theme Builder.

## Eutillats Disponibles

### Eutillats de Nivell 1 (Always Available)

Els eutillats de Nivell 1 estan disponibles per defecte en Theme Builder sense necessitar configuracions addicionals.

#### sd-ai-agent/site-scrape

**Objectiu:** Analitzar webs existents per extrare inspiració de disseny, la estructura del contingut i la funcionalitat.

**Capacitats:**

- **Anàlisi web** — raspallada i anàlisi de webs concorrents o d'inspiració
- **Extracció de disseny** — identificar colors, fonts i patrons de disposició (layout)
- **Estructura del contingut** — entendre l'organització i la jerarquia de les pàgines
- **Detecció de funcions** — identificar plugins i funcionalitats
- **Anàlisi de rendiment** — verificar la velocitat de càrrega de pàgines i optimitzacions
- **Anàlisi SEO** — revisar les meta tags i els dades estructurades

**Ús:**

```
Analitza el disseny de example.com i utilitza com inspiració per al meu site.
```

**Què Extreu:**

- Paleta de colors i ús del color
- Tipografia (fonts i talles)
- Estructura de la disposició i espacament
- Patrons de navegació
- Organització del contingut
- Ús d'imatges i medi
- Elements interactius
- Responsivitat mòbil

**Limitacions:**

- No es possible raspar (scrape) sites protegits per contrassords
- Respecta robots.txt i les polítiques del site
- Potser no capta contingut dinàmic
- Els sites molt dependents de JavaScript poden tenir una anàlisi limitada
- Els sites grans poden prendre més temps en analitzar

### Dones Tier 2 (Opcional)

Les eines Tier 2 estan disponibles quan es habiliten explícitament en les configuracions del Theme Builder.

#### Analítiques Avançats

Ofereix métriques de rendiment detallades:

- Temps de càrrega de pàgines
- Core Web Vitals
- Punt SEO
- Punt d'accessibilitat (Accessibility score)
- Punt de bones pràctiques (Best practices score)

#### Optimizador de Contenu

Analitza i suggere millores per a:

- Legibilitat
- Optimizació SEO
- Ús de mots clau (Keyword usage)
- Estructura del contingut
- Colocació d'activacions (Call-to-action placement)

### Dones Tier 3 (Premium)

Les eines Tier 3 requereixen configuració addicional o funcions premium.

#### Generador de Contenu AI

Genera contingut per a:

- Descripcions de productes
- Pàgines de serveis
- Posts de blog
- Descripcions meta (Meta descriptions)
- Textos d'activacions (Call-to-action copy)

#### Eixits de Disseny Avançats

Ofereix habilitats de disseny avançades:

- Generació de CSS custom
- Creació d'animacions
- Disseny d'elements interactius
- Teoria del color avançada
- Optimizació de tipografia

## Configuració de les eines (Tool Configuration)

### Habilitar Eixits (Enabling Tools)

Per habilitar eines addicionals al Theme Builder:

1. Navega a **Gratis AI Agent → Configuració** (Settings)
2. Ve a **Theme Builder → Eixits** (Tools)
3. Activa/desactiva els eixits com sigui necessari
4. Guarda les configuracions

### Permisos dels Eixits (Tool Permissions)

Alguns eixits requereixen permís:

- **Raspallatge de webs** — requereix accés a internet
- **Anàlisi (Analytics)** — requereix integració amb Google Analytics
- **Generació de contingut** — requereix API keys
- **Característiques avançades** — poden requerir una subscripció premium

### Clau d'API i Credencials

Configura les clau d'API per a les eines que ho necessitin:

1. Ve a **Gratis AI Agent → Configuració (Settings) → API Keys**
2. Introduix les credencials de cada eina
3. Testa la connexió
4. Guarda de manera segura

## Utilització de sd-ai-agent/site-scrape

### Ús bàsic

Pide al Theme Builder que analitzi un lloc web:

```
Analitza el disseny del meu competidor a competitor.com
i suggere millores de disseny per al meu lloc.
```

### Anàlisi específica

Requesta tipus d'anàlisi específics:

```
Extrau la paleta de colors de example.com i utilitza com inspiració.
```

```
Analitza la estructura de navegació de example.com i aplica una
organització similar al meu lloc.
```

```
Comprova la responsivitat mòbil de example.com i assegura que el meu lloc
és igualment responsiv.
```

### Anàlisi comparativa

Compara múltiples llocs:

```
Compara els dissenys de site1.com i site2.com i crea un disseny
que combini els millors elements d'ambos.
```

## Limitacions i consideracions de les eines

### Llimitació de taxa (Rate Limiting)

- El raspallatge està limitat per evitar la sobrecarga del servidor
- Múlti sol·licitud al mateix lloc poden ser reduïdes en freqüència (throttled)
- Els llocs grans poden prendre més temps analitzar

### Exactitud del contingut

- El contingut din dinamisme pot no ser complet
- El contingut renderitzat amb JavaScript pot estar incompleta
- Els dades en temps real poden no reflectir-se
- Alguns continguts poden estar detrás de muros de pagament (paywalls)

### Consideracions Legals i Ètiques

- Respecta el robots.txt i les polítiques del lloc web
- No faci *scraping* de contingut protegït per dret per reproducció
- Utilitza l'anàlisi com inspiració, no com còpia
- Verifica que t'han donat els drets per utilitzar el contingut extraït
- Segueix els termes de servei dels llocs web analitzats

### Impacte en la Performància

- El *scraping* de llocs web grans pot prendre temps
- Múltials *scrapes* simultanis poden ser més lentos
- La connectivitat de la xarxa afecta la velocitat
- Els set de dades grans poden requerir més processament

## Bones Pràctiques

### Utilitzar l'anàlisi del lloc web (Site Analysis)

1. **Analitza múltiples llocs web** — recull inspiració de diverses fonts
2. **Concentra-t en la estructura** — apren les pautas de disposició i organització
3. **Extrae colors** — utilitza paletes de colors com punts de partida
4. **Estudia la tipografia** — identifica les combinacions de fonts que t'agraden
5. **Revisa la navegació** — entén l'organització dels menús

### *Scraping* Ètic

1. **Respecta el robots.txt** — segueix les directrius del lloc web
2. **No copies contingut** — utilitza l'anàlisi només com inspiració
3. **Verifica els drets** — assegura que pots utilitzar el contingut extraït
4. **Atribueix les fonts** — credita les fonts d'inspiració
5. **Segueix els termes** — compleix amb els termes de servei del lloc web

1. **Sé específic** — solicita tipus d'anàlisi específics
2. **Forriu context** — explica el propòsit del seu lloc web
3. **Estableix expectatives** — descriu els seus objectius de disseny
4. **Itera** — refina bas els resultats
5. **Combina eines** — utilitza múltiples eines per una anàlisi completa

## Resolució de problemes (Troubleshooting)

### El lloc web no es raspota (Site Won't Scrape)

- Comprova si el lloc web és accessible públicament
- Verifica que `robots.txt` permet el raspotatge (scraping)
- Prova amb un altre lloc web
- Comprova la connexió a internet
- Contacta suport si el problema persisteix

### Anàlisi incompleta (Incomplete Analysis)

- El lloc web pot tenir contingut dinàmic
- El JavaScript podria no estar completament renderitzat
- Els llocs webs grans poden causar temps d'espera (timeout)
- Prova analitzar pàgines específiques en lloc d'ho tot el lloc
- Sol·licita tipus d'anàlisi específics

### Rendiment lent (Slow Performance)

- Els llocs webs grans tarden més a analitzar
- Múltales raspotatges simultanis són més lentos
- La connectivitat de la xarxa afecta la velocitat
- Prova fer-ho durant hores de baixa d'ús (off-peak hours)
- Analitza primers les seccions més petites
