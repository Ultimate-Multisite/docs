---
title: Herramientas y configuración
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Herramientas y configuración

Theme Builder usa un conjunto de herramientas para analizar, diseñar y crear tu sitio WordPress. En la versión 1.16.0, **sd-ai-agent/site-scrape ahora es una herramienta Tier 1**, lo que la hace disponible de forma predeterminada en Theme Builder. Superdav AI Agent v1.18.0 también introduce un paquete Advanced complementario distribuido por separado para flujos de trabajo de desarrolladores de confianza; esas herramientas no forman parte del paquete principal de WordPress.org y deben instalarse y autorizarse por separado.

## Herramientas disponibles {#available-tools}

### Herramientas Tier 1 (siempre disponibles) {#tier-1-tools-always-available}

Las herramientas Tier 1 están disponibles de forma predeterminada en Theme Builder sin ninguna configuración adicional.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Propósito:** Analizar sitios web existentes para extraer inspiración de diseño, estructura de contenido y funcionalidad.

**Capacidades:**

- **Análisis de sitios web** — rastrea y analiza sitios web de competidores o de inspiración
- **Extracción de diseño** — identifica colores, fuentes y patrones de diseño
- **Estructura de contenido** — comprende la organización y jerarquía de las páginas
- **Detección de características** — identifica plugins y funcionalidad
- **Análisis de rendimiento** — comprueba la velocidad de la página y la optimización
- **Análisis SEO** — revisa etiquetas meta y datos estructurados

**Uso:**

```
Analiza el diseño de example.com y úsalo como inspiración para mi sitio.
```

**Lo que extrae:**

- Paleta de colores y uso del color
- Tipografía (fuentes y tamaños)
- Estructura de diseño y espaciado
- Patrones de navegación
- Organización del contenido
- Uso de imágenes y medios
- Elementos interactivos
- Adaptabilidad móvil

**Limitaciones:**

- No puede rastrear sitios protegidos con contraseña
- Respeta robots.txt y las políticas del sitio
- Puede no capturar contenido dinámico
- Los sitios con mucho JavaScript pueden tener un análisis limitado
- Los sitios grandes pueden tardar más en analizarse

### Herramientas Tier 2 (opcionales) {#tier-2-tools-optional}

Las herramientas Tier 2 están disponibles cuando se habilitan explícitamente en la configuración de Theme Builder.

#### Analítica avanzada {#advanced-analytics}

Proporciona métricas de rendimiento detalladas:

- Tiempos de carga de página
- Core Web Vitals
- Puntuación SEO
- Puntuación de accesibilidad
- Puntuación de buenas prácticas

#### Optimizador de contenido {#content-optimizer}

Analiza y sugiere mejoras para:

- Legibilidad
- Optimización SEO
- Uso de palabras clave
- Estructura de contenido
- Ubicación de llamadas a la acción

### Herramientas Tier 3 (Premium) {#tier-3-tools-premium}

Las herramientas Tier 3 requieren configuración adicional o características premium.

#### Generador de contenido con IA {#ai-content-generator}

Genera contenido para:

- Descripciones de productos
- Páginas de servicios
- Entradas de blog
- Meta descripciones
- Texto de llamada a la acción

#### Herramientas de diseño avanzadas {#advanced-design-tools}

Proporciona capacidades de diseño avanzadas:

- Generación de CSS personalizado
- Creación de animaciones
- Diseño de elementos interactivos
- Teoría avanzada del color
- Optimización de tipografía

### Herramientas Advanced complementarias (paquete separado) {#advanced-companion-tools-separate-package}

El paquete Advanced complementario se distribuye por separado de la versión principal de Superdav AI Agent. Está destinado a entornos de desarrolladores y propietarios de sitios de confianza donde los administradores permiten explícitamente que el agente use herramientas de alto impacto.

Las capacidades Advanced complementarias pueden incluir:

- **Herramientas de sistema de archivos** — inspeccionan y modifican archivos aprobados en entornos de confianza
- **Herramientas de base de datos** — consultan o actualizan datos del sitio cuando se autorizan explícitamente
- **Herramientas WP-CLI** — ejecutan comandos de mantenimiento e inspección de WordPress
- **Herramientas de despachador REST** — llaman a endpoints REST registrados mediante flujos de trabajo de despacho controlados
- **Herramientas de creación de plugins** — generan estructuras iniciales e iteran sobre código de plugins
- **Herramientas de instantáneas Git** — crean instantáneas antes de operaciones de desarrollador arriesgadas
- **Herramientas de gestión de usuarios** — ayudan a revisar o ajustar registros de usuarios donde esté permitido
- **Herramientas de benchmark** — ejecutan benchmarks de rendimiento o capacidades para revisión de desarrollo

No documentes estas herramientas como herramientas de Theme Builder generalmente disponibles para cada instalación. Solo están disponibles cuando el paquete Advanced complementario está instalado, habilitado y restringido a administradores de confianza.

## Configuración de herramientas {#tool-configuration}

### Habilitar herramientas {#enabling-tools}

Para habilitar herramientas adicionales en Theme Builder:

1. Navega a **Gratis AI Agent → Settings**
2. Ve a **Theme Builder → Tools**
3. Activa o desactiva herramientas según sea necesario
4. Guarda la configuración

### Permisos de herramientas {#tool-permissions}

Algunas herramientas requieren permisos:

- **Rastreo de sitios** — requiere acceso a internet
- **Analítica** — requiere integración con Google Analytics
- **Generación de contenido** — requiere API keys
- **Características avanzadas** — pueden requerir una suscripción premium
- **Herramientas Advanced complementarias** — requieren el paquete Advanced distribuido por separado y confianza explícita del administrador

### API keys y credenciales {#api-keys-and-credentials}

Configura API keys para las herramientas que las requieran:

1. Ve a **Gratis AI Agent → Settings → API Keys**
2. Introduce las credenciales para cada herramienta
3. Prueba la conexión
4. Guarda de forma segura

### Instalar el paquete Advanced complementario {#installing-the-advanced-companion-package}

El paquete Advanced complementario se publica por separado del ZIP principal de WordPress.org. Instálalo solo desde el canal oficial de distribución del proyecto para la versión y luego restringe el acceso a administradores de confianza. Revisa las puertas de aprobación humana y el comportamiento de instantáneas git antes de habilitar herramientas de sistema de archivos, base de datos, WP-CLI, despachador REST, creación de plugins, gestión de usuarios o benchmark en un sitio de producción.

## Uso de sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Uso básico {#basic-usage}

Pide a Theme Builder que analice un sitio web:

```
Analiza el diseño del sitio de mi competidor en competitor.com
y sugiere mejoras de diseño para mi sitio.
```

### Análisis específico {#specific-analysis}

Solicita tipos específicos de análisis:

```
Extrae la paleta de colores de example.com y úsala como inspiración.
```

```
Analiza la estructura de navegación de example.com y aplica una
organización similar a mi sitio.
```

```
Comprueba la adaptabilidad móvil de example.com y asegúrate de que mi sitio
sea igual de adaptable.
```

### Análisis comparativo {#comparison-analysis}

Compara varios sitios:

```
Compara los diseños de site1.com y site2.com y crea un diseño
que combine los mejores elementos de ambos.
```

## Limitaciones y consideraciones de las herramientas {#tool-limitations-and-considerations}

### Limitación de tasa {#rate-limiting}

- El scraping tiene límite de tasa para evitar la sobrecarga del servidor
- Varias solicitudes al mismo sitio pueden ser limitadas
- Los sitios grandes pueden tardar más en analizarse

### Precisión del contenido {#content-accuracy}

- Es posible que el contenido dinámico no se capture por completo
- El contenido renderizado con JavaScript puede estar incompleto
- Es posible que los datos en tiempo real no se reflejen
- Parte del contenido puede estar detrás de paywalls

### Consideraciones legales y éticas {#legal-and-ethical-considerations}

- Respeta robots.txt y las políticas del sitio
- No hagas scraping de contenido con derechos de autor para reproducirlo
- Usa el análisis como inspiración, no para copiar
- Verifica que tienes derechos para usar el contenido extraído
- Sigue los términos de servicio de los sitios analizados

### Impacto en el rendimiento {#performance-impact}

- Hacer scraping de sitios grandes puede llevar tiempo
- Varios scrapes simultáneos pueden ser más lentos
- La conectividad de red afecta la velocidad
- Los conjuntos de datos grandes pueden requerir más procesamiento

## Buenas prácticas {#best-practices}

### Uso del análisis del sitio {#using-site-analysis}

1. **Analiza varios sitios** — reúne inspiración de varias fuentes
2. **Céntrate en la estructura** — aprende patrones de diseño y organización
3. **Extrae colores** — usa paletas de colores como puntos de partida
4. **Estudia la tipografía** — identifica combinaciones de fuentes que te gusten
5. **Revisa la navegación** — comprende la organización del menú

### Scraping ético {#ethical-scraping}

1. **Respeta robots.txt** — sigue las directrices del sitio
2. **No copies contenido** — usa el análisis solo como inspiración
3. **Verifica los derechos** — asegúrate de que puedes usar el contenido extraído
4. **Atribuye las fuentes** — da crédito a las fuentes de inspiración
5. **Sigue los términos** — cumple con los términos de servicio del sitio

### Maximizar la eficacia de la herramienta {#maximizing-tool-effectiveness}

1. **Sé específico** — solicita tipos específicos de análisis
2. **Proporciona contexto** — explica el propósito de tu sitio
3. **Establece expectativas** — describe tus objetivos de diseño
4. **Itera** — perfecciona según los resultados
5. **Combina herramientas** — usa varias herramientas para un análisis completo

## Solución de problemas {#troubleshooting}

### El sitio no se puede scrapear {#site-wont-scrape}

- Comprueba si el sitio es accesible públicamente
- Verifica que robots.txt permite el scraping
- Prueba con un sitio diferente
- Comprueba la conexión a internet
- Contacta con soporte si el problema persiste

### Análisis incompleto {#incomplete-analysis}

- El sitio puede tener contenido dinámico
- Es posible que JavaScript no se renderice por completo
- Los sitios grandes pueden agotar el tiempo de espera
- Prueba a analizar páginas específicas en su lugar
- Solicita tipos de análisis específicos

### Rendimiento lento {#slow-performance}

- Los sitios grandes tardan más en analizarse
- Varios scrapes simultáneos son más lentos
- La conectividad de red afecta la velocidad
- Prueba durante horas de menor actividad
- Analiza primero secciones más pequeñas

## Documentación relacionada {#related-documentation}

- [Entrevista de descubrimiento](./discovery-interview.md) — recopila información de diseño
- [Dirección de diseño](./design-direction.md) — perfecciona tu diseño
- [Menús de hostelería](./hospitality-menus.md) — crea páginas de menú
