---
title: Chuidiú Tacaíocht
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Déanamh ar Tacaí

Tá module de choleáil tacaíochta (tax collection) curtha leat sa plugin core atá ag Ultimate Multisite, mar is é sin, má tá sé ag fáil agus a bheith agat iad tacaíochta áirítear ar do plananna, packageanna agus seirbhísí, is féidir leat é go fácil a dhéanamh gan a bheith ag iarraidh installáil aon add-ons.

Do chuidí atá ag cur isteach Eoropa, ag cur isteach **add-on** a thaisrúnas tool agus feichar a bheith agat chun **soporth VAT** (VAT compliance) a fheabhsú.

Níl Ultimate Multisite ag cur tacaíochta nó a choleáil ar athbhreithniúcháin do chuidí go dtí an gcoinnél; tá sé ag cur isteach leat a bheith agat iad tacaíochta atá ag an am áirítear ar an t-athbhreithniúchán. **Is féidir leat é freisin a chur isteach leat.**

## Fáilte le Choleáil Tacaí

Níl choleáil tacaí ag cur isteach go deamhas. Chun é a fáilte, rud éigin leat thuas féachaint ar **Ultimate Multisite > Settings > Taxes** agus chun an cur Enable Taxes a chur i gceann.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Seo fáil mhór ar an cur na tacaí:

![Tax settings full page](/img/config/settings-taxes-full.png)

Is féidir leat é freisin a fheiceáil an cur na tacaí do chuidí:

![Tax settings for products](/img/config/settings-taxes.png)

### Tacaí a bhaint as vs. Tacaí áirítear

Go deamhas, tá gach ceadachas sảna agat ag cur isteach (tax excluded), rud é sin, **níl tacaí áirítear** i gcuid chuidas an t-athbhreithniúcháin. Má dhéanannas faoiint an chéiste ar fáil tacaíochta ar chuidas a bheith agat ar athbhreithniúchán a gcoinne, beidh muid ag cur an tacaí **ar chuid** an subtotal.

Má tá sé ag cur isteach leat tacaí i gcuid ceadachas sảna, is féidir leat é a dhéanamh ar chuid a chur in gceann an cur Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ná bhfuisc an cur síosacha a dhéanach tú.

###

## Creacht na Tacaí

Tar é sin, tar é sin nach bhfuil fáilte leat creacht na tacaí do chuidí áirithe ag cur isteach i gcónaí a bheith agat ar chuid na tacaí.

Leatóg a fáil an editor ar chuid de **Manage Tax Rates** ar an sidebar de na statús tax.

![Link Manage Tax Rates in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ar cur tiúcháin an editor tax, leat féidir leat nua Tax Rates idir chun **Add new Row** a chluin.

![Tá an tabla editor tax le Add new Row ar an uaim](/img/config/tax-rates-editor.png)

Deathtúid thuig each tax rate le **title** (a used ar invoice). Ansin leat féidir leat chun an **country** (agraithe), an **state**, agus an **city** (cá bhfuil sé ag teacht) a chluin, agus ansin, add an **tax rate in percents**.

### Tax Categories

Leat hefyd a chur i bhfeidm n-éifeachtach Tax Categories, chun tax rates eile a chluin ar chuidí éasca de shándála.

Chluin chun **Add new Tax Category** a chluin, ansin leagan an teachtaireacht a bhféadfadh tú agus chluin **Create**.

![Button Add new Tax Category ar uaim an editor tax](/img/config/tax-categories-add.png)

![Field input Tax Category Name i modal create category](/img/config/tax-categories-create-modal.png)

Leat a bheith ag iarraidh a bheith ag cur achtainn Tax Category ar chuid de shándála ar chuid eile de shándála, leat a bheith ag **Switch** agus chun an category a chur i bhfeidm a bhfuil tú ag teacht.

![Button Switch dropdown chun athrú idir tax categories](/img/config/tax-categories-switch.png)

![Dropdown selector Tax category a thaispeáiríonn na categories atá ar fáil](/img/config/tax-categories-select.png)

Leat a chur achtainn an Tax Category ar chuid de shándála ar chuid eile de shándála ar chuid de shándála ag cur i bhfeidm **Product edit page** agus ansin ar an tab **Taxes**.

![Tab Product taxes le tax category agus toggle taxable](/img/config/product-taxes.png)

Ar an am seo, leat a thabhairt an **Is Taxable?** toggle chun Ultimate Multisite a bheith ag fáil an tacaí ar an chuid de shándála sin.

## European VAT Support

Mar sin féin, ag mé sin féin, tá sé add-on ar fáil do chuidiste Eoraipachacha a bhfuil raonacha eile ag teacht ar leith do réiteach Eoraipachacha (VAT).

Bíonn na toolacha mo VAT ag cur isteach cinnte chuid eagraíochtaí tapaidh ar chuid ábhartha:

  * Lánadh fácil de raonacha VAT Eoraipachacha;

  * Gráoinn a bhfáthachas agus a chuidú - agus cheangailte achain (reverse charging) do eagraíochtaí ná VAT (mar shampla, compáirí le raonacha VAT a bheithaithe);

Leat a chur ar fáil an add-on seo, cur isteach i **Ultimate Multisite > Settings** agus ansin cliceáil ar an link dearbaigh ar an chuid sidebar: **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Bhaidh tú ag cur isteach ar an cur síos add-on seo. Beidh tú ag iarraidh a bheith ar an cur síos **Ultimate Multisite VAT add-on** agus a chur ar fáil é.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Ansin, cur isteach i **Network Admin > Plugins** agus chur ar fáil an add-on seo ar fáil ar an ngrú.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Nuair a bhfáthach ar ais go cur isteach i **Tax Settings tab**, beidh tú ar fáil noutacha oiriúnacha. Déan an **Enable VAT Support** (Chruinneadh Rialúcháin VAT) ar fáil chun na toolacha VAT noutacha a chruinneáil. Ná bhíodh tú ag **save** (a chosaint) do chuid cur síos!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### A chur ar fáil raonacha VAT

Is mise tool a bhíonn ag cur isteach an chéad, is féidir leat a chruinneáil raonacha tax ar na staite Eoraipacha. Is féidir é a dhéanamh mar atá tú ag cur isteach i an cur síos dearaigh ar raonacha tax tar éis a chur ar fáil support VAT Eoraipachach.

Ar an bhfíocht ar an bhfíneán seo, beidh tú ag teastaíonn optionaí chun VAT a laighinn. Déan sé sin chun cur isteach ró-ghníomhú (rate type) agus chun an nútair **Update EU VAT Rates** a chluin, beidh an tabla ag teacht arís agus ag cur i bhfeidhm na rathanna saoróirí EU. Ansin, deicinn tú go bhfuil sé ort an t-saonadh.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Is féidir leat a bhaint ar na chuid faoi a laighinn tar éifeachtach. Chun cheann seo a dhéanamh, déan tú an tabla line atá ag teastaíonn uait agus chluin chun na n-uairacha nua a saonadh.

### Validation de VAT

Nuair a bhfáineann samacht ar VAT (VAT support), beidh Ultimate Multisite ag cur fáil eile i form checkout, leathanach leathanach an áit a bhailte ná an áit a bhailte. Beidh an fáil ag teacht arís do chustainí a bhfuil siad ag teacht i EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ansin, beidh Ultimate Multisite ag teastáil ar an Núm VAT agus má bhíonn sé ag teacht arís mar chomhtháir, beidh an rath saoróirí ag cur i gceart agus beidh an rath saoróirí ag cur i 0% ar an oibrid sin.
