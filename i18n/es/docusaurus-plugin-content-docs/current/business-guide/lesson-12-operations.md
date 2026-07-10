---
title: 'Lección 12: Dirigiendo el negocio'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lección 12: Gestionando el Negocio {#lesson-12-running-the-business}

Una plataforma no es un proyecto que se termina, sino un negocio que hay que gestionar. Esta lección cubre las operaciones diarias de administración de FitSite: soporte, facturación, mantenimiento y cómo mantener contentos a los clientes.

## Dónde nos quedamos {#where-we-left-off}

FitSite ya está activo y los clientes se están registrando. Ahora necesitas gestionar la operación de manera sostenible.

## Operaciones Diarias {#daily-operations}

### Monitoreo {#monitoring}

Revisa estos datos a diario (o configura alertas):

- **Tiempo de actividad (Uptime)**: ¿Está accesible la plataforma? Utiliza un servicio de monitoreo de disponibilidad.
- **Nuevos registros**: ¿Cuántos clientes nuevos se registraron hoy?
- **Pagos fallidos**: ¿Hay fallos de pago que requieran atención?
- **Solicitudes de soporte**: ¿Hay preguntas de clientes sin respuesta?

### Soporte al Cliente {#customer-support}

Tu enfoque de nicho es una ventaja aquí. Dado que todos tus clientes son estudios de fitness, verás las mismas preguntas repetidamente:

**Preguntas comunes que recibirás:**

- "¿Cómo actualizo mi horario de clases?"
- "¿Puedo cambiar los colores de mi sitio?"
- "¿Cómo añado un nuevo entrenador a mi sitio?"
- "Mi dominio no funciona"
- "¿Cómo cancelo/actualizo mi plan?"

Crea tu base de conocimientos (empezada en la Lección 8) en torno a estas preguntas recurrentes. Cada ticket de soporte que podría ser un artículo de la base de conocimientos es una señal para escribir ese artículo.

### Niveles de Soporte {#support-tiers}

A medida que creces, estructura el soporte según el plan:

| Plan | Nivel de Soporte | Tiempo de Respuesta |
|------|--------------|---------------|
| Starter | Base de conocimientos + correo electrónico | 48 horas |
| Growth | Soporte por correo electrónico | 24 horas |
| Pro | Correo electrónico prioritario + llamada de incorporación | 4 horas |

El [Addon de Tickets de Soporte](/addons/support-tickets) puede ayudarte a gestionar las solicitudes de soporte dentro de la plataforma.

## Operaciones de Facturación {#billing-operations}

### Pagos Recurrentes {#recurring-payments}

Ultimate Multisite gestiona la facturación recurrente automáticamente a través de tu pasarela de pago. Tu trabajo es monitorear lo siguiente:

- **Pagos fallidos**: Haz un seguimiento rápido. La mayoría de los fallos se deben a tarjetas caducadas, no a cancelaciones intencionales.
- **Dunning**: Configura una lógica de reintento automatizada a través de tu pasarela de pago (Stripe lo maneja muy bien).
- **Solicitudes de cancelación**: Entiende por qué se van los clientes. Cada cancelación es una opinión.

### Gestión de Membresías {#managing-memberships}

Navega a **Ultimate Multisite > Memberships** para:

- Ver todas las suscripciones activas
- Gestionar solicitudes de mejora o reducción de plan
- Procesar reembolsos cuando sea necesario
- Administrar expiraciones de prueba

Consulta [Gestionar Membresías](/user-guide/administration/managing-memberships) para la referencia completa.

### Facturación {#invoicing}

Asegúrate de que las facturas se generen correctamente para cada pago. Los clientes pueden necesitar facturas para reportar gastos comerciales. Consulta [Gestionar Pagos y Facturas](/user-guide/administration/managing-payments-and-invoices).

## Mantenimiento de la Plataforma {#platform-maintenance}

### Actualizaciones de WordPress y Plugins {#wordpress-and-plugin-updates}

Como administrador de la red, eres responsable de:

- **Actualizaciones del núcleo de WordPress**: Pruébalas en un sitio de prueba antes de aplicarlas a producción.
- **Actualizaciones de plugins**: Lo mismo: probar primero y luego aplicar en toda la red.
- **Actualizaciones de temas**: Verifica que las plantillas sigan luciendo correctas después de las actualizaciones de temas.
- **Actualizaciones de Ultimate Multisite**: Sigue el registro de cambios y pruébalas antes de actualizar.

:::warning Nunca actualizar en producción sin probar
Una actualización fallida afecta a todos los sitios de clientes de tu red. Prueba siempre las actualizaciones primero en una copia de prueba de tu red.
:::

### Seguridad {#security}

- Mantén todo el software actualizado
- Usa contraseñas fuertes y autenticación de dos factores para las cuentas de administrador
- Monitorea la actividad sospechosa
- Ten un plan para incidentes de seguridad

### Rendimiento {#performance}

A medida que crece tu red, monitorea:

- **Tiempos de carga de páginas**: ¿Son rápidos los sitios de los clientes?
- **Uso de recursos del servidor**: CPU, memoria, espacio en disco
- **Rendimiento de la base de datos**: Las redes grandes necesitan optimización de la base de datos con el tiempo

Considera implementar caché (caché de página, caché de objetos) y una CDN si aún no lo has hecho. La [integración de Cloudflare](/user-guide/host-integrations/cloudflare) maneja gran parte de esto.

## Gestión del Ciclo de Vida del Cliente {#customer-lifecycle-management}

### Reducción de la Tasa de Abandono (Churn) {#reducing-churn}

El *churn* es el porcentaje de clientes que cancelan cada mes. Para un negocio de suscripción, reducir la tasa de abandono es tan importante como adquirir nuevos clientes.

**Razones comunes por las que los clientes de estudios de fitness abandonan:**

- No pudieron averiguar cómo usar la plataforma → mejorar la incorporación (onboarding)
- El sitio no se veía lo suficientemente bien → mejorar las plantillas
- No vieron valor → mejorar las funciones o la comunicación
- Encontraron una alternativa más barata → reforzar el valor de tu nicho
- Cerraron su negocio → inevitable, pero rastrea esto por separado

### Fomentar las Actualizaciones {#encouraging-upgrades}

Se debe animar a los clientes de Starter que lo están haciendo bien a que actualicen:

- Cuando alcancen los límites del plan (sitios, almacenamiento), muestra recordatorios de actualización.
- Envía correos electrónicos dirigidos destacando las funciones del plan Growth que les beneficiarían.
- Muestra lo que han construido los clientes de Growth/Pro.

### Campañas de Recuperación (Win-Back) {#win-back-campaigns}

Cuando un cliente cancela:

1. Pregunta por qué (encuesta de salida o correo electrónico).
2. Aborda su preocupación si es posible.
3. Ofrece un descuento para que regresen (30-60 días después de la cancelación).

## Rutinas Semanales y Mensuales {#weekly-and-monthly-routines}

### Semanal {#weekly}

- Revisar nuevos registros y cancelaciones.
- Responder a todos los tickets de soporte abiertos.
- Comprobar el rendimiento y el tiempo de actividad de la plataforma.
- Revisar cualquier pago fallido.

### Mensual {#monthly}

- Analizar métricas clave (MRR, *churn*, nuevos clientes, actualizaciones).
- Aplicar actualizaciones de WordPress y plugins (después de la prueba en el entorno de prueba).
- Revisar y actualizar la base de conocimientos basándose en los patrones de soporte.
- Enviar un boletín o actualización a los clientes (nuevas funciones, consejos, noticias de la industria del fitness).

### Trimestral {#quarterly}

- Revisar la estructura de precios en comparación con la competencia y los comentarios de los clientes.
- Evaluar los diseños de las plantillas: ¿necesitan actualizarse?
- Evaluar la capacidad de alojamiento: ¿necesitas escalar?
- Revisar y mejorar la incorporación (onboarding) basándose en los datos de activación.

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Rutinas de monitoreo diarias** para tiempo de actividad, registros, pagos y soporte.
- **Una estructura de soporte por niveles** adaptada a los niveles del plan.
- **Operaciones de facturación** que incluyen *dunning* y manejo de cancelaciones.
- **Procedimientos de mantenimiento** para actualizaciones, seguridad y rendimiento.
- **Estrategias de reducción de la tasa de abandono** específicas para el nicho fitness.
- **Rutinas operativas semanales, mensuales y trimestrales**.

---

**Siguiente:** [Lección 13: Escalando](lesson-13-growth) — hacer crecer FitSite de una operación pequeña a un negocio real.
