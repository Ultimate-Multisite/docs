---
title: 'Lección 8: Incorporación de Clientes'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lección 8: Incorporación de Clientes (Onboarding) {#lesson-8-customer-onboarding}

Lograr que un cliente se registre es solo la mitad del trabajo. Si inician sesión, se sienten abrumados y nunca regresan, los has perdido. Esta lección diseña la experiencia que convierte un nuevo registro en un cliente activo y comprometido.

## Dónde nos quedamos {#where-we-left-off}

FitSite está completamente personalizado con un flujo de pago funcional. Ahora nos centraremos en lo que sucede después de que el propietario de un estudio de fitness completa el registro y aterriza en su nuevo sitio por primera vez.

## Por qué es importante el Onboarding {#why-onboarding-matters}

Los primeros 30 minutos después del registro determinan si un cliente se queda o si abandona. Un propietario de un estudio de fitness que:

- Inicia sesión y ve un sitio que ya parece un sitio web de fitness → se queda
- Sabe exactamente qué hacer después → se queda
- Se siente perdido en un dashboard genérico de WordPress → se va

Tus plantillas de nicho (Lección 4) manejan el primer punto. Esta lección maneja el segundo.

## La experiencia del primer inicio de sesión {#the-first-login-experience}

### Widget de Dashboard de Bienvenida {#welcome-dashboard-widget}

Crea un widget de dashboard personalizado que dé la bienvenida a los nuevos clientes y los guíe a través de la configuración. Esto debe aparecer de manera prominente cuando inicien sesión por primera vez.

**Inicio Rápido de FitSite:**

1. **Añade el nombre y el logo de tu estudio** -- Enlace a Configuración de Personalizador o Identidad del Sitio
2. **Actualiza tu horario de clases** -- Enlace directo al editor de la página de Clases
3. **Añade tus entrenadores** -- Enlace al editor de la página de Entrenadores
4. **Establece tus datos de contacto** -- Enlace al editor de la página de Contacto
5. **Previsualiza tu sitio** -- Enlace al frontend

Cada paso enlaza directamente a la página o configuración relevante. Sin tener que buscar en menús.

### Simplificar el Dashboard {#simplify-the-dashboard}

Los nuevos clientes no necesitan ver todos los elementos del menú de WordPress. Considera:

- Ocultar elementos de menú que no son relevantes para la gestión de sitios de fitness (por ejemplo, Comentarios si no se usan)
- Reordenar el menú para poner los elementos más utilizados primero
- Añadir etiquetas de menú personalizadas que tengan sentido para el nicho ("Tu Estudio" en lugar de "Apariencia")

El addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) puede ayudar a controlar lo que ven los clientes.

## Secuencia de correo electrónico de bienvenida {#welcome-email-sequence}

Un solo correo electrónico de bienvenida no es suficiente. Configura una secuencia que guíe a los clientes durante su primera semana:

### Correo electrónico 1: Bienvenida (Inmediatamente después del registro) {#email-1-welcome-immediately-after-signup}

- Asunto: "Bienvenido a FitSite: tu sitio web de estudio está activo"
- Contenido: Enlace de inicio de sesión, pasos de inicio rápido, enlace a recursos de ayuda
- Tono: Entusiasmado, alentador, específico de fitness

### Correo electrónico 2: Ganancias Rápidas (Día 1) {#email-2-quick-wins-day-1}

- Asunto: "3 cosas que hacer primero en tu FitSite"
- Contenido: Añadir tu logo, actualizar la imagen principal de la página de inicio, añadir tu horario de clases
- Incluye capturas de pantalla que muestren exactamente dónde hacer clic

### Correo electrónico 3: Hazlo Tuyo (Día 3) {#email-3-make-it-yours-day-3}

- Asunto: "Haz que tu sitio de fitness destaque"
- Contenido: Personalizar colores, añadir fotos de entrenadores, escribir la historia de tu estudio
- Enlace a ejemplos de excelentes sitios de fitness en la plataforma

### Correo electrónico 4: En Vivo (Día 7) {#email-4-go-live-day-7}

- Asunto: "¿Listo para compartir tu FitSite con el mundo?"
- Contenido: Lista de verificación de lo que verificar antes de compartir, cómo conectar un dominio personalizado (si está en Growth/Pro), consejos para compartir en redes sociales

:::tip Automatización de correos electrónicos
Utiliza [Webhooks](/user-guide/integrations/webhooks) o [Zapier](/user-guide/integrations/zapier) para activar estos correos electrónicos a través de tu plataforma de marketing por correo electrónico. Esto te da más control sobre el momento y te permite rastrear el compromiso.
:::

## Recursos de ayuda {#help-resources}

Crea contenido de ayuda específico del nicho que responda a las preguntas que realmente hacen los propietarios de estudios de fitness:

### Artículos de Base de Conocimiento {#knowledge-base-articles}

- "Cómo actualizar tu horario de clases"
- "Añadir y editar perfiles de entrenadores"
- "Cambiar el logo y los colores de tu estudio"
- "Conectar tu propio nombre de dominio" (para clientes Growth/Pro)
- "Añadir un widget de reserva a tu sitio"

Escríbelos para usuarios no técnicos. Usa capturas de pantalla. Evita la jerga de WordPress.

### Tutoriales en video {#video-walkthroughs}

Grabaciones de pantalla cortas (de 2 a 3 minutos) que muestren:

- Primer inicio de sesión y orientación
- Edición de la página de inicio
- Actualización del horario de clases
- Añadir un nuevo entrenador

Estos no necesitan ser producciones pulidas. Lo importante es que sean claros, útiles y específicos del nicho.

## La página de cuenta {#the-account-page}

Ultimate Multisite incluye una [Página de Cuenta](/user-guide/client-management/account-page) visible para el cliente donde gestionan su suscripción. Personaliza esto para:

- Mostrar su plan actual de FitSite
- Mostrar opciones de mejora con beneficios específicos de fitness
- Proporcionar historial de facturación y descargas de facturas
- Enlazar a recursos de ayuda

## Midiendo el éxito del Onboarding {#measuring-onboarding-success}

Rastrea estos indicadores para saber si tu proceso de incorporación está funcionando:

- **Tasa de activación**: ¿Qué porcentaje de registros personaliza realmente su sitio en la primera semana?
- **Inicios de sesión de la primera semana**: ¿Cuántas veces inicia sesión un nuevo cliente durante su primera semana?
- **Tickets de soporte de nuevos clientes**: Un volumen alto significa que tu onboarding tiene lagunas
- **Conversión de prueba a pago**: Si ofreces pruebas, ¿qué porcentaje convierte?

## El estado de la red FitSite {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Una experiencia guiada de primer inicio de sesión** con un widget de Inicio Rápido
- **Un dashboard simplificado** centrado en tareas de gestión de sitios de fitness
- **Una secuencia de correo electrónico de bienvenida** que guía a los clientes durante su primera semana
- **Recursos de ayuda específicos del nicho** escritos para propietarios de estudios de fitness no técnicos
- **Métricas de onboarding** para rastrear y mejorar la experiencia

---

**Siguiente:** [Lección 9: Precios para obtener ganancias](lesson-9-pricing) -- refinamos la estrategia de precios para maximizar los ingresos y minimizar el abandono.
