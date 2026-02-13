---
title: Registrar Endpoint da API
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# O endpoint API de Registro do Ultimate Multisite

Neste tutorial, você aprenderá como usar o endpoint API /register do Ultimate Multisite para criar todo o processo de onboarding de um novo cliente em sua rede e como fazer isso com o Zapier.

O endpoint usa o método POST e é chamado pela URL _**https://yoursite.com/wp-json/wu/v2/register**_. Nesta chamada, 4 processos serão executados dentro da sua rede:

  * Um novo usuário do WordPress ou sua identificação através do ID do usuário será criado.
  * Um novo Cliente no Ultimate Multisite ou sua identificação através do ID do cliente será criado.
  * Um novo site na rede WordPress será criado.
  * Ao final, uma nova Assinatura no Ultimate Multisite será criada.

Para este processo, você precisará de suas credenciais de API. Para obtê-las, vá ao painel de administração da sua rede, navegue até **Ultimate Multisite > Settings** > **API & Webhooks**, e procure pela seção de Configurações de API.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)
Selecione o **Enable API** e obtenha suas credenciais de API.

Agora, vamos explorar o endpoint e depois criar uma ação de registro no Zapier.

## Parâmetros do corpo do endpoint

Vamos ter uma visão geral das informações mínimas que precisamos enviar ao endpoint. No final deste artigo, você encontrará a chamada completa.

### Cliente

Esta é a informação necessária para o processo de criação do Usuário e do Cliente do Ultimate Multisite:

"customer_id" : integer

É possível enviar o ID do cliente criado em sua rede. Se não for enviado, as informações abaixo serão usadas para criar um novo cliente e um novo usuário do WordPress. O ID do usuário também pode ser enviado da mesma forma que o ID do cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Assinatura**

A única informação que precisamos dentro deste objeto é o Status da Assinatura.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produtos**

Os produtos são fornecidos em um array com 1 ou mais ID de produto da sua rede. Atenção, este endpoint não cria produtos. Verifique a documentação do Ultimate Multisite para entender melhor o endpoint de criação de produtos.

**"products" : [1,2],**

### Pagamento

Assim como na Assinatura, precisamos apenas do status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

E para fechar o corpo, precisamos da URL e do Título do site, ambos dentro do objeto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

O retorno do endpoint de registro será um array com as informações da assinatura recém-criada.

## Criando uma ação no Zapier

Com a introdução deste novo e mais robusto endpoint de criação de conta, você também terá acesso a uma nova ação no Zapier.

Você sabe como usar e aproveitar tudo que a nova versão do Zapier oferece? Saiba mais aqui. (link?)

### Criando uma ação

Para ilustrar melhor como usar o endpoint de registro com o Zapier, vamos criar uma integração com o Google Forms. Toda vez que este formulário for preenchido e as informações forem salvas na planilha de respostas do formulário, uma nova assinatura será criada na rede Ultimate Multisite.

No Google Forms, crie um formulário com os campos mínimos necessários para criar uma nova assinatura na rede.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Agora, no Zapier, crie um novo Zap e conecte o formulário criado no Google através da planilha onde os dados são salvos.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Pronto! O formulário do Google Forms está conectado ao Zapier e pronto para ser integrado à rede. Agora vamos para a Ação que resultará do Trigger que o Google Forms dispara toda vez que é preenchido.

Localize o novo aplicativo Ultimate Multisite e selecione-o. Para este tipo de Zap, escolha a opção Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Após esta primeira etapa, escolha a conta que será conectada com este Zap.

Esta é a parte mais sensível de todo o processo. Precisamos combinar os campos que vieram do Google Forms com os campos mínimos necessários para o endpoint de registro, conforme mostrado na seção anterior deste artigo.

Neste exemplo, precisamos configurar apenas o nome de usuário, e-mail, senha, nome e URL do site. O restante fica pré-determinado para que todas as assinaturas geradas neste Google Forms sigam o mesmo padrão de produto e status.

After this first step, choose the account that will be connected with this Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Com as informações configuradas, prossiga para o teste final. Na última tela você pode ver todos os campos que serão enviados ao endpoint, suas respectivas informações e os campos que serão enviados vazios.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Teste seu novo Zap e ele deve ser concluído com sucesso. Se ocorrer algum erro, verifique todos os campos e se eles estão sendo enviados corretamente. Como há muita informação, algumas coisas podem passar despercebidas.

### Parâmetros completos do endpoint

Aqui está a chamada completa e todas as possibilidades de campos que podem ser enviados.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
