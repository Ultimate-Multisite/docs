---
title: Kev tswj se
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Kev Tswj Se {#tax-handling}

Ultimate Multisite muaj ib module sau se tsim nyob rau hauv peb core plugin lawm, yog li yog koj yuav tsum sau se muag khoom ntawm koj cov plans, pob khoom thiab kev pabcuam, koj ua tau yooj yim yam tsis tas yuav mus nruab add-ons ntxiv.

Rau cov tuam txhab uas nyob hauv Europe, peb muaj ib **add-on** uas ntxiv cov cuab yeej thiab yam ntxwv los pab **support VAT** kev ua raws cai kom zoo dua.

Ultimate Multisite tsis xa ntaub ntawv se lossis them se sawv koj npe rau tsoomfwv; peb tsuas pab koj sau cov se tsim nyog thaum muaj kev yuav muag. **Koj tseem yuav tsum them se ntawm koj tus kheej.**

## Qhib Kev Sau Se {#enabling-tax-collection}

Kev sau se tsis qhib ua ntej. Yuav qhib nws, koj yuav tsum mus rau **Ultimate Multisite > Settings > Taxes** thiab hloov kom qhib qhov Enable Taxes setting.

![Lub toggle qhib Taxes nyob saum toj ntawm nplooj Tax settings](/img/config/settings-taxes-enable.png)

Ntawm no yog daim duab qhia tag nrho ntawm nplooj tax settings:

![Nplooj Tax settings tag nrho](/img/config/settings-taxes-full.png)

Koj kuj saib tau tax settings rau cov khoom ib qho zuj zus:

![Tax settings rau cov khoom](/img/config/settings-taxes.png)

### Tsis suav se vs. Suav se nrog lawm {#tax-excluded-vs-tax-included}

Ua ntej, tag nrho koj cov nqi khoom yog tsis suav se, txhais tias se **tsis suav nrog** rau hauv tus nqi ntawm cov khoom. Yog peb txiav txim tias ib tus customer yuav tsum them se rau ib qho kev yuav khoom, peb yuav ntxiv cov se **rau saum** subtotal.

Yog koj xav kom se suav nrog hauv tus nqi ntawm koj cov khoom lawm, koj ua tau li ntawd los ntawm kev qhib qhov **Inclusive Tax** setting.

![Kab toggle Inclusive Tax nyob hauv qab qhov Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Tsis txhob hnov qab **save** cov kev hloov uas koj tau ua.

###

## Tsim Tax Rates {#creating-tax-rates}

Tom qab koj qhib Tax Collection, koj yuav tsum tsim tax rates rau tej qhov chaw tshwj xeeb siv peb lub tax rates editor.

Koj nkag tau mus rau editor los ntawm nias lub pob **Manage Tax Rates** nyob ntawm sidebar ntawm nplooj Tax settings.

![Qhov link Manage Tax Rates hauv Tax Rates panel ntawm nplooj settings](/img/config/settings-taxes-manage-rates.png)

Nyob rau nplooj tax rates editor, koj ntxiv tau Tax Rates tshiab los ntawm nias lub pob **Add new Row**.

![Lub rooj tax rates editor nrog lub pob Add new Row nyob saum toj](/img/config/tax-rates-editor.png)

Koj yuav tsum muab ib qho **title** rau txhua tax rate (siv rau invoices). Ces koj xaiv tau **country** (yuav tsum muaj), **state,** thiab **city** (ob qho no xaiv tau) uas qhov se no yuav raug sau. Thaum kawg, ntxiv **tax rate in percents**.

### Tax Categories {#tax-categories}

Koj kuj tsim tau ntau Tax Categories, los ntxiv tax rates sib txawv rau ntau hom khoom sib txawv.

Nias **Add new Tax Category** , ces sau koj category lub npe thiab nias **Create**.

![Lub pob Add new Tax Category nyob saum toj ntawm tax rates editor](/img/config/tax-categories-add.png)

![Lub input field Tax Category Name hauv create category modal](/img/config/tax-categories-create-modal.png)

Yog xav saib dhau ntawm categories, nias **Switch** thiab xaiv category uas koj xav ntxiv se tshiab rau.

![Lub pob dropdown Switch los hloov ntawm tax categories](/img/config/tax-categories-switch.png)

![Lub dropdown xaiv tax category uas qhia cov categories muaj](/img/config/tax-categories-select.png)

Koj teeb tau tax category rau ib qho khoom tshwj xeeb los ntawm mus rau **Product edit page** thiab ces mus rau tab Taxes.

![Tab product taxes nrog tax category thiab taxable toggle](/img/config/product-taxes.png)

Nyob rau tib daim screen ntawd, koj hloov tau lub toggle **Is Taxable?** kom tua, kom Ultimate Multisite paub tias nws yuav tsum tsis txhob sau se ntawm yam khoom ntawd.

## Kev Txhawb European VAT {#european-vat-support}

Raws li tau hais ua ntej, peb muaj ib add-on rau customer hauv EU uas muaj cov kev xav tau ntxiv vim European VAT cov cai.

Peb cov cuab yeej VAT pab nrog ob peb yam tseem ceeb:

  * Thauj EU VAT rates tau yooj yim;

  * Sau thiab validation VAT Number - thiab reverse charging rau cov entities uas zam VAT (xws li cov tuam txhab uas muaj VAT numbers siv tau);

Yuav nruab add-on ntawd, mus rau **Ultimate Multisite > Settings** thiab ces nias rau sidebar link **Check our Add-ons**.

![Sidebar ntawm nplooj Settings nrog link Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Koj yuav raug xa mus rau peb nplooj add-ons. Nyob ntawd, koj tshawb tau **Ultimate Multisite VAT add-on** thiab nruab nws.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Tom qab ntawd, mus rau **Network Admin > Plugins** thiab activate add-on ntawd thoob plaws network.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Yog koj rov qab mus rau **Tax Settings tab** , koj yuav pom cov kev xaiv tshiab muaj lawm. Hloov qhov kev xaiv **Enable VAT Support** kom qhib cov cuab yeej VAT tshiab. Tsis txhob hnov qab **save** koj cov settings!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Rub VAT Tax Rates {#pulling-on-vat-tax-rates}

Ib qho ntawm cov cuab yeej uas peb qhov integration ntxiv yog peev xwm thauj tax rates rau EU member states. Ua tau li ntawd los ntawm mus saib nplooj tax rates editor tom qab qhib EU VAT support.

Nyob hauv qab ntawm nplooj, koj yuav pom cov kev xaiv rub VAT. Xaiv ib hom rate thiab nias lub pob **Update EU VAT Rates** yuav rub thiab auto-populate lub rooj nrog tax rates rau txhua EU member state. Tom qab ntawd, koj tsuas yog yuav tsum save nws xwb.

![Lub pob Update EU VAT Rates nyob hauv qab ntawm tax rates editor](/img/config/tax-rates-vat-pull.png)

Koj kuj kho tau cov values tom qab rub lawv los lawm. Yuav ua li ntawd, tsuas kho kab ntawm lub rooj uas koj xav tau thiab nias kom save cov values tshiab.

### VAT Validation {#vat-validation}

Thaum VAT support qhib lawm, Ultimate Multisite yuav ntxiv ib field ntxiv rau checkout form, hauv qab billing address field. Lub field yuav tsuas tshwm rau cov customers uas nyob hauv EU xwb.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite yuav xyuas kom meej tus VAT Number, thiab yog tias nws rov qab los tias siv tau, ces txoj kev reverse charge yuav raug siv thiab tus nqi se yuav raug teeb rau 0% rau qhov kev xaj ntawd.
