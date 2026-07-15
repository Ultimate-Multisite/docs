---
title: 'Lección 5: Diseñando tus planes'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lección 5: Diseñando tus Planes

Tus niveles de planes no son solo niveles de precios; son un reflejo de cómo operan realmente los clientes de tu nicho. En esta lección diseñarás niveles de productos que se ajusten a las necesidades reales de los negocios de fitness en diferentes etapas.

## Donde nos quedamos {#where-we-left-off}

FitSite tiene tres plantillas listas (Studio Essential, Gym Pro, Fitness Chain). Ahora crearemos los planes que determinan a qué tienen acceso los clientes y cuánto pagan.

## Pensando en Segmentos de Clientes {#thinking-in-customer-segments}

El error que comete la mayoría de la gente es diseñar planes basándose en características técnicas (almacenamiento, ancho de banda, número de páginas). Tus clientes de nicho no piensan en esos términos. Un dueño de gimnasio piensa en lo que necesita para hacer funcionar su negocio.

Para los estudios de fitness, existen tres segmentos naturales:

| Segmento | Quiénes son | Qué necesitan |
|---------|-------------|----------------|
| **Entrenadores individuales / estudios pequeños** | 1-3 empleados, ubicación única, recién comenzando | Un sitio profesional, información de clases, formulario de contacto |
| **Gimnasios establecidos** | 5-20 empleados, ubicación única, en crecimiento | Todo lo anterior más reservas, blog, galería, dominio personalizado |
| **Cadenas de fitness** | Múltiples ubicaciones, marca establecida | Todo lo anterior más multisitio, páginas de ubicación, directorio de personal |

Tus planes deben mapearse a estos segmentos, no a paquetes de características arbitrarios.

## Creando los Planes de FitSite {#creating-the-fitsite-plans}

Navega a **Ultimate Multisite > Products > Add Product** para cada plan.

### Plan 1: FitSite Starter -- $49/mes {#plan-1-fitsite-starter----49month}

**Objetivo**: Entrenadores individuales y estudios pequeños

**Pestaña Descripción**:
- Nombre: FitSite Starter
- Descripción: "Todo lo que necesita un entrenador personal o un estudio pequeño para verse profesional en línea."

**Pestaña General**:
- Tipo de producto: Plan
- Rol del cliente: Administrador

**Pestaña Plantillas de Sitio**:
- Permitir plantillas de sitio: Habilitado
- Plantillas disponibles: Solo Studio Essential

**Limitaciones**:
- Sitios: 1
- Espacio en disco: 1 GB
- Dominio personalizado: Deshabilitado (usa `studioname.fitsite.com`)

**Pestaña Plugins**:
- Plugin de formulario de contacto: Activar forzosamente
- Plugin de SEO: Activar forzosamente
- Plugin de reservas: No disponible (incentivo de mejora)

**Pestaña Temas**:
- Tu tema seleccionado: Activar forzosamente
- Otros temas: Ocultos

### Plan 2: FitSite Growth -- $99/mes {#plan-2-fitsite-growth----99month}

**Objetivo**: Gimnasios establecidos de ubicación única

**Pestaña Descripción**:
- Nombre: FitSite Growth
- Descripción: "Para gimnasios establecidos listos para hacer crecer su presencia en línea y atraer nuevos miembros."

**Pestaña Plantillas de Sitio**:
- Plantillas disponibles: Studio Essential y Gym Pro

**Limitaciones**:
- Sitios: 1
- Espacio en disco: 5 GB
- Dominio personalizado: Habilitado

**Pestaña Plugins**:
- Todo lo de Starter, más:
- Plugin de reservas: Activar forzosamente
- Plugin de galería: Activar forzosamente
- Funcionalidad de blog: Disponible

**Pestaña Actualizaciones y Degradaciones**:
- Grupo de planes: FitSite Plans
- Orden del producto: 2

### Plan 3: FitSite Pro -- $199/mes {#plan-3-fitsite-pro----199month}

**Objetivo**: Cadenas de fitness de múltiples ubicaciones

**Pestaña Descripción**:
- Nombre: FitSite Pro
- Descripción: "La plataforma completa para marcas de fitness con múltiples ubicaciones."

**Pestaña Plantillas de Sitio**:
- Plantillas disponibles: Las tres plantillas

**Limitaciones**:
- Sitios: 5 (uno por ubicación)
- Espacio en disco: 20 GB
- Dominio personalizado: Habilitado

**Pestaña Plugins**:
- Todo lo de Growth, más:
- Todos los plugins premium: Activar forzosamente

**Pestaña Actualizaciones y Degradaciones**:
- Grupo de planes: FitSite Plans
- Orden del producto: 3

## Configurando el Grupo de Planes {#setting-up-the-plan-group}

El grupo de planes garantiza que los clientes solo puedan mejorar o degradar dentro de la familia de planes FitSite. En la pestaña **Up & Downgrades** de cada plan:

1. Establece el **Plan Group** en "FitSite Plans" para los tres planes.
2. Establece el **Product Order** en 1 (Starter), 2 (Growth), 3 (Pro).

Esto crea una trayectoria de mejora clara: Starter → Growth → Pro.

## Añadiendo Complementos de Compra {#adding-order-bumps}

Los complementos de compra (order bumps) son productos adicionales ofrecidos durante el proceso de pago. Para FitSite, considera:

- **Paquete de Almacenamiento Extra** ($19/mes) -- 5 GB adicionales de espacio en disco
- **Soporte Prioritario** ($29/mes) -- tiempos de respuesta más rápidos
- **Sitio Adicional** ($39/mes) -- para clientes que necesitan más sitios de los que permite su plan

Crea estos como productos de tipo **Package** en Ultimate Multisite y asígnalos a los planes relevantes.

## Por Qué Funciona Esta Estructura {#why-this-structure-works}

- **Starter** elimina las barreras de entrada: precio bajo, oferta simple, pone a los entrenadores en línea rápidamente.
- **Growth** añade las características que los gimnasios realmente solicitan: reservas, galerías, dominios personalizados.
- **Pro** atiende al segmento de alto valor que necesita soporte multi-ubicación.
- **Complementos de compra** permiten a los clientes personalizar sin complicar los planes principales.
- **Trayectoria de mejora clara** significa que los clientes crecen contigo en lugar de irse.

## La Red FitSite hasta ahora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Tres niveles de planes** mapeados a segmentos reales de negocios de fitness.
- **Control de características** usando los controles de plugins y plantillas de Ultimate Multisite.
- **Un grupo de planes** con una trayectoria de mejora clara.
- **Productos complementarios de compra** para ingresos adicionales.
- **Una estructura de precios** basada en el valor del cliente, no en especificaciones técnicas.

---

**Siguiente:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- construiremos un flujo de pago que convierta a los dueños de estudios de fitness en clientes de pago.
