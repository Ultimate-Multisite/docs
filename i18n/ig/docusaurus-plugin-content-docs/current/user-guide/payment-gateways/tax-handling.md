---
title: Nkwado Ihe
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Manegwu Tudakwu (Tax Handling)

Ultimate Multisite na-eme (module) nwere n'ụcore plugin anyị, karị bụrụ na ị chọrọ ịkwupụta akụkọ-akụkọ (sales taxes) ọ bụla na ụlọ gị, packages, na services, ị ga-agba nke a site na ị chọrọ ịkwupụta n'ụzọ dị mma anọ, ma ọ bụ ị chọrọ ịkwupụta add-ons.

Ọ bụrụ na ị bụ onye n'ime ndị na-eme ka na Ịgba Afurọ (Europe), anyị na-enwe **add-on** nke na-enwe ụdị ihe dị mma na-agba nkọwa **VAT** (Value Added Tax) nke ọma.

Ultimate Multisite na-eme aka ịkwupụta akụkọ-akụkọ ọ bụla maka gị n'ime aka gọọfọ (government); anyị na-enwe ihe dị mma ka ị chọrọ ịkwupụta akụkọ-akụkọ ọ bụla na anọ n'ime akụkọ ahụ. **Ọ bụrụ na ị ga-agba akụkọ-akụkọ ọzọ, ị ga-enwe ihe dị mma nke gị.**

## Ịgba N'Ụlọ Akụkọ-akụkọ (Enabling Tax Collection)

Ịgba n'ụlọ akụkọ-akụkọ na-enweghị ọdụ. Ka ịgba ya, ị ga-agba **Ultimate Multisite > Settings > Taxes** ma ị gbara onye Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Eee bụ ihe niile nke akụkọ n'ụlọ akụkọ-akụkọ ahụ:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ị chụrụ akụkọ n'ụlọ akụkọ-akụkọ maka produkọ ọ bụla:

![Tax settings for products](/img/config/settings-taxes.png)

### Akụkọ-akụkọ na-enwe vs. Akụkọ-akụkọ na-eme (Tax excluded vs. Tax included)

By default, onye-eme ka ọ bụ produkọ gị, akụkọ-akụkọ na-enweghị, nke ahịjiji na ihe ndị a **emere** n'ime dị n'ime ịkwupụta produkọ ahụ. Ọ bụrụ na anyị chụrụ na onye-eme ka ọ ga-agba akụkọ-akụkọ maka ịgba ahụ, anyị ga-enwe akụkọ-akụkọ **n'ụlọ** nke subtotal (ịgba ihe ndị a nwere).

Ọ bụrụ na ị chọrọ ịkwupụta akụkọ-akụkọ n'ime dị n'ime ịgba produkọ gị, ị ga-agba onye Enable Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Kwelọrị na **save** ihe ndị ị chọrọ ịchụrụ.

###

## Ịkụzi Akụkọ-akụkọ (Creating Tax Rates)

Ọ bụrụ na ịgba Tax Collection, ị ga-agba akụkọ-akụkọ maka dị n'ime ụlọ ndị dị n'ime onye-eme ka ọ dị mma site na editor tax rates anyị.

Mi nwere ịgụ akụkọ ihe mere na ọrụ. Ọ bụrụ na ị chọrọ ịle editor, ị ga-akọ **Manage Tax Rates** button a na sidebar nke settings page nke Tax rates.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Na page editor tax rates ahụ, ị ga-akọ **Add new Row** button ahụ ka ị chụkọ nkwado Tax Rates ọhụrụ.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Ị ga-agbanwe **title** (ịri na invoice) maka nkwado tax ọ bụla. Ndị ga-akọ **country** (ịzooma), **state**, na **city** (maka anyị anọ) ọtụtụ nkwado tax a ga-eji. Mma, jiji **tax rate in percents**.

### Tax Categories

Ị chụkọ ịche multiple Tax Categories ahụ, ka ị chụkọ nkwado tax dị iche iche maka uri produkta dị iche iche.

Akọ iji **Add new Tax Category**, karị ị kpọta onye a na kọa onye category ahụ ma kpọta **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Iji ịche n'ime categories, akọ **Switch** ma chụkọ category ọ bụla ị chọrọ ka ị chụkọ nkwado tax ọhụrụ.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Ị ga-akọ tax category maka product ọ bụla ma ị gidi na **Product edit page** ma jiji tab Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Na screen ahụ, ị ga-akọ off **Is Taxable?** toggle ka iji Ultimate Multisite ị chọpụta na ọ bụghị e ji kọọ nkwado tax maka product ahụ.

## European VAT Support

Kamarị dị ka a na-emebe, anyị nwere add-on (plugin) ọkụrụ maka ndị bi na EU nke mere ihe ndị ọzọ nwere ọrụ nwere ike site na ngwere VAT na Europa.

Ndi mme tools VAT anyị na-agba ọsọ ihe dị mkpa:

  * Ịchọta rate VAT EU karịrị;
  * Nkwupụta akụkọ VAT na ịchekwa ya - na reverse charging maka ndị nwere VAT exempt (nhịkọta dị ka cácụmụ nwere akụkọ VAT ọzọ);

Nke a, iji nwere add-on ahụ, jikọpụ **Ultimate Multisite > Settings** tarakwa, sonraa klik na link sidebar nke **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Oge a ga-anọ n'ime adịghị mfe maka add-on anyị. Ọ bụrụ na ị chọrọ, ị ga-anọ n'ime adịghị mfe ahụ.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Nke a, jikọpụ **Network Admin > Plugins** tarakwa na chọrọ add-on ahụ maka ọkụrụ dị ka ihe niile.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ọ bụrụ na ị ga-anọ geri n'ime **Tax Settings tab**, ị ga-anọ mma maka ọrụ ndị dị nwere ike ịbụ. Chụkọ option **Enable VAT Support** iji gbanwe ụda tools VAT ọhụrụ ahụ. Ahụghị ị **save** settings anyị!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Ịchọta Rate VAT

Onye n'ime tools anyị na-agba ọsọ bụ ịkwado chọta rate tax maka cácụmụ EU. A ga-anọ n'ime page editor rate tax tarakwa ahe ịgbanwe onwe ya tarakwaa iji gbanwe VAT support EU.

Atafụ anyan akafo na enyi akụkọ ahụ, ị ga-akọ ihe ndị nwere ike ịgụ akwa VAT (VAT pulling options). Jiji ozi ọrịa (rate type) ma ị kpọrọ nút **Update EU VAT Rates** (Update EU VAT Rates), ọ ga-kọrọ na table ahụ na akwa tax rates nke mere maka enyi-ime EU. Ka ọ dị, ị chọrọ save anọchịta.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Ị nwere ike ịgụ ihe ndị ahụ onye mere anya na ọ ga-kọrọ ha heta. Ka ị chọrọ, jiji gị edere dònga table nke ị chọrọ ma kpọrọ don save anọchịta values ọhụrụ ahụ.

### VAT Validation

Mgbe a na-achie VAT support (VAT support), Ultimate Multisite ga-achie ihe ọkụkọ ọzọ na form checkout, dịka n'ime dònga billing address field. Ihe a ga-akọrọ anọ maara maka ndị bi anya n'ime EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ga-achie validation na VAT Number, ma ọ bụrụ na ọ geri dị ka ihe a na-agbanwe, reverse charge mechanism ga-achie anọchịta ma rate tax ahụ ga-achie 0% na order ahụ.
