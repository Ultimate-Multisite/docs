---
title: |-
  Fanomezana Fandrefana Apetra

  Fametrahana ny Fandrefana Manokana
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Fanomezana Fandoavam-bola (v2)

_**FANAM-PAHAFANA MANAN-DAN-DAN: Io lahatsoratra ity dia manondro ny Ultimate Multisite version 2.x.**_

Ny fandoavam-bola manokana dia fomba iray ahafahanao manolotra fomba fandoavam-bola hafa raha tsy misy **Stripe** na **PayPal** ho an'ny mpampiasa anao. Afaka ho fifindrana vola (wire) na fandefasana banky na fomba fandoavam-bola hafa azo atao eo amin'ny faritra misy anareo ny mpampiasa anareo.

## Ahoana no fanondroana Fandoavam-bola Manokana

Ny fametrahana fandoavam-bola manokana dia mora be. Mila mandray azy ao anatin'ny **Payment Gateways** ianao ary mametraka toromarika antsipiriany momba ny fomba tokony hifandrenan'ny mpampiasa ilay vola.

Voalohany, mandehin'ny **Ultimate Multisite > Settings > Payments**. Eo anelanelan'ny **Payment Gateways**, dia ataovy **Manual** (toggle) ho an-tsipiriany. Ho hitanao fa hiseho ny boky **Payment Instructions** ho anao.

Ampidiro ao anatin'ity boky ity ny fampahalalana ilain'ny mpanjifa mba hanao ny fandoavam-bola. Afaka ho antsipiriany momba ny kaontina bankinao sy ny mailaka (email) ianao, dia mba hahafahany mandefa antso fanamafisana ny fandoavam-bola anao, ohatra.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ity no interface fametrahana fandoavam-bola manokana:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Rehefa vita ny fametrahana azy, tsindrio fotsiny ny **Save Settings** ary vita. Rehefa misy mpampiasa mavitrika amin'ny tambajotra anareo, dia hahita hafatra miteny hoe handray toromarika avy aminao mba hanatanterahana ny fividianana izy ireo.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ary hahazo hafatra ihany koa izy ireo eo amin'ny pejy **Thank You** anareo miaraka amin'ny toromarika fandoavam-bola anareo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Fanamafisana ny fandoavam-bola manokana

Mba hanamafana fandoavam-bola (manual payment), mandehana ny menio **Payments** eo amin'ny lafiny any havia. Eo no afaka mahita ny fandoavam-bola rehetra ao anatin'ny tambajy anao sy ny antsipiriany, anisan'izany ny **status** azy. Ny fandoavam-bola manokana dia ho **Pending** foana mandra-pahatonga ianao amin'ny fanovana azy manokana.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Ampidiro ny pejy fandoavam-bola amin'ny alalan'ny tsindrim-peo ny **reference code**. Eo amin'ity pejy ity ianao dia ahitana ny antsipiriany rehetra momba ilay fandoavam-bola mbola eo an-daniny, toy ny reference ID, vokatra, fotoana (timestamps) ary maro hafa.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Eo amin'ny lafiny ankavanana, afaka manova ny status an'ilay fandoavam-bola ianao. Ny fanovana azy ho **Completed** sy ny fanindriana (toggling) ny safidy **Activate Membership** dia hampandeha ny toerana an'ilay mpanjifa ary ho aktiva ny fandraisana an'ilay mpikambana.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
