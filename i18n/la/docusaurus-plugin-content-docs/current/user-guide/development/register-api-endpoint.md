---
title: Registra punto final de la API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# El punto final de la API de registro de Ultimate Multisite

En este tutorial aprenderás a usar el punto final de la API /register de Ultimate Multisite para crear todo el proceso de incorporación (onboarding) para un nuevo cliente en tu red y cómo hacerlo con Zapier.

El punto final utiliza el método POST y se llama mediante la URL _**https://yoursite.com/wp-json/wu/v2/register**_. En esta llamada, se ejecutarán 4 procesos dentro de tu red:

  * Se creará un nuevo usuario de WordPress o su identificación a través del ID de usuario.

  * Se creará un nuevo Cliente en Ultimate Multisite o su identificación a través del ID de cliente.

  * Se creará un sitio nuevo en la red de WordPress.

  * Al final, se creará una nueva Membresía en Ultimate Multisite.

Para este proceso, necesitarás tus credenciales de API. Para obtenerlas, ve al panel de administración de tu red, navega a **Ultimate Multisite > Settings** > **API & Webhooks**, y busca la sección de Configuración de API (API Settings).

![Sección de Configuración de API en Ultimate Multisite](/img/config/settings-api.png)

Aquí tienes una vista completa de la página de configuración de la API:

![Página completa de configuración de la API](/img/config/settings-api-full.png)

Selecciona **Enable API** (Habilitar API) y obtén tus credenciales de API.

Ahora, exploremos el punto final y luego creemos una acción de registro en Zapier.

## Parámetros del cuerpo del punto final (Endpoint body parameters) {#endpoint-body-parameters}

Echemos un vistazo a la información mínima que necesitamos enviar al punto final. Al final de este artículo, encontrarás la llamada completa.

### Cliente (Customer) {#customer}

Esta es la información necesaria para el proceso de creación del Usuario y del Cliente de Ultimate Multisite:

"customer_id" : integer

Est possibile enviare l'ID del cliente creato nella tua rete. Se non viene inviato, le informazioni seguenti verranno utilizzate per creare un nuovo cliente e un nuovo utente WordPress. Anche l'ID utente può essere inviato nello stesso modo dell'ID cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membresia** {#membership}

L'unica informazione di cui abbiamo bisogno all'interno di questo oggetto è lo Stato della Membresia.

"membership" { "status" : "string", // uno tra "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Prodotti** {#products}

Ai prodotti viene dato un array con 1 o più ID prodotto dalla tua rete. Attenzione, questo endpoint non crea prodotti. Controlla la documentazione di Ultimate Multisite per capire meglio l'endpoint di creazione dei prodotti.

**"products" : [1,2],**

### Pagamento {#payment}

Come per la Membresia, abbiamo bisogno solo dello stato.

**"payment" { "status" : "string", // uno tra "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sito {#site}

E per chiudere il corpo abbiamo bisogno dell'URL e del Titolo del sito, entrambi all'interno dell'oggetto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Il ritorno dell'endpoint register sarà un array con le informazioni della nuova membresia creata.

## Creare un'azione in Zapier {#creating-an-action-in-zapier}

Con l'introduzione di questo nuovo e più robusto endpoint per la creazione account, potrai accedere anche a una nuova azione in Zapier.

Sai come usare e goderti tutto ciò che la nuova versione di Zapier offre? Scopri di più qui. (link?)

### Creare un'azione {#creating-an-action}

Admagne cum illustrare melius quomodo ut usus endpoint registrationis cum Zapier facias, creemus integrationem cum Google Forms. Quodque tempore hoc formum plenitur et informatio in tabula responsionum formidatis conservatur, nova membra in network Ultimate Multisite creatur.

In Google Forms, fuis formam cum minimis campi necessarios ad creationem novae membrinae in network.

<!-- Screenshot unavailable: Formam Google Forms cum campis ad creationem membrinae novae -->

Nunc in Zapier, facias novum Zap et connectus formum creatum in Google per tabulam spreadsheet ubi data conservata sunt.

<!-- Screenshot unavailable: Configuratio trigger Zapier connectens ad spreadsheet Google Forms -->

Finitum! Formam Google Forms cum Zapier est connecta et parata ad integrationem cum network. Nunc quaeramus Actionem quae ex Trigger a quo Google Forms iterum plenitur generetur.

Quaere novam application Ultimate Multisite et eligas eam. Pro hoc specie Zap, eligas optionem Register.

<!-- Screenshot unavailable: Selectio actionis Zapier ostendens application Ultimate Multisite cum optione Register -->

Post hanc primam stapulam, eligas computatrum ad quo hoc Zap connectetur.<!-- Screenshot unavailable: Stapula connectionis computatrum Zapier pro Ultimate Multisite -->

Haec est pars sensissima in omni processu. Debemus campi qui ex Google Forms veniunt cum minimis campis necessarios ad endpoint registrationis, sicut in precedenti sectore huius articlei ostenditur.

In hoc exemplo, solum debemus configurare nomen usitatoris (username), email, password, nomen et URL societatis. Rest est praedeterminat ut omnia membramina generata ex hoc Google Forms eodem pattern producti et status suum sequant.

<!-- Captura de pantalla no disponible: Mapeo de campos entre Google Forms y el endpoint de registro de Ultimate Multisite en Zapier -->

Con la información configurada, procede a la prueba final. En la última pantalla podrás ver todos los campos que se enviarán al endpoint, su información respectiva y los campos que se enviarán vacíos.<!-- Captura de pantalla no disponible: Pantalla de prueba de Zapier mostrando todos los campos a enviar al endpoint de registro -->

Prueba tu nuevo Zap y debería completarse con éxito. Si ocurre algún error, revisa todos los campos y comprueba si se están enviando correctamente. Como hay mucha información, algunas cosas pueden pasar desapercibidas.

### Parámetros completos del endpoint {#complete-endpoint-parameters}

Aquí tienes la llamada completa y todas las posibilidades de campos que se pueden enviar.

"customer_id" : integer, "customer" : { "user_id" : integer, "username" : "string", "password" : "string", "email" : "string" }, "membership" : { "status" : "string", // uno de "pending", "active", "trialing", "expired", "on-hold", "cancelled", "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string" }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // uno de "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string" }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string" }
