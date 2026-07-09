---
title: Aggiornamento di un piano
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Aggiornare un piano (v2) {#upgrading-a-plan-v2}

_**NOTA IMPORTANTE: Questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

I tuoi clienti possono aggiornare i loro piani in qualsiasi momento. Possono aggiornare a un altro piano oppure acquistare eventuali servizi o pacchetti aggiuntivi che offri sulla tua rete.

In questo tutorial vedremo come possono aggiornare il loro piano e cosa succede dopo il processo di aggiornamento.

Per aggiornare il loro piano, i tuoi clienti devono accedere alla loro dashboard e andare alla pagina **Account**.

![Dashboard del sottosito del cliente con link al menu Account visibile](/img/account-page/account-menu.png)

Nella pagina Account, verranno mostrati la loro iscrizione attuale e il piano ad essa associato. Per aggiornare a un altro piano, devono fare clic su **Cambia** nell'angolo in alto a destra della sezione **La tua iscrizione**.

![Pagina Account, scheda La tua iscrizione con pulsante Cambia](/img/account-page/membership-change-button.png)

Saranno reindirizzati a un modulo di checkout in cui verranno visualizzati tutti i piani disponibili.

Potranno anche vedere i **servizi e pacchetti disponibili per il loro piano attuale** , nel caso vogliano semplicemente acquistare un servizio o pacchetto specifico (come visite illimitate o spazio su disco nel nostro esempio qui), e non aggiornare il piano.

![Selettore di aggiornamento che mostra piani e pacchetti disponibili lato cliente](/img/account-page/upgrade-picker.png)

Dopo aver scelto il prodotto che vogliono acquistare, vedranno quanto dovranno pagare subito - escludendo eventuale credito esistente - e quanto verrà addebitato alla prossima data di fatturazione.

Di solito, se il prodotto è un altro piano e il pagamento avverrà tra un addebito dell'iscrizione e l'altro, riceveranno un credito per l'importo pagato sul primo piano.

![Riepilogo del pagamento dell'aggiornamento che mostra il credito applicato e l'importo della prossima fatturazione](/img/account-page/upgrade-summary.png)

Se selezionano un piano o pacchetto che non cambierà nulla rispetto alla sottoscrizione attuale, vedranno un messaggio che lo spiega.

![Avviso quando il piano selezionato non modifica la sottoscrizione](/img/account-page/upgrade-no-change.png)

Dopo il completamento del checkout, i nuovi prodotti verranno aggiunti all'account dei tuoi clienti e tutti i limiti o le funzionalità dei nuovi prodotti vi saranno aggiunti istantaneamente: visite, spazio su disco, post, ecc...

##

##

## Percorsi di upgrade e downgrade {#upgrade-and-downgrade-paths}

Su ciascuno dei tuoi prodotti, avrai una scheda **Up & Downgrades**. La prima opzione in quella scheda è un campo chiamato **Gruppo di piani**.

I **gruppi di piani** sono ciò che permette a Ultimate Multisite di sapere che determinati piani appartengono alla stessa "famiglia" e quindi devono essere usati per costruire le opzioni di percorso di upgrade/downgrade.

![Scheda Up and Downgrades di modifica prodotto con campo Gruppo di piani](/img/config/product-upgrades-plan-group.png)

Ad esempio, hai un **piano Free** , un **Piano Basic** e un **Piano Premium** disponibili. Vuoi che gli utenti sottoscritti al **Piano Free** possano aggiornare solo al **Piano Premium** e non vuoi che vedano il "Piano Basic" come opzione di aggiornamento. Tutto ciò che devi fare è assegnare lo stesso nome di gruppo di piani sia ai piani Free sia Premium, come mostrato negli screenshot qui sotto.

![Pagina prodotto Piano Free con gruppo di piani High End assegnato](/img/config/product-upgrades-free.png)

![Pagina prodotto Piano Premium con gruppo di piani High End assegnato](/img/config/product-upgrades-premium.png)

Questo dovrebbe indicare a Ultimate Multisite che esiste una "famiglia" di piani nella rete chiamata **High End**. Quando vengono offerti upgrade o downgrade, solo i piani della stessa famiglia verranno presentati come opzione per l'utente.
