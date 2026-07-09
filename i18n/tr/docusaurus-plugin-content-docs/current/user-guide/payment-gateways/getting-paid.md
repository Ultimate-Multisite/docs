---
title: Ödeme Alma
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ödeme Alma (v2) {#getting-paid-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x için geçerlidir.**_

Ultimate Multisite yerleşik bir üyelik ve faturalandırma sistemine sahiptir. Faturalandırma sistemimizin çalışması için e-ticarette kullanılan en yaygın ödeme ağ geçitlerini entegre ettik. Ultimate Multisite içindeki varsayılan ödeme ağ geçitleri _Stripe_ , _PayPal_ ve Manuel Ödeme’dir. Ayrıca ilgili add-on’larını kurarak ödeme almak için _WooCommerce_ , _GoCardless_ ve _Payfast_ de kullanabilirsiniz.

## Temel Ayarlar {#basic-settings}

Bu ödeme ağ geçitlerinden herhangi birini Ultimate Multisite ödeme ayarları altında yapılandırabilirsiniz. Bunu **Ultimate Multisite menüsü > Settings > Payments** bölümüne giderek bulabilirsiniz.

![Ultimate Multisite içinde Payments panelini gösteren Payments ayarları sayfası](/img/config/payments-settings-page.png)

Ödeme ağ geçidinizi kurmadan önce, lütfen yapılandırabileceğiniz temel ödeme ayarlarına göz atın:

**Otomatik yenilemeyi zorla** **:** Bu, kullanıcının seçtiği faturalandırma sıklığına bağlı olarak ödemenin her faturalandırma döngüsünün sonunda otomatik olarak tekrarlanmasını sağlar.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0, otomatik yenileme etkinleştirilmiş yinelenen bir üyeliği kaydetmeden önce etkin gateway’in yeniden kullanılabilir bir yenileme kimlik bilgisine sahip olup olmadığını kontrol eder. Yenileme kimlik bilgisi bir gateway aboneliği, faturalandırma anlaşması, kaydedilmiş vault token veya eşdeğer yeniden kullanılabilir ödeme yöntemi olabilir. Gateway kullanılabilir bir kimlik bilgisi olmadığını bildirirse, Ultimate Multisite üyeliği kaydeder ancak otomatik yenilemeyi kapatır ve eksik kimlik bilgisi durumunu kaydeder; böylece bir yönetici veya destek akışı, yenileme tarihinden önce müşteriden ödemeyi yeniden yetkilendirmesini isteyebilir.

Bu, gateway yalnızca tek seferlik ödemeleri tahsil edebildiğinde bir üyeliğin otomatik yenilenecekmiş gibi görünmesini önler. Gateway add-on’ları, özellikle gateway hem tek seferlik tahsilat hem de vault/subscription ödeme modlarını desteklediğinde, yinelenen checkout’ların yeniden kullanılabilir bir kimlik bilgisi sakladığını doğrulamalıdır.

**Ödeme olmadan denemelere izin ver** **yöntemi:** Bu seçenek etkinleştirildiğinde müşteriniz kayıt sürecinde herhangi bir finansal bilgi eklemek zorunda kalmaz. Bu yalnızca deneme süresi sona erdiğinde gerekli olur.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ödeme onayında fatura gönder:** Bu, ödeme sonrasında fatura gönderilip gönderilmeyeceğini seçme olanağı sağlar. Kullanıcıların ödeme geçmişlerine alt site dashboard’ları altında erişebileceğini unutmayın. Bu seçenek Manual Gateway için geçerli değildir.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fatura numaralandırma şeması:** Burada, bir ödeme referans kodu veya sıralı numara şeması seçebilirsiniz. Faturalarınız için ödeme referans kodu kullanmayı seçerseniz herhangi bir şeyi yapılandırmanız gerekmez. Sıralı numara şeması kullanmayı seçerseniz **sonraki fatura numarası**nı (Bu numara, sistemde oluşturulan bir sonraki faturanın fatura numarası olarak kullanılacaktır. Her yeni fatura oluşturulduğunda bir artırılır. Fatura sıralı numarasını belirli bir değere sıfırlamak için bunu değiştirip kaydedebilirsiniz) ve **fatura numarası öneki**ni yapılandırmanız gerekir.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ağ geçitleri nerede bulunur: {#where-to-find-the-gateways}

Ödeme ağ geçitlerini aynı sayfada kurabilirsiniz ( **Ultimate Multisite > Settings > Payments**). **etkin ödeme ağ geçitleri** bölümünün hemen altında şunları görebilirsiniz: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ve _Manual_.

![Stripe, Stripe Checkout, PayPal ve Manual listeleyen Active Payment Gateways bölümü](/img/config/payments-active-gateways.png)

Her ödeme ağ geçidi için, kurulum adımlarında size rehberlik edecek özel bir makalemiz var; bunları aşağıdaki bağlantılarda bulabilirsiniz.

Ödeme ayrıntılarını görüntüleyebilir ve düzenleyebilirsiniz:

![Ödeme düzenleme arayüzü](/img/admin/payment-edit.png)

Ödeme düzenleme sayfasının tam görünümü burada:

![Ödeme düzenleme tam arayüzü](/img/admin/payment-edit-full.png)

Ödeme ağ geçidi ayarlarının tam görünümü de burada:

![Ödeme ağ geçidi ayarları tam sayfası](/img/config/settings-payments-gateways-full.png)

**Stripe gateway kurulumu**

**PayPal gateway kurulumu**** **

**Manuel ödemelerin kurulumu**

Şimdi, ödeme ağ geçidiniz olarak _WooCommerce_ , _GoCardless_ veya _Payfast_ kullanmak istiyorsanız, **bunların add-on’larını kurmanız ve yapılandırmanız** gerekir.

### WooCommerce add-on nasıl kurulur: {#how-to-install-the-woocommerce-add-on}

_Stripe_ ve _PayPal_ bazı ülkelerde mevcut olmadığını, bunun da Ultimate Multisite kullanıcılarının plugin’imizi etkili şekilde kullanmasını sınırladığını veya engellediğini anlıyoruz. Bu yüzden çok popüler bir e-ticaret plugin’i olan _WooCommerce,_ ile entegrasyon için bir add-on oluşturduk. Dünyanın dört bir yanındaki geliştiriciler, farklı ödeme ağ geçitlerini buna entegre etmek için add-on’lar oluşturdu. Ultimate Multisite faturalandırma sistemiyle kullanabileceğiniz ödeme ağ geçitlerini genişletmek için bundan yararlandık.

_**ÖNEMLİ:** Ultimate Multisite: WooCommerce Integration, WooCommerce’in en azından ana sitenizde etkinleştirilmiş olmasını gerektirir._

Öncelikle lütfen add-on’lar sayfasına gidin. Bunu **Ultimate Multisite > Settings** bölümüne giderek bulabilirsiniz. **Add-ons** tablosunu görmelisiniz. **Add-on’larımızı kontrol edin** üzerine tıklayın.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Add-on’larımızı kontrol edin** üzerine tıkladıktan sonra add-on’lar sayfasına yönlendirileceksiniz. Burada tüm Ultimate Multisite add-on’larını bulabilirsiniz. **Ultimate Multisite: WooCommerce Integration** add-on’una tıklayın.

![WooCommerce Integration dahil Ultimate Multisite add-on’larını listeleyen add-on’lar sayfası](/img/addons/addons-page.png)

Eklenti ayrıntılarını içeren bir pencere açılacak. Sadece **Şimdi Yükle** üzerine tıklayın.

<!-- Ekran görüntüsü mevcut değil: Şimdi Yükle düğmesini içeren Ultimate Multisite WooCommerce Integration eklenti ayrıntıları iletişim kutusu -->

Kurulum tamamlandıktan sonra pluginler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir** üzerine tıklayın; WooCommerce eklentisi ağınızda etkinleştirilecektir.

<!-- Ekran görüntüsü mevcut değil: WooCommerce Integration eklentisi için Ağda Etkinleştir bağlantısını içeren pluginler sayfası -->

Etkinleştirdikten sonra, web sitenizde WooCommerce plugin hâlâ kurulu ve etkin değilse bir hatırlatma alırsınız.

<!-- Ekran görüntüsü mevcut değil: Yöneticiye WooCommerce pluginini kurup etkinleştirmesini hatırlatan yönetici bildirimi -->

WooCommerce Integration eklentisi hakkında daha fazla okumak için **buraya tıklayın**.

### GoCardless eklentisi nasıl kurulur: {#how-to-install-the-gocardless-add-on}

_GoCardless_ eklentisini kurma adımları, _WooCommerce_ eklentisiyle büyük ölçüde aynıdır. Lütfen eklentiler sayfasına gidin ve **Ultimate Multisite: GoCardless Gateway** eklentisini seçin.

<!-- Ekran görüntüsü mevcut değil: Ultimate Multisite GoCardless Gateway eklentisinin vurgulandığı eklentiler sayfası -->

Eklenti penceresi açılacak. **Şimdi Yükle** üzerine tıklayın.

<!-- Ekran görüntüsü mevcut değil: Şimdi Yükle düğmesini içeren Ultimate Multisite GoCardless Gateway eklenti ayrıntıları iletişim kutusu -->

Kurulum tamamlandıktan sonra pluginler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir** üzerine tıklayın; _GoCardless_ eklentisi ağınızda etkinleştirilecektir.

<!-- Ekran görüntüsü mevcut değil: GoCardless Gateway eklentisi için Ağda Etkinleştir bağlantısını içeren pluginler sayfası -->

_GoCardless_ gateway ile nasıl başlayacağınızı öğrenmek için **bu makaleyi okuyun**.

### Payfast eklentisi nasıl kurulur: {#how-to-install-the-payfast-add-on}

Eklentiler sayfasına gidin ve **Ultimate Multisite: Payfast Gateway** eklentisini seçin.

<!-- Ekran görüntüsü mevcut değil: Ultimate Multisite Payfast Gateway eklentisinin vurgulandığı eklentiler sayfası -->

Eklenti penceresi açılacak. **Şimdi Yükle** üzerine tıklayın.

<!-- Ekran görüntüsü mevcut değil: Şimdi Yükle düğmesini içeren Ultimate Multisite Payfast Gateway eklenti ayrıntıları iletişim kutusu -->

Kurulum tamamlandıktan sonra pluginler sayfasına yönlendirileceksiniz. Burada sadece **Ağda Etkinleştir** üzerine tıklayın; _Payfast_ eklentisi ağınızda etkinleştirilecektir.

<!-- Ekran görüntüsü mevcut değil: Payfast Gateway eklentisi için Ağda Etkinleştir bağlantısını içeren pluginler sayfası -->
