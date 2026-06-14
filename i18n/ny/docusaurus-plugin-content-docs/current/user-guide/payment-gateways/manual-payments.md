---
title: Kuthandiza Mapemba Akuluwimi
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Kufunga Malipamo Yosamukulu (v2)

_**KUFUNSA KUTI: Iye ndikufufuza Ultimate Multisite version 2.x.**_

Malipamo yosamukulu ndi njira yomwe mungupereke kuti muli ndi njira zina za malipamo ngati **Stripe** kapena **PayPal** si ndi kwa anthu anu. Imene ndi kukhala kowonjezera (wire) kapena kupasa m'banki kapena njira yosamukulu yomwezi anthu anu ali nayo m'lokalilo.

## Kodi Muliwo Kuti Muli Malipamo Yosamukulu?

Kufunsa malipamo yosamukulu ndi kukhala luso kwambiri. Kodi muli ndi kukhala kwawo m'payment gateways ndipo muli ndi mafunso osavuta za kuti anthu anapereke malipamo bwanji.

Mwachidule, ndi ndi kumvera **Ultimate Multisite > Settings > Payments**. M'mmodzi mwa **Payment Gateways**, muli ndi kukhala kwawo **Manual** (kuyendetsa). Mudza kuona kuti kukhala kwawo **Payment Instructions** kuliwonetsa.

Muli ndi kufufuza za anthu anu omwe adzakhalaokera malipamo. Izi zingathe kukhala m'banki yanu kapena email yanu kuti anthu anapereke thandizo la malipamo, monga m'mmodzi.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Iyi ndi mwayi wopereka za manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Mmodzi mwa kukhala kwawo, muli ndi kukhala kwawo **Save Settings** ndipo simukonzekera. Pamene anthu anaperekera (register) ku mtandawulo wanu, adzakhala ndi mawu omwe adzakhala kuti adzakhala ndi mafunso anu kuti apereke malipamo.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ndipo adzakhala ndi mawu m'Thank You page yanu ndi mafunso anu za malipamo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kufufuza Malipamo Yosamukulu

(Kodi kuliwesi ndikufufuza kwa malipamo yosamukulu.)

Kuti kukhondwa mkati wopempha mkono, upitira menu ya **Payments** kuwole m'mulo wa kulankolo (left bar). Muli ndi kuyesa onse m'mulo wanu ndi mafo awo, kumtambalitsa kwake, kumwamba ndi **status** yake. M'mulo wopempha mkono uli ndi status ya **Pending** monga momwe ndi momwe mukunyang'anira wanu.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Muli kuyesa ndauwo wa m'mulo mwa kukhala kwa **reference code**. Pa m'mulo wopereka, muli ndi onse mafo a m'mulo wopempha mkono, monga reference ID, zinthu zomwe zili m'mulo, timestamps ndi zina.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Pa chiyembekezo cha upatso (right column), muli ndi ulemu wopereka status ya m'mulo. Kukhazikitsa kuti ndi **Completed** ndikuyesa ulemu wa Activate Membership kuwathandiza site ya munthu wanu ndipo membership yake idzakhala yomwe yomwe.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
