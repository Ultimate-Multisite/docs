---
title: Elenchi hospitalitatis
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus Hospitalitatis {#hospitality-menus}

Proprietas **Menus Hospitalitatis** sinit Theme Builder paginas menús ciborum et potionum structas directe in tuo situ WordPress generare et inserere.

## Conspectus {#overview}

Theme Builder nunc creare potest paginas menús professionales et structas pro negotiis hospitalitatis, inter cauponas, tabernas coffeae, thermopolia, et officia epularum. Haec menús plene in consilium situs tui integrantur atque facile renovari et administrari possunt.

## Genera Hospitalitatis Suffulta {#supported-hospitality-types}

- **Cauponae** — menús cenarum pleno servitio
- **Tabernae coffeae** — menús coffeae et ciborum levium
- **Thermopolia et Lounges** — menús potionum et gustationum
- **Pistrinae** — menús crustulorum et panum
- **Officia epularum** — optiones menús eventuum
- **Plaustra cibaria** — menús servitii cibarii mobilis
- **Cervesariae et Vinariae** — menús potionum cum descriptionibus

## Structura Menús {#menu-structure}

### Categoriae Menús {#menu-categories}

Menús in categorias ordinantur:

- **Gustationes** — initia et parvae patinae
- **Fercula principalia** — cursus principales
- **Additamenta** — comitamenta et holera
- **Secundae mensae** — dulcia
- **Potiones** — potiones (alcoholicae et non-alcoholicae)
- **Specialia** — specialia diurna vel temporaria

### Forma Rei Menús {#menu-item-format}

Quaelibet res menús includit:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Campi Rei {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nomen ferculi vel potionis |
| `description` | string | Descriptio accurata rei |
| `price` | string | Pretium (cum moneta formatum) |
| `dietary_info` | array | Attributa alimentaria (Vegan, Gluten-Free, etc.) |
| `allergens` | array | Allergena communia (Nuts, Shellfish, etc.) |
| `availability` | string | Quando praesto sit (Daily, Seasonal, etc.) |

## Creando Menús Hospitalitatis {#creating-hospitality-menus}

### Gradus 1: Praebe Informationem Menús {#step-1-provide-menu-information}

Dic Theme Builder de tuo menú:

```
Crea menú cauponae pro mea caupona Italica cum gustationibus,
ferculis pastae, cursibus principalibus, et secundis mensis. Include pretia et descriptiones.
```

### Gradus 2: Theme Builder Generat Menú {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Creat paginam menús structam
2. Eam ita designat ut themati situs tui congruat
3. Res in categorias ordinat
4. Pretia et descriptiones format
5. Addit informationem alimentariam et de allergenis

### Gradus 3: Recense et Aptare {#step-3-review-and-customize}

Potes:

1. Res menús et pretia recensere
2. Categorias addere vel removere
3. Res intra categorias novo ordine disponere
4. Descriptiones et informationem alimentariam renovare
5. Stilum et dispositionem aptare

## Optiones Exhibitionis Menús {#menu-display-options}

### Pagina Menús Plena {#full-menu-page}

Pagina dedicata quae menú tuum completum ostendit:

- Per categoriam ordinata
- Quaesibilis et filtrabilis
- Dispositio typographiae amica
- Consilium mobilibus respondens

### Widget Menús {#menu-widget}

Inserere sectiones menús in aliis paginis:

- Res praecipuae in pagina principali
- Specialia diurna in barra laterali
- Menú potionum in pagina thermopolii
- Ostensio secundarum mensarum in pede paginae

### PDF Menús {#menu-pdf}

Generare menú PDF deponibile:

- Formatio professionalis
- Qualitas ad imprimendum parata
- Imagines et descriptiones includit
- Facile communicandum et per email mittendum

## Informatio Alimentaria et de Allergenis {#dietary-and-allergen-information}

### Attributa Alimentaria {#dietary-attributes}

Nota res informatione alimentaria:

- **Vegan** — nulla producta animalia
- **Vegetarian** — nulla caro
- **Gluten-Free** — tutum pro morbo coeliaco
- **Dairy-Free** — nulla producta lactis
- **Nut-Free** — nullae nuces arborum aut arachides
- **Low-Carb** — carbohydrata reducta
- **High-Protein** — proteino dives

### Monita de Allergenis {#allergen-warnings}

Include allergena communia:

- **Nuts** — nuces arborum et arachides
- **Shellfish** — crustacea et mollusca
- **Fish** — omnes species piscium
- **Dairy** — lac et producta lactis
- **Eggs** — ova gallinarum
- **Soy** — producta soiae
- **Gluten** — triticum et grana gluten continentia
- **Sesame** — semina et oleum sesami

## Administratio Menús {#menu-management}

### Pretia Renovare {#updating-prices}

Facile renova pretia menús:

1. Naviga ad paginam menús
2. Preme "Recensere Menú"
3. Renova pretia rerum
4. Serva mutationes
5. Mutationes statim apparent in situ tuo

### Res Temporarias Addere {#adding-seasonal-items}

Crea variationes menús temporarias:

1. Crea novam versionem menús
2. Adde res temporarias
3. Nota res ut "Temporariae"
4. Disponere dies disponibilitatis
5. Automatice ostendere tempore suo

### Specialia Administrare {#managing-specials}

Ostende specialia diurna vel hebdomadalia:

1. Crea categoriam "Specialia"
2. Adde res cum diebus disponibilitatis
3. Illustra specialia in pagina principali
4. Renova cotidie vel singulis hebdomadibus
5. Archiva specialia vetera

## Integratio cum Theme Builder {#integration-with-theme-builder}

Cum Theme Builder pro sitibus hospitalitatis uteris:

1. **Detectio menús automatica** — agnoscit utrum negotium ciborum/potionum sis
2. **Creatio paginae menús** — generat paginas menús professionales
3. **Congruentia consilii** — menús themati situs tui congruunt
4. **Optimizatio mobilis** — menús pulchre in telephonis ostenduntur
5. **Optimizatio SEO** — menús machinis quaerendi amica sunt

## Optimae Rationes {#best-practices}

### Consilium Menús {#menu-design}

- **Ordinatio clara** — structura categorica logica
- **Descriptiones legibiles** — appetibiles et informativae
- **Pretia consistentia** — moneta et formatio clarae
- **Photographiae professionales** — imagines ciborum altae qualitatis
- **Spatium vacuum** — noli paginam nimis comprimere

### Contentum {#content}

- **Descriptiones accuratae** — res accurate describe
- **Specialia illustrare** — fac specialia eminere
- **Allergena includere** — semper allergena enumera
- **Regulariter renovare** — pretia et res recentes serva
- **Lingua appetibilis uti** — fac res delectabiles sonare

### Accessibilitas {#accessibility}

- **Fontes legibiles** — utere typis claris et legibilibus
- **Contrarium sufficiens** — cura ut textus legibilis sit
- **Tituli alimentarii** — optiones alimentarias clare nota
- **Monita de allergenis** — allergena conspicue ostende
- **Mobilibus amicum** — proba in omnibus machinis

## Exempla {#examples}

### Structura Menús Cauponae {#restaurant-menu-structure}

```
Gustationes
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Acetaria Caprensia

Fercula pastae
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Fercula principalia
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Secundae mensae
├── Tiramisu
├── Panna Cotta
└── Delectus Gelati
```

### Structura tabulae cibariae cafei {#cafe-menu-structure}

```
Coffea
├── Espresso
├── Cappuccino
└── Latte

Dulciaria
├── Croissants
├── Muffins
└── Scones

Panificia fartilia
├── Caprese Panini
├── Smoked Turkey Club
└── Involucrum vegetabile
```

## Proprietates cognatae {#related-features}

- [Crea tabulam](../abilities/create-menu.md) — crea tabulas navigationis
- [Directio designationis](./design-direction.md) — consilium situs tui apta
- [Colloquium explorationis](./discovery-interview.md) — structuram situs tui dispone
