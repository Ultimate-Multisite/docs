---
title: Flujo de incorporación del constructor de temas
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flujo de Incorporación del Constructor de Temas

Superdav AI Agent v1.12.0 presenta un **flujo de incorporación guiado del Constructor de Temas** que te ayuda a crear un tema de bloques personalizado durante tu configuración inicial. Esto reemplaza el modo Site Builder heredado por un enfoque más flexible y asistido por agentes.

## ¿Qué es el Flujo de Incorporación del Constructor de Temas?

El flujo de incorporación del Constructor de Temas es un asistente de configuración interactivo que:

- Te guía a través de las decisiones de diseño (colores, tipografía, diseño)
- Recopila las preferencias de identidad visual de tu sitio
- Genera un tema de bloques personalizado adaptado a tus necesidades
- Activa el tema automáticamente al finalizar

El flujo está impulsado por el **Setup Assistant agent**, que hace preguntas aclaratorias y construye tu tema de forma incremental.

## Inicio del Constructor de Temas

### Configuración Inicial

Cuando ejecutas Superdav AI Agent por primera vez en una nueva instalación de WordPress, verás:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Selecciona **"Build a custom theme"** para entrar en el flujo de incorporación del Constructor de Temas.

### Activación Manual

También puedes iniciar la incorporación del Constructor de Temas en cualquier momento solicitando:

```
"Start the Theme Builder onboarding"
```

o

```
"Help me create a custom theme"
```

## Los Pasos de Incorporación

### Paso 1: Selección de Modo

El Setup Assistant agent pregunta sobre tu preferencia:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

Se recomienda el **modo guiado** para la mayoría de los usuarios; el agente hace recomendaciones de diseño basadas en tu industria y objetivos.

### Paso 2: Especificación del Sitio

Te preguntarán sobre tu sitio:

- **Propósito del sitio**: Comercio electrónico, blog, portafolio, SaaS, etc.
- **Público objetivo**: ¿Quiénes son tus visitantes?
- **Colores de marca**: Colores primarios y secundarios (o "No estoy seguro")
- **Tono**: Profesional, creativo, divertido, minimalista, etc.

Esta información se almacena en tu memoria **site_brief**, que los agentes consultan en sesiones futuras.

### Paso 3: Decisiones del Sistema de Diseño

El agente te guía a través de la selección de tokens de diseño:

- **Tipografía**: Familia de fuentes (serif, sans-serif, monospace) y escala de tamaño
- **Paleta de colores**: Colores primarios, secundarios, de acento y neutros
- **Espaciado**: Diseños compactos, normales o amplios
- **Movimiento**: Animaciones y transiciones (si se desea)

### Paso 4: Generación del Tema

El Setup Assistant agent estructura tu tema de bloques personalizado con:

- `theme.json` que contiene todos tus tokens de diseño
- Plantillas de bloques para diseños comunes (página de inicio, blog, contacto)
- Estilos de bloques personalizados que coinciden con tu sistema de diseño
- Metadatos del tema y declaraciones de soporte de WordPress

### Paso 5: Activación y Verificación

El tema se activa automáticamente y verás:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Luego puedes visitar tu sitio para verificar que el tema se muestre correctamente.

## Especificación del Sitio y Memoria site_brief

Durante la incorporación, el agente captura la especificación de tu sitio en una categoría de memoria **site_brief**. Esto incluye:

- Propósito y objetivos del sitio
- Público objetivo
- Colores y tono de la marca
- Preferencias de diseño
- Estructura de contenido

### Por qué es importante site_brief

En sesiones futuras, los agentes consultan tu site_brief para:

- Mantener la coherencia del diseño a través de los cambios
- Sugerir funciones alineadas con el propósito de tu sitio
- Proporcionar recomendaciones conscientes del contexto
- Evitar repetir preguntas de configuración

### Ver tu site_brief

Puedes pedirle al agente:

```
"Show me my site brief"
```

o

```
"What do you know about my site?"
```

El agente mostrará la especificación de tu sitio almacenada.

## Personalización Después de la Incorporación

Una vez que finaliza la incorporación del Constructor de Temas, puedes:

### Usar la Habilidad de Estética del Sistema de Diseño

Solicitar refinamientos de diseño:

```
"Refine the typography to be more modern"
```

o

```
"Adjust the color palette to be warmer"
```

La **Design System Aesthetics skill** te guía a través de actualizaciones de diseño específicas.

### Editar theme.json Directamente

Para usuarios avanzados, edita `/wp-content/themes/[theme-name]/theme.json` para ajustar:

- Tokens de color
- Escalas tipográficas
- Valores de espaciado
- Definiciones de bordes y sombras

### Crear Plantillas de Bloques Personalizadas

Usa el editor de bloques de WordPress para crear plantillas personalizadas para:

- Diseños de página de inicio
- Páginas de entradas de blog
- Páginas de productos
- Formularios de contacto

## Comparación: Antiguo vs. Nuevo Flujo de Incorporación

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Solución de Problemas

**El flujo de incorporación no se completó**
- Reinicia el flujo: "Start the Theme Builder onboarding"
- Verifica que tu instalación de WordPress esté actualizada
- Confirma que el Setup Assistant agent esté habilitado

**Mi site_brief no está siendo utilizado**
- Confirma que el agente tiene acceso a la memoria
- Pídele al agente que "recall my site brief"
- Verifica que la memoria esté habilitada en tu configuración

**El tema generado no coincide con mis preferencias**
- Usa la Design System Aesthetics skill para refinarlo
- Pídele al agente que "regenerate the theme with [specific changes]"
- Edita theme.json directamente para un control preciso

## Próximos Pasos

Después de completar la incorporación del Constructor de Temas:

1. **Verifica tu sitio**: Visita tu sitio para ver el nuevo tema
2. **Refina el diseño**: Usa la Design System Aesthetics skill para ajustes
3. **Añade contenido**: Comienza a crear el contenido de tu sitio
4. **Explora capacidades**: Aprende sobre otras habilidades del agente como scaffold-block-theme y activate-theme
