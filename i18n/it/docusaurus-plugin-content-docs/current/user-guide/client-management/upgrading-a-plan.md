---
title: Aggiornamento di un piano
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Aggiornamento di un Piano (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

I tuoi clienti possono aggiornare i loro piani in qualsiasi momento. Possono aggiornare a un altro piano o acquistare qualsiasi servizio o pacchetto aggiuntivo che offri nella tua rete.

In questo tutorial copriremo come possono aggiornare il loro piano e cosa succede dopo il processo di aggiornamento.

Per aggiornare il loro piano, i tuoi clienti dovrebbero accedere alla loro dashboard e andare alla pagina **Account**.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Nella pagina Account, verrà mostrato il loro attuale abbonamento e il piano associato. Per aggiornare a un altro piano, devono fare clic su **Change** nell'angolo in alto a destra della sezione **Your Membership**.

![Your Membership section with Change button](/img/admin/memberships-list.png)

Veranno reindirizzati a un modulo di checkout dove verranno visualizzati tutti i piani disponibili.

Potranno anche vedere i **servizi e pacchetti disponibili per il loro piano attuale**, nel caso volessero solo acquistare un servizio o pacchetto specifico (come visite illimitate o spazio su disco nel nostro esempio qui), e non aggiornare il piano.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

Dopo aver scelto il prodotto che vogliono acquistare, vedranno quanto dovranno pagare subito - escludendo eventuali crediti esistenti - e quanto verrà addebitato alla prossima data di fatturazione.

Di solito, se il prodotto è un altro piano e il pagamento avverrà tra un addebito di abbonamento, riceveranno un credito per l'importo pagato sul primo piano.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

Se selezionano un piano o pacchetto che non cambierà nulla dall'abbonamento attuale, vedranno un messaggio che spiega ciò.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

Dopo che il checkout è completato, i nuovi prodotti verranno aggiunti all'account dei tuoi clienti e tutti i limiti o le funzionalità dei nuovi prodotti verranno aggiunti istantaneamente: visite, spazio su disco, post, ecc...

## 

## 

## Percorsi di Aggiornamento e Downgrade

Su ciascuno dei tuoi prodotti avrai una scheda **Up & Downgrades**. La prima opzione su quella scheda è un campo chiamato **Plan Group**.

**Plan groups** è ciò che consente a Ultimate Multisite di sapere che determinati piani appartengono alla stessa "famiglia", e quindi dovrebbero essere usati per costruire opzioni di percorso di aggiornamento/downgrade.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

Ad esempio, hai un **Free plan**, un **Basic Plan** e un **Premium Plan** disponibili. Vuoi che gli utenti sottoscritti al **Free Plan** possano aggiornare solo al **Premium Plan** e non vuoi che vedano il "Basic Plan" come opzione di aggiornamento. Tutto ciò che devi fare è assegnare lo stesso nome di gruppo di piani sia per Free che per Premium come mostrato negli screenshot qui sotto.

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

Ciò dovrebbe indicare a Ultimate Multisite che esiste una "famiglia" di piani nella rete chiamata **High End**. Quando si offrono aggiornamenti o downgrade, solo i piani della stessa famiglia verranno presentati come opzione per l'utente.
