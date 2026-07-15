---
title: Establecer a Constante de Sunrise en Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Configurar a constante Sunrise como verdadeira no Closte

Alguns provedores de alojamento bloqueiam o wp-config.php por motivos de segurança. Isto significa que o Ultimate Multisite não consegue editar automaticamente o ficheiro para incluir as constantes necessárias para que o mapeamento de domínio e outros recursos funcionem. O Closte é um desses hosts.

No entanto, o Closte oferece uma forma de adicionar constantes ao wp-config.php de maneira segura. Basta seguir os passos abaixo:

## No painel do Closte {#on-the-closte-dashboard}

Primeiro, [inicie sessão na sua conta Closte](https://app.closte.com/), clique no menu Sites, depois clique no link Dashboard no site em que está a trabalhar:

<!-- Screenshot unavailable: Closte dashboard mostrando o menu Sites e o link Dashboard -->

Ser-lhe apresentadas vários novos itens de menu no lado esquerdo do ecrã. Navegue até à página **Settings** (Configurações) usando esse menu:

<!-- Screenshot unavailable: Menu lateral esquerdo do Closte mostrando a opção Settings -->

Depois, nas **Settings**, encontre a aba WP-Config, e depois o campo "Additional wp-config.php content" nessa aba:

<!-- Screenshot unavailable: Página de Settings do Closte com a aba WP-Config mostrando o campo Additional wp-config.php content -->

No contexto da instalação do Ultimate Multisite, terá de adicionar a constante sunrise nesse campo. Basta adicionar uma nova linha e colar a linha abaixo. Depois disso, clique no botão **Save All** (Guardar Tudo).

define('SUNRISE', true);

É só isso, está tudo pronto. Volte ao assistente de instalação do Ultimate Multisite e atualize a página para continuar o processo.
