---
title: Exportar e Importar
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportar e Importar

Ultimate Multisite 2.9.0 añade una herramienta de **Exportar e Importar** para sitios únicos en **Herramientas > Exportar e Importar**. Úsela cuando necesite empaquetar un sitio de WordPress en un archivo ZIP, restaurar ese ZIP o mover un sitio entre instalaciones compatibles de Ultimate Multisite y WordPress para sitios únicos.

## Permisos requeridos

Debe iniciar sesión como administrador que pueda acceder al menú **Herramientas** de WordPress en el sitio que se va a exportar o importar. En una red multisite, utilice una cuenta de administrador de red al exportar o importar subsitios desde las herramientas de Ultimate Multisite a nivel de red.

Las descargas de ZIP de exportación se sirven a través de un punto final de descarga autenticado, por lo que mantenga activa la sesión de administrador hasta que finalice la descarga y no comparta las URL de descarga generadas públicamente.

## Exportar un sitio a un ZIP

1. En el administrador de WordPress del sitio que desea copiar, vaya a **Herramientas > Exportar e Importar**.
2. Abra el área de exportación y elija el sitio que desea empaquetar.
3. Seleccione el contenido opcional a incluir, como subidas, plugins y temas, cuando esas opciones estén disponibles.
4. Inicie la exportación y espere a que el proceso finalice. Los sitios grandes pueden tardar en finalizar en segundo plano antes de que el ZIP esté listo.
5. Descargue el ZIP terminado de la lista de exportaciones.

Guarde el ZIP en un lugar seguro. Puede contener contenido del sitio, configuraciones, archivos multimedia y activos de código seleccionados.

## Lo que incluye la exportación

Un ZIP de exportación puede incluir:

- El contenido de la base de datos y la configuración del sitio seleccionado.
- Los archivos multimedia subidos, si se incluyen las subidas.
- Los plugins y temas, si esas opciones están seleccionadas.
- Los metadatos de importación utilizados por la herramienta Exportar e Importar para reconstruir el sitio en la instalación de destino.

El tamaño exacto del ZIP depende de la cantidad de contenido multimedia, los plugins y temas seleccionados, y el tamaño de las tablas de la base de datos del sitio.

## Importar un sitio desde un ZIP

1. Vaya a **Herramientas > Exportar e Importar** en el sitio de destino de WordPress.
2. Abra el área de importación y suba el ZIP creado con la herramienta Exportar e Importar.
3. Ingrese una URL de reemplazo si el sitio debe usar una dirección nueva, o deje el campo en blanco para mantener la URL original.
4. Elija si desea eliminar el ZIP subido después de que finalice la importación.
5. Haga clic en **Comenzar Importación**.
6. Supervise la importación pendiente hasta que finalice. Use **Cancelar Importación** solo si necesita detener el proceso antes de que se complete.
7. Revise el sitio importado antes de permitir el tráfico normal o el acceso de clientes.

En una instalación de WordPress para sitios únicos, importar un ZIP reemplaza el sitio actual con el sitio importado. No es una herramienta de fusión. Cree una copia de seguridad completa del sitio de destino antes de comenzar y evite iniciar múltiples importaciones para el mismo sitio al mismo tiempo.

## Limitaciones y notas de compatibilidad

- Los directorios de subidas o bibliotecas multimedia muy grandes pueden generar archivos ZIP grandes. Confirme los límites de subida de PHP, los límites de ejecución, el espacio en disco, la memoria y la configuración de tiempo de espera del servidor antes de exportar o importar sitios grandes.
- Las bibliotecas multimedia muy grandes pueden necesitar moverse durante una ventana de mantenimiento de bajo tráfico.
- La instalación de WordPress de destino debe ejecutar versiones compatibles de WordPress, PHP, Ultimate Multisite, plugins y temas.
- Una importación para sitios únicos reemplaza el sitio de destino. No es una herramienta de fusión.
- Las migraciones de multisite a sitio único y de sitio único a multisite solo son compatibles cuando el entorno de destino puede ejecutar los plugins, temas, URL y componentes requeridos de Ultimate Multisite del sitio exportado.
- Mantenga el ZIP privado. Puede contener contenido de la base de datos, archivos subidos y detalles de configuración del sitio exportado.

Para flujos de trabajo de exportación más antiguos a nivel de red, consulte [Exportación de sitios](/user-guide/administration/site-export).
