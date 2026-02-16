---
title: Vergi İşleme
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Vergi Yönetimi

Ultimate Multisite, ana eklentimizde yerleşik bir vergi toplama modülüne sahiptir. Bu sayede planlarınız, paketleriniz ve hizmetleriniz için satış vergisi toplamanız gerektiğinde, ek bir eklenti yüklemenize gerek kalmadan bunu kolayca yapabilirsiniz.

Avrupa'da bulunan şirketler için, **KDV** uyumluluğunu daha iyi destekleyen araçlar ve özellikler ekleyen bir **eklenti** sunuyoruz.

Ultimate Multisite, sizin adınıza devlete vergi beyanı yapmaz veya ödemez; sadece işlem sırasında uygun vergileri toplamanıza yardımcı olur. **Vergileri kendiniz beyan etmeniz ve ödemeniz gerekecektir.**

## Vergi Toplamayı Etkinleştirme

Vergi toplama varsayılan olarak etkin değildir. Etkinleştirmek için **Ultimate Multisite > Ayarlar > Vergiler** bölümüne gidip Vergileri Etkinleştir ayarını açmanız gerekir.

![Vergi ayarlarında Vergileri Etkinleştir düğmesi](/img/config/settings-taxes.png)

### Vergi hariç ve Vergi dahil

Varsayılan olarak, tüm ürün fiyatlarınız vergi hariçtir, yani vergiler ürün fiyatına **dahil değildir**. Bir müşterinin belirli bir satın alma için vergi ödemesi gerektiğini tespit edersek, vergileri ara toplama **ek olarak** ekleriz.

Vergilerin ürün fiyatınıza dahil olmasını tercih ediyorsanız, **Dahili Vergi** ayarını etkinleştirerek bunu yapabilirsiniz.

![Dahili Vergi ayarı düğmesi](/img/config/settings-taxes.png)

Yaptığınız değişiklikleri **kaydetmeyi** unutmayın.

### 

## Vergi Oranları Oluşturma

Vergi Toplamayı etkinleştirdikten sonra, vergi oranları düzenleyicimizi kullanarak belirli konumlar için vergi oranları oluşturmanız gerekir.

Düzenleyiciye erişmek için Vergi ayarları sayfasının kenar çubuğundaki **Vergi Oranlarını Yönet** düğmesine tıklayın.

![Kenar çubuğundaki Vergi Oranlarını Yönet düğmesi](/img/config/settings-taxes.png)

Vergi oranları düzenleyici sayfasında, **Yeni Satır Ekle** düğmesine tıklayarak yeni Vergi Oranları ekleyebilirsiniz.

![Yeni Satır Ekle düğmeli vergi oranları düzenleyicisi](/img/config/settings-taxes.png)

Her vergi oranına bir **başlık** vermeniz gerekir (faturalarda kullanılır). Ardından bu verginin uygulanacağı **ülkeyi** (zorunlu), **eyaleti** ve **şehri** (her ikisi de isteğe bağlı) seçebilirsiniz. Son olarak, **yüzde olarak vergi oranını** ekleyin.

### Vergi Kategorileri

Farklı ürün türleri için farklı vergi oranları eklemek amacıyla birden fazla Vergi Kategorisi de oluşturabilirsiniz.

**Yeni Vergi Kategorisi Ekle**'ye tıklayın, ardından kategorinizin adını yazın ve **Oluştur**'a basın.

![Yeni Vergi Kategorisi Ekle düğmesi](/img/config/settings-taxes.png)

![Yeni vergi kategorisi oluşturma](/img/config/settings-taxes.png)

Kategoriler arasında gezinmek için **Değiştir**'e tıklayın ve yeni vergiler eklemek istediğiniz kategoriyi seçin.

![Vergi kategorileri arasında geçiş yapma](/img/config/settings-taxes.png)

![Görüntülenecek vergi kategorisini seçme](/img/config/settings-taxes.png)

Belirli bir ürün için vergi kategorisini, **Ürün düzenleme sayfasına** gidip Vergiler sekmesine tıklayarak ayarlayabilirsiniz.

![Vergi kategorisi ve vergilendirilebilir düğmeli ürün vergileri sekmesi](/img/config/product-taxes.png)

Aynı ekranda, **Vergilendirilebilir mi?** düğmesini kapatarak Ultimate Multisite'a bu ürün için vergi toplamaması gerektiğini bildirebilirsiniz.

## Avrupa KDV Desteği

Daha önce belirtildiği gibi, Avrupa KDV düzenlemeleri nedeniyle ek gereksinimleri olan AB'deki müşteriler için bir eklentimiz bulunmaktadır.

KDV araçlarımız birkaç önemli konuda yardımcı olur:

  * AB KDV oranlarının kolayca yüklenmesi;

  * KDV Numarası toplama ve doğrulama - ve KDV muaf kuruluşlar (geçerli KDV numarasına sahip şirketler gibi) için ters ibraz uygulaması;

Bu eklentiyi yüklemek için **Ultimate Multisite > Ayarlar** bölümüne gidin ve ardından kenar çubuğundaki **Eklentilerimize Göz Atın** bağlantısına tıklayın.

![Eklentiler kenar çubuğu bağlantılı ayarlar sayfası](/img/config/settings-taxes.png)

Eklentiler sayfamıza yönlendirileceksiniz. Orada **Ultimate Multisite VAT eklentisini** arayabilir ve yükleyebilirsiniz.

![Eklentiler sayfasındaki VAT eklentisi](/img/config/settings-taxes.png)

![VAT eklentisi yükleme penceresi](/img/config/settings-taxes.png)

Ardından **Ağ Yöneticisi > Eklentiler** bölümüne gidin ve bu eklentiyi ağ genelinde etkinleştirin.

![VAT eklentisini Ağ Genelinde Etkinleştirme](/img/config/settings-taxes.png)

**Vergi Ayarları sekmesine** geri dönerseniz, yeni seçeneklerin mevcut olduğunu göreceksiniz. Yeni KDV araçlarını etkinleştirmek için **KDV Desteğini Etkinleştir** seçeneğini açın. Ayarlarınızı **kaydetmeyi** unutmayın!

![Vergi ayarlarında KDV Desteğini Etkinleştir düğmesi](/img/config/settings-taxes.png)

### KDV Vergi Oranlarını Çekme

Entegrasyonumuzun eklediği araçlardan biri, AB üye devletleri için vergi oranlarını yükleme özelliğidir. Bu işlem, AB KDV desteğini etkinleştirdikten sonra vergi oranları düzenleyici sayfasını ziyaret ederek yapılabilir.

Sayfanın alt kısmında KDV çekme seçeneklerini göreceksiniz. Bir oran türü seçip **AB KDV Oranlarını Güncelle** düğmesine tıkladığınızda, her AB üye devleti için vergi oranları çekilecek ve tablo otomatik olarak doldurulacaktır. Ardından sadece kaydetmeniz yeterlidir.

### ![AB KDV Oranlarını Güncelle düğmeli KDV oranları çekme seçenekleri](/img/config/settings-taxes.png)

Oranları çektikten sonra değerleri de düzenleyebilirsiniz. Bunu yapmak için düzenlemeniz gereken tablo satırını değiştirin ve yeni değerleri kaydetmek için tıklayın.

### KDV Doğrulama

KDV desteği etkinleştirildiğinde, Ultimate Multisite ödeme formuna fatura adresi alanının altında ek bir alan ekler. Bu alan yalnızca AB'de bulunan müşteriler için görüntülenir.

![Ödeme formundaki KDV numarası alanı](/img/config/settings-taxes.png)

Ultimate Multisite daha sonra KDV Numarasını doğrular ve geçerli olarak döndürülürse, ters ibraz mekanizması uygulanır ve bu siparişteki vergi oranı %0 olarak ayarlanır.
