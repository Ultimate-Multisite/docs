---
title: Habilidad de Especificación de Sitios
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Habilidad de Especificación del Sitio

La **habilidad de Especificación del Sitio** es un enfoque estructurado para capturar los objetivos, la audiencia y la identidad de marca de tu sitio. Esta información se almacena en tu memoria **site_brief**, la cual los agentes consultan a lo largo de las sesiones para proporcionar asistencia consistente y adaptada al contexto.

## ¿Qué es la Especificación del Sitio?

La Especificación del Sitio es el proceso de documentar:

- **Propósito del sitio**: Qué hace tu sitio y por qué existe
- **Audiencia objetivo**: Quién visita tu sitio y qué necesita
- **Identidad de marca**: Tus colores, tono y estilo visual
- **Objetivos comerciales**: Qué significa el éxito para tu sitio
- **Estructura de contenido**: Cómo está organizado tu sitio

Esta especificación se convierte en tu **site_brief**, una memoria persistente que los agentes utilizan para comprender el contexto de tu sitio.

## ¿Por qué usar la Especificación del Sitio?

### Consistencia entre Sesiones

Sin site_brief, tendrías que volver a explicar el propósito de tu sitio cada vez que inicias una nueva sesión. Con él, los agentes entienden inmediatamente:

- Los objetivos y la audiencia de tu sitio
- Los colores y el tono de tu marca
- La estructura de tu contenido
- Tus objetivos comerciales

### Mejores Recomendaciones

Los agentes utilizan tu site_brief para:

- Sugerir funciones alineadas con el propósito de tu sitio
- Recomendar estructuras de contenido que coincidan con tus objetivos
- Proponer diseños consistentes con tu marca
- Evitar sugerir funciones incompatibles

### Incorporación más rápida

Los agentes nuevos (o los agentes en sesiones nuevas) pueden ponerse al día rápidamente leyendo tu site_brief en lugar de hacer preguntas aclaratorias.

## Iniciando la Especificación del Sitio

### Durante la Incorporación del Constructor de Temas (Theme Builder)

La habilidad de Especificación del Sitio se inicia automáticamente durante el **flujo de incorporación del Constructor de Temas**. El agente Asistente de Configuración hace preguntas y construye tu site_brief.

### Iniciación Manual

Puedes comenzar la Especificación del Sitio en cualquier momento:

```
"Definamos la especificación de mi sitio"
```

o

```
"Ayúdame a crear un site brief"
```

## El Proceso de Especificación del Sitio

### Paso 1: Propósito del Sitio

El agente pregunta:

```
¿Cuál es el propósito principal de tu sitio?
- Tienda de comercio electrónico
- Blog o sitio de contenido
- Portafolio o muestra
- Aplicación SaaS
- Comunidad o foro
- Otro: [describir]
```

Puedes seleccionar una categoría o describir tu propio propósito.

### Paso 2: Audiencia Objetivo

```
¿Quién es tu audiencia principal?
- Consumidores / público general
- Profesionales de negocios
- Desarrolladores / usuarios técnicos
- Estudiantes / educadores
- Otro: [describir]

¿Cuáles son sus necesidades principales?
```

### Paso 3: Identidad de Marca

```
¿Cuáles son los colores de tu marca?
- Color principal: [selector de color o código hexadecimal]
- Color secundario: [selector de color o código hexadecimal]
- Color de acento: [opcional]

¿Cómo describirías el tono de tu marca?
- Profesional / corporativo
- Creativo / artístico
- Juguetón / casual
- Minimalista / moderno
- Cálido / amigable
```

### Paso 4: Objetivos Comerciales

```
¿Cómo se ve el éxito para tu sitio?
- Generar leads
- Vender productos
- Crear comunidad
- Compartir conocimiento
- Establecer autoridad
- Otro: [describir]

¿Cuál es tu métrica principal?
- Ingresos
- Interacción del usuario
- Alcance de contenido
- Conversiones
- Otro
```

### Paso 5: Estructura de Contenido

```
¿Cómo está organizado tu contenido?
- Plano (todo el contenido al mismo nivel)
- Jerárquico (categorías y subcategorías)
- Cronológico (estilo blog)
- Basado en productos (catálogo)
- Otro: [describir]

¿Qué tipos de contenido utilizas?
- Entradas de blog
- Páginas de producto
- Estudios de caso
- Documentación
- Videos
- Otro
```

## Tu Memoria site_brief

Después de completar la Especificación del Sitio, tu información se almacena como **site_brief** en la memoria de tu agente. Este es un registro estructurado que contiene:

```json
{
  "site_purpose": "Tienda de comercio electrónico de joyería artesanal",
  "target_audience": "Mujeres de 25 a 45 años, interesadas en la moda sostenible",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Cálido, artesanal, sostenible",
  "business_goals": ["Generar ventas", "Crear lealtad de marca"],
  "primary_metric": "Ingresos",
  "content_structure": "Catálogo de productos con blog",
  "content_types": ["Páginas de producto", "Entradas de blog", "Historias de clientes"]
}
```

## Ver y Actualizar tu site_brief

### Ver tu site_brief

Pregúntale al agente:

```
"Muéstrame mi site brief"
```

o

```
"¿Qué sabes sobre mi sitio?"
```

El agente mostrará tu especificación almacenada.

### Actualizar tu site_brief

Si tu sitio evoluciona, puedes actualizarlo:

```
"Actualiza mi site brief: ahora estamos apuntando a clientes B2B"
```

o

```
"Actualizar mi especificación del sitio"
```

Esto volverá a ejecutar la habilidad de Especificación del Sitio con tu información existente como punto de partida.

## Cómo Usan los Agentes el site_brief

### Recomendaciones de Diseño

Cuando pides cambios de diseño, los agentes consultan tu site_brief:

```
Tú: "Rediseña mi página de inicio"
Agente: "Según tu site brief, te diriges a mujeres de 25 a 45 años
con un tono cálido y artesanal. Crearé un diseño que enfatice
tu joyería artesanal y tus valores de sostenibilidad."
```

### Sugerencias de Funcionalidades

Los agentes sugieren funcionalidades alineadas con tus objetivos:

```
Tú: "¿Qué funcionalidades debería añadir?"
Agente: "Para una tienda de comercio electrónico centrada en la lealtad del cliente,
recomendaría: programa de fidelización, reseñas de clientes, boletín informativo por correo electrónico
y recomendaciones de productos."
```

### Estructura de Contenido

Los agentes proponen organización de contenido basada en tu estructura:

```
Tú: "¿Cómo debería organizar mi blog?"
Agente: "Dado que utilizas un catálogo de productos con blog, sugiero
organizar las publicaciones por categoría de producto y crear 'guías de estilo'
que muestren múltiples productos juntos."
```

## Mejores Prácticas

### Sé Específico

En lugar de "audiencia general", describe a tu audiencia real:

- ✓ "Mujeres de 25 a 45 años, interesadas en la moda sostenible"
- ✗ "Todos"

### Actualiza Regularmente

A medida que tu sitio evoluciona, actualiza tu site_brief:

- Cuando cambies a una audiencia nueva
- Cuando añadas nuevas líneas de productos
- Cuando cambie tu identidad de marca
- Cuando cambien tus objetivos comerciales

### Usa Terminología Consistente

Usa los mismos términos a lo largo de las sesiones:

- ✓ Di siempre "joyería sostenible" (no "joyería ecológica" y "productos verdes")
- ✓ Haz referencia consistentemente a tu audiencia de la misma manera

### Incluye Contexto

Proporciona antecedentes que ayuden a los agentes a entender tus decisiones:

- "Nos dirigimos a profesionales que valoran la calidad por encima del precio"
- "Nuestra audiencia es experta en tecnología y espera un diseño moderno"
- "Somos una startup autofinanciada, por lo que necesitamos soluciones rentables"

## Relación con la Incorporación del Constructor de Temas

La habilidad de Especificación del Sitio está integrada en el **flujo de incorporación del Constructor de Temas**. Cuando completas la incorporación, tu site_brief se crea automáticamente con la información que proporcionaste.

También puedes ejecutar la Especificación del Sitio de forma independiente si lo deseas:

- Refinar tu especificación después de la configuración inicial
- Actualizar tu site_brief a medida que evoluciona tu sitio
- Crear una especificación detallada antes de comenzar con el Constructor de Temas

## Solución de Problemas

**Mi site_brief no está siendo utilizado**
- Confirma que el agente tiene acceso a la memoria
- Pídele al agente que "recuerde mi site brief"
- Verifica que la memoria esté habilitada en tu configuración

**Quiero empezar de cero con un nuevo site_brief**
- Pídele al agente: "Borra mi site brief y empiezo de cero"
- Luego ejecuta la Especificación del Sitio de nuevo

**El agente está haciendo recomendaciones que no coinciden con mi site_brief**
- Pídele al agente que "revise mi site brief"
- Actualiza tu site_brief si está desactualizado
- Proporciona contexto adicional en tus solicitudes

## Próximos Pasos

Después de definir la especificación de tu sitio:

1. **Usar el Constructor de Temas**: Crea un tema personalizado basado en tu site_brief
2. **Refinar el Diseño**: Utiliza la habilidad de Estética del Sistema de Diseño (Design System Aesthetics) para un trabajo de diseño detallado
3. **Planificar Contenido**: Pide a los agentes recomendaciones de estructura de contenido
4. **Crear Funcionalidades**: Solicita funcionalidades alineadas con tus objetivos comerciales
