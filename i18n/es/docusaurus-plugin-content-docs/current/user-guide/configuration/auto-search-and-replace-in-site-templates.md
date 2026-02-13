---
title: Búsqueda y Reemplazo Automático en Plantillas del Sitio
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Búsqueda y Reemplazo Automático en Plantillas de Sitio (v2)

_**Este tutorial requiere WP UItimo versión 2.x.**_

Una de las características más poderosas de Ultimate Multisite es la capacidad de añadir texto arbitrario, color y campos de selección al formulario de registro. Una vez que tenemos esos datos capturados, podemos usarlos para pre-llenar el contenido en ciertas partes de la plantilla de sitio seleccionada. Luego, cuando el nuevo sitio se publique, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, puedes crear tus sitios de plantilla con marcadores de posición. Los marcadores de posición deben añadirse rodeados por llaves dobles: {{placeholder_name}}.

Luego, simplemente puedes añadir un campo de registro correspondiente para capturar esos datos.

Tu cliente podrá entonces rellenar ese campo durante el registro.

Ultimate Multisite reemplazará entonces los marcadores de posición con los datos proporcionados por el cliente automáticamente.

## **Resolviendo el problema de la plantilla llena de marcadores de posición**

Todo eso es genial, pero nos encontramos con un problema desagradable: ahora nuestras plantillas de sitio - que pueden ser visitadas por nuestros clientes - están llenas de marcadores de posición feos que no dicen mucho.

Para resolverlo, ofrecemos la opción de establecer valores ficticios para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en los sitios de plantilla mientras tus clientes los visitan.

Puedes acceder al editor de marcadores de posición de la plantilla yendo a **Ultimate Multisite > Settings > Sites**, y luego, en la barra lateral, haciendo clic en el enlace Edit Placeholders.

![Enlace Edit Placeholders en la barra lateral de configuración de Sites](/img/config/settings-sites.png)

Eso te llevará al editor de contenido de los marcadores de posición, donde puedes añadir marcadores de posición y su contenido respectivo.

![Editor de contenido de marcadores de posición con nombres y valores de marcadores](/img/config/settings-sites.png)
