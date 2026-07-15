---
title: Crear Menú
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Crear Menú

La capacidad de **Crear Menú** permite generar menús de navegación de WordPress con soporte para etiquetas de navegación distintas a los títulos de las páginas.

## Descripción general {#overview}

Esta capacidad extiende la funcionalidad estándar de creación de menús al permitir especificar un parámetro `navigation_label`. Esto le permite crear menús donde la etiqueta mostrada en la navegación difiere del título de la página, ofreciendo más flexibilidad en la estructura del sitio y la experiencia del usuario.

## Parámetros {#parameters}

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|----------|-------------|
| `name` | string | Sí | Nombre del menú, ej. `Navegación Principal` |
| `location` | string | No | Ubicación del tema a la que asignar este menú, ej. `primary` |
| `navigation_label` | string | No | Etiqueta a mostrar en la navegación (distinta del título de la página) |

## Valor de retorno {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etiqueta de navegación vs. Título de la página {#navigation-label-vs-page-title}

El parámetro `navigation_label` le permite separar el nombre interno del menú de la etiqueta que se muestra a los usuarios:

- **`name`** — Identificador interno del menú utilizado por WordPress (ej. "Primary Navigation")
- **`navigation_label`** — La etiqueta que se muestra a los visitantes del sitio en la navegación (ej. "Main Menu")

Esto es útil cuando:
- Su convención de nombres interna difiere de las etiquetas visibles para el usuario
- Desea etiquetas más cortas en la navegación que en el panel de administración
- Necesita dar soporte a múltiples idiomas con diferentes longitudes de etiquetas
- Está creando menús para regiones o grupos de usuarios específicos

## Ejemplos de uso {#usage-examples}

### Ejemplo 1: Menú simple con etiqueta de navegación {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Resultado:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Ejemplo 2: Menú para una ubicación de tema específica {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Resultado:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integración con Theme Builder {#integration-with-theme-builder}

Al usar Theme Builder, la capacidad de Crear Menú:

1. Detecta automáticamente las ubicaciones de menú disponibles en el tema
2. Crea menús con etiquetas de navegación apropiadas para su diseño
3. Asigna los menús a las ubicaciones de tema correctas
4. Permite añadir elementos del menú después de la creación

## Capacidades relacionadas {#related-abilities}

- **`add_menu_item`** — Añadir elementos a un menú existente
- **`update_menu`** — Cambiar el nombre de un menú o reasignarlo a una ubicación del tema
- **`delete_menu`** — Eliminar un menú de su sitio

## Mejores prácticas {#best-practices}

- **Use etiquetas de navegación claras** — Mantenga las etiquetas concisas y descriptivas para los usuarios
- **Coincide con las ubicaciones del tema** — Asigne los menús a la ubicación de tema correcta para una visualización adecuada
- **Planifique la estructura del menú** — Decida la jerarquía de su menú antes de crear los elementos
- **Pruebe la adaptabilidad** — Verifique que los menús se muestren correctamente en dispositivos móviles
- **Localice las etiquetas** — Utilice diferentes etiquetas de navegación para diferentes versiones de idioma

## Limitaciones {#limitations}

- Las etiquetas de navegación son solo para visualización; el `name` interno sigue siendo utilizado para la identificación de WordPress
- El soporte del tema varía; no todos los temas soportan todas las ubicaciones de menú
- Los elementos del menú deben añadirse por separado después de la creación del menú
- Cambiar una etiqueta de navegación requiere actualizar el menú

## Capacidades relacionadas {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — crear logotipos para el encabezado de su sitio
- [Validate Palette Contrast](./validate-palette-contrast.md) — asegurar esquemas de color accesibles
