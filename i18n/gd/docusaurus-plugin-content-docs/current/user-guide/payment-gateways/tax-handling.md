---
title: Cùinneach aithreacha
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Tax Handling

Tha Ultimate Multisite ma thaileachd deàr-bhleachd (tax collection module) a tha a' tòiseachadh san plugin sin, mar a tha thu'n deàr-bhleachd salaidhean ar eapairtean, packagean agus seòluag. Mar sin, is eadar-dhealaidh thu an tòiseachadh gu fìor le sgaoilean add-ons.

Air tairinnean a tha a' tòiseachadh air Euraip, tha sinn a' tòiseachadh air **add-on** a tha a tharann deàr-bhleachd agus feàinean a bhith a' tòiseachadh gu fìor air **VAT** (Value Added Tax) a tha a' tòiseachadh.

Tha Ultimate Multisite chan a tha a' tòiseachadh salaidhean air thu a' chùlann an t-stòradh do chùlann a' chùlann gu fìor air an t-stòradh dhan gorm. Tha sinn chanach a tha a' tòiseachadh salaidhean air thu a' chùlann a' chùlann gu fìor air an t-stòradh. **Tha thu chanach a tha a' tòiseachadh salaidhean air thu.**

## Tòiseachadh deàr-bhleachd (Enabling Tax Collection)

Cha bhith tòiseachadh deàr-bhleachd a' tòiseachadh gu fìor. Gus a thòiseachadh, musnach faic thu air **Ultimate Multisite > Settings > Taxes** agus thaigh a' tòiseachadh an setadh Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Seo sgaoilean fìor de setadh deàr-bhleachd:

![Tax settings full page](/img/config/settings-taxes-full.png)

Is eadar, thu chanach a tha a' tòiseachadh de setadh deàr-bhleachd airson eapairtean a tha fìor:

![Tax settings for products](/img/config/settings-taxes.png)

### Deàr-bhleachd a tha a' tòiseachadh chan vs. deàr-bhleachd a tha a' tòiseachadh (Tax excluded vs. Tax included)

Air tòiseachadh, tha a ghnìothach, tha a ghnìothach air sealladh eapairtean agad gu fìor salaidhean chan, a tha a' tòiseachadh gun tha salaidhean **chan** san prìs an eapairt. Mar sin, chaidh salaidhean a bhith ag tòiseachadh air an subtotal. Mar a tha sinn a' tòiseachadh gu fìor gun tha thu chanach a tha a' tòiseachadh air sealladh ar chùlann a tha a' tòiseachadh.

Mar a tha thu a' tòiseachadh gun tha salaidhean a tha a' tòiseachadh san prìs an eapairt, is eadar-dhealaidh thu chanach a tha a' tòiseachadh air setadh **Inclusive Tax**.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Cha leugh an cinnteach a' chlàradh (save) a tha thu a' tòiseachadh a' tòiseachadh.

###

## Creachadh salaidhean deàr-bhleachd (Creating Tax Rates)

An uair a tha thu a' tòiseachadh deàr-bhleachd, musnach thu a bhith a' tòiseachadh salaidhean deàr-bhleachd airson àitean a tha fìor a' chùlann salaidhean air an sealladh deàr-bhleachd.

Is eadar a ghràdh a raibh an editor a fháil gu cluich ar bhfath **Manage Tax Rates** ar bhfath (sidebar) de dhutha seachain na tax.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ar an cur síos editor tax, is féidir leat nugaidtear nugaidhean tax ùra ar bhealach a tha thuair a chleachdadh **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Bidh thu a' faigh an **title** (aig thu air na fìsh) do nugaid tax ùr dhan chùis. An uair a tha thuair, is féidir leat a thabhairt an **country** (a tha measgach), an **state**, agus an **city** (beòil beag) a bheil sinn a' faigh an tacais seo. An deireadh, add an **tax rate in percents**.

### Tax Categories

Is eadar, is féidir leat a thabhairt nugaidhean tax mòra, chun nugaidhean tax measgaiche sinnean fìor a chleachdadh airson faigh nugaidhean tax measgaiche fìor ùra.

Cluich air **Add new Tax Category**, agus rogadh ainm do chùis agus cluich ar **Create**.

![Add new Tax Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Ar a chluich airson na chùis, cluich air **Switch** agus sceilidh an chùis sin gu leith cheann do chùis a tha thuair a thabhairt nugaidhean tax ùra.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Is eadar, is féidir leat an chùis tax a thabhairt do chùis fìor gu sònraichte a tha thuair a faigh an **Product edit page** agus an tacais Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Ar an cur síos sin, is féidir leat an **Is Taxable?** a thabhairt (a tha thuair a faigh Ultimate Multisite) airson a bhith a' faigh nugaidhean tax ar an chùis fìor sin.

## European VAT Support

Chan eil air a' chùlchnaich, tha meartach a' cheannach còmhla airson ùidhinn airson stiùirean eile a tha deacairt dhuinn a lasa de uileidhean VAT Eorpae.

Tha àiteachan VAT (VAT tools) a' tuilleadh de dhòighinn eadar beag:

  * Lasachadh leatamach de ràtaiche VAT Eorpae;

  * Còrrtaichean luchd-vat (VAT Number collection and validation) - agus cheannach-chòrr (reverse charging) airson eògan a tha fadaich air VAT (mar sin, companaidhean sin còmhla de dhinn VAT numbers).

 airson a' sgaidh an add-on sin, ràdh an t-sealladh gu **Ultimate Multisite > Settings** agus thaigh air an lìn a' cheannach: **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Bidh thu a' sgaidh air an sealladh add-on. An sin, is eadar a' chùlchnaich airson **Ultimate Multisite VAT add-on** agus a' sgaidh e.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

An uair sin, tha thu a' sgaidh air **Network Admin > Plugins** agus tha an add-on sin a' sgaidh gu fadaich an ngrath.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Tha thu a' sgaidh air **Tax Settings tab**, tha thu a' faic a' chùlchnaichean ùra a' fhaighinn. Taisg an t-sealladh **Enable VAT Support** airson a' sgaidh àiteachan VAT ùra. 'Sgèidh a' chùlchnaich a' chùlchnaichean agad!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### A' sgaidh air ràtaiche VAT

Am mhaighm a tha àiteachan a thann a' sealladh, tha e cheannach a tha a' tuilleadh a lasa de ràtaiche VAT airson staidhean Eorpae. Is e cheannach a tha thu a' sgaidh air an sealladh ràtaiche VAT an dàta a tha a' sgaidh an t-sealladh a' chùlchnaich EU VAT support.

An tasan a' chàrr an seall, tha thuairtichean VAT (VAT pulling options) fyneir a' tacaid. Tha thuairtichean riatanach (rate type) a' tacaid agus tha thuairtichean **Update EU VAT Rates** a' cluich, tha iad a' tacaid agus a' chlàradh an tablu le na ratan tax airson each staid EU. An uair, faigh thu deacair an tòiseachadh (save) gu robh e a' chlàradh na nàdhairtean.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Is eadar, thu leicid an fhaighinn air a' chlàradh air a' tacaid. Tha e a' chlàradh na líntean a tha thu deacair gu robh e a' chlàradh na nàdhairtean sin a' chlàradh agus tha e a' chlàradh na nàdhairtean ùra a' chlàradh.

### VAT Validation

Nuair a bhios cuideachd VAT support (VAT support) a' tacaid, baidh Ultimate Multisite a' tacaid seallad eile air an fòram cheannach (checkout form), a' chùlchnaich an àrd-chàrr (billing address field). Baidh an fhaighinn a' tacaid namh airson stiùirdeichean a' tacaid anns an EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Tha Ultimate Multisite a' tacaid a' chlàradh an seallad VAT (VAT Number) agus tha e a' tacaid air a bhith mar aon deacair, tha an meic a' chlàradh (reverse charge mechanism) a' tacaid agus tha an ratan tax a' tacaid air 0% ar sin na ordadh.
