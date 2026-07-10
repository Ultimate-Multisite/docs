---
title: Fragmentos de GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cómo usar los snippets de Ultimate Multisite en nuestro repositorio de GitHub {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Hay snippets de código disponibles en el repositorio de GitHub que suelen solicitar con frecuencia los usuarios de Ultimate Multisite que desean añadir pequeñas funcionalidades, como agregar un script de Google Analytics en las páginas de registro u ocultar una meta box del Dashboard de administración.

Este artículo te mostrará cómo usar estos códigos o, más específicamente, dónde colocarlos.

Puedes encontrar los snippets en el enlace de abajo.

https://github.com/next-press/wp-ultimo-snippets/

Hay 2 formas de añadir el código

  1. En el archivo functions.php de tu theme.

  2. Must-Use Plugins (mu-plugins)

# Cómo añadir el snippet en el archivo functions.php de tu theme. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Inicia sesión en el Dashboard de administración de tu WordPress Network y ve a Themes >Theme Editor (consulta la captura de pantalla de abajo).

  2. En la página "Editar Themes", asegúrate de tener seleccionado tu theme activo en el campo desplegable ubicado en la parte superior derecha de tu pantalla (#3 en la captura de pantalla de abajo).

  3. Haz clic en el archivo functions.php dentro de la sección "Theme Files" para cargar el archivo. Desplázate hacia abajo hasta el final y pega el snippet de Ultimate Multisite que obtuviste del repositorio de GitHub.

<!-- Captura de pantalla no disponible: WordPress Theme Editor mostrando la edición del archivo functions.php -->

# Cómo crear Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress tiene una función que te permite cargar funcionalidad personalizada llamada "Must-Use Plugins", o "mu-plugins" para abreviar.

Estos mu-plugins especiales se cargan antes que todos los demás plugins normales, y no se pueden desactivar. En una red multisitio, el código en estos mu-plugins se cargará en todos los sitios de tu instalación.

1\. Usa FTP o SSH para acceder al sistema de archivos de tu instalación de WordPress.

2\. Dentro del directorio wp-content de tu instalación de WordPress, crea un nuevo directorio llamado: mu-plugins.

<!-- Captura de pantalla no disponible: Administrador de archivos mostrando el directorio wp-content con la carpeta mu-plugins -->

3\. Crea un nuevo archivo PHP en tu ordenador llamado wu-snippet.php usando Notepad o cualquier editor de código.

4\. Coloca en el archivo el snippet de código de Ultimate Multisite que obtuviste del repositorio de GitHub y guárdalo. También puedes añadir este código encima del snippet de código para etiquetar tu mu plugin.
