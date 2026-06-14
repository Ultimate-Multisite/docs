---
title: Gukoresha amakuru y'amakuru
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Gukoresha mu Kugabunga (Tax Handling)

Ultimate Multisite yashobora kugira module ya kugabunga (tax collection) yakirimo mu plugin yetu ya mbere, nobya ushaka kugabunga ibi bikurikira ku gihe cyo gukoresha ubuzima bwawe, packages n'ibyo uzi. Ibi bikwiriye gukora mu buryo mwiza nta kumenya kwiga add-ons (plugins) zikurikira.

Ku nteriyamo za compani zishyira mu Europe, twari dushobora kugira **add-on** wumukoresha uburyo bwo gutanga ibyo gukoresha kandi ibyo bikurikira kugira ngo ubuzima bwa VAT (Value Added Tax) bwiza.

Ultimate Multisite yitera cyangwa ituma ibi byaboneka ku gukoresha ibi mu gihe cyo gufata ibi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi. Icyo twari dushobora gukora mu gihe cyo gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi.

Ultimate Multisite yitera cyangwa ituma ibi byaboneka ku gukoresha ibi mu gihe cyo gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi ku gukoresha n'ibyo uzi.

## Gukora Icyemezo Cyabunga (Enabling Tax Collection)

Gukoresha ibi bikurikira si byitera mu gihe cyo gufata. Kugira ngo yitere, ugomba kwiga **Ultimate Multisite > Settings > Taxes** kandi ubawe ku kiganiro cyo gukora "Enable Taxes".

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Iki ni uburyo bwo kubona igice cyose cyo gukoresha ibi bikurikira:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ushobora kandi kubona ibyo gukoresha ibi bikurikira ku bijyanye n'ibintu byiza (products):

![Tax settings for products](/img/config/settings-taxes.png)

### Icyemezo cyabunga cyangwa nta cyemezo cyabunga (Tax excluded vs. Tax included)

Mu gihe cyo gufata, imbere, ibyo uzi bose byo gukoresha n'ibintu byiza ni byitera mu gihe cyo gufata, bitewe ko ibi bikurikira **si byari mu gihe cyo gukoresha n'ibintu byiza**. Ibi by meaninga ko ibi bikurikira **si bishobora kuba mu gihe cyo gukoresha n'ibintu byiza**. Hejuru y'ubuzima bwa product, twagira ibi bikurikira. Niba twumva ko umuntu ashobora kugabunga ibi ku gihe cyo gufata, twagira ibi bikurikira **ku gukoresha n'ibyo uzi**.

Niba wumva ko ushaka ko ibi byari mu gihe cyo gukoresha n'ibintu byiza, uza kuba wumva ibi bikurikira bishobora gukora ubuzima bwa product, uza kuba wumva **ku gukoresha n'ibyo uzi**.

Nta kwifashisha ko **gukora** ibyo wari wumva.

### Gukora Icyemezo cyabunga (Creating Tax Rates)

Nyuma yuko ugereye gukora "Tax Collection", uza kuba ufite ubushobozi bwo gukora ibi byo gukoresha n'ibintu byiza ku gihe cyo gufata, uza kuba wumva **ku gukoresha n'ibyo uzi** mu gihe cyo gukoresha n'ibyo uzi.

Ushobora kugera ku editor bishobora gukoreshwa binyamukono mu button **Manage Tax Rates** kuri sidebar ya page ya Tax settings.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ku page ya tax rates editor, ubufite uburyo bishobora gukoreshwa mu byemezo by'ubwoko (Tax Rates) uburyo bishobora gukoreshwa mu button **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Ushobora gukora uburyo bishobora gukoreshwa (tax rate) ku gihe cy'ubwoko (invoice), uba **title** (uwo wifashishijwe mu invoice). Nyuma, ushobora gushyira **country** (iki ni ikoresho), **state**, no **city** (ibiri ni ibyo bishobora kuba byiza) aho uburyo bishobora gukoreshwa bishobora gukoreshwa. Nyuma, ushaka kugabanya **tax rate in percents**.

### Tax Categories

Ushobora kandi gukora Tax Categories nyinshi, kugira ngo ushaye tax rates z'ibintu byiza by'ubwoko (products) byiza.

Gukoresha button **Add new Tax Category**, nyuma yemeza izina ry'category yawe kandi ugukoresha **Create**.

![Add new Tax Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kugira ngo usubire mu categories, gukoresha **Switch** kandi ugushyira category uwo wumva wumva kugira ngo ushaye tax rates z'ibintu byiza.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Ushobora gushyira Tax Category ku gihe cy'ubwoko (product) cyangwa uburyo bishobora gukoreshwa (tax rateable) uburyo bishobora gukoreshwa (product) uburyo bishobora gukoreshwa (Product edit page) kandi nyuma ya tab ya Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Ku gihe cy'ubwoko cyangwa uburyo bishobora gukoreshwa, ushobora gushyira off **Is Taxable?** kugira ngo Ultimate Multisite yemeze ko itabona tax rates ku gihe cy'ubwoko cyo mu gihe cyo.

## European VAT Support

Kugera nkunda ko twabivuze, twari dushyira add-on ku abakoresha mu EU babishobora uburyo bwo gukoresha ibindi ku buryo bwo VAT (Value Added Tax) kubera amakuru y'Uburomanya.

Icyemezo cyacu cy'ibyo byo mu gihe cyo kwiga:

  * Gukoresha mu buryo bwiza uburenganzira bwa VAT mu EU;

  * Gukoresha imyitwarire ya VAT no gukora uburyo bwo gukoresha imyitwarire y'Uburomanya (reverse charging) ku nshuti zikoresha VAT cyangwa zishobora guhindurwa (nko mu gihe cyo abantu batagira numéro ya VAT).

Kugira ngo ushake add-on uyu, gukora **Ultimate Multisite > Settings** kandi ukoresha link y'sidebar itanga **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Ushobora guhindurwa ku cyerekezo cyacu cyo add-on. Mu gihe uyu, ushobora gushaka **Ultimate Multisite VAT add-on** kandi ukoresha.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Kandi, gukora **Network Admin > Plugins** kandi ukoresha ibyo mu gihe cyo kwiga (activate) add-on uyu ku gice cyose cy'uburenganzira bwa network.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Iyo usaba kuguherera mu **Tax Settings tab**, uzabona ibindi byo gukoresha. Gukora (Toggle) **Enable VAT Support** kugira ngo ubyumve ibyo byo kwiga bwa VAT. Usahindura ko wari wumva gukoresha ibyo byo kwiga!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Gukoresha imyitwarire ya VAT (Pulling on VAT Tax Rates)

Icyemezo cyacu cy'ibyo byo kwiga ni ubushobozi bwo gukoresha imyitwarire y'VAT mu gihe cyo abako mu EU. Ibi bishobora gukorwa binyuze mu gutangira ku myitwarire ya tax rates gisobanuye ari mu gihe cyo gukoresha VAT support.

W'uko ku mwiza w'ibyo uziwe mu cyerekezo cyo kera (VAT pulling options) ku mwiza wa cyerekezo cyo kera. Kugira ngo ushije uburyo bwo gukoresha, ugomba gukoresha uburyo bw'ubwujumbura (rate type) kandi ukoresheje ubutumwa **Update EU VAT Rates** kugira ngo itoze igisubizo cyangwa ikoresheye mu rubuga rwa table n'ibyo byo mu gihe cyose. Nyuma, wowe ugomba gukora gusa ubwumvikane (save).

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Ushobora kandi gukora uburyo bwo guhindura ibyo byo mu gihe cyose ariko ubwumvikane (values) nyuma y'ibyo utazikoresheje. Uko ubawe, ugomba gukora gusa igikorwa cyo guhindura indwara wowe uvuga kandi ukoresha butumwa kugira ngo ushije ibyo byo mu gihe cyose.

### Gutondera (VAT Validation)

Icyiza cyane, iyo ubawe ubushobozi bwo gukora VAT support, Ultimate Multisite izafasha igice kirekire ku gihe cyo gutera umukono (checkout form), cyangwa se mu gihe cyo guhindura ibyo byo mu gihe cyose. Iki gice kizaboneka gusa kuri abakoresha bakurikira mu EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Nyuma, Ultimate Multisite izafasha indwara ya VAT kandi iyo itazera ko ari indwara yiza, uburyo bwo gukoresha ubwumvikane (reverse charge mechanism) kizaboneka kandi ibyo byo mu gihe cyose bizaba 0% ku gihe cyo gutera umukono.
