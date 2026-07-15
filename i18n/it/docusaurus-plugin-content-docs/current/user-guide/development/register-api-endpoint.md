---
title: Registra endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# L'endpoint API Register di Ultimate Multisite

In questo tutorial imparerai come usare l'endpoint API /register di Ultimate Multisite per creare l'intero processo di onboarding per un nuovo cliente nella tua rete e come farlo con Zapier.

L'endpoint usa il metodo POST ed è chiamato dall'URL _**https://yoursite.com/wp-json/wu/v2/register**_. In questa chiamata, verranno eseguiti 4 processi all'interno della tua rete:

  * Verrà creato un nuovo utente WordPress o verrà identificato tramite l'ID utente.

  * Verrà creato un nuovo Cliente in Ultimate Multisite o verrà identificato tramite l'ID cliente.

  * Verrà creato un nuovo sito sulla rete WordPress.

  * Alla fine, verrà creata una nuova Membership in Ultimate Multisite.

Per questo processo, avrai bisogno delle tue credenziali API. Per ottenerle, vai al pannello di amministrazione della tua rete, naviga in **Ultimate Multisite > Impostazioni** > **API e Webhooks,** e cerca la sezione Impostazioni API.

![Sezione Impostazioni API in Ultimate Multisite](/img/config/settings-api.png)

Ecco una vista completa della pagina delle impostazioni API:

![Pagina completa delle impostazioni API](/img/config/settings-api-full.png)

Seleziona **Abilita API** e ottieni le tue credenziali API.

Ora esploriamo l'endpoint e poi creiamo un'azione di registrazione in Zapier.

## Parametri del corpo dell'endpoint {#endpoint-body-parameters}

Facciamo una panoramica delle informazioni minime che dobbiamo inviare all'endpoint. Alla fine di questo articolo troverai la chiamata completa.

### Cliente {#customer}

Queste sono le informazioni necessarie per il processo di creazione dell'Utente e del Cliente Ultimate Multisite:

"customer_id" : integer

È possibile inviare l'ID cliente creato nella tua rete. Se non viene inviato, le informazioni qui sotto verranno usate per creare un nuovo cliente e un nuovo utente WordPress. Anche l'ID utente può essere inviato nello stesso modo dell'ID cliente.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

L'unica informazione di cui abbiamo bisogno all'interno di questo oggetto è lo Stato della Membership.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Prodotti** {#products}

Ai prodotti viene fornito un array con 1 o più ID prodotto dalla tua rete. Attenzione, questo endpoint non crea prodotti. Consulta la documentazione di Ultimate Multisite per comprendere meglio l'endpoint di creazione dei prodotti.

**"products" : [1,2],**

### Pagamento {#payment}

Come per la Membership, abbiamo bisogno solo dello stato.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sito {#site}

E per chiudere il corpo abbiamo bisogno dell'URL e del Titolo del sito, entrambi all'interno dell'oggetto Sito.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Il ritorno dell'endpoint register sarà un array con le informazioni della membership appena creata.

## Creazione di un'azione in Zapier {#creating-an-action-in-zapier}

Con l'introduzione di questo nuovo e più robusto endpoint per la creazione dell'Account, avrai anche accesso a una nuova azione in Zapier.

Sai come usare e sfruttare tutto ciò che la nuova versione di Zapier offre? Scopri di più qui. (link?)

### Creazione di un'azione {#creating-an-action}

Per illustrare meglio come usare l'endpoint di registrazione con Zapier, creiamo un'integrazione con Google Forms. Ogni volta che questo modulo viene compilato e le informazioni vengono salvate nel foglio delle risposte del modulo, verrà creata una nuova membership nella rete Ultimate Multisite.

In Google Forms, crea un modulo con i campi minimi necessari per creare una nuova membership nella rete.

<!-- Screenshot non disponibile: modulo Google Forms con campi per creare una nuova membership -->

Ora in Zapier, crea un nuovo Zap e collega il modulo creato in Google tramite il foglio di calcolo in cui vengono salvati i dati.

<!-- Screenshot non disponibile: configurazione del trigger Zapier che si collega al foglio di calcolo di Google Forms -->

Fatto! Il modulo Google Forms è collegato a Zapier ed è pronto per essere integrato con la rete. Ora passiamo all'Azione che risulterà dal Trigger che Google Forms attiva ogni volta che viene compilato.

Trova la nuova app Ultimate Multisite e selezionala. Per questo tipo di Zap scegli l'opzione Register.

<!-- Screenshot non disponibile: selezione dell'azione Zapier che mostra l'app Ultimate Multisite con l'opzione Register -->

Dopo questo primo passaggio, scegli l'Account che sarà collegato a questo Zap.<!-- Screenshot non disponibile: passaggio di connessione dell'Account Zapier per Ultimate Multisite -->

Questa è la parte più delicata dell'intero processo. Dobbiamo associare i campi provenienti da Google Forms con i campi minimi necessari per l'endpoint register, come mostrato nella sezione precedente di questo articolo.

In questo esempio, dobbiamo configurare solo il nome utente, l'email, la password, il nome e l'URL del sito web. Il resto viene lasciato predefinito in modo che tutte le membership generate su questo Google Forms seguano lo stesso modello di prodotto e stato.

<!-- Screenshot non disponibile: mappatura dei campi Zapier tra Google Forms e l'endpoint register di Ultimate Multisite -->

Con le informazioni configurate, procedi al test finale. Nell'ultima schermata puoi vedere tutti i campi che verranno inviati all'endpoint, le rispettive informazioni e i campi che verranno inviati vuoti.<!-- Screenshot non disponibile: schermata di test Zapier che mostra tutti i campi da inviare all'endpoint register -->

Testa il tuo nuovo Zap e dovrebbe completarsi correttamente. Se si verifica un errore, controlla tutti i campi e verifica che vengano inviati correttamente. Poiché ci sono molte informazioni, alcune cose possono passare inosservate.

### Parametri completi dell'endpoint {#complete-endpoint-parameters}

Ecco la chiamata completa e tutte le possibilità di campi che possono essere inviati.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
