---
title: Vebhuklar
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) haqqında ilk baxış

_**DİQQƏT: Nəzərə alın ki, bu xüsusiyyət və ya məqalə qabaqcıl istifadəçilər üçündür.**_

**webhook** Ultimate Multisite kimi bir tətbiqin və ya proqram təminatının digər tətbiqlərə real vaxt məlumatı təqdim etmə üsuludur. Webhook məlumatları və ya payload-ları baş verdiyi anda digər tətbiqlərə çatdırır, yəni **məlumatı dərhal əldə edirsiniz.**

Bu, hər dəfə bir hadisə işə düşəndə Ultimate Multisite-dan başqa bir CRM-ə və ya sistemə müəyyən məlumatları inteqrasiya etmək və ya ötürmək lazım olduqda faydalıdır. Məsələn, hər dəfə yeni istifadəçi Account-u yaradıldıqda istifadəçinin adını və email ünvanını mailing list-ə göndərməlisiniz.

## Webhook necə yaradılır

Webhook yaratmaq üçün network admin dashboard-a keçin. **Ultimate Multisite > Webhooks > Add New Webhook** üzərinə klikləyin.

![Add New Webhook düyməsi olan boş Webhooks siyahı səhifəsi](/img/admin/webhooks-list-empty.png)

Sonra webhook konfiqurasiyasını redaktə edə bilərsiniz:

![Name, Event və URL sahələri olan Add New Webhook forması](/img/admin/webhook-add-modal.png)

Yeni webhook yaradarkən sizdən **Name, URL,** və **Event** kimi məlumatlar istəniləcək. Webhook-unuz üçün istədiyiniz addan istifadə edə bilərsiniz. Ən vacib sahələr URL və Event-dir.

![URL sahəsini və payload önbaxışını göstərən webhook redaktə interfeysi](/img/admin/webhook-url-field.png)

URL Ultimate Multisite-ın **payload və ya məlumatı** göndərəcəyi **endpoint və ya təyinat yeridir**. Bu, məlumatı qəbul edəcək tətbiqdir.

Zapier istifadəçinin 3-cü tərəf tətbiqi ilə inteqrasiyanı asanlaşdırmaq üçün istifadə etdiyi ən yayğın həlldir. Zapier kimi platforma olmadan, məlumatı tutacaq və emal edəcək xüsusi funksiyanı əl ilə yaratmalı olacaqsınız. **Ultimate Multisite webhook-unun Zapier ilə necə istifadə olunması** haqqında bu məqaləyə baxın.

Bu məqalədə webhook-un necə işlədiyinin əsas konsepsiyasına və Ultimate Multisite-da mövcud olan hadisələrə baxacağıq. [requestbin.com](https://requestbin.com/) adlı 3-cü tərəf saytından istifadə edəcəyik. Bu sayt bizə heç bir kod yazmadan endpoint yaratmağa və payload-u tutmağa imkan verəcək. _**İmtina: onun edəcəyi tək şey məlumatın qəbul edildiyini bizə göstərməkdir.**_ Payload üzərində heç bir emal və ya hər hansı növ əməliyyat aparılmayacaq.

[requestbin.com](https://requestbin.com/) saytına keçin və Create Request Bin düyməsinə klikləyin.

Həmin düyməyə kliklədikdən sonra, artıq Account-unuz varsa daxil olmağınızı və ya qeydiyyatdan keçməyinizi istəyəcək. Əgər artıq Account-unuz varsa, sizi birbaşa onların dashboard-una aparacaq. Onların dashboard-unda Ultimate Multisite webhook-unuzu yaratmaq üçün istifadə edə biləcəyiniz endpoint-i və ya URL-i dərhal görəcəksiniz.

Davam edin və URL-i kopyalayın, sonra Ultimate Multisite-a qayıdın. Endpoint-i URL sahəsinə yerləşdirin və açılan siyahıdan bir hadisə seçin. Bu nümunədə **Payment Received** seçəcəyik.

Bu hadisə istifadəçi ödəniş etdikdə işə düşür. Mövcud bütün hadisələr, onların təsviri və payload-ları səhifənin aşağı hissəsində verilmişdir. Webhook-u saxlamaq üçün **Add New Webhook** düyməsinə klikləyin.

![Payment Received seçilmiş webhook hadisə açılan siyahısı](/img/admin/webhook-event-picker.png)

İndi yaratdığımız webhook-un işləyib-işləmədiyini görmək üçün endpoint-ə test hadisəsi göndərə bilərik. Bunu yaratdığımız webhook-un altında **Send Test Event** üzərinə klikləməklə edə bilərik.

![Bir konfiqurasiya edilmiş webhook və Send Test əməliyyatını göstərən Webhooks siyahısı](/img/admin/webhooks-list-populated.png)

Bu, testin uğurlu olduğunu bildirən təsdiq pəncərəsini göstərir.

![Test payload-u göndərildikdən sonra webhook test hadisəsi nəticəsi](/img/admin/webhook-test-result.png)

İndi _Requestbin_ saytına qayıtsaq, bəzi test məlumatlarını ehtiva edən payload-un qəbul edildiyini görəcəyik.

Webhook və endpoint-lərin necə işlədiyinin əsas prinsipi budur. Xüsusi endpoint yaratmaq istəyirsinizsə, Ultimate Multisite-dan aldığınız məlumatları emal etmək üçün xüsusi funksiya yaratmalı olacaqsınız.
