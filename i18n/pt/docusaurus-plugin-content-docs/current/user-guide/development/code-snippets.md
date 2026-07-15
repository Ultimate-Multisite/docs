---
title: Trechos de código
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Trechos de Código para v2

Basicamente, os trechos de código para **WordPress** são usados para realizar certas ações que, de outra forma, poderiam exigir um plugin menor dedicado. Tais trechos de código são colocados em um dos arquivos principais do WordPress ou do tema (geralmente o arquivo functions.php do seu tema) ou podem ser usados como um MU plugin.

Neste artigo, mostraremos três trechos de código que podem ser usados com o **Ultimate Multisite v2**:

  * [**Alterando a posição do item do menu Conta**](#changing-the-position-of-the-account-menu-item)

  * [**Como verificar se o usuário está em um determinado plano e/ou tem uma assinatura ativa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Corrigindo problemas de CORS com Font-Icons em domínios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Alterando a posição do item do menu Conta {#changing-the-position-of-the-account-menu-item}

Para mudar a posição do item do menu Conta no Dashboard do seu cliente, basta adicionar o seguinte trecho de código ao functions.php do tema ativo do seu site principal. Você também pode colocar o trecho dentro de um dos seus mu-plugins ou plugins personalizados.

add_filter('wu_my_account_menu_position', function() { return 10; // Ajuste este valor para posicionar o menu na posição desejada.

Para verificar se a assinatura está ativa, você pode usar a função:

`wu_is_active_subscriber($user_id)`

Abaixo está um trecho de exemplo que verifica se o usuário atual está em um plano específico (_Plan ID 50_) e se a assinatura do usuário está ativa.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // O USUÁRIO É MEMBRO DO PLANO E A ASSINATURA ESTÁ ATIVA, FAÇA ISSO} else { // O USUÁRIO NÃO É MEMBRO DO PLANO -- OU -- A ASSINATURA NÃO ESTÁ ATIVA, FAÇA OUTRA COISA}
// fim do if;
```

Note que `_**wu_has_plan**_` requer um "Plan ID" para funcionar.

Para obter o ID de um plano, você pode ir em **Ultimate Multisite > Products**. O ID de cada produto será exibido à direita da tabela.

Note que os usuários só podem assinar um **Plano**, e não um Pacote ou Serviço, pois estes são apenas adicionais a um **Plano**.

![Lista de produtos mostrando IDs de planos](/img/admin/products-list.png)

## Corrigindo problemas de CORS com Font-Icons em domínios mapeados {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Corrigindo problemas de CORS com Font-Icons em domínios mapeados {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Depois de mapear um domínio para um subsítio, você pode descobrir que o site está com problemas para carregar fontes personalizadas. Isso é causado por um bloqueio de origem cruzada nas configurações do seu servidor.

Como os arquivos de fonte são quase sempre carregados diretamente do CSS, nosso plugin de mapeamento de domínio não consegue reescrever as URLs para usar o domínio mapeado em vez do original. Portanto, para resolver o problema, você precisará alterar seus arquivos de configuração do servidor.

Abaixo estão os trechos de código para corrigir o problema no Apache e no NGINX. Essas alterações exigem conhecimento avançado dos arquivos de configuração do servidor (.htaccess e arquivos de configuração do NGINX). Se você não se sentir confortável fazendo essas mudanças sozinho, envie esta página aos agentes de suporte da sua hospedagem quando precisar de ajuda.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

No seu arquivo .htaccess, adicione:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

No seu arquivo de configuração do servidor (o local varia de servidor para servidor), adicione:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
