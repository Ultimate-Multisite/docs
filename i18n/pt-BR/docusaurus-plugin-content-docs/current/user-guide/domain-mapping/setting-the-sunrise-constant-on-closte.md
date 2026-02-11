---
title: Definindo a Constante Sunrise no Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Definindo a constante Sunrise como true no Closte

Alguns provedores de hospedagem bloqueiam o wp-config.php por motivos de segurança. Isso significa que o Ultimate Multisite não pode editar o arquivo automaticamente para incluir as constantes necessárias para que o mapeamento de domínio e outros recursos funcionem. O Closte é um desses provedores.

## No painel do Closte

Primeiro, [faça login na sua conta Closte](https://app.closte.com/), clique no item de menu Sites, depois clique no link Dashboard no site em que você está trabalhando:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

Você verá uma série de novos itens de menu no lado esquerdo da tela. Navegue até a página **Settings** usando esse menu:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

Em seguida, na **Settings**, encontre a aba WP-Config, e então o campo “Additional wp-config.php content” nessa aba:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

No contexto da instalação do Ultimate Multisite, você precisará adicionar a constante sunrise nesse campo. Basta adicionar uma nova linha e colar a linha abaixo. Depois disso, clique no botão **Save All**.

define('SUNRISE', true);

É isso aí, tudo pronto. Retorne ao assistente de instalação do Ultimate Multisite e atualize a página para continuar o processo.
