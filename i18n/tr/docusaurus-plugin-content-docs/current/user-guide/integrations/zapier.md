---
title: Zapier Entegrasyonu
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite'ı Zapier ile Entegre Etme

Makalelerimizden birinde [Webhooks](webhooks.md) konusunu ve bunların 3. parti uygulamalarla entegrasyon için nasıl kullanılabileceğini ele almıştık.

Webhook kullanımı biraz karmaşıktır çünkü kodlama ve payload yakalama konusunda ileri düzey bilgi gerektirir. **Zapier** kullanmak bu zorluğu aşmanın bir yoludur.

Zapier, 5000'den fazla uygulama ile entegrasyon sunarak farklı uygulamalar arasındaki iletişimi kolaylaştırır.

Ağınızda olaylar gerçekleştiğinde tetiklenecek **Trigger'lar** oluşturabilir (örneğin bir hesap oluşturulduğunda account_create olayını tetikler) veya harici olaylara tepki olarak ağınızda **Action'lar** üretebilirsiniz (örneğin Ultimate Multisite ağınızda yeni bir hesap üyeliği oluşturmak).

Bu mümkündür çünkü **Ultimate Multisite Zapier trigger'ları** ve action'ları [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından desteklenmektedir.

## Nasıl Başlanır

İlk olarak, Zapier uygulama listesinde Ultimate Multisite'ı arayın. Alternatif olarak, [bu bağlantıya](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Dashboard'unuza gidin ve yeni bir Zap kurmak için sol kenar çubuğundaki **+** **Create Zap** düğmesine basın.

![Create Zap düğmeli Zapier dashboard](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürüm seçeneğini seçmek için tıklayın.

![Zapier uygulama listesinde WP Ultimo araması](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra mevcut olayı seçin: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger'ını seçme](/img/admin/webhooks-list.png)

Şimdi Zapier'a **ağınıza** erişim vermemiz gerekiyor. **Sign in**'e tıklamak **API kimlik bilgilerini** gerektiren yeni bir pencere açacaktır.

![API kimlik bilgileri için Zapier Sign in istemi](/img/admin/webhooks-list.png)

Ağ yönetici panelinize gidin ve **Ultimate Multisite > Settings** > **API & Webhooks** bölümüne gidip API Settings kısmını bulun.

Bu bağlantının çalışması için gerekli olan **Enable API** seçeneğini işaretleyin.

![Ultimate Multisite'ta Enable API seçeneği ile API Settings](/img/admin/webhooks-list.png)

API Key ve API Secret alanlarındaki **Copy to Clipboard** simgesini kullanın ve bu değerleri entegrasyon ekranına yapıştırın.

URL alanına, protokol dahil (HTTP veya HTTPS) ağınızın tam URL'sini girin.

![API Key, Secret ve URL alanlarıyla Zapier entegrasyon ekranı](/img/admin/webhooks-list.png)

Bir sonraki adıma geçmek için **Yes, Continue** düğmesine tıklayın. Her şey yolunda giderse, yeni bağlanan hesabınızla karşılaşacaksınız! Yeni bir trigger oluşturmak için **Continue**'ya tıklayın.

## Yeni Bir Trigger Nasıl Oluşturulur

Hesabınız bağlandığına göre artık mevcut olayları görebilirsiniz. Bu eğitim için **payment_received** olayını seçelim.

![Zapier trigger'ında payment_received olayını seçme](/img/admin/webhooks-list.png)

Olay seçildikten ve **continue**'ya tıkladıktan sonra bir **test adımı** görünecektir.

![Trigger için Zapier test adımı](/img/admin/webhooks-list.png)

Bu aşamada Zapier, Zap'inizin **o olaya özgü payload'ı alıp alamayacağını** test edecektir. Aynı türdeki gelecek olaylarda bu yapıyla aynı bilgiler gönderilecektir.

![Payload ile başarıyla tamamlanan Zapier trigger testi](/img/admin/webhooks-list.png)

Eğitimimizde test **başarıyla tamamlandı** ve örnek payload bilgisini döndürdü. Bu örnek bilgi, action'lar oluştururken bize rehberlik edecektir. Trigger'ınız artık oluşturuldu ve diğer uygulamalara bağlanmaya hazır.

## Action'lar Nasıl Oluşturulur

Action'lar, ağınızda yeni kayıtlar oluşturmak için diğer trigger'lardan gelen bilgileri kullanır.

**Action oluşturma adımında** Ultimate Multisite **Beta**'yı ve **Create Items on Ultimate Multisite** seçeneğini seçeceksiniz.

![Create Items on Ultimate Multisite ile action oluşturma](/img/admin/webhooks-list.png)

Bir sonraki adımda, **Nasıl Başlanır** bölümünde yaptığımız gibi kimlik doğrulamanızı oluşturacak veya daha önce oluşturulmuş bir kimlik doğrulamayı seçeceksiniz. Bu eğitimde daha önce oluşturduğumuz kimlik doğrulamayı seçeceğiz.

![Zapier action için kimlik doğrulama seçimi](/img/admin/webhooks-list.png)

### Action'ı Yapılandırma

Bu, action'ın **ana adımıdır** ve burada işler biraz farklıdır. Seçeceğiniz ilk bilgi **Item**'dır. Item, ağınızdaki **Customers, Payments, Sites, Emails** ve diğerleri gibi **bilgi modelidir**.

![Zapier action için Item türü seçimi](/img/admin/webhooks-list.png)

Bir item seçildiğinde, form **seçilen item için gerekli ve isteğe bağlı alanları getirmek üzere yeniden düzenlenecektir**.

Örneğin, **Customer** item'ı seçildiğinde, form alanları ağda yeni bir Customer oluşturmak için doldurulması gereken her şeyi getirecektir.

![Zapier action kurulumunda Customer item alanları](/img/admin/webhooks-list.png)

**required** olarak işaretlenmiş tüm alanları doldurduktan ve continue'ya tıkladıktan sonra, son bir ekran size doldurulan alanları ve boş bırakılan alanları gösterecektir.

![Doldurulmuş ve doldurulmamış alanları gösteren Zapier action testi](/img/admin/webhooks-list.png)

Testiniz tamamlandığında ve başarılı olduğunda action'ınız yapılandırılmış demektir. Action testinizle item'ın oluşturulup oluşturulmadığını ağınızda kontrol etmeniz de önemlidir.
