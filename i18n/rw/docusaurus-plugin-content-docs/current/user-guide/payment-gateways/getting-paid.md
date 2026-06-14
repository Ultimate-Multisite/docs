---
title: Gukorwa
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Gukoresha (v2)

_**IZINYE Y'UMUKUNDI: Igihekiro iryo ryo ririmo riherereye Ultimate Multisite version 2.x.**_

Ultimate Multisite yashyira uburyo bwo gukundwa n'ubwujobozi bwo gukoresha imi. Kugira ngo umusho w'imikoresho ya gukundwa yashobore gukora, twagize imi za gukoresha imi zizwi cyane zishobora gukoreshwa mu gihe cyo gukoresha ibintu by'umuryango (e-commerce). Imi z'imikoresho ya gukundwa mu Ultimate Multisite ni _Stripe_, _PayPal_, n'Umuco w'ubwoko. Uwo hariho uburyo bwo gukoresha _WooCommerce_, _GoCardless_ na _Payfast_ kugira ngo umusho w'imikoresho yashobore gukora ibyo mu gihe cyo gukundwa ubwoko bwo gukoresha imi zizwi.

## Icyemezo Cyiza (Basic Settings)

Ushobora guhindura uburyo bwose bwo gukoresha imi zizwi ku mibereho y'imikoresho ya gukundwa mu Ultimate Multisite. Uzi n'ubwo bishobora kugera ku **Ultimate Multisite menu > Settings > Payments.**

![Icyemezo cyo gukundwa mu Ultimate Multisite kigisha panel ya Payments](/img/config/payments-settings-page.png)

Mbere yo gutera imi za gukundwa yawe, nshobora kugira umwanya ku mibereho y'imikoresho z'imikoresho cyiza uzi n'ubwo bishobora guhindura:

**Force auto-rene w:** Ibi bituma ko imi z'imikoresho zizwi zizera gukundwa mu gihe cyose ku mwera wa gukundwa, aho ibyo bishobora gukorwa byerekana mu gihe cyo gukundwa uzi n'ubwo bw'umuryango wari yashyira.

<!-- Screenshot unavailable: Icyemezo cyo Force Auto-Renew kuri Payments settings page -->

Ultimate Multisite v2.13.0 yishobora gushyira umwanya ku kumenya niba imi ya mbere (active gateway) irafite uburyo bwo gukoresha cyane mu gukundwa (reusable renewal credential) mbere yo gukora umusho w'imikoresho yashobore gukunda (recurring membership) ufite auto-renewal. Uburyo bwo gukoresha cyane ni uburyo bwo gukoresha imi ya mbere, ibyemezo by'ubwoko bwo gukundwa, token y'ibyo wari yashyiramo mu vault, cyangwa uburyo bwiza bwo gukoresha imi zizwi. Niba imi ya mbere izera ko nta buryo bwo gukoresha cyane ariko, Ultimate Multisite yishobora gukora umusho w'imikoresho yashobore gukunda ariko yagira auto-renewal mu gihe cyo gukundwa kandi yerekana uburyo bwo gukoresha cyane ntabwo yari yashyiramo, kugira ngo umukozi cyangwa umwuga ashobore kumenya ko yashobora guhindura imi z'imikoresho mbere yo gukundwa mbere y'umwera w'ibyo bishobora gukunda.

Iyi ni uburyo bishobora kugira ngo umusaruro (membership) ushobore gukoreshwa mu gihe cy'umutera (auto-renew) iyo igatango (gateway) igaragaza gukora gukoresha amafaranga y'umwihariko (one-time payments) gusa. Icyo cyangwa ibindi, ubufasha bw'add-ons ya gateway ni ukubwira ko uburyo bwo gukoresha amafaranga y'umutera (recurring checkouts) bishobora gukoresha ikoranabuhanga rishobora gutungwa (reusable credential), cyane iyo igatango ryashobora gufasha uburyo bwo gukoresha amafaranga y'umwihariko n'uburyo bwo gukoresha amafaranga y'ubwumvikane/subscription.

**Kugira ngo umusaruro ushobore gukoreshwa nta cyerekezo (trials without payment)** **Uburyo:** Niba wamukoreshe uburyo bwa mbere, uza gutera ko uza gushyira amafaranga y'umwihariko mu gihe cyo gukora registration. Iyo igihe cyo mbere cyangwa umutera (trial period) utarashobora kwihagarara, uza kubyara ibyo.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Gufasha invoice ku gihe cyo gukoresha amafaranga (Send invoice on payment confirmation):** Icyo kigaragaza ko uza gutera cyangwa nta cyerekezo gufasha invoice iyo umuntu yagize amafaranga. Ukenya ko abantu bazabona uburyo bwo gukoresha amafaranga mu dashboard ya subsite yabo. Icyo cyo gushobora kugaragara ku gateway ya Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Uburyo bwo gutangira invoice (Invoice numbering scheme):** Hano, uza kubona ko uza gukoresha code y'umwihariko w'umutera cyangwa uburyo bw'ibyo byerekana mu buryo bwa mbere. Niba wamukoreshe code y'umwihariko w'umutera ku invoice zawe, nta kintu ukwiye gushyira mu buryo bwo gufasha. Niba wamukoreshe uburyo bw'ibyo byerekana mu buryo bwa mbere, uza gutera ko ukenya ko uza gutera **invoice number y'umutera w'ingenzi (next invoice number)** (Icyo cyo gushobora gukoreshwa nk'inguzanyo ya invoice itandukanye. Iyo inguzanyo irashobora gufasha mu gihe cyo gukora invoice itandukanye. Iyo inguzanyo igaragara, ikorwa n'imwe. Uza kubyara kandi kugira ngo uya bishobore gushyira mu buryo bwo gufasha). kandi **prefix y'invoice number**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Uburyo u gukoresha mga gateway:

Woweza gutera mga payment gateways ku giheye ( **Ultimate Multisite > Settings > Payments**). Ku gukoresha mu kintu cyiza ku giheye **active payment gateways**, uza kubona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ n'Umuco.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Dufite uburyo mu rwego rwa mbere ku giheye cyangwa gukoresha ibyo gateway byo mu gihe cyiza, hari ibindi byo gutandukanya. Hari article cy'ubwujubi kuri kila payment gateway kandi zizera uburyo bwo gutera ku giheye (settings) byo kuyikoresha, uza kubona mu link zizera hejuru.

Uza kumenya no gukora ibindi byo payment:

![Payment edit interface](/img/admin/payment-edit.png)

Hari uburyo bwo kubona no gutandukanya ibindi byo payment cyose:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hari uburyo bwo kubona ibindi byo gateway byo payment cyose:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Gukoresha Stripe gateway**

**Gukoresha PayPal gateway**

**Gukoresha uburyo bwo gukoresha ibindi (manual payments)**

Ubu, niba wumva wifuza gukoresha _WooCommerce_ , _GoCardless_ cyangwa _Payfast_ nk'ibyo payment gateway yawe, uza gutegura no gukora ibi byo mu gihe **gukoresha no gutera add-ons (add-ons)** byo.

### Uburyo bwo gukoresha add-on ya WooCommerce:

Turagutera ko _Stripe_ n'Umuco ntizera mu gihe cyose, kandi ibyo bituma abantu bashobora gukoresha plugin yacu mu buryo bwiza. Buriwe mu Rwanda hari abantu bashyize add-ons kugira ngo bashobore gutegura ibindi payment gateways ku WooCommerce, ariko twagize uburyo bwo gukoresha ibyo byo kugira ngo twakoreshe ibi gateway byo mu gihe cyiza n'Ultimate Multisite billing system.

**IMPORTANT:** Ultimate Multisite: WooCommerce Integration ikoresha ko WooCommerce yawe mu site yawe yakomeye.

Muri uyu mwanya, ugenda ku page ya add-ons (add-ons). Uzi yashobora kugenda bishobora gukoresha **Ultimate Multisite > Settings**. Uza kubona table ya **Add-ons**. Gukoresha **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Ntabwo ugenda ku **Check our Add-ons**, uza gushyirwa mu page ya add-ons. Hano uzi yashobora kugonawe uyu mwezi wose wa Ultimate Multisite. Gukoresha add-on ya **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Umwe mu window uzabone n'ibindi byo byo add-on. Uza gukoresha **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Ntabwo uyu mwanya w'ubwujgwa, uza gushyirwa mu page ya plugins (plugins). Hano, gukoresha **Network Activate** kandi add-on ya WooCommerce izabone mu network yawe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Ntabwo uza kubona ko nta plugin ya WooCommerce yari yashyiramo kandi yari yakomeye ku website yawe, uzabone umugisha w'ubwujgwa.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Kugira uburyo bwo gusoma uburyo bwo gukoresha add-on ya WooCommerce Integration, **gukoresha uyu link**.

### Uburyo bwo gukoresha add-on ya GoCardless:

Urugero mu gukoresha _GoCardless_ add-on ni mu gukoresha _WooCommerce_ add-on ni mu gukoresha. Urashyira ku rubuga rwo add-ons kandi wumva **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Icyo cyo gukoresha add-on cyo mu gutangira kigira uburyo bwawe. Gukoresha **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Nyuma yo gukora, ubushobozi bwawe bwuzuye ku rubuga rwo plugins. Hano, gukoresha **Network Activate** kandi _GoCardless_ add-on izakoreshwa mu rwego rwawe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Kugira ngo wumve uko ubatangira gukoresha _GoCardless_ gateway, **igawe uyu article**.

### Uburyo bwo gukoresha Payfast add-on:

Urugero ku rubuga rwo add-ons kandi wumva **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Icyo cyo gukoresha add-on kigira uburyo bwawe. Gukoresha **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Nyuma yo gukora, ubushobozi bwawe bwuzuye ku rubuga rwo plugins. Hano, gukoresha **Network Activate** kandi _Payfast_ add-on izakoreshwa mu rwego rwawe.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
