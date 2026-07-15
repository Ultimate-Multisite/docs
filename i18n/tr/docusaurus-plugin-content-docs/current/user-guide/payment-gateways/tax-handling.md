---
title: Vergi İşleme
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Vergi Yönetimi

Ultimate Multisite, çekirdek plugin’imize yerleşik bir vergi tahsilat modülüne sahiptir; bu nedenle planlarınız, paketleriniz ve hizmetleriniz için satış vergisi tahsil etmeniz gerekiyorsa, herhangi bir add-on yüklemeye başvurmadan bunu kolayca yapabilirsiniz.

Avrupa’da bulunan şirketler için, **VAT desteğini** daha iyi destekleyecek araçlar ve özellikler ekleyen bir **add-on** sunuyoruz.

Ultimate Multisite, sizin adınıza devlete vergi beyan etmez veya ödeme yapmaz; yalnızca işlem sırasında uygun vergileri tahsil etmenize yardımcı oluruz. **Vergileri yine de kendiniz ödemeniz gerekir.**

## Vergi Tahsilatını Etkinleştirme {#enabling-tax-collection}

Vergi tahsilatı varsayılan olarak etkin değildir. Etkinleştirmek için **Ultimate Multisite > Settings > Taxes** bölümüne gitmeniz ve Enable Taxes ayarını etkinleştirmek üzere anahtarı açmanız gerekir.

![Vergi ayarları sayfasının üst kısmındaki Enable Taxes anahtarı](/img/config/settings-taxes-enable.png)

Vergi ayarları sayfasının tam görünümü şöyledir:

![Vergi ayarları tam sayfası](/img/config/settings-taxes-full.png)

Tekil ürünler için vergi ayarlarını da görüntüleyebilirsiniz:

![Ürünler için vergi ayarları](/img/config/settings-taxes.png)

### Vergi hariç ve vergi dahil {#tax-excluded-vs-tax-included}

Varsayılan olarak, tüm ürün fiyatlarınız vergi hariçtir; yani vergiler ürünün fiyatına **dahil değildir**. Bir müşterinin belirli bir satın alma için vergi ödemesi gerektiğini belirlersek, vergileri ara toplamın **üzerine** ekleriz.

Vergilerin ürün fiyatınıza dahil olmasını tercih ediyorsanız, bunu **Inclusive Tax** ayarını etkinleştirerek yapabilirsiniz.

![Enable Taxes ayarının altındaki Inclusive Tax anahtar satırı](/img/config/settings-taxes-inclusive.png)

Yaptığınız değişiklikleri **kaydetmeyi** unutmayın.

###

## Vergi Oranları Oluşturma {#creating-tax-rates}

Vergi Tahsilatını etkinleştirdikten sonra, vergi oranları düzenleyicimizi kullanarak belirli konumlar için vergi oranları oluşturmanız gerekir.

Düzenleyiciye, Vergi ayarları sayfasının kenar çubuğundaki **Manage Tax Rates** düğmesine tıklayarak erişebilirsiniz.

![Ayarlar sayfasındaki Tax Rates panelinde Manage Tax Rates bağlantısı](/img/config/settings-taxes-manage-rates.png)

Vergi oranları düzenleyici sayfasında, **Add new Row** düğmesine tıklayarak yeni Vergi Oranları ekleyebilirsiniz.

![Üst kısmında Add new Row düğmesi bulunan vergi oranları düzenleyici tablosu](/img/config/tax-rates-editor.png)

Her vergi oranına bir **başlık** (faturalarda kullanılır) vermeniz gerekir. Ardından bu verginin uygulanacağı **ülkeyi** (zorunlu), **eyaleti/ili** ve **şehri** (ikisi de isteğe bağlı) seçebilirsiniz. Son olarak, **vergi oranını yüzde olarak** ekleyin.

### Vergi Kategorileri {#tax-categories}

Farklı ürün türleri için farklı vergi oranları eklemek üzere birden fazla Vergi Kategorisi de oluşturabilirsiniz.

**Add new Tax Category** seçeneğine tıklayın, ardından kategorinizin adını yazın ve **Create** düğmesine basın.

![Vergi oranları düzenleyicisinin üst kısmındaki Add new Tax Category düğmesi](/img/config/tax-categories-add.png)

![Kategori oluşturma modalındaki Tax Category Name giriş alanı](/img/config/tax-categories-create-modal.png)

Kategoriler arasında gezinmek için **Switch** seçeneğine tıklayın ve yeni vergiler eklemek istediğiniz kategoriyi seçin.

![Vergi kategorileri arasında geçiş yapmak için Switch açılır düğmesi](/img/config/tax-categories-switch.png)

![Mevcut kategorileri gösteren vergi kategorisi seçici açılır menüsü](/img/config/tax-categories-select.png)

Belirli bir ürün için vergi kategorisini, **Product edit page** sayfasına gidip ardından Taxes sekmesine geçerek ayarlayabilirsiniz.

![Vergi kategorisi ve taxable anahtarı bulunan ürün vergileri sekmesi](/img/config/product-taxes.png)

Aynı ekranda, Ultimate Multisite’ın söz konusu üründen vergi tahsil etmemesi gerektiğini bilmesini sağlamak için **Is Taxable?** anahtarını kapatabilirsiniz.

## Avrupa VAT Desteği {#european-vat-support}

Daha önce belirtildiği gibi, Avrupa VAT düzenlemeleri nedeniyle ek gereksinimleri olan AB’deki müşteriler için kullanılabilir bir add-on’ımız vardır.

VAT araçlarımız birkaç önemli konuda yardımcı olur:

  * AB VAT oranlarının kolayca yüklenmesi;

  * VAT Numarası toplama ve doğrulama - ve VAT muafiyeti olan kuruluşlar için ters ücretlendirme (geçerli VAT numaralarına sahip şirketler gibi);

Bu add-on’ı yüklemek için **Ultimate Multisite > Settings** bölümüne gidin ve ardından **Check our Add-ons** kenar çubuğu bağlantısına tıklayın.

![Check our Add-ons bağlantısı bulunan ayarlar sayfası kenar çubuğu](/img/config/settings-taxes-addons-link.png)

Add-ons sayfamıza yönlendirileceksiniz. Orada **Ultimate Multisite VAT add-on** araması yapıp yükleyebilirsiniz.

<!-- Ekran görüntüsü mevcut değil: Add-ons sayfasındaki VAT add-on kutucuğu -->

<!-- Ekran görüntüsü mevcut değil: VAT add-on Install Now iletişim kutusu -->

Ardından **Network Admin > Plugins** bölümüne gidin ve bu add-on’ı ağ genelinde etkinleştirin.

<!-- Ekran görüntüsü mevcut değil: Plugins sayfasında VAT add-on için Network Activate işlemi -->

**Tax Settings tab** bölümüne geri dönerseniz, yeni seçeneklerin kullanılabilir olduğunu göreceksiniz. Yeni VAT araçlarını etkinleştirmek için **Enable VAT Support** seçeneğini açın. Ayarlarınızı **kaydetmeyi** unutmayın!

<!-- Ekran görüntüsü mevcut değil: Add-on etkinleştirildikten sonra Tax ayarlarında Enable VAT Support anahtarı -->

### VAT Vergi Oranlarını Çekme {#pulling-on-vat-tax-rates}

Entegrasyonumuzun eklediği araçlardan biri, AB üye devletleri için vergi oranlarını yükleme yeteneğidir. Bu, EU VAT desteği etkinleştirildikten sonra vergi oranları düzenleyici sayfası ziyaret edilerek yapılabilir.

Sayfanın alt kısmında VAT çekme seçeneklerini göreceksiniz. Bir oran türü seçip **Update EU VAT Rates** düğmesine tıklamak, her AB üye devleti için vergi oranlarını çekip tabloyu otomatik olarak doldurur. Ardından yalnızca kaydetmeniz gerekir.

![Vergi oranları düzenleyicisinin alt kısmındaki Update EU VAT Rates düğmesi](/img/config/tax-rates-vat-pull.png)

Değerleri çektikten sonra da düzenleyebilirsiniz. Bunu yapmak için ihtiyaç duyduğunuz tablo satırını düzenleyin ve yeni değerleri kaydetmek için tıklayın.

### VAT Doğrulaması {#vat-validation}

VAT desteği etkinleştirildiğinde, Ultimate Multisite checkout formuna, fatura adresi alanının altına ek bir alan ekler. Alan yalnızca AB’de bulunan müşteriler için görünür.

<!-- Ekran görüntüsü mevcut değil: Ön uç checkout formunda fatura adresinin altındaki VAT Number alanı -->

Ultimate Multisite ardından VAT Number bilgisini doğrular ve geçerli olarak dönerse, reverse charge mekanizması uygulanır ve söz konusu siparişte vergi oranı %0 olarak ayarlanır.
