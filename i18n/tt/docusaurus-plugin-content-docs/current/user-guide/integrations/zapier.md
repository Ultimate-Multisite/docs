---
title: Zapier Интеграция
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite'ı Zapier ile Entegre Etme

Bir makalede [Webhooks](webhooks.md) konusunu ve bunların üçüncü taraf uygulamalarla nasıl entegre edilebileceğini konuştuk.

Webhook kullanmak biraz karmaşık olabilir çünkü kodlama ve veri paketlerini yakalama konusunda ileri düzey bilgi gerektirir. **Zapier** ise bu durumu aşmanızı sağlayan bir yoldur.

Zapier, 5000'den fazla uygulama ile entegrasyona sahiptir, bu da farklı uygulamalar arasındaki iletişimi kolaylaştırır.

Ağınızda olaylar gerçekleştiğinde tetiklenecek **Triggers** (Tetikleyiciler) oluşturabilir veya harici olaylara tepki olarak ağınızda **Actions** (Eylemler) üretebilirsiniz (örneğin, Ultimate Multisite ağınızda yeni bir hesap üyeliği oluşturmak).

Bu mümkün çünkü **Ultimate Multisite Zapier'ın tetikleyicileri** ve eylemleri [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından desteklenir.

## Nasıl Başlanır

Öncelikle, Zapier uygulama listesinde Ultimate Multisite'ı arayın. Alternatif olarak, [bu bağlantıya](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Dashboard'unuza gidin ve yeni bir Zap oluşturmak için sol kenar çubuğundaki **+** **Create Zap** butonuna basın.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürüm seçeneğini seçmek için tıklayın.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra, mevcut olabilecek olayı seçin: **New Ultimate Multisite Event** (Yeni Ultimate Multisite Olayı).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Şimdi Zapier'a **ağınıza** erişim vermemiz gerekiyor. **Sign in** (Giriş yap) kısmına tıkladığınızda, **API credentials** (API kimlik bilgileri) gerektiren yeni bir pencere açılacaktır.

![API anahtarları için Zapier giriş istemi](/img/admin/webhooks-list.png)

Сете администратор панелинде (network admin panel) к **Ultimate Multisite > Settings** > **API & Webhooks** перейдите и найдите раздел API Settings.

Выберите опцию **Enable API** (Включить API), так как она необходима для того, чтобы это соединение заработало.

![API ve Webhook ayarları ile API Ayarları ve Enable API seçenekleri](/img/admin/settings-api-webhooks.png)

API Key и API Secret полей üzerindeki **Copy to Clipboard** (Копировать в буфер обмена) знака нажимайте, а полученные значения в экране интеграции вставьте.

В поле URL введите полный URL вашей сети, включая протокол (HTTP или HTTPS).

![API Anahtarı, Gizli ve URL alanları ile Zapier entegrasyon ekranı](/img/admin/webhooks-list.png)

Далее перейти к следующему шагу нужно нажать кнопку **Yes, Continue** (Да, продолжить). Если все пройдет успешно, вас встретит ваш новый подключенный аккаунт! Нажмите **Continue** (Продолжить), чтобы создать новый триггер.

## Yeni Trigger Nasıl Oluşturulur

Теперь, когда ваш аккаунт подключен, вы увидите доступные события. Для этого туториала давайте выберем событие **payment_received** (получено платеж).

![Zapier trigger'da payment_received olayını seçme](/img/admin/webhooks-list.png)

Событие выбрано и вы нажимаете **continue** (продолжить), появится **test step** (тестовый шаг).

![Trigger için Zapier test adımı](/img/admin/webhooks-list.png)

На этом этапе Zapier проверит, сможет ли ваш Zap **fetch the specific payload to that event** (получить конкретную полезную нагрузку для этого события). В будущем событий того же типа будет отправлена информация со такой же структурой.

![Zapier trigger testi başarılı bir şekilde yüklenen faydalı yük ile](/img/admin/webhooks-list.png)

Bizim tutorialda test **успешно tamamlandı** ve örnek bilgi yükünü döndürdü. Bu örnek bilgiler, eylemler oluştururken bize yol göstermesi için faydalı olacak. Tetikleyiciniz artık oluşturuldu ve diğer uygulamalarla bağlantı kurmaya hazır.

## Eylem (Action) Nasıl Oluşturulur

Eylemler, ağınızda yeni kayıtlar oluşturmak için diğer tetikleyicilerden bilgi kullanır.

**Bir eylem adımı oluştururken**, Ultimate Multisite **Beta**'yı ve **Ultimate Multisite üzerinde öğeler oluşturma** seçeneğini seçeceksiniz.

![Create Items on Ultimate Multisite ile bir eylem oluşturma](/img/admin/webhooks-list.png)

Son adımda ya **Başlatma (How to start)** kısmında yaptığımız gibi kendi kimlik doğrulamanızı oluşturursunuz ya da oluşturulmuş bir kimlik doğrulamayı seçersiniz. Bu tutorial'da daha önce oluşturduğumuz aynı kimlik doğrulamayı seçeceğiz.

![Zapier eylemi için kimlik doğrulama seçme](/img/admin/webhooks-list.png)

### Eylemi Ayarlama

Bu, **eylemin ana adımıdır** ve burada işler biraz farklıdır. İlk seçeceğiniz bilgi **Öğe (Item)** olacaktır. Öğe, ağınızdaki **Müşteriler (Customers), Ödemeler (Payments), Siteler (Sites), E-postalar (Emails)** ve diğerleri gibi bir **bilgi modelidir**.

![Zapier eylemi için öğe türü seçme](/img/admin/webhooks-list.png)

Bir öğe seçtiğinizde, form seçeceğiniz öğe için gerekli olan ve isteğe bağlı alanları size yeniden düzenleyecektir.

Örneğin, **Müşteri (Customer)** öğesini seçtiğinizde, form alanları ağda yeni bir Müşteri oluşturmak için doldurmanız gereken her şeyi getirecektir.

![Zapier eylemi kurulumunda Müşteri öğesi alanları](/img/admin/webhooks-list.png)

**Gerekli (required)** olarak işaretlenmiş tüm alanları doldurduktan ve devam etmeye tıkladıktan sonra, size doldurulmuş alanları ve boş bırakılan alanları gösteren son bir ekran gelecektir.

![Zapier aksiy testini göstərən şəkil, doldurulmuş və boş sahələr](/img/admin/webhooks-list.png)

Testiniz başa çatdı və uğurlu olduysa, sizin aksiyanız konfiqurasiya edilmiş demektir. Ayrıca ağınızda kontrol etmek de önemlidir ki, bu öğe sizin aksiyonunuzun testiyle oluşturulmuş olsun.
