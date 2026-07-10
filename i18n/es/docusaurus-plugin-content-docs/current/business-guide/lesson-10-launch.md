---
title: 'Lección 10: Día de lanzamiento'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lección 10: Día del Lanzamiento {#lesson-10-launch-day}

Ya está todo construido. Antes de abrir las puertas, esta lección recorre la lista de verificación previa al lanzamiento para asegurarse de que nada esté roto, faltando o sea vergonzoso.

## Dónde nos quedamos {#where-we-left-off}

FitSite tiene plantillas, planes, checkout, branding, onboarding y precios configurados. Ahora verificamos que todo funcione y lanzamos el servicio.

## Lista de verificación previa al lanzamiento {#pre-launch-checklist}

Recorre cada elemento. No omitas ninguno.

### Infraestructura de la plataforma {#platform-infrastructure}

- [ ] El hosting es estable y funciona bien bajo carga
- [ ] El Wildcard SSL está activo y todos los subdominios se sirven a través de HTTPS
- [ ] El mapeo de dominios funciona: prueba a crear un sitio y a mapear un dominio personalizado
- [ ] Los backups están configurados y probados (restaura al menos uno para verificar)
- [ ] El monitoreo está implementado: sabrás si la plataforma se cae

### Plantillas {#templates}

- [ ] Las tres plantillas cargan correctamente en sitios nuevos
- [ ] El contenido de marcador de posición es útil y está libre de errores tipográficos
- [ ] Todas las imágenes tienen licencias adecuadas (sin marcas de agua de fotos de stock)
- [ ] La adaptabilidad móvil funciona en todas las páginas de la plantilla
- [ ] La velocidad de carga de la página es aceptable (prueba con una herramienta como GTmetrix o PageSpeed Insights)
- [ ] No hay enlaces rotos ni activos faltantes en ninguna plantilla

### Planes y productos {#plans-and-products}

- [ ] Los tres planes están activos y visibles
- [ ] Las descripciones de los planes son precisas y específicas del nicho
- [ ] Los precios son correctos (mensuales y anuales)
- [ ] Las tarifas de configuración están configuradas en los planes correctos
- [ ] El período de prueba funciona en el plan Starter
- [ ] Los *order bumps* aparecen correctamente durante el checkout
- [ ] Las limitaciones de plugin y tema se aplican correctamente por plan

### Flujo de checkout {#checkout-flow}

- [ ] Completa un registro de prueba completo en cada plan (usa modo de pago de prueba)
- [ ] La selección de plantillas muestra las plantillas correctas por plan
- [ ] El pago se procesa con éxito
- [ ] El cliente recibe el correo electrónico de bienvenida después del registro
- [ ] Se crea un sitio nuevo con la plantilla correcta
- [ ] El cliente puede iniciar sesión en su nuevo sitio inmediatamente
- [ ] Los códigos de descuento funcionan correctamente

### Branding {#branding}

- [ ] La página de inicio de sesión muestra el branding de FitSite
- [ ] El dashboard de administración muestra el branding de FitSite
- [ ] Todos los correos del sistema usan el branding de FitSite y lenguaje específico de fitness
- [ ] Las facturas se muestran correctamente con los detalles de tu negocio
- [ ] El sitio de marketing está activo y enlaza al formulario de checkout

### Onboarding {#onboarding}

- [ ] El widget Quick Start aparece en los dashboards de los clientes nuevos
- [ ] Todos los enlaces Quick Start apuntan a las páginas correctas
- [ ] La secuencia de correo electrónico de bienvenida está configurada y probada
- [ ] Los artículos de la base de conocimientos están publicados y accesibles
- [ ] La página de cuenta muestra la información correcta del plan y las opciones de mejora

### Legal y negocio {#legal-and-business}

- [ ] Los términos de servicio están publicados y enlazados desde el checkout
- [ ] La política de privacidad está publicada y accesible
- [ ] La política de reembolso está definida y documentada
- [ ] La entidad comercial está configurada para recibir pagos
- [ ] La pasarela de pago está en modo en vivo (no en modo de prueba)
- [ ] La configuración fiscal es correcta para tu jurisdicción

## Lanzamiento suave vs. Lanzamiento completo {#soft-launch-vs-hard-launch}

Considera un lanzamiento en dos fases:

### Fase 1: Lanzamiento suave (Soft Launch) {#phase-1-soft-launch}

Invita a 5-10 dueños de estudios de fitness a registrarse antes del lanzamiento público. Estos son tus clientes beta. Ofréceles un descuento significativo (50% de por vida, o 3 meses gratis) a cambio de:

- Comentarios honestos sobre la experiencia de registro y onboarding
- Permiso para usar su sitio como ejemplo de exhibición
- Reportar cualquier error o problema que encuentren

Esto te proporciona comentarios reales de clientes y sitios activos para exhibir antes de abrir al público.

### Fase 2: Lanzamiento público (Public Launch) {#phase-2-public-launch}

Una vez que se hayan incorporado los comentarios del lanzamiento suave:

- Cambia la pasarela de pago a modo en vivo
- Publica tu sitio de marketing
- Comienza la adquisición de clientes (Lección 11)
- Anúncialo en canales relevantes de la industria del fitness

## Acciones del día del lanzamiento {#launch-day-actions}

El día que lo hagas público:

1. **Cambia a pagos en vivo** — desactiva el modo de prueba en tu pasarela de pago
2. **Verifica una vez más** — realiza un registro de prueba completo con un pago real (reembolsate después)
3. **Monitorea de cerca** — busca errores, registros fallidos o problemas de pago
4. **Mantente disponible** — tus primeros clientes reales pueden necesitar ayuda, y una respuesta rápida genera confianza
5. **Celebra brevemente** — y luego vuelve al trabajo

## Qué puede salir mal {#what-can-go-wrong}

Prepárate para:

- **Problemas con la pasarela de pago**: Ten lista la información de contacto de soporte de tu proveedor de pasarelas
- **Problemas con el certificado SSL**: Saber cómo verificar y renovar certificados
- **Fallos en la entrega de correos electrónicos**: Prueba que los correos electrónicos realmente lleguen (revisa las carpetas de spam)
- **Rendimiento bajo carga**: Si recibes un pico de tráfico, saber cómo escalar tu hosting
- **Confusión del cliente**: Ten lista tu base de conocimientos y tus canales de soporte

## La red FitSite hasta ahora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Una lista de verificación previa al lanzamiento completa** que cubre infraestructura, contenido, pagos y aspectos legales
- **Una estrategia de lanzamiento suave** para obtener comentarios reales antes de hacerlo público
- **Procedimientos para el día del lanzamiento** para operar en vivo con confianza
- **Un plan de contingencia** para problemas comunes del día del lanzamiento

---

**Siguiente:** [Lección 11: Encontrar clientes](lesson-11-customers) — ahora que FitSite está activo, ¿cómo consigues que los dueños de estudios de fitness se registren?
