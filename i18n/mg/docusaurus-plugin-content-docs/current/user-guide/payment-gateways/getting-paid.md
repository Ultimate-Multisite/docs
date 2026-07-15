---
title: Fandraisana vola
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Fahazoana karama (v2)

_**FANAMARIHANA MANAN-DANJA: Ity lahatsoratra ity dia miresaka momba ny Ultimate Multisite kinova 2.x.**_

Ultimate Multisite dia manana rafitra maha-mpikambana sy faktiora tafiditra ao anatiny. Mba hiasan'ny rafitra faktioranay, dia nampidirinay ireo vavahadin-karama mahazatra indrindra ampiasaina amin'ny e-commerce. Ny vavahadin-karama mahazatra ao amin'ny Ultimate Multisite dia _Stripe_ , _PayPal_ , ary Fandoavana amin'ny tanana. Afaka mampiasa _WooCommerce_ , _GoCardless_ ary _Payfast_ koa ianao handraisana fandoavana amin'ny alalan'ny fametrahana ireo add-ons mifanaraka aminy.

## Fikirana fototra {#basic-settings}

Azonao amboarina ao anatin'ny fikirana fandoavana Ultimate Multisite ireo vavahadin-karama ireo. Afaka mahita izany ianao amin'ny fandehanana any amin'ny **Ultimate Multisite menu > Settings > Payments.**

![Pejy fikirana Payments ao amin'ny Ultimate Multisite mampiseho ny tontonana Payments](/img/config/payments-settings-page.png)

Alohan'ny hanamboaranao ny vavahadin-karamanao, azafady jereo aloha ireo fikirana fototra momba ny fandoavana azonao amboarina:

**Terena ny fanavaozana mandeha ho azy** **:** Ity dia hiantoka fa hiverimberina ho azy ny fandoavana amin'ny faran'ny tsingerin'ny faktiora tsirairay arakaraka ny fahita matetika amin'ny faktiora nofidin'ny mpampiasa.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 dia manamarina raha manana mari-pamantarana fanavaozana azo ampiasaina indray ny gateway mavitrika alohan'ny hitahirizana membership miverimberina misy auto-renewal alefa. Ny mari-pamantarana fanavaozana dia mety ho gateway subscription, fifanarahana faktiora, saved vault token, na fomba fandoavana mitovy aminy azo ampiasaina indray. Raha milaza ny gateway fa tsy misy mari-pamantarana azo ampiasaina, dia mitahiry ny membership ny Ultimate Multisite nefa mamono ny auto-renewal ary manoratra ny toe-javatra tsy fisian'ny mari-pamantarana mba hahafahan'ny mpitantana na ny fizotran'ny fanohanana mangataka amin'ny mpanjifa hanome alalana indray ny fandoavana alohan'ny datin'ny fanavaozana.

Izany dia misoroka ny membership tsy hiseho ho toy ny hoe havaozina ho azy rehefa tsy afaka mandray afa-tsy fandoavana indray mandeha ny gateway. Ny gateway add-ons dia tokony hanamarina fa ny checkouts miverimberina dia mitahiry mari-pamantarana azo ampiasaina indray, indrindra rehefa manohana fomba fandoavana one-time capture sy vaulted/subscription ny gateway.

**Avelao ny trials tsy misy** **fomba fandoavana:** Rehefa alefa ity safidy ity dia tsy voatery hampiditra fampahalalana ara-bola mandritra ny fizotry ny fisoratana anarana ny client-nao. Izany dia hotakiana ihany rehefa tapitra ny fe-potoana trial.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Alefaso ny faktiora rehefa voamarina ny fandoavana:** Ity dia manome anao safidy handefa faktiora na tsia aorian'ny fandoavana. Mariho fa hanana fidirana amin'ny tantaran'ny fandoavany ny mpampiasa ao anatin'ny Dashboard an'ny tranonkala zanany. Tsy mihatra amin'ny Manual Gateway ity safidy ity.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Tetika fanisana laharan'ny faktiora:** Eto, afaka misafidy ianao na kaody fanondroana fandoavana na tetika laharana misesy. Raha misafidy hampiasa kaody fanondroana fandoavana ho an'ny faktioranao ianao dia tsy mila manamboatra na inona na inona. Raha misafidy hampiasa tetika laharana misesy ianao dia mila manamboatra ny **laharan'ny faktiora manaraka** (Ity laharana ity no hampiasaina ho laharan'ny faktiora ho an'ny faktiora manaraka havoaka ao amin'ny rafitra. Ampitomboina iray izany isaky ny misy faktiora vaovao noforonina. Afaka manova sy mitahiry azy ianao mba hamerenana ny laharana misesin'ny faktiora amin'ny sanda manokana) ary ny **tovona laharan'ny faktiora.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Aiza no hahitana ireo gateway: {#where-to-find-the-gateways}

Afaka manamboatra ireo vavahadin-karama ao amin'ilay pejy ihany ianao ( **Ultimate Multisite > Settings > Payments**). Eo ambanin'ny **vavahadin-karama mavitrika** indrindra, dia ho hitanao: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ary _Manual_.

![Fizarana Active Payment Gateways mitanisa Stripe, Stripe Checkout, PayPal ary Manual](/img/config/payments-active-gateways.png)

Manana lahatsoratra manokana ho an'ny vavahadin-karama tsirairay izahay izay hitarika anao amin'ireo dingana fametrahana azy, izay azonao jerena amin'ireo rohy etsy ambany.

Afaka mijery sy manova antsipirian'ny fandoavana ianao:

![Seha-pifandraisana fanovana fandoavana](/img/admin/payment-edit.png)

Ity ny fijery feno ny pejy fanovana fandoavana:

![Seha-pifandraisana feno fanovana fandoavana](/img/admin/payment-edit-full.png)

Ity koa ny fijery feno ny fikirana vavahadin-karama:

![Pejy feno fikirana vavahadin-karama](/img/config/settings-payments-gateways-full.png)

**Fametrahana ny Stripe gateway**

**Fametrahana ny PayPal gateway**** **

**Fametrahana fandoavana amin'ny tanana**

Ankehitriny, raha te hampiasa _WooCommerce_ , _GoCardless_ na _Payfast_ ho vavahadin-karamanao ianao, dia mila **mametraka sy manamboatra ny add-ons-ny**.

### Ahoana ny fametrahana ny WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Fantatray fa tsy misy any amin'ny firenena sasany ny _Stripe_ sy _PayPal_ ka mametra na manakana ny mpampiasa Ultimate Multisite tsy hampiasa amin'ny fomba mahomby ny plugin-nay. Noho izany dia namorona add-on izahay hampidirana _WooCommerce,_ izay plugin e-commerce tena malaza. Namorona add-ons ireo mpamorona manerana izao tontolo izao mba hampidirana vavahadin-karama samihafa aminy. Nohararaotinay izany hanitarana ireo vavahadin-karama azonao ampiasaina amin'ny rafitra faktiora Ultimate Multisite.

_**ZAVA-DEHIBE:** Ultimate Multisite: WooCommerce Integration dia mitaky ny WooCommerce ho alefa farafahakeliny ao amin'ny tranonkala fototrao._

Voalohany, azafady mandehana any amin'ny pejy add-ons. Afaka mahita izany ianao amin'ny fandehanana any amin'ny **Ultimate Multisite > Settings**. Tokony hahita ny tabilao **Add-ons** ianao. Tsindrio ny **Jereo ny Add-ons-nay**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Rehefa avy manindry ny **Jereo ny Add-ons-nay** ianao, dia hafindra any amin'ny pejy add-ons. Eto dia afaka mahita ny add-ons Ultimate Multisite rehetra ianao. Tsindrio ny add-on **Ultimate Multisite: WooCommerce Integration**.

![Pejy Add-ons mitanisa add-ons Ultimate Multisite anisan'izany ny WooCommerce Integration](/img/addons/addons-page.png)

Hisy varavarankely hipoitra miaraka amin’ny antsipirian’ilay fanampiny. Tsindrio fotsiny ny **Apetraho izao**.

<!-- Pikantsary tsy misy: varavarankelin’ny antsipirian’ny fanampiny Ultimate Multisite WooCommerce Integration miaraka amin’ny bokotra Apetraho izao -->

Rehefa vita ny fametrahana, dia hafindra ho any amin’ny pejin’ny fanitarana ianao. Eto, tsindrio fotsiny ny **Alefa amin’ny tambajotra** ary ho alefa amin’ny tambajotranao ny fanampiny WooCommerce.

<!-- Pikantsary tsy misy: pejin’ny fanitarana misy ny rohy Alefa amin’ny tambajotra ho an’ny fanampiny WooCommerce Integration -->

Rehefa avy nampandeha azy ianao, raha mbola tsy napetraka sy nalefa ao amin’ny tranokalanao ny fanitarana WooCommerce, dia hahazo fampahatsiahivana ianao.

<!-- Pikantsary tsy misy: fampandrenesana ho an’ny mpitantana mampahatsiahy hametraka sy hampandeha ny fanitarana WooCommerce -->

Raha hamaky bebe kokoa momba ny fanampiny WooCommerce Integration, **tsindrio eto**.

### Ahoana ny fametrahana ny fanampiny GoCardless: {#how-to-install-the-gocardless-add-on}

Ny dingana hametrahana ny fanampiny _GoCardless_ dia mitovy be amin’ny fanampiny _WooCommerce_. Mankanesa azafady ao amin’ny pejin’ny fanampiny ary safidio ny fanampiny **Ultimate Multisite: GoCardless Gateway**.

<!-- Pikantsary tsy misy: pejin’ny fanampiny misy ny fanampiny Ultimate Multisite GoCardless Gateway nasongadina -->

Hipoitra ny varavarankelin’ny fanampiny. Tsindrio ny **Apetraho izao**.

<!-- Pikantsary tsy misy: varavarankelin’ny antsipirian’ny fanampiny Ultimate Multisite GoCardless Gateway miaraka amin’ny bokotra Apetraho izao -->

Rehefa vita ny fametrahana, dia hafindra ho any amin’ny pejin’ny fanitarana ianao. Eto, tsindrio fotsiny ny **Alefa amin’ny tambajotra** ary ho alefa amin’ny tambajotranao ny fanampiny _GoCardless_.

<!-- Pikantsary tsy misy: pejin’ny fanitarana misy ny rohy Alefa amin’ny tambajotra ho an’ny fanampiny GoCardless Gateway -->

Raha hianatra ny fomba hanombohana amin’ny vavahady _GoCardless_, **vakio ity lahatsoratra ity**.

### Ahoana ny fametrahana ny fanampiny Payfast: {#how-to-install-the-payfast-add-on}

Mankanesa ao amin’ny pejin’ny fanampiny ary safidio ny fanampiny **Ultimate Multisite: Payfast Gateway**.

<!-- Pikantsary tsy misy: pejin’ny fanampiny misy ny fanampiny Ultimate Multisite Payfast Gateway nasongadina -->

Hipoitra ny varavarankelin’ny fanampiny. Tsindrio ny **Apetraho izao.**

<!-- Pikantsary tsy misy: varavarankelin’ny antsipirian’ny fanampiny Ultimate Multisite Payfast Gateway miaraka amin’ny bokotra Apetraho izao -->

Rehefa vita ny fametrahana, dia hafindra ho any amin’ny pejin’ny fanitarana ianao. Eto, tsindrio fotsiny ny **Alefa amin’ny tambajotra** ary ho alefa amin’ny tambajotranao ny fanampiny _Payfast_.

<!-- Pikantsary tsy misy: pejin’ny fanitarana misy ny rohy Alefa amin’ny tambajotra ho an’ny fanampiny Payfast Gateway -->
