---
title: Habilidades Sensibles al Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Habilidades Sensibles al Tema

Superdav AI Agent v1.10.0 incluye cuatro nuevas habilidades integradas sensibles al tema que se adaptan automáticamente al tema activo de WordPress. Estas habilidades proporcionan orientación y capacidades especializadas adaptadas a la arquitectura y las características de tu tema.

## ¿Qué son las Habilidades Sensibles al Tema?

Las habilidades sensibles al tema son bases de conocimiento y conjuntos de herramientas preconfigurados que el asistente de IA selecciona automáticamente basándose en el tema de WordPress que está activo en tu sitio. Cuando cambias de tema, las habilidades disponibles del asistente se actualizan automáticamente, sin necesidad de configuración manual.

Cada habilidad incluye:

- **Documentación específica del tema** — Guía sobre cómo usar y personalizar el tema
- **Referencias de bloques y patrones** — Bloques, patrones y opciones de diseño disponibles
- **Ejemplos de personalización** — Fragmentos de código y patrones de configuración para tareas comunes
- **Mejores prácticas** — Recomendaciones para la arquitectura y el flujo de trabajo del tema

## Habilidades Sensibles al Tema Disponibles

### Block Themes

**Aplica a:** Temas que utilizan la arquitectura basada en bloques de WordPress (Full Site Editing).

La habilidad Block Themes proporciona orientación sobre:

- Crear y editar plantillas usando el editor de bloques
- Trabajar con patrones de bloques y bloques reutilizables
- Personalizar estilos globales y configuraciones de theme.json
- Usar bloques y variaciones de temas
- Crear patrones de bloques personalizados para tu sitio

**Se activa automáticamente cuando:** Tu tema activo es un tema de bloques (soporta la función `block-templates`).

### Classic Themes

**Aplica a:** Temas tradicionales de WordPress que utilizan plantillas PHP y el editor clásico.

La habilidad Classic Themes proporciona orientación sobre:

- Trabajar con archivos de plantilla PHP y hooks
- Personalizar la apariencia del tema a través del Customizer
- Usar áreas de widgets y barras laterales
- Modificar CSS y desarrollo de temas hijos (child theme)
- Comprender la jerarquía del tema y las etiquetas de plantilla

**Se activa automáticamente cuando:** Tu tema activo es un tema clásico (no basado en bloques).

### Kadence Blocks

**Aplica a:** Sitios que utilizan el plugin Kadence Blocks para diseño avanzado basado en bloques.

La habilidad Kadence Blocks proporciona orientación sobre:

- Usar la biblioteca avanzada de bloques de Kadence (Hero, Testimonials, Pricing, etc.)
- Configurar ajustes de bloques y opciones de respuesta de Kadence
- Crear diseños personalizados con los bloques de cuadrícula y contenedor de Kadence
- Integrar bloques de Kadence con tu tema
- Aprovechar el sistema de diseño y los preajustes de Kadence

**Se activa automáticamente cuando:** El plugin Kadence Blocks está activo en tu sitio.

### Kadence Theme

**Aplica a:** Sitios que utilizan el tema Kadence para diseño y personalización basados en bloques.

La habilidad Kadence Theme proporciona orientación sobre:

- Personalizar el tema Kadence a través de estilos globales y theme.json
- Usar los patrones y plantillas integrados de Kadence
- Configurar ajustes y opciones del tema Kadence
- Crear diseños personalizados con el sistema de diseño de Kadence
- Integrar Kadence con plugins y herramientas populares

**Se activa automáticamente cuando:** El tema Kadence es tu tema activo.

## Cómo se Seleccionan las Habilidades

El asistente detecta automáticamente tu tema activo y los plugins instalados en cada mensaje. Si hay una habilidad sensible al tema que coincide, se carga automáticamente en el contexto del asistente. No necesitas habilitar o cambiar las habilidades manualmente.

### Múltiples Habilidades

Si varias habilidades se aplican a tu sitio (por ejemplo, si tienes activos tanto Kadence Blocks como Kadence Theme), el asistente tiene acceso a todas las habilidades aplicables y puede hacer referencia a la guía de cada una.

### Cambio de Temas

Cuando cambias tu tema activo, las habilidades disponibles del asistente se actualizan automáticamente en el siguiente mensaje. Por ejemplo:

1. Estás utilizando un tema de bloques con la habilidad **Block Themes** activa.
2. Cambias a un tema clásico.
3. En tu siguiente mensaje, la habilidad **Classic Themes** se carga automáticamente y la habilidad **Block Themes** ya no está disponible.

## Uso de Habilidades Sensibles al Tema

Para aprovechar una habilidad sensible al tema, simplemente describe lo que quieres hacer en la interfaz de chat. El asistente hará referencia automáticamente a la guía de la habilidad apropiada.

### Prompts de Ejemplo

**Para Block Themes:**
> "Crea una sección hero con una imagen de fondo y texto centrado usando patrones de bloques."

**Para Classic Themes:**
> "Añade un área de widget personalizada a la barra lateral usando un tema hijo."

**Para Kadence Blocks:**
> "Crea una sección de testimonios usando el bloque Testimonials de Kadence."

**Para Kadence Theme:**
> "Personaliza el diseño del encabezado y el estilo del menú de navegación."

El asistente proporcionará orientación específica del tema y ejemplos de código adaptados a tu tema y plugins activos.

:::note
Las habilidades sensibles al tema están disponibles automáticamente en Superdav AI Agent v1.10.0 y posteriores. No se requiere configuración ni configuración adicional.
:::
