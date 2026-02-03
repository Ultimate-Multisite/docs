---
title: Entendiendo el Panel de Control
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Comprendiendo el Panel de Ultimate Multisite

Antes de sumergirnos en opciones de configuración más avanzadas y los aspectos operativos de Ultimate Multisite, echemos un vistazo al panel.

Al igual que muchos plugins de WordPress, Ultimate Multisite crea una entrada de menú a nivel de red titulada **Ultimate Multisite** con varias entradas de submenú debajo.

## Widgets del Panel de Red

Ultimate Multisite inyecta algunos widgets útiles en el panel a nivel de red. Este panel se encuentra navegando a **Mis Sitios → Administrador de Red → Panel**. Los widgets están diseñados para proporcionar acceso fácil a información y operaciones comunes para el administrador de la red.

![Panel de Red con widgets de Ultimate Multisite](/img/admin/network-dashboard-full.png)

### Primeros Pasos

![Widget Primeros Pasos](/img/admin/network-dashboard-first-steps.png)

Este widget aparece en una instalación nueva de Ultimate Multisite y recuerda al administrador de la red completar tareas adicionales como configurar un método de pago y crear una cuenta de prueba.

### Resumen

![Widget Resumen](/img/admin/network-dashboard-summary.png)

El widget Resumen informa sobre el número de registros y sus ingresos del día. El MRR (Ingresos Mensuales Recurrentes) indica un total proyectado entre clientes con membresías generadoras de ingresos.

### Flujo de Actividad

![Widget Flujo de Actividad](/img/admin/network-dashboard-activity-stream.png)

Este widget informa sobre eventos en toda Ultimate Multisite. Los eventos incluyen registros, cancelaciones, creaciones de sitios, eliminaciones y otras actividades.

Consulte la sección de Eventos de la documentación para una descripción más detallada.

### Ahora

![Widget Ahora](/img/admin/network-dashboard-right-now.png)

Este widget de utilidad muestra un breve resumen de usuarios y sitios en la red. Accesos directos útiles en la parte superior permiten acceder con un clic para crear nuevos sitios o usuarios.

### Noticias y Discusiones

![Widget Noticias y Discusiones](/img/admin/network-dashboard-news.png)

Este widget recupera y muestra las últimas noticias de Ultimate Multisite. Mantenga un ojo en este widget para obtener información sobre actualizaciones, errores críticos y correcciones de seguridad.

## Panel de Ultimate Multisite

Mientras que el panel a nivel de red presenta información holística sobre la red, el panel de Ultimate Multisite (ubicado en el nivel superior del menú Ultimate Multisite) presenta información sobre el servicio.

![Panel de Ultimate Multisite](/img/admin/um-dashboard-top.png)

### Crecimiento de Ingresos Mensuales Recurrentes

El gráfico de MRR (Ingresos Mensuales Recurrentes) muestra un desglose mensual de ingresos durante un período de calendario de 12 meses.

![Gráfico de Crecimiento de MRR](/img/admin/um-dashboard-mrr.png)

Los ingresos nuevos se registran en azul mientras que las cancelaciones se reflejan en rojo.

### Soporte de Rango de Fechas

Dependiendo del número de clientes y la actividad, las estadísticas pueden resultar abrumadoras. El soporte de rango de fechas incorporado en el panel permite al administrador de la red centrarse únicamente en la información y el período de tiempo requeridos.

![Selector de rango de fechas y estadísticas](/img/admin/um-dashboard-date-range.png)

El rango de fechas regula el período de la información mostrada por los widgets directamente debajo, incluyendo ingresos, nuevas membresías, registros por país, registros por formulario y sitios más visitados.

![Widgets de estadísticas del panel](/img/admin/um-dashboard-stats.png)

:::tip
Para que el widget **Sitios Más Visitados** funcione, habilite el conteo de visitas en **Ultimate Multisite → Configuración → Sitios → Habilitar Limitación y Conteo de Visitas**.
:::
