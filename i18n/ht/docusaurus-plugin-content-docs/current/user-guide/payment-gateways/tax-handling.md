---
title: Jere Taks
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Jeremanaj Tax

Ultimate Multisite gen yon modil pou kole tès sou plan ou yo, pake ou yo ak sèvis ou yo, kidonk si ou bezwen kole tès vann sou plan ou yo, pake ou yo ak sèvis ou yo, ou ka fè sa fasil san ou pa bezwen mete okenn add-on.

Pou konpayi ki nan Ewòp, nou ofri yon **add-on** ki ajoute zouti ak fonksyon pou amelyore **sout VAT** (Value Added Tax) konfòmite a pi byen.

Ultimate Multisite pa fè oswa bay tès yo ba gouvènman sou non ou; nou jis ede w kole tès apwopriye a nan moman tranzaksyon an. **Ou pral bezwen tou pou bay tès la ou menm.**

## Kòman kòmanse kole tès

Kole tès pa aktif de fèt. Pou aktive li, ou dwe ale nan **Ultimate Multisite > Settings > Taxes** epi swiv switch "Enable Taxes" (Aktive Tès).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Men yon gade konplè sou paj konfigirasyon tès la:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ou ka tou wè konfigirasyon tès pou chak pwodwi:

![Tax settings for products](/img/config/settings-taxes.png)

### Tès esklisyè vs. Tès enkli

De fèt, tout pri pwodwi ou yo se esklisyè tès (tax excluded), sa vle di tès **pa genyen** nan pri pwodpwi a. Si nou deside ke yon kliyan dwe peye tès sou yon achte espesifik la, nou pral ajoute tès **sou tè** subtotal la.

Si ou prefere pou tès yo enkli nan pri pwodpwi ou an, ou ka fè sa lè w aktive switch "Inclusive Tax" (Tès Enkli).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Pa bliye **save** chanjman ou te fè yo.

###

## Kreye tès

Apou kòmanse, apre w fin aktive Kole Tès la, ou pral bezwen kreye tès pou chak nan kote espesifik yo itilize edat tès nou an (tax rates editor).

Ou ka aksé éditeur la lè ou klike sou bouton **Manage Tax Rates** sou sidebar paj tax settings la.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Sou paj éditeur tax rates la, ou kapab ajoute nouvo Tax Rates lè ou klike sou bouton **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Ou pral bezwen ba chak tax rate yon **title** (ki itilize sou faktura). Apre sa, ou ka chwazi **country** (obligatwa), **state**, ak **city** (poupareman) kote tax sa a ap chaje. Finalman, ajoute **tax rate an pènt**.

### Tax Categories

Ou kapab tou kreye plizyè Tax Categories, pou ajoute diferan tax rates pou diferan kalite pwodwi.

Klike sou **Add new Tax Category**, apre ou ekri non kategori ou a epi klike sou **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Pou gade kategori yo, klike sou **Switch** epi chwazi kategori ou vle ajoute nouvo tax la.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Ou kapab mete tax category pou yon pwodwi espesifik lè ou ale sou **Product edit page** epi apre sa nan onglet Taxes la.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Sou menm ekran sa a, ou ka dekoupe (toggle off) switch **Is Taxable?** pou fè Ultimate Multisite konnen li pa dwe koleksyon tax sou pwodwi la la.

## European VAT Support

Kòm mwen te mansyone anvan, nou gen yon add-on pou kliyan ki nan UE ki gen mandats adisyonèl ak regilasyon TVA Ewòpyen yo.

Zouti TVA nou yo ede w fè kèk bagay enpòtan:

  * Chaje fasil ranmè tarif TVA EU;

  * Koleksyon ak validasyon nimewo TVA - epi chaj revès (reverse charging) pou entite ki eksime de TVA (tankou konpayi ki gen nimewo TVA valide).

Pou mete add-on sa a, ale nan **Ultimate Multisite > Settings** epi klike sou link sidebar la **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Ou pral redirekti ou nan paj add-on nou an. La, ou ka chèche **Ultimate Multisite VAT add-on** epi mete l enstale.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Lè sa fini, ale nan **Network Admin > Plugins** epi aktive add-on sa a pou tout rezo a.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Si ou tounen nan **Tax Settings tab**, ou pral wè nouvo opsyon ki disponib. Mete switch la **Enable VAT Support** pou aktive zouti TVA yo. Pa bliye pou w **save** konfigirasyon ou!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Chèche Tarif TVA

Youn nan zouti ki ajoute entegrasyon nou an se kapasite pou chaje tarif tès pou peyi manm EU yo. Sa ka fèt lè ou ale vizite paj editeur tarif tè a apre w fin aktive sipò TVA EU la.

Anwo an bas de bout paj la, ou pral wè opsyon pou tire (pull) VAT. Lè ou chwazi yon kalite ranmè epi klike sou bouton **Update EU VAT Rates**, li pral montre ak otomatikman remplenumi tab la ak ranmè tax yo pou chak eta manm EU. Apre sa, ou sèlman bezwen kayann li.

![Bouton Update EU VAT Rates an bas editeur ranmè tax](/img/config/tax-rates-vat-pull.png)

Ou ka tou edite valè yo apre ou te tire yo. Pou fè sa, senpleman edite liy tab ou bezwen epi klike pou kayann nouvo valè yo.

### Validasyon VAT

Lè sipò VAT aktif, Ultimate Multisite ap ajoute yon lòt fye a fòm chwote (checkout form), anba fye adrès faktura a. Fye sa a sèlman montre pou kliyan ki nan EU.

<!-- Screenshot unavailable: Fye Nimewo VAT sou fòm chwote frontend anba adrès faktura -->

Ultimate Multisite ap valide Nimewo VAT la epi si li retounen kòm yon nimewo valide, mekanism revers charge a ap aplike e ranmè tax la ap mete 0% sou lòd sa a.
