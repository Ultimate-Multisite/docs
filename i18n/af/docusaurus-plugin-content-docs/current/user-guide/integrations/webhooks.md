---
title: Webhooks
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# ’n Eerste Kyk na Webhooks (v2)

_**LET OP: Neem kennis dat hierdie funksie of artikel vir gevorderde gebruikers is.**_

’n **Webhook** is ’n manier vir ’n toepassing of sagteware soos Ultimate Multisite om ander toepassings met realtydlike inligting te voorsien. ’n Webhook lewer data of *payloads* aan ander toepassings sodra dit gebeur, wat beteken dat jy die data **onmiddellik kry**.

Dit is nuttig indien jy data van Ultimate Multisite na ’n ander CRM of stelsel moet integreer of oordra wanneer ’n bepaalde gebeurtenis plaasvind. Byvoorbeeld, jy moet die gebruiker se naam en e-posadres na ’n e-poslys stuur elke keer wanneer ’n nuwe gebruikersrekening geskep word.

## Hoe om ’n webhook te skep

Om ’n webhook te skep, gaan na jou network admin dashboard. Klik op **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Jy kan dan die webhook-konfigurasie wysig:

![Webhook edit interface](/img/admin/webhook-edit.png)

Wanneer jy ’n nuwe webhook skep, sal jy gevra word vir inligting soos **Name, URL,** en **Event**. Jy kan enige naam gebruik wat jy vir jou webhook wil hê. Die belangrikste velde is die URL en die Event.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

Die URL is die **endpoint of die bestemming** waarheen Ultimate Multisite die **payload of data** sal stuur. Dit is die toepassing wat die data sal ontvang.

Zapier is die mees algemene oplossing wat gebruikers gebruik om integrasie met derde party-toepassings makliker te maak. Sonder ’n platform soos Zapier, sal jy ’n aangepaste funksie moet skep wat die data vang en verwerk. Kyk na hierdie artikel oor **hoe om Ultimate Multisite webhook met Zapier te gebruik.**

In hierdie artikel gaan ons die basiese konsep van hoe ’n webhook werk en die beskikbare events in Ultimate Multisite ondersoek. Ons gaan ’n derde party-webwerf genaamd [requestbin.com](https://requestbin.com/) gebruik. Hierdie webwerf sal ons toelaat om ’n endpoint te skep en die payload te vang sonder om enige kode te skryf. _**Disclaimer: dit sal net wys dat die data ontvang is.**_ Daar sal geen verwerking of enige soort aksie op die payload plaasvind nie.

Gaan na [requestbin.com](https://requestbin.com/) en klik op Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Nadat jy op daardie knoppie geklik het, sal dit jou vra om in te log as jy reeds ’n rekening het, of om aan te meld. As jy reeds ’n rekening het, sal dit jou direk na hul dashboard lei. Op hul dashboard sal jy onmiddellik die endpoint of URL sien wat jy kan gebruik om jou Ultimate Multisite webhook te skep.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Kopieer die URL en gaan terug na Ultimate Multisite. Plaas die endpoint in die URL-veld en kies ’n event uit die *dropdown*. In hierdie voorbeeld sal ons **Payment Received** kies.

Hierdie event word geaktiveer wanneer ’n gebruiker ’n betaling doen. Alle beskikbare events, hul beskrywing en payloads word onderaan die bladsy gelys. Klik op die **Add New Webhook** knoppie om die webhook te stoor.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Ons kan nou ’n toetsgebeurtenis na die endpoint stuur sodat ons kan sien of die webhook wat ons geskep het, werk. Ons kan dit doen deur op **Send Test Event** onder die webhook wat ons geskep het, te klik.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Dit wys ’n bevestigingsvenster wat sê dat die toets suksesvol was.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

As ons nou teruggaan na die _Requestbin_ webwerf, sal ons sien dat die payload ontvang is en bevat wat toetsdata.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Dit is die basiese beginsel van hoe webhooks en endpoints werk. As jy ’n aangepaste endpoint wil skep, sal jy ’n aangepaste funksie moet skep om die data te verwerk wat jy van Ultimate Multisite ontvang.
