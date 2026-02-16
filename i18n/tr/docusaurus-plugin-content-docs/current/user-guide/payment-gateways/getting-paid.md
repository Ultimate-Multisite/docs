---
title: Ödeme Alma
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Ödeme Alma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne aittir.**_

Ultimate Multisite, yerleşik bir üyelik ve faturalandırma sistemine sahiptir. Faturalandırma sistemimizin çalışabilmesi için e-ticarette en yaygın kullanılan ödeme geçitlerini entegre ettik. Ultimate Multisite'daki varsayılan ödeme geçitleri _Stripe_, _PayPal_ ve Manuel Ödeme'dir. Ayrıca ilgili eklentileri kurarak _WooCommerce_, _GoCardless_ ve _Payfast_ ile de ödeme alabilirsiniz.

## Temel Ayarlar

Bu ödeme geçitlerinden herhangi birini Ultimate Multisite ödeme ayarlarından yapılandırabilirsiniz. **Ultimate Multisite menüsü > Ayarlar > Ödemeler** yolunu izleyerek bu sayfaya ulaşabilirsiniz.

![Ultimate Multisite'da ödeme ayarları sayfası](/img/config/settings-payment-gateways.png)

Ödeme geçidinizi kurmadan önce, yapılandırabileceğiniz temel ödeme ayarlarına göz atın:

**Otomatik yenilemeyi zorunlu kıl:** Bu seçenek, kullanıcının seçtiği faturalandırma sıklığına bağlı olarak her faturalandırma döneminin sonunda ödemenin otomatik olarak tekrarlanmasını sağlar.

![Otomatik yenilemeyi zorunlu kıl ayarı](/img/config/settings-payment-gateways.png)

**Ödeme yöntemi olmadan deneme süresine izin ver:** Bu seçenek etkinleştirildiğinde, müşterinizin kayıt işlemi sırasında herhangi bir finansal bilgi eklemesi gerekmez. Bu bilgi yalnızca deneme süresi sona erdiğinde istenir.

![Ödeme yöntemi olmadan deneme süresine izin ver ayarı](/img/config/settings-payment-gateways.png)

**Ödeme onayında fatura gönder:** Bu seçenek, ödeme sonrasında fatura gönderilip gönderilmeyeceğini belirlemenizi sağlar. Kullanıcıların alt site panellerinden ödeme geçmişlerine erişebildiklerini unutmayın. Bu seçenek Manuel Geçit için geçerli değildir.

![Ödeme onayında fatura gönder ayarı](/img/config/settings-payment-gateways.png)

**Fatura numaralandırma şeması:** Burada ödeme referans kodu veya sıralı numara şeması seçebilirsiniz. Faturalarınız için ödeme referans kodu kullanmayı tercih ederseniz, herhangi bir yapılandırma yapmanız gerekmez. Sıralı numara şeması kullanmayı tercih ederseniz, **sonraki fatura numarasını** (Bu numara, sistemde oluşturulacak bir sonraki fatura için fatura numarası olarak kullanılır. Her yeni fatura oluşturulduğunda bir artırılır. Fatura sıralı numarasını belirli bir değere sıfırlamak için değiştirebilir ve kaydedebilirsiniz) ve **fatura numarası ön ekini** yapılandırmanız gerekir.

![Fatura numaralandırma şeması seçimi](/img/config/settings-payment-gateways.png)

![Sıralı fatura numarası ve ön ek ayarları](/img/config/settings-payment-gateways.png)

## Ödeme geçitlerini nerede bulabilirsiniz:

Ödeme geçitlerini aynı sayfada (**Ultimate Multisite > Ayarlar > Ödemeler**) kurabilirsiniz. **Aktif ödeme geçitleri** bölümünün hemen altında şunları göreceksiniz: _Stripe_, _Stripe Checkout_, _PayPal_ ve _Manuel_.

![Aktif ödeme geçitleri listesi](/img/config/settings-payment-gateways.png)

Her ödeme geçidi için kurulum adımlarında size rehberlik edecek ayrı bir makalemiz var. Bunlara aşağıdaki bağlantılardan ulaşabilirsiniz.

**Stripe geçidini kurma**

**PayPal geçidini kurma**

**Manuel ödemeleri kurma**

Şimdi, ödeme geçidiniz olarak _WooCommerce_, _GoCardless_ veya _Payfast_ kullanmak istiyorsanız, **ilgili eklentileri kurmanız ve yapılandırmanız gerekir**.

### WooCommerce eklentisi nasıl kurulur:

_Stripe_ ve _PayPal_'ın bazı ülkelerde kullanılamadığının ve bunun Ultimate Multisite kullanıcılarının eklentimizi etkin bir şekilde kullanmasını sınırladığının veya engellediğinin farkındayız. Bu nedenle çok popüler bir e-ticaret eklentisi olan _WooCommerce_'i entegre etmek için bir eklenti oluşturduk. Dünya genelindeki geliştiriciler, farklı ödeme geçitlerini WooCommerce'e entegre etmek için eklentiler oluşturdu. Ultimate Multisite faturalandırma sistemiyle kullanabileceğiniz ödeme geçitlerini genişletmek için bundan faydalandık.

_**ÖNEMLİ:** Ultimate Multisite: WooCommerce Entegrasyonu, WooCommerce'in en azından ana sitenizde etkinleştirilmiş olmasını gerektirir._

İlk olarak eklentiler sayfasına gidin. **Ultimate Multisite > Ayarlar** yolunu izleyerek bulabilirsiniz. **Eklentiler** tablosunu görmelisiniz. **Eklentilerimize Göz Atın** seçeneğine tıklayın.

![Eklentiler bölümü olan ayarlar sayfası](/img/config/settings-general.png)

**Eklentilerimize Göz Atın** seçeneğine tıkladıktan sonra eklentiler sayfasına yönlendirileceksiniz. Burada tüm Ultimate Multisite eklentilerini bulabilirsiniz. **Ultimate Multisite: WooCommerce Integration** eklentisine tıklayın.

![Mevcut eklentileri listeleyen eklentiler sayfası](/img/config/settings-general.png)

Eklenti detaylarını içeren bir pencere açılacaktır. **Şimdi Kur** seçeneğine tıklayın.

![WooCommerce eklentisi kurulum penceresi](/img/config/settings-general.png)

Kurulum tamamlandıktan sonra eklentiler sayfasına yönlendirileceksiniz. Burada **Ağ Genelinde Etkinleştir** seçeneğine tıklayın ve WooCommerce eklentisi ağınızda etkinleştirilecektir.

![WooCommerce eklentisini Ağ Genelinde Etkinleştir](/img/config/settings-general.png)

Etkinleştirdikten sonra, web sitenizde WooCommerce eklentisi henüz kurulu ve etkin değilse bir hatırlatma alacaksınız.

![WooCommerce etkinleştirme hatırlatma bildirimi](/img/config/settings-general.png)

WooCommerce Entegrasyonu eklentisi hakkında daha fazla bilgi için **buraya tıklayın**.

### GoCardless eklentisi nasıl kurulur:

_GoCardless_ eklentisini kurma adımları _WooCommerce_ eklentisiyle hemen hemen aynıdır. Eklentiler sayfasına gidin ve **Ultimate Multisite: GoCardless Gateway** eklentisini seçin.

![Mevcut eklentileri listeleyen eklentiler sayfası](/img/config/settings-general.png)

Eklenti penceresi açılacaktır. **Şimdi Kur** seçeneğine tıklayın.

![GoCardless eklentisi kurulum penceresi](/img/config/settings-general.png)

Kurulum tamamlandıktan sonra eklentiler sayfasına yönlendirileceksiniz. Burada **Ağ Genelinde Etkinleştir** seçeneğine tıklayın ve _GoCardless_ eklentisi ağınızda etkinleştirilecektir.

![GoCardless eklentisini Ağ Genelinde Etkinleştir](/img/config/settings-general.png)

_GoCardless_ geçidini kullanmaya nasıl başlayacağınızı öğrenmek için **bu makaleyi okuyun**.

### Payfast eklentisi nasıl kurulur:

Eklentiler sayfasına gidin ve **Ultimate Multisite: Payfast Gateway** eklentisini seçin.

![Mevcut eklentileri listeleyen eklentiler sayfası](/img/config/settings-general.png)

Eklenti penceresi açılacaktır. **Şimdi Kur** seçeneğine tıklayın.

![Payfast eklentisi kurulum penceresi](/img/config/settings-general.png)

Kurulum tamamlandıktan sonra eklentiler sayfasına yönlendirileceksiniz. Burada **Ağ Genelinde Etkinleştir** seçeneğine tıklayın ve _Payfast_ eklentisi ağınızda etkinleştirilecektir.

![Payfast eklentisini Ağ Genelinde Etkinleştir](/img/config/settings-general.png)
