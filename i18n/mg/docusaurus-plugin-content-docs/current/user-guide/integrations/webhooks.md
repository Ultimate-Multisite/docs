---
title: Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Fijerana ny Webhooks (v2)

_**FANAMARIHANA: Tsy ho an'ny mpampiasa manam-pahaizana avo dia ity fitaovana na lahatsoratra ity.**_

Ny **webhook** dia fomba iray ahafahana manome fampahalalana amin'ny fotoana tena izy (real-time) ny rindrambaiko na logiciel toy ny Ultimate Multisite ho an'ny fampiharana hafa. Ny webhook dia mandefa angona na data (payload) any amin'ny fampiharana hafa rehefa mitranga izany, midika fa **ahazo data ianao avy hatrany.**

Mampanantena ity raha mila mifandray na mandefa data manokana avy amin'ny Ultimate Multisite ho an'ny CRM na rafitra hafa isaky ny misy traikefa (event) mitranga. Ohatra, mila mandefa ny anaran'ilay mpampiasa sy ny adiresin-tenim-potoany ianao any amin'ny lisitry ny mpanaraka isaky ny misy kaonty mpampiasa vaovao no namboarina.

## Ahoana no famoronana webhook

Mba hamoronana webhook, mandehin'ny fizarana admin anao ho an'ny tambajotra (network admin dashboard). Tsindrio amin'ny **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pejy lisitry ny Webhooks tsy misy misy bokotra Add New Webhook](/img/admin/webhooks-list-empty.png)

Avy eo dia afaka manova ny fepetra (configuration) an'ny webhook ianao:

![Modaly famoronana Webhook mampiseho ireo sehatry ny Anarana, Ny Traikefa ary ny URL](/img/admin/webhook-add-modal.png)

Rehefa mamorona webhook vaovao ianao dia ho fantatrao ireo fampahalalana toy ny **Anarana (Name), URL,** ary **Traikefa (Event).** Afaka mampiasa anarana rehetra tianao ho an'ny webhook ianao. Ireo sehatra tena zava-dehibe indrindra dia ny URL sy ny Traikefa.

![Interface fanovana Webhook mampiseho ny sehatry ny URL sy ny famakiana ny payload](/img/admin/webhook-url-field.png)

Ny URL dia ny **endpoint na toerana** izay alefan'ny Ultimate Multisite mba handefasana ny **payload na data.** Io no fampiharana handray ilay data.

Zapier no vahaolana mahazatra indrindra ampiasain'ny mpampiasa mba hahatonga ny fifandraisana amin'ny fampiharana lafatra (3rd party application) ho mora kokoa. Raha tsy misy sehatra toy ny Zapier, dia mila mamorona fiasa manokana ianao izay handray ny data sy hanao azy. Jereo ity lahatsoratra ity momba **ny fomba fampiasana webhook Ultimate Multisite miaraka amin'ny Zapier.**

Amin'ity ity lahatsoratra, ho jerena ny fototra momba ny fomba fiasan'ny webhook sy ireo *event* azo atao ao amin'ny Ultimate Multisite isika. Ho mampiasa tranokala vonona (3rd party site) iray antsoina hoe [requestbin.com](https://requestbin.com/) isika. Ity toerana ity dia ahafahantsika mamorona *endpoint* ary mandray ny *payload* (ny zavatra alefa) tsy mila manao *coding*. _**Fanamarihana: ny ataony rehetra dia haneho antsika fa raisina ny angona.**_ Tsy hisy famahana na fandraisana andraikitra amin'ilay *payload* izany.

Mandehin-doha any [requestbin.com](https://requestbin.com/) ary tsindrio ny Create Request Bin.

Rehefa tsindrianao io bokotra io, dia ho mangataka anao mba miditra raha efa manana kaonty ianao na hanao famoronana kaonty vaovao. Raha efa manana kaonty ianao dia hitarika anao mivantana any amin'ny *dashboard* (fizarana fitantanana) azy. Ao amin'io *dashboard* io, dia ho hitanao avy hatrany ny *endpoint* na URL azo ampiasaina amin'ny famoronana webhook ho an'ny Ultimate Multisite-nao.

Aza misalasala ary kopio ilay URL ary miverina any amin'ny Ultimate Multisite. Apetaho eo amin'ilay toerana fampidirana *endpoint* ny URL sy safidio ny *event* avy ao amin'ny menio (dropdown). Amin'ity ohatra ity, dia safidy **Payment Received** isika.

Ity *event* ity dia mivoaka rehefa manao famatsiana vola ny mpampiasa iray. Ireo *event* rehetra azo atao, ny fanazavana momba azy ary ny *payload* dia voalaza eo amin'ny farany an'ilay pejy. Tsindrio ny bokotra **Add New Webhook** mba hitahirizana (save) ilay webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Afaka mandefa *test event* iray isika any amin'ilay *endpoint* mba hijerena raha miasa ve ny webhook izay vao namoronana. Afaka manao izany amin'ny alalan'ny tsindriana **Send Test Event** eo ambanin'ilay webhook izay vao namoronana.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Ity dia mampiseho fizarana fanamafisana (confirmation window) milaza fa nahomby ny *test* (test).

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Ary manao indray ny toerana _Requestbin_ dia ho hitanao fa azo ny fampandreny (payload) na nandre azy izay misarona zavatra test.

Ity no fotokaly amin'ny fomba fiasan'ny webhook sy ireo endpoint. Raha te-hanao endpoint manokana ianao, mila mamorona asa manokana (custom function) ianao mba handray sy hanao ny data azonao avy amin'ny Ultimate Multisite.
