---
title: API Endpoint Qeydiyyatı
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API endpoint

Bu dərslikdə, Ultimate Multisite /register API endpoint-indən istifadə edərək şəbəkənizdəki yeni bir müştəri üçün bütün qeydiyyat prosesini necə yaratmağı öyrənəcəyinizi və bunu Zapier ilə necə edə biləcəyinizi öyrənəcəksiniz.

Endpoint POST metodundan istifadə edir və _**https://yoursite.com/wp-json/wu/v2/register**_ URL-i vasitəsilə çağırılır. Bu çağırış zamanı şəbəkəniz daxilində 4 proses yerinə yetiriləcək:

*   Yeni bir WordPress istifadəçisi yaradılacaq və ya istifadəçi ID-si vasitəsilə müəyyən ediləcək.
*   Ultimate Multisite-da yeni bir Müştəri (Customer) yaradılacaq və ya müştəri ID-si vasitəsilə müəyyən ediləcək.
*   WordPress şəbəkəsində yeni bir sayt yaradılacaq.
*   Nəhayət, Ultimate Multisite-da yeni bir Üçüncü Tərəf (Membership) yaradılacaq.

Bu proses üçün API kimlik məlumatlarınıza ehtiyacınız olacaq. Onları almaq üçün şəbəkə administrator panelinizə daxil olun, **Ultimate Multisite > Settings** > **API & Webhooks** bölməsinə keçin və API Settings hissəsini axtarın.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

API ayarları səhifəsinin tam görünüşü budur:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** seçin və API kimlik məlumatlarınızı alın.

İndi isə endpoint-i araşdıraq və sonra Zapier-də bir qeydiyyat (registration) əməliyyəti yaradaq.

## Endpoint body parameters {#endpoint-body-parameters}

Endpoint-ə göndərməli olduğumuz minimum məlumatlar haqqında ümumi bir baxış keçirək. Bu məqalənin sonunda bütün çağırışı tapa biləcəksiniz.

### Customer {#customer}

Bu, İstifadəçini və Ultimate Multisite Müştərisini yaratmaq prosesi üçün lazım olan məlumatdır:

"customer_id" : integer

Şəbəkənizdə yaradılmış müştəri ID-sini göndərmək mümkündür. Əgər göndərilmirsə, aşağıdakı məlumat yeni bir müştəri və yeni bir WordPress istifadəçisi yaratmaq üçün istifadə ediləcək. İstifadəçi ID-si də müştəri ID-si kimi göndərilə bilər.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Bu obyekt daxilində lazım olan yeganə məlumat Membership Status-udur.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" arasından biridir },

### **Products** {#products}

Məhsullar şəbəkənizdən 1 və ya daha çox məhsul ID-si olan bir massiv (array) ilə verilir. Diqqət edin, bu endpoint məhsul yaratmır. Məhsul yaratmaq endpoint-ini daha yaxşı anlamaq üçün Ultimate Multisite-ın sənədləşdirilməsinə baxın.

**"products" : [1,2],**

### Payment {#payment}

Membership-də olduğu kimi, bizə yalnız status lazımdır.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" arasından biridir },**

### Site {#site}

Və bədəni tamamlamak üçün saytın URL-i və Başlığı (Title) lazımdır, hər ikisi Site obyektinin içində olmalıdır.

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint-inin cavabı yeni yaradılmış membership məlumatları olan bir massiv olacaq.

## Creating an action in Zapier {#creating-an-action-in-zapier}

Bu yeni və daha güclü hesab yaratma endpoint-inin təqdim edilməsi ilə Zapier-də də yeni bir əməliyyət (action) əldə edəcəksiniz.

Zapier-in yeni versiyasının təklif etdiyi hər şeydən necə istifadə etdiyinizi və necə zövq aldığınızı bilirsinizmi? Daha çox öyrənin. (link?)

### Creating an action {#creating-an-action}

Qeydiyyat endpoint-indən Zapier ilə necə istifadə olunacağını daha yaxşı göstərmək üçün Google Forms ilə bir inteqrasiya yaradaq. Bu forma hər doldurulub məlumatlar formanın cavab vərəqə yazıldığında, Ultimate Multisite şəbəkəsində yeni bir membership yaradılacaq.

Google Forms-da şəbəkədə yeni bir membership yaratmaq üçün lazım olan minimum sahələrlə bir forma yaradın.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

İndi Zapier-də yeni bir Zap yaradın və Google Forms-da yaradılan formanı məlumatların saxlandığı cədvəllə (spreadsheet) birləşdirin.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Hazırdır! Google Forms forması Zapier ilə birləşdirildi və şəbəkə ilə inteqrasiya olmaq üçün hazırdır. İndi isə Google Forms doldurduqca tetikləyən (trigger) əməliyyətindən (Action) keçək.

Yeni Ultimate Multisite tətbiqini tapın və onu seçin. Bu cür bir Zap üçün Register seçimini seçin.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Bu ilk addımdan sonra, bu Zap ilə birləşdiriləcək hesabı seçin.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Bu bütün prosesin ən həssas hissəsidir. Google Forms-dan gələn sahələri, bu məqalənin əvvəlki bölməsində göstərilən, register endpoint-i üçün lazım olan minimum sahələrlə uyğunlaşdırmalıyıq.

Bu nümunədə, bizə yalnız istifadəçi adı, e-poçt, şifrə, ad və vebsaytın URL-i konfiqurasiya etmək lazımdır. Qalan hissə isə öncədən müəyyən edilmişdir, beləliklə bu Google Forms üzərindən yaradılan bütün membership-lər eyni məhsul və status modelini izləyir.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Məlumatlar qurulduqdan sonra, son testə keçin. Son ekranda endpoint-ə göndəriləcək bütün sahələri, onların müvafiq məlumatlarını və boş göndəriləcək sahələri görə bilərsiniz.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Yeni Zap-ınızı test edin və uğurla tamamlanmalıdır. Əgər hər hansı bir xəta baş verərsə, bütün sahələri yoxlayın və düzgün göndərilib-göndərilmədiyinə baxın. Çox miqdarda məlumat olduğu üçün bəzi şeylər diqqətə alınmay bilər.

### Complete endpoint parameters {#complete-endpoint-parameters}

Bütün mümkün sahələri və tam çağırışı burada tapa bilərsiniz.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
