---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite'ı Zapier ile Entegre Etme

Bir makalemizde [Webhooks](webhooks.md) hakkında konuşmuştuk ve bunların üçüncü taraf uygulamalarla nasıl entegre edilebileceğini anlatmıştık.

Webhooks kullanmak biraz karmaşık olabilir çünkü kodlama ve payload yakalama konusunda ileri düzey bilgi gerektirir. **Zapier** kullanmak ise bu zorluğu aşmanız için bir yol sunuyor.

Zapier, 5000'den fazla uygulamayla entegrasyona sahip olduğu için farklı uygulamalar arasındaki iletişimi çok daha kolay hale getiriyor.

Ağınızda bir olay gerçekleştiğinde tetiklenecek **Triggers** oluşturabilir veya harici olaylara tepki veren **Actions** oluşturabilirsiniz (örneğin, Ultimate Multisite ağınızda yeni bir üyelik hesabı oluşturmak).

Bu mümkün çünkü **Ultimate Multisite Zapier'ın triggers** ve actions'ı [REST API](https://developer.ultimatemultisite.com/api/docs/) tarafından destekleniyor.

## Nasıl Başlanır

Öncelikle, Zapier uygulama listesinde Ultimate Multisite'ı arayın. Alternatif olarak, [bu linke](https://zapier.com/apps/wp-ultimo/integrations) tıklayabilirsiniz.

Dashboard'ınıza gidin ve yeni bir Zap oluşturmak için sol kenar çubuğundaki **+ Create Zap** düğmesine basın.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Zap oluşturma sayfasına yönlendirileceksiniz.

Arama kutusuna "wp ultimo" yazın. **Beta** sürüm seçeneğine tıklayarak seçin.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Uygulamamızı seçtikten sonra, mevcut olayı seçin: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Şimdi Zapier'a **ağınıza** erişim vermemiz gerekiyor. **Sign in**'e tıklamak, **API credentials** gerektiren yeni bir pencere açacaktır.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Ağ yöneticisi panelinize gidin ve **Ultimate Multisite > Settings** > **API & Webhooks** yolunu izleyerek API Settings bölümünü bulun.

Bu bağlantının çalışması için gerekli olan **Enable API** seçeneğini işaretleyin.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

API Key ve API Secret alanlarındaki **Copy to Clipboard** simgesini kullanarak bu değerleri entegrasyon ekranına yapıştırın.

URL alanına, protokolü (HTTP veya HTTPS) içeren ağınızın tam URL'sini girin.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Sonraki adıma geçmek için **Yes, Continue** düğmesine tıklayın. Her şey yolunda giderse, yeni bağlı hesabınızla karşılaşmalısınız! Yeni bir trigger oluşturmak için **Continue**'a tıklayın.

## Yeni Bir Trigger Nasıl Oluşturulur

Hesabınız bağlandığına göre, mevcut olayları görebilirsiniz. Bu eğitim için **payment_received** olayını seçelim.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Olay seçilip **continue**'a tıkladığınızda, bir **test adımı** görünecektir.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Bu aşamada Zapier, Zap'ınızın bu olaya ait **belirli payload'ı alıp alamayacağını** test edecektir. Aynı türdeki gelecekteki olaylarda, bu yapıyla birlikte bilgi gönderilecektir.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Eğitimimizde test **başarıyla tamamlandı** ve payload örnek bilgisini döndürdü. Bu örnek bilgi, actions oluştururken bize yol göstermesi açısından faydalı olacaktır. Trigger'ınız artık oluşturuldu ve diğer uygulamalara bağlanmaya hazır.

## Actions Nasıl Oluşturulur

Actions, ağınızda yeni girişler oluşturmak için diğer trigger'lardan gelen bilgileri kullanır.

**creating an action step** aşamasında, Ultimate Multisite **Beta**'yı ve **Create Items on Ultimate Multisite** seçeneğini seçeceksiniz.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Bir sonraki adımda ya kimlik doğrulamayı (authentication) yapacaksınız, tıpkı **Nasıl Başlanır** bölümünde yaptığımız gibi, ya da oluşturulmuş bir kimlik doğrulama seçeceksiniz. Bu eğitimde daha önce oluşturduğumuz aynı kimlik doğrulamasını seçeceğiz.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action'ı Ayarlama

Bu, **action'ın ana adımıdır** ve burada işler biraz farklıdır. Seçmeniz gereken ilk bilgi **Item**'dır. Item, **Customers, Payments, Sites, Emails** gibi ağınızın **bilgi modelidir**.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Bir item seçerken, form, seçilen item için gerekli ve isteğe bağlı alanları getirecek şekilde **yeniden düzenlenecektir**.

Örneğin, **Customer** item'ını seçtiğinizde, form alanları ağda yeni bir Müşteri oluşturmak için gerekli olan her şeyi getirecektir.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Tüm **required** (zorunlu) olarak işaretlenmiş alanları doldurup devam düğmesine tıkladıktan sonra, son bir ekran size doldurulmuş alanları ve boş bırakılan alanları gösterecektir.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Testiniz başarılı bir şekilde tamamlandığı anda action'ınız yapılandırılmış olur. Ayrıca, action testinizle item'ın ağınızda oluşturulup oluşturulmadığını kontrol etmek de önemlidir.
