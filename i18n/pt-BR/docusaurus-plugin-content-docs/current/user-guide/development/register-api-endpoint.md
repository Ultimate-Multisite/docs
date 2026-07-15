---
title: Registrar endpoint da API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# O endpoint da API Register do Ultimate Multisite

Neste tutorial, você aprenderá como usar o endpoint da API /register do Ultimate Multisite para criar todo o processo de onboarding de um novo cliente na sua rede e como fazer isso com Zapier.

O endpoint usa o método POST e é chamado pela URL _**https://yoursite.com/wp-json/wu/v2/register**_. Nesta chamada, 4 processos serão executados dentro da sua rede:

  * Um novo usuário WordPress ou sua identificação pelo ID do usuário será criado.

  * Um novo cliente no Ultimate Multisite ou sua identificação pelo ID do cliente será criado.

  * Um novo site na rede WordPress será criado.

  * No final, uma nova Membership no Ultimate Multisite será criada.

Para este processo, você precisará das suas credenciais da API. Para obtê-las, acesse o painel de administração da sua rede, navegue até **Ultimate Multisite > Settings** > **API & Webhooks,** e procure a seção API Settings.

![Seção API Settings no Ultimate Multisite](/img/config/settings-api.png)

Aqui está uma visão completa da página de configurações da API:

![Página completa de configurações da API](/img/config/settings-api-full.png)

Selecione **Enable API** e obtenha suas credenciais da API.

Agora, vamos explorar o endpoint e então criar uma ação de registro no Zapier.

## Parâmetros do corpo do endpoint {#endpoint-body-parameters}

Vamos ter uma visão geral das informações mínimas que precisamos enviar para o endpoint. No final deste artigo, você encontrará a chamada completa.

### Cliente {#customer}

Estas são as informações necessárias para o processo de criação do usuário e do cliente do Ultimate Multisite:

"customer_id" : integer

É possível enviar o ID do cliente criado na sua rede. Se não for enviado, as informações abaixo serão usadas para criar um novo cliente e um novo usuário WordPress. O ID do usuário também pode ser enviado da mesma maneira que o ID do cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

A única informação de que precisamos dentro deste objeto é o status da Membership.

"membership" { "status" : "string", // um de "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produtos** {#products}

Os produtos recebem um array com 1 ou mais IDs de produto da sua rede. Atenção: este endpoint não cria produtos. Consulte a documentação do Ultimate Multisite para entender melhor o endpoint de criação de produtos.

**"products" : [1,2],**

### Pagamento {#payment}

Assim como em Membership, precisamos apenas do status.

**"payment" { "status" : "string", // um de "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

E para fechar o corpo, precisamos da URL e do título do site, ambos dentro do objeto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

O retorno do endpoint register será um array com as informações da membership recém-criada.

## Criando uma ação no Zapier {#creating-an-action-in-zapier}

Com a introdução deste novo endpoint de criação de Account, mais robusto, você também terá acesso a uma nova ação no Zapier.

Você sabe como usar e aproveitar tudo o que a nova versão do Zapier oferece? Saiba mais aqui. (link?)

### Criando uma ação {#creating-an-action}

Para ilustrar melhor como usar o endpoint de registro com Zapier, vamos criar uma integração com Google Forms. Toda vez que este formulário for preenchido e as informações forem salvas na planilha de respostas do formulário, uma nova membership será criada na rede Ultimate Multisite.

No Google Forms, crie um formulário com os campos mínimos necessários para criar uma nova membership na rede.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Agora, no Zapier, crie um novo Zap e conecte o formulário criado no Google por meio da planilha onde os dados são salvos.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Pronto! O formulário do Google Forms está conectado ao Zapier e pronto para ser integrado à rede. Agora vamos seguir para a Action que resultará do Trigger que o Google Forms dispara toda vez que for preenchido.

Localize o novo app Ultimate Multisite e selecione-o. Para este tipo de Zap, escolha a opção Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Após esta primeira etapa, escolha a Account que será conectada a este Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Esta é a parte mais sensível de todo o processo. Precisamos corresponder os campos que vieram do Google Forms com os campos mínimos necessários para o endpoint register, como mostrado na seção anterior deste artigo.

Neste exemplo, precisamos configurar apenas o nome de usuário, email, senha, nome e URL do site. O restante fica pré-determinado para que todas as memberships geradas neste Google Forms sigam o mesmo padrão de produto e status.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Com as informações configuradas, prossiga para o teste final. Na última tela, você pode ver todos os campos que serão enviados para o endpoint, suas respectivas informações e os campos que serão enviados vazios.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Teste seu novo Zap e ele deve ser concluído com sucesso. Se ocorrer algum erro, verifique todos os campos e se eles estão sendo enviados corretamente. Como há muitas informações, algumas coisas podem passar despercebidas.

### Parâmetros completos do endpoint {#complete-endpoint-parameters}

Aqui está a chamada completa e todas as possibilidades de campos que podem ser enviados.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
