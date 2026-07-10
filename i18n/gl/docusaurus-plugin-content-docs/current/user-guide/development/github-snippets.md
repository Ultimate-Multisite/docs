---
title: Fragmentos de GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Como usar os snippets Ultimate Multisite no noso repositório do GitHub {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Hay pequenos pedazos de código disponíveis no repositório do GitHub que os usuarios do Ultimate Multisite pedem conxunto, que queren adicionar funcionalidades pequenas como incluir o script do Google Analytics nas páxinas de registo ou ocultar unha meta box do painel administrativo.

Este artigo vai mostrarte como usar ou, máis especificamente, onde debes colocar estes códigos.

Podes encontrar os snippets no link abaixo.

https://github.com/next-press/wp-ultimo-snippets/

Hai 2 formas de añadir o código:

  1. No ficheiro functions.php do teu tema.

  2. Plugins Must-Use (mu-plugins).

# Como añadir o snippet no ficheiro functions.php do teu tema. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Entra na túa plataforma administrativa da Rede WordPress e ve a Themes > Theme Editor (Vea a captura de pantalla abaixo).

  2. Na páxina "Edit Themes", asegúrate de que está seleccionado o teu tema activo no campo desplegable situado no canto superior direito da túa pantalla (#3 na captura de pantalla abaixo).

  3. Clica no ficheiro functions.php debaixo da sección "Theme Files" para carregar o ficheiro. Desce hasta o fondo e pega no snippet Ultimate Multisite que conseguiste do repositório do GitHub.

<!-- Captura de pantalla indisponible: WordPress Theme Editor mostrando a edición do ficheiro functions.php -->

# Como crear Plugins Must-Use (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ten unha característica que te permite carregar funcionalidade personalizada chamada "Must-Use Plugins", ou "mu-plugins" en breves.

Estes mu-plugins especiais carganse antes que todos os outros plugins regulares, e non se poden desactivar. N unha rede multisite, o código nestes mu-plugins se cargará en todos os sitios da túa instalación.

1. Usa FTP ou SSH para acceder ao sistema de ficheiros da túa instalación de WordPress.

2. Dentro do diretorio `wp-content` da súa instalación de WordPress, crie un novo directorio chamado: `mu-plugins`.

<!-- Screenshot non está disponible: Gestor de ficheiros mostrando o directorio wp-content con a pasta mu-plugins -->

3. Crie un novo ficheiro PHP no seu ordenador chamado `wu-snippet.php` usando Notepad ou calquera editor de código.

4. Coloque o fragmento de código Ultimate Multisite que obteve do repositorio de GitHub dentro do ficheiro e guárde. Tamén pode añadir este código á parte do fragmento de código para etiquetar o seu mu plugin.
