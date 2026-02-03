---
title: Búsqueda y Reemplazo Automático en Plantillas del Sitio
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# Búsqueda y Reemplazo Automático en Plantillas de Sitio (v2)

_**Este tutorial requiere la versión 2.x de WP UItimo.**_

Una de las características más poderosas de Ultimate Multisite es la capacidad de añadir texto arbitrario, color y campos de selección al formulario de registro. Una vez que tenemos esos datos capturados, podemos usarlos para pre-llenar el contenido en ciertas partes de la plantilla de sitio seleccionada. Luego, cuando el nuevo sitio se publique, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, puedes crear tus sitios de plantilla con marcadores de posición. Los marcadores de posición deben añadirse rodeados por llaves dobles: {{placeholder_name}}.

Luego, simplemente puedes añadir un campo de registro correspondiente para capturar esos datos. Tu cliente podrá llenar ese campo durante el registro. Ultimate Multisite reemplazará los marcadores de posición con los datos proporcionados por el cliente automáticamente.

## **Resolviendo el problema de la "plantilla llena de marcadores de posición"**

Todo eso es genial, pero nos encontramos con un problema desagradable: ahora nuestras plantillas de sitio —que pueden ser visitadas por nuestros clientes— están llenas de marcadores de posición desagradables que no dicen mucho.

Para resolver eso, ofrecemos la opción de establecer valores falsos para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en los sitios de plantilla mientras tus clientes están visitando.

Puedes acceder al editor de marcadores de posición de la plantilla yendo a **Ultimate Multisite > Settings > Sites**, y luego, en la barra lateral, haciendo clic en el enlace **Editar Marcadores de Posición**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aFtnOrska9.png)

Eso te llevará al editor de contenido de los marcadores de posición, donde puedes añadir marcadores de posición y su contenido respectivo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OeMzuyauOW.png)
