---
title: API Uç Noktasını Kaydet
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API uç noktası

Bu eğitimde, ağınızdaki yeni bir müşteri için tüm onboarding sürecini oluşturmak üzere Ultimate Multisite /register API uç noktasını nasıl kullanacağınızı ve bunu Zapier ile nasıl yapacağınızı öğreneceksiniz.

Uç nokta POST yöntemini kullanır ve _**https://yoursite.com/wp-json/wu/v2/register**_ URL'siyle çağrılır. Bu çağrıda, ağınız içinde 4 süreç yürütülecektir:

  * Yeni bir WordPress kullanıcısı veya kullanıcı ID'si aracılığıyla kimliği oluşturulacaktır.

  * Ultimate Multisite içinde yeni bir Müşteri veya müşteri ID'si aracılığıyla kimliği oluşturulacaktır.

  * WordPress ağında yeni bir site oluşturulacaktır.

  * Sonunda, Ultimate Multisite içinde yeni bir Üyelik oluşturulacaktır.

Bu işlem için API kimlik bilgilerinize ihtiyacınız olacak. Bunları almak için ağ yönetici panelinize gidin, **Ultimate Multisite > Settings** > **API & Webhooks,** yolunu izleyin ve API Settings bölümünü bulun.

![Ultimate Multisite içindeki API Settings bölümü](/img/config/settings-api.png)

API ayarları sayfasının tam görünümü şöyledir:

![API ayarları tam sayfası](/img/config/settings-api-full.png)

**Enable API** seçeneğini seçin ve API kimlik bilgilerinizi alın.

Şimdi uç noktayı inceleyelim ve ardından Zapier içinde bir kayıt eylemi oluşturalım.

## Uç nokta gövde parametreleri

Uç noktaya göndermemiz gereken minimum bilgilere genel bir bakış atalım. Bu makalenin sonunda tam çağrıyı bulacaksınız.

### Müşteri

Kullanıcıyı ve Ultimate Multisite Müşterisini oluşturma süreci için gerekli olan bilgiler şunlardır:

"customer_id" : integer

Ağınızda oluşturulan müşteri ID'sini göndermek mümkündür. Gönderilmezse, aşağıdaki bilgiler yeni bir müşteri ve yeni bir WordPress kullanıcısı oluşturmak için kullanılacaktır. Kullanıcı ID'si de müşteri ID'siyle aynı şekilde gönderilebilir.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Üyelik**

Bu nesnenin içinde ihtiyacımız olan tek bilgi Üyelik Durumudur.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Ürünler**

Ürünler, ağınızdan 1 veya daha fazla ürün ID'si içeren bir dizi olarak verilir. Dikkat edin, bu uç nokta ürün oluşturmaz. Ürün oluşturma uç noktasını daha iyi anlamak için Ultimate Multisite belgelerine bakın.

**"products" : [1,2],**

### Ödeme

Üyelikte olduğu gibi, yalnızca duruma ihtiyacımız vardır.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Gövdeyi tamamlamak için Site nesnesinin içinde sitenin URL'sine ve Başlığına ihtiyacımız vardır.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register uç noktasının dönüşü, yeni oluşturulan üyelik bilgilerini içeren bir dizi olacaktır.

## Zapier içinde bir eylem oluşturma

Bu yeni ve daha sağlam Account oluşturma uç noktasının tanıtılmasıyla birlikte Zapier içinde yeni bir eyleme de erişeceksiniz.

Zapier'ın yeni sürümünün sunduğu her şeyi nasıl kullanacağınızı ve bundan nasıl yararlanacağınızı biliyor musunuz? Daha fazla bilgi burada. (link?)

### Bir eylem oluşturma

Kayıt uç noktasını Zapier ile nasıl kullanacağınızı daha iyi göstermek için Google Forms ile bir entegrasyon oluşturalım. Bu form her doldurulduğunda ve bilgiler formun yanıt sayfasına kaydedildiğinde, Ultimate Multisite ağında yeni bir üyelik oluşturulacaktır.

Google Forms içinde, ağda yeni bir üyelik oluşturmak için gerekli minimum alanları içeren bir form hazırlayın.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Şimdi Zapier içinde yeni bir Zap oluşturun ve Google'da oluşturulan formu, verilerin kaydedildiği elektronik tablo üzerinden bağlayın.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Tamam! Google Forms formu Zapier ile bağlandı ve ağ ile entegre edilmeye hazır. Şimdi Google Forms her doldurulduğunda tetiklediği Trigger sonucunda oluşacak Action'a geçelim.

Yeni Ultimate Multisite uygulamasını bulun ve seçin. Bu tür bir Zap için Register seçeneğini seçin.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Bu ilk adımdan sonra, bu Zap ile bağlanacak Account'u seçin.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Bu, tüm sürecin en hassas kısmıdır. Google Forms'tan gelen alanları, bu makalenin önceki bölümünde gösterildiği gibi register uç noktası için gerekli minimum alanlarla eşleştirmemiz gerekir.

Bu örnekte, yalnızca web sitesinin kullanıcı adı, e-posta, parola, ad ve URL bilgilerini yapılandırmamız gerekir. Geri kalanı önceden belirlenmiş bırakılır; böylece bu Google Forms üzerinden oluşturulan tüm üyelikler aynı ürün ve durum modelini izler.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Bilgiler ayarlandıktan sonra son teste geçin. Son ekranda uç noktaya gönderilecek tüm alanları, bunlara karşılık gelen bilgileri ve boş gönderilecek alanları görebilirsiniz.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Yeni Zap'inizi test edin; başarıyla tamamlanmalıdır. Herhangi bir hata oluşursa, tüm alanları ve doğru gönderilip gönderilmediklerini kontrol edin. Çok fazla bilgi olduğu için bazı şeyler gözden kaçabilir.

### Tam uç nokta parametreleri

İşte tam çağrı ve gönderilebilecek alanların tüm olasılıkları.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
