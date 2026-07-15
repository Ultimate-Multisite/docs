---
title: Zapier Entegrasyonu
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite'i Zapier ile Entegre Etme

Makalelerden birinde [Webhooks](webhooks.md) konusunu ve bunların 3. taraf uygulamalarla entegrasyon için nasıl kullanılabileceğini ele aldık.

Webhooks kullanmak, kodlama ve payload yakalama konusunda ileri düzey bilgi gerektirdiği için biraz karmaşıktır. **Zapier** kullanmak, bunu aşmanın bir yoludur.

Zapier, 5000'den fazla uygulamayla entegrasyona sahiptir; bu da farklı uygulamalar arasındaki iletişimi kolaylaştırır.

Ağınızda olaylar gerçekleştiğinde tetiklenecek **Triggers** oluşturabilir (ör. bir hesap oluşturulur ve account_create event'ini tetikler) veya harici olaylara tepki olarak ağınızda **Actions** oluşturabilirsiniz (ör. Ultimate Multisite ağınızda yeni bir hesap üyeliği oluşturmak).

Bu, **Ultimate Multisite Zapier's triggers** ve actions öğelerinin [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından desteklenmesi sayesinde mümkündür.

## Nasıl başlanır {#how-to-start}

Öncelikle Zapier uygulama listesinde Ultimate Multisite'i arayın. Alternatif olarak [bu bağlantıya](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Dashboard'unuza gidin ve yeni bir Zap kurmak için sol kenar çubuğundaki **+** **Create Zap** düğmesine basın.

![Create Zap düğmeli Zapier dashboard'u](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürüm seçeneğini seçmek için tıklayın.

![Zapier uygulama listesinde WP Ultimo arama](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra mevcut event'i seçin: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger'ını seçme](/img/admin/webhooks-list.png)

Şimdi Zapier'e **ağınıza** erişim vermemiz gerekiyor. **Sign in** seçeneğine tıklamak, **API credentials** isteyen yeni bir pencere açacaktır.

![API credentials için Zapier Sign in istemi](/img/admin/webhooks-list.png)

Ağ yönetici panelinize gidin ve **Ultimate Multisite > Settings** > **API & Webhooks** yolunu izleyip API Settings bölümünü bulun.

Bu bağlantının çalışması için gerekli olduğundan **Enable API** seçeneğini seçin.

![API Settings ve Enable API seçenekleriyle API and Webhooks ayarları](/img/admin/settings-api-webhooks.png)

API Key ve API Secret alanlarındaki **Copy to Clipboard** simgesini kullanın ve bu değerleri entegrasyon ekranına yapıştırın.

URL alanına, protokol (HTTP veya HTTPS) dahil olmak üzere ağınızın tam URL'sini girin.

![API Key, Secret ve URL alanlarıyla Zapier entegrasyon ekranı](/img/admin/webhooks-list.png)

Sonraki adıma geçmek için **Yes, Continue** düğmesine tıklayın. Her şey yolunda giderse yeni bağlanan hesabınızla karşılanmalısınız! Yeni bir trigger oluşturmak için **Continue**'ya tıklayın.

## Yeni bir Trigger nasıl oluşturulur {#how-to-create-a-new-trigger}

Artık hesabınız bağlı olduğuna göre mevcut event'leri görebilirsiniz. Bu eğitim için **payment_received** event'ini seçelim.

![Zapier trigger'ında payment_received event'ini seçme](/img/admin/webhooks-list.png)

Event seçildikten ve **continue** seçeneğine tıkladıktan sonra bir **test step** görünecektir.

![Trigger için Zapier test adımı](/img/admin/webhooks-list.png)

Bu aşamada Zapier, Zap'inizin **bu event'e ait belirli payload'u getirip getiremeyeceğini** test eder. Aynı türdeki gelecekteki event'lerde, aynı yapıya sahip bilgiler gönderilecektir.

![Payload ile başarıyla tamamlanan Zapier trigger testi](/img/admin/webhooks-list.png)

Eğitimimizde test **başarıyla tamamlandı** ve payload örnek bilgilerini döndürdü. Bu örnek bilgiler, actions oluştururken bize rehberlik etmek için yararlı olacaktır. Trigger'ınız artık oluşturuldu ve diğer uygulamalara bağlanmaya hazır.

## Actions nasıl oluşturulur {#how-to-create-actions}

Actions, ağınızda yeni kayıtlar oluşturmak için diğer trigger'lardan gelen bilgileri kullanır.

**Action oluşturma adımında** Ultimate Multisite **Beta** ve **Create Items on Ultimate Multisite** seçeneğini seçeceksiniz.

![Create Items on Ultimate Multisite ile action oluşturma](/img/admin/webhooks-list.png)

Sonraki adımda, tıpkı **Nasıl başlanır** bölümünde yaptığımız gibi kimlik doğrulamanızı oluşturacak ya da oluşturulmuş bir kimlik doğrulama seçeceksiniz. Bu eğitimde daha önce oluşturulan aynı kimlik doğrulamayı seçeceğiz.

![Zapier action için kimlik doğrulama seçme](/img/admin/webhooks-list.png)

### Action'ı ayarlama {#setting-up-the-action}

Bu, **action'ın ana adımıdır** ve burada işler biraz farklıdır. Seçeceğiniz ilk bilgi **Item** olacaktır. Item, ağınızın **bilgi modelidir**; örneğin **Customers, Payments, Sites, Emails** ve diğerleri.

![Zapier action için Item türünü seçme](/img/admin/webhooks-list.png)

Bir item seçildiğinde, form seçilen item için **gerekli ve isteğe bağlı alanları getirmek üzere yeniden düzenlenir**.

Örneğin **Customer** item'ı seçildiğinde, form alanları ağda yeni bir Customer oluşturmak için doldurulması gereken her şeyi getirir.

![Zapier action kurulumunda Customer item alanları](/img/admin/webhooks-list.png)

**required** olarak işaretlenen tüm alanları doldurup continue'ya tıkladıktan sonra, son bir ekran size doldurulan alanları ve boş bırakılan alanları gösterecektir.

![Doldurulan ve boş bırakılan alanları gösteren Zapier action testi](/img/admin/webhooks-list.png)

Testiniz tamamlanıp başarılı olur olmaz action'ınız yapılandırılmış olur. Action testinizle item'ın oluşturulup oluşturulmadığını ağınızda kontrol etmek de önemlidir.
