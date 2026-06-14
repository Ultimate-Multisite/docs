---
title: Ho lula le tšhaba
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Ho Faka Tsetso (Tax Handling)

Ultimate Multisite e na module ya faka tsetso (tax collection) e ntshwiso ea plugin ea rona e ntlha, kaale u na le ho hlokomela ho kolela tsetso ea selo (sales taxes) ka monate oa hau oa plans, packages le litšomo tsa hau, u ka etsa le lalo ha u hloka ho sa u fana le ho sa u fana le add-ons.

Ho ba le lipuo tse nang le Europe, re numela **add-on** ea e tsoang eo e ntse e ntsa litšomo (tools) le litšomo tsa ho fana ka ho tsamaea kae le VAT compliance.

Ultimate Multisite ha e fana le ho fana kapa ho fana tsetso ea hau ka ba le government; re fana fa u sa u fana le tsetso tse nang ka monate oa ho etsa lipuo. **U tla nna u hloka ho fana tsetso ea hau.**

## Ho Fana Le Ho Tsamaea Tsetso (Enabling Tax Collection)

Ho tsamaea tsetso ha se na le ho fana ka lalo. Ho fana ka ho tsamaea, u tla ba le ho laola **Ultimate Multisite > Settings > Taxes** le ho fana le Enable Taxes setting.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Kea le teng le litšomo tsa sehlopha sa tsetso (tax settings page):

![Tax settings full page](/img/config/settings-taxes-full.png)

U ka fana ka ho bona litšomo tsa tsetso tsa litšomo tse nang le monate o hau:

![Tax settings for products](/img/config/settings-taxes.png)

### Tsetso e ntse e tsamaea (Tax excluded vs. Tax included)

Kaale, litšomo tsa lipuo tsa hau hloekileng ha di fana ka ho sa di fane tsetso, e bolela hore tsetso **ha se fana** ka monate oa lipuo. Ha re tseba hore morao o tla hloka ho fana tsetso ka monate oa lipuo ea monate, re etsa tsetso **ka lehle** ka subtotal.

Ha u batla ho ba le tsetso e tsamaea ka monate oa lipuo ea hau, u ka etsa le lalo ka ho fana le Inclusive Tax setting.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

E re nna ho **save** litšomo tsa hau tse u etse.

###

## Ho Fetang Litšomo (Creating Tax Rates)

Kaale ea u fana le Tax Collection, u tla hloka ho fetang rates tsa tsetso tsa monate ka monate o hau ka monate o hau ka editor ea litšomo tsa rona.

Ho ka fihla ho ba editor ka ho leka ho ho ka a tsela la "Manage Tax Rates" button ea panel ea tax settings page.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ka page ea editor ea tax rates, u ka re tloha Tax Rates tse ntlha ho ba leka ho "Add new Row" button.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

O tla hloka ho ba leka lehle ea tax rate **title** (e tloha ka invoices). Ho tla u ka utloha **country** (ho hloka), **state**, le **city** (lihi li hloka) se se tla ba leka ho fana ka tax ena. Ho fetileng, re tloha **tax rate in percents**.

### Tax Categories

U ka re tloha Tax Categories tse fapaneng, ho ba leka ho ba leka rates tse fapaneng ho dula dintlha tse fapaneng.

Re tloha ho "Add new Tax Category", ho re se lehle ea lela la category ea hau le ho tsamaea "Create".

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Ho ba leka ho bona categories, re tloha "Switch" le ho utloha category ea hau e leng seo u batlang ho ba leka ho ba leka rates tse ntlha.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

U ka setseba tax category ea dintlha e leng ho ba leka ho ba leka ho ba leka rates tse ntlha ka ho laola **Product edit page** le ho fetola ho Taxes tab.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Ka screen eona, u ka re tloha **Is Taxable?** toggle ho ba leka ho fana ka Ultimate Multisite hore e tsebe hore e ka ba leka ho ba leka rates tsa dintlha ena.

## European VAT Support

Le re, o ne a re, re na le fa'aalo e fa'aopo ma le tagata o le tagata e o le EU ua fa'aopo ma le fa'aopo e tatau i se fa'aopo e fesoasoa.

O fe'i o ia masea o VAT (VAT tools) ua fa'aopo ma le fa'aopo e tatau i se fa'aopo e fa'aopo mo se fa'aopo e taua:

  * Fa'aopo e fa'aopo a le rates o VAT o le EU;

  * Le fa'aopo o le VAT Number (VAT Number) ma le fa'aopo o le validation - ma le reverse charging mo mga entity e tatau i se VAT exemption (o le tagata o le companies e tatau i se VAT numbers).

Mo fa'aopo o lona add-on, ia fesoasoani i **Ultimate Multisite > Settings** ma fa'aopo i le link o le sidebar e fa'aopo a le **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

O fa'aopo i se fa'aopo e tatau i le add-on o ia masea. I lona, o fa'aopo mo le **Ultimate Multisite VAT add-on** ma fa'aopo i ia.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

O fa'aopo mo **Network Admin > Plugins** ma fa'aopo i le add-on o ia masea mo le tagata o le network (network-wide).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

O fa'aopo i se fa'aopo e tatau i le **Tax Settings tab**, o fa'aopo i se mga opsiona e fesoasoa ua fa'aopo. Fa'aopo i le opsiona o **Enable VAT Support** mo le fa'aopo a le new VAT tools. O fa'aopo mo le **save** o lona settings!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Fa'aopo i se rates o VAT Tax

O fe'i o ia masea o lona integration ua fa'aopo ma le fa'aopo e tatau i se mga rates o VAT mo mga member states o le EU. O fa'aopo i lea mo le fa'aopo a le tax rates editor page i le fa'aopo a le Enable EU VAT support.

A tsela le fa'aopo i le VAT pulling options o le fa'aopo i le fa'aopo. O le fa'aopo o le fa'aopo, e fesoasoani atu ia te oe e seleisa se tasi o le rate type ma e klikia i le **Update EU VAT Rates** button, o le a mafai ona fa'aopo ai ma fa'aopo ai le table ma le tax rates mo tasi tasi o le member state o le EU. O le a lelei, o le a mafai ona save fo'i.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

O le a mafai ona fa'aopo ai i le values a le fa'aopo i le fa'aopo. Mo le a tatou fa'aopo ai, o le a mafai ona fa'aopo ai le line o le table lea e oe e talia ma klikia mo save i le mga values sili.

### VAT Validation

Pe lava o se VAT support, Ultimate Multisite o le a fa'aopo ai se field tasi i le checkout form, i le a lelei o le billing address field. O le field o le a mafai ona fa'aopo mo mga customer e fa'aopo i le EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

O le a Ultimate Multisite o le a validate ai le VAT Number ma o le a fa'aopo ai se tasi o le reverse charge mechanism ma o le a setai le tax rate i le 0% mo lona order.
