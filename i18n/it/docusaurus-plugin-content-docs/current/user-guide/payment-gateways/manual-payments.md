---
title: Impostare pagamenti manuali
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Configurare i pagamenti manuali (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

I pagamenti manuali sono un modo per offrirti altri metodi di pagamento nel caso in cui **Stripe** o **PayPal** non siano disponibili per i tuoi utenti. Può trattarsi di un bonifico bancario o di qualsiasi altro metodo di pagamento disponibile localmente per i tuoi utenti.

## Come abilitare i pagamenti manuali

Configurare i pagamenti manuali è molto semplice. Devi solo abilitarli sotto i gateway di pagamento e inserire istruzioni dettagliate su come l'utente deve inviare il pagamento.

Per prima cosa, vai su **Ultimate Multisite > Settings > Payments**. Sotto **Payment Gateways**, attiva **Manual**. Vedrai comparire una casella **Payment Instructions**.

Aggiungi a questa casella le informazioni di cui il tuo cliente avrà bisogno per effettuare il pagamento. Può trattarsi dei dettagli del tuo conto bancario e della tua email in modo che il cliente possa inviarti la conferma del pagamento, ad esempio.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

Dopo averlo configurato, fai clic su **Save Settings** e il processo è completato. Quando gli utenti si registrano alla tua rete, vedranno un messaggio che indica che riceveranno le tue istruzioni per completare l'acquisto.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

E riceveranno anche un messaggio sulla tua pagina **Thank You** con le tue istruzioni di pagamento.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Confermare i pagamenti manuali

Per confermare un pagamento manuale, vai al menu **Payments** nella barra laterale sinistra. Qui puoi vedere tutti i pagamenti nella tua rete e i loro dettagli, compreso lo **status**. Un pagamento manuale avrà sempre lo stato **Pending** finché non lo modifichi manualmente.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Accedi alla pagina del pagamento facendo clic sul **reference code**. In questa pagina trovi tutti i dettagli del pagamento in sospeso, come l'ID di riferimento, i prodotti, i timestamp e altro.

![Payment details page with reference code and products](/img/admin/payments-list.png)

Nella colonna di destra, puoi modificare lo stato del pagamento. Cambiandolo in **Completed** e attivando l'opzione **Activate Membership**, abiliterai il sito del tuo cliente e la loro iscrizione sarà attiva.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
