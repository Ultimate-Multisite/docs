---
title: Búsqueda y reemplazo automáticos en plantillas de sitio
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Búsqueda y reemplazo automáticos en plantillas de sitio (v2)

_**Este tutorial requiere WP UItimo versión 2.x.**_

Una de las funciones más potentes de Ultimate Multisite es la capacidad de añadir campos arbitrarios de texto, color y selección al formulario de registro. Una vez que hayamos capturado esos datos, podemos usarlos para rellenar previamente el contenido en ciertas partes de la plantilla de sitio seleccionada. Luego, cuando se publique el nuevo sitio, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, puedes crear tus sitios de plantilla con marcadores de posición. Los marcadores de posición deben añadirse rodeados por llaves dobles: {{placeholder_name}}.

Luego, simplemente puedes añadir un campo de registro coincidente para capturar esos datos

Tu cliente podrá entonces rellenar ese campo durante el registro.

Ultimate Multisite reemplazará entonces automáticamente los marcadores de posición con los datos proporcionados por el cliente.

## **Resolver el problema de la "plantilla llena de marcadores de posición"** {#solving-the-template-full-of-placeholders-problem}

Todo eso está muy bien, pero nos encontramos con un problema desagradable: ahora nuestras plantillas de sitio —que pueden ser visitadas por nuestros clientes— están llenas de marcadores de posición poco atractivos que no dicen mucho.

Para resolverlo, ofrecemos la opción de configurar valores ficticios para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en los sitios de plantilla mientras tus clientes los visitan.

Puedes acceder al editor de marcadores de posición de plantilla yendo a **Ultimate Multisite > Settings > Sitios**, desplazándote al área de Opciones de plantilla de sitio y luego haciendo clic en el enlace **Editar marcadores de posición**.

![Área de Opciones de plantilla de sitio en la página de configuración de Sitios](/img/config/settings-sites-templates-section.png)

Eso te llevará al editor de contenido de los marcadores de posición, donde puedes añadir marcadores de posición y su contenido respectivo.

![Punto de entrada del editor de marcadores de posición de plantilla](/img/config/settings-sites-templates-section.png)
