---
title: Exportación del sitio
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportación de sitios {#site-export}

La página de administración de **Exportación de sitios** permite a los administradores de red empaquetar un sitio completo, o toda la red, en un archivo descargable para migración, respaldo o entrega a terceros.

## Exportar un sitio {#exporting-one-site}

Ve a **Ultimate Multisite > Exportación de sitios** y selecciona **Generar nueva exportación de sitio**. Elige el subsitio que deseas exportar y luego decide si el archivo debe incluir subidas, plugins y temas.

Cuando se complete la exportación, descarga el archivo ZIP de la lista de **Exportaciones existentes**. Los archivos ZIP de exportación ahora incluyen un `index.php` autoejecutable y un `readme.txt`, por lo que el archivo se puede subir a un host nuevo y comenzar sin tener que instalar primero un plugin importador separado.

## Exportar toda la red {#exporting-the-whole-network}

Utiliza **Exportación de red** en la página de Exportación de sitios cuando necesites un único archivo que contenga todos los subsitios de la red. Esto es útil antes de migraciones de host, simulacros de recuperación ante desastres o reconstrucciones de entornos de prueba, donde cada subsitio debe moverse junto.

Dado que una exportación de red puede ser mucho más grande que una exportación de un solo sitio, ejecútala durante un período de bajo tráfico y confirma que el almacenamiento de destino tenga suficiente espacio libre para subidas, plugins, temas y archivos ZIP generados.

### Paquetes de importación de red {#network-import-bundles}

A partir de Ultimate Multisite 2.12.0, Site Exporter puede generar **paquetes de importación de red** (network import bundles), que son archivos especializados diseñados para restaurar sitios a nivel de red de manera sencilla. Un paquete de importación de red contiene todos los archivos y metadatos necesarios para restaurar múltiples sitios en una nueva instalación de red.

#### Generar un paquete de importación de red {#generating-a-network-import-bundle}

1. Ve a **Ultimate Multisite > Exportación de sitios**
2. Haz clic en **Generar nueva exportación de red**
3. Selecciona **Paquete de importación de red** como tipo de exportación
4. Elige si incluir subidas, plugins y temas
5. Haz clic en **Generar**
6. Descarga el archivo ZIP del paquete desde la lista de **Exportaciones existentes**

#### Restaurar desde un paquete de importación de red {#restoring-from-a-network-import-bundle}

Para restaurar sitios desde un paquete de importación de red:

1. Instala Ultimate Multisite en tu host de destino
2. Completa el asistente de configuración multisite
3. Ve a **Ultimate Multisite > Exportación de sitios** en la nueva red
4. Haz clic en **Importar paquete de red**
5. Sube el archivo ZIP del paquete de importación de red
6. Sigue las instrucciones de importación en pantalla
7. El proceso de importación restaurará todos los sitios, su contenido y sus configuraciones

Los paquetes de importación de red preservan:
- Contenido del sitio (entradas, páginas, tipos de contenido personalizados)
- Configuración y opciones del sitio
- Roles y permisos de usuario
- Plugins y temas (si están incluidos en el paquete)
- Subidas multimedia (si están incluidas en el paquete)
- Tablas y datos personalizados de la base de datos

## Instalando un archivo ZIP de exportación autoejecutable {#installing-a-self-booting-export-zip}

Para restaurar un archivo ZIP autoejecutable en un host nuevo:

1. Sube el contenido del archivo ZIP exportado a la raíz web de destino.
2. Abre el `index.php` subido en un navegador.
3. Sigue las instrucciones del instalador en pantalla del paquete de exportación.
4. Revisa el `readme.txt` incluido para notas específicas de la exportación antes de eliminar los archivos temporales.

Para detalles de instalación e importación específicos de complementos, consulta la [documentación del complemento Site Exporter](/addons/site-exporter).

Para la herramienta de sitio único añadida en Ultimate Multisite 2.9.0, consulta [Exportar e Importar](/user-guide/administration/export-import).
