---
title: Ricevere pagamenti
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ricevere pagamenti (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Ultimate Multisite ha un sistema integrato di membership e fatturazione. Per far funzionare il nostro sistema di fatturazione, abbiamo integrato i gateway di pagamento più comuni usati nell'e-commerce. I gateway di pagamento predefiniti in Ultimate Multisite sono _Stripe_ , _PayPal_ e Pagamento manuale. Puoi anche usare _WooCommerce_ , _GoCardless_ e _Payfast_ per ricevere pagamenti installando i rispettivi add-on.

## Impostazioni di base {#basic-settings}

Puoi configurare uno qualsiasi di questi gateway di pagamento nelle impostazioni di pagamento di Ultimate Multisite. Puoi trovarle andando su **menu Ultimate Multisite > Impostazioni > Pagamenti.**

![Pagina delle impostazioni dei pagamenti in Ultimate Multisite che mostra il pannello Pagamenti](/img/config/payments-settings-page.png)

Prima di configurare il tuo gateway di pagamento, dai un'occhiata alle impostazioni di pagamento di base che puoi configurare:

**Forza rinnovo auto** **matico:** Questo farà in modo che il pagamento si ripeta automaticamente alla fine di ogni ciclo di fatturazione, in base alla frequenza di fatturazione selezionata dall'utente.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 verifica se il gateway attivo dispone di una credenziale di rinnovo riutilizzabile prima di salvare una membership ricorrente con rinnovo automatico abilitato. Una credenziale di rinnovo può essere un abbonamento del gateway, un accordo di fatturazione, un token vault salvato o un metodo di pagamento riutilizzabile equivalente. Se il gateway segnala che non esiste alcuna credenziale utilizzabile, Ultimate Multisite salva la membership ma disattiva il rinnovo automatico e registra lo stato di credenziale mancante, così che un amministratore o un flusso di supporto possa chiedere al cliente di riautorizzare il pagamento prima della data di rinnovo.

Questo impedisce che una membership sembri rinnovarsi automaticamente quando il gateway può riscuotere solo pagamenti una tantum. Gli add-on dei gateway dovrebbero confermare che i checkout ricorrenti memorizzino una credenziale riutilizzabile, soprattutto quando il gateway supporta sia l'acquisizione una tantum sia le modalità di pagamento vaulted/subscription.

**Consenti prove senza metodo di pagamento** **:** Con questa opzione abilitata, il tuo cliente non dovrà aggiungere alcuna informazione finanziaria durante il processo di registrazione. Sarà richiesta solo una volta scaduto il periodo di prova.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Invia fattura alla conferma del pagamento:** Questa opzione ti consente di scegliere se inviare o meno una fattura dopo il pagamento. Nota che gli utenti avranno accesso alla loro cronologia dei pagamenti nella dashboard del loro sottosito. Questa opzione non si applica al gateway manuale.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schema di numerazione delle fatture:** Qui puoi selezionare un codice di riferimento del pagamento oppure uno schema con numero sequenziale. Se scegli di usare un codice di riferimento del pagamento per le tue fatture, non devi configurare nulla. Se scegli di usare uno schema con numero sequenziale, dovrai configurare il **prossimo numero di fattura** (Questo numero verrà usato come numero di fattura per la prossima fattura generata nel sistema. Viene incrementato di uno ogni volta che viene creata una nuova fattura. Puoi modificarlo e salvarlo per reimpostare il numero sequenziale della fattura su un valore specifico) e il **prefisso del numero di fattura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Dove trovare i gateway: {#where-to-find-the-gateways}

Puoi configurare i gateway di pagamento nella stessa pagina ( **Ultimate Multisite > Impostazioni > Pagamenti**). Subito sotto **gateway di pagamento attivi** , potrai vedere: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ e _Manuale_.

![Sezione Gateway di pagamento attivi che elenca Stripe, Stripe Checkout, PayPal e Manuale](/img/config/payments-active-gateways.png)

Abbiamo un articolo dedicato per ciascun gateway di pagamento che ti guiderà attraverso i passaggi per configurarlo, che puoi trovare nei link qui sotto.

Puoi visualizzare e modificare i dettagli del pagamento:

![Interfaccia di modifica del pagamento](/img/admin/payment-edit.png)

Ecco una visualizzazione completa della pagina di modifica del pagamento:

![Interfaccia completa di modifica del pagamento](/img/admin/payment-edit-full.png)

Ecco anche una visualizzazione completa delle impostazioni dei gateway di pagamento:

![Pagina completa delle impostazioni dei gateway di pagamento](/img/config/settings-payments-gateways-full.png)

**Configurazione del gateway Stripe**

**Configurazione del gateway PayPal**** **

**Configurazione dei pagamenti manuali**

Ora, se vuoi usare _WooCommerce_ , _GoCardless_ o _Payfast_ come gateway di pagamento, dovrai **installare e configurare i loro add-on**.

### Come installare l'add-on WooCommerce: {#how-to-install-the-woocommerce-add-on}

Sappiamo che _Stripe_ e _PayPal_ non sono disponibili in alcuni paesi, il che limita o ostacola gli utenti di Ultimate Multisite nell'uso efficace del nostro plugin. Per questo abbiamo creato un add-on per integrare _WooCommerce,_ che è un plugin di e-commerce molto popolare. Sviluppatori in tutto il mondo hanno creato add-on per integrare diversi gateway di pagamento con esso. Abbiamo sfruttato questa possibilità per estendere i gateway di pagamento che puoi usare con il sistema di fatturazione di Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration richiede che WooCommerce sia attivato almeno sul tuo sito principale._

Per prima cosa, vai alla pagina degli add-on. Puoi trovarla andando su **Ultimate Multisite > Impostazioni**. Dovresti vedere la tabella **Add-on**. Fai clic su **Scopri i nostri Add-on**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Dopo aver fatto clic su **Scopri i nostri Add-on** , verrai reindirizzato alla pagina degli add-on. Qui puoi trovare tutti gli add-on di Ultimate Multisite. Fai clic sull'add-on **Ultimate Multisite: WooCommerce Integration**.

![Pagina degli add-on che elenca gli add-on di Ultimate Multisite, inclusa WooCommerce Integration](/img/addons/addons-page.png)

Si aprirà una finestra con i dettagli del componente aggiuntivo. Fai semplicemente clic su **Installa ora**.

<!-- Screenshot non disponibile: finestra di dialogo dei dettagli del componente aggiuntivo Ultimate Multisite WooCommerce Integration con pulsante Installa ora -->

Al termine dell'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Attiva nella rete** e il componente aggiuntivo WooCommerce verrà attivato sulla tua rete.

<!-- Screenshot non disponibile: pagina dei plugin con il link Attiva nella rete per il componente aggiuntivo WooCommerce Integration -->

Dopo averlo attivato, se non hai ancora installato e attivato il plugin WooCommerce sul tuo sito web, riceverai un promemoria.

<!-- Screenshot non disponibile: avviso di amministrazione che ricorda all'amministratore di installare e attivare il plugin WooCommerce -->

Per saperne di più sul componente aggiuntivo WooCommerce Integration, **fai clic qui**.

### Come installare il componente aggiuntivo GoCardless: {#how-to-install-the-gocardless-add-on}

I passaggi per installare il componente aggiuntivo _GoCardless_ sono praticamente gli stessi del componente aggiuntivo _WooCommerce_. Vai alla pagina dei componenti aggiuntivi e seleziona il componente aggiuntivo **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot non disponibile: pagina dei componenti aggiuntivi con il componente aggiuntivo Ultimate Multisite GoCardless Gateway evidenziato -->

Si aprirà la finestra del componente aggiuntivo. Fai clic su **Installa ora**.

<!-- Screenshot non disponibile: finestra di dialogo dei dettagli del componente aggiuntivo Ultimate Multisite GoCardless Gateway con pulsante Installa ora -->

Al termine dell'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Attiva nella rete** e il componente aggiuntivo _GoCardless_ verrà attivato sulla tua rete.

<!-- Screenshot non disponibile: pagina dei plugin con il link Attiva nella rete per il componente aggiuntivo GoCardless Gateway -->

Per scoprire come iniziare a usare il gateway _GoCardless_, **leggi questo articolo**.

### Come installare il componente aggiuntivo Payfast: {#how-to-install-the-payfast-add-on}

Vai alla pagina dei componenti aggiuntivi e seleziona il componente aggiuntivo **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot non disponibile: pagina dei componenti aggiuntivi con il componente aggiuntivo Ultimate Multisite Payfast Gateway evidenziato -->

Si aprirà la finestra del componente aggiuntivo. Fai clic su **Installa ora.**

<!-- Screenshot non disponibile: finestra di dialogo dei dettagli del componente aggiuntivo Ultimate Multisite Payfast Gateway con pulsante Installa ora -->

Al termine dell'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Attiva nella rete** e il componente aggiuntivo _Payfast_ verrà attivato sulla tua rete.

<!-- Screenshot non disponibile: pagina dei plugin con il link Attiva nella rete per il componente aggiuntivo Payfast Gateway -->
