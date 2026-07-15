---
title: Mokho a leboha
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Le Tlhaloso le Webhooks (v2)

_**Tlhokwa: Se fa tsela e fanaengang ka ho ba le bohlokoa le ba le fetogoloa.**_

**Webhook** ke tsela e fanaengang ea bonako le software e le ntlha, e le Ultimate Multisite, ea ho fana ka litlhaloso tse di leboha (real-time) sa ba bang. Webhook e fana ka data kapa payloads sa bang sa ba bang ka nako e fetang, e bolela hore o tla **ola data ka tsela e fetang.**

O tla ba le ntho e ntle ha u hloka ho fana ka bohlokoa kapa ho lula data e fetileng ka Ultimate Multisite e tla fana ka CRM kapa hloekano e lebang sa bang ha sebopeho se fetang. Ho na la sebopeho, o tla hloka ho fana ka lemo la moruti le email ea hae ha u leka ho fana ka li-mailing list ha ntlha e ntsha ea moruti e fetola.

## Ke eng e ba le ho fetola webhook {#how-to-create-a-webhook}

Ho fetola webhook, u tla fihla sa dashboard ea hau ea admin ea network. Thaba **Ultimate Multisite > Webhooks > Add New Webhook.**

![Lihlobo la webhook le lits'ho tsa ho add new webhook](/img/admin/webhooks-list-empty.png)

O tla ka fetola configuration ea webhook:

![Form e fetang ea ho add new webhook le litlhaloso tsa Name, Event, le URL](/img/admin/webhook-add-modal.png)

Ha u fetola webhook e ntsha, o tla tšoa le lits'ho tse kang **Name, URL,** le **Event**. U ka u sebelisa lemo le u se batlang ho webhook ea hau. Litlhaloso tse ba bohlokoa ha ke URL le Event.

![Mofuta oa ho fetola webhook o bontšang le field ea URL le preview ea payload](/img/admin/webhook-url-field.png)

URL ke **endpoint kapa le tsoalo** se se tla fana ka Ultimate Multisite sa ba bang **payload kapa data**. Ke software e tla sebelisa data.

Zapier ke ho hlokomela leho le lebotse leba u sebelisang ho etsa integration le applications tse ling ho leboha. Ha u na le platform e le Zapier, o tla hloka ho fetola ka monate function e fetileng ea hau e tla ba le data le ho lula. Hlalosana le sebopeho sa **ho sebelisa Ultimate Multisite webhook le Zapier.**

Morero, mo le fa'aalo basic o le webhook o le auala e fa'atatau ai ma o le mga eventi e fa'avae i Ultimate Multisite. O le a tatou fa'aaogaina se site fa'aopoopo o le [requestbin.com](https://requestbin.com/). O le a tatou fa'amalosia se endpoint ma fa'atatau le payload e fa'atatau ai e fa'aalia, e leai ona fa'aalia i se feso'ota'iga. _**Feso'ota'iga: o le a tatou fa'aalia lava o le fa'aalia o le data ua fa'atatau.**_ O le a tatou fa'aalia se fa'amalosia ma se tasi o le fa'amaonia i le payload.

Fa'aopoopo i [requestbin.com](https://requestbin.com/) ma fa'atatau "Create Request Bin".

A fa'atatau i lea button, o le a tatou fa'amalosia lava i le fa'aalia o se account ae e fa'aalia ai pe a oe e fa'aalia aua. O le a oe e fa'aalia aua, o le a tatou fa'aalia lava i le dashboard o ia. I le dashboard o ia, o le a tatou fa'atatau lava i le endpoint ma URL ua tatou fa'aaogaina i le fa'avae o le webhook Ultimate Multisite o lo'o tatou fa'amalosia.

Fa'aopoopo ma fa'atatau le URL ma fa'aalia i le Ultimate Multisite. Fa'aalia le endpoint i le field o le URL ma fa'atatau se event o le dropdown. I lenei fa'ata'ita'iga, o le a tatou fa'atatau **Payment Received**.

O le event o lo'o fa'atatau lava i le taimi tasi lea ua fa'aalia se tagata e fa'aalia se fa'aopoopo. O le a tatou fa'aalia se events e fa'avae, o le a tatou fa'amalosia, ma o le payload ua fa'aaogaina i le fa'atatau o le fa'aalia. Fa'aalia le button "Add New Webhook" i le taimi lea o le fa'aalia webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

O le a tatou fa'amalosia se test event i le endpoint mo le a tatou fa'atatau lava e fa'aalia ai o le webhook ua tatou fa'aopoopo. O le a tatou fa'aalia lea ma fa'atatau "Send Test Event" i le taimi lea o le webhook ua tatou fa'aopoopo.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

O le a tatou fa'aalia se confirmation window e fa'atatau lava o le test ua mautinoa.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Sekoe le fa ema ka re fa fa mo site _Requestbin_ ke ho fa e le fa ea ba ntlha ya mosebetsi (payload) e tsamaisang tsela e faka ditsela tsa metsi a leboho.

Ke tla go ntlha le maikutlo a botsa ba leboho kae hore o tsebe ka se sekameng sa ea how webhook le endpoints ba li thapelo. Ha u batla ho tsena endpoint e le seo, o tla ithuta ho dira tsela ya fana (custom function) e le seo se tla ba leba ho laola ditsela tsa metsi a leboho tse o leboho kae a leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba leboho ba lebo
