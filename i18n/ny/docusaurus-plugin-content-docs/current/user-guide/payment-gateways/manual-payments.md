---
title: Kukhazikitsa Malipiro a Pamanja
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Kukhazikitsa Manual Payments (v2)

_**CHENJEZO LOFUNIKA: Nkhaniyi ikunena za Ultimate Multisite version 2.x.**_

Manual payments ndi njira yoti mupereke njira zina zolipirira ngati **Stripe** kapena **PayPal** sizikupezeka kwa ogwiritsa ntchito anu. Itha kukhala wire kapena bank transfer kapena njira ina iliyonse yolipirira yomwe ilipo kwa ogwiritsa ntchito anu m’dera lawo.

## Momwe mungayambitsire Manual Payments {#how-to-enable-manual-payments}

Kukhazikitsa manual payment ndi kosavuta kwambiri. Muyenera kungoyiyambitsa pansi pa payment gateways ndi kuyika malangizo atsatanetsatane a momwe wogwiritsa ntchito ayenera kutumizira malipiro.

Choyamba, pitani ku **Ultimate Multisite > Settings > Payments**. Pansi pa **Payment Gateways** , yatsani **Manual**. Mudzawona kuti bokosi la **Payment Instructions** lidzawonekera kwa inu.

Onjezani m’bokosili zambiri zomwe kasitomala wanu adzafunika kuti alipire. Zitha kukhala zambiri za bank account yanu ndi email yanu kuti kasitomala akutumizireni chitsimikizo cha malipiro, mwachitsanzo.

![Kuyatsa manual payment gateway ndi malo olembera a Payment Instructions](/img/config/manual-gateway-expanded.png)

Nayi interface ya manual gateway settings:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Mukamaliza kuyikhazikitsa, dinani basi pa **Save Settings** ndipo zatha. Ogwiritsa ntchito akalembetsa ku network yanu, adzawona uthenga wowauza kuti adzalandira malangizo anu kuti amalize kugula.

![Uthenga wotsimikizira kulembetsa wouza wogwiritsa ntchito kuti adzalandira malangizo a malipiro](/img/frontend/registration-manual-notice.png)

Ndipo adzalandiranso uthenga pa tsamba lanu la **Thank You** wokhala ndi malangizo anu a malipiro.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kutsimikizira manual payments {#confirming-manual-payments}

Kuti mutsimikizire manual payment, pitani ku menyu ya **Payments** pa bala lakumanzere. Kumeneko mutha kuona malipiro onse pa network yanu ndi tsatanetsatane wawo, kuphatikizapo **status** yawo. Manual payment nthawi zonse idzakhala ndi **Pending** status mpaka mutayisintha pamanja.

![Mndandanda wa Payments ukuwonetsa manual payment yomwe ili pending](/img/admin/payments-list.png)

Lowani patsamba la malipiro podina **reference code**. Patsamba ili muli ndi tsatanetsatane wonse wa malipiro omwe akuyembekezera, monga reference ID, products, timestamps ndi zina zambiri.

![Tsamba la tsatanetsatane wa malipiro likuwonetsa reference code, products, ndi totals](/img/admin/payment-edit.png)

Pa column yakumanja, mutha kusintha status ya malipiro. Kusintha kukhala **Completed** ndi **kuyatsa Activate Membership** option kudzayambitsa site ya kasitomala wanu ndipo membership yake idzakhala active.

![Tsamba losintha malipiro lokhala ndi Status yoyikidwa ku Completed ndi toggle ya Activate Membership](/img/admin/payment-activate-membership.png)
