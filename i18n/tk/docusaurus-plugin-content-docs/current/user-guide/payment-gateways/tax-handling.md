---
title: Vergi İşlemek
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Vergi İşlemleri

Ultimate Multisite-da esas eklentimizde vergi toplama modülü var. Bu, planlarınız, paketleriniz ve hizmetleriniz üzerinde satış vergilerini toplamanız gerektiğinde, herhangi bir ek eklenti kurmaya gerek kalmadan bunu kolayca yapabileceğiniz anlamına gelir.

Avrupa'daki şirketler için, **KDV uyumluluğunu** daha iyi desteklemek için araçlar ve özellikleri ekleyen bir **ek eklenti** sunuyoruz.

Ultimate Multisite sizin adınıza hükümete vergi beyannamesi vermez veya ödeme yapmaz; biz sadece işlem sırasında uygun vergileri toplamanıza yardımcı oluruz. **Vergileri yine kendiniz ödemeniz gerekecek.**

## Vergi Toplamayı Etkinleştirme

Vergi toplama varsayılan olarak etkin değildir. Bunu etkinleştirmek için **Ultimate Multisite > Ayarlar > Vergiler** bölümüne gitmeniz ve "Enable Taxes" (Vergileri Etkinleştir) ayarını açmanız gerekir.

![Tax settings Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

İşte vergi ayarları sayfasının tam görünümü:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ayrıca tek tek ürünler için de vergi ayarlarını görebilirsiniz:

![Tax settings for products](/img/config/settings-taxes.png)

### Vergi Hariç vs. Vergi Dahil

Varsayılan olarak, tüm ürün fiyatlarınız vergi hariçtir, bu da vergilerin ürünün fiyatına **dahil olmadığı** anlamına gelir. Belirli bir satın alma için müşterinin vergi ödemesi gerektiğini belirlersek, vergileri toplam tutarın **üzerine** ekleyeceğiz.

Vergilerin ürün fiyatına dahil olmasını tercih ederseniz, **Inclusive Tax** (Dahil Vergi) ayarını etkinleştirerek bunu yapabilirsiniz.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Yaptığınız değişiklikleri **kaydetmeyi** unutmayın.

###

## Vergi Oranları Oluşturma

Vergi Toplamayı etkinleştirdikten sonra, vergi oranlarını belirli yerler için kendi vergi oranları düzenleyicimizi kullanarak oluşturmanız gerekecek.

Siz WordPress sozlamasyny (editor) yan panelde "Tax settings" (Vergi sozlamaları) sayfasynyň **Manage Tax Rates** (Vergi ýylyklaryny dolandyrmak) düwümini basyp girip bilersiňiz.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Tax rates editor sayğynda, **Add new Row** (New ýaýylygy goşmak) düwümini basyp täze Tax Rates goşyp bilersiňiz.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Her bir tax rate üçin **title** (fakturalarda ulanylýan zat) bermeli size. Soňra bu taxy nireden toplanjakdygy barada **country** (zat aljak ýerini görkezmek mütlipdir), **state** (weraşlyk) we **city** (her ikisi opsional) seçip bilersiňiz. Soňra **tax rate in percents** (ýylylyk ýüzdede) goşup bilersiňiz.

### Tax Categories (Vergi kateleri)

Size dürli hilli önüm üçin dürli tax ýylyklary goşmak üçin köp Tax Categories döredip bilersiňiz.

**Add new Tax Category** (Täze Vergi katelesini goşmak) basyň, soňra kategoriňiziň adyny ýazyp **Create** (Goşmak) basyň.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kateleri gözlemek üçin **Switch** (Üýtgetmek) basyň we täze tax goşmak isleýän kategoriýany saýlaň.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Belgi üçin, **Product edit page** (Önümi redaktir etme saygyna) gitdirip soňra Taxes (Vergiler) tabyna geçip tax categoryni goýyp bilersiňiz.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Şeýle bir ekranda, **Is Taxable?** (Taxa goýulmalymy?) düwümini ýapyp bilersiňiz, bu size Ultimate Multisite-a şol önüm üçin tax toplanmaly däldigini aýtdyrmak üçin mümkinçilik berer.

## European VAT Support (Ieropeýa BPP Durnuklary)

Önümde aýdyp geçdim, bizda Yewropa VAT düzgünleri sebäpli, bu ýurtda bolan iňlisiler üçin goşmaça talaplary bolan bir add-on bar.

Bizim VAT gurşawlary aşakdaky möhümler ähli zatlary bilen kömek edýär:

  * EU VAT ýörite derecelerini oňat ýüklemek;

  * VAT nömrlerini toplaşmak we barlamak - we VAT-den muaf entiteler üçin tersi ýükleme (mysal üçin, düzgün VAT nömrülere eýe bolan kompaniýalar).

Bu add-on barada goýmak üçin **Ultimate Multisite > Settings** bilen girip soň, **Check our Add-ons** tarapyndan linke basyň.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Siz bizden add-onlaryň sahypasyna yöneltilip geçersiňiz. Orada **Ultimate Multisite VAT add-on** üçin gözläp onu goýup bilersiňiz.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Soňra **Network Admin > Plugins** bilen girip bu add-on barada ulgamyň ähli ýerine aktivleşdirilendigini göräýärsiňiz.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Eger **Tax Settings** tabyna geri dönseniz, täze opsionalary görersiňiz. Täze VAT gurşawlaryny işlemek üçin **Enable VAT Support** opsiyasyny açyp bilersiňiz. Guramanyňyzy **save** etmegi unutma!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT Guralaryny Çykarýan (Pulling on VAT Tax Rates)

Bizim integrasiýa goşdurýan gurşawlaryň biri EU ýurtlary üçin guralary ýüklemekdir. Bu, EU VAT durnuğuny açyp bilmekden soň, tax rates editor sahypasyna gitmegiňiz bilen edilip biler.

Saygan sayfasynyň aşagynda VAT çykaryjy opsionalaryny görersiňiz. Biri narapda (rate type) saýlaýan we **Update EU VAT Rates** düwmenine basanda, her bir AB üye toparlygy üçin vergi ýyglary bilen doly bolan jadawaty açyp berer. Sonra siz onu diňe saklamagyňiz zerurdyr.

![VAT çykaryjy narapda aşakdaky düwmen](/img/config/tax-rates-vat-pull.png)

Onu çykaryp gelenden soň, siziň bu ýagdaýynda değerleri hem redaktir edip bilersiňiz. Bunu etmek üçin diňe zerur bolan jadawaty redaktir ediň we täze değerleri saklamak üçin basyň.

### VAT Barlagy (VAT Validation)

VAT durnawy (support) işjeň edildiğinde, Ultimate Multisite saýlaýjy formanyň has bir sanlyny, has çykaryjyl adresi boýunça ýerleşdirilip goýar. Bu sanly diňe AB-de ýerleşen müşderiler üçin görkezilir.

<!-- Screenshot unavailable: Çykaryjyl adersi aşakdaky frontend saýlaýjy formanyndaky VAT sanlynyň sanlydy -->

Sonra Ultimate Multisite VAT sanlygyny barlap geçýar we eger ol dogry bolsa, ters çykaryş usulyny (reverse charge mechanism) ulanyp, şo gün üçin vergi narapdasyny 0% bilen kesdirýär.
