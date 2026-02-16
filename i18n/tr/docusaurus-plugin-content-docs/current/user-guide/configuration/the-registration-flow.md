---
title: Kayıt Akışı
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Kayıt Akışı (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne aittir.**_

Kullanıcılar ağınıza farklı yollarla kayıt olabilir. Kayıt formunuzu veya önceden seçilmiş bir plana ait paylaşılabilir bir bağlantıyı kullanabilirler. Burada müşterilerinizin mevcut yolları kullanarak ağınıza nasıl kayıt olabileceğini ve kayıt olduktan sonra neler olacağını göstereceğiz.

## Kayıt Formunu Kullanma:

Bu standart kayıt sürecidir. Bir **checkout formu** içeren bir kayıt sayfası oluşturursunuz ve müşterileriniz ağınıza kayıt olmak ve bir plana abone olmak için buraya gelir. İsterseniz her biri farklı bir kayıt formu içeren birden fazla kayıt sayfanız olabilir.

Kayıt için varsayılan sayfa [_**siteadiniz.com/register**_](http://yourdomain.com/register) şeklindedir, ancak bunu istediğiniz zaman **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** bölümünden değiştirebilirsiniz.

Kullanıcı kayıt sayfanıza ulaştıktan sonra (genellikle bir **Giriş Yap** veya **Şimdi Satın Al** butonuna tıklayarak), kayıt formunuzu görecektir.

![Kayıt sayfasında görüntülenen kayıt formu](/img/config/checkout-forms-list.png)

Tek yapmaları gereken zorunlu alanları doldurmaktır - e-posta, kullanıcı adı, şifre vb. - ve plan için ödeme yapmak veya ücretsiz bir plana ya da ödeme bilgisi gerektirmeyen deneme süreli ücretli bir plana kayıt oluyorlarsa e-posta adreslerini onaylamaktır.

"Teşekkürler" sayfasında, e-posta adreslerini onaylamaları gerekip gerekmediğini veya web sitelerinin zaten aktif olduğunu ve kullanmaya başlayabileceklerini belirten bir mesaj göreceklerdir.

![Kayıt sonrası Teşekkürler sayfası](/img/config/checkout-form-editor.png)

E-posta adresi onayı gerekiyorsa, e-posta gelen kutularına gidip doğrulama bağlantısına tıklamaları gerekecektir. E-posta adresleri doğrulanmazsa web siteleri aktif olmayacaktır.

Ücretli bir plana kayıt olduysalar veya ağınızda e-posta doğrulaması zorunlu değilse, web siteleri ödeme işleminden hemen sonra aktif olacak ve dashboard'larına giriş yapabilecekleri bir bağlantı gösterilecektir.

![Site aktif edildi ve dashboard'a giriş bağlantısı](/img/config/checkout-form-editor.png)

## Paylaşılabilir Bağlantı Kullanma:

Paylaşılabilir bağlantı kullanarak kayıt olma süreci, kayıt formuyla temelde aynıdır. Tek fark, paylaşılabilir bağlantı kullanıldığında müşterilerinizin checkout formunda önceden seçilmiş bir ürün veya web sitesi şablonuna sahip olabilmesidir (URL parametreleri ile ürün ve şablon ön seçimi bölümüne bakın) veya bir kupon kodu eklenmiş olabilir (URL Parametrelerini Kullanma bölümüne bakın).

Kayıt süreci aynı olacaktır: adlarını, kullanıcı adlarını, e-posta adreslerini, web sitesi adı ve başlığını vb. doldurmaları gerekecektir, ancak plan veya site şablonu onlar için önceden seçilmiş olacaktır.

### Manuel Ödeme ile Kayıt:

PayPal, Stripe veya Ultimate Multisite ya da eklenti entegrasyonları tarafından sunulan diğer ödeme geçitlerini kullanmak istemiyorsanız, müşterileriniz için manuel ödeme kullanabilirsiniz. Bu şekilde, ağınıza kayıt olduktan sonra tercih ettiğiniz ödeme işlemcisinde ödemeleri için bir fatura oluşturabilirsiniz.

Kayıt süreci yukarıdakiyle tamamen aynı olacaktır, ancak kayıt sayfasında müşterileriniz ödemeyi tamamlamak için ek talimatlar içeren bir e-posta alacaklarını belirten bir mesaj görecektir.

![Kayıt sırasında manuel ödeme mesajı](/img/config/settings-payment-gateways.png)

Ve kayıt tamamlandıktan sonra, belirlediğiniz ödeme talimatlarını göreceklerdir (ayrıca e-postalarına da gönderilecektir).

![Kayıt sonrası gösterilen ödeme talimatları](/img/config/settings-payment-gateways.png)

Ödeme talimatları, **Manual** ödeme seçeneğini açtıktan sonra **Ultimate Multisite > Settings > Payments** bölümünden değiştirilebilir:

![Ödeme talimatları alanı ile manuel ödeme açma/kapama düğmesi](/img/config/settings-payment-gateways.png)

Müşterileriniz manuel ödemeyi tamamlayıp size onayı gönderdikten sonra, müşteri üyeliğini ve web sitesini aktif etmek için **ödemeyi manuel olarak onaylamanız** gerekir.

Bunu yapmak için **Ultimate Multisite > Payments** bölümüne gidin ve müşteri ödemesini bulun. Hala **Pending** durumunda görünüyor olmalıdır.

![Bekleyen manuel ödeme ile ödemeler listesi](/img/admin/payments-list.png)

Ödeme numarasına tıklayın ve durumunu **Completed** olarak değiştirebileceksiniz.

![Ödeme detayları sayfası](/img/admin/payments-list.png)

![Ödeme durumunu Completed olarak değiştirme](/img/admin/payments-list.png)

Durumu **Completed** olarak değiştirdikten sonra, bir **Activate membership** mesajı görmelisiniz. Bu müşteriyle ilişkili üyeliği ve web sitesini aktif etmek için bu seçeneği **açın**. Ardından **Save Payment** butonuna tıklayın.

![Üyelik aktivasyonu açma/kapama düğmesi ve Save Payment butonu](/img/admin/payments-list.png)

Müşteriniz artık dashboard'a ve abone olduğu tüm özelliklere erişebilmelidir.
