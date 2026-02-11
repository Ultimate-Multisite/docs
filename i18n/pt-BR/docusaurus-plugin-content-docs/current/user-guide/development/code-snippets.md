---
title: Trechos de Código
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Trechos de Código para v2

Basicamente, trechos de código para **WordPress** são usados para executar certas ações que, de outra forma, poderiam exigir um plugin menor dedicado. Esses trechos de código são colocados em um dos arquivos principais do WordPress ou do tema (geralmente o arquivo functions.php do seu tema) ou podem ser usados como um plugin MU.

Neste artigo, mostraremos três trechos de código que podem ser usados com **Ultimate Multisite v2** :

  * [**Alterando a posição do item de menu da Conta**](#changing-the-position-of-the-account-menu-item)

  * [**Como verificar se o usuário está sob um determinado plano e/ou tem uma assinatura ativa**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Corrigindo problemas de CORS com Font-Icons em domínios mapeados**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Alterando a posição do item de menu da Conta

Para alterar a posição do item de menu da Conta no Painel do seu cliente, basta adicionar o trecho de código a seguir ao functions.php do tema ativo do seu site principal. Você também pode colocar o trecho dentro de um dos seus mu-plugins ou plugins personalizados.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## Como verificar se o usuário está sob um determinado plano e/ou tem uma assinatura ativa

Como administrador de rede, você pode precisar criar funções personalizadas que executarão ações básicas ou tornarão um serviço/característica disponível para um grupo selecionado de assinantes ou usuários finais, com base no status da assinatura deles e no plano ao qual estão assinados.

Essas funções nativas do Ultimate Multisite ajudarão você com isso.

Para verificar se o usuário é membro de um determinado plano, você pode usar a função:

```php
wu_has_plan($user_id, $plan_id)
```

Para verificar se a assinatura está ativa, você pode usar a função:

```php
wu_is_active_subscriber($user_id)
```

Abaixo está um trecho de exemplo que verifica se o usuário atual está sob um plano específico (_Plan ID 50_) e se a assinatura do usuário está ativa.

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

Observe que _**wu_has_plan**_ requer um "Plan ID" para funcionar.

Para obter o ID de um plano, você pode ir para **Ultimate Multisite > Products**. O ID de cada produto será exibido à direita da tabela.

Observe que os usuários só podem assinar um **Plan**, não um Pacote ou Serviço, pois eles são apenas complementos para um **Plan**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## Corrigindo problemas de CORS com Font-Icons em domínios mapeados

Após mapear um domínio para um sub-site, você pode descobrir que o site está tendo dificuldade em carregar fontes personalizadas. Isso é causado por um bloqueio de origem cruzada nas configurações do seu servidor.

Como os arquivos de fonte são quase sempre carregados diretamente do CSS, nosso plugin de mapeamento de domínio não consegue reescrever os URLs para usar o domínio mapeado em vez do original, então, para corrigir o problema, você precisará alterar seus arquivos de configuração do servidor.

Abaixo estão trechos de código para corrigir o problema no Apache e no NGINX. Essas alterações exigem conhecimento avançado de arquivos de configuração do servidor (.htaccess e arquivos de configuração do NGINX). Se você não se sente confortável em fazer essas alterações sozinho, envie esta página para os agentes de suporte do seu provedor de hospedagem quando precisar de assistência.

### Apache

No seu arquivo .htaccess, adicione:

```apache
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

No seu arquivo de configuração do servidor (a localização varia de servidor para servidor), adicione:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```

## Corrigindo problemas de CORS com Font-Icons em domínios mapeados

Após mapear um domínio para um sub-site, você pode descobrir que o site está tendo dificuldade em carregar fontes personalizadas. Isso é causado por um bloqueio de origem cruzada nas configurações do seu servidor.

Como os arquivos de fonte são quase sempre carregados diretamente do CSS, nosso plugin de mapeamento de domínio não consegue reescrever os URLs para usar o domínio mapeado em vez do original, então, para corrigir o problema, você precisará alterar seus arquivos de configuração do servidor.

Abaixo estão trechos de código para corrigir o problema no Apache e no NGINX. Essas alterações exigem conhecimento avançado de arquivos de configuração do servidor (.htaccess e arquivos de configuração do NGINX). Se você não se sente confortável em fazer essas alterações sozinho, envie esta página para os agentes de suporte do seu provedor de hospedagem quando precisar de assistência.

### Apache

No seu arquivo .htaccess, adicione:

```apache
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

No seu arquivo de configuração do servidor (a localização varia de servidor para servidor), adicione:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
