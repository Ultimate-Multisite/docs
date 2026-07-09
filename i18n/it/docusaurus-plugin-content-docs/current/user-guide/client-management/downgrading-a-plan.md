---
title: Effettuare il downgrade di un piano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Effettuare il downgrade di un piano (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Effettuare il downgrade di un piano o di un abbonamento è un’azione comune che i tuoi clienti potrebbero compiere se hanno un budget limitato o hanno deciso che non avranno bisogno di molte risorse per gestire il loro sottosito.

## Come effettuare il downgrade di un piano

I tuoi clienti possono effettuare il downgrade del loro piano in qualsiasi momento accedendo alla Dashboard di amministrazione del loro sottosito e facendo clic su **Change** nella pagina del loro Account.

![Pagina Account del cliente con scheda Your Membership e pulsante Change](/img/account-page/membership-change-button.png)

Dopo aver fatto clic sul pulsante **Change**, l’utente/cliente verrà reindirizzato alla pagina di checkout, dove potrà selezionare il piano a cui desidera modificare il proprio abbonamento.

![Pagina delle opzioni di downgrade del piano lato cliente](/img/account-page/downgrade-picker.png)

In questo esempio, stiamo effettuando il downgrade del piano da **Premium** a **Free**.

Per procedere, l’utente deve semplicemente fare clic sul pulsante **Complete Checkout**. Verrà quindi riportato alla pagina Account, dove verrà mostrato un messaggio relativo alla modifica in sospeso per la membership. Le modifiche avranno effetto nel **prossimo ciclo di fatturazione** del cliente.

![Pagina Account che mostra il banner di modifica della membership in sospeso](/img/account-page/pending-change.png)

### Cosa succede quando un utente effettua il downgrade del proprio piano

È importante notare che il downgrade del piano non modifica la configurazione esistente nel sottosito dell’utente.

Non cambia automaticamente il template del sito, poiché cambiare il template del sito cancellerebbe completamente e reimposterebbe il sottosito. Questo serve a evitare una perdita di dati non necessaria. Quindi spazio su disco, temi, plugin ecc. rimarranno intatti, ad eccezione degli articoli.

Comprendiamo che la tua principale preoccupazione siano i limiti e le quote che imposti per ciascun piano, ma dobbiamo considerare il danno che verrebbe arrecato al sottosito dell’utente se eliminassimo o modificassimo una qualsiasi delle sue configurazioni.

Per gli articoli che superano il limite impostato nel piano, hai 3 diverse opzioni: **Keep the posts as it** *,* **Move the posts to trash** *,* oppure **Move the posts to draft** *.* Puoi configurarlo nelle impostazioni di Ultimate Multisite.

![Pagina Sites delle impostazioni Network Admin che mostra le opzioni di comportamento per il superamento del limite degli articoli](/img/account-page/settings-sites-post-limit.png)

### Cosa succede al pagamento

Nella versione 2.0, non richiede più alcun adeguamento del pagamento in termini di ripartizione proporzionale.

Questo perché il sistema attenderà che la membership esistente **completi il suo ciclo di fatturazione prima** che il nuovo piano/la nuova membership entri in vigore. Il nuovo importo di fatturazione per la nuova membership verrà applicato e addebitato automaticamente nel ciclo di fatturazione successivo.
