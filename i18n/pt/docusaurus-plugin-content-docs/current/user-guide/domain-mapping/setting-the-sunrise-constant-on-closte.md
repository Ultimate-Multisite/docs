---
title: Definindo a Constante do Nascer do Sol no Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Definindo a constante Sunrise como verdadeira no Closte

Alguns provedores de hospedagem bloqueiam o wp-config.php por motivos de segurança. Isso significa que o Ultimate Multisite não consegue editar automaticamente o arquivo para incluir as constantes necessárias para que o mapeamento de domínio e outros recursos funcionem. O Closte é um desses hosts.

No entanto, o Closte oferece uma maneira de adicionar constantes ao wp-config.php de forma segura. Você só precisa seguir os passos abaixo:

## No painel do Closte {#on-the-closte-dashboard}

Primeiro, [faça login na sua conta Closte](https://app.closte.com/), clique no item de menu Sites, depois clique no link Dashboard no site em que você está trabalhando:

<!-- Screenshot unavailable: Closte dashboard mostrando o menu Sites e o link Dashboard -->

Você verá vários novos itens de menu no lado esquerdo da tela. Navegue até a página **Settings** (Configurações) usando esse menu:

<!-- Screenshot unavailable: Menu lateral esquerdo do Closte mostrando a opção Settings -->

Em seguida, na seção **Settings**, encontre a aba WP-Config e depois o campo "Additional wp-config.php content" (Conteúdo adicional para wp-config.php) nessa aba:

<!-- Screenshot unavailable: Página de Settings do Closte com a aba WP-Config mostrando o campo Conteúdo adicional para wp-config.php -->

No contexto da instalação do Ultimate Multisite, você precisará adicionar a constante sunrise nesse campo. Basta adicionar uma nova linha e colar a linha abaixo. Depois disso, clique no botão **Save All** (Salvar Tudo).

define('SUNRISE', true);

Pronto, está tudo configurado. Volte ao assistente de instalação do Ultimate Multisite e atualize a página para continuar o processo.
