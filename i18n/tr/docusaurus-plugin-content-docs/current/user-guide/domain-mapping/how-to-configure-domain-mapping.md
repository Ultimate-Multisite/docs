---
title: Alan Adı Eşlemesi Nasıl Yapılandırılır
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Eşleme Nasıl Yapılandırılır (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x ile ilgilidir.**_

Premium bir ağın en güçlü özelliklerinden biri, müşterilerimize sitelerine üst düzey bir domain bağlama olanağı sunabilmesidir. Sonuçta hangisi daha profesyonel görünür: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) mi yoksa [_**joesbikeshop.com**_](http://joesbikeshop.com) mi? Bu yüzden Ultimate Multisite, üçüncü taraf plugin kullanma ihtiyacı olmadan bu özelliği yerleşik olarak sunar.

## Domain eşleme nedir? {#whats-domain-mapping}

Adından da anlaşılacağı gibi domain eşleme, Ultimate Multisite tarafından sunulan; özel bir domain için gelen isteği alıp bu isteği, ağda o belirli domainin bağlı olduğu ilgili siteye eşleme yeteneğidir.

### Ultimate Multisite Ağınızda domain eşleme nasıl kurulur? {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain eşlemenin çalışması için sizin tarafınızda bazı kurulumlar gerekir. Neyse ki Ultimate Multisite zor işi sizin için otomatikleştirir, böylece gereksinimleri kolayca karşılayabilirsiniz.

Ultimate Multisite kurulumu sırasında sihirbaz, **sunrise.php** dosyasını otomatik olarak belirlenen klasöre kopyalayıp kurar. **Bu adım tamamlanana kadar sihirbaz devam etmenize izin vermez**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Bu, Ultimate Multisite kurulum sihirbazı ağınızı kurmayı tamamladığında özel domain eşlemeye hemen başlayabileceğiniz anlamına gelir.

Ultimate Multisite içinde domain eşlemenin zorunlu olmadığını unutmayın. WordPress Multisite yerel domain eşleme işlevini veya başka herhangi bir domain eşleme çözümünü kullanma seçeneğiniz vardır.

Başka domain eşleme çözümlerine yer açmak için Ultimate Multisite domain eşlemeyi devre dışı bırakmanız gerekirse, bu özelliği **Ultimate Multisite > Ayarlar > Domain Eşleme** altında devre dışı bırakabilirsiniz.

![Yönetici yönlendirmesi, eşleme mesajı ve DNS seçeneklerini gösteren Domain Eşleme ayarları sayfası](/img/config/domain-mapping-settings.png)

Bu seçeneğin hemen altında **Yönetici Yönlendirmesini Zorla** seçeneğini de görebilirsiniz. Bu seçenek, müşterilerinizin yönetici Dashboard’larına hem özel domainleri hem de alt domainleri üzerinden mi, yoksa yalnızca bunlardan biri üzerinden mi erişebileceğini kontrol etmenizi sağlar.

**Eşlenmiş domaine yönlendirmeyi zorla** seçeneğini seçerseniz, müşterileriniz yönetici Dashboard’larına yalnızca özel domainleri üzerinden erişebilir.

**Ağ domainine yönlendirmeyi zorla** seçeneği tam tersini yapar - müşterileriniz, özel domainleri üzerinden oturum açmayı deneseler bile Dashboard’larına yalnızca alt domainleri üzerinden erişebilir.

Ve **Yöneticiye hem eşlenmiş domain hem de ağ domaini ile erişime izin ver** seçeneği, yönetici Dashboard’larına hem alt domain hem de özel domain üzerinden erişmelerine izin verir.

![Üç yönlendirme seçeneğini gösteren genişletilmiş Yönetici Yönlendirmesi açılır menüsü](/img/config/domain-mapping-redirect-options.png)

Özel bir domaini eşlemenin iki yolu vardır. İlki, domain adını ağ yönetici Dashboard’unuzdan süper yönetici olarak eşlemek; ikincisi ise Account sayfası altında alt site yönetici Dashboard’u üzerinden eşlemektir.

Ancak özel domaini ağınızdaki alt sitelerden birine eşlemeye başlamadan önce, domain adının **DNS ayarlarının** doğru şekilde yapılandırıldığından emin olmanız gerekir.

###

### Domain DNS ayarlarının doğru şekilde yapılandırıldığından emin olma {#making-sure-the-domain-dns-settings-are-properly-configured}

Bir eşlemenin çalışması için eşlemeyi planladığınız domainin Ağınızın IP adresine yönlendiğinden emin olmanız gerekir. Ağ IP adresine ihtiyacınız olduğunu unutmayın - Ultimate Multisite'in kurulu olduğu domainin IP adresi - eşlemek istediğiniz özel domainin IP adresi değil. Belirli bir domainin IP adresini aramak için örneğin [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) sitesine gitmenizi öneririz.

Domaini doğru şekilde eşlemek için **DNS** yapılandırmanızda o **IP adresine** yönlenen bir **A RECORD** eklemeniz gerekir. DNS yönetimi farklı domain kayıt kuruluşları arasında büyük ölçüde değişir, ancak domain kayıt kuruluşunuz XXXX olmak üzere " _XXXX üzerinde A Record Oluşturma_ " şeklinde arama yaparsanız bunu kapsayan çevrimiçi pek çok eğitim bulabilirsiniz (örn.: " _GoDaddy üzerinde A Record Oluşturma_ ").

Bunu çalıştırmakta zorlanırsanız, **domain kayıt kuruluşunuzun desteğiyle iletişime geçin**; bu kısımda size yardımcı olabilirler.

Müşterilerinizin kendi domainlerini eşlemesine izin vermeyi planlıyorsanız, bu kısımdaki işi kendileri yapmak zorunda kalırlar. A Record oluşturamadıklarını fark ederlerse onları kayıt kuruluşlarının destek sistemine yönlendirin.

### Özel domain adını Süper Yönetici olarak eşleme {#mapping-custom-domain-name-as-super-admin}

Ağınızda süper yönetici olarak oturum açtığınızda, **Ultimate Multisite > Domainler** altına giderek özel domain adlarını kolayca ekleyebilir ve yönetebilirsiniz.

![Ultimate Multisite içinde Domainler liste sayfası](/img/admin/domains-list.png)

Bu sayfanın altında, üstteki **Domain Ekle** düğmesine tıklayabilirsiniz; bu, **özel domain adını**, özel domain adını uygulamak istediğiniz **alt siteyi** ayarlayıp doldurabileceğiniz ve bunu **birincil domain** adı olarak ayarlamak isteyip istemediğinize karar verebileceğiniz bir modal pencere açar (bir **alt siteye birden fazla domain adı eşleyebileceğinizi** unutmayın).

![Domain adı, site seçici ve birincil domain anahtarını içeren Domain Ekle modalı](/img/admin/domain-add-modal.png)

Tüm bilgileri girdikten sonra alttaki **Mevcut Domaini Ekle** düğmesine tıklayabilirsiniz.

Bu, özel domainin DNS bilgilerini doğrulama ve alma sürecini başlatır. Ayrıca sayfanın altında, sürecin hangi aşamalardan geçtiğini takip edebilmeniz için bir günlük de görürsünüz. Bu sürecin tamamlanması birkaç dakika sürebilir.

Ultimate Multisite v2.13.0 ayrıca, yeni bir site site başına domain olarak ele alınması gereken bir host üzerinde oluşturulduğunda dahili domain kaydını otomatik olarak oluşturur. Host, ağın birincil domain'i veya bir **Site URL** alanında yapılandırılmış paylaşılan ödeme formu temel domain'lerinden biriyse, otomatik eşlenmiş-domain kaydı atlanır; böylece paylaşılan temel domain, onu kullanan her site için kullanılabilir kalır.

Bir müşteri Domain Seller v1.3.0 veya daha yeni bir sürüm üzerinden yeni bir domain kaydettiğinde, Ultimate Multisite varsayılan olarak kayıtlı domain'i müşterinin ağ sitesine otomatik olarak eşler. Yöneticilerin, birincil-domain bayrağı, etkinleştirme durumu veya SSL işleme gibi seçenekleri ayarlamak istemedikleri sürece başarılı bir kayıttan sonra artık ayrı bir eşlenmiş-domain kaydı eklemeleri gerekmez.

Her şey düzgün şekilde ayarlanmışsa **Aşama** veya durum **DNS Kontrol Ediliyor** değerinden **Hazır** değerine değişmelidir.

<!-- Ekran görüntüsü mevcut değil: Domain listesinde DNS Kontrol Ediliyor aşamasını gösteren domain satırı -->

<!-- Ekran görüntüsü mevcut değil: Yeşil durum göstergesiyle Hazır aşamasını gösteren domain satırı -->

Domain adına tıklarsanız, içinde bazı seçenekleri görebilirsiniz. Bunlara hızlıca bakalım:

![Aşama, site, aktif, birincil ve SSL anahtarları bulunan domain detay sayfası](/img/admin/domain-edit.png)

**Aşama:** Bu, domain'in bulunduğu aşamadır. Domain'i ilk eklediğinizde muhtemelen **DNS Kontrol Ediliyor** aşamasında olacaktır. Süreç, DNS kayıtlarını kontrol edecek ve doğru olduklarını onaylayacaktır. Ardından domain **SSL Kontrol Ediliyor** aşamasına alınacaktır. Ultimate Multisite, domain'in SSL sahibi olup olmadığını kontrol edecek ve domain'inizi **Hazır** veya **Hazır (SSL olmadan)** olarak kategorize edecektir.

**Site:** Bu domain ile ilişkilendirilmiş alt domain. Eşlenmiş domain, bu belirli sitenin içeriğini gösterecektir.

**Aktif:** Domain'i etkinleştirmek veya devre dışı bırakmak için bu seçeneği açıp kapatabilirsiniz.

**Birincil Domain mi?:** Müşterileriniz her site için birden fazla eşlenmiş domain'e sahip olabilir. Bunun belirli site için birincil domain olup olmadığını seçmek üzere bu seçeneği kullanın.

**Güvenli mi?:** Ultimate Multisite, domain'i etkinleştirmeden önce domain'in SSL sertifikası olup olmadığını kontrol etse de, domain'i SSL sertifikasıyla veya SSL sertifikası olmadan yüklemeyi manuel olarak seçebilirsiniz. Web sitesinin SSL sertifikası yoksa ve onu SSL ile zorla yüklemeye çalışırsanız hatalar verebileceğini unutmayın.

### Özel domain adını alt site kullanıcısı olarak eşleme {#mapping-custom-domain-name-as-subsite-user}

Alt site yöneticileri de özel domain adlarını alt site admin Dashboard'larından eşleyebilir.

Öncelikle, bu seçeneği **Domain eşleme** ayarları altında etkinleştirdiğinizden emin olmanız gerekir. Aşağıdaki ekran görüntüsüne bakın.

<!-- Ekran görüntüsü mevcut değil: Alt site kullanıcılarının Müşteri DNS Yönetimi anahtarı aracılığıyla domain eşlemesine izin veren Domain eşleme ayarları -->

Bu seçeneği **Plan** düzeyinde veya **Ultimate Multisite > Products** üzerindeki ürün seçeneklerinde de ayarlayabilir ya da yapılandırabilirsiniz.

![Ürün düzenleme sayfasındaki Özel Domainler bölümü](/img/config/product-custom-domains.png)

Bu seçeneklerden herhangi biri etkinleştirildiğinde ve bir alt site kullanıcısının özel domain adlarını eşlemesine izin verildiğinde, alt site kullanıcısı **Account** sayfası altında **Domainler** adlı bir metabox görmelidir.

<!-- Ekran görüntüsü mevcut değil: Alt site Account sayfasında Domain Ekle düğmesi bulunan Domainler metabox'ı -->

Kullanıcı **Domain Ekle** düğmesine tıklayabilir; bu, bazı talimatlar içeren bir modal pencere açacaktır.

<!-- Ekran görüntüsü mevcut değil: Alt site kullanıcıları için DNS A kaydı talimatlarını gösteren Domain Ekle modalı -->

Kullanıcı daha sonra **Sonraki Adım** seçeneğine tıklayabilir ve özel domain adını eklemeye devam edebilir. Bunun birincil domain olup olmayacağını da seçebilir.

<!-- Ekran görüntüsü mevcut değil: Özel domain adı alanı ve birincil domain anahtarı bulunan Domain Ekle formu -->

<!-- Ekran görüntüsü mevcut değil: DNS doğrulamasını tetikleyen Domain Ekle onay adımı -->

**Domain Ekle** seçeneğine tıklamak, özel domain'in DNS bilgilerini doğrulama ve getirme sürecini başlatacaktır.

### Domain Senkronizasyonu Hakkında {#about-domain-syncing}

Domain Senkronizasyonu, Ultimate Multisite'ın özel domain adını hosting hesabınıza eklenti domain olarak eklediği bir süreçtir; **bu, domain eşlemenin çalışması içindir**.

Hosting sağlayıcınızın Ultimate Multisite domain eşleme özelliğiyle entegrasyonu varsa domain senkronizasyonu otomatik olarak gerçekleşir. Şu anda bu hosting sağlayıcıları _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ve _Cpanel_'dir.

Bir host sağlayıcı entegrasyonu aktif olduğunda, Ultimate Multisite yeni oluşturulan siteler için sağlayıcı tarafındaki DNS veya alt domain oluşturma görevini de kuyruğa alabilir. Bu görevi dinleyen bir entegrasyon yoksa, no-op kuyruk girdilerinden kaçınmak için arka plan işi atlanır. Eşlenmiş domainler için DNS ve SSL kontrolleri normal domain aşaması süreci üzerinden çalışmaya devam eder.

Bu entegrasyonu Ultimate Multisite ayarlarında **Entegrasyon** sekmesi altında etkinleştirmeniz gerekecektir.

![Hosting sağlayıcılarını gösteren Ultimate Multisite ayarlarındaki Entegrasyonlar sekmesi](/img/config/integrations-tab.png)

<!-- Ekran görüntüsü mevcut değil: Entegrasyonlar ayarları sekmesindeki hosting sağlayıcı Yapılandırma bağlantıları -->

_Hosting sağlayıcınız yukarıda belirtilen sağlayıcılardan biri değilse, **domain adını hosting hesabınızla manuel olarak senkronize etmeniz veya eklemeniz gerekeceğini** unutmayın._
