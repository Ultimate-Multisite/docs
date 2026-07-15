---
title: API Uç Noktasını Kaydet
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API endpoint

Bu eğitimde, Ultimate Multisite /register API endpoint'ini kullanarak ağınızdaki yeni bir müşteri için tüm kayıt sürecini nasıl oluşturacağınızı ve bunu Zapier ile nasıl yapacağınızı öğreneceksiniz.

Endpoint, POST yöntemini kullanır ve şu URL üzerinden çağrılır: **https://yoursite.com/wp-json/wu/v2/register**. Bu çağrıda, ağınız içinde 4 işlem gerçekleştirilecektir:

*   Yeni bir WordPress kullanıcısı oluşturulacak veya kullanıcı ID'si üzerinden tanımlanacaktır.
*   Ultimate Multisite'ta yeni bir Müşteri oluşturulacak veya müşteri ID'si üzerinden tanımlanacaktır.
*   WordPress ağı üzerinde yeni bir site oluşturulacaktır.
*   Son olarak, Ultimate Multisite'ta yeni bir Üyelik (Membership) oluşturulacaktır.

Bu süreç için API kimlik bilgilerine ihtiyacınız olacak. Bunları almak için ağ yöneticisi panelinize gidin, **Ultimate Multisite > Ayarlar** > **API & Webhooks** yolunu izleyin ve API Ayarları bölümüne bakın.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

İşte API ayarları sayfasının tam görünümü:

![API settings full page](/img/config/settings-api-full.png)

**API'yi Etkinleştir** seçeneğini seçin ve API kimlik bilgilerinizi alın.

Şimdi, endpoint'i inceleyelim ve ardından Zapier'da bir kayıt eylemi oluşturalım.

## Endpoint gövde parametreleri {#endpoint-body-parameters}

Endpoint'e göndermemiz gereken minimum bilgiye genel bir bakış atalım. Bu makalenin sonunda tüm çağrıyı bulacaksınız.

### Customer (Müşteri) {#customer}

Bu bilgi, Kullanıcı'yı ve Ultimate Multisite Müşterisi'ni oluşturma süreci için gereklidir:

"customer_id" : integer

Ağınızda oluşturulmuş müşteri ID'sini göndermeniz mümkündür. Gönderilmezse, aşağıdaki bilgiler yeni bir müşteri ve yeni bir WordPress kullanıcısı oluşturmak için kullanılacaktır. Kullanıcı ID'si de aynı şekilde gönderilebilir.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership (Üyelik)** {#membership}

Bu nesne içinde ihtiyacımız olan tek bilgi Üyelik Durumu'dur (Membership Status).

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" seçeneklerinden biri },

### **Products (Ürünler)** {#products}

Ürünler, ağınızdaki 1 veya daha fazla ürün ID'sinden oluşan bir dizi (array) ile verilir. Dikkat edin, bu endpoint ürün oluşturmaz. Ürün oluşturma endpoint'ini daha iyi anlamak için Ultimate Multisite'ın dokümantasyonunu kontrol edin.

**"products" : [1,2],**

### Payment (Ödeme) {#payment}

Membership'da olduğu gibi, burada da sadece duruma ihtiyacımız var.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" seçeneklerinden biri },**

### Site (Site) {#site}

Ve gövdeyi tamamlamak için, Site nesnesi içinde hem sitenin URL'sine hem de Başlığı'na ihtiyacımız var.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint'inin dönüşü, yeni oluşturulan üyelik bilgilerini içeren bir dizi olacaktır.

## Zapier'da bir eylem oluşturma {#creating-an-action-in-zapier}

Bu yeni ve daha sağlam hesap oluşturma endpoint'inin tanıtılmasıyla, Zapier'da da yeni bir eyleme (action) erişeceksiniz.

Zapier'ın yeni sürümünün sunduğu her şeyi kullanıp keyif aldığınızı biliyor musunuz? Daha fazla bilgi için buraya bakın. (link?)

### Bir eylem oluşturma {#creating-an-action}

Kayıt endpoint'ini Zapier ile nasıl kullanacağınızı daha iyi göstermek için, Google Forms ile bir entegrasyon oluşturalım. Bu form her doldurulup bilgi formun cevap sayfasında kaydedildiğinde, Ultimate Multisite ağı içinde yeni bir üyelik oluşturulacaktır.

Google Forms'ta, ağda yeni bir üyelik oluşturmak için gerekli minimum alanlara sahip bir form yapın.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Şimdi Zapier'da yeni bir Zap oluşturun ve Google Forms'daki oluşturulan formu, verilerin kaydedildiği e-tabloya bağlayın.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Tamam! Google Forms formu Zapier ile bağlandı ve ağ ile entegre olmaya hazır. Şimdi, Google Forms'un her doldurulduğunda tetiklediği Trigger'dan kaynaklanacak Eylem'e (Action) geçelim.

Yeni Ultimate Multisite uygulamasını bulun ve seçin. Bu tür bir Zap için **Register** seçeneğini seçin.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Bu ilk adımdan sonra, bu Zap ile bağlanacak hesabı seçin.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Bu, tüm sürecin en hassas kısmıdır. Google Forms'dan gelen alanları, bu makalenin önceki bölümünde gösterildiği gibi, register endpoint'i için gerekli minimum alanlarla eşleştirmemiz gerekiyor.

Bu örnekte, sadece kullanıcı adı, e-posta, şifre, isim ve web sitesi URL'sini yapılandırmamız yeterli. Geri kalanlar, bu Google Forms'dan oluşturulan tüm üyeliklerin aynı ürün ve durum modelini takip etmesi için önceden belirlenmiş olarak bırakılmıştır.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Bilgiler ayarlandıktan sonra, son test aşamasına geçin. Son ekranda, endpoint'e gönderilecek tüm alanları, ilgili bilgileri ve boş gönderilecek alanları görebilirsiniz.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Yeni Zap'ınızı test edin ve başarıyla tamamlanması gerekir. Herhangi bir hata oluşursa, tüm alanları kontrol edin ve doğru gönderilip gönderilmediğine bakın. Çok fazla bilgi olduğu için bazı şeyler gözden kaçabilir.

### Tam endpoint parametreleri {#complete-endpoint-parameters}

İşte tam çağrı ve gönderilebilecek tüm alan olasılıkları.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" seçeneklerinden biri "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" seçeneklerinden biri }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
