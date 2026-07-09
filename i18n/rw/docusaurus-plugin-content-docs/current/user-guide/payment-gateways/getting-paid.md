---
title: Kwishyurwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kwishyurwa (v2)

_**ICYITONDERWA CY'INGENZI: Iyi ngingo ivuga kuri Ultimate Multisite verisiyo 2.x.**_

Ultimate Multisite ifite sisitemu y'ubunyamuryango no kwishyuza yubatsemo. Kugira ngo sisitemu yacu yo kwishyuza ikore, twahujije uburyo bwo kwishyura bukoreshwa cyane mu bucuruzi bwo kuri internet. Uburyo bwo kwishyura busanzwe muri Ultimate Multisite ni _Stripe_ , _PayPal_ , na Kwishyura mu buryo bw'intoki. Ushobora kandi gukoresha _WooCommerce_ , _GoCardless_ na _Payfast_ kwakira ubwishyu ushyiraho add-ons zabigenewe.

## Igenamiterere ry'ibanze

Ushobora kugena ubu buryo ubwo ari bwo bwose bwo kwishyura munsi y'igenamiterere ry'ubwishyu rya Ultimate Multisite. Ushobora kubibona ujya kuri **menu ya Ultimate Multisite > Settings > Payments.**

![Ipaji y'igenamiterere ry'ubwishyu muri Ultimate Multisite yerekana akanama ka Payments](/img/config/payments-settings-page.png)

Mbere yo gutunganya uburyo bwawe bwo kwishyura, nyamuneka banza urebe igenamiterere ry'ibanze ry'ubwishyu ushobora kugena:

**Hatiriza kwivugurur** **a:** Ibi bizemeza ko ubwishyu buzajya bwisubiramo mu buryo bwikora ku mpera ya buri cyiciro cyo kwishyuza, bitewe n'inshuro zo kwishyuza umukoresha yahisemo.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 igenzura niba gateway ikora ifite icyemezo cy'ivugurura gishobora kongera gukoreshwa mbere yo kubika ubunyamuryango busubiramo bufite auto-renewal ifunguye. Icyemezo cy'ivugurura gishobora kuba gateway subscription, billing agreement, saved vault token, cyangwa uburyo bwo kwishyura bungana na bwo bushobora kongera gukoreshwa. Niba gateway itangaje ko nta cyemezo gishobora gukoreshwa gihari, Ultimate Multisite ibika ubunyamuryango ariko igafunga auto-renewal kandi ikandika imiterere y'icyemezo kibura kugira ngo umuyobozi cyangwa inzira y'ubufasha ishobore gusaba umukiriya kongera kwemeza ubwishyu mbere y'itariki y'ivugurura.

Ibi birinda ko ubunyamuryango bugaragara nk'ubwivugurura mu buryo bwikora kandi gateway ishobora kwakira gusa ubwishyu bw'inshuro imwe. Gateway add-ons zikwiye kwemeza ko recurring checkouts zibika icyemezo gishobora kongera gukoreshwa, cyane cyane iyo gateway ishyigikira uburyo bwombi bwo gufata ubwishyu bw'inshuro imwe n'uburyo bwa vaulted/subscription payment.

**Emerera igerageza nta buryo bwo kwishyura** **busabwe:** Iyo ubu buryo bufunguye, umukiriya wawe ntazakenera kongeramo amakuru ayo ari yo yose ajyanye n'imari mu gihe cyo kwiyandikisha. Ibi bizasabwa gusa igihe cy'igerageza kirangiye.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ohereza inyemezabwishyu nyuma yo kwemeza ubwishyu:** Ibi biguha uburyo bwo guhitamo niba wohereza inyemezabwishyu nyuma yo kwishyura cyangwa utayohereza. Zirikana ko abakoresha bazabona amateka yabo y'ubwishyu munsi ya dashboard ya subsite yabo. Ubu buryo ntibukora kuri Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Uburyo bwo gushyira nomero ku nyemezabwishyu:** Hano, ushobora guhitamo hagati ya kode y'icyerekezo cy'ubwishyu cyangwa uburyo bwa nomero zikurikirana. Nuhitamo gukoresha kode y'icyerekezo cy'ubwishyu ku nyemezabwishyu zawe, ntukeneye kugena ikindi kintu. Nuhitamo gukoresha uburyo bwa nomero zikurikirana, uzakenera kugena **nomero y'inyemezabwishyu ikurikira** (Iyi nomero izakoreshwa nka nomero y'inyemezabwishyu ku nyemezabwishyu ikurikira izakorwa na sisitemu. Yiyongeraho rimwe buri gihe inyemezabwishyu nshya ikozwe. Ushobora kuyihindura ukayibika kugira ngo usubize nomero zikurikirana z'inyemezabwishyu ku gaciro runaka) na **prefix ya nomero y'inyemezabwishyu.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Aho wasanga gateways:

Ushobora gutunganya gateways z'ubwishyu kuri iyo paji imwe ( **Ultimate Multisite > Settings > Payments**). Hasi gato ya **active payment gateways** , uzashobora kubona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ na _Manual_.

![Igice cya Active Payment Gateways kigaragaza Stripe, Stripe Checkout, PayPal na Manual](/img/config/payments-active-gateways.png)

Dufite ingingo yihariye kuri buri buryo bwo kwishyura izakuyobora mu ntambwe zo kubutunganya, ushobora kuyisanga ku mahuza ari hasi.

Ushobora kureba no guhindura ibisobanuro by'ubwishyu:

![Imigaragarire yo guhindura ubwishyu](/img/admin/payment-edit.png)

Dore uko ipaji yo guhindura ubwishyu igaragara yose:

![Imigaragarire yose yo guhindura ubwishyu](/img/admin/payment-edit-full.png)

Dore kandi uko igenamiterere rya gateways z'ubwishyu rigaragara ryose:

![Ipaji yose y'igenamiterere rya gateways z'ubwishyu](/img/config/settings-payments-gateways-full.png)

**Gutunganya Stripe gateway**

**Gutunganya PayPal gateway**** **

**Gutunganya ubwishyu bwo mu buryo bw'intoki**

Noneho, niba ushaka gukoresha _WooCommerce_ , _GoCardless_ cyangwa _Payfast_ nka gateway yawe y'ubwishyu, uzakenera **gushyiraho no kugena add-ons zabyo**.

### Uko washyiraho WooCommerce add-on:

Twumva ko _Stripe_ na _PayPal_ bitaboneka mu bihugu bimwe, ibyo bikagabanya cyangwa bikabangamira abakoresha Ultimate Multisite gukoresha plugin yacu neza. Ni yo mpamvu twakoze add-on yo guhuza _WooCommerce,_ ari yo plugin y'ubucuruzi bwo kuri internet ikunzwe cyane. Abatunganya porogaramu hirya no hino ku isi bakoze add-ons zo kuyihuza n'uburyo butandukanye bwo kwishyura. Twabyifashishije kugira ngo twagure gateways z'ubwishyu ushobora gukoresha hamwe na sisitemu yo kwishyuza ya Ultimate Multisite.

_**ICY'INGENZI:** Ultimate Multisite: WooCommerce Integration isaba ko WooCommerce iba ifunguye nibura ku rubuga rwawe nyamukuru._

Mbere na mbere, nyamuneka jya ku ipaji ya add-ons. Ushobora kuyibona ujya kuri **Ultimate Multisite > Settings**. Ugomba kubona imbonerahamwe ya **Add-ons**. Kanda kuri **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nyuma yo gukanda kuri **Check our Add-ons** , uzoherezwa ku ipaji ya add-ons. Hano ushobora kubona add-ons zose za Ultimate Multisite. Kanda kuri add-on ya **Ultimate Multisite: WooCommerce Integration**.

![Ipaji ya add-ons igaragaza add-ons za Ultimate Multisite harimo WooCommerce Integration](/img/addons/addons-page.png)

Hazagaragara idirishya ririmo ibisobanuro by’inyongera. Kanda gusa kuri **Shyiramo Ubu**.

<!-- Ishusho ntiboneka: Ikiganiro cy’ibisobanuro by’inyongera ya Ultimate Multisite WooCommerce Integration gifite buto ya Shyiramo Ubu -->

Iyo gushyiramo birangiye, uzoherezwa ku rupapuro rwa plugins. Aha, kanda gusa kuri **Koresha kuri Network** maze inyongera ya WooCommerce ikorere kuri network yawe.

<!-- Ishusho ntiboneka: Urupapuro rwa plugins rufite ihuza rya Koresha kuri Network ry’inyongera ya WooCommerce Integration -->

Nyuma yo kuyikoresha, niba utarashyiramo kandi ngo ukoreshe plugin ya WooCommerce ku rubuga rwawe, uzabona ukwibutsa.

<!-- Ishusho ntiboneka: Itangazo rya admin ryibutsa umuyobozi gushyiramo no gukoresha plugin ya WooCommerce -->

Kugira ngo usome ibindi ku nyongera ya WooCommerce Integration, **kanda hano**.

### Uko washyiramo inyongera ya GoCardless:

Intambwe zo gushyiramo inyongera ya _GoCardless_ zisa cyane n’iz’inyongera ya _WooCommerce_. Nyamuneka jya ku rupapuro rw’inyongera maze uhitemo inyongera ya **Ultimate Multisite: GoCardless Gateway**.

<!-- Ishusho ntiboneka: Urupapuro rw’inyongera rwerekana inyongera ya Ultimate Multisite GoCardless Gateway yashyizweho ikimenyetso -->

Idirishya ry’inyongera rizagaragara. Kanda kuri **Shyiramo Ubu**.

<!-- Ishusho ntiboneka: Ikiganiro cy’ibisobanuro by’inyongera ya Ultimate Multisite GoCardless Gateway gifite buto ya Shyiramo Ubu -->

Iyo gushyiramo birangiye, uzoherezwa ku rupapuro rwa plugins. Aha, kanda gusa kuri **Koresha kuri Network** maze inyongera ya _GoCardless_ ikorere kuri network yawe.

<!-- Ishusho ntiboneka: Urupapuro rwa plugins rufite ihuza rya Koresha kuri Network ry’inyongera ya GoCardless Gateway -->

Kugira ngo umenye uko watangira gukoresha irembo rya _GoCardless_, **soma iyi nkuru**.

### Uko washyiramo inyongera ya Payfast:

Jya ku rupapuro rw’inyongera maze uhitemo inyongera ya **Ultimate Multisite: Payfast Gateway**.

<!-- Ishusho ntiboneka: Urupapuro rw’inyongera rwerekana inyongera ya Ultimate Multisite Payfast Gateway yashyizweho ikimenyetso -->

Idirishya ry’inyongera rizagaragara. Kanda kuri **Shyiramo Ubu.**

<!-- Ishusho ntiboneka: Ikiganiro cy’ibisobanuro by’inyongera ya Ultimate Multisite Payfast Gateway gifite buto ya Shyiramo Ubu -->

Iyo gushyiramo birangiye, uzoherezwa ku rupapuro rwa plugins. Aha, kanda gusa kuri **Koresha kuri Network** maze inyongera ya _Payfast_ ikorere kuri network yawe.

<!-- Ishusho ntiboneka: Urupapuro rwa plugins rufite ihuza rya Koresha kuri Network ry’inyongera ya Payfast Gateway -->
