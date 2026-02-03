---
title: Gestión de Sitios
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestionando Sitios

Los sitios (o subsitios) son el núcleo de tu negocio WaaS. Ultimate Multisite tiene 3 tipos de sitios:

- **Customer-owned** — Sitios pertenecientes a clientes específicos
- **Site Templates** — Sitios predefinidos que los clientes pueden seleccionar como punto de partida
- **Main Site** — Tu sitio principal de la red

## Visualizando Sitios

Navega a **Ultimate Multisite → Sites** para ver todos los subsitios en tu red. Cada sitio está etiquetado por tipo y puedes filtrar por All Sites, Customer-Owned, Templates, o Pending.

![Sites list page](/img/admin/sites-list.png)

## Añadiendo un Nuevo Sitio

Haz clic en el botón **Add Site** para crear un nuevo sitio. Necesitarás proporcionar:

- **Site Title** — El nombre del nuevo sitio
- **Site URL** — El dominio/ruta para el sitio
- **Site Type** — Si es un sitio de cliente, plantilla o sitio regular

La opción **Copy Site** te permite crear un nuevo sitio basado en una plantilla de sitio existente. Cuando está habilitada, puedes seleccionar qué plantilla usar como punto de partida. Asegúrate de que **Copy Media on Duplication** esté habilitada para incluir archivos multimedia.

## Gestionando un Sitio Existente

Haz clic en **Manage** en cualquier sitio para abrir la página **Edit Site**. Aquí encontrarás:

### Información Básica

El nombre del sitio, tipo, ID del sitio y descripción. También verás el dominio mapeado, la membresía asociada y la cuenta de cliente que posee el sitio.

### Opciones del Sitio

Configura las capacidades y límites del sitio:

- **Visit limits** — Número máximo de visitas al sitio
- **User account limits** — Límites por rol de usuario
- **Disk space** — Cuota de almacenamiento para el sitio
- **Custom domain** — Habilitar mapeo de dominio para este sitio
- **Plugin and theme visibility** — Controla qué plugins y temas son visibles, ocultos o preactivados

Por defecto, los sitios siguen los límites establecidos a nivel de membresía. Establecer límites a nivel de sitio anulará la configuración de la membresía.

### Asociaciones

Debajo de las opciones del sitio encontrarás información sobre:

- **Mapped domains** asociados con el sitio
- **Membership** bajo la cual se encuentra el sitio
- **Customer account** vinculado al sitio

### Barra Lateral Derecha

En el lado derecho puedes:

- **Enable/disable the site** con un botón de alternancia
- **Change the site type** o reasignar la propiedad
- **Set a site image/thumbnail** (mostrado en el frontend para plantillas de sitio)
- **Delete the site** permanentemente

:::warning
Eliminar un sitio es irreversible. El sitio y todo su contenido se eliminarán permanentemente.
:::
