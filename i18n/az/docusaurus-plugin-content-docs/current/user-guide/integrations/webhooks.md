---
title: Webhooklər
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Webhook-lara İlk Baxış (v2)

_**DİQQƏT: Bu funksiya və ya məqalə yalnız təcrübəli istifadəçilər üçün nəzərdə tutulub.**_

**Webhook** nədir? Webhook, Ultimate Multisite kimi bir tətbiqin və ya proqramın digər tətbiqlərə real vaxt məlumatı ötürmə yoludur. Bir webhook, data və ya yükləmələri (payloads) hadisə baş verən kimi digər tətbiqlərə çatdırır, yəni siz **məlumatı dərhal alırsınız.**

Bu, əgər Ultimate Multisite-dən çıxan müəyyən məlumatı başqa bir CRM və ya sistemə ötürməyiniz lazım gəldikdə çox faydalıdır. Məsələn, yeni bir istifadəçi hesabı yaradıldıqda, istifadəçinin adını və e-poçtun ünvanını bir mailing list-ə göndərməyiniz lazım ola bilər.

## Webhook necə yaradılır

Bir webhook yaratmaq üçün network admin dashboard-unuza daxil olun. **Ultimate Multisite > Webhooks > Add New Webhook** düyməsinə klikləyin.

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Sonra webhook konfiqurasiyasını redaktə edə bilərsiniz:

![Webhook edit interface](/img/admin/webhook-edit.png)

Yeni bir webhook yaradarkən sizdən **Name, URL** və **Event** kimi məlumatlar tələb ediləcək. Webhook üçün istədiyiniz hər hansı bir adı istifadə edə bilərsiniz. Ən vacib sahələr URL və Event-dir.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL, Ultimate Multisite-nin **payload və ya məlumatı** göndərəcəyi **endpoint və ya ünvan**dır. Bu, məlumatı alacaq tətbiqdir.

Zapier, istifadəçilərin üçüncü tərəf tətbiqləri ilə inteqrasiyanı asanlaşdırmaq üçün ən çox istifadə etdiyi həlldir. Zapier kimi bir platforma olmadan, məlumatı tutub emal edəcək xüsusi bir funksiya yaratmalısınız. **Ultimate Multisite webhook-unu Zapier ilə necə istifadə etmək** haqqında bu məqaləyə baxın.

Bu məqalədə, webhook-un necə işlədiyinin əsas konsepsiyasına və Ultimate Multisite-də mövcud olan hadisələrə (events) nəzər salacağıq. Biz [requestbin.com](https://requestbin.com/) adlı üçüncü tərəf saytından istifadə edəcəyik. Bu sayt bizə heç bir kod yazmadan bir endpoint yaratmağa və payload-u tutmağa imkan verəcək. _**İmtina: Bu sayt yalnız məlumatın alındığını göstərəcək.**_ Payload üzərində heç bir emal və ya hər hansı bir əməliyyat edilməyəcək.

[requestbin.com](https://requestbin.com/) saytına gedin və Create Request Bin düyməsinə klikləyin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Bu düyməyə kliklədikdən sonra, əgər artıq hesabınız varsa, daxil olmağınız, yoxsa qeydiyyatdan keçməyiniz tələb olunacaq. Əgər hesabınız varsa, birbaşa onların dashboard-una yönləndiriləcəksiniz. Dashboard-larında, Ultimate Multisite webhook-unuzu yaratmaq üçün istifadə edə biləcəyiniz endpoint və ya URL-i dərhal görəcəksiniz.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

URL-i kopyalayıb Ultimate Multisite-ə qayıdın. Endpoint-i URL sahəsinə yerləşdirin və açılan menyudan bir event seçin. Bu nümunədə, **Payment Received** (Ödəniş Alınıb) seçəcəyik.

Bu event, istifadəçi ödəniş etdikdə tetiklənilir. Mövcud olan bütün eventlər, onların təsvirləri və payload-ları səhifənin altında siyahı halında verilmişdir. Webhook-u yadda saxlamaq üçün **Add New Webhook** düyməsinə klikləyin.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

İndi isə, yaratdığımız webhook-un işləyib-işləmədiyini görmək üçün endpoint-ə test event göndərə bilərik. Bunu, yaratdığımız webhook-un altında yerləşən **Send Test Event** düyməsinə klikləyərək edə bilərik.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Bu, testin uğurlu olduğunu göstərən bir təsdiqləmə pəncərəsi göstərir.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

İndi əgər _Requestbin_ saytına qayıtsaq, payload-un bəzi test məlumatlarını ehtiva edərək alındığını görəcəyik.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Bu, webhook və endpoint-lərin necə işlədiyinin əsas prinsipidir. Əgər özünüzə xüsusi bir endpoint yaratmaq istəyirsinizsə, Ultimate Multisite-dən aldığınız məlumatı emal etmək üçün xüsusi bir funksiya yaratmanız lazım olacaq.
