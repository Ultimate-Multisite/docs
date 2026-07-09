---
title: Pagdumala sa Buhis
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Pagdumala sa Buhis {#tax-handling}

Ang Ultimate Multisite adunay module sa pagkolekta og buhis nga gitukod sulod sa among core plugin, busa kung kinahanglan nimo mangolekta og sales taxes sa imong mga plan, package ug serbisyo, dali ra nimo kining mahimo nga dili kinahanglan mag-install og bisan unsang add-ons.

Alang sa mga kompanya nga nahimutang sa Europe, nagtanyag kami og **add-on** nga nagdugang og mga himan ug feature aron mas maayo nga **mosuporta sa VAT** compliance.

Ang Ultimate Multisite dili mo-file o mo-remit og buhis alang kanimo ngadto sa gobyerno; motabang lang kami kanimo sa pagkolekta sa angay nga mga buhis sa panahon sa transaksyon. **Kinahanglan gihapon nimo nga i-remit ang mga buhis sa imong kaugalingon.**

## Pag-enable sa Pagkolekta og Buhis {#enabling-tax-collection}

Ang pagkolekta og buhis dili naka-enable by default. Aron i-enable kini, kinahanglan kang moadto sa **Ultimate Multisite > Settings > Taxes** ug i-toggle aron i-enable ang Enable Taxes setting.

![Enable Taxes toggle sa ibabaw sa panid sa Tax settings](/img/config/settings-taxes-enable.png)

Aniay tibuok nga pagtan-aw sa panid sa tax settings:

![Tibuok panid sa Tax settings](/img/config/settings-taxes-full.png)

Mahimo usab nimo tan-awon ang tax settings alang sa tagsa-tagsa nga mga produkto:

![Tax settings alang sa mga produkto](/img/config/settings-taxes.png)

### Wala gilakip ang buhis vs. gilakip ang buhis {#tax-excluded-vs-tax-included}

By default, ang tanan nimong presyo sa produkto wala maglakip og buhis, nagpasabot nga ang mga buhis **wala gilakip** sa presyo sa produkto. Kung matino namo nga ang usa ka customer kinahanglan mobayad og buhis sa usa ka partikular nga pagpalit, idugang namo ang mga buhis **ibabaw** sa subtotal.

Kung gusto nimo nga ang mga buhis gilakip sa presyo sa imong produkto, mahimo nimo kini pinaagi sa pag-enable sa **Inclusive Tax** setting.

![Inclusive Tax toggle row ubos sa Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ayaw kalimti ang **pag-save** sa mga kausaban nga imong gihimo.

###

## Paghimo og Tax Rates {#creating-tax-rates}

Human nimo i-enable ang Tax Collection, kinahanglan nimo maghimo og tax rates alang sa piho nga mga lokasyon gamit ang among tax rates editor.

Ma-access nimo ang editor pinaagi sa pag-klik sa **Manage Tax Rates** button sa sidebar sa panid sa Tax settings.

![Manage Tax Rates link sa Tax Rates panel sa panid sa settings](/img/config/settings-taxes-manage-rates.png)

Sa panid sa tax rates editor, makadugang ka og bag-ong Tax Rates pinaagi sa pag-klik sa **Add new Row** button.

![Tax rates editor table nga adunay Add new Row button sa ibabaw](/img/config/tax-rates-editor.png)

Kinahanglan nimo hatagan ang matag tax rate og **titulo** (gigamit sa invoices). Dayon makapili ka sa **nasod** (kinahanglan), sa **estado,** ug sa **siyudad** (parehong optional) diin kini nga buhis paninglon. Sa kataposan, idugang ang **tax rate sa porsiyento**.

### Tax Categories {#tax-categories}

Mahimo usab kang maghimo og daghang Tax Categories, aron makadugang og lain-laing tax rates alang sa lain-laing matang sa mga produkto.

I-klik aron **Add new Tax Category** , unya isulat ang ngalan sa imong kategorya ug pindota ang **Create**.

![Add new Tax Category button sa ibabaw sa tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field sa create category modal](/img/config/tax-categories-create-modal.png)

Aron mag-browse sa mga kategorya, i-klik ang **Switch** ug pilia ang kategorya diin gusto nimo magdugang og bag-ong mga buhis.

![Switch dropdown button aron mausab taliwala sa tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown nga nagpakita sa anaa nga mga kategorya](/img/config/tax-categories-select.png)

Mahimo nimo i-set ang tax category alang sa usa ka partikular nga produkto pinaagi sa pag-adto sa **Product edit page** ug dayon sa Taxes tab.

![Product taxes tab nga adunay tax category ug taxable toggle](/img/config/product-taxes.png)

Sa mao gihapong screen, mahimo nimo i-toggle off ang **Is Taxable?** toggle aron ipahibalo sa Ultimate Multisite nga dili kini kinahanglan mangolekta og buhis sa maong produkto.

## Suporta sa European VAT {#european-vat-support}

Sama sa gihisgotan kaniadto, aduna kamiy add-on nga anaa alang sa customer sa EU nga adunay dugang nga mga kinahanglanon tungod sa mga regulasyon sa European VAT.

Ang among mga VAT tool motabang sa pipila ka importanteng butang:

  * Sayon nga pag-load sa EU VAT rates;

  * Pagkolekta ug pag-validate sa VAT Number - ug reverse charging alang sa VAT exempt entities (sama sa mga kompanya nga adunay valid nga VAT numbers);

Aron i-install kana nga add-on, adto sa **Ultimate Multisite > Settings** ug dayon i-klik ang **Check our Add-ons** sidebar link.

![Sidebar sa panid sa Settings nga adunay Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

I-redirect ka ngadto sa among panid sa add-ons. Didto, makapangita ka sa **Ultimate Multisite VAT add-on** ug i-install kini.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Dayon, adto sa **Network Admin > Plugins** ug i-activate kana nga add-on network-wide.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kung mobalik ka sa **Tax Settings tab** , makita nimo ang bag-ong mga opsyon nga anaa. I-toggle ang **Enable VAT Support** nga opsyon aron i-enable ang bag-ong VAT tools. Ayaw kalimti ang **pag-save** sa imong settings!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pagkuha sa VAT Tax Rates {#pulling-on-vat-tax-rates}

Usa sa mga tool nga gidugang sa among integration mao ang abilidad sa pag-load sa tax rates alang sa EU member states. Mahimo kini pinaagi sa pagbisita sa panid sa tax rates editor human ma-enable ang EU VAT support.

Sa ubos sa panid, makita nimo ang VAT pulling options. Ang pagpili og rate type ug pag-klik sa **Update EU VAT Rates** button mokuha ug awtomatikong mopuno sa table sa tax rates alang sa matag EU member state. Dayon, kinahanglan ra nimo kini i-save.

![Update EU VAT Rates button sa ubos sa tax rates editor](/img/config/tax-rates-vat-pull.png)

Mahimo usab nimo i-edit ang mga value human kini makuha. Aron buhaton kini, i-edit lang ang linya sa table nga imong kinahanglan ug i-klik aron i-save ang bag-ong mga value.

### VAT Validation {#vat-validation}

Kung naka-enable ang VAT support, ang Ultimate Multisite magdugang og dugang nga field sa checkout form, ubos sa billing address field. Ang field mopakita ra alang sa mga customer nga nahimutang sa EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Dayon i-validate sa Ultimate Multisite ang VAT Number ug kon mobalik kini nga balido, i-aplikar ang reverse charge mechanism ug ang tax rate itakda ngadto sa 0% sa maong order.
