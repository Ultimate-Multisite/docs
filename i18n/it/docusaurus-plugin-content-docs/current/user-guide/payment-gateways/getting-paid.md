---
title: Ricevere Pagamento
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Ottenere Pagamenti (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Ultimate Multisite ha un sistema di abbonamento e fatturazione integrato. Per far funzionare il nostro sistema di fatturazione, abbiamo integrato i gateway di pagamento più comuni utilizzati nell'e-commerce. I gateway di pagamento predefiniti in Ultimate Multisite sono _Stripe_, _PayPal_ e Pagamento Manuale. Puoi anche utilizzare _WooCommerce_, _GoCardless_ e _Payfast_ per ricevere pagamenti installando i rispettivi add‑on.

## Impostazioni di base

Puoi configurare tutti questi gateway di pagamento nelle impostazioni di pagamento di Ultimate Multisite. Puoi trovarle andando su **Ultimate Multisite menu > Settings > Payments.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

Prima di configurare il tuo gateway di pagamento, dai un’occhiata alle impostazioni di pagamento di base che puoi configurare:

**Rinnovo automatico forzato** **w:** Questo assicura che il pagamento si rinnovi automaticamente alla fine di ogni ciclo di fatturazione in base alla frequenza di fatturazione selezionata dall’utente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Consenti prove senza pagamento** **method:** Con questa opzione abilitata il tuo cliente non dovrà inserire alcuna informazione finanziaria durante il processo di registrazione. Sarà richiesto solo quando il periodo di prova scade.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Invia fattura alla conferma del pagamento:** Questa opzione ti consente di decidere se inviare o meno una fattura dopo il pagamento. Tieni presente che gli utenti avranno accesso alla loro cronologia dei pagamenti nella dashboard del loro sottosito. Questa opzione non si applica al Gateway Manuale.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Schema di numerazione delle fatture:** Qui puoi scegliere se utilizzare un codice di riferimento di pagamento o uno schema di numerazione sequenziale. Se scegli di utilizzare un codice di riferimento di pagamento per le tue fatture, non devi configurare nulla. Se scegli di utilizzare uno schema di numerazione sequenziale, dovrai configurare il **next invoice number** (Questo numero verrà utilizzato come numero della fattura per la prossima fattura generata sul sistema. Viene incrementato di uno ogni volta che viene creata una nuova fattura. Puoi cambiarlo e salvarlo per reimpostare il numero sequenziale delle fatture a un valore specifico) e il **invoice number prefix.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## Dove trovare i gateway:

Puoi configurare i gateway di pagamento nella stessa pagina ( **Ultimate Multisite > Settings > Payments**). Sotto **active payment gateways**, potrai vedere: _Stripe_, _Stripe Checkout_, _PayPal_ e _Manual_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

Abbiamo un articolo dedicato per ciascun gateway di pagamento che ti guiderà attraverso i passaggi per configurarlo, che puoi trovare nei link qui sotto.

**Configurare il gateway Stripe**

**Configurare il gateway PayPal**

**Configurare i pagamenti manuali**

Ora, se vuoi utilizzare _WooCommerce_, _GoCardless_ o _Payfast_ come gateway di pagamento, dovrai **installare e configurare i loro add‑on**.

### Come installare l'add‑on WooCommerce:

Comprendiamo che _Stripe_ e _PayPal_ non sono disponibili in alcuni paesi, il che limita o impedisce agli utenti di Ultimate Multisite di utilizzare efficacemente il nostro plugin. Pertanto abbiamo creato un add‑on per integrare _WooCommerce_, un plugin di e‑commerce molto popolare. Sviluppatori di tutto il mondo hanno creato add‑on per integrare diversi gateway di pagamento. Abbiamo sfruttato questa opportunità per estendere i gateway di pagamento che puoi utilizzare con il sistema di fatturazione di Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration richiede che WooCommerce sia attivato almeno sul tuo sito principale._

Per prima cosa, vai alla pagina degli add‑on. Puoi trovarla andando su **Ultimate Multisite > Settings**. Dovresti vedere la tabella **Add-ons**. Fai clic su **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

Dopo aver cliccato su **Check our Add-ons**, verrai reindirizzato alla pagina degli add‑on. Qui puoi trovare tutti gli add‑on di Ultimate Multisite. Fai clic sull'add‑on **Ultimate Multisite: WooCommerce Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Si aprirà una finestra con i dettagli dell'add‑on. Basta fare clic su **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

Dopo l'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Network Activate** e l'add‑on WooCommerce verrà attivato sulla tua rete.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

Dopo averlo attivato, se non hai ancora installato e attivato il plugin WooCommerce sul tuo sito web, riceverai un promemoria.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

Per saperne di più sull'add‑on WooCommerce Integration, **clicca qui**.

### Come installare l'add‑on GoCardless:

I passaggi per installare l'add‑on _GoCardless_ sono praticamente gli stessi dell'add‑on _WooCommerce_. Vai alla pagina degli add‑on e seleziona l'add‑on **Ultimate Multisite: GoCardless Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Si aprirà la finestra dell'add‑on. Fai clic su **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

Dopo l'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Network Activate** e l'add‑on _GoCardless_ verrà attivato sulla tua rete.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

Per imparare come iniziare con il gateway _GoCardless_, **leggi questo articolo**.

### Come installare l'add‑on Payfast:

Vai alla pagina degli add‑on e seleziona l'add‑on **Ultimate Multisite: Payfast Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Si aprirà la finestra dell'add‑on. Fai clic su **Install Now.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

Dopo l'installazione, verrai reindirizzato alla pagina dei plugin. Qui, fai semplicemente clic su **Network Activate** e l'add‑on _Payfast_ verrà attivato sulla tua rete.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
