---
title: Ìṣàkóso Owó-orí
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Ìṣàkóso Owo-orí

Ultimate Multisite ní module gbigba owo-orí tí a kọ sínú plugin pàtàkì wa, nítorí náà bí o bá nílò láti gba àwọn owo-orí títà lórí àwọn plan, package àti iṣẹ́ rẹ, o lè ṣe bẹ́ẹ̀ rọrùn láì fi dandan sí fifi àfikún kankan síi.

Fún àwọn ilé-iṣẹ́ tó wà ní Europe, a ń pèsè **àfikún** kan tó ń ṣàfikún àwọn irinṣẹ́ àti àwọn ẹya láti **support VAT** compliance dáadáa.

Ultimate Multisite kì í faìlì tàbí san owo-orí sí ìjọba ní ipò rẹ; a kàn ń ràn ọ́ lọ́wọ́ láti gba àwọn owo-orí tó yẹ ní àkókò transaction. **Ìwọ fúnra rẹ ṣì ní láti san owo-orí náà.**

## Mímú Gbigba Owo-orí ṣiṣẹ́ {#enabling-tax-collection}

Gbigba owo-orí kò ṣiṣẹ́ ní àiyipada. Láti mú un ṣiṣẹ́, o ní láti lọ sí **Ultimate Multisite > Settings > Taxes** kí o sì toggle láti mú setting Enable Taxes ṣiṣẹ́.

![Toggle Enable Taxes ní òkè ojúewé settings Owo-orí](/img/config/settings-taxes-enable.png)

Èyí ni ìwo kíkún ti ojúewé settings owo-orí:

![Ojúewé kíkún settings owo-orí](/img/config/settings-taxes-full.png)

O tún lè wo settings owo-orí fún àwọn ọja kọ̀ọ̀kan:

![Settings owo-orí fún àwọn ọja](/img/config/settings-taxes.png)

### Owo-orí tí a yọ kúrò vs. Owo-orí tí a fi kún un {#tax-excluded-vs-tax-included}

Ní àiyipada, gbogbo iye owó ọja rẹ jẹ́ tax excluded, èyí túmọ̀ sí pé àwọn owo-orí **kò sí nínú** iye owó ọja náà. Bí a bá pinnu pé customer yẹ kí ó san owo-orí lórí rírà kan pàtó, a ó fi àwọn owo-orí náà **sí orí** subtotal.

Bí o bá fẹ́ kí owo-orí wà nínú iye owó ọja rẹ, o lè ṣe bẹ́ẹ̀ nípa mímú setting **Inclusive Tax** ṣiṣẹ́.

![Ìlà toggle Inclusive Tax ní ìsàlẹ̀ setting Enable Taxes](/img/config/settings-taxes-inclusive.png)

Má ṣe gbàgbé láti **save** àwọn ìyípadà tí o ti ṣe.

###

## Ṣíṣe Àwọn Oṣuwọn Owo-orí {#creating-tax-rates}

Lẹ́yìn tí o bá mú Gbigba Owo-orí ṣiṣẹ́, ìwọ yóò nílò láti ṣẹ̀dá àwọn oṣuwọn owo-orí fún àwọn ibi pàtó nípa lílo editor oṣuwọn owo-orí wa.

O lè wọ editor náà nípa títẹ bọtìnì **Manage Tax Rates** lórí sidebar ti ojúewé settings Owo-orí.

![Link Manage Tax Rates nínú panel Tax Rates lórí ojúewé settings](/img/config/settings-taxes-manage-rates.png)

Lórí ojúewé editor oṣuwọn owo-orí, o lè ṣàfikún àwọn Tax Rates tuntun nípa títẹ bọtìnì **Add new Row**.

![Table editor oṣuwọn owo-orí pẹ̀lú bọtìnì Add new Row ní òkè](/img/config/tax-rates-editor.png)

Ìwọ yóò nílò láti fún oṣuwọn owo-orí kọ̀ọ̀kan ní **title** kan (tí a máa lò lórí invoices). Lẹ́yìn náà o lè yan **country** (dandan), **state,** àti **city** (méjèèjì jẹ́ àṣàyàn) níbi tí a ó ti gba owo-orí yìí. Ní ìparí, ṣàfikún **oṣuwọn owo-orí ní ìdá ogorun**.

### Àwọn Ẹ̀ka Owo-orí {#tax-categories}

O tún lè ṣẹ̀dá ọ̀pọ̀ Tax Categories, láti ṣàfikún àwọn oṣuwọn owo-orí tó yàtọ̀ fún oríṣìíríṣìí ọja.

Tẹ̀ láti **Add new Tax Category** , lẹ́yìn náà kọ orúkọ ẹ̀ka rẹ kí o sì tẹ **Create**.

![Bọtìnì Add new Tax Category ní òkè editor oṣuwọn owo-orí](/img/config/tax-categories-add.png)

![Pápá input Tax Category Name nínú modal ṣẹ̀dá ẹ̀ka](/img/config/tax-categories-create-modal.png)

Láti lọ kiri láàárín àwọn ẹ̀ka, tẹ **Switch** kí o sì yan ẹ̀ka tí o fẹ́ ṣàfikún àwọn owo-orí tuntun sí.

![Bọtìnì dropdown Switch láti yí padà láàárín àwọn ẹ̀ka owo-orí](/img/config/tax-categories-switch.png)

![Dropdown selector ẹ̀ka owo-orí tí ń fi àwọn ẹ̀ka tó wà hàn](/img/config/tax-categories-select.png)

O lè ṣètò ẹ̀ka owo-orí fún ọja kan pàtó nípa lílọ sí **ojúewé ṣíṣe àtúnṣe Ọja** àti lẹ́yìn náà sí tab Owo-orí.

![Tab owo-orí ọja pẹ̀lú ẹ̀ka owo-orí àti toggle taxable](/img/config/product-taxes.png)

Lórí screen kan náà, o lè pa toggle **Is Taxable?** láti jẹ́ kí Ultimate Multisite mọ̀ pé kò yẹ kí ó gba owo-orí lórí ọja pàtó yẹn.

## Àtìlẹ́yìn VAT Europe {#european-vat-support}

Gẹ́gẹ́ bí a ti mẹ́nuba tẹ́lẹ̀, a ní àfikún kan tó wà fún customer ní EU tí wọ́n ní àwọn àìní àfikún nítorí àwọn òfin European VAT.

Àwọn irinṣẹ́ VAT wa ń ràn lọ́wọ́ pẹ̀lú àwọn ohun pàtàkì díẹ̀:

  * Fífi àwọn oṣuwọn EU VAT rù sínú rẹ rọrùn;

  * Gbigba àti ìfìdímúlẹ̀ VAT Number - àti reverse charging fún àwọn entity tí a yọ kúrò nínú VAT (bí àwọn ilé-iṣẹ́ tó ní VAT numbers tó wúlò);

Láti fi àfikún yẹn síi, lọ sí **Ultimate Multisite > Settings** lẹ́yìn náà tẹ link sidebar **Ṣàyẹwo àwọn Àfikún wa**.

![Sidebar ojúewé Settings pẹ̀lú link Ṣàyẹwo àwọn Àfikún wa](/img/config/settings-taxes-addons-link.png)

A ó darí rẹ lọ sí ojúewé add-ons wa. Ní bẹ̀, o lè wá **Ultimate Multisite VAT add-on** kí o sì fi síi.

<!-- Screenshot unavailable: tile VAT add-on lórí ojúewé Add-ons -->

<!-- Screenshot unavailable: dialog Install Now ti VAT add-on -->

Lẹ́yìn náà, lọ sí **Network Admin > Plugins** kí o sì activate àfikún yẹn jákèjádò network.

<!-- Screenshot unavailable: action Network Activate fún VAT add-on lórí ojúewé Plugins -->

Bí o bá padà sí **tab Tax Settings** , ìwọ yóò rí àwọn option tuntun tó wà. Toggle option **Enable VAT Support** láti mú àwọn irinṣẹ́ VAT tuntun ṣiṣẹ́. Má ṣe gbàgbé láti **save** settings rẹ!

<!-- Screenshot unavailable: toggle Enable VAT Support nínú settings Owo-orí lẹ́yìn activation add-on -->

### Fífà Àwọn Oṣuwọn Owo-orí VAT {#pulling-on-vat-tax-rates}

Ọ̀kan lára àwọn irinṣẹ́ tí integration wa ṣàfikún ni agbára láti fi àwọn oṣuwọn owo-orí fún àwọn state ọmọ ẹgbẹ́ EU rù sínú rẹ. A lè ṣe èyí nípa ṣíṣàbẹ̀wò sí ojúewé editor oṣuwọn owo-orí lẹ́yìn mímú àtìlẹ́yìn EU VAT ṣiṣẹ́.

Ní ìsàlẹ̀ ojúewé náà, ìwọ yóò rí àwọn option fífà VAT. Yíyan irú oṣuwọn kan àti títẹ bọtìnì **Update EU VAT Rates** yóò fa àwọn oṣuwọn owo-orí sókè, yóò sì auto-populate table náà pẹ̀lú àwọn oṣuwọn owo-orí fún state ọmọ ẹgbẹ́ EU kọ̀ọ̀kan. Lẹ́yìn náà, o kàn nílò láti save rẹ.

![Bọtìnì Update EU VAT Rates ní ìsàlẹ̀ editor oṣuwọn owo-orí](/img/config/tax-rates-vat-pull.png)

O tún lè ṣàtúnṣe àwọn iye lẹ́yìn fífà wọ́n. Láti ṣe é, kàn ṣàtúnṣe ìlà table tí o nílò kí o sì tẹ láti save àwọn iye tuntun náà.

### Ìfìdímúlẹ̀ VAT {#vat-validation}

Nígbà tí àtìlẹ́yìn VAT bá ṣiṣẹ́, Ultimate Multisite yóò ṣàfikún pápá àfikún sí form checkout, ní ìsàlẹ̀ pápá billing address. Pápá náà yóò hàn fún àwọn customer tó wà ní EU nìkan.

<!-- Screenshot unavailable: pápá VAT Number lórí form frontend checkout ní ìsàlẹ̀ billing address -->

Ultimate Multisite yóò wá jẹ́risi Nọ́mbà VAT náà, tí ó bá sì padà gẹ́gẹ́ bí èyí tó wúlò, a ó lo ilana ìsanwó-orí yiyípadà, a ó sì ṣètò oṣùwọ̀n owó-orí sí 0% lórí ìbere rira yẹn.
