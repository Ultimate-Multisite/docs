---
title: API Uç Noktası Kaydet
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API uç noktası

Bu öğreticide, ağınızdaki yeni bir müşteri için tüm kayıt sürecini oluşturmak amacıyla Ultimate Multisite /register API uç noktasını nasıl kullanacağınızı ve bunu Zapier ile nasıl yapacağınızı öğreneceksiniz.

Bu uç nokta POST metodunu kullanır ve _**https://siteniz.com/wp-json/wu/v2/register**_ URL'si ile çağrılır. Bu çağrıda ağınızda 4 işlem gerçekleştirilir:

  * Yeni bir WordPress kullanıcısı oluşturulur veya kullanıcı kimliği (user ID) ile mevcut bir kullanıcı tanımlanır.

  * Ultimate Multisite'ta yeni bir Müşteri oluşturulur veya müşteri kimliği (customer ID) ile mevcut bir müşteri tanımlanır.

  * WordPress ağında yeni bir site oluşturulur.

  * Son olarak, Ultimate Multisite'ta yeni bir Üyelik oluşturulur.

Bu işlem için API kimlik bilgilerinize ihtiyacınız olacak. Bunları almak için ağ yönetici panelinize gidin, **Ultimate Multisite > Settings** > **API & Webhooks** bölümüne gidin ve API Settings kısmını bulun.

![Ultimate Multisite'ta API Settings bölümü](/img/config/settings-api.png)  
**Enable API** seçeneğini işaretleyin ve API kimlik bilgilerinizi alın.

Şimdi uç noktayı inceleyelim ve ardından Zapier'da bir kayıt eylemi oluşturalım.

## Uç nokta gövde parametreleri

Uç noktaya göndermemiz gereken minimum bilgilere genel bir bakış atalım. Bu makalenin sonunda tam çağrıyı bulabilirsiniz.

### Müşteri (Customer)

Kullanıcı ve Ultimate Multisite Müşterisi oluşturma süreci için gerekli bilgiler şunlardır:

"customer_id" : integer

Ağınızda oluşturulmuş müşteri kimliğini gönderebilirsiniz. Gönderilmezse, aşağıdaki bilgiler yeni bir müşteri ve yeni bir WordPress kullanıcısı oluşturmak için kullanılacaktır. Kullanıcı kimliği de müşteri kimliği ile aynı şekilde gönderilebilir.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Üyelik (Membership)**

Bu nesne içinde ihtiyacımız olan tek bilgi Üyelik Durumudur.

"membership" { "status" : "string", // şunlardan biri: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Ürünler (Products)**

Ürünler, ağınızdaki 1 veya daha fazla ürün kimliğini içeren bir dizi olarak verilir. Dikkat edin, bu uç nokta ürün oluşturmaz. Ürün oluşturma uç noktasını daha iyi anlamak için Ultimate Multisite dokümantasyonuna göz atın.

**"products" : [1,2],**

### Ödeme (Payment)

Üyelikte olduğu gibi, sadece duruma ihtiyacımız var.

**"payment" { "status" : "string", // şunlardan biri: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Gövdeyi tamamlamak için Site nesnesi içinde sitenin URL'si ve Başlığına ihtiyacımız var.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register uç noktasının dönüşü, yeni oluşturulan üyelik bilgilerini içeren bir dizi olacaktır.

## Zapier'da eylem oluşturma

Bu yeni ve daha güçlü hesap oluşturma uç noktasının sunulmasıyla birlikte Zapier'da yeni bir eyleme de erişebileceksiniz.

Zapier'ın yeni sürümünün sunduğu tüm özellikleri nasıl kullanacağınızı biliyor musunuz? Daha fazlasını buradan öğrenin. (link?)

### Eylem oluşturma

Kayıt uç noktasını Zapier ile nasıl kullanacağınızı daha iyi göstermek için Google Forms ile bir entegrasyon oluşturalım. Bu form her doldurulduğunda ve bilgiler formun yanıt tablosuna kaydedildiğinde, Ultimate Multisite ağında yeni bir üyelik oluşturulacak.

Google Forms'da, ağda yeni bir üyelik oluşturmak için gerekli minimum alanları içeren bir form hazırlayın.

<!-- Ekran görüntüsü mevcut değil: Yeni üyelik oluşturmak için gerekli alanları içeren Google Forms formu -->

Şimdi Zapier'da yeni bir Zap oluşturun ve verilerin kaydedildiği elektronik tablo aracılığıyla oluşturduğunuz formu Google'a bağlayın.

<!-- Ekran görüntüsü mevcut değil: Google Forms elektronik tablosuna bağlanan Zapier tetikleyici yapılandırması -->

Tamamdır! Google Forms formu Zapier ile bağlandı ve ağ ile entegre edilmeye hazır. Şimdi Google Forms her doldurulduğunda tetiklenen Trigger'ın sonucunda oluşacak Action'a geçelim.

Yeni Ultimate Multisite uygulamasını bulun ve seçin. Bu tür Zap için Register seçeneğini tercih edin.

<!-- Ekran görüntüsü mevcut değil: Register seçeneğini gösteren Ultimate Multisite uygulaması ile Zapier eylem seçimi -->

Bu ilk adımdan sonra, bu Zap ile bağlanacak hesabı seçin.<!-- Ekran görüntüsü mevcut değil: Ultimate Multisite için Zapier hesap bağlantısı adımı -->

Bu, tüm sürecin en hassas kısmıdır. Google Forms'dan gelen alanları, bu makalenin önceki bölümünde gösterildiği gibi register uç noktası için gerekli minimum alanlarla eşleştirmemiz gerekiyor.

Bu örnekte, sadece kullanıcı adı, e-posta, şifre, ad ve web sitesinin URL'sini yapılandırmamız gerekiyor. Geri kalanı önceden belirlenmiş olarak bırakılır, böylece bu Google Forms üzerinden oluşturulan tüm üyelikler aynı ürün ve durum düzenini takip eder.

<!-- Ekran görüntüsü mevcut değil: Google Forms ve Ultimate Multisite register uç noktası arasındaki Zapier alan eşleştirmesi -->

Bilgiler ayarlandıktan sonra son teste geçin. Son ekranda uç noktaya gönderilecek tüm alanları, ilgili bilgilerini ve boş gönderilecek alanları görebilirsiniz.<!-- Ekran görüntüsü mevcut değil: Register uç noktasına gönderilecek tüm alanları gösteren Zapier test ekranı -->

Yeni Zap'ınızı test edin ve başarıyla tamamlanması gerekir. Herhangi bir hata oluşursa, tüm alanları ve doğru şekilde gönderilip gönderilmediğini kontrol edin. Çok fazla bilgi olduğu için bazı şeyler gözden kaçabilir.

### Tam uç nokta parametreleri

İşte tam çağrı ve gönderilebilecek tüm alan seçenekleri.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // şunlardan biri: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // şunlardan biri: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
