---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# ’n Eerste kyk na Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**AANDAG: Let daarop dat hierdie funksie of artikel vir gevorderde gebruikers is.**_

’n **webhook** is ’n manier vir ’n app of sagteware soos Ultimate Multisite om ander toepassings van intydse inligting te voorsien. ’n webhook lewer data of payloads aan ander toepassings soos dit gebeur, wat beteken jy **kry data onmiddellik.**

Dit is nuttig as jy sekere data vanaf Ultimate Multisite na ’n ander CRM of stelsel moet integreer of deurgee elke keer wanneer ’n gebeurtenis geaktiveer word. Byvoorbeeld, jy moet die gebruiker se naam en e-posadres na ’n poslys stuur elke keer wanneer ’n nuwe gebruikersrekening geskep word.

## Hoe om ’n webhook te skep {#how-to-create-a-webhook}

Om ’n webhook te skep, gaan na jou netwerkadmin-dashboard. Klik op **Ultimate Multisite > Webhooks > Voeg nuwe webhook by.**

![Leë Webhooks-lysbladsy met Voeg nuwe webhook by-knoppie](/img/admin/webhooks-list-empty.png)

Jy kan dan die webhook-konfigurasie wysig:

![Voeg nuwe webhook-vorm by met Naam-, Gebeurtenis- en URL-velde](/img/admin/webhook-add-modal.png)

Wanneer jy ’n nuwe webhook skep, sal jy gevra word vir inligting soos **Naam, URL,** en **Gebeurtenis**. Jy kan enige naam gebruik wat jy vir jou webhook wil hê. Die belangrikste velde is die URL en Gebeurtenis.

![Webhook-wysigkoppelvlak wat die URL-veld en payload-voorskou wys](/img/admin/webhook-url-field.png)

URL is die **endpoint of die bestemming** waarheen Ultimate Multisite die **payload of data** sal stuur. Dit is die toepassing wat die data sal ontvang.

Zapier is die mees algemene oplossing wat gebruikers gebruik om integrasie met 3departy-toepassings makliker te maak. Sonder ’n platform soos Zapier sal jy handmatig ’n pasgemaakte funksie moet skep wat die data sal opvang en verwerk. Sien hierdie artikel oor **hoe om Ultimate Multisite webhook met Zapier te gebruik.**

In hierdie artikel gaan ons kyk na die basiese konsep van hoe ’n webhook werk en die gebeurtenisse wat in Ultimate Multisite beskikbaar is. Ons gaan ’n 3departy-werf genaamd [requestbin.com](https://requestbin.com/) gebruik. Hierdie werf sal ons toelaat om ’n endpoint te skep en die payload op te vang sonder om enige kodering te doen. _**Vrywaring: al wat dit sal doen, is om vir ons te wys dat die data ontvang is.**_ Daar sal geen verwerking of enige soort aksie op die payload gedoen word nie.

Gaan na [requestbin.com](https://requestbin.com/) en klik Create Request Bin.

Nadat jy daardie knoppie geklik het, sal dit jou vra om aan te meld as jy reeds ’n rekening het, of om te registreer. As jy reeds ’n rekening het, sal dit jou direk na hul dashboard neem. Op hul dashboard sal jy onmiddellik die endpoint of URL sien wat jy kan gebruik om jou Ultimate Multisite webhook te skep.

Gaan voort en kopieer die URL en gaan terug na Ultimate Multisite. Plaas die endpoint in die URL-veld en kies ’n gebeurtenis uit die aftreklys. In hierdie voorbeeld gaan ons **Betaling ontvang** kies.

Hierdie gebeurtenis word geaktiveer wanneer ’n gebruiker ’n betaling maak. Al die beskikbare gebeurtenisse, hul beskrywing en payloads word onderaan die bladsy gelys. Klik die **Voeg nuwe webhook by**-knoppie om die webhook te stoor.

![Webhook-gebeurtenis-aftreklys met Betaling ontvang gekies](/img/admin/webhook-event-picker.png)

Ons kan nou ’n toetsgebeurtenis na die endpoint stuur sodat ons kan sien of die webhook wat ons geskep het, werk. Ons kan dit doen deur **Stuur toetsgebeurtenis** onder die webhook wat ons geskep het te klik.

![Webhooks-lys wat een gekonfigureerde webhook en Stuur toets-aksie wys](/img/admin/webhooks-list-populated.png)

Dit wys ’n bevestigingsvenster wat sê dat die toets suksesvol was.

![Webhook-toetsgebeurtenis-resultaat nadat ’n toets-payload gestuur is](/img/admin/webhook-test-result.png)

As ons nou teruggaan na die _Requestbin_-werf, sal ons sien dat die payload ontvang is en sommige toetsdata bevat.

Dit is die basiese beginsel van hoe webhooks en endpoints werk. As jy ’n pasgemaakte endpoint wil skep, sal jy ’n pasgemaakte funksie moet skep om die data wat jy van Ultimate Multisite ontvang, te verwerk.
