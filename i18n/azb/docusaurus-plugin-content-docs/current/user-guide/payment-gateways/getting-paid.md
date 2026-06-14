---
title: Kash-kash etu
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Para Kazanma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Ultimate Multisite, yerleşik bir üyelik ve faturalandırma sistemine sahiptir. Faturalandırma sistemimizin düzgün çalışması için, e-ticarette en yaygın kullanılan ödeme ağ geçitlerini entegre ettik. Ultimate Multisite'taki varsayılan ödeme ağ geçitleri _Stripe_ , _PayPal_ ve Manuel Ödeme'dir. Ayrıca, ilgili eklentileri kurarak ödeme almak için _WooCommerce_ , _GoCardless_ ve _Payfast_ kullanabilirsiniz.

## Temel Ayarlar

Bu ödeme ağ geçitlerinden herhangi birini Ultimate Multisite ödeme ayarları altından yapılandırabilirsiniz. Buraya **Ultimate Multisite menüsü > Ayarlar > Ödemeler** yolunu izleyerek ulaşabilirsiniz.

![Ultimate Multisite'ta Ödemeler paneli gösteren Ödeme ayarları sayfası](/img/config/payments-settings-page.png)

Ödeme ağ geçidinizi kurmadan önce, yapılandırabileceğiniz temel ödeme ayarlarına göz atmanız faydalı olacaktır:

**Otomatik Yenilemeyi Zorla:** Bu ayar, kullanıcının seçtiği faturalandırma sıklığına bağlı olarak ödemenin her faturalandırma döngüsünün sonunda otomatik olarak tekrarlanmasını sağlar.

<!-- Screenshot unavailable: Ödeme ayarları sayfasında Otomatik Yenilemeyi Zorla anahtarı -->

**Ödeme Olmadan Deneme Süresine İzin Ver:** Bu seçenek etkinleştirildiğinde, müşterinizin kayıt işlemi sırasında herhangi bir finansal bilgi eklemesine gerek kalmaz. Bu bilgi yalnızca deneme süresi dolduğunda istenecektir.

<!-- Screenshot unavailable: Ödeme Olmadan Deneme Süresine İzin Ver anahtarı -->

**Ödeme Onayında Fatura Gönder:** Bu ayar, ödeme yapıldıktan sonra fatura gönderip göndermeyeceğiniz konusunda size bir seçenek sunar. Kullanıcıların ödeme geçmişlerine kendi alt site panellerinden erişebileceğini unutmayın. Bu seçenek Manuel Gateway için geçerli değildir.

<!-- Screenshot unavailable: Ödeme Onayında Fatura Gönder anahtarı -->

**Fatura Numaralandırma Şeması:** Burada, ya bir ödeme referans kodu ya da sıralı bir numara şeması seçebilirsiniz. Faturalarınız için bir ödeme referans kodu kullanmayı tercih ederseniz, herhangi bir şey yapılandırmanıza gerek yoktur. Sıralı bir numara şeması kullanmayı tercih ederseniz, **bir sonraki fatura numarasını** (Bu numara, sistemde oluşturulacak bir sonraki fatura için fatura numarası olarak kullanılacaktır. Her yeni fatura oluşturulduğunda bir artar. Bunu değiştirip belirli bir değere sıfırlamak için kaydedebilirsiniz) ve **fatura numarası önekini** yapılandırmanız gerekecektir.

<!-- Screenshot unavailable: Ödeme Referans Kodu ve Sıralı Numara seçenekli Fatura numaralandırma şeması açılır menüsü -->

<!-- Screenshot unavailable: Sıralı Numara seçildiğinde gösterilen Bir sonraki fatura numarası ve fatura numarası öneki alanları -->

## Gateway'leri Nerede Bulabilirsiniz:

Ödeme ağ geçitlerini aynı sayfada ( **Ultimate Multisite > Ayarlar > Ödemeler** ) kurabilirsiniz. **Aktif ödeme ağ geçitleri** başlığının hemen altında şunları göreceksiniz: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ve _Manuel_.

![Stripe, Stripe Checkout, PayPal ve Manual'ı listeleyen Aktif Ödeme Ağ Geçitleri bölümü](/img/config/payments-active-gateways.png)

Her ödeme ağ geçidi için size kurulum adımlarını gösterecek ayrı bir makalemiz var, bu makalelere aşağıdaki bağlantılardan ulaşabilirsiniz.

Ödeme detaylarını görüntüleyebilir ve düzenleyebilirsiniz:

![Ödeme düzenleme arayüzü](/img/admin/payment-edit.png)

İşte ödeme düzenleme sayfasının tam görünümü:

![Ödeme düzenleme tam arayüzü](/img/admin/payment-edit-full.png)

İşte ödeme ağ geçitleri ayarlarının tam görünümü:

![Ödeme ağ geçitleri ayarları tam sayfası](/img/config/settings-payments-gateways-full.png)

**Stripe gateway'ini kurma**

**PayPal gateway'ini kurma**

**Manuel ödemeleri kurma**

Şimdi, ödeme ağ geçidi olarak _WooCommerce_ , _GoCardless_ veya _Payfast_ kullanmak isterseniz, **onların eklentilerini kurup yapılandırmanız** gerekecektir.

### WooCommerce eklentisini nasıl kurarsınız:

_Stripe_ ve _PayPal_'ın bazı ülkelerde bulunmadığını ve bu durumun Ultimate Multisite kullanıcılarının eklentimizi etkili bir şekilde kullanmasını kısıtladığını biliyoruz. Bu yüzden, çok popüler bir e-ticaret eklentisi olan _WooCommerce_'u entegre etmek için bir eklenti oluşturduk. Dünya çapındaki geliştiriciler, farklı ödeme ağ geçitlerini bu eklentiye entegre etmek için eklentiler geliştirdiler. Biz de bu durumu avantaja çevirerek Ultimate Multisite faturalandırma sistemiyle kullanabileceğiniz ödeme ağ geçitlerini genişlettik.

_**ÖNEMLİ:** Ultimate Multisite: WooCommerce Entegrasyonu, WooCommerce'un en azından ana sitenizde etkinleştirilmesini gerektirir._

Öncelikle, eklentiler sayfasına gidin. Buraya **Ultimate Multisite > Ayarlar** yolunu izleyerek ulaşabilirsiniz. **Eklentiler** tablosunu görmelisiniz. **Eklentilerimizi Kontrol Et** seçeneğine tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite Ayarlar kenar çubuğundaki Eklentiler tablosu ve Eklentilerimizi Kontrol Et bağlantısı -->

**Eklentilerimizi Kontrol Et**'e tıkladıktan sonra, eklentiler sayfasına yönlendirileceksiniz. Burada tüm Ultimate Multisite eklentilerini bulabilirsiniz. **Ultimate Multisite: WooCommerce Entegrasyonu** eklentisine tıklayın.

![Ultimate Multisite eklentilerini içeren eklentiler sayfası, WooCommerce Entegrasyonu dahil](/img/addons/addons-page.png)

Eklenti detaylarıyla birlikte bir pencere açılacaktır. Sadece **Şimdi Kur**'a tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Entegrasyonu eklenti detayları iletişim kutusu ve Şimdi Kur düğmesi -->

Kurulum tamamlandıktan sonra, eklentiler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir**'e tıklayın ve WooCommerce eklentisi ağınızda etkinleştirilmiş olacaktır.

<!-- Screenshot unavailable: WooCommerce Entegrasyonu eklentisi için eklentiler sayfasındaki Ağda Etkinleştir bağlantısı -->

Etkinleştirdikten sonra, web sitenizde hala WooCommerce eklentisi kurulu ve etkin değilse, bir hatırlatma alırsınız.

<!-- Screenshot unavailable: Yöneticiye WooCommerce eklentisini kurup etkinleştirmesi gerektiğini hatırlatan yönetici bildirimi -->

WooCommerce Entegrasyonu eklentisi hakkında daha fazla bilgi edinmek için **buraya tıklayın**.

### GoCardless eklentisini nasıl kurarsınız:

_GoCardless_ eklentisini kurma adımları, _WooCommerce_ eklentisini kurma adımlarıyla neredeyse aynıdır. Lütfen eklentiler sayfasına gidin ve **Ultimate Multisite: GoCardless Gateway** eklentisini seçin.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway eklentisi vurgulanmış eklentiler sayfası -->

Eklenti penceresi açılacaktır. **Şimdi Kur**'a tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway eklenti detayları iletişim kutusu ve Şimdi Kur düğmesi -->

Kurulum tamamlandıktan sonra, eklentiler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir**'e tıklayın ve _GoCardless_ eklentisi ağınızda etkinleştirilmiş olacaktır.

<!-- Screenshot unavailable: GoCardless Gateway eklentisi için eklentiler sayfasındaki Ağda Etkinleştir bağlantısı -->

_GoCardless_ ağ geçidi ile nasıl başlayacağını öğrenmek için **bu makaleyi okuyun**.

### Payfast eklentisini nasıl kurarsınız:

Eklentiler sayfasına gidin ve **Ultimate Multisite: Payfast Gateway** eklentisini seçin.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway eklentisi vurgulanmış eklentiler sayfası -->

Eklenti penceresi açılacaktır. **Şimdi Kur**'a tıklayın.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway eklenti detayları iletişim kutusu ve Şimdi Kur düğmesi -->

Kurulum tamamlandıktan sonra, eklentiler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir**'e tıklayın ve _Payfast_ eklentisi ağınızda etkinleştirilmiş olacaktır.

<!-- Screenshot unavailable: Payfast Gateway eklentisi için eklentiler sayfasındaki Ağda Etkinleştir bağlantısı -->
