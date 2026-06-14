---
title: Domain Mapping'i Nasıl Yapılandırılır
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Domain Eşleştirme Nasıl Yapılır (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Premium bir ağın en güçlü özelliklerinden biri, müşterilerimize sitelerine bir üst düzey alan adı (top-level domain) ekleme şansı sunabilmesidir. Sonuçta, hangisi daha profesyonel durur: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) yoksa [_**joesbikeshop.com**_](http://joesbikeshop.com)? İşte bu yüzden Ultimate Multisite, üçüncü taraf eklentiler kullanma ihtiyacı olmadan bu özelliği hazır olarak sunar.

## Domain eşleştirme nedir?

Adından da anlaşılacağı gibi, domain eşleştirme (domain mapping), Ultimate Multisite'ın özel bir alan adı isteğini alıp, bu özel alan adının bağlı olduğu ilgili ağdaki siteye eşleştirme yeteneğidir.

### Ultimate Multisite Ağınızda Domain Eşleştirme Nasıl Kurulur

Domain eşleştirmenin çalışması için sizin tarafınızdan bazı kurulumlar yapılması gerekir. Neyse ki, Ultimate Multisite bu zor işi sizin yerinize otomatikleştiriyor, böylece gereksinimleri kolayca karşılayabilirsiniz.

Ultimate Multisite kurulumu sırasında, sihirbaz (wizard) otomatik olarak **sunrise.php** dosyasını belirlenen klasöre kopyalar ve kurar. **Sihirbaz, bu adım tamamlanmadan ilerlemenize izin vermeyecektir.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Bu, Ultimate Multisite kurulum sihirbazı ağınızı kurmayı bitirdiğinde, özel alan adını hemen eşleştirmeye başlayabileceğiniz anlamına gelir.

Ultimate Multisite'daki domain eşleştirmenin zorunlu olmadığını unutmayın. WordPress Multisite'ın yerel domain eşleştirme işlevini veya başka bir domain eşleştirme çözümünü kullanma seçeneğiniz var.

Ultimate Multisite domain eşleştirmesini devre dışı bırakıp başka domain eşleştirme çözümlerine yer açmanız gerekirse, bu özelliği **Ultimate Multisite > Ayarlar > Domain Mapping** altından devre dışı bırakabilirsiniz.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Bu seçeneğin hemen altında ayrıca **Force Admin Redirect** (Yöneticiye Zorla Yönlendirme) seçeneğini de görebilirsiniz. Bu seçenek, müşterilerinizin hem özel alan adları hem de alt alan adları üzerinden yönetici paneline erişip erişemeyeceğini veya sadece birinden erişip erişemeyeceğini kontrol etmenizi sağlar.

**Force redirect to mapped domain** (Eşleştirilen alan adına zorla yönlendir) seçeneğini seçerseniz, müşterileriniz yalnızca özel alan adları üzerinden yönetici paneline erişebilirler.

**Force redirect to network domain** (Ağ alan adına zorla yönlendir) seçeneği tam tersini yapar - müşterileriniz, özel alan adlarından giriş yapmaya çalışsalar bile, yalnızca alt alan adları üzerinden panellere erişebilirler.

Ve **Allow access to the admin by both mapped domain domain and network domain** (Yöneticiye hem eşleştirilen alan adı hem de ağ alan adı üzerinden erişime izin ver) seçeneği, alt alan adı ve özel alan adları üzerinden yönetici panellerine erişmelerine olanak tanır.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Özel bir alan adını eşleştirmenin iki yolu vardır. Birincisi, ağ yöneticisi kontrol panelinizden domain adını eşleştirmek; ikincisi ise alt site yöneticisi kontrol panelindeki hesap sayfasından yapmaktır.

Ancak ağınızdaki alt sitelerden birine özel alan adı eşleştirmeye başlamadan önce, o alan adının **DNS ayarlarının** düzgün yapılandırıldığından emin olmanız gerekir.

###

### Domain DNS ayarlarının düzgün yapılandırıldığından emin olmak

Bir eşleştirmenin çalışması için, eşleştirmeyi planladığınız alan adının Ağınız'ın IP adresine işaret ettiğinden emin olmalısınız. Burada dikkat etmeniz gereken şey, eşleştirmek istediğiniz özel alan adının IP adresi değil, Ultimate Multisite'ın kurulu olduğu ağın IP adresidir. Belirli bir alan adının IP adresini aramak için, örneğin [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) adresine gitmenizi öneririz.

Alan adını doğru bir şekilde eşleştirmek için, **DNS** yapılandırmanızda o **IP adresine** işaret eden bir **A KAYDI** eklemeniz gerekir. DNS yönetimi farklı alan adı kayıt kuruluşları arasında büyük farklılıklar gösterir, ancak " _XXXX'te A Kaydı Oluşturma_ " şeklinde arama yaparsanız, bu konuda çevrimiçi bolca eğitim bulabilirsiniz (örneğin: " _GoDaddy'de A Kaydı Oluşturma_ ").

Bunun çalışması konusunda zorluk yaşarsanız, **alan adı kayıt kuruluşunuzun desteğiyle iletişime geçin** ve bu konuda size yardımcı olabilirler.

Müşterilerinizin kendi alan adlarını eşleştirmesine izin vermeyi planlıyorsanız, bu kısmı kendilerinin yapması gerekecektir. A Kaydını oluşturmakta zorlanırlarsa onları kayıt kuruluşu destek sistemlerine yönlendirin.

### Süper Yönetici Olarak Özel Alan Adı Eşleştirme

Ağınızda süper yönetici olarak oturum açtığınızda, **Ultimate Multisite > Domains** bölümüne giderek özel alan adlarını kolayca ekleyebilir ve yönetebilirsiniz.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Bu sayfada, yukarıdaki **Domain Ekle** düğmesine tıklayabilir ve bu, **özel alan adı** belirleyip doldurabileceğiniz, özel alan adını uygulamak istediğiniz **alt siteyi** ve bunu **birincil alan adı** olarak ayarlayıp ayarlamayacağınızı (birden fazla alan adını tek bir alt siteye eşleştirebileceğinizi unutmayın) belirleyebileceğiniz bir modal pencere açar.

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Tüm bilgileri girdikten sonra, alttaki **Mevcut Alan Adı Ekle** düğmesine tıklayabilirsiniz.

Bu, özel alan adının DNS bilgilerini doğrulama ve çekme sürecini başlatacaktır. Ayrıca, sürecin geçtiği adımları takip edebilmeniz için sayfanın altında bir günlük (log) göreceksiniz. Bu süreç birkaç dakika sürebilir.

Her şey düzgün ayarlanmışsa, **Durum** (Stage) **DNS Kontrol Ediliyor**'dan **Hazır**'a değişmelidir.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Alan adına tıklarsanız, içinde bazı seçenekler görebilirsiniz. Hızlıca bir göz atalım:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage (Durum):** Bu, alan adının bulunduğu aşamadır. Alan adını ilk eklediğinizde, muhtemelen **DNS Kontrol Ediliyor** aşamasında olacaktır. Süreç, DNS girişlerini kontrol edecek ve bunların doğru olduğunu onaylayacaktır. Ardından, alan adı **SSL Kontrol Ediliyor** aşamasına geçecektir. Ultimate Multisite, alan adının SSL'i olup olmadığını kontrol edecek ve alan adınızı **Hazır** veya **Hazır (SSL olmadan)** olarak sınıflandıracaktır.

**Site:** Bu alan adıyla ilişkili alt alandır. Eşleştirilen alan adı bu özel sitenin içeriğini gösterecektir.

**Active (Aktif):** Alan adını etkinleştirmek veya devre dışı bırakmak için bu seçeneği açıp kapatabilirsiniz.

**Is Primary Domain? (Birincil Alan Adı mı?):** Müşterilerinizin her site için birden fazla eşleştirilmiş alan adı olabilir. Bu seçeneği, bu özel site için birincil alan adı olup olmadığını seçmek için kullanın.

**Is Secure? (Güvenli mi?):** Ultimate Multisite, etkinleştirmeden önce alan adının SSL sertifikası olup olmadığını kontrol etse bile, bu seçeneği kullanarak alan adını SSL'li veya SSL'siz yüklemeyi manuel olarak seçebilirsiniz. Web sitesinin SSL sertifikası yoksa ve zorla SSL ile yüklemeyi denerseniz, hata alabilirsiniz.

### Alt Site Kullanıcısı Olarak Özel Alan Adı Eşleştirme

Alt site yöneticileri de kendi alt site yöneticisi kontrol panelinden özel alan adları eşleştirebilirler.

Öncelikle, bu seçeneği **Domain mapping** (Domain eşleştirme) ayarları altından etkinleştirdiğinizden emin olmalısınız. Aşağıdaki ekran görüntüsüne bakın.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Bu seçeneği ayrıca **Ultimate Multisite > Products** altındaki **Plan** seviyesinde veya ürün seçeneklerinde de ayarlayabilir veya yapılandırabilirsiniz.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Bu seçeneklerden herhangi biri etkinleştirilmişse ve bir alt site kullanıcısına özel alan adları eşleştirme izni verilmişse, alt site kullanıcısı **Hesap** sayfasında **Domains** (Alan Adları) adında bir metabox görmelidir.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Kullanıcı **Domain Ekle** düğmesine tıklayabilir ve bu, bazı talimatlarla birlikte bir modal pencere açar.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Kullanıcı daha sonra **Next Step** (Sonraki Adım) düğmesine tıklayarak özel alan adını ekleme işlemine devam edebilir. Ayrıca bunun birincil alan adı olup olmayacağını da seçebilir.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Domain Ekle**'ye tıklamak, özel alan adının DNS bilgilerini doğrulama ve çekme sürecini başlatacaktır.

### Domain Senkronizasyonu Hakkında

Domain Senkronizasyonu (Domain Syncing), Ultimate Multisite'ın domain eşleştirmenin çalışması için özel alan adını barındırma hesabınıza ek bir alan adı (add-on domain) olarak eklediği bir süreçtir.

Barındırma sağlayıcınız Ultimate Multisite domain eşleştirme özelliği ile entegrasyona sahipse, domain senkronizasyonu otomatik olarak gerçekleşir. Şu anda bu barındırma sağlayıcıları şunlardır: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ ve _Cpanel._

Bu entegrasyonu Ultimate Multisite ayarlarında **Integration** (Entegrasyon) sekmesi altında etkinleştirmeniz gerekecektir.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Not: Barındırma sağlayıcınız yukarıda bahsedilen sağlayıcılardan biri değilse,**alan adını manuel olarak senkronize etmeniz veya eklemeniz gerekecektir.**_
