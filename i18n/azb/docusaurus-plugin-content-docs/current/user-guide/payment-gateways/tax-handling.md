---
title: Tax Management
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Vergi Yönetimi

Ultimate Multisite, çekirdek eklentimize entegre edilmiş bir vergi toplama modülüne sahiptir. Bu nedenle, planlarınız, paketleriniz ve hizmetleriniz için satış vergisi toplamanız gerektiğinde, herhangi bir add-on kurmak zorunda kalmadan bunu kolayca yapabilirsiniz.

Avrupa'da bulunan şirketler için, **KDV** uyumluluğunu daha iyi desteklemek amacıyla araçlar ve özellikler ekleyen bir **add-on** sunuyoruz.

Ultimate Multisite, vergileri sizin adınıza hükümete beyan etmez veya yatırmaz; biz sadece işlem anında uygun vergileri toplamanıza yardımcı oluruz. **Vergileri yatırma sorumluluğu hala size aittir.**

## Vergi Toplamayı Etkinleştirme

Vergi toplama varsayılan olarak etkin değildir. Bunu etkinleştirmek için **Ultimate Multisite > Ayarlar > Vergiler** sayfasına gitmeli ve "Enable Taxes" ayarını açmanız gerekir.

![Tax settings page'deki Enable Taxes düğmesi](/img/config/settings-taxes-enable.png)

İşte vergi ayarları sayfasının tam görünümü:

![Tax settings full page](/img/config/settings-taxes-full.png)

Ayrıca, ürünler için vergi ayarlarını da görebilirsiniz:

![Tax settings for products](/img/config/settings-taxes.png)

### Vergi Hariç mi, Vergi Dahil mi

Varsayılan olarak, tüm ürün fiyatlarınız vergi hariçtir, bu da vergilerin ürün fiyatına **dahil olmadığı** anlamına gelir. Eğer bir müşterinin belirli bir alışveriş için vergi ödemesi gerektiğine karar verirsek, vergileri ara toplamın **üzerine** ekleriz.

Vergilerin ürün fiyatınıza dahil olmasını tercih ederseniz, **Inclusive Tax** ayarını etkinleştirerek bunu yapabilirsiniz.

![Enable Taxes ayarının altındaki Inclusive Tax düğmesi](/img/config/settings-taxes-inclusive.png)

Yapılan değişiklikleri **kaydetmeyi** unutmayın.

###

## Vergi Oranları Oluşturma

Vergi Toplamayı etkinleştirdikten sonra, vergi oranlarını oluşturmak için vergi oranları düzenleyicimizi kullanmanız gerekecektir.

Düzenleyiciye, Vergi ayarları sayfasının kenar çubuğundaki **Manage Tax Rates** düğmesine tıklayarak ulaşabilirsiniz.

![Tax Rates panelindeki Manage Tax Rates bağlantısı](/img/config/settings-taxes-manage-rates.png)

Vergi oranları düzenleyici sayfasında, **Add new Row** düğmesine tıklayarak yeni Vergi Oranları ekleyebilirsiniz.

![Add new Row düğmeli vergi oranları düzenleyici tablosu](/img/config/tax-rates-editor.png)

Her vergi oranına bir **başlık** (faturada kullanılır) vermeniz gerekecek. Ardından, bu verginin hangi **ülkede** (zorunlu), hangi **eyalette** ve hangi **şehirde** (her ikisi de isteğe bağlı) uygulanacağını seçebilirsiniz. Son olarak, **yüzde olarak vergi oranını** ekleyin.

### Vergi Kategorileri

Ayrıca, farklı ürün türleri için farklı vergi oranları eklemek amacıyla birden fazla Vergi Kategorisi oluşturabilirsiniz.

**Add new Tax Category** düğmesine tıklayın, ardından kategorinizin adını yazın ve **Create** düğmesine basın.

![tax rates editor'daki Add new Tax Category düğmesi](/img/config/tax-categories-add.png)

![create category modal'daki Tax Category Name giriş alanı](/img/config/tax-categories-create-modal.png)

Kategoriler arasında gezinmek için **Switch** düğmesine tıklayın ve yeni vergiler eklemek istediğiniz kategoriyi seçin.

![tax categories arasında geçiş yapmak için Switch açılır düğmesi](/img/config/tax-categories-switch.png)

![Mevcut kategorileri gösteren tax category selector açılır menüsü](/img/config/tax-categories-select.png)

Belirli bir ürün için vergi kategorisini, **Ürün düzenleme sayfasına** giderek ve ardından Vergiler sekmesine tıklayarak ayarlayabilirsiniz.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Aynı ekranda, Ultimate Multisite'ın bu ürüne vergi toplamaması gerektiğini bildirmesi için **Is Taxable?** düğmesini kapatabilirsiniz.

## Avrupa KDV Desteği

Daha önce bahsettiğimiz gibi, Avrupa KDV düzenlemeleri nedeniyle ek gereksinimleri olan AB'deki müşteriler için bir add-on mevcuttur.

KDV araçlarımız birkaç önemli konuda yardımcı olur:

*   AB KDV oranlarının kolay yüklenmesi;
*   KDV Numarası toplama ve doğrulaması - ve KDV muafiyeti olan kuruluşlar (geçerli KDV numarasına sahip şirketler gibi) için ters kayıt mekanizması (reverse charging);

Bu add-onu kurmak için **Ultimate Multisite > Ayarlar** sayfasına gidin ve ardından kenar çubuktaki **Check our Add-ons** bağlantısına tıklayın.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Add-on sayfamıza yönlendirileceksiniz. Orada **Ultimate Multisite VAT add-on** araması yapabilir ve kurabilirsiniz.

![Add-ons page'deki VAT add-on karosu](/img/admin/addons-page-vat.png)

![VAT add-on Install Now dialog](/img/admin/addon-install-vat.png)

Ardından, **Network Admin > Plugins** bölümüne gidin ve bu add-onu ağ genelinde etkinleştirin.

![Network Activate action for the VAT add-on on the Plugins page](/img/admin/addons-list-vat.png)

**Vergi Ayarları** sekmesine geri döndüğünüzde, yeni seçenekler göreceksiniz. Yeni KDV araçlarını etkinleştirmek için **Enable VAT Support** düğmesini açın. Ayarlarınızı **kaydetmeyi** unutmayın!

![Enable VAT Support toggle in the Tax settings after add-on activation](/img/config/settings-taxes-vat-toggle.png)

### KDV Vergi Oranlarını Çekme

Entegrasyonumuzun eklediği araçlardan biri, AB üye devletleri için vergi oranlarını yükleme yeteneğidir. Bu, AB KDV desteği etkinleştirildikten sonra vergi oranları düzenleyici sayfasını ziyaret edilerek yapılabilir.

Sayfanın altında KDV çekme seçeneklerini göreceksiniz. Bir oran türü seçip **Update EU VAT Rates** düğmesine tıklamak, her AB üye devleti için vergi oranlarını içeren tabloyu çekecek ve otomatik olarak dolduracaktır. Daha sonra sadece kaydetmeniz yeterli olacaktır.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Çekildikten sonra değerleri düzenleyebilirsiniz. Bunu yapmak için, sadece düzenlemek istediğiniz tablo satırını düzenleyip yeni değerleri kaydetmek için tıklamanız yeterlidir.

### KDV Doğrulama

KDV desteği etkinleştirildiğinde, Ultimate Multisite ödeme formuna, fatura adresi alanının altına ek bir alan ekleyecektir. Bu alan yalnızca AB'de bulunan müşteriler için görünecektir.

![VAT Number field on the frontend checkout form below the billing address](/img/frontend/checkout-vat-field.png)

Ultimate Multisite daha sonra KDV Numarasını doğrulayacak ve geçerli çıkarsa, ters kayıt mekanizması uygulanacak ve o sipariş için vergi oranı %0 olarak ayarlanacaktır.
