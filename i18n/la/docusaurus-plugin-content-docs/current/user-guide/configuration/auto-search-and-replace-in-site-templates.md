---
title: Busca y reemplaza automático en plantillas de sitio
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace in Site Templates (v2)

_**Hoc tutorial requirit WP UItimo version 2.x.**_

Una de las funciones más potentes de Ultimate Multisite es la capacidad de añadir texto, color y campos seleccionables arbitrarios al formulario de registro. Una vez que hemos capturado esos datos, podemos usarlos para precargar el contenido en ciertas partes de la plantilla del sitio seleccionada. Luego, cuando se publique el nuevo sitio, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, puedes hacer tus sitios plantillas con marcadores de posición. Los marcadores de posición deben añadirse rodeados de llaves dobles: - {{placeholder_name}}.

Luego, simplemente puedes añadir un campo de registro que coincida para capturar esos datos.

Tu cliente podrá entonces rellenar ese campo durante el registro.

Ultimate Multisite reemplazará luego los marcadores de posición con los datos proporcionados por el cliente automáticamente.

## **Resolviendo el problema del "plantilla llena de marcadores de posición"**

Todo eso es genial, pero nos encontramos con un problema feo: ahora nuestras plantillas de sitio - que pueden ser visitadas por nuestros clientes - están llenas de marcadores de posición feos que no dicen mucho.

Para resolver esto, ofrecemos la opción de establecer valores falsos para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en las sitios plantilla mientras tus clientes están visitando.

Puedes acceder al editor de marcadores de posición yendo a **Ultimate Multisite > Settings > Sites**, desplazándote hasta el área de Opciones de Plantilla del Sitio, y luego haciendo clic en el enlace **Edit Placeholders** (Editar Marcadores de Posición).

![Área de Opciones de Plantilla del Sitio en la página de configuración de Sitios](/img/config/settings-sites-templates-section.png)

Eso te llevará al editor de contenido de los marcadores de posición, donde puedes añadir marcadores de posición y su contenido respectivo.

![Puncta templatis editor ingressus](/img/config/settings-sites-templates-section.png)
