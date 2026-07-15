---
title: Kayıt Akışı
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Kayıt Akışı (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümünü ifade eder.**_

Kullanıcılar ağınıza farklı yollarla kayıt olabilir. Kayıt formunuzu veya önceden seçilmiş bir plana yönlendiren paylaşılabilir bir bağlantıyı kullanabilirler. Burada müşterilerinizin mevcut yolları kullanarak ağınıza nasıl kayıt olabileceğini ve ağınıza kayıt olduktan sonra neler olduğunu göstereceğiz.

## Kayıt Formunu Kullanma: {#using-the-registration-form}

Bu standart kayıt sürecidir. Bir **checkout formu** içeren bir kayıt sayfası oluşturursunuz ve müşterileriniz ağınıza kayıt olmak ve bir plana abone olmak için buraya gider. İsterseniz her biri farklı bir kayıt formuna sahip birden fazla kayıt sayfanız olabilir.

Kayıt için varsayılan sayfa [_**yourdomain.com/register**_](http://yourdomain.com/register) adresidir, ancak bunu istediğiniz zaman **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** bölümünden değiştirebilirsiniz.

Bir kullanıcı kayıt sayfanıza ulaştıktan sonra (genellikle bir **Sign in** veya **Buy now** düğmesine tıklayarak), kayıt formunuzu orada görecektir.

![Kayıt sayfasında görüntülenen kayıt formu](/img/frontend/registration-form.png)

Checkout formunun frontend’de göründüğü hâliyle bir örnek:

![Frontend checkout kayıt formu](/img/config/checkout-frontend-registration.png)

Tek yapmaları gereken tüm zorunlu alanları - e-posta, kullanıcı adı, parola vb... - doldurmak ve plan için ödeme yapmak ya da ücretsiz bir plana veya ödeme bilgisi olmadan deneme süresi olan ücretli bir plana kayıt oluyorlarsa e-posta adreslerini onaylamaktır.

"Teşekkürler" sayfasında, e-posta adreslerini onaylamaları gerekip gerekmediğini veya web sitelerinin zaten etkinleştirildiğini ve kullanmaya başlayabileceklerini belirten bir mesaj göreceklerdir.

![Kayıttan sonra Teşekkürler sayfası](/img/frontend/registration-thank-you.png)

E-posta adresi onayı gerekiyorsa, e-posta gelen kutularına gidip doğrulama bağlantısına tıklamaları gerekir. E-posta adresleri doğrulanmazsa web siteleri etkinleştirilmeyecektir.

Ücretli bir plana kayıt oldularsa veya ağınızda e-posta doğrulaması zorunlu değilse, web siteleri checkout’tan hemen sonra etkinleştirilecek ve dashboard’larına giriş yapmak için bir bağlantı gösterilecektir.

![Dashboard’a giriş bağlantısıyla etkinleştirilmiş site](/img/frontend/site-activated.png)

## Paylaşılabilir Bağlantı Kullanma: {#using-a-shareable-link}

Paylaşılabilir bir bağlantı kullanarak kayıt olma süreci temelde kayıt formuyla aynıdır; tek fark, paylaşılabilir bir bağlantı kullanıldığında müşterilerinizin checkout formunda önceden seçilmiş bir ürün veya web sitesi şablonuna sahip olabilmesidir (URL parametreleri aracılığıyla ürünleri ve şablonları önceden seçme bölümüne bakın) veya belki bir kupon kodu eklenmiş olabilir (URL Parametrelerini Kullanma bölümüne bakın).

Kayıt süreci aynı olacaktır: adlarını, kullanıcı adlarını, e-posta adreslerini, web sitesi adını ve başlığını vb... doldurmaları gerekir; ancak plan veya site şablonu onlar için zaten önceden seçilmiş olacaktır.

### Manuel Ödemeler Kullanarak Kayıt Olma: {#registering-using-manual-payments}

PayPal, Stripe veya Ultimate Multisite tarafından ya da eklenti entegrasyonları tarafından sunulan herhangi başka bir ödeme ağ geçidini kullanmak istemiyorsanız, müşterileriniz için manuel ödemeleri kullanabilirsiniz. Bu şekilde, ağınıza kayıt olduktan sonra tercih ettiğiniz ödeme işlemcisinde ödeme yapmaları için onlara bir fatura oluşturabilirsiniz.

Kayıt süreci yukarıdakiyle tamamen aynı olacaktır, ancak kayıt sayfasında müşterileriniz ödemeyi tamamlamak için ek talimatlar içeren bir e-posta alacaklarını belirten bir mesaj göreceklerdir.

![Kayıt sırasında manuel ödeme mesajı](/img/frontend/registration-manual-notice.png)

Ve kayıt tamamlandıktan sonra, ayarladığınız ödeme talimatlarını göreceklerdir (ve bunu e-postalarında da alacaklardır).

![Kayıttan sonra gösterilen ödeme talimatları](/img/frontend/registration-payment-instructions.png)

Ödeme talimatları, **Manual** ödeme seçeneğini açtıktan sonra **Ultimate Multisite > Settings > Payments** bölümünden değiştirilebilir:

![Ödeme talimatları alanıyla manuel ödeme açma/kapama seçeneği](/img/config/manual-gateway-settings.png)

Müşterileriniz manuel ödemeyi tamamlayıp size onayı gönderdikten sonra, müşteri üyeliğini ve web sitesini etkinleştirmek için **ödemeyi manuel olarak onaylamanız** gerekir.

Bunu yapmak için **Ultimate Multisite > Payments** bölümüne gidin ve müşteri ödemesini bulun. Hâlâ **Pending** durumunu göstermelidir.

![Bekleyen manuel ödemeyi içeren ödemeler listesi](/img/admin/payments-list.png)

Ödeme numarasına tıklayın; durumunu **Completed** olarak değiştirebileceksiniz.

![Ödeme ayrıntıları sayfası](/img/admin/payment-edit.png)

![Ödeme durumunu Completed olarak değiştirme](/img/admin/payment-status-completed.png)

Durumunu **Completed** olarak değiştirdikten sonra, bir **Activate membership** mesajı görmelisiniz. Bu müşteriyle ilişkili üyeliği ve web sitesini etkinleştirmek için bu seçeneği **açık** konuma getirin. Ardından **Save Payment** düğmesine tıklayın.

![Activate membership açma/kapama seçeneği ve Save Payment düğmesi](/img/admin/payment-activate-membership.png)

Müşteriniz artık dashboard’a ve abone olduğu tüm özelliklere erişebilmelidir.
