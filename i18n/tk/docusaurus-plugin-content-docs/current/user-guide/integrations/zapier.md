---
title: Zapier Integrasi
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite'ı Zapier ile Entegre Etmek

Bir makalede [Webhooks](webhooks.md) konusunu ve bunların üçüncü taraf uygulamalarla nasıl entegre edilebileceğini tartıştık.

Webhook kullanmak biraz karmaşıktır çünkü kodlama ve veri paketlerini yakalama konusunda ileri düzey bilgi gerektirir. **Zapier** kullanmak bu durumu aşmanın bir yoludur.

Zapier, 5000'den fazla uygulama ile entegrasyona sahiptir, bu da farklı uygulamalar arasındaki iletişimi kolaylaştırır.

Ağınızda olaylar meydana geldiğinde tetiklenecek **Triggers** oluşturabilir (örneğin bir hesap oluşturulur ve `account_create` olayını tetikler) veya harici olaylara tepki olarak ağınızda **Actions** üretebilir (örneğin Ultimate Multisite ağınızda yeni bir hesap üyeliği oluşturmak).

Bu mümkün çünkü **Ultimate Multisite Zapier'ın triggers** ve actions [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından desteklenir.

## Nasıl Başlanır

Öncelikle, Zapier uygulama listesinde Ultimate Multisite'ı arayın. Alternatif olarak, [bu bağlantıya](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Dashboard'unuza gidin ve yeni bir Zap kurmak için sol menüdeki **+** **Create Zap** düğmesine basın.

![Create Zap butonu olan Zapier panosu](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürümü seçmek için tıklayın.

![Zapier uygulama listesinde WP Ultimo aranıyor](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra mevcut olunan olayı seçin: **New Ultimate Multisite Event**.

![Yeni Ultimate Multisite Olayını tetikleyici olarak seçme](/img/admin/webhooks-list.png)

Şimdi Zapier'a **ağınıza** erişim vermemiz gerekiyor. **Sign in** kısmına tıkladığınızda, **API credentials** gerektiren yeni bir pencere açılacaktır.

![API anahtarlary üçin Zapier girme bildirişi](/img/admin/webhooks-list.png)

Şebeke administrator paneline gidiň we **Ultimate Multisite > Settings** > **API & Webhooks** bölümini tapyp API Ayarları (API Settings) bölümüne baksalyň.

Bu bağlantyny işlemek üçin API'yi işleýär, diiýip **Enable API** opsiyasyny saýlaň.

![API we Webhook ayarları, API Ayarları we Enable API opsiyalary bilen](/img/admin/settings-api-webhooks.png)

API Key we API Secret ulanyp ýa-da kopyap (Copy to Clipboard) ikonuny islendik ulanyp bu ugurlary integrasiýa ekranyna ýazyp giriziň.

URL ulanyp, protokoly (HTTP ýa-da HTTPS) bilen birlikde şebekenizin doly URL-sini ýazyň.

![API Key, Secret we URL ulanylan Zapier integrasiýa ekranı](/img/admin/webhooks-list.png)

Indiki ädimi geçmek üçin **Yes, Continue** düwmenine basyň. Her zat düzgün bolsa, size täze baglanyşykly hasabyňyz bilen hoşgalty beriljekdir! Täze trigger döretmek üçin **Continue** düwmenine basyň.

## Täze Trigger nädip döredilýär

Hasaba baglanandan soň, bar bolan waka (event) görkezijilerini görüp bilersiňiz. Bu tutorial üçin biz **payment_received** waka görkezijisini saýlaň.

![Zapier triggerinde payment_received waka görkezijisini saýlamak](/img/admin/webhooks-list.png)

Waka saýlandan we **continue** düwmenine basandan soň, bir **test ädimi (test step)** görünjekdir.

![Trigger üçin Zapier test ädimi](/img/admin/webhooks-list.png)

Bu etapda Zapier, sizin Zap-i şol waka üçin **has görnüşli malumatlary alyp bilip biljekdigini** barlap geçýär. Geljekde aynı tipdäki waka üçin bu birmeňze meýil bolan maglumatlar gönd어ler.

![Zapier trigger testi malumat bilen ýapykdylyk bilen tamamlandyryldy](/img/admin/webhooks-list.png)

Bizde tutorialda test **başarıyla tamamlandı** we payload örneğindeki bilgileri geri döndürdü. Bu örnek bilgiler, aksiyonlar oluştururken bize yol göstermesi için faydalı olacak. Tetikleyiciniz artık oluşturuldu ve diğer uygulamalarla bağlantı kurmaya hazır.

## Aksiyon Nasıl Oluşturulur

Aksiyonlar, ağınızda yeni kayıtlar oluşturmak için diğer tetikleyicilerden bilgi kullanır.

**Bir aksiyon adımı oluştururken**, Ultimate Multisite **Beta**'yı ve **Ultimate Multisite üzerinde Öğeler Oluşturma** seçeneğini seçeceksiniz.

![Create Items on Ultimate Multisite ile bir aksiyon oluşturma](/img/admin/webhooks-list.png)

Son adımda ya **Başlamanın Nasıl Yapılacağı** kısmında yaptığımız gibi kendi kimlik doğrulamanızı oluşturursunuz ya da oluşturulmuş bir kimlik doğrulamayı seçersiniz. Bu tutorial'da daha önce oluşturduğumuz aynı kimlik doğrulamayı seçeceğiz.

![Zapier aksiyonu için kimlik doğrulama seçme](/img/admin/webhooks-list.png)

### Aksiyonu Ayarlama

Bu, **aksiyonun ana adımıdır** ve burada işler biraz farklıdır. İlk seçeceğiniz bilgi **Öğe (Item)** olacaktır. Öğe, ağınızın **Müşteriler, Ödemeler, Siteler, E-postalar** gibi **bilgi modelidir**.

![Zapier aksiyonu için Öğe türünü seçme](/img/admin/webhooks-list.png)

Bir öğe seçtiğinizde, form, seçilen öğe için gerekli ve isteğe bağlı alanları getirecek şekilde yeniden düzenlenir.

Örneğin, **Müşteri (Customer)** öğesini seçtiğinizde, form alanları ağda yeni bir Müşteri oluşturmak için doldurmanız gereken her şeyi getirecektir.

![Zapier aksiyonu kurulumunda Müşteri öğesi alanları](/img/admin/webhooks-list.png)

**Gerekli (required)** olarak işaretlenmiş tüm alanları doldurduktan ve devam etmeye tıkladıktan sonra, size doldurulmuş alanları ve boş kalan alanları gösteren son bir ekran görünecektir.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Testiniz tamamlanır ve başarılı olursa, aksiyonunuz yapılandırılmış olur. Ayrıca, işlemin test edildiği bir aksiyonla oluşturulup oluşturulmadığını kontrol etmek için ağınızda da kontrol yapmak önemlidir.
