---
title: Registrar Endpoint de API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# O endpoint da API de registro Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Neste tutorial, você aprenderá a usar o endpoint da API `/register` do Ultimate Multisite para criar todo o processo de integração (onboarding) de um novo cliente na sua rede e como fazer isso com o Zapier.

O endpoint usa o método POST e é chamado pela URL `_**https://yoursite.com/wp-json/wu/v2/register**_. Nesta chamada, 4 processos serão executados dentro da sua rede:

  * Um novo usuário do WordPress ou sua identificação através do ID de usuário será criada.

  * Um novo Cliente no Ultimate Multisite ou sua identificação através do ID de cliente será criada.

  * Um novo site na rede WordPress será criado.

  * No final, uma nova Assinatura (Membership) no Ultimate Multisite será criada.

Para este processo, você precisará das suas credenciais da API. Para obtê-las, vá para o painel de administração da sua rede, navegue até **Ultimate Multisite > Settings** > **API & Webhooks**, e procure a seção Configurações da API (API Settings).

![Seção de Configurações da API no Ultimate Multisite](/img/config/settings-api.png)

Aqui está uma visualização completa da página de configurações da API:

![Página completa das configurações da API](/img/config/settings-api-full.png)

Selecione **Enable API** (Habilitar API) e obtenha suas credenciais da API.

Agora, vamos explorar o endpoint e depois criar uma ação de registro no Zapier.

## Parâmetros do corpo do endpoint {#endpoint-body-parameters}

Vamos ter uma visão geral das informações mínimas que precisamos enviar para o endpoint. No final deste artigo, você encontrará a chamada completa.

### Cliente {#customer}

Esta é a informação necessária para o processo de criação do Usuário e do Cliente Ultimate Multisite:

"customer_id" : integer

É possível enviar o ID do cliente criado na sua rede. Se não for enviado, as informações abaixo serão usadas para criar um novo cliente e um novo usuário do WordPress. O ID do usuário também pode ser enviado da mesma forma que o ID do cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Assinatura (Membership)** {#membership}

A única informação que precisamos dentro deste objeto é o Status da Assinatura.

"membership" { "status" : "string", // um dos valores "pending" (pendente), "active" (ativo), "trialing" (teste), "expired" (expirado), "on-hold" (em espera), "canceled" (cancelado) },

### **Produtos** {#products}

Os produtos recebem um array com 1 ou mais IDs de produto da sua rede. Cuidado, este endpoint não cria produtos. Consulte a documentação do Ultimate Multisite para entender melhor o endpoint de criação de produtos.

**"products" : [1,2],**

### Pagamento {#payment}

Assim como na Assinatura, só precisamos do status.

**"payment" { "status" : "string", // um dos valores "pending" (pendente), "completed" (concluído), "refunded" (reembolsado), "partially-refunded" (parcialmente reembolsado), "partially-paid" (parcialmente pago), "failed" (falhou), "canceled" (cancelado) },**

### Site {#site}

E para fechar, precisamos da URL e do Título do site dentro do objeto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

O retorno do endpoint de registro será um array com as informações da assinatura recém-criada.

## Criando uma ação no Zapier {#creating-an-action-in-zapier}

Com a introdução deste novo e mais robusto endpoint de criação de conta, você também terá acesso a uma nova ação no Zapier.

Você sabe como usar e aproveitar tudo o que a nova versão do Zapier oferece? Saiba mais aqui. (link?)

### Criando uma ação {#creating-an-action}

Para ilustrar melhor como usar o endpoint de registro com o Zapier, vamos criar uma integração com o Google Forms. Toda vez que este formulário for preenchido e as informações forem salvas na planilha de respostas do formulário, um novo membro será criado na rede Ultimate Multisite.

No Google Forms, crie um formulário com os campos mínimos necessários para criar um novo membro na rede.

<!-- Screenshot unavailable: Formulário do Google Forms com campos para criar um novo membro -->

Agora, no Zapier, crie um novo Zap e conecte o formulário criado no Google através da planilha onde os dados são salvos.

<!-- Screenshot unavailable: Configuração do gatilho do Zapier conectando à planilha do Google Forms -->

Pronto! O formulário do Google Forms está conectado ao Zapier e pronto para ser integrado à rede. Agora vamos passar para a Ação que resultará do Gatilho que o Google Forms dispara toda vez que é preenchido.

Localize o aplicativo Ultimate Multisite e selecione-o. Para este tipo de Zap, escolha a opção Register (Registrar).

<!-- Screenshot unavailable: Seleção da ação no Zapier mostrando o aplicativo Ultimate Multisite com a opção Register -->

Após esta primeira etapa, escolha a conta que será conectada a este Zap.<!-- Screenshot unavailable: Etapa de conexão de conta do Zapier para Ultimate Multisite -->

Esta é a parte mais sensível de todo o processo. Precisamos fazer a correspondência dos campos que vieram do Google Forms com os campos mínimos necessários para o endpoint de registro, conforme mostrado na seção anterior deste artigo.

Neste exemplo, precisamos configurar apenas o nome de usuário (username), e-mail, senha, nome e URL do site. O restante fica pré-determinado para que todos os membros gerados neste Google Forms sigam o mesmo padrão de produto e status.

<!-- Captura de tela indisponível: Mapeamento de campos do Zapier entre Google Forms e o endpoint de registro Ultimate Multisite -->

Com as informações configuradas, prossiga para o teste final. Na última tela você verá todos os campos que serão enviados ao endpoint, suas respectivas informações e os campos que serão enviados vazios.<!-- Captura de tela indisponível: Tela de teste do Zap mostrando todos os campos a serem enviados ao endpoint de registro -->

Teste seu novo Zap e ele deve ser concluído com sucesso. Se ocorrer algum erro, verifique todos os campos e se estão sendo enviados corretamente. Como há muita informação, algumas coisas podem passar despercebidas.

### Parâmetros completos do endpoint {#complete-endpoint-parameters}

Aqui está a chamada completa e todas as possibilidades de campos que podem ser enviados.

"customer_id" : integer, "customer" : { "user_id" : integer, "username" : "string", "password" : "string", "email" : "string" }, "membership" : { "status" : "string", // um dos valores "pending", "active", "trialing", "expired", "on-hold", "cancelled", "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string" }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // um dos valores "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string" }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string" }
