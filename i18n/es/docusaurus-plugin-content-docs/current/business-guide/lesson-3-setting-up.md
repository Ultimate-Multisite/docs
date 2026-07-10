---
title: 'Lección 3: Configurando tu red'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lección 3: Configuración de tu Red {#lesson-3-setting-up-your-network}

Es hora de construir. En esta lección instalarás Ultimate Multisite y configurarás los cimientos de la red FitSite. Cada decisión aquí se toma pensando en el nicho del fitness.

## Dónde nos quedamos {#where-we-left-off}

Elegimos los estudios de fitness como nuestro nicho y validamos la oportunidad. Ahora convertimos esa idea en una plataforma funcional.

## Elección de Alojamiento (Hosting) {#choosing-your-hosting}

Tu elección de hosting es más importante para una plataforma de nicho que para un sitio web individual. No estás alojando un solo sitio, estás alojando una red que crecerá hasta tener docenas o cientos de sitios.

### Qué buscar {#what-to-look-for}

- **Soporte para WordPress Multisite**: No todos los hosts manejan bien el multisite.
- **SSL comodín (Wildcard SSL)**: Esencial para redes basadas en subdominios.
- **Recursos escalables**: Necesitas espacio para crecer sin tener que migrar.
- **Integración con Ultimate Multisite**: El mapeo automático de dominios y el SSL ahorran un esfuerzo operativo significativo.

### Enfoque recomendado {#recommended-approach}

Elige un host de la lista de [Proveedores compatibles](/user-guide/host-integrations/closte). Estos han sido probados con Ultimate Multisite y proporcionan las integraciones que necesitas para el mapeo de dominios y la automatización del SSL.

Para FitSite, utilizaremos una configuración de subdominio. Esto significa que los sitios de los clientes aparecerán inicialmente como `nombreestudio.fitsite.com` antes de que opcionalmente mapeen su propio dominio.

## Instalación de WordPress Multisite {#installing-wordpress-multisite}

Si aún no tienes una instalación de WordPress Multisite:

1. Instala WordPress en tu proveedor de hosting.
2. Sigue la guía de [Cómo instalar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Elige la configuración de **subdominio** cuando se te solicite.

:::tip ¿Por qué subdominios?
Los subdominios dan a cada sitio de cliente su propia dirección distinta (`studio.fitsite.com`) en lugar de una ruta (`fitsite.com/studio`). Esto es más profesional para tus clientes y evita conflictos de permalinks. Consulta [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para una comparación detallada.
:::

## Instalación de Ultimate Multisite {#installing-ultimate-multisite}

Sigue la guía de [Instalar Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) para:

1. Subir y activar el plugin en toda la red.
2. Ejecutar el [Asistente de configuración](/user-guide/getting-started/multisite-setup-wizard).

Durante el asistente de configuración, ten en cuenta el nicho FitSite:

- **Moneda**: Configúrala con la moneda que usan tus clientes de estudios de fitness.
- **Nombre de la empresa**: "FitSite" (o el nombre de marca que hayas elegido).
- **Logotipo de la empresa**: Sube el logo de tu marca; esto aparecerá en las facturas y correos electrónicos.

## Configuración para el Nicho Fitness {#configuring-for-the-fitness-niche}

Con Ultimate Multisite instalado, realiza estas elecciones de configuración específicas del nicho:

### Ajustes generales {#general-settings}

Ve a **Ultimate Multisite > Settings** y configura:

- **Nombre del sitio**: FitSite
- **Rol predeterminado**: Administrador. Los dueños de los estudios de fitness necesitan control total sobre el contenido de su sitio.
- **Registro**: Habilita el registro de usuarios para que los dueños de los estudios puedan registrarse ellos mismos.

### Configuración de correo electrónico {#email-configuration}

Los correos electrónicos de tu sistema deben hablar el idioma de tu nicho. Ve a **Ultimate Multisite > Settings > Emails** y personaliza:

- Reemplaza el lenguaje genérico de "tu nuevo sitio" con mensajes específicos de fitness.
- Asunto de bienvenida de ejemplo: "Tu sitio web de estudio de fitness está listo".
- Cuerpo de bienvenida de ejemplo: Haz referencia a su estudio, clases y cómo empezar con su sitio de fitness.

Refinaremos esto más adelante en la Lección 8 (Incorporación de clientes), pero establecer el tono ahora asegura que incluso los primeros registros de prueba se sientan específicos del nicho.

### Configuración de dominios {#domain-configuration}

Si estás utilizando un proveedor de hosting compatible, configura el mapeo de dominios ahora:

1. Ve a **Ultimate Multisite > Settings > Domain Mapping**.
2. Sigue la guía de integración para tu host específico.
3. Prueba que los nuevos subsitios obtengan SSL automáticamente.

Esto asegura que cuando empecemos a crear plantillas y sitios de prueba en la próxima lección, todo funcione de principio a fin.

## La Red FitSite hasta ahora {#the-fitsite-network-so-far}

Al final de esta lección, esto es lo que tienes:

```
Red FitSite
├── WordPress Multisite (modo subdominio)
├── Ultimate Multisite (instalado y configurado)
├── Hosting con SSL comodín
├── Mapeo de dominios configurado
├── Plantillas de correo electrónico específicas del nicho (iniciales)
└── Listo para plantillas de sitios (próxima lección)
```

## Lo que construimos en esta lección {#what-we-built-this-lesson}

- **Una instalación funcional de WordPress Multisite** en modo subdominio.
- **Ultimate Multisite instalado** y configurado con la marca FitSite.
- **Hosting y SSL** configurados para una red en crecimiento.
- **Mapeo de dominios** configurado para tu proveedor de hosting.
- **Tono de correo electrónico específico del nicho** establecido desde el primer día.

---

**Siguiente:** [Lección 4: Creación de Plantillas de Nicho](lesson-4-templates) — crearemos plantillas de sitios que los dueños de estudios de fitness realmente querrán usar.
