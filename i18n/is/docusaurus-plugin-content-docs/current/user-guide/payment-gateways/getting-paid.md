---
title: Að fá greitt
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Að fá greitt (v2)

_**MIKILVÆG ATHUGASEMD: Þessi grein vísar til Ultimate Multisite útgáfu 2.x.**_

Ultimate Multisite er með innbyggt aðildar- og innheimtukerfi. Til að innheimtukerfið okkar virki höfum við samþætt algengustu greiðslugáttirnar sem notaðar eru í rafrænum viðskiptum. Sjálfgefnar greiðslugáttir í Ultimate Multisite eru _Stripe_ , _PayPal_ og handvirk greiðsla. Þú getur einnig notað _WooCommerce_ , _GoCardless_ og _Payfast_ til að taka við greiðslum með því að setja upp viðkomandi add-ons.

## Grunnstillingar {#basic-settings}

Þú getur stillt hvaða greiðslugátt sem er undir greiðslustillingum Ultimate Multisite. Þú finnur þær með því að fara í **Ultimate Multisite valmynd > Stillingar > Greiðslur.**

![Greiðslustillingasíða í Ultimate Multisite sem sýnir greiðsluspjaldið](/img/config/payments-settings-page.png)

Áður en þú setur upp greiðslugáttina þína skaltu skoða grunnstillingar greiðslna sem þú getur stillt:

**Þvinga sjálfvirka endurnýjun** **:** Þetta tryggir að greiðslan endurtaki sig sjálfkrafa í lok hvers innheimtutímabils, eftir þeirri innheimtutíðni sem notandinn valdi.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 athugar hvort virka gáttin hafi endurnýtanleg endurnýjunarskilríki áður en endurtekin aðild er vistuð með sjálfvirkri endurnýjun virkri. Endurnýjunarskilríki geta verið gáttaráskrift, innheimtusamningur, vistað vault token eða sambærilegur endurnýtanlegur greiðslumáti. Ef gáttin tilkynnir að engin nothæf skilríki séu til staðar vistar Ultimate Multisite aðildina en slekkur á sjálfvirkri endurnýjun og skráir stöðuna um skilríki sem vantar svo stjórnandi eða stuðningsferli geti beðið viðskiptavininn um að heimila greiðslu aftur fyrir endurnýjunardagsetninguna.

Þetta kemur í veg fyrir að aðild virðist endurnýjast sjálfkrafa þegar gáttin getur aðeins innheimt stakar greiðslur. Gateway add-ons ættu að staðfesta að endurtekin checkout geymi endurnýtanleg skilríki, sérstaklega þegar gáttin styður bæði staka innheimtu og vaulted/subscription greiðsluhami.

**Leyfa prufutímabil án greiðslu** **máta:** Þegar þessi valkostur er virkur þarf viðskiptavinurinn þinn ekki að bæta við neinum fjárhagsupplýsingum í skráningarferlinu. Þess verður aðeins krafist þegar prufutímabilinu lýkur.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Senda reikning við staðfestingu greiðslu:** Þetta gefur þér val um hvort senda eigi reikning eftir greiðslu eða ekki. Athugaðu að notendur munu hafa aðgang að greiðslusögu sinni undir Dashboard undirvefsins síns. Þessi valkostur á ekki við um handvirku gáttina.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Númerakerfi reikninga:** Hér geturðu valið annaðhvort greiðslutilvísunarkóða eða raðnúmerakerfi. Ef þú velur að nota greiðslutilvísunarkóða fyrir reikningana þína þarftu ekki að stilla neitt. Ef þú velur að nota raðnúmerakerfi þarftu að stilla **næsta reikningsnúmer** (þetta númer verður notað sem reikningsnúmer fyrir næsta reikning sem myndaður er í kerfinu. Það hækkar um einn í hvert skipti sem nýr reikningur er búinn til. Þú getur breytt því og vistað til að endurstilla raðnúmer reikninga á tiltekið gildi) og **forskeyti reikningsnúmers.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Hvar á að finna gáttirnar: {#where-to-find-the-gateways}

Þú getur sett upp greiðslugáttirnar á sömu síðu ( **Ultimate Multisite > Stillingar > Greiðslur**). Rétt fyrir neðan **virkar greiðslugáttir** munt þú geta séð: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ og _Handvirkt_.

![Hluti fyrir virkar greiðslugáttir sem listar Stripe, Stripe Checkout, PayPal og handvirkt](/img/config/payments-active-gateways.png)

Við erum með sérstaka grein fyrir hverja greiðslugátt sem leiðir þig í gegnum skrefin við að setja hana upp, sem þú finnur á tenglunum hér að neðan.

Þú getur skoðað og breytt greiðsluupplýsingum:

![Viðmót til að breyta greiðslu](/img/admin/payment-edit.png)

Hér er heildarsýn af síðunni til að breyta greiðslu:

![Heildarviðmót til að breyta greiðslu](/img/admin/payment-edit-full.png)

Hér er einnig heildarsýn af stillingum greiðslugáttanna:

![Heilsíða stillinga greiðslugátta](/img/config/settings-payments-gateways-full.png)

**Uppsetning Stripe-greiðslugáttarinnar**

**Uppsetning PayPal-greiðslugáttarinnar**** **

**Uppsetning handvirkra greiðslna**

Nú, ef þú vilt nota _WooCommerce_ , _GoCardless_ eða _Payfast_ sem greiðslugáttina þína, þarftu að **setja upp og stilla add-ons þeirra**.

### Hvernig á að setja upp WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Við skiljum að _Stripe_ og _PayPal_ eru ekki í boði í sumum löndum, sem takmarkar eða hindrar notendur Ultimate Multisite í að nota plugin okkar á skilvirkan hátt. Þess vegna bjuggum við til add-on til að samþætta _WooCommerce,_ sem er mjög vinsælt plugin fyrir rafræn viðskipti. Hönnuðir um allan heim hafa búið til add-ons til að samþætta mismunandi greiðslugáttir við það. Við nýttum þetta til að fjölga greiðslugáttunum sem þú getur notað með innheimtukerfi Ultimate Multisite.

_**MIKILVÆGT:** Ultimate Multisite: WooCommerce Integration krefst þess að WooCommerce sé virkjað að minnsta kosti á aðalvefnum þínum._

Farðu fyrst á add-ons síðuna. Þú finnur hana með því að fara í **Ultimate Multisite > Stillingar**. Þú ættir að sjá **Add-ons** töfluna. Smelltu á **Skoða add-ons okkar**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Eftir að smellt er á **Skoða add-ons okkar** verður þér vísað á add-ons síðuna. Hér geturðu fundið öll Ultimate Multisite add-ons. Smelltu á **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons síða sem listar Ultimate Multisite add-ons, þar á meðal WooCommerce Integration](/img/addons/addons-page.png)

Gluggi opnast með upplýsingum um viðbótina. Smelltu einfaldlega á **Setja upp núna**.

<!-- Skjáskot ekki tiltækt: upplýsingagluggi Ultimate Multisite WooCommerce Integration viðbótarinnar með hnappnum Setja upp núna -->

Þegar uppsetningunni er lokið verður þér vísað á viðbótasíðuna. Þar skaltu einfaldlega smella á **Virkja á neti** og WooCommerce viðbótin verður virkjuð á netinu þínu.

<!-- Skjáskot ekki tiltækt: Viðbótasíða með hlekknum Virkja á neti fyrir WooCommerce Integration viðbótina -->

Eftir að hún hefur verið virkjuð, ef þú ert enn ekki með WooCommerce viðbótina uppsetta og virkjaða á vefsvæðinu þínu, færðu áminningu.

<!-- Skjáskot ekki tiltækt: Stjórnandatilkynning sem minnir stjórnandann á að setja upp og virkja WooCommerce viðbótina -->

Til að lesa meira um WooCommerce Integration viðbótina, **smelltu hér**.

### Hvernig á að setja upp GoCardless viðbótina: {#how-to-install-the-gocardless-add-on}

Skrefin til að setja upp _GoCardless_ viðbótina eru nánast þau sömu og fyrir _WooCommerce_ viðbótina. Farðu á viðbótasíðuna og veldu **Ultimate Multisite: GoCardless Gateway** viðbótina.

<!-- Skjáskot ekki tiltækt: Viðbótasíða þar sem Ultimate Multisite GoCardless Gateway viðbótin er auðkennd -->

Viðbótarglugginn opnast. Smelltu á **Setja upp núna**.

<!-- Skjáskot ekki tiltækt: upplýsingagluggi Ultimate Multisite GoCardless Gateway viðbótarinnar með hnappnum Setja upp núna -->

Þegar uppsetningunni er lokið verður þér vísað á viðbótasíðuna. Þar skaltu einfaldlega smella á **Virkja á neti** og _GoCardless_ viðbótin verður virkjuð á netinu þínu.

<!-- Skjáskot ekki tiltækt: Viðbótasíða með hlekknum Virkja á neti fyrir GoCardless Gateway viðbótina -->

Til að læra hvernig á að byrja með _GoCardless_ gateway, **lestu þessa grein**.

### Hvernig á að setja upp Payfast viðbótina: {#how-to-install-the-payfast-add-on}

Farðu á viðbótasíðuna og veldu **Ultimate Multisite: Payfast Gateway** viðbótina.

<!-- Skjáskot ekki tiltækt: Viðbótasíða þar sem Ultimate Multisite Payfast Gateway viðbótin er auðkennd -->

Viðbótarglugginn opnast. Smelltu á **Setja upp núna.**

<!-- Skjáskot ekki tiltækt: upplýsingagluggi Ultimate Multisite Payfast Gateway viðbótarinnar með hnappnum Setja upp núna -->

Þegar uppsetningunni er lokið verður þér vísað á viðbótasíðuna. Þar skaltu einfaldlega smella á **Virkja á neti** og _Payfast_ viðbótin verður virkjuð á netinu þínu.

<!-- Skjáskot ekki tiltækt: Viðbótasíða með hlekknum Virkja á neti fyrir Payfast Gateway viðbótina -->
