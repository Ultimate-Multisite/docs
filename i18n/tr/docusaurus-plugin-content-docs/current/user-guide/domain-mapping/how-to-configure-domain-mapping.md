---
title: Domain Mapping Nasıl Yapılandırılır
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Alan Eşleme Nasıl Yapılandırılır (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x için geçerlidir.**_

Premium bir ağın en güçlü özelliklerinden biri, müşterilerimize sitelerine üst düzey bir alan adı bağlama imkanı sunabilmektir. Sonuçta hangisi daha profesyonel görünüyor: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) mu yoksa [_**joesbikeshop.com**_](http://joesbikeshop.com) mu? İşte bu yüzden Ultimate Multisite, üçüncü taraf eklentilere ihtiyaç duymadan bu özelliği yerleşik olarak sunar.

## Alan eşleme nedir?

Adından da anlaşılacağı gibi alan eşleme, Ultimate Multisite'ın sunduğu ve özel bir alan adı için gelen isteği alıp, o alan adının bağlı olduğu ağdaki ilgili siteye yönlendirme özelliğidir.

### Ultimate Multisite Ağınızda alan eşleme nasıl kurulur

Alan eşlemenin çalışması için tarafınızda bazı ayarlamalar yapılması gerekir. Neyse ki Ultimate Multisite, zor işleri sizin için otomatikleştirerek gereksinimleri kolayca karşılamanızı sağlar.

Ultimate Multisite kurulumu sırasında, sihirbaz **sunrise.php** dosyasını otomatik olarak belirtilen klasöre kopyalar ve yükler. **Sihirbaz, bu adım tamamlanmadan devam etmenize izin vermez**.

![sunrise.php adımını gösteren Ultimate Multisite kurulum sihirbazı](/img/config/settings-domain-mapping.png)

Bu, Ultimate Multisite kurulum sihirbazı ağınızı kurmayı tamamladığında, özel alan adını hemen eşlemeye başlayabileceğiniz anlamına gelir.

Ultimate Multisite'ta alan eşlemenin zorunlu olmadığını unutmayın. WordPress Multisite'ın yerleşik alan eşleme işlevini veya başka herhangi bir alan eşleme çözümünü kullanma seçeneğiniz vardır.

Diğer alan eşleme çözümlerine yer açmak için Ultimate Multisite alan eşlemesini devre dışı bırakmanız gerekirse, bu özelliği **Ultimate Multisite > Settings > Domain Mapping** altından devre dışı bırakabilirsiniz.

![Etkinleştirme düğmeli Alan Eşleme ayarları](/img/config/settings-domain-mapping.png)

Bu seçeneğin hemen altında **Force Admin Redirect** seçeneğini de görebilirsiniz. Bu seçenek, müşterilerinizin yönetici panellerine hem özel alan adlarından hem de alt alan adlarından mı yoksa sadece birinden mi erişebileceklerini kontrol etmenizi sağlar.

**Force redirect to mapped domain** seçeneğini seçerseniz, müşterileriniz yönetici panellerine yalnızca özel alan adlarından erişebilir.

**Force redirect to network domain** seçeneği tam tersini yapar - müşterileriniz özel alan adlarından giriş yapmaya çalışsalar bile yalnızca alt alan adlarından panellerine erişebilirler.

Ve **Allow access to the admin by both mapped domain and network domain** seçeneği, hem alt alan adından hem de özel alan adından yönetici panellerine erişmelerine olanak tanır.

![Alan eşleme için Force Admin Redirect seçenekleri](/img/config/settings-domain-mapping.png)

Özel alan adı eşlemenin iki yolu vardır. Birincisi, süper yönetici olarak ağ yönetici panelinizden alan adını eşlemek, ikincisi ise hesap sayfası altındaki alt site yönetici panelinden eşlemektir.

Ancak özel alan adını ağınızdaki alt sitelerden birine eşlemeye başlamadan önce, alan adının **DNS ayarlarının** düzgün yapılandırıldığından emin olmanız gerekir.

### 

### Alan adı DNS ayarlarının düzgün yapılandırıldığından emin olmak

Eşlemenin çalışması için, eşlemeyi planladığınız alan adının Ağınızın IP adresine yönlendirildiğinden emin olmanız gerekir. Ağ IP adresine ihtiyacınız olduğunu unutmayın - Ultimate Multisite'ın kurulu olduğu alan adının IP adresi - eşlemek istediğiniz özel alan adının IP adresi değil. Belirli bir alan adının IP adresini aramak için örneğin [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) sitesini kullanmanızı öneririz.

Alan adını doğru şekilde eşlemek için, **DNS** yapılandırmanıza o **IP adresine** yönlenen bir **A RECORD** eklemeniz gerekir. DNS yönetimi farklı alan adı kayıt firmaları arasında büyük farklılıklar gösterir, ancak "_XXXX'te A Record Oluşturma_" şeklinde arama yaparsanız (XXXX yerine alan adı kayıt firmanızın adını yazın, örneğin: "_GoDaddy'de A Record Oluşturma_") bunu anlatan birçok çevrimiçi rehber bulabilirsiniz.

Bunu çalıştırmakta sorun yaşıyorsanız, **alan adı kayıt firmanızın desteğiyle iletişime geçin** ve bu konuda size yardımcı olabilirler.

Müşterilerinizin kendi alan adlarını eşlemelerine izin vermeyi planlıyorsanız, bu kısmı kendilerinin yapması gerekecektir. A Record oluşturamadıkları takdirde onları kayıt firmalarının destek sistemine yönlendirin.

### Süper Yönetici olarak özel alan adı eşleme

Ağınızda süper yönetici olarak giriş yaptığınızda, **Ultimate Multisite > Domains** altına giderek özel alan adlarını kolayca ekleyebilir ve yönetebilirsiniz.

![Ultimate Multisite'taki alan adları listesi sayfası](/img/admin/domains-list.png)

Bu sayfada, üstteki **Add Domain** düğmesine tıklayabilirsiniz ve bu, **özel alan adını**, özel alan adını uygulamak istediğiniz **alt siteyi** ayarlayabileceğiniz ve **birincil alan adı** olarak belirleyip belirlemeyeceğinize karar verebileceğiniz bir modal pencere açacaktır (bir **alt siteye birden fazla alan adı eşleyebileceğinizi** unutmayın).

![Alan adı ve site alanlarını içeren Alan Adı Ekle modal penceresi](/img/admin/domains-list.png)

Tüm bilgileri girdikten sonra, alttaki **Add Existing Domain** düğmesine tıklayabilirsiniz.

Bu, özel alan adının DNS bilgilerini doğrulama ve getirme sürecini başlatacaktır. Sayfanın altında geçtiği süreci takip edebileceğiniz bir günlük de göreceksiniz. Bu süreç birkaç dakika sürebilir.

Her şey düzgün ayarlanmışsa **Stage** veya durum **Checking DNS**'den **Ready**'ye değişmelidir.

![Checking DNS'den Ready'ye değişen alan adı durumu](/img/admin/domains-list.png)

![Alan adları listesinde Ready durumundaki alan adı](/img/admin/domains-list.png)

Alan adına tıklarsanız, içindeki bazı seçenekleri görebilirsiniz. Bunlara hızlıca bir göz atalım:

![Stage, site, active ve SSL seçeneklerini gösteren alan adı detay sayfası](/img/admin/domains-list.png)

**Stage:** Alan adının bulunduğu aşamadır. Alan adını ilk eklediğinizde, muhtemelen **Checking DNS** aşamasında olacaktır. Süreç DNS kayıtlarını kontrol edecek ve doğru olduklarını onaylayacaktır. Ardından alan adı **Checking SSL** aşamasına geçecektir. Ultimate Multisite, alan adının SSL'i olup olmadığını kontrol edecek ve alan adınızı **Ready** veya **Ready (without SSL)** olarak kategorize edecektir.

**Site:** Bu alan adıyla ilişkilendirilmiş alt alan adıdır. Eşlenen alan adı bu belirli sitenin içeriğini gösterecektir.

**Active:** Alan adını etkinleştirmek veya devre dışı bırakmak için bu seçeneği açıp kapatabilirsiniz.

**Is Primary Domain?:** Müşterilerinizin her site için birden fazla eşlenmiş alan adı olabilir. Bunun belirli site için birincil alan adı olup olmadığını seçmek için bu seçeneği kullanın.

**Is Secure?:** Ultimate Multisite, alan adını etkinleştirmeden önce SSL sertifikası olup olmadığını kontrol etse de, alan adını SSL sertifikasıyla veya sertifikasız yüklemek için manuel olarak seçim yapabilirsiniz. Web sitesinin SSL sertifikası yoksa ve SSL ile zorla yüklemeye çalışırsanız, hatalarla karşılaşabileceğinizi unutmayın.

### Alt site kullanıcısı olarak özel alan adı eşleme

Alt site yöneticileri de alt site yönetici panellerinden özel alan adlarını eşleyebilirler.

Öncelikle, **Domain mapping** ayarları altında bu seçeneği etkinleştirdiğinizden emin olmanız gerekir. Aşağıdaki ekran görüntüsüne bakın.

![Alt site kullanıcılarının alan adı eşlemesine izin veren alan eşleme ayarları](/img/config/settings-domain-mapping.png)

Bu seçeneği **Ultimate Multisite > Products** altındaki **Plan** düzeyinde veya ürün seçeneklerinde de ayarlayabilir veya yapılandırabilirsiniz.

![Ürün ayarlarındaki özel alan adları seçeneği](/img/config/settings-domain-mapping.png)

Bu seçeneklerden herhangi biri etkinleştirildiğinde ve bir alt site kullanıcısının özel alan adlarını eşlemesine izin verildiğinde, alt site kullanıcısı **Account** sayfasında **Domains** adlı bir metabox görmelidir.

![Alt site hesap sayfasındaki Domains metabox'ı](/img/admin/domains-list.png)

Kullanıcı **Add Domain** düğmesine tıklayabilir ve bazı talimatlar içeren bir modal pencere açılır.

![Alt site kullanıcıları için DNS talimatlarını içeren Alan Adı Ekle modal penceresi](/img/admin/domains-list.png)

Kullanıcı daha sonra **Next Step**'e tıklayıp özel alan adını eklemeye devam edebilir. Ayrıca bunun birincil alan adı olup olmayacağını da seçebilir.

![Birincil alan adı seçeneğiyle özel alan adı ekleme alanı](/img/admin/domains-list.png)

![DNS doğrulamasını başlatmak için Add Domain'e tıklayın](/img/admin/domains-list.png)**Add Domain**'e tıklamak, özel alan adının DNS bilgilerini doğrulama ve getirme sürecini başlatacaktır.

### Alan Adı Senkronizasyonu Hakkında

Alan Adı Senkronizasyonu, Ultimate Multisite'ın **alan eşlemenin çalışması için** özel alan adını hosting hesabınıza ek alan adı olarak eklediği bir süreçtir.

Hosting sağlayıcınızın Ultimate Multisite alan eşleme özelliğiyle entegrasyonu varsa alan adı senkronizasyonu otomatik olarak gerçekleşir. Şu anda bu hosting sağlayıcıları _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ ve _Cpanel_'dir.

Bu entegrasyonu Ultimate Multisite ayarlarında **Integration** sekmesi altından etkinleştirmeniz gerekecektir.

![Ultimate Multisite ayarlarındaki Integration sekmesi](/img/config/settings-domain-mapping.png)

![Alan adı senkronizasyonu için hosting sağlayıcı entegrasyon ayarları](/img/config/settings-domain-mapping.png)

_Hosting sağlayıcınız yukarıda belirtilen sağlayıcılardan biri değilse, **alan adını hosting hesabınıza manuel olarak senkronize etmeniz veya eklemeniz gerekecektir**._
