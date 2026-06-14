---
title: Kukonza Zaka
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Kufunso Kufunso (Tax Handling)

Ultimate Multisite uma module ya kukhala m'moyo wathu wathu (core plugin), chifukutsa kuti muli ndi kuyesa zokoleza zokoleza za zomwe muli ndi njira, packages, ndi udindo wanu, monga momwe mungayesere ndi kupeza ndalama.

Poyenera kwa kampani zomwe liyonse lili Europe, tili ndi **add-on** lomwe limapanga zinthu ndi zokonzanso kuti muwoneke bwino pa kufunsa VAT (Value Added Tax).

Ultimate Multisite si imene imapereka kapena imapereka ndalama za zokoleza kwa dziko lero; tili ndi chonde kukhulupatsa zokoleza zomwe zikufunika m'maka pa nthawi ya kuyesa. **Muli kulonse mukufunsa ndalama za zokoleza wanu.**

## Kukhazikitsa Kuyesa Ndalama (Enabling Tax Collection)

Kukonza ndalama za zokoleza si chifukutsa m'maka. Kuti muli ndi kuyesa, mukucheza ku **Ultimate Multisite > Settings > Taxes** ndipo mukupeza kuti muwoneke bwino setting ya Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Nkhani yomwe imapereka zinthu zonse za settings za ndalama:

![Tax settings full page](/img/config/settings-taxes-full.png)

Mungathe kuyesa settings za ndalama kwa udindo wanu wophunzira:

![Tax settings for products](/img/config/settings-taxes.png)

### Zokoleza zomwe si zikufunika vs. Zokoleza zomwe zikufunika (Tax excluded vs. Tax included)

M'maka, zinthu zonse za mndandawiro wanu zimakhala ndi ndalama zosakufunika, zomwezi ndi kuti ndalama **si zikufunika** m'mndandawiro wanu. Ngati tikufuna kuti munthu adzakhale kuyesa ndalama pa chinthu cha nthawi yomwe, tikupanga ndalama za zokoleza **pa m'maka** pa subtotal.

Ngati mukufuna kuti ndalama zikufunika m'mndandawiro wanu, mungayesere lokuti muli ndi setting ya Inclusive Tax (Zokoleza Zikufunika).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Mungathe kuyesa zotere zomwe muli kukhala.

Mungatheli m'moyo wopangidwa ndi kukhala m'editor kwa kupanga ndalama (editor) monga ku-**Manage Tax Rates** button pa sidebar ya settings page ya tax.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Pa editor ya tax rates, muli ndi ulemu wopangidwa ndalama (Tax Rates) kwa kulemba nyengo zatsopano monga ku-**Add new Row** button.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Muli ndi kuyenera kumphatikiza ndalama (tax rate) **title** (imene imaperekedwa pa invoices). Kodi muli ndi kuyesa **country** (liyenera), **state**, ndi **city** (ziliya kukhala optional) pamene ndalama iyi idzakhala. Mwachidule, muli ndi ku-add **tax rate in percents**.

### Tax Categories

Muli ndi ulemu wopangidwa ndalama (Tax Categories) nthawi zina, kuti mupereke ndalama zosiyanasiyana kwa aina zokha za products.

Kutanthauza ku-**Add new Tax Category**, ukumbukira dzina la category yanu ndipo chitsatira **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kuti mupereke ndalama zosiyanasiyana, mutanthauza ku-**Switch** ndipo chitsatira category yomwe mukufuna kupereka ndalama zatsopano.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Muli ndi kuyesa tax category kwa product imodzi monga kuenda pa **Product edit page** ndipo ku-Taxes tab.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Pa screen imodzi, muli ndi kuyesa **Is Taxable?** toggle kuti Ultimate Multisite mwamveke kuti sikuyeneri kupereka ndalama pa product imodzi.

## European VAT Support

Kodiwa muliyeze, tili ndi add-on lomwe lili kwa wamukono wa EU omwe ali ndi zolemba zina chifukwa cha sharthyera la VAT la Europa.

Zimene zake za VAT zimapandula zinthu zingapo zofunika kwambiri:

  * Kukhala bwino kwa rates za VAT za EU;

  * Kulemba ndikumbutsa Nambala ya VAT ndi kuyesa - koma kukhala ndi reverse charging kwa zomwe siyo ndi sharthyera la VAT (mwachitsanzo, kampani zomwezi ndi nambala ya VAT yomwezi).

Kuti utse add-on iwo, ndi lero ku **Ultimate Multisite > Settings** ndipo ukumbukire link ya sidebar imene imapamwera kwa **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Muli pamwera pa uthenga wathu wa add-on. Kuti muli ndi **Ultimate Multisite VAT add-on** ndipo mutse.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Kuti muli pamwera kwa **Network Admin > Plugins** ndipo mutse add-on iwo wosonyeza kwa mtengo wose wa network.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ngati muli pamwera kwa **Tax Settings tab**, mudzindikira zinthu zatsopano zomwe zimapamwera. Kuti mutse zinthu za VAT zatsopano, simukumbukire kuti mu **save** settings yanu!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Kukhala ndi Rates za VAT

Moyo wosonyeza womwe imapamwera ndi chinthu chomwe chifukwa cha integration yathu ndi kuyesa rates za VAT kwa dziko lamtengo la EU. Izi zimapangidwa monga kuwona ndondome ya editor ya rates za VAT monga mukuuka VAT support ya EU.

M'mulo kwa mwisho wa ukurasa, utapata chaguzi za kupata VAT (VAT pulling options). Ukichagua aina ya kiwango na kukumbuka kitufe cha **Update EU VAT Rates**, kitatoka na kutengeneza moto (auto-populate) jedwali na viwango vya kodi kwa kila nchi ya EU. Kisha, unahitaji tu kuihifadhi.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Unaweza pia kuhariri thamani baada ya kuzipata. Ili kufanya hivyo, rahisi tu kuhariri mstari wa jedwali unaohitaji na kukumbuka ili kuhifadhi thamani mpya.

### VAT Validation

Wakati msaada wa VAT unapoandaliwa (enabled), Ultimate Multisite utaongeza fomu ya ziada kwenye fomu ya checkout, chini ya sehemu ya anwani ya malipo. Sehemu hiyo itakuonekana tu kwa wateja wanaoko EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite kisha itathibitisha Namba ya VAT na ikiendelea kama ni sahihi, mchakato wa reverse charge utatumika na kiwango cha kodi kitarekebishwa kuwa 0% kwenye oda hiyo.
