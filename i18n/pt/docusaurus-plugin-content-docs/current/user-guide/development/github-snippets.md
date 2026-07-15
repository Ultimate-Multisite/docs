---
title: Snippets do GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Como usar os snippets do Ultimate Multisite no nosso repositório do GitHub

Existem trechos de código disponíveis no repositório do GitHub que são frequentemente solicitados por usuários do Ultimate Multisite que desejam adicionar pequenas funcionalidades, como incluir o script do Google Analytics em páginas de cadastro ou ocultar uma meta box do painel de administração.

Este artigo mostrará como usar esses códigos ou, mais especificamente, onde colocá esses códigos.

Você pode encontrar os snippets no link abaixo.

https://github.com/next-press/wp-ultimo-snippets/

Existem 2 maneiras de adicionar o código:

  1. No arquivo functions.php do seu tema.

  2. Plugins Must-Use (mu-plugins).

# Como adicionar o snippet no arquivo functions.php do seu tema.

  1. Faça login no painel de administração da sua Rede WordPress e vá para Temas > Editor de Tema (Veja a captura de tela abaixo).

  2. Na página "Editar Temas", certifique-se de que tem o seu tema ativo selecionado no campo suspenso localizado no canto superior direito da sua tela (#3 na captura de tela abaixo).

  3. Clique no arquivo functions.php na seção "Arquivos do Tema" para carregar o arquivo. Role até o final e cole o snippet Ultimate Multisite que você pegou no repositório do GitHub.

<!-- Captura de tela indisponível: Editor de Tema WordPress mostrando a edição do arquivo functions.php -->

# Como criar Plugins Must-Use (mu-plugins)

O WordPress tem um recurso que permite carregar funcionalidades personalizadas chamadas "Must-Use Plugins", ou "mu-plugins" abreviado.

Esses mu-plugins especiais são carregados antes de todos os outros plugins regulares e não podem ser desativados. Em uma rede multisite, o código nesses mu-plugins será carregado em todos os sites da sua instalação.

1. Use FTP ou SSH para acessar o sistema de arquivos da sua instalação do WordPress.

2. Dentro do diretório `wp-content` da sua instalação do WordPress, crie um novo diretório chamado: `mu-plugins`.

<!-- Captura de tela indisponível: Gerenciador de arquivos mostrando o diretório wp-content com a pasta mu-plugins -->

3. Crie um novo arquivo PHP no seu computador chamado `wu-snippet.php` usando o Bloco de Notas ou qualquer editor de código que você prefira.

4. Coloque o trecho de código do Ultimate Multisite que você obteve no repositório do GitHub dentro deste arquivo e salve-o. Você também pode adicionar este código acima do trecho para identificar seu plugin mu.
