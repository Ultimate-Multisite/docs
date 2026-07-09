---
title: Uppsetning handvirkra greiðslna
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Uppsetning handvirkra greiðslna (v2) {#setting-up-manual-payments-v2}

_**MIKILVÆG ATHUGASEMD: Þessi grein vísar til Ultimate Multisite útgáfu 2.x.**_

Handvirkar greiðslur eru leið til að bjóða upp á aðrar greiðsluaðferðir ef **Stripe** eða **PayPal** er ekki í boði fyrir notendur þína. Þetta getur verið millifærsla, bankamillifærsla eða önnur greiðsluaðferð sem er í boði fyrir notendur þína á þeirra svæði.

## Hvernig á að virkja handvirkar greiðslur {#how-to-enable-manual-payments}

Uppsetning handvirkra greiðslna er mjög auðveld. Þú þarft bara að virkja þær undir greiðslugáttum og setja inn ítarlegar leiðbeiningar um hvernig notandinn á að senda greiðsluna.

Farðu fyrst í **Ultimate Multisite > Settings > Payments**. Undir **Payment Gateways** skaltu kveikja á **Manual**. Þá sérðu að reiturinn **Payment Instructions** birtist fyrir þig.

Bættu í þennan reit þeim upplýsingum sem viðskiptavinurinn þarf til að framkvæma greiðsluna. Þetta geta til dæmis verið bankareikningsupplýsingar þínar og netfangið þitt svo viðskiptavinurinn geti sent þér staðfestingu á greiðslunni.

![Rofi fyrir handvirka greiðslugátt með textasvæði fyrir greiðsluleiðbeiningar](/img/config/manual-gateway-expanded.png)

Hér er stillingaviðmót handvirku gáttarinnar:

![Stillingar handvirkrar gáttar](/img/config/manual-gateway-settings.png)

Eftir að þú hefur sett þetta upp skaltu bara smella á **Save Settings** og þá er þetta tilbúið. Þegar notendur skrá sig á netið þitt munu þeir sjá skilaboð sem segja þeim að þeir fái leiðbeiningar frá þér til að ljúka kaupunum.

![Staðfestingarskilaboð við skráningu sem segja notandanum að hann fái greiðsluleiðbeiningar](/img/frontend/registration-manual-notice.png)

Og þeir munu einnig fá skilaboð á **Thank You** síðunni þinni með greiðsluleiðbeiningunum þínum.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Staðfesting handvirkra greiðslna {#confirming-manual-payments}

Til að staðfesta handvirka greiðslu skaltu fara í **Payments** valmyndina á vinstri stikunni. Þar geturðu séð allar greiðslur á netinu þínu og upplýsingar um þær, þar á meðal **stöðu** þeirra. Handvirk greiðsla mun alltaf hafa stöðuna **Pending** þar til þú breytir henni handvirkt.

![Greiðslulisti sem sýnir handvirka greiðslu í bið](/img/admin/payments-list.png)

Farðu inn á greiðslusíðuna með því að smella á **tilvísunarkóðann**. Á þessari síðu hefurðu allar upplýsingar um greiðsluna í bið, svo sem tilvísunarauðkenni, vörur, tímastimpla og fleira.

![Síða með greiðsluupplýsingum sem sýnir tilvísunarkóða, vörur og samtölur](/img/admin/payment-edit.png)

Í hægri dálkinum geturðu breytt stöðu greiðslunnar. Ef þú breytir henni í **Completed** og **kveikir á Activate Membership** valkostinum verður vefsvæði viðskiptavinarins virkjað og aðild hans verður virk.

![Greiðslubreytingarsíða með Status stillt á Completed og Activate Membership rofa](/img/admin/payment-activate-membership.png)
