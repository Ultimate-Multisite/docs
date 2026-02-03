---
title: Fragmentos de GitHub
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Cómo usar los fragmentos de Ultimate Multisite en nuestro repositorio de GitHub

Hay fragmentos de código disponibles en el repositorio de GitHub que son solicitados con frecuencia por usuarios de Ultimate Multisite que desean agregar pequeñas funcionalidades como añadir un script de Google Analytics en las páginas de registro o ocultar una caja meta del panel de administración.

Este artículo te mostrará cómo usar o, más específicamente, dónde colocar estos fragmentos.

Puedes encontrar los fragmentos en el siguiente enlace.

https://github.com/next-press/wp-ultimo-snippets/

Hay 2 formas de agregar el código

  1. En el archivo functions.php de tu tema.
  2. Plugins Must-Use (mu-plugins)

# Cómo agregar el fragmento en el archivo functions.php de tu tema.

  1. Inicia sesión en el panel de administración de la red de WordPress y ve a Temas > Editor de temas (ver captura de pantalla a continuación).
  2. En la página de "Editar temas", asegúrate de que tu tema activo esté seleccionado en el campo desplegable ubicado en la esquina superior derecha de tu pantalla (#3 en la captura de pantalla a continuación).
  3. Haz clic en el archivo functions.php bajo la sección "Archivos del tema" para cargar el archivo. Desplázate hasta la parte inferior y pega el fragmento de Ultimate Multisite que obtuviste del repositorio de GitHub.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# Cómo crear Plugins Must-Use (mu-plugins)

WordPress tiene una característica que te permite cargar funcionalidades personalizadas llamadas "Plugins Must-Use", o "mu-plugins" por abreviar.  
Estos mu-plugins especiales se cargan antes que todos los demás plugins regulares, y no se pueden desactivar. En una red multisite, el código en estos mu-plugins se cargará en todos los sitios de tu instalación.

  1. Usa FTP o SSH para acceder al sistema de archivos de tu instalación de WordPress.
  2. Dentro del directorio wp-content de tu instalación de WordPress, crea un nuevo directorio llamado: mu-plugins.
  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

  3. Crea un nuevo archivo PHP en tu computadora llamado wu-snippet.php usando Notepad o cualquier editor de código.
  4. Coloca el fragmento de código de Ultimate Multisite que obtuviste del repositorio de GitHub en el archivo y guárdalo. También puedes agregar este código encima del fragmento para etiquetar tu mu-plugin.
