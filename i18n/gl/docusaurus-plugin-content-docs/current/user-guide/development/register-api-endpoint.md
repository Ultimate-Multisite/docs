---
title: Registrar punto final de API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# O punto final da API de registo do Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

N neste tutorial aprenderás como usar o punto final da API /register do Ultimate Multisite para crear todo o proceso de incorporación (onboarding) dun novo cliente na túa rede e como facelo co Zapier.

O punto final usa o método POST e é chamado pola URL _**https://yoursite.com/wp-json/wu/v2/register**_. Nesta chamada, 4 procesos serán executados dentro da túa rede:

  * Será criado un novo utilizador de WordPress ou a súa identificación a través do ID do utilizador.

  * Será criado un novo Cliente en Ultimate Multisite ou a súa identificación a través do ID do cliente.

  * Será criado un novo sitio na rede de WordPress.

  * Ao final, se creará unha nova Membresía en Ultimate Multisite.

Para este proceso, necesitarás as túas credenciais da API. Para obtenerlas, dirígete ao panel de administración da túa rede, navega a **Ultimate Multisite > Settings** > **API & Webhooks**, e busca a sección de Configuración da API (API Settings).

![Sección de Configuración da API en Ultimate Multisite](/img/config/settings-api.png)

Aquí tes unha vista completa da páxina de configuración da API:

![Páxina completa de configuración da API](/img/config/settings-api-full.png)

Seleita **Enable API** (Activar API) e obtén as túas credenciais da API.

Agora, exploremos o punto final e depois crearemos unha acción de registo en Zapier.

## Parámetros do corpo do punto final {#endpoint-body-parameters}

Veamos un resumen da información mínima que necesitamos enviar ao punto final. Ao final desta entrada, encontrarás a chamada completa.

### Cliente {#customer}

Esta é a información necesaria para o proceso de creación do Utilizador e do Cliente Ultimate Multisite:

"customer_id" : integer

É posible enviar o ID do cliente que se creou na súa rede. Se non se envie, a información abaixo será usada para crear un novo cliente e un novo usuario de WordPress. O ID do usuario tamén se pode enviar da mesma maneira que o ID do cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membresía** {#membership}

A única información que nos hai de dentro desta obxecto é o Estatuto da Membresía.

"membership" { "status" : "string", // unha de "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produtos** {#products}

Os produtos reciben un array con 1 ou máis IDs de produto da súa rede. Cuidado, este endpoint non crea produtos. Consulta a documentación de Ultimate Multisite para entender mejor o endpoint de creación de produtos.

**"products" : [1,2],**

### Pago {#payment}

Como coa Membresía, só nos hai de status.

**"payment" { "status" : "string", // unha de "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sitio {#site}

E para cerrar o corpo, necesitamos a URL e o Título do sitio, ambos dentro do obxecto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

O retorno do endpoint de register será un array con a información da membresía recién creada.

## Creación dunha acción en Zapier {#creating-an-action-in-zapier}

Con a introducción deste novo e máis robusto endpoint de creación de contas, tamén accederás a unha nova acción en Zapier.

¿Sabes como usar e disfrutar de todo o que ofrece a nova versión de Zapier? Aprende máis aquí. (link?)

### Creación dunha acción {#creating-an-action}

Para ilustrar melhor como usar o endpoint de registo com o Zapier, vamos criar uma integração com o Google Forms. Sempre que este formulário for preenchido e as informações forem guardadas na folha de respostas do formulário, uma nova adesão será criada na rede Ultimate Multisite.

No Google Forms, crie um formulário com os campos mínimos necessários para criar uma nova adesão na rede.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Agora, no Zapier, crie um novo Zap e conecte o formulário criado no Google através da folha de cálculo onde os dados são guardados.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Pronto! O formulário do Google Forms está conectado com o Zapier e pronto para ser integrado na rede. Agora vamos passar para a Ação que resultará do Gatilho (Trigger) que o Google Forms dispara sempre que é preenchido.

Localize a nova aplicação Ultimate Multisite e selecione-a. Para este tipo de Zap, escolha a opção Register (Registar).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Depois deste primeiro passo, escolha a conta que será conectada com este Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Esta é a parte mais sensível de todo o processo. Precisamos fazer casar os campos que vieram do Google Forms com os campos mínimos necessários para o endpoint de registo, como mostrado na secção anterior deste artigo.

Neste exemplo, só precisamos configurar o nome de utilizador (username), email, palavra-passe (password), nome e URL do website. O resto fica pré-determinado para que todas as adesões geradas neste Google Forms sigam o mesmo padrão de produto e estado.

<!-- Screenshot unavailable: Mapeamento de campos do Zapier entre Google Forms e o endpoint de registro Ultimate Multisite -->

Com a informação configurada, prossiga para o teste final. Na última tela poderá ver todos os campos que serão enviados para o endpoint, as informações correspondentes e os campos que serão enviados vazios.<!-- Screenshot unavailable: Tela de teste do Zapier mostrando todos os campos a serem enviados para o endpoint de registro -->

Teste o seu novo Zap e ele deverá concluir com sucesso. Se ocorrer algum erro, verifique todos os campos e se estão a ser enviados corretamente. Como há muita informação, algumas coisas podem passar despercebidas.

### Parâmetros completos do endpoint {#complete-endpoint-parameters}

Aqui está a chamada completa e todas as possibilidades de campos que podem ser enviados.

"customer_id" : integer, "customer" : { "user_id" : integer, "username" : "string", "password" : "string", "email" : "string" }, "membership" : { "status" : "string", // um de "pending", "active", "trialing", "expired", "on-hold", "cancelled", "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string" }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // um de "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string" }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string" }
