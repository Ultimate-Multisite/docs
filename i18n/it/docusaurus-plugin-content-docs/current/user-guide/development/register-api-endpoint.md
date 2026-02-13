---
title: Register API Endpoint
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# L'endpoint API Register di Ultimate Multisite

In questo tutorial, imparerai come utilizzare l'endpoint API /register di Ultimate Multisite per creare l'intero processo di onboarding per un nuovo cliente nella tua rete e come farlo con Zapier.

L'endpoint utilizza il metodo POST e viene chiamato dall'URL _**https://yoursite.com/wp-json/wu/v2/register**_. In questa chiamata, all'interno della tua rete verranno eseguiti 4 processi:

* Verrà creato un nuovo utente WordPress o la sua identificazione tramite l'ID utente.
* Verrà creato un nuovo Cliente in Ultimate Multisite o la sua identificazione tramite l'ID cliente.
* Verrà creato un nuovo sito sulla rete WordPress.
* Alla fine, verrà creato un nuovo Membership in Ultimate Multisite.

Per questo processo, avrai bisogno delle tue credenziali API. Per ottenerle, vai al pannello di amministrazione della tua rete, naviga su **Ultimate Multisite > Settings** > **API & Webhooks**, e cerca la sezione API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)
Seleziona **Enable API** e ottieni le tue credenziali API.

Ora, esploriamo l'endpoint e poi creiamo un'azione di registrazione in Zapier.

## Endpoint body parameters

Diamo un'occhiata alle informazioni minime che dobbiamo inviare all'endpoint. Alla fine di questo articolo troverai la chiamata completa.

### Customer

Queste sono le informazioni necessarie per il processo di creazione dell'Utente e del Cliente Ultimate Multisite:

"customer_id" : integer

È possibile inviare l'ID cliente creato nella tua rete. Se non viene inviato, le informazioni di seguito verranno utilizzate per creare un nuovo cliente e un nuovo utente WordPress. L'ID utente può essere inviato nello stesso modo dell'ID cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

L'unica informazione di cui abbiamo bisogno all'interno di questo oggetto è lo Stato del Membership.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

I prodotti sono forniti in un array con 1 o più ID prodotto dalla tua rete. Attenzione, questo endpoint non crea prodotti. Consulta la documentazione di Ultimate Multisite per comprendere meglio l'endpoint di creazione dei prodotti.

**"products" : [1,2],**

### Payment

Come per il Membership, abbiamo bisogno solo dello stato.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

E per chiudere il corpo, abbiamo bisogno dell'URL e del Titolo del sito, entrambi all'interno dell'oggetto Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Il ritorno dell'endpoint register sarà un array con le informazioni del membership appena creato.

## Creating an action in Zapier

Con l'introduzione di questo nuovo e più robusto endpoint di creazione account, avrai anche accesso a una nuova azione in Zapier.

Sai come utilizzare e sfruttare tutto ciò che la nuova versione di Zapier offre? Scopri di più qui. (link?)

### Creating an action

Per illustrare meglio come utilizzare l'endpoint di registrazione con Zapier, creiamo un'integrazione con Google Forms. Ogni volta che questo modulo viene compilato e le informazioni vengono salvate nel foglio delle risposte, verrà creato un nuovo membership nella rete Ultimate Multisite.

In Google Forms, crea un modulo con i campi minimi necessari per creare un nuovo membership nella rete.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ora in Zapier, crea un nuovo Zap e collega il modulo creato in Google tramite il foglio di calcolo dove sono salvati i dati.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Fatto! Il modulo Google Forms è connesso a Zapier e pronto per essere integrato con la rete. Ora passiamo all'Azione che risulterà dal Trigger che Google Forms attiva ogni volta che viene compilato.

Trova la nuova app Ultimate Multisite e selezionala. Per questo tipo di Zap scegli l'opzione Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

After this first step, choose the account that will be connected with this Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Questa è la parte più sensibile dell'intero processo. Dobbiamo abbinare i campi provenienti da Google Forms con i campi minimi necessari per l'endpoint di registrazione, come mostrato nella sezione precedente di questo articolo.

In questo esempio, dobbiamo configurare solo l'username, l'email, la password, il nome e l'URL del sito. Il resto è lasciato predefinito in modo che tutti i membership generati su questo Google Forms seguano lo stesso modello di prodotto e stato.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

With the information set up, proceed to the final test. On the last screen you can see all the fields that will be sent to the endpoint, their respective information and the fields that will be sent empty.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testa il tuo nuovo Zap e dovrebbe completarsi con successo. Se si verifica un errore, controlla tutti i campi e se vengono inviati correttamente. Poiché ci sono molte informazioni, alcune cose possono passare inosservate.

### Complete endpoint parameters

Ecco la chiamata completa e tutte le possibilità di campi che possono essere inviati.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
