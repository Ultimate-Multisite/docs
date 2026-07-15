---
title: 'Lección 7: Hazlo Tuyo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lección 7: Personalizándolo para Ti

Tus clientes nunca deben sentir que están usando "un plugin de WordPress". Deben sentir que están usando FitSite, una plataforma construida para su industria. Esta lección cubre el *branding*, el *white-labeling* y cómo hacer que la plataforma se sienta como un producto propio.

## Donde nos quedamos {#where-we-left-off}

FitSite tiene un flujo de pago funcional que lleva a los dueños de estudios de fitness desde la selección de planes hasta un sitio web activo. Ahora haremos que toda la experiencia se sienta como un producto cohesivo y con marca.

## El Dominio de tu Plataforma {#your-platform-domain}

La base de tu marca es tu dominio. Para FitSite:

- **Dominio principal**: `fitsite.com` (tu sitio de marketing y raíz de la red)
- **Sitios de clientes**: `nombreestudio.fitsite.com` (subdominios)
- **Dominios personalizados**: Los clientes con planes Growth y Pro pueden mapear su propio dominio

### Configuración de tu Dominio {#setting-up-your-domain}

1. Registra tu dominio de plataforma
2. Conéctalo a tu proveedor de hosting
3. Configura DNS comodín (`*.fitsite.com`) para los subdominios de los clientes
4. Asegúrate de que el SSL comodín esté activo

Consulta [Cómo configurar el mapeo de dominios](/user-guide/domain-mapping/how-to-configure-domain-mapping) para obtener instrucciones detalladas.

## White-Labeling la Experiencia de Administración {#white-labeling-the-admin-experience}

Cuando un dueño de estudio de fitness inicia sesión en el *dashboard* de su sitio, debe ver tu marca, no el *branding* de WordPress o Ultimate Multisite.

### Página de Inicio de Sesión Personalizada {#custom-login-page}

Personaliza la página de inicio de sesión de WordPress para mostrar:

- Tu logo de FitSite
- Imágenes de fondo apropiadas para el sector fitness
- Los colores de tu marca

### Branding del Dashboard {#dashboard-branding}

Utiliza el *addon* [Admin Page Creator](/addons/admin-page-creator) o CSS personalizado para:

- Reemplazar el logo de WordPress con el logo de FitSite
- Personalizar la paleta de colores del administrador para que coincida con tu marca
- Añadir un *widget* de *dashboard* personalizado con enlaces rápidos y recursos de ayuda específicos para el sector fitness

### Páginas de Administración Personalizadas {#custom-admin-pages}

Considera crear páginas de administración personalizadas que muestren las acciones más relevantes para los dueños de estudios de fitness:

- "Editar tu horario de clases"
- "Actualizar perfiles de entrenadores"
- "Ver tu sitio"

Esto reduce la curva de aprendizaje al colocar acciones relevantes para el nicho en primer plano, en lugar de enterrarlas en el menú estándar de WordPress.

## Branding de tus Comunicaciones {#branding-your-communications}

Cada correo electrónico, factura y notificación debe reforzar tu marca.

### Correos Electrónicos del Sistema {#system-emails}

Navega a **Ultimate Multisite > Settings > Emails** y personaliza todos los correos electrónicos del sistema:

- **Nombre de remitente**: FitSite
- **Correo electrónico de remitente**: hello@fitsite.com
- **Plantillas de correo electrónico**: Usa los colores y el logo de tu marca
- **Idioma**: Específico para fitness en todo el contenido

Correos electrónicos clave para personalizar:

| Email | Versión Genérica | Versión FitSite |
|-------|----------------|-----------------|
| Bienvenida | "Tu nuevo sitio está listo" | "Tu sitio web de estudio de fitness está activo" |
| Recibo de pago | "Pago recibido" | "Pago de suscripción de FitSite confirmado" |
| Prueba por terminar | "Tu prueba está por terminar pronto" | "Tu prueba de FitSite termina en 3 días: mantén tu sitio web de estudio activo" |

### Facturas {#invoices}

Personaliza las plantillas de facturas con:

- Tu logo y colores de marca de FitSite
- Tus detalles comerciales
- Nombres de productos específicos para fitness (no IDs de planes genéricos)

## El Sitio Visible para el Cliente {#the-customer-facing-site}

Tu dominio principal (`fitsite.com`) necesita un sitio de marketing que venda la plataforma. Esto es separado de la administración de la red Ultimate Multisite; es la cara pública de tu negocio.

Páginas clave:

- **Página de inicio**: Propuesta de valor clara para negocios de fitness
- **Características**: Lo que hace FitSite, en términos de fitness
- **Precios**: Tus tres planes con comparaciones de características específicas del nicho
- **Ejemplos**: Muestra sitios construidos en la plataforma
- **Registro**: Enlaces a tu formulario de pago

:::tip Tu Sitio de Marketing Puede Ser un Sitio de Red
Crea tu sitio de marketing como un sitio dentro de tu propia red. Esto te permite gestionarlo desde el mismo *dashboard* y demuestra las capacidades de tu propia plataforma.
:::

## Dominio Personalizado para Clientes {#custom-domain-for-customers}

Para los clientes con planes que incluyen dominios personalizados, documenta el proceso claramente:

1. El cliente registra o transfiere su dominio a un registrador
2. El cliente actualiza el DNS para que apunte a tu plataforma (proporciona registros exactos)
3. Ultimate Multisite maneja el mapeo de dominios y el SSL

Crea un artículo de ayuda o una entrada de base de conocimientos específicamente para este proceso, escrito para dueños de estudios de fitness no técnicos.

## La Red FitSite hasta ahora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (modo subdominio)
├── Ultimate Multisite (configurado + con marca)
├── Dominio de Plataforma (fitsite.com + SSL comodín)
├── Plantillas de Sitio (Studio Essential, Gym Pro, Fitness Chain)
├── Productos (Starter, Growth, Pro + Order Bumps)
├── Flujo de Pago (específico del nicho, probado)
├── Branding
│   ├── Página de inicio de sesión personalizada
│   ├── Dashboard de administración con marca
│   ├── Correos electrónicos del sistema específicos del nicho
│   ├── Facturas con marca
│   └── Sitio de marketing en fitsite.com
└── Listo para flujo de incorporación (próxima lección)
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Dominio de plataforma y DNS** configurados para una experiencia con marca
- **Administración *white-labeled*** con *branding* de FitSite en todo el sistema
- **Comunicaciones personalizadas**: correos electrónicos, facturas y notificaciones con la marca
- **Un sitio de marketing** que vende FitSite a dueños de estudios de fitness
- **Documentación de dominios personalizados** para clientes que desean su propio dominio

---

**Siguiente:** [Lección 8: Incorporación de Clientes](lesson-8-onboarding) — diseñamos la experiencia que convierte un nuevo registro en un cliente activo y feliz.
