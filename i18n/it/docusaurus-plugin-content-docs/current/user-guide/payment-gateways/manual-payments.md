---
title: Configurazione dei pagamenti manuali
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configurazione dei pagamenti manuali (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

I pagamenti manuali sono un modo per offrire altri metodi di pagamento nel caso in cui **Stripe** o **PayPal** non siano disponibili per i tuoi utenti. Può trattarsi di un bonifico bancario o di qualsiasi altro metodo di pagamento disponibile localmente per i tuoi utenti.

## Come abilitare i pagamenti manuali

Configurare il pagamento manuale è molto semplice. Devi solo abilitarlo tra i gateway di pagamento e inserire istruzioni dettagliate su come l'utente deve inviare il pagamento.

Per prima cosa, vai su **Ultimate Multisite > Impostazioni > Pagamenti**. Sotto **Gateway di pagamento**, attiva **Manuale**. Vedrai comparire un riquadro **Istruzioni di pagamento**.

Aggiungi in questo riquadro le informazioni di cui il tuo cliente avrà bisogno per effettuare il pagamento. Possono essere, ad esempio, i dati del tuo conto bancario e la tua email, così il cliente potrà inviarti la conferma del pagamento.

![Interruttore del gateway di pagamento manuale con area di testo per le istruzioni di pagamento](/img/config/manual-gateway-expanded.png)

Ecco l'interfaccia delle impostazioni del gateway manuale:

![Impostazioni del gateway manuale](/img/config/manual-gateway-settings.png)

Dopo averlo configurato, fai semplicemente clic su **Salva impostazioni** ed è fatto. Quando gli utenti si registrano alla tua rete, vedranno un messaggio che indica che riceveranno le tue istruzioni per completare l'acquisto.

![Messaggio di conferma della registrazione che informa l'utente che riceverà le istruzioni di pagamento](/img/frontend/registration-manual-notice.png)

E riceveranno anche un messaggio sulla tua pagina **Grazie** con le tue istruzioni di pagamento.

<!-- Screenshot non disponibile: pagina Grazie che mostra le istruzioni di pagamento dopo il checkout -->

## Confermare i pagamenti manuali

Per confermare un pagamento manuale, vai al menu **Pagamenti** nella barra a sinistra. Lì puoi vedere tutti i pagamenti nella tua rete e i relativi dettagli, incluso il loro **stato**. Un pagamento manuale avrà sempre lo stato **In sospeso** finché non lo modifichi manualmente.

![Elenco dei pagamenti che mostra un pagamento manuale in sospeso](/img/admin/payments-list.png)

Accedi alla pagina del pagamento facendo clic sul **codice di riferimento**. In questa pagina trovi tutti i dettagli del pagamento in sospeso, come ID di riferimento, prodotti, timestamp e altro.

![Pagina dei dettagli del pagamento che mostra codice di riferimento, prodotti e totali](/img/admin/payment-edit.png)

Nella colonna a destra, puoi modificare lo stato del pagamento. Cambiarlo in **Completato** e **attivare l'opzione Attiva membership** abiliterà il sito del tuo cliente e la sua membership sarà attiva.

![Pagina di modifica del pagamento con Stato impostato su Completato e interruttore Attiva membership](/img/admin/payment-activate-membership.png)
