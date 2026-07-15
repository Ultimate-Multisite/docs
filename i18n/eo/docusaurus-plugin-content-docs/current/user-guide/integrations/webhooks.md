---
title: Webhook-oj
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un Prima Vizu de Webhooks (v2)

_**ATTENCO: Notu ki ĉi tiu funkcio aŭ artikolo estas por avantaŭaj uzantoj.**_

Un **webhook** estas maniero, per kiu aplikeco aŭ programaro kiel Ultimate Multisite povas doni al aliaj aplikoj informojn en reala tempo. Un webhook transmetas datum aŭ payload al aliaj aplikoj, dum la evento okazas, signifante ke vi **receptas datumet tutej.**

Tio estas utile se vi bezonas integri aŭ pasigi certajn datumojn de Ultimate Multisite al alia CRM aŭ sistema ĉiam kiam evento estas akcitita. Ekzemple, vi bezonas envi fiam nomon kaj elektronan adreson al elsenda listo ĉiam kiam nova konto uzanto estas kreita.

## Kiel krei webhook-on {#how-to-create-a-webhook}

Por kreti webhook-on, diru al viaj administrajn dashboardo de la rano. Kliku sur **Ultimate Multisite > Webhooks > Add New Webhook.**

![Tisma lista de Webhooks sen butono "Add New Webhook"](/img/admin/webhooks-list-empty.png)

Tamen vi povas modifi la konfiguracion de la webhook:

![Forma por "Add New Webhook" kun la kampoj Nom, Evento kaj URL](/img/admin/webhook-add-modal.png)

Kiam vi kreas novan webhook-on, al vi demandos informojn kiel **Nom, URL** kaj **Evento**. Vi povas uzi kualkine nomon por via webhook. La plej gravaj kampoj estas la URL kaj Evento.

![Interfa por modifi webhook'on montrant la kampon URL kaj la previ de payload](/img/admin/webhook-url-field.png)

URL estas la **punktado aŭ destigo**, al kiu Ultimate Multisite sendos la **payloadn aŭ datumojn**. Ĉi tiu estas la aplikeco, kiu ricevas la datumojn.

Zapier estas la plej komuna solvo, kiun uzantoj uzas por simpligi integriĝon kun triparta aplikoj. Sen platforma kiel Zapier, vi bezonas manuve de krei personalan funkcion, kiu kaptas la datumojn kaj procesas ilin. Vidu ĉi tiian artikolon pri **kial uzi Ultimate Multisite webhook-on kun Zapier.**

En ĉi tiu artikolo ni esploros la bazan koncepton, kiel funkcias webhook kaj kio estas eventoj, kiuj estas valabli en Ultimate Multisite. Ni uzos eksteran siton nomitan [requestbin.com](https://requestbin.com/). Ĉi tiu sito permesos al ni krei endpoint'on kaj kapti la payload sen fari kodadon. _**Deklaro: ĝi faros nur montri al ni, ke la data riceviĝis.**_ Ne haveril da procesado aŭ iu ajn tipo de akcio pri la payload.

Aliriĝu al [requestbin.com](https://requestbin.com/) kaj klikuante sur "Create Request Bin".

Post kiam vi klikas ti butonon, ĝi demandos al vi logi intoj se vi 이미 havas konton aŭ registriĝi. Se vi 이미 havas konton, ĝi kondukos vin direkte al sia dashboardo. Sur sia dashboardo vi tuj vidus la endpoint'on aŭ URL-on, kiun vi povas uzi en la kreado de via Ultimate Multisite webhook.

Kopiu ti URL kaj reveniu al Ultimate Multisite. Polo la endpointon sur la campo URL kaj selektu eventon el la nedropu. En ĉi tiu ekzemplo ni selektos **Payment Received** (Pajto ricevita).

Tio evento estas aktivita ĉiam, kiam uzanto faras pagadon. Ĉiuj valabli eventoj, ilia deskribo kaj payload-oj estas listita al la baz de la paĝo. Klikiu sur la butonon **Add New Webhook** por konservi la webhookon.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Ni povas envi Send Test Event (Envoli testeventon) al la endpointo por ni vidi se la webhook, kiun ni kreis, funkcias. Ni povas fari tion per kliki sur **Send Test Event** sub la webhooko, kiun vi kreis.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Tio montras okazas window'n deklarante, ke la testita sukcesis.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Sek vo _Requestbin_ saj, vi vidë se pakete (payload) janë marra duke përfshirë disa të dhëna testuese.

Ky është principi bazë se si funksionojnë webhook dhe endpoint-et. Nëse dëshironi të krijoni një endpoint të personalizuar, do të duhet të krijoni një funksion të personalizuar për të përpunuar të dhënat që merrni nga Ultimate Multisite.
