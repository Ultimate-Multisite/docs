---
title: Menús d'hospitalitat
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menús de Hostaleria

La característica **Hospitality Menus** te permite al Theme Builder generar e incrustar pàgines de menús estructurades de comida y bebida directament en el teu site WordPress.

## Resum {#overview}

El Theme Builder ara pot crear pàgines de menús professionals i estructurats per a negocis d'hostaleria com restaurants, cafès, bars i serveis de catering. Aquests menús estan completament integrats al disseny del teu site i es poden actualitzar i gestionar fàcilment.

## Tipus d'Hostaleria Compatibles {#supported-hospitality-types}

- **Restaurants** — menús de menjar de servei complet
- **Cafès** — menús de cafè i menjar lleuger
- **Bars i Salons** — menús de begudes i entrades
- **Panaderies** — menús de pastiscs i pa amb oli
- **Serveix de Catering** — opcions de menús per a esdeveniments
- **Food Trucks** — menús de servei de menjar mòbil
- **Cerveceries i Vineries** — menús de begudes amb descripcions

## Estructura del Menú {#menu-structure}

### Categories de Menú {#menu-categories}

Els menús es organitzen en categories:

- **Entrades** — entrades i petites portes
- **Plats Principals** — plats principals
- **Acompañaments** — accompagnaments i verdures
- **Desserts** — postres
- **Begudes** — begudes (alcohòliques i no alcohòliques)
- **Especials** — menús diaris o de temporada

### Format de l'Article del Menú {#menu-item-format}

Cada article de menú inclou:

```json
{
  "name": "Salm a la parrilla",
  "description": "Salm Atlàntic fesh amb salsa de butifarra",
  "price": "$24.95",
  "dietary_info": ["Senza de gluten", "Alta proteïna"],
  "allergens": ["Peix"],
  "availability": "Diari"
}
```

#### Campos de l'Article {#item-fields}

| Camp | Tip | Descripció |
|---|---|---|
| `name` | string | Nom del plat o beguda |
| `description` | string | Descripció detallada de l'article |
| `price` | string | Preu (formatat amb moneda) |
| `dietary_info` | array | Atributs dietètics (Vegan, Sencepte, etc.) |
| `allergens` | array | Alèrgens comuns (Nots, Marisco, etc.) |
| `availability` | string | Quan està disponible (Diari, Estacional, etc.) |

## Creació de Menús per a Hostaleria {#creating-hospitality-menus}

### Pas 1: Proporcionar Informació del Menú {#step-1-provide-menu-information}

Diga al Theme Builder sobre el seu menú:

```
Crea un menú de restaurant per al meu restaurant italià amb entrades,
plats de pasta, plats principals i desserts. Inclou preus i descripcions.
```

### Pas 2: El Theme Builder Genera el Menú {#step-2-theme-builder-generates-menu}

El Theme Builder fa les següents coses:

1. Crea una pàgina de menú estructurada
2. La diseña per coincidir amb el tema del seu lloc web
3. Organitza els articles en categories
4. Formata els preus i descripcions
5. Afegeix informació dietètica i d'alèrgens

### Pas 3: Revisar i Personalitzar {#step-3-review-and-customize}

Podrà fer les següents coses:

1. Editar articles de menú i preus
2. Afegir o eliminar categories
3. Reordenar articles dins de les categories
4. Actualitzar descripcions i informació dietètica
5. Ajustar el estil i la disposició

## Opcions d'Exposició del Menú {#menu-display-options}

### Pàgina Completa del Menú {#full-menu-page}

Una pàgina dedicada que mostra el seu menú complet:

- Organitzat per categoria
- Cerca i filtratge possibles
- Disposició adequada per a imprimir
- Disseny responsiv al mòbil

### Widget de Menú {#menu-widget}

Incorporar seccions de menú en altres pàgines:

- Articles destacados en la página de inicio
- Ofertas diarias en la barra lateral
- Menú de bebidas en la página de la barra
- Exhibición de postres en el pie de página

### PDF del menú {#menu-pdf}

Genera un menú descargable en formato PDF:

- Formato profesional
- Calidad lista para imprimir
- Incluye imágenes y descripciones
- Fácil de compartir por correo electrónico

## Información dietética y alérgenos {#dietary-and-allergen-information}

### Atributos dietéticos {#dietary-attributes}

Marca los artículos con información dietética:

- **Vegano** — sin productos de origen animal
- **Vegetariano** — sin carne
- **Sin gluten** — seguro para celíacos
- **Sin lácteos** — sin productos lácteos
- **Sin frutos secos** — sin nueces ni cacahuetes
- **Bajo en carbohidratos** — carbohidratos reducidos
- **Alto en proteínas** — rico en proteínas

### Advertencias de alérgenos {#allergen-warnings}

Incluye los alérgenos comunes:

- **Frutos secos** — nueces y cacahuetes
- **Mariscos** — crustáceos y moluscos
- **Pescado** — todas las especies de pescado
- **Lácteos** — leche y productos lácteos
- **Huevos** — huevos de pollo
- **Soja** — productos de soja
- **Gluten** — trigo y cereales con gluten
- **Sésamo** — semillas de sésamo y aceite

## Gestión del menú {#menu-management}

### Actualización de precios {#updating-prices}

Actualiza fácilmente los precios del menú:

1. Navega a la página del menú
2. Haz clic en "Editar menú" (Edit Menu)
3. Actualiza los precios de los artículos
4. Guarda los cambios
5. Los cambios aparecen inmediatamente en tu sitio

### Añadir artículos de temporada {#adding-seasonal-items}

Crea variaciones de menú estacionales:

1. Crea una nueva versión del menú
2. Añade los artículos de temporada
3. Marca los artículos como "Estacional" (Seasonal)
4. Programa las fechas de disponibilidad
5. Se muestran automáticamente durante la temporada

### Gestión de ofertas especiales {#managing-specials}

Muestra ofertas diarias o semanales:

1. Crear una categoria "Especiales"
2. Añadir artículos con fechas de disponibilidad
3. Destacar los especiales en la página de inicio
4. Actualizar diariamente o semanalmente
5. Archivar los especiales antiguos

## Integración con Theme Builder {#integration-with-theme-builder}

Cuando utilitzes Theme Builder per a webs d'hostaleria:

1. **Detecció automática del menú** — identifica si és un negoci de menjar/bebida
2. **Creació de pàgines de menú** — genera pàgines de menú professionals
3. **Adaptació al disseny** — els menus s'adaptaven al tema de la teva web
4. **Optimització per a mòbils** — els menus es veuen molt bé en telèfons
5. **Optimització SEO** — els menus són amics dels motors de cerca

## Bones Pràctiques {#best-practices}

### Disseny del menú {#menu-design}

- **Organització clara** — una estructura de categories lògica
- **Descripcions legibles** — apetitses i informatives
- **Preus consistents** — moneda i format clars
- **Fotos professionals** — imatges d'aliments de alta qualitat
- **Espai blanc** — no sobrecarregar la pàgina

### Contingut {#content}

- **Descripcions precises** — descriu els articles amb exactitud
- **Destacar els especials** — fa que els especials destaquin
- **Incloure allergens** — sempre indica els allergens
- **Actualització regular** — mantén actuals els preus i articles
- **Usar un llenguatge apetissant** — fa que els articles sonen deliciços

### Accessibilitat {#accessibility}

- **Fonts legibles** — utilitza tipografies clares i molt leggibles
- **Contraste suficient** — assegura que el text és clar de llegir
- **Etiquetes dietètiques** — marca clar les opcions dietètiques
- **Advertències d'allergens** — mostra els allergens de manera destacada
- **Amics dels mòbils** — testa en tots els dispositius

## Exemplos {#examples}

### Estructura del Menú de Restauració {#restaurant-menu-structure}

```
Aperitivos
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salada Caprese

Plats de Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Plats Principals
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisú
├── Panna Cotta
└── Selecció de Gelat
```

### Estructura del Menú de Cafè {#cafe-menu-structure}

```
Cafès
├── Espresso
├── Cappuccino
└── Latte

Pastisseries
├── Croissants
├── Muffins
└── Scones

Bocadures (Sandwiches)
├── Panini Caprese
├── Club de Turqueta Fumada
└── Wrap Vegetarià
```

## Característiques Relacionades {#related-features}

- [Crear Menú](../abilities/create-menu.md) — crea menús de navegació
- [Direcció de Disseny](./design-direction.md) — personalitza el disseny del teu lloc web
- [Entrevista de Descobriment](./discovery-interview.md) — planifica la estructura del teu lloc web
