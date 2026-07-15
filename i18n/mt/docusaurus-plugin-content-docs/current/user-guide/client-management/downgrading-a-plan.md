---
title: Għal-downgrading ta plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Downgrading a plan (v2)

_**NOTA IMPORTANTI: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Downgradare un piano o un abbonamento è un'azione comune che i vostri clienti potrebbero fare se hanno un budget limitato o se hanno deciso che non avranno bisogno di molte risorse per far funzionare il loro subsite.

## Come abbassare il piano (downgrade) {#how-to-downgrade-a-plan}

I vostri clienti possono abbassare il loro piano in qualsiasi momento effettuando il login al dashboard di amministrazione del loro subsite e cliccando su **Change** (Cambia) sotto la pagina del loro account.

![Pagina dell'account cliente con la tua carta Membership e pulsante Change](/img/account-page/membership-change-button.png)

Dopo aver cliccato sul pulsante **Change**, l'utente/cliente verrà reindirizzato alla pagina di checkout dove potrà selezionare il piano a cui desidera cambiare il suo abbonamento.

![Pagina delle opzioni per abbassare il piano lato cliente](/img/account-page/downgrade-picker.png)

In questo esempio, stiamo abbassando il piano da **Premium** a **Free**.

Per procedere l'utente deve solo cliccare sul pulsante **Complete Checkout** (Completa Checkout). Successivamente, verrà riportato alla pagina dell'account mostrando un messaggio riguardo al cambiamento in sospeso per la membership. I cambiamenti entreranno in vigore nel **prossimo ciclo di fatturazione** del cliente.

![Pagina dell'account che mostra il banner del cambiamento in sospeso della membership](/img/account-page/pending-change.png)

### Cosa succede quando un utente abbassa il suo piano {#what-happens-when-a-user-downgrades-their-plan}

È importante notare che abbassare il piano non modifica la configurazione esistente nel subsite dell'utente.

Non cambia automaticamente il template del sito perché cambiare il template del sito cancellerebbe completamente e resettarebbe il subsite. Questo serve a evitare perdite di dati inutili. Quindi spazio su disco, temi, plugin ecc rimarranno intatti tranne i post.

Nfhum inna l-questjoni primariet tiegħek se jkun il-limit u l-quota li tgħtieħha ta' plan kien il-problema, iżda għandna nħasu wkoll l-danni li jkun fejn na eliminiemu jew nġeddu konfigurat għal subsite.

B'mod kif ma jkun posts (artikoli) ewimin mill-limit impost fuq il-plan, għandek 3 opzioni differenti: **Keep the posts as it** *,* **Move the posts to trash** *,* jew **Move the posts to draft** *. Tista' tsetConfiga dan xi ħaġa ta' dawk sotto settings tal-Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### X'għad se jkun l-pagament {#what-happens-to-the-payment}

F'versjoni 2.0, ma għandu jaħtieġx xi aġustamenti fuq il-pagament dwar il proration (parti tal-ciclu),

Dan hija minħabba li is-sistema tagħmel attesa li l-membership esistenti **jkompletti il-ciclu tal-fatturazzjoni qabel** ma jkun aktivi il-plan/membership ġdid. Il-import tal-pagament għall-membership ġdid jitapplikaw u jitqagħdu awtomatik fuq il-ciclu tal-fatturazzjoni li jġ persegwju.
