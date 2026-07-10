---
title: Configurando a constante Sunrise no Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Configurando a constante Sunrise como true na Closte {#setting-the-sunrise-constant-to-true-on-closte}

Alguns provedores de hospedagem bloqueiam o wp-config.php por motivos de segurança. Isso significa que o Ultimate Multisite não consegue editar automaticamente o arquivo para incluir as constantes necessárias para fazer o mapeamento de domínios e outros recursos funcionarem. A Closte é um desses provedores.

No entanto, a Closte oferece uma forma de adicionar constantes ao wp-config.php de maneira segura. Você só precisa seguir as etapas abaixo:

## No dashboard da Closte {#on-the-closte-dashboard}

Primeiro, [faça login na sua conta Closte](https://app.closte.com/), clique no item de menu Sites e, em seguida, clique no link Dashboard no site em que você está trabalhando no momento:

<!-- Captura de tela indisponível: dashboard da Closte mostrando o menu Sites e o link Dashboard -->

Você verá uma série de novos itens de menu no lado esquerdo da tela. Navegue até a página **Settings** usando esse menu:

<!-- Captura de tela indisponível: menu lateral esquerdo da Closte mostrando a opção Settings -->

Em seguida, em **Settings**, encontre a aba WP-Config e depois o campo "Additional wp-config.php content" nessa aba:

<!-- Captura de tela indisponível: página Settings da Closte com a aba WP-Config mostrando o campo Additional wp-config.php content -->

No contexto da instalação do Ultimate Multisite, você precisará adicionar a constante sunrise nesse campo. Basta adicionar uma nova linha e colar a linha abaixo. Depois disso, clique no botão **Save All**.

define('SUNRISE', true);

Pronto, está tudo configurado. Volte ao assistente de instalação do Ultimate Multisite e atualize a página para continuar o processo.
