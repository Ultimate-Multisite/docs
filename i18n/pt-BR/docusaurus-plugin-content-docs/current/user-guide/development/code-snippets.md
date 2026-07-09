---
title: Snippets de código
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Snippets de código para v2

Basicamente, snippets de código para **WordPress** são usados para executar certas ações que, de outra forma, poderiam exigir um plugin menor dedicado. Esses snippets de código são colocados em um dos arquivos principais do WordPress ou do tema (geralmente o arquivo functions.php do seu tema) ou podem ser usados como um MU plugin.

Neste artigo, mostraremos três snippets de código que podem ser usados com **Ultimate Multisite v2** :

  * [**Alterando a posição do item de menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Como verificar se o usuário está em um determinado plano e/ou tem uma assinatura ativa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Corrigindo problemas de CORS com Font-Icons em domínios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Alterando a posição do item de menu Account

Para alterar a posição do item de menu Account no Dashboard do seu cliente, basta adicionar o snippet de código a seguir ao functions.php do tema ativo do seu site principal. Você também pode colocar o snippet dentro de um dos seus mu-plugins ou plugins personalizados.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Como verificar se o usuário está em um determinado plano e/ou tem uma assinatura ativa

Como admin de rede, talvez você precise criar funções personalizadas que realizarão ações básicas ou disponibilizarão um serviço/recurso para um grupo selecionado de assinantes ou usuários finais, com base no status da assinatura deles e no plano ao qual estão assinados.

Estas funções nativas do Ultimate Multisite ajudarão você com isso.

Para verificar se o usuário é membro de um determinado plano, você pode usar a função:

wu_has_plan($user_id, $plan_id)

Para verificar se a assinatura está ativa, você pode usar a função:

wu_is_active_subscriber($user_id)

Abaixo está um snippet de exemplo que verifica se o usuário atual está em um plano específico (_ID do Plano 50_) e se a assinatura do usuário está ativa.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Observe que _**wu_has_plan**_ requer um "ID do Plano" para funcionar.

Para obter o ID de um plano, você pode acessar **Ultimate Multisite > Produtos**. O ID de cada produto será mostrado à direita da tabela.

Observe que os usuários só podem estar assinados a um **Plano** , não a um Pacote ou Serviço, pois eles são apenas complementos para um **Plano**.

![Lista de produtos mostrando IDs de planos](/img/admin/products-list.png)

## Corrigindo problemas de CORS com Font-Icons em domínios mapeados
## Corrigindo problemas de CORS com Font-Icons em domínios mapeados

Depois de mapear um domínio para um subsite, você pode descobrir que o site está com problemas para carregar fontes personalizadas. Isso é causado por um bloqueio de origem cruzada nas configurações do seu servidor.

Como arquivos de fonte quase sempre são carregados diretamente a partir do CSS, nosso plugin de mapeamento de domínio não consegue reescrever as URLs para usar o domínio mapeado em vez do original, portanto, para corrigir o problema, você precisará alterar os arquivos de configuração do seu servidor.

Abaixo estão snippets de código para corrigir o problema no Apache e no NGINX. Essas alterações exigem conhecimento avançado de arquivos de configuração de servidor (arquivos .htaccess e arquivos de configuração do NGINX). Se você não se sentir confortável fazendo essas alterações por conta própria, envie esta página aos agentes de suporte do seu provedor de hospedagem ao solicitar assistência.

### Apache

No seu arquivo .htaccess, adicione:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

No arquivo de configuração do seu servidor (o local varia de servidor para servidor), adicione:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
