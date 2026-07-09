---
title: API конектын катлау
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint {#the-ultimate-multisite-register-api-endpoint}

Bu tutorialda, ağınızdaki yeni bir müşteri için tüm kayıt sürecini oluşturmak üzere Ultimate Multisite /register API endpoint'ini nasıl kullanacağınızı ve bunu Zapier ile nasıl yapacağınızı öğreneceksiniz.

Endpoint POST metodunu kullanır ve URL _**https://yoursite.com/wp-json/wu/v2/register**_ ile çağrılır. Bu çağrı sırasında ağınızda 4 işlem gerçekleştirilir:

  * Yeni bir WordPress kullanıcısı veya kullanıcı kimliği aracılığıyla onun tanımlanması oluşturulur.

  * Ultimate Multisite'ta yeni bir Müşteri veya müşteri kimliği aracılığıyla onun tanımlanması oluşturulur.

  * WordPress ağı üzerinde yeni bir site oluşturulur.

  * Son olarak, Ultimate Multisite'ta yeni bir Üyelik oluşturulur.

Bu işlem için API kimlik bilgilerinize ihtiyacınız olacak. Bunları almak için ağ yöneticisi panelinize gidin, **Ultimate Multisite > Settings** > **API & Webhooks** yolunu izleyin ve API Ayarları bölümünü arayın.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

API ayarlar sayfasının tam görünümü şöyledir:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** (API'yi Etkinleştir) seçeneğini seçin ve API kimlik bilgilerinizi alın.

Şimdi, endpoint'i inceleyelim ve ardından Zapier'da bir kayıt eylemi oluşturalım.

## Endpoint body parameters {#endpoint-body-parameters}

Endpoint'e göndermeniz gereken minimum bilgiler hakkında genel bir bakış atalım. Bu makalenin sonunda tam çağrıyı bulacaksınız.

### Customer (Müşteri) {#customer}

Bu, Kullanıcı ve Ultimate Multisite Müşterisi oluşturma süreci için gerekli olan bilgidir:

"customer_id" : integer

Sizin tarifatda yaratılan mijoz ID'sini göndermek mümkün mü? Eğer gönderilmezse, aşağıdakı bilgiler yeni bir müşteri ve yeni bir WordPress kullanıcısı oluşturmak için kullanılacaktır. Kullanıcı ID'si de müşteri ID'si gibi aynı şekilde gönderilebilir.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Üyelik (Membership)** {#membership}

Bu nesnenin içinde ihtiyacımız olan tek bilgi Üyelik Durumudur.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" seçeneklerinden biri },

### **Ürünler (Products)** {#products}

Ürünlere, ağınızdaki 1 veya daha fazla ürün ID'sinden oluşan bir dizi verilir. Dikkat edin, bu endpoint ürün oluşturmaz. Ürün oluşturma endpoint'ini daha iyi anlamak için Ultimate Multisite dokümantasyonuna bakın.

**"products" : [1,2],**

### Ödeme (Payment) {#payment}

Üyelik ile aynı şekilde sadece durumu bilmemiz yeterli.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" seçeneklerinden biri },**

### Site (Site) {#site}

Ve gövdeyi kapatmak için sitenin URL'si ve Başlığına, her ikisi de Site nesnesinin içinde olmalıdır.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Kayıt endpoint'inin dönüşü, yeni oluşturulan üyelik bilgilerini içeren bir dizi olacaktır.

## Zapier'da bir eylem oluşturma (Creating an action in Zapier) {#creating-an-action-in-zapier}

Bu yeni ve daha sağlam hesap oluşturma endpoint'i ile Zapier'da yeni bir eyleme de erişeceksiniz.

Zapier'ın yeni sürümünün sunduğu her şeyi nasıl kullanıp keyif alacağınızı biliyor musunuz? Daha fazlasını buradan öğrenin. (link?)

### Eylem Oluşturma {#creating-an-action}

Zapier ile Ultimate Multisite kayıt uç noktasını nasıl kullanacağınızı daha iyi göstermek için Google Forms ile bir entegrasyon oluşturalım. Bu form her doldurulduğunda ve bilgiler formun cevap sayfasında kaydedildiğinde, Ultimate Multisite ağında yeni bir üyelik oluşturulacaktır.

Google Forms'ta, ağda yeni bir üyelik oluşturmak için gerekli olan minimum alanlarla bir form oluşturun.

<!-- Ekran görüntüsü mevcut değil: Yeni bir üyelik oluşturma alanı olan Google Forms formu -->

Şimdi Zapier'de yeni bir Zap oluşturun ve verilerin kaydedildiği elektronik tablo aracılığıyla Google'da oluşturduğunuz formu bağlayın.

<!-- Ekran görüntüsü mevcut değil: Google Forms elektronik tablosuna bağlanmayı gösteren Zapier tetikleyici yapılandırması -->

Bitti! Google Forms formu Zapier ile bağlandı ve ağla entegre edilmeye hazır. Şimdi, her doldurulduğunda Google Forms'un tetiklediği Tetikleyici'den sonra gerçekleşecek Eylem'e geçelim.

Yeni Ultimate Multisite uygulamasını bulun ve onu seçin. Bu tür bir Zap için Kayıt (Register) seçeneğini seçin.

<!-- Ekran görüntüsü mevcut değil: Register seçeneğini gösteren Zapier eylem seçimi, Ultimate Multisite uygulaması ile birlikte -->

Bu ilk adımdan sonra, bu Zap'e bağlanacak hesabı seçin.<!-- Ekran görüntüsü mevcut değil: Ultimate Multisite için Zapier hesap bağlantı adımı -->

Bu, tüm sürecin en hassas kısmıdır. Google Forms'tan gelen alanları, bu makalenin önceki bölümünde gösterildiği gibi kayıt uç noktası için gerekli olan minimum alanlarla eşleştirmemiz gerekiyor.

Bu örnekte, sadece kullanıcı adı, e-posta, şifre, isim ve web sitesinin URL'sini yapılandırmamız yeterli. Geri kalanlar önceden belirlenmiştir, böylece bu Google Forms üzerinde oluşturulan tüm üyelikler aynı ürün ve durum desenini takip eder.

<!-- Ekran görüntüsü mevcut değil: Google Forms ve Ultimate Multisite kayıt uç noktası arasındaki Zapier alan eşleştirmesi -->

Bilgileri ayarladıktan sonra son testi yapın. Son ekranda, uç noktaya gönderilecek tüm alanları, ilgili bilgileri ve boş gönderilecek alanları görebilirsiniz.<!-- Ekran görüntüsü mevcut değil: Kayıt uç noktasına gönderilecek tüm alanları gösteren Zapier test ekranı -->

Yeni Zaponuzu test edin ve başarılı olması gerekir. Herhangi bir hata oluşursa, tüm alanları kontrol edin ve doğru gönderilip gönderilmediğini bakın. Çok fazla bilgi olduğu için bazı şeyler gözden kaçabilir.

### Tam uç nokta parametreleri {#complete-endpoint-parameters}

İşte tam çağrı ve gönderilebilecek alanların tüm olasılıkları:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" bir tanesi, "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
