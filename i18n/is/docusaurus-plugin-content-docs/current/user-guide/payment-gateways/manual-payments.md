---
title: Innstillingar fyrir mannvænt betalingar
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Innstilling af manuelle betalingar (v2)

_**VIKTIG MERKNAD: Þessi grein er aðgangur til Ultimate Multisite v2.x.**_

Manuelle betalingar eru hátt fyrir þér að bjóða upp öðrum betalingsformum ef **Stripe** eða **PayPal** ekki eru tilfóstslegir fyrir notendur þín. Þetta getur verið tveggja-eða bankaöskustöðvar eða einhver annað betalingsform sem er til fóstslegri notendum þínum lokalt.

## Hvernig á að aktíva manuelle betalingar

Innstilling af manna betalingar er mjög einfald. Þú þarft bara að aktíva það undir payment gateways og setja nánari leiðbeiningar um hvernig notandinn á að sendja betalingu.

Fyrst, farðu yfir til **Ultimate Multisite > Settings > Payments**. Undir **Payment Gateways** skaltu **Manual** í á. Þú sjá það að einn **Payment Instructions** textarúri mun sýna sig fyrir þig.

Bættu upplýsingum sem notandinn þinn þarf til að gerast betalingu í þennan textarúri. Þetta getur verið bankaöskustöðvar og tölvupóstur þín svo notandinn geti send til þín betalingsbestæðningu, fyrir dægi.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Hér er greiningar innstillaðra manna gateways:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Eftir að þú hefur sett það upp, klikktu bara á **Save Settings** og er allt klár. Þegar notendur skrá sig í nýja netinu sýna þeim texta sem segir þeim að þeir munu fá leiðbeiningar frá þér til að fullfölja kaupinn.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Og þeir munu einnig fá texta á **Thank You** síðu með betalingsleiðbeiningum þínum.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bestæða manna betalingar

Til að staðfesta mannvænt betalningu, ferðu yfir í menulinuna **Payments** á vinstri hringrásinni. Þar geturðu sjá allar betalingarnar sem eru í nálgunni þinni og upplýsingar um þær, sérstaklega **status**. Mannvænt betalningur mun alltaf hafa status **Pending** (Nánna), þar til þú sjálfur breytir hann.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Skráðu inn betalningarpóstinn með því að klikka á **reference code**. Á þessum yfirskrifum ertu með allar upplýsingar um nánna betalninguna, eins og reference ID, vörur, tímastig og meira.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Á höndum á høgre hringrásinni geturðu breytt status betalningar. Breytning þess í **Completed** (Fullfærð) og skiptingu **Activate Membership** (Aktiva membership) úr er leyfið að aktiva síðunni viðskiptavinin og membership-inn hennar verður aktivt.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
