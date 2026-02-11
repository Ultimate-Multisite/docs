---
title: GitHub Trechos
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Como usar os snippets do Ultimate Multisite em nosso repositório GitHub

Existem snippets de código disponíveis no repositório GitHub que são frequentemente solicitados pelos usuários do Ultimate Multisite que desejam adicionar pequenas funcionalidades, como inserir o script do Google Analytics em páginas de cadastro ou ocultar uma meta box do painel administrativo.

Este artigo mostrará como usar ou, mais especificamente, onde colocar esses códigos.

Você pode encontrar os snippets no link abaixo.

https://github.com/next-press/wp-ultimo-snippets/

Existem 2 maneiras de adicionar o código

  1. No arquivo `functions.php` do seu tema.

  2. Must-Use Plugins (mu-plugins)

# Como adicionar o snippet no arquivo `functions.php` do seu tema.

  1. Faça login no painel administrativo da sua Rede WordPress e vá para Temas > Editor de Temas (Veja a captura de tela abaixo).

  2. Na página "Editar Temas", certifique-se de que seu tema ativo está selecionado no campo suspenso localizado no canto superior direito da tela (#3 na captura de tela abaixo).

  3. Clique no arquivo `functions.php` na seção "Arquivos do Tema" para carregá-lo. Role até o final e cole o snippet do Ultimate Multisite que você obteve do repositório GitHub.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# Como criar Must-Use Plugins (mu-plugins)

O WordPress possui um recurso que permite carregar funcionalidades personalizadas chamadas "Must-Use Plugins", ou "mu-plugins" para abreviar.

Esses mu-plugins especiais são carregados antes de todos os demais plugins regulares e não podem ser desativados. Em uma rede multisite, o código desses mu-plugins será carregado em todos os sites da sua instalação.

  1. Use FTP ou SSH para acessar o sistema de arquivos da sua instalação WordPress.

  2. Dentro do diretório `wp-content` da sua instalação WordPress, crie um novo diretório chamado: mu-plugins.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

  3. Crie um novo arquivo PHP em seu computador chamado `wu-snippet.php` usando o Bloco de Notas ou qualquer editor de código.

  4. Coloque o snippet de código do Ultimate Multisite que você obteve do repositório GitHub no arquivo e salve-o. Você também pode adicionar este código no topo do snippet para rotular seu mu plugin.
