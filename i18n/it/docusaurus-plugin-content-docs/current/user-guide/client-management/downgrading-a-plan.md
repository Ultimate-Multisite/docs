---
title: Riduzione di un piano
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Downgrading a plan (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Ridurre un piano o un abbonamento è un'azione comune che i vostri clienti potrebbero intraprendere se hanno un budget limitato o hanno deciso di non aver bisogno di molte risorse per gestire il loro sottosito.

## How to downgrade a plan

I vostri clienti possono ridurre il loro piano in qualsiasi momento accedendo al pannello di amministrazione del sottosito e facendo clic su **Change** nella pagina del loro account.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sprLyB2iMU.png)

Dopo aver cliccato sul pulsante **Change**, l'utente/cliente verrà reindirizzato alla pagina di checkout dove potrà selezionare il piano a cui desidera modificare l'abbonamento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aTnhJPFVFh.png)

In questo esempio, stiamo riducendo il piano da **Premium** a **Free**.

Per procedere, l'utente deve semplicemente fare clic sul pulsante **Complete Checkout**. Verrà quindi riportato alla pagina dell'account con un messaggio riguardante la modifica in sospeso per l'abbonamento. Le modifiche entreranno in vigore al **prossimo ciclo di fatturazione** del cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E2qcjxzDDG.png)

### What happens when a user downgrades their plan

È importante notare che ridurre il piano non altera la configurazione esistente nel sottosito dell'utente.

Non cambia automaticamente il modello del sito poiché modificare il modello del sito cancellerebbe e reimposterebbe completamente il sottosito. Ciò serve a evitare perdite di dati inutili. Quindi spazio su disco, temi, plugin ecc. rimarranno intatti tranne i post.

Comprendiamo che la vostra principale preoccupazione siano i limiti e le quote che impostate per ciascun piano, ma dobbiamo considerare i danni che causerebbe alla sottosito dell'utente se dovessimo eliminare o modificare le sue configurazioni.

Per i post che superano il limite impostato sul piano, avete 3 opzioni diverse: **Mantieni i post così** *,* **Sposta i post nel cestino** *,* o **Sposta i post in bozza** *.* Potete configurare questa opzione nelle impostazioni di Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztHV8cZDG0.png)

### What happens to the payment

Nella versione 2.0, non è più necessario alcun aggiustamento sul pagamento in termini di prorata.

Ciò è dovuto al fatto che il sistema attenderà che l'abbonamento esistente **completi il suo ciclo di fatturazione prima** che il nuovo piano/abbonamento entri in vigore. L'importo di fatturazione per il nuovo abbonamento verrà automaticamente applicato e addebitato al **prossimo ciclo di fatturazione**.
