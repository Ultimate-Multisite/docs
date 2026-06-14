---
title: Configurare pagamenti manuali
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Configurare i Pagamenti Manuali (v2)

_**NOTA IMPORTANTA: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

I pagamenti manuali sono un modo per offrire altri metodi di pagamento se **Stripe** o **PayPal** non sono disponibili per i tuoi utenti. Può essere un bonifico bancario, un trasferimento bancario o qualsiasi altro metodo di pagamento disponibile localmente per i tuoi utenti.

## Come abilitare i Pagamenti Manuali

Configurare i pagamenti manuali è molto semplice. Devi solo abilitarlo sotto gateway di pagamento e inserire istruzioni dettagliate su come l'utente dovrebbe inviare il pagamento.

Innanzitutto, vai a **Ultimate Multisite > Impostazioni > Pagamenti**. Sotto **Gateway di Pagamento**, attiva **Manual**. Vedrai apparire una casella **Istruzioni per il Pagamento** per te.

Aggiungi in questa casella le informazioni di cui il tuo cliente avrà bisogno per effettuare il pagamento. Possono essere i dettagli del tuo conto bancario e la tua email, così il cliente potrà inviarti la conferma del pagamento, ad esempio.

![Interruttore gateway di pagamento manuale con area testo Istruzioni per il Pagamento](/img/config/manual-gateway-expanded.png)

Ecco l'interfaccia delle impostazioni del gateway manuale:

![Impostazioni gateway manuale](/img/config/manual-gateway-settings.png)

Dopo averlo configurato, clicca semplicemente su **Salva Impostazioni** e hai finito. Quando gli utenti si registrano nella tua rete, vedranno un messaggio che li informerà che riceveranno le tue istruzioni per completare l'acquisto.

![Messaggio di conferma registrazione che informa l'utente che riceverà istruzioni di pagamento](/img/frontend/registration-manual-notice.png)

E riceveranno anche un messaggio sulla tua pagina **Grazie** con le tue istruzioni di pagamento.

<!-- Screenshot unavailable: Pagina Grazie che mostra le istruzioni di pagamento dopo il checkout -->

## Conferma dei pagamenti manuali

Ad confirmare un plățile manuale, mergi la meniul **Payments** pe bara stângă. Acolo vei vedea toate plățile din rețeaua ta și detaliile lor, inclusiv **status**. O plată manuală va avea întotdeauna statusul **Pending** până când îl modifici manual.

![Lista plăților care arată o plată manuală în așteptare](/img/admin/payments-list.png)

Introdu pagina de plată făcând clic pe **reference code**. Pe această pagină ai toate detaliile plății în așteptare, cum ar fi ID referință, produsele, timpii și multe altele.

![Pagina cu detalii plăților care arată codul de referință, produsele și totalurile](/img/admin/payment-edit.png)

În coloana dreaptă, poți modifica statusul plății. Schimbarea la **Completed** și activarea opțiunii **Activate Membership** va activa site-ul clientului și membruirea sa va fi activă.

![Pagina de editare a plății cu Status setat pe Completed și comutatorul Activate Membership](/img/admin/payment-activate-membership.png)
