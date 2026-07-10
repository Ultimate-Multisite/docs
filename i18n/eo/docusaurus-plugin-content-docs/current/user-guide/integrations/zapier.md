---
title: Integrado Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrado de Ultimate Multisite kun Zapier {#integrating-ultimate-multisite-with-zapier}

En una de las artiklojn, diskutamos [Webhooks](webhooks.md) kaj kiel ili povas esti uzata por integriĝi kun 3-a partaj aplikoj.

Uzo de webhooks estas ipliĝas unue ĉar ĝi postulas avan pli altnivelajn sciojn en kodado kaj kaptado de payload'oj. Uzo de **Zapier** estas maniero, per kiu vi povas eviti tion.

Zapier havas integriĝon kun pli ol 5000+ aplikoj, kio simpligas komunikadon inter diversaj aplikoj.

Vi povas krei **Trigerojn** kiuj iniciatas, kiam eventoj okazas en via reto (ekzemple, konto estas kreita kaj iniciatas la eventon `account_create`) aŭ generi **Aktionojn** en via reto reagant al eksteraj eventoj (ekzemple, kreo nova membrojn de kontuo en via Ultimate Multisite reto).

Tio estas ebla ĉar **Ultimate Multisite Zapier's triggers** kaj actionoj estas provizitaj per la [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kiel komenci {#how-to-start}

Unue, serĉu Ultimate Multisite en la listo de aplikoj de Zapier. Alternativ, vi povas kliki sur [ ĉi ti linko](https://zapier.com/apps/wp-ultimo/integrations).

Aliri al via dashboard kaj presi la butonon **+** **Create Zap** (Krei Zap) sur la malparola flanĝa baro por montri novan Zapon.

![Zapier dashboard kun butono Create Zap](/img/admin/webhooks-list.png)

Vi estu redirekti al la paĝo de kreo Zapo.

En la serĉbaxo skribi "wp ultimo". Kliki por elekti la **Beta** version opcio.

![Serĉado de WP Ultimo en la listo de aplikoj de Zapier](/img/admin/webhooks-list.png)

Post selekti vian aplikon, elektu la disponiblajn eventon: **New Ultimate Multisite Event**.

![Selekti Nova Ultimate Multisite Event trigeron](/img/admin/webhooks-list.png)

Sekve ni bezonas doni al Zapier aliro al **via reto**. Klikado en **Sign in** (Inlogiĝi) öppov novan fenestrion, kiu postulas la **API credentials** (kredencijoj de API).

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Alui alvuo alviare la vostra paneli de administro de reto, navigua a **Ultimate Multisite > Settings** > **API & Webhooks** kaj rigardu la sekcion "API Settings".

Selekta la opcio **Enable API**, ĉar ĝi estas necesa por ĉi tiu konekto funkcii.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Uzu la ikone **Copy to Clipboard** sur la kampoj API Key kaj API Secret kaj pastektu ti valor en la skreĉa ekrano de integriĝo.

Sur la URL-kampo, mettu vian plena reto URL, inkluzive la protokolo (HTTP aŭ HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klakitu la buton **Yes, Continue** por pasigi al la sekva paŝo. Se ĉio funkcias bone, vi devas vidi vian novan konektitan konton! Klikitu sur **Continue** por krei novan trigger.

## Kiel krei novan Trigger {#how-to-create-a-new-trigger}

Sekure ke via konto estas konektita, vi povas vidi la disponiblajn eventojn. Kreu la eventon **payment_received** por ĉi tiu tutoria.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Kiam la evento estas selektita kaj vi klikas sur **continue**, alvenas **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

En ĉi tiu stadio, Zapier testos se via Zap povas **extrakti la specifan payload por tiu evento**. En estonteco de la sama tipografia eventoj, informoj kun ĉi tiu sama strukturo sera sendita.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

En nia tutoria test estis **kompletis sukcese** kaj retornos la ekzempla informo de la payload. Ĉi tiu ekzempla informo uzebla por gvidi nin pri kreado de agoj. Via trigger estas nun kreita kaj lista por esti konektita al aliaj aplikoj.

## Kiel krei Actions {#how-to-create-actions}

Actions uzas informojn de aliaj triggers por krei novajn enirojn en via retoj.

En la **kreado de paŝo de action**, vi elektos Ultimate Multisite **Beta** kaj la opcion **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

En la sekva paŝo vi aŭ kreis vian autentifikadon, kiel ni fariĝis en **Kiel komenci**, aŭ selektas kreitan autentifikadon. En ĉi tiu tutoria ni elektos la saman autentifikadon antaŭe kreitan.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Konfigurado de la Action {#setting-up-the-action}

Tio estas la ** ĉefa paŝo de la action**, kaj ĉi tie thingaj estas unua pli malsamiĝantaj. La unua informo, kiun vi elektas, estas la **Item**. Item estas la **modelon de informoj** de via reto, kiel **Customers (Kastmelieroj), Payments (Pagoj), Sites (Sitoj), Emails (Emailoj)** kaj aliaj.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Kiam vi selektas unuan itemon, la formo **reorganizas sin por porti la bezonajn kaj opcionajn kampojn** por la selektita itemo.

Ekzemple, kiam vi selektas la itemon **Customer (Kastmelier)**, la kampoj de la formo portos ĉion necesan por plenumi por krei novan Kastomilon en la retoj.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Post plenumado de ĉiuj kampoj markitaj kiel **requirita** kaj klikado sur continue, via lasta skrimi montros al vi la plenumi kampojn kaj la kampojn, kiuj restis nepleniti.

![Test de aksio Zapier montranta kampojn pleneplenus kaj nepleneplenus](/img/admin/webhooks-list.png)

Tiam, ĉamblas via testa kaj ĝi estas sukcesita, via aksio estas konfiguraita. Ĝi ankaŭ estas grava kontroli vian reton, ĉu la elemento estis kreita per la testado de via aksio.
