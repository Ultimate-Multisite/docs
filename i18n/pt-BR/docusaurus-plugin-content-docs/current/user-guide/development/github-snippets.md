---
title: Snippets do GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Como usar snippets do Ultimate Multisite em nosso repositório GitHub

Há snippets de código disponíveis no repositório GitHub que são frequentemente solicitados por usuários do Ultimate Multisite que desejam adicionar pequenas funcionalidades, como adicionar o script do Google Analytics em páginas de cadastro ou ocultar uma meta box do painel de administração.

Este artigo mostrará como usar ou, mais especificamente, onde colocar esses códigos.

Você pode encontrar os snippets no link abaixo.

https://github.com/next-press/wp-ultimo-snippets/

Há 2 maneiras de adicionar o código

  1. No arquivo functions.php do seu tema.

  2. Must-Use Plugins (mu-plugins)

# Como adicionar o snippet no arquivo functions.php do seu tema.

  1. Faça login no painel de administração da sua rede WordPress e vá para Temas > Editor de temas (veja a captura de tela abaixo).

  2. Na página "Editar temas", certifique-se de que seu tema ativo esteja selecionado no campo suspenso localizado no canto superior direito da sua tela (#3 na captura de tela abaixo).

  3. Clique no arquivo functions.php na seção "Arquivos do tema" para carregar o arquivo. Role para baixo até o final e cole o snippet do Ultimate Multisite que você obteve no repositório GitHub.

<!-- Captura de tela indisponível: WordPress Theme Editor mostrando a edição do arquivo functions.php -->

# Como criar Must-Use Plugins (mu-plugins)

WordPress tem um recurso que permite carregar funcionalidades personalizadas chamado "Must-Use Plugins", ou "mu-plugins" para abreviar.

Esses mu-plugins especiais são carregados antes de todos os outros plugins regulares, e eles não podem ser desativados. Em uma rede multisite, o código nesses mu-plugins será carregado em todos os sites da sua instalação.

1\. Use FTP ou SSH para acessar o sistema de arquivos da sua instalação WordPress.

2\. Dentro do diretório wp-content da sua instalação WordPress, crie um novo diretório chamado: mu-plugins.

<!-- Captura de tela indisponível: Gerenciador de arquivos mostrando o diretório wp-content com a pasta mu-plugins -->

3\. Crie um novo arquivo PHP no seu computador chamado wu-snippet.php usando o Bloco de Notas ou qualquer editor de código.

4\. Coloque o snippet de código do Ultimate Multisite que você obteve no repositório GitHub no arquivo e salve-o. Você também pode adicionar este código no topo do snippet de código para rotular seu MU plugin.
