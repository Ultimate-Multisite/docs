---
title: Zapier İnteqrasiyası
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-in Zapier ilə inteqrasiyası

Məqalələrdən birində [Webhooks](webhooks.md) haqqında və onların 3-cü tərəf tətbiqləri ilə inteqrasiya üçün necə istifadə oluna biləcəyini müzakirə etmişdik.

Webhooks-dan istifadə bir qədər mürəkkəbdir, çünki kodlaşdırma və payload-ları tutmaq üzrə qabaqcıl bilik tələb edir. **Zapier**-dən istifadə bunu aşmağın bir yoludur.

Zapier 5000+-dən çox tətbiqlə inteqrasiyaya malikdir və bu, müxtəlif tətbiqlər arasında ünsiyyəti asanlaşdırır.

Şəbəkənizdə hadisələr baş verəndə işə düşəcək **Tətikləyicilər** yarada bilərsiniz (məsələn, Account yaradılır və account_create hadisəsini tətikləyir) və ya xarici hadisələrə cavab olaraq şəbəkənizdə **Əməliyyatlar** yarada bilərsiniz (məsələn, Ultimate Multisite şəbəkənizdə yeni Account üzvlüyü yaratmaq).

Bu mümkündür, çünki **Ultimate Multisite Zapier-in tətikləyiciləri** və əməliyyatları [REST API](https://developer.ultimatemultisite.com/api/docs/) ilə işləyir.

## Necə başlamaq olar

Əvvəlcə Zapier tətbiq siyahısında Ultimate Multisite axtarın. Alternativ olaraq, [bu linkə](https://zapier.com/apps/wp-ultimo/integrations) klikləyə bilərsiniz.

Yeni Zap qurmaq üçün Dashboard-a keçin və sol yan paneldəki **+** **Zap yarat** düyməsini basın.

![Create Zap düyməsi olan Zapier Dashboard-u](/img/admin/webhooks-list.png)

Zap yaratma səhifəsinə yönləndiriləcəksiniz.

Axtarış qutusuna "wp ultimo" yazın. **Beta** versiyası seçimini seçmək üçün klikləyin.

![Zapier tətbiq siyahısında WP Ultimo axtarışı](/img/admin/webhooks-list.png)

Tətbiqimizi seçdikdən sonra mövcud hadisəni seçin: **Yeni Ultimate Multisite hadisəsi**.

![New Ultimate Multisite Event tətikləyicisinin seçilməsi](/img/admin/webhooks-list.png)

İndi Zapier-ə **şəbəkənizə** giriş verməliyik. **Sign in** üzərinə klikləmək **API credentials** tələb edən yeni pəncərə açacaq.

![API credentials üçün Zapier Sign in sorğusu](/img/admin/webhooks-list.png)

Şəbəkə admin panelinizə keçin və **Ultimate Multisite > Settings** > **API & Webhooks** bölməsinə gedin, sonra API Settings bölməsini tapın.

Bu bağlantının işləməsi üçün tələb olunduğuna görə **Enable API** seçimini seçin.

![API Settings və Enable API seçimləri olan API and Webhooks ayarları](/img/admin/settings-api-webhooks.png)

API Key və API Secret sahələrində **Copy to Clipboard** ikonundan istifadə edin və həmin dəyərləri inteqrasiya ekranına yapışdırın.

URL sahəsinə protokol (HTTP və ya HTTPS) daxil olmaqla şəbəkənizin tam URL-ni yazın.

![API Key, Secret və URL sahələri olan Zapier inteqrasiya ekranı](/img/admin/webhooks-list.png)

Növbəti addıma keçmək üçün **Yes, Continue** düyməsinə klikləyin. Hər şey qaydasında olarsa, yeni qoşulmuş Account-unuzla qarşılanmalısınız! Yeni tətikləyici yaratmaq üçün **Continue** üzərinə klikləyin.

## Yeni tətikləyici necə yaradılır

Account-unuz qoşulduqdan sonra mövcud hadisələri görə bilərsiniz. Bu dərslik üçün **payment_received** hadisəsini seçək.

![Zapier tətikləyicisində payment_received hadisəsinin seçilməsi](/img/admin/webhooks-list.png)

Hadisə seçildikdən və **continue** üzərinə kliklədikdən sonra **test addımı** görünəcək.

![Tətikləyici üçün Zapier test addımı](/img/admin/webhooks-list.png)

Bu mərhələdə Zapier, Zap-ınızın **həmin hadisəyə aid konkret payload-u gətirə bilib-bilmədiyini** test edəcək. Eyni tipli gələcək hadisələrdə bu eyni struktura malik məlumat göndəriləcək.

![Payload ilə uğurla tamamlanmış Zapier tətikləyici testi](/img/admin/webhooks-list.png)

Dərsliyimizdə test **uğurla tamamlandı** və payload nümunə məlumatını qaytardı. Bu nümunə məlumat əməliyyatlar yaradarkən bizə istiqamət vermək üçün faydalı olacaq. Tətikləyiciniz indi yaradılıb və digər tətbiqlərə qoşulmağa hazırdır.

## Əməliyyatlar necə yaradılır

Əməliyyatlar şəbəkənizdə yeni qeydlər yaratmaq üçün digər tətikləyicilərdən gələn məlumatlardan istifadə edir.

**Əməliyyat yaratma addımında** Ultimate Multisite **Beta** və **Ultimate Multisite-də elementlər yarat** seçimini seçəcəksiniz.

![Create Items on Ultimate Multisite ilə əməliyyat yaradılması](/img/admin/webhooks-list.png)

Növbəti addımda ya **Necə başlamaq olar** bölməsində etdiyimiz kimi autentifikasiyanızı yaradacaqsınız, ya da yaradılmış autentifikasiyanı seçəcəksiniz. Bu dərslikdə əvvəl yaradılmış eyni autentifikasiyanı seçəcəyik.

![Zapier əməliyyatı üçün autentifikasiyanın seçilməsi](/img/admin/webhooks-list.png)

### Əməliyyatın qurulması

Bu, **əməliyyatın əsas addımıdır** və burada işlər bir az fərqlidir. Seçəcəyiniz ilk məlumat **Element**-dir. Element şəbəkənizin **məlumat modelidir**, məsələn **Müştərilər, Ödənişlər, Saytlar, E-poçtlar** və digərləri.

![Zapier əməliyyatı üçün Element növünün seçilməsi](/img/admin/webhooks-list.png)

Element seçərkən forma seçilmiş element üçün **tələb olunan və istəyə bağlı sahələri gətirmək üçün yenidən düzüləcək**.

Məsələn, **Müştəri** elementini seçərkən forma sahələri şəbəkədə yeni Müştəri yaratmaq üçün doldurulması lazım olan hər şeyi gətirəcək.

![Zapier əməliyyat qurulumunda Müştəri element sahələri](/img/admin/webhooks-list.png)

**Tələb olunan** kimi işarələnmiş bütün sahələri doldurduqdan və davam et düyməsinə kliklədikdən sonra son ekran sizə doldurulmuş sahələri və boş buraxılmış sahələri göstərəcək.

![Doldurulmuş və boş sahələri göstərən Zapier əməliyyat testi](/img/admin/webhooks-list.png)

Testiniz tamamlanıb uğurlu olan kimi əməliyyatınız konfiqurasiya olunur. Əməliyyatınızın testi ilə elementin yaradılıb-yaradılmadığını şəbəkənizdə yoxlamaq da vacibdir.
