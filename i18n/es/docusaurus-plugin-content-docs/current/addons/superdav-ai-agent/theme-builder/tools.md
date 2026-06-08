---
title: Herramientas y Configuración
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Herramientas y Configuración

Theme Builder utiliza un conjunto de herramientas para analizar, diseñar y construir tu sitio de WordPress. En la versión 1.16.0, **sd-ai-agent/site-scrape es ahora una herramienta de Nivel 1**, lo que la hace disponible por defecto en Theme Builder.

## Herramientas Disponibles

### Herramientas de Nivel 1 (Siempre Disponibles)

Las herramientas de Nivel 1 están disponibles por defecto en Theme Builder sin necesidad de ninguna configuración adicional.

#### sd-ai-agent/site-scrape

**Propósito:** Analizar sitios web existentes para extraer inspiración de diseño, estructura de contenido y funcionalidad.

**Capacidades:**

- **Análisis de sitios web** — rastrear y analizar sitios web de la competencia o de inspiración
- **Extracción de diseño** — identificar colores, fuentes y patrones de diseño
- **Estructura de contenido** — comprender la organización y jerarquía de las páginas
- **Detección de funcionalidades** — identificar plugins y funcionalidades
- **Análisis de rendimiento** — verificar la velocidad y optimización de la página
- **Análisis SEO** — revisar meta etiquetas y datos estructurados

**Uso:**

```
Analiza el diseño de example.com y úsalo como inspiración para mi sitio.
```

**Lo que extrae:**

- Paleta de colores y uso de colores
- Tipografía (fuentes y tamaños)
- Estructura y espaciado del diseño
- Patrones de navegación
- Organización del contenido
- Uso de imágenes y medios
- Elementos interactivos
- Adaptabilidad móvil

**Limitaciones:**

- No puede rastrear sitios protegidos por contraseña
- Respeta robots.txt y las políticas del sitio
- Puede que no capture contenido dinámico
- Los sitios con mucho JavaScript pueden tener un análisis limitado
- Los sitios grandes pueden tardar más en analizar

### Herramientas de Nivel 2 (Opcional)

Las herramientas de Nivel 2 están disponibles cuando se habilitan explícitamente en la configuración de Theme Builder.

#### Advanced Analytics

Proporciona métricas de rendimiento detalladas:

- Tiempos de carga de la página
- Core Web Vitals
- Puntuación SEO
- Puntuación de accesibilidad
- Puntuación de mejores prácticas

#### Content Optimizer

Analiza y sugiere mejoras para:

- Legibilidad
- Optimización SEO
- Uso de palabras clave
- Estructura de contenido
- Colocación de llamadas a la acción

### Herramientas de Nivel 3 (Premium)

Las herramientas de Nivel 3 requieren configuración adicional o funciones premium.

#### AI Content Generator

Genera contenido para:

- Descripciones de productos
- Páginas de servicios
- Publicaciones de blog
- Meta descripciones
- Copia para llamadas a la acción

#### Advanced Design Tools

Proporciona capacidades de diseño avanzadas:

- Generación de CSS personalizado
- Creación de animaciones
- Diseño de elementos interactivos
- Teoría avanzada del color
- Optimización tipográfica

## Configuración de Herramientas

### Habilitar Herramientas

Para habilitar herramientas adicionales en Theme Builder:

1. Navega a **Gratis AI Agent → Settings**
2. Ve a **Theme Builder → Tools**
3. Activa/desactiva las herramientas según sea necesario
4. Guarda la configuración

### Permisos de Herramientas

Algunas herramientas requieren permisos:

- **Site scraping** — requiere acceso a internet
- **Analytics** — requiere integración con Google Analytics
- **Content generation** — requiere claves API
- **Advanced features** — puede requerir una suscripción premium

### Claves API y Credenciales

Configura las claves API para las herramientas que las requieran:

1. Ve a **Gratis AI Agent → Settings → API Keys**
2. Introduce las credenciales para cada herramienta
3. Prueba la conexión
4. Guarda de forma segura

## Usando sd-ai-agent/site-scrape

### Uso Básico

Pídele a Theme Builder que analice un sitio web:

```
Analiza el diseño del sitio de mi competidor en competitor.com
y sugiere mejoras de diseño para mi sitio.
```

### Análisis Específico

Solicita tipos específicos de análisis:

```
Extrae la paleta de colores de example.com y úsala como inspiración.
```

```
Analiza la estructura de navegación de example.com y aplica una organización similar
a mi sitio.
```

```
Verifica la adaptabilidad móvil de example.com y asegúrate de que mi sitio
sea igualmente adaptable.
```

### Análisis Comparativo

Compara múltiples sitios:

```
Compara los diseños de site1.com y site2.com y crea un diseño
que combine los mejores elementos de ambos.
```

## Limitaciones y Consideraciones de las Herramientas

### Limitación de Tasa (Rate Limiting)

- El rastreo está limitado para evitar la sobrecarga del servidor
- Múltiples solicitudes al mismo sitio pueden ser limitadas
- Los sitios grandes pueden tardar más en analizar

### Precisión del Contenido

- El contenido dinámico puede no capturarse por completo
- El contenido renderizado con JavaScript puede estar incompleto
- Los datos en tiempo real pueden no reflejarse
- Algunos contenidos pueden estar detrás de muros de pago

### Consideraciones Legales y Éticas

- Respeta robots.txt y las políticas del sitio
- No rastrees contenido con derechos de autor para reproducirlo
- Usa el análisis como inspiración, no como copia
- Verifica que tienes derechos para usar el contenido extraído
- Sigue los términos de servicio de los sitios analizados

### Impacto en el Rendimiento

- Rastrear sitios grandes puede llevar tiempo
- Múltiples rastreos simultáneos pueden ser más lentos
- La conectividad de red afecta la velocidad
- Los grandes conjuntos de datos pueden requerir más procesamiento

## Mejores Prácticas

### Uso del Análisis de Sitios

1. **Analiza varios sitios** — recopila inspiración de varias fuentes
2. **Concéntrate en la estructura** — aprende patrones de diseño y organización
3. **Extrae colores** — usa paletas de colores como punto de partida
4. **Estudia la tipografía** — identifica combinaciones de fuentes que te gusten
5. **Revisa la navegación** — comprende la organización del menú

### Rastreo Ético

1. **Respeta robots.txt** — sigue las pautas del sitio
2. **No copies contenido** — usa el análisis solo como inspiración
3. **Verifica derechos** — asegúrate de poder usar el contenido extraído
4. **Atribuye fuentes** — da crédito a las fuentes de inspiración
5. **Sigue términos** — cumple con los términos de servicio del sitio

### Maximizar la Efectividad de las Herramientas

1. **Sé específico** — solicita tipos específicos de análisis
2. **Proporciona contexto** — explica el propósito de tu sitio
3. **Establece expectativas** — describe tus objetivos de diseño
4. **Itera** — refina basándote en los resultados
5. **Combina herramientas** — usa varias herramientas para un análisis completo

## Solución de Problemas

### El Sitio No se Rastrea

- Comprueba si el sitio es de acceso público
- Verifica que robots.txt permita el rastreo
- Intenta con otro sitio
- Comprueba la conexión a internet
- Contacta con soporte si el problema persiste

### Análisis Incompleto

- El sitio puede tener contenido dinámico
- JavaScript puede no estar completamente renderizado
- Los sitios grandes pueden agotar el tiempo (timeout)
- Intenta analizar páginas específicas en su lugar
- Solicita tipos de análisis específicos

### Rendimiento Lento

- Los sitios grandes tardan más en analizar
- Múltiples rastreos simultáneos son más lentos
- La conectividad de red afecta la velocidad
- Intenta hacerlo en horas de baja actividad
- Analiza secciones más pequeñas primero

## Documentación Relacionada

- [Discovery Interview](./discovery-interview.md) — recopila información de diseño
- [Design Direction](./design-direction.md) — refina tu diseño
- [Hospitality Menus](./hospitality-menus.md) — crea páginas de menú
