---
title: Zapier İntegrasiyası
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite-i Zapier ilə İntegrasiya Etmək

Maddələrimizdən birində [Webhooks](webhooks.md) haqqında danışdıq və onların üçüncü tərəf tətbiqləri ilə necə inteqrasiya edilə biləcəyini gördük.

Webhooks istifadə etmək bir az mürəkkəbdir, çünki bu, kodlaşdırma sahəsində və məlumat paketlərini (payloads) tutmaqda irəli biliklər tələb edir. **Zapier** istifadə etmək isə bu çətinlikləri aşmağınız üçün bir yoldur.

Zapier-in 5000-dən çox tətbiq ilə inteqrasiyası var, bu da müxtəlif tətbiqlər arasında əlaqəni asanlaşdırır.

Siz öz şəbəkənizdə hadisələr baş verdikdə aktivləşəcək **Triggers** (Tetikləyicilər) yarada bilərsiniz (məsələn, bir hesab yaradılsa, `account_create` hadisəsi tetiklənsin) və ya xarici hadisələrə reaksiya verən **Actions** (Hərəkətlər) yarada bilərsiniz (məsələn, Ultimate Multisite şəbəkənizdə yeni bir hesab üzvlüyü yaradın).

Bu, **Ultimate Multisite Zapier-in triggers** və actions-larının [REST API](https://developer.ultimatemultisite.com/api/docs/) ilə işləməsi sayəsində mümkündür.

## Necə Başlamaq Olar

Əvvəlcə, Zapier tətbiq siyahısında Ultimate Multisite axtarın. Alternativ olaraq, [bu linkə](https://zapier.com/apps/wp-ultimo/integrations) klik edə bilərsiniz.

Dashboard-unuza daxil olun və yeni bir Zap qurmaq üçün sol menyuda yerləşən **+ Create Zap** düyməsinə basın.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Siz Zap yaratma səhifəsinə yönləndiriləcəksiniz.

Axtarış qutusuna "wp ultimo" yazın. **Beta** versiya seçmək üçün klikləyin.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Tətbiqimizi seçdikdən sonra mövcud hadisəni seçin: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

İndi Zapier-ə **şəbəkənizə** giriş verməliyik. **Sign in** düyməsinə klikləmək, **API credentials** tələb edən yeni bir pəncərə açacaq.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Şəbəkə administrator panelinizə gedin və **Ultimate Multisite > Settings** > **API & Webhooks** yolunu izləyərək API Settings bölməsini tapın.

Bu bağlantının işləməsi üçün tələb olunduğu üçün **Enable API** seçənəyini seçin.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

API Key və API Secret sahələrindəki **Copy to Clipboard** ikonundan istifadə edin və bu dəyərləri inteqrasiya ekranına yapışdırın.

URL sahəsinə protokolu (HTTP və ya HTTPS) daxil olmaqla şəbəkənizin tam URL-ini yazın.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Növbəti addıma keçmək üçün **Yes, Continue** düyməsinə klikləyin. Hər şey qaydasında gedərsə, yeni qoşulmuş hesabınızla qarşılaşmalısınız! Yeni bir trigger yaratmaq üçün **Continue** düyməsinə klikləyin.

## Yeni Bir Trigger Necə Yaratmaq Olar

Hesabınız qoşulduğu üçün mövcud hadisələri görə bilərsiniz. Bu tutorial üçün **payment_received** hadisəsini seçək.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Hadisə seçildikdən və **continue** düyməsinə kliklədikdən sonra, bir **test step** (test addımı) görünəcək.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Bu mərhələdə Zapier, Zap-inizin **o hadisəyə spesifik məlumat paketini (payload) çəkə biləcəyini** yoxlayacaq. Gələcək eyni tipdə hadisələrdə, məlumatlar bu eyni strukturda göndəriləcək.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Bizim tutorialımızda test **uğurla tamamlandı** və məlumat paketinin nümunə məlumatını qaytardı. Bu nümunə məlumatı hərəkətlər yaradarkən bizə yol göstərməkdə faydalı olacaq. Trigger-iniz artıq yaradılıb və digər tətbiqlərə qoşulmağa hazırdır.

## Actions Necə Yaratmaq Olar

Actions, şəbəkənizdə yeni qeydlər yaratmaq üçün digər triggerlərdən gələn məlumatlardan istifadə edir.

**creating an action step** (bir action addımı yaradarkən) Ultimate Multisite **Beta** və **Create Items on Ultimate Multisite** seçənliyini seçəcəksiniz.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Növbəti addımda ya autentifikasiyanızı yaradacaqsınız, tıpkı **How to start** hissəsində etdiyimiz kimi, ya da yaradılmış bir autentifikasiyanı seçəcəksiniz. Bu tutorialda əvvəllər yaratdığımız eyni autentifikasiyanı seçəcəyik.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action-ı Qurmaq

Bu, **action-ın əsas addımıdır** və burada bir az fərqlilik var. Seçəcəyiniz ilk məlumat **Item** (Element) olacaq. Item, **Customers, Payments, Sites, Emails** və digərləri kimi şəbəkənizin **məlumat modelidir**.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Bir element seçərkən, form, seçilmiş element üçün tələb olunan və isteğe bağlı sahələri göstərmək üçün **yenidən düzəldəcək**.

Məsələn, **Customer** elementini seçərkən, form sahələri şəbəkədə yeni bir Müştəri yaratmaq üçün lazım olan hər şeyi göstərəcək.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Bütün **required** (tələb olunan) kimi işarələnmiş sahələri doldurub continue düyməsinə kliklədikdən sonra, son bir ekran doldurulmuş sahələri və boş qalan sahələri göstərəcək.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Testiniz uğurla tamamlandıqdan və müvəffəq olduqdan sonra action-ınız konfiqurasiya edilmiş olur. Həmçinin, action-ınızın testi ilə elementin yaradılıb-yaratılmadığını şəbəkənizdə yoxlamaq vacibdir.
