---
title: Crear menú
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Crear menú {#create-menu}

La capacidad **Crear menú** crea menús de navegación de WordPress con soporte para etiquetas de navegación distintas a los títulos de las páginas.

## Resumen {#overview}

Esta capacidad amplía la funcionalidad estándar de creación de menús con la posibilidad de especificar un parámetro `navigation_label`. Esto te permite crear menús donde la etiqueta que se muestra en la navegación es diferente al título de la página, ofreciendo más flexibilidad en la estructura del sitio y la experiencia del usuario.

## Parámetros {#parameters}

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `name` | string | Sí | Nombre del menú, ej. `Primary Navigation` (Navegación Principal) |
| `location` | string | No | Ubicación del tema a la que se asigna este menú, ej. `primary` (principal) |
| `navigation_label` | string | No | Etiqueta a mostrar en la navegación (distinta al título de la página) |

## Valor de Retorno {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etiqueta de navegación vs Título de la página {#navigation-label-vs-page-title}

El parámetro `navigation_label` te permite separar el nombre interno del menú de la etiqueta que se muestra a los usuarios:

- **`name`** — Identificador interno del menú utilizado por WordPress (ej. "Primary Navigation")
- **`navigation_label`** — La etiqueta que se muestra a los visitantes del sitio en la navegación (ej. "Main Menu")

Aix útil quan:
- La teva convenció interna de nombrament és diferent de les etiquetes visibles per l'usuari.
- Vull etiquetes més curtes en la navegació que al panel d'administració.
- Necessites suportar múltiples llengües amb longitud de etiquetes diferents.
- Estàs construint menús per a regions o grups d'utilitzadors específics.

## Exemplos d'ús {#usage-examples}

### Exemple 1: Menú simple amb etiqueta de navegació {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Crea un menú de navegació principal anomenat "Main Navigation" amb la etiqueta de navegació "Menu".
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Exemple 2: Menú per a una ubicació específica del tema {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Crea un menú de pie de pàgina anomenat "Footer Links" amb la etiqueta de navegació "Quick Links" i assigna-ho a la ubicació del pie de pàgina.
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integració amb Theme Builder {#integration-with-theme-builder}

Quan utilitzes Theme Builder, la possibilitat de Crear Menú fa les segües coses:

1. Detecta automàticament les ubicacions de menú del tema disponibles.
2. Crea menús amb etiquetes de navegació adequades per al teu disseny.
3. Assigna els menús a les ubicacions correctes del tema.
4. Suporta afegir elements de menú després de la creació.

## Capacitats Relacionades {#related-abilities}

- **`add_menu_item`** — Afegir elements a un menú existent
- **`update_menu`** — Renomenar un menú o reassignar-lo a una ubicació del tema
- **`delete_menu`** — Eliminar un menú del teu site

## Bones Pràctiques {#best-practices}

- **Usa etiquetes de navegació clares** — mantén les etiquetes concises i descriptives per als usuaris
- **Adapta a la ubicació del tema** — assignes els menús a la ubicació correcta del tema per una visualització adequada
- **Plan la estructura del menú** — decideix la jerarquia del teu menú abans de crear els elements
- **Prova la responsivitat** — verifica que els menús s'aparen correctament en dispositius mòbils
- **Localitza les etiquetes** — utilitza etiquetes de navegació diferents per a diverses versions de idioma

## Limitacions {#limitations}

- Les etiquetes de navegació són només per visualització; el `name` intern encara es té per l'identificació en WordPress.
- El suport al tema varia; no tots els temes suporten totes les ubicacions de menús.
- Els elements del menú cal s'afegeixen separat després de la creació del menú.
- Canviar una etiqueta de navegació requereix actualitzar el menú.

## Capacitats Relacionades {#related-abilities-1}

- [Generar SVG de Logotip](./generate-logo-svg.md) — crea logotips per a l'encapçament del teu lloc web.
- [Validar Contrast de Paleta](./validate-palette-contrast.md) — assegura esquemes de color accessibles.
