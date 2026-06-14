---
title: Fandraisana vola
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Fandray (v2)

_**FANAM-PAHANA MANAN-KANA: Io lahatsoratra ity dia manondro ny Ultimate Multisite v2.x.**_

Ny Ultimate Multisite dia manana rafitry ny fandraisana mpikambana sy fandoavam-bola anaty azy. Mba hiara-miasa tsara ny rafitry ny fandoavam-bola, dia nampifangaro ireo *payment gateway* (lalan'ny fandoavam-bola) mahazatra indrindra ampiasaina amin'ny e-commerce isika. Ireo *payment gateway* ohatra fototra ao amin'ny Ultimate Multisite dia _Stripe_, _PayPal_, ary Fandoavam-bola Manokana (Manual Payment). Afaka mampiasa _WooCommerce_, _GoCardless_, ary _Payfast_ ianao mba handray ny fandoavam-bola amin'ny alalan'ny fametrahana ireo *add-on* (fanampiana) mifandraika aminy.

## Fandaharam-potoana Fototra (Basic Settings)

Afaka manova izay rehetra ao amin'ireo *payment gateway* ireo ianao eo ambanin'ny fandaminana fandoavam-bola an'ny Ultimate Multisite. Afaka mahita izany ianao amin'ny alalan'ny mandeha any amin'ny **Ultimate Multisite menu > Settings > Payments.**

![Pejy fandaminana fandoavam-bola ao amin'ny Ultimate Multisite mampiseho ny panel Fandaharam-potoana (Payments)](/img/config/payments-settings-page.png)

Alohan'ny fanamboarana ny *payment gateway* anao, dia jereo aloha ireo fandaminana fototra azo atao:

**Force auto-rene w:** Izany dia hiantohana fa ho avy miverina (recur) ho azy ny fandoavam-bola amin'ny faran'ny tsingerim-potoana fandoavam-bola (billing cycle) araka ny fepetra napafidy ny mpampiasa.

<!-- Screenshot unavailable: Fandaharam-potoana Force Auto-Renew toggle ao amin'ny pejy fandaminana fandoavam-bola -->

Ny Ultimate Multisite v2.13.0 dia manamarina raha misy *credential* (taratasy fanamarinana) azo ampiasaina ho fanavaozana miverimberina (reusable renewal credential) ilay *gateway* iainana alohan'ny hitahirizana fandraisana mpikambana miverimberina miaraka amin'ny auto-renewal. Ny *credential* fanavaozana dia mety ho fandoavam-bola an'ny *gateway*, fifanarahana fandoavam-bola, token voatahiry (saved vault token), na fomba fandoavam-bola azo ampiasaina miverimberina mitovy amin'izany. Raha manambara ny *gateway* fa tsy misy *credential* azo ampiasaina, dia mitahiry ny fandraisana mpikambana an'ny Ultimate Multisite ianao nefa afaka atao ny auto-renewal ary soratana ny toe-javatra hoe tsy misy *credential* mba hahafahan'ny administrator na ny flow support mangataka amin'ilay mpanjifa mba hanamarina indray ny fandoavam-bola alohan'ny daty fanavaozana.

Izany dia manakana ny fampisehoana fanofindiana ho mbola hamerenana ho azy (auto-renew) rehefa afaka mandray fandoavam-bola tokana ihany no azo atao amin'ny gateway. Ny gateway add-ons dia tokony hanamarina fa ny checkout miverimberina (recurring checkouts) dia mitahiry antontan-taratasy azo ampiasaina (reusable credential), indrindra rehefa manome fomba fandoavam-bola roa samihafa ny gateway, toy ny fampidirana vola tokana sy ny fomba fandoavam-bola voatahiry/subscription.

**Asorahina fanandramana tsy misy fomba fandoavam-bola (Allow trials without payment method)** **fomba:** Rehefa voafahana ity safidy ity, dia tsy ho mila manampy fampahalalana ara-bola ny mpanjifa anao mandritra ny dingan'ny fametrahana. Ho ilaina izany rehefa tapitra ny fotoana fanandramana ihany.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Andramo ny faktiora rehefa voamarina ny fandoavam-bola (Send invoice on payment confirmation)**: Manome anao safidy raha hanao fametrahana faktiora ianao na tsia aorian'ny fandoavam-bola. Tsy maintsy fantatra fa hiseho eo amin'ny dashboard an'ilay subsite ny tantaran'ny fandoavam-volan'ny mpanjifa. Tsy misy fiantraikany ity safidy ity amin'ny Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fomba fanomeza laharana faktiora (Invoice numbering scheme)**: Eto, dia afaka misafidy ny famantarana fandoavam-bola iray na rafitra laharana mifanandrify (sequential number scheme). Raha misafidy ny fampiasana code fandoavam-bola ho an'ny faktioranao ianao, tsy mila manao zavatra hafa ianao. Raha misafidy ny fampiasana rafitra laharana mifanandrify ianao, dia mila mametraka ny **laharana faktiora manaraka** (Ity laharana ity no hampiasaina ho laharana faktiora ho an'ny faktiora manaraka hatao amin'ity système ity. Ho ampiana iray isaky ny misy famoronana faktiora vaovao izany. Afaka ovainao ary ataovy azo antoka (save) mba hanorenana indray ny laharana faktiora mifanandrify ho sandana manokana ianao) sy ny **panazavana laharana faktiora** (invoice number prefix).

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Aiza ny gateway (gateways) dia aiza no ahitana azy:

Afaka mametraka ireo payment gateways eo amin'ny pejy iray ianao (**Ultimate Multisite > Settings > Payments**). Eo ambanin'ny **active payment gateways**, dia afaka mahita ireto: _Stripe_, _Stripe_ _Checkout_, _PayPal_ ary _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Misy lahatsoratra manokana ho an'ny payment gateway tsirairay izay hitarika anao amin'ny dingana fametrahany ary azonao atao ny mahita azy ao amin'ireto rohy ireto.

Afaka mijery sy manova ny antsipiriany momba ny famatsiana (payment details) ianao:

![Payment edit interface](/img/admin/payment-edit.png)

Ity no fomba fijery feno an'ny pejy fanovana ny famatsiana:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ity koa dia fomba fijery feno an'ny fandrindrana (settings) ny payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Fametrahana ny gateway Stripe**

**Fametrahana ny gateway PayPal**** **

**Fametrahana fandoavam-bola manokana (manual payments)**

Raha te-handray anjara amin'ny _WooCommerce_, _GoCardless_ na _Payfast_ ho payment gateway ianao, dia mila **manadium-peo sy mametraka ireo add-on** azy ireo ianao.

### Ahoana no fametrahana ny add-on WooCommerce:

Fantatro fa tsy azo ampiasaina amin'ny firehana sasany ny _Stripe_ sy _PayPal_, izay manakana na manakana ny mpampiasa Ultimate Multisite mba hampiasana tsara ny plugin anay. Noho izany dia namoronana add-on ianao mba hampifandraisana ny _WooCommerce_, izay plugin e-commerce tena malaza. Ireo mpandrindra eo amin'izao tontolo izao no nanorina add-on mba hampifandraisana payment gateways samihafa amin'izany. Nampiasa izany aho mba hanitarana ireo payment gateway azo ampiasaina miaraka amin'ny rafitry ny fandoavam-bola (billing system) an'ny Ultimate Multisite.

_**ZAVAN-TSY:** Ny fampifandra Ultimate Multisite sy WooCommerce dia mitaky fa ny WooCommerce dia voasokajy (activated) ao amin'ny tranokala lehibena anao._

Voalohany, mandehin'ny pejy fanampiny (add-ons). Afaka mahita azy ianao amin'ny alalan'ny fidinana any amin'**Ultimate Multisite > Settings**. Ho hitanao ny tabilao **Add-ons**. Tsindrio eo amin'ny **Check our Add-ons**.

<!-- Screenshot unavailable: Tabilao Add-ons ao amin'ny lafiny Settings an'ny Ultimate Multisite miaraka amin'ny rohy Check our Add-ons -->

Aorian'ny tsindriana ny **Check our Add-ons**, dia hivoaka ianao any amin'ny pejy add-ons. Ity no toerana ahitanao ny add-ons rehetra an'ny Ultimate Multisite. Tsindrio ilay add-on hoe **Ultimate Multisite: WooCommerce Integration**.

![Pejy add-ons mampiseho ireo add-ons an'ny Ultimate Multisite anisan'izany ny WooCommerce Integration](/img/addons/addons-page.png)

Hivoaka varavara iray miaraka amin'ny antsipiriany momba ilay add-on. Tsindrio fotsiny ny **Install Now**.

<!-- Screenshot unavailable: Varavara antsoina momba ny antsipiriany an'ilay add-on Ultimate Multisite WooCommerce Integration misy ny bokotra Install Now -->

Aorian'ny vita ny fametrahana, dia hivoaka ianao any amin'ny pejy plugins. Eto, tsindrio fotsiny ny **Network Activate** ary ho voasokajy (activated) ilay add-on WooCommerce ao anatin'ny tambajotra (network) anao.

<!-- Screenshot unavailable: Pejy plugins miaraka amin'ny rohy Network Activate ho an'ilay add-on WooCommerce Integration -->

Aorian'ny fanatanterahana azy, raha mbola tsy manana ny plugin WooCommerce voasokajy sy voasokajy ao amin'ny tranokala anao ianao, dia hisy fampahatsiahivana (reminder) ho tonga.

<!-- Screenshot unavailable: Fanamarihana Admin mampahatsiahia ny administrator mba hametrahana sy hanatanteraka ny plugin WooCommerce -->

Mba hahita antsipiriany bebe kokoa momba ilay add-on WooCommerce Integration, **tsindrio eto**.

### Ahoana no fametrahana ny add-on GoCardless:

Ny dingana hanombohana ny add-on _GoCardless_ dia mitovy amin'ny fomba fampidirana ny add-on _WooCommerce_. Mandehin'ny pejy add-ons ary safidio ny **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Pejy add-ons misy ny Ultimate Multisite GoCardless Gateway add-on voasafidy -->

Ho avy ny varavarana (window) an'ny add-on. Tsindrio ny **Install Now**.

<!-- Screenshot unavailable: Fampisehoana ny antsipiriany an'ny Ultimate Multisite GoCardless Gateway add-on misy ny bokotra Install Now -->

Rehefa vita ny fampidirana, dia ho tonga amin'ny pejy plugins ianao. Eto, tsindrio fotsiny ny **Network Activate** ary ho aktiva ny add-on _GoCardless_ eo amin'ny tambajakao (network).

<!-- Screenshot unavailable: Pejy plugins misy ny rohy Network Activate ho an'ny GoCardless Gateway add-on -->

Mba hahatakarana ny fomba fanombohana ny gateway _GoCardless_, **dia vakio ity lahatsoratra ity**.

### Ahoana no fampidirana ny add-on Payfast:

Mandehin'ny pejy add-ons ary safidio ny **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Pejy add-ons misy ny Ultimate Multisite Payfast Gateway add-on voasafidy -->

Ho avy ny varavarana (window) an'ny add-on. Tsindrio ny **Install Now**.

<!-- Screenshot unavailable: Fampisehoana ny antsipiriany an'ny Ultimate Multisite Payfast Gateway add-on misy ny bokotra Install Now -->

Rehefa vita ny fampidirana, dia ho tonga amin'ny pejy plugins ianao. Eto, tsindrio fotsiny ny **Network Activate** ary ho aktiva ny add-on _Payfast_ eo amin'ny tambajakao (network).
