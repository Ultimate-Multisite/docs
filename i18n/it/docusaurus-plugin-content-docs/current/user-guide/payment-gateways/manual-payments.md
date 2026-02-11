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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U0K40VsARU.png)

Dopo averlo configurato, fai clic su **Save Settings** e il processo è completato. Quando gli utenti si registrano alla tua rete, vedranno un messaggio che indica che riceveranno le tue istruzioni per completare l'acquisto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-drAYOHh331.png)

E riceveranno anche un messaggio sulla tua pagina **Thank You** con le tue istruzioni di pagamento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Nf6HTYbu2g.png)

## Confermare i pagamenti manuali

Per confermare un pagamento manuale, vai al menu **Payments** nella barra laterale sinistra. Qui puoi vedere tutti i pagamenti nella tua rete e i loro dettagli, compreso lo **status**. Un pagamento manuale avrà sempre lo stato **Pending** finché non lo modifichi manualmente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C3U9LgT2Ev.png)

Accedi alla pagina del pagamento facendo clic sul **reference code**. In questa pagina trovi tutti i dettagli del pagamento in sospeso, come l'ID di riferimento, i prodotti, i timestamp e altro.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sXfbxcYFs6.png)

Nella colonna di destra, puoi modificare lo stato del pagamento. Cambiandolo in **Completed** e attivando l'opzione **Activate Membership**, abiliterai il sito del tuo cliente e la loro iscrizione sarà attiva.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-q5hHRxdhfg.png)
