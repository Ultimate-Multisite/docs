---
title: Menús de Hospitalidad
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menús de Hostelería

La función **Menús de Hostelería** permite a Theme Builder generar e incrustar páginas de menús de comida y bebida estructurados directamente en su sitio de WordPress.

## Resumen {#overview}

Ahora, Theme Builder puede crear páginas de menú profesionales y estructuradas para negocios de hostelería, incluidos restaurantes, cafeterías, bares y servicios de catering. Estos menús están totalmente integrados en el diseño de su sitio y son fáciles de actualizar y gestionar.

## Tipos de Hostelería Compatibles {#supported-hospitality-types}

- **Restaurantes** — menús de comedor completos
- **Cafeterías** — menús de café y comidas ligeras
- **Bares y Salones** — menús de bebidas y aperitivos
- **Panaderías** — menús de pastelería y pan
- **Servicios de Catering** — opciones de menú para eventos
- **Food Trucks** — menús de servicio de comida móvil
- **Bodegas y Viñedos** — menús de bebidas con descripciones

## Estructura del Menú {#menu-structure}

### Categorías de Menú {#menu-categories}

Los menús se organizan en categorías:

- **Aperitivos** — entrantes y platos pequeños
- **Platos Principales** — platos fuertes
- **Guarniciones** — acompañamientos y verduras
- **Postres** — dulces
- **Bebidas** — refrescos (alcohólicas y no alcohólicas)
- **Especiales** — platos especiales diarios o de temporada

### Formato del Artículo del Menú {#menu-item-format}

Cada artículo del menú incluye:

```json
{
  "name": "Salmón a la Parrilla",
  "description": "Salmón atlántico fresco con salsa de mantequilla y limón",
  "price": "$24.95",
  "dietary_info": ["Sin Gluten", "Alto en Proteínas"],
  "allergens": ["Pescado"],
  "availability": "Diario"
}
```

#### Campos del Artículo {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nombre del plato o bebida |
| `description` | string | Descripción detallada del artículo |
| `price` | string | Precio (formateado con moneda) |
| `dietary_info` | array | Atributos dietéticos (Vegano, Sin Gluten, etc.) |
| `allergens` | array | Alérgenos comunes (Nueces, Mariscos, etc.) |
| `availability` | string | Cuándo está disponible (Diario, Estacional, etc.) |

## Creación de Menús de Hostelería {#creating-hospitality-menus}

### Paso 1: Proporcionar la Información del Menú {#step-1-provide-menu-information}

Cuente a Theme Builder sobre su menú:

```
Crea un menú de restaurante para mi restaurante italiano con aperitivos,
platos de pasta, platos principales y postres. Incluye precios y descripciones.
```

### Paso 2: Theme Builder Genera el Menú {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Crea una página de menú estructurada
2. La diseña para que coincida con el tema de su sitio
3. Organiza los artículos en categorías
4. Formatea precios y descripciones
5. Añade información dietética y de alérgenos

### Paso 3: Revisar y Personalizar {#step-3-review-and-customize}

Puede:

1. Editar artículos y precios del menú
2. Añadir o eliminar categorías
3. Reordenar artículos dentro de las categorías
4. Actualizar descripciones e información dietética
5. Ajustar el estilo y la disposición

## Opciones de Visualización del Menú {#menu-display-options}

### Página de Menú Completa {#full-menu-page}

Una página dedicada que muestra su menú completo:

- Organizado por categoría
- Buscable y filtrable
- Diseño apto para impresión
- Diseño adaptable a dispositivos móviles

### Widget de Menú {#menu-widget}

Incruste secciones de menú en otras páginas:

- Artículos destacados en la página de inicio
- Especiales diarios en la barra lateral
- Menú de bebidas en la página de bar
- Vitrina de postres en el pie de página

### PDF de Menú {#menu-pdf}

Genere un menú PDF descargable:

- Formato profesional
- Calidad lista para imprimir
- Incluye imágenes y descripciones
- Fácil de compartir y enviar por correo electrónico

## Información Dietética y de Alérgenos {#dietary-and-allergen-information}

### Atributos Dietéticos {#dietary-attributes}

Marque los artículos con información dietética:

- **Vegano** — sin productos de origen animal
- **Vegetariano** — sin carne
- **Sin Gluten** — seguro para la enfermedad celíaca
- **Sin Lácteos** — sin productos lácteos
- **Sin Frutos Secos** — sin nueces ni cacahuetes
- **Bajo en Carbohidratos** — carbohidratos reducidos
- **Alto en Proteínas** — rico en proteínas

### Advertencias de Alérgenos {#allergen-warnings}

Incluya alérgenos comunes:

- **Nueces** — nueces de árbol y cacahuetes
- **Mariscos** — crustáceos y moluscos
- **Pescado** — todas las especies de pescado
- **Lácteos** — leche y productos lácteos
- **Huevos** — huevos de gallina
- **Soja** — productos de soja
- **Gluten** — trigo y granos que contienen gluten
- **Sésamo** — semillas y aceite de sésamo

## Gestión del Menú {#menu-management}

### Actualizar Precios {#updating-prices}

Actualice fácilmente los precios del menú:

1. Navegue a la página del menú
2. Haga clic en "Editar Menú"
3. Actualice los precios de los artículos
4. Guarde los cambios
5. Los cambios aparecerán inmediatamente en su sitio

### Añadir Artículos de Temporada {#adding-seasonal-items}

Cree variaciones de menú estacionales:

1. Cree una nueva versión del menú
2. Añada artículos de temporada
3. Marque los artículos como "Estacionales"
4. Programar las fechas de disponibilidad
5. Mostrar automáticamente durante la temporada

### Gestionar Especiales {#managing-specials}

Muestre especiales diarios o semanales:

1. Cree una categoría de "Especiales"
2. Añada artículos con fechas de disponibilidad
3. Resalte los especiales en la página de inicio
4. Actualice diariamente o semanalmente
5. Archivar especiales antiguos

## Integración con Theme Builder {#integration-with-theme-builder}

Al usar Theme Builder para sitios de hostelería:

1. **Detección automática de menús** — identifica si es un negocio de comida/bebida
2. **Creación de páginas de menú** — genera páginas de menú profesionales
3. **Coincidencia de diseño** — los menús coinciden con el tema de su sitio
4. **Optimización móvil** — los menús se muestran hermosos en teléfonos
5. **Optimización SEO** — los menús son amigables para los motores de búsqueda

## Mejores Prácticas {#best-practices}

### Diseño del Menú {#menu-design}

- **Organización clara** — estructura de categorías lógica
- **Descripciones legibles** — apetitosas e informativas
- **Precios consistentes** — moneda y formato claros
- **Fotos profesionales** — imágenes de comida de alta calidad
- **Espacio en blanco** — no sature la página

### Contenido {#content}

- **Descripciones precisas** — describa los artículos con exactitud
- **Resaltar especiales** — haga que los especiales destaquen
- **Incluir alérgenos** — enumere siempre los alérgenos
- **Actualizar regularmente** — mantenga los precios y artículos actualizados
- **Usar lenguaje apetitoso** — haga que los artículos suenen deliciosos

### Accesibilidad {#accessibility}

- **Fuentes legibles** — use tipografías claras y legibles
- **Contraste suficiente** — asegúrese de que el texto sea legible
- **Etiquetas dietéticas** — marque claramente las opciones dietéticas
- **Advertencias de alérgenos** — muestre los alérgenos de forma prominente
- **Amigable para móviles** — pruébelo en todos los dispositivos

## Ejemplos {#examples}

### Estructura del Menú de Restaurante {#restaurant-menu-structure}

```
Aperitivos
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Ensalada Caprese

Platos de Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Platos Principales
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Postres
├── Tiramisu
├── Panna Cotta
└── Selección de Gelato
```

### Estructura del Menú de Cafetería {#cafe-menu-structure}

```
Café
├── Espresso
├── Capuchino
└── Latte

Pastelería
├── Croissants
├── Muffins
└── Scones

Sándwiches
├── Panini Caprese
├── Club de Pavo Ahumado
└── Wrap Vegetariano
```

## Funcionalidades Relacionadas {#related-features}

- [Create Menu](../abilities/create-menu.md) — crear menús de navegación
- [Design Direction](./design-direction.md) — personalizar el diseño de su sitio
- [Discovery Interview](./discovery-interview.md) — planificar la estructura de su sitio
