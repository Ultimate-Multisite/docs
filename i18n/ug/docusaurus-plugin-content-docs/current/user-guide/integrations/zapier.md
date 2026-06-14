---
title: Zapier Integraýa
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite'ı Zapier ile Entegre Etme

Bir makalede [Webhooks](webhooks.md) konusunu ve bunların üçüncü taraf uygulamalarla nasıl entegre edilebileceğini konuştuk.

Webhook kullanmak biraz karmaşıktır çünkü kodlama konusunda ileri düzey bilgi gerektirir ve veri paketlerini yakalamayı bilmeniz gerekir. **Zapier** ise bu durumu aşmanın bir yoludur.

Zapier, 5000'den fazla uygulama ile entegrasyona sahiptir, bu da farklı uygulamalar arasındaki iletişimi kolaylaştırır.

Ağınızda olaylar meydana geldiğinde tetiklenecek **Triggers** (Tetikleyiciler) oluşturabilir veya harici olaylara tepki olarak ağınızda **Actions** (Eylemler) üretebilirsiniz (örneğin, Ultimate Multisite ağınızda yeni bir hesap üyeliği oluşturmak).

Bu mümkün çünkü **Ultimate Multisite Zapier'ın tetikleyicileri** ve eylemleri [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından desteklenir.

## Nasıl Başlanır

Öncelikle, Zapier uygulama listesinde Ultimate Multisite'ı arayın. Alternatif olarak, [bu bağlantıya](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Göstergenize (dashboard) gidin ve yeni bir Zap kurmak için sol kenar çubuğundaki **+** **Create Zap** butonuna basın.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürüm seçeneğini seçmek için tıklayın.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra, mevcut olabilecek olayı seçin: **New Ultimate Multisite Event** (Yeni Ultimate Multisite Olayı).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Şimdi Zapier'a **ağınıza** erişim vermemiz gerekiyor. **Sign in** (Giriş yap) kısmına tıkladığınızda, **API credentials** (API kimlik bilgileri) gerektiren yeni bir pencere açılacaktır.

![API credentials for Zapier sign in prompt](/img/admin/webhooks-list.png)

Şu network admin panelinize gidin ve **Ultimate Multisite > Settings** > **API & Webhooks** kısmına tıklayın ve API Ayarları bölümünü bulun.

Bu bağlantının çalışması için **Enable API** seçeneğini seçmeniz gerekiyor.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key ve API Secret alanlarındaki **Copy to Clipboard** (Panoya Kopyala) simgesini kullanarak bu değerleri entegrasyon ekranına yapıştırın.

URL alanına, protokolü (HTTP veya HTTPS) dahil olmak üzere network'ünüzün tam URL'sini yazın.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Son adıma geçmek için **Yes, Continue** (Evet, Devam Et) düğmesine tıklayın. Her şey yolunda giderse, yeni bağlı hesabınız sizi karşılayacaktır! Yeni bir tetikleyici oluşturmak için **Continue** (Devam Et) butonuna tıklayın.

## Yeni Bir Trigger (Tetikleyici) Nasıl Oluşturulur

Hesabınız bağlandıktan sonra mevcut olayları görebilirsiniz. Bu eğitim için **payment_received** (ödeme alındı) olayını seçelim.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Olay seçildikten ve **continue** (devam et)e tıkladıktan sonra, bir **test step** (test adımı) görünecektir.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Bu aşamada Zapier'in, Zap'inizin o olaya ait **spesifik payload'u alıp alamayacağını** test edecektir. Aynı türdeki gelecekteki olaylarda da aynı yapıdaki bilgiler gönderilecektir.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

مونتەریدا تێستا **موفقانه تەواو شد** و نمونه‌ی اطلاعات پےلوڈ رو دابگرداند. ئەم نمونه‌ی اطلاعات بۆ ئێمە کاری ئەنجام دەدات لە کاتی دروستکردنی اکشنەکاندا بەسوود دەبێت. 트리گرەکەت ئێستا دروست بووە و ئامادەیە بۆ پەیوەستکردن بە بەرنامە دیکەکان.

## چۆنیەتی دروستکردنی Actions (اکشنەکان)

Actions لە فایدرەکاندا (triggers)ی دیکە زانیاری دەگرنەوە بۆ دروستکردنی نوێیەکان لە تۆڕەکەتدا.

لە **درستکردنی هەنگاوی action**، تۆ Ultimate Multisite **Beta** و ئەو ئەوپۆشنەی کە **Create Items on Ultimate Multisite** (داتایەکان لە Ultimate Multisite دروست بکە) دەبنە چاودێری.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

لە هەنگاوی دووەم، یان ئامادەکردنی خودی پەیامگیری (authentication)، وەک ئەوەی لە **How to start**دا کردین، یان هەڵبژاردنی پەیامگیرییەکی دروستکراو دەبنە چاودێری. لەم مونتەریدا ئێمە هەمان پەیامگیرییەکە دەبینین کە پێشتر دروست کردووین.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ڕێکخستنی Action (اکشنەکە)

ئەمە **هەنگاوی سەرەکی ی هەنگاوەکەیە** و لێرەدا شتەکان کەمێک جیاوازن. یەکەم زانیاری کە دەبێت هەڵبژێریت، **Item** (داتایە). Item بریتییە لە **مۆدێلی زانیاریی تۆڕەکەت** وەک **Customers, Payments, Sites, Emails** و دیکەکان.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

کاتێک دەبێت Item هەڵبژێریت، فۆرم بۆ ئەوەی ئەو خانە پێویست و ئاساییان بۆ ئەو Item هەڵبسێن کە هەڵبژێریت، **دابەش دەبێتەوە**.

بۆ نموونە، کاتێک **Customer** (کڕیار) یان Item هەڵدەبژێریت، فۆرمەکە هەموو ئەو خانە دەهێنێت کە بۆ دروستکردنی کڕیاری نوێ لە تۆڕەکەتدا پێویستن.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

پاش پڕکردنەوەی هەموو ئەو خانە کە **required** (پێویست) ناودارین و 클릭 (click) کردن لە continue، شاشەیەکی کۆتایی دەدات کە هەموو ئەو خانە پڕکراوەکان و ئەو خانە پێویستان کە پڕ نەکراون، بۆ تۆ دەردەخات.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Сиз тестниňiz tamamlanmagan we üstünlikli bolan anda, sizdiň aksiyanyň sozlamasy tamamlanýar. Şeýle hem, bu zat diňe testi bilen döredilip edilip edilmediğini ağızdaňyzda ýerleşdirip, ulgamda barlap bilmek möhümdir.
