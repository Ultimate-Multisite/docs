---
title: WordPress Multisite Nedir?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Çoklu Site Nedir?

WordPress, çekirdek yapısında 2010'da WordPress 3.0 ile birlikte kullanıma sunulan 'Çoklu Site' (Multisite) adında bir özellik barındırır. O günden bu yana yeni özellikler eklemek ve güvenliği artırmak amacıyla pek çok güncelleme aldı.

Özünde WordPress çoklu site şöyle düşünülebilir: Bir üniversite tek bir WordPress kurulumu kullanır, ancak her fakülte kendi WordPress sitesini yönetir.

## 

## WordPress Çoklu Site Tam Olarak Nedir?

Çoklu site, birden fazla sitenin tek bir WordPress kurulumunu paylaşmasına olanak tanıyan bir WordPress özelliğidir. Çoklu site etkinleştirildiğinde, orijinal WordPress sitesi genellikle **site ağı** olarak adlandırılan yapıyı destekleyecek şekilde dönüştürülür.

Bu ağ; dosya sistemini (**yani plugin'ler ve temalar da paylaşılır**), veritabanını, WordPress çekirdek dosyalarını, wp-config.php dosyasını ve diğer bileşenleri ortaklaşa kullanır.

Bu sayede WordPress, tema ve plugin güncellemelerinin tüm ağ siteleriniz için yalnızca bir kez yapılması yeterlidir çünkü hepsi dosya sisteminde aynı dosyaları paylaşır.

Bu durum çoklu sitenin en önemli avantajlarından biridir. Yönettiğiniz site sayısını artırırken, müşterilerinizin sitelerini bakımda tutmak için yapmanız gereken iş miktarını aynı seviyede tutmanızı sağlar.

## 

## Alt Alan Adı mı Yoksa Alt Dizin mi?

WordPress çoklu siteyi çalıştırmanın iki modu vardır ve normal WordPress kurulumunuzu çoklu site kurulumuna dönüştürürken bunlardan birini seçmeniz gerekir:

**Alt Alan Adı (Subdomain):** örn.: [site.domain.com](http://site.domain.com)

…veya

**Alt Dizin (Subdirectory):** örn.: [yourdomain.com/site](http://yourdomain.com/site)

Her modun bu kararı verirken göz önünde bulundurmanız gereken avantajları ve dezavantajları vardır.

Ancak önemli bir nokta var: Kararınızı verdikten sonra ağınızı alt dizinden alt alan adına veya tam tersine değiştirmek gerçekten zordur – özellikle halihazırda birkaç site oluşturduysanız.

Bu kararı vermeden önce aklınızda tutmanız gereken birkaç nokta:

**Alt Dizin Modu** kurulum ve bakım açısından en kolay moddur. Bunun nedeni tüm sitelerin ana alan adına eklenen yollar olmasıdır (örn. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Sonuç olarak, ana alan adı için yalnızca **tek bir SSL sertifikasına** ihtiyacınız olur ve bu sertifika tüm ağı kapsar.

Aynı zamanda URL yapısı nedeniyle Google ve diğer arama motorlarının çoğu, alt dizin tabanlı ağınızdaki tüm alt siteleri tek bir dev site olarak değerlendirir. Bu nedenle, son kullanıcılarınızın alt sitelere eklediği içerik, örneğin ana sayfanızın SEO performansını etkileyebilir. Etkinin boyutu tartışmalıdır ve bu düzenlemenin SEO performansı için faydalı bile olabileceği savunulabilir.

**Alt Alan Adı Modu** kurulumu biraz daha karmaşıktır, ancak URL yapısı (örn. [subsite.yournetwork.com](http://subsite.yournetwork.com)) genellikle "daha profesyonel" görünür.

Alt alan adı modunu kurmadaki temel zorluklardan biri, tüm ağ için SSL kapsamıdır (HTTPS). Bunun nedeni tarayıcıların alt alan adlarını ayrı varlıklar olarak görmesidir. Sonuç olarak, ağınızdaki her alt alan adı için farklı bir SSL sertifikasına veya **Wildcard SSL sertifikası** adı verilen özel bir sertifika türüne ihtiyacınız olacaktır. Son yıllarda barındırma sağlayıcıları ve paneller SSL sağlama konusunda kendilerini geliştiriyor ve bazıları tek tıklamayla wildcard sertifikaları sunarak kurulum karmaşıklığı açısından iki mod arasındaki farkı kapatıyor.

Alt dizin modunun aksine, alt alan adı tabanlı bir ağdaki alt siteler arama motorları tarafından ayrı web siteleri olarak değerlendirilir. Bu da bir alt sitedeki içeriğin diğer alt sitelerin SEO performansını hiçbir şekilde etkilemediği anlamına gelir.

## Süper Yönetici

Tekli site WordPress kurulumları sınırsız sayıda kullanıcı eklemenize ve bu kullanıcılara farklı izinlere sahip farklı kullanıcı rolleri vermenize olanak tanır.

WordPress Çoklu Site'de yeni bir kullanıcı türü açılır: **süper yönetici** – ve yeni bir yönetici paneli kullanılabilir hale gelir: **ağ yönetici paneli**.

Adından da anlaşılacağı gibi, süper yönetici ağ üzerinde süper güçlere sahiptir ve tüm alt siteleri, plugin'leri, temaları ve her şeyi yönetebilir!

Tekli site WordPress kurulumunuzu çoklu siteye dönüştürdüğünüzde, tekli sitenin orijinal yöneticisi otomatik olarak süper yöneticiye yükseltilir.

Plugin'ler ve temalar yalnızca süper yöneticiler tarafından ağ yönetici panelinden kurulabilir veya kaldırılabilir. Alt site yöneticileri daha sonra bu plugin'leri veya temaları etkinleştirmeyi veya devre dışı bırakmayı seçebilir – tabii süper yönetici bir plugin'i ağ genelinde etkinleştirmediyse, bu durumda plugin tüm alt siteler için her zaman aktif olmaya zorlanır.

_Not: Gördüğünüz gibi, birini ağınıza davet edip süper yönetici yetkisi vermek, bu kullanıcıya ağınız üzerinde tam kontrol verir. Örneğin, diğer süper yöneticiler sizin süper yönetici statünüzü bile kaldırabilir ve sizi kendi ağ yönetici panelinizden etkili bir şekilde kilitleyebilir. Ultimate Multisite müşterilerinin ek süper yöneticilerin neler yapabileceği üzerinde ayrıntılı kontrol sahibi olmalarını sağlamak için Support Agents adında bir eklentimiz var. Bu eklenti, yalnızca ağda görevlerini yerine getirmek için ihtiyaç duyabilecekleri izinlere sahip başka bir kullanıcı türü – temsilci – oluşturmanıza olanak tanır._

## Alt Siteler Arasında Neler Paylaşılır, Neler Paylaşılmaz

Daha önce belirttiğimiz gibi, WordPress çoklu sitenin temel avantajlarından biri tüm alt sitelerin aynı yapılandırmaları, çekirdek dosyaları, temaları, plugin'leri, WordPress çekirdek dosyalarını vb. paylaşmasıdır.

Ancak her alt site için güzelce ayrılmış olan öğeler de vardır.

\- Örneğin, her alt site kendi yüklemeler klasörüne sahiptir. Sonuç olarak, belirli bir alt sitenin kullanıcıları tarafından yapılan yüklemelere başka bir alt siteden erişilemez.

\- Her alt sitenin kendi özel yönetici paneli vardır ve süper yönetici tarafından ağ genelinde etkinleştirilmedikçe plugin'leri veya temaları etkinleştirebilir veya devre dışı bırakabilir.

\- Çoğu veritabanı tablosu her alt site için oluşturulur, yani yazılar, yorumlar, sayfalar, ayarlar ve daha fazlası her alt site için ayrı tutulur.

## WordPress Çoklu Site'de Kullanıcı Yönetimi

WordPress çoklu site'de hassas konulardan biri kullanıcı yönetimidir. WordPress kullanıcı tablosu, tüm alt siteler arasında paylaşılan birkaç tablodan biridir.

Bu düzenleme, ağınızla ne inşa etmeyi planladığınıza bağlı olarak bazı sorunlara yol açabilir. Aşağıdaki örnek en can sıkıcı olanı göstermeye yardımcı olur.

Şu senaryoyu hayal edin:

Bir WordPress çoklu site ağı oluşturuyorsunuz ve e-ticaret mağazası isteyenlere aylık ücret karşılığında alt siteler sunmaya başlıyorsunuz.

İlk ödeme yapan müşteriniz geliyor – Ahmet. Ahmet için ağınızda bir site oluşturuyorsunuz, gerekli tüm plugin'leri kuruyorsunuz, sonra Ahmet'in mağazasını yönetebilmesi için bir kullanıcı oluşturuyorsunuz.

Ardından ikinci müşteri geliyor – Ayşe. Onun için de aynı şeyi yapıyorsunuz ve artık onun da ağınızda bir mağazası var.

Ahmet ve Ayşe her ikisi de müşterileriniz, ancak birbirlerini tanımıyorlar. Daha da önemlisi, biri diğerinin mağaza web sitesini ziyaret etse bile, bu mağazanın aynı site ağında barındırıldığını anlamasının bir yolu yok.

Bir gün Ahmet'in yeni bir çift ayakkabıya ihtiyacı oluyor ve mükemmel olanları Ayşe'nin mağazasında buluyor. Satın almayı tamamlamaya çalıştığında "e-posta zaten kullanımda" hata mesajı alıyor, bu çok tuhaf çünkü Ahmet Ayşe'nin web sitesini ilk kez ziyaret ettiğinden %100 emin.

Burada olan şu ki, Ahmet'in kullanıcısı tüm ağda paylaşılıyor, bu yüzden Ayşe'nin sitesinde ödeme yapmak için bir hesap oluşturmaya çalıştığında, WordPress aynı e-posta adresiyle bir kullanıcının zaten var olduğunu algılıyor ve hata veriyor.

_Not: Kullanım senaryonuza bağlı olarak bunun ne kadar kötü olabileceğinin farkındayız, bu yüzden Ultimate Multisite'ta mevcut kullanıcı için normal kontrolleri atlayan ve aynı e-posta adresiyle birden fazla hesap oluşturulmasına izin veren bir seçenek var. Her hesap bir alt siteye bağlıdır, bu nedenle çakışma riski minimumda tutulur. Yukarıdaki örnekte, Ahmet hata mesajı almaz ve o ayakkabıları sorunsuz satın alabilirdi. Bu seçenek Çoklu Hesapları Etkinleştir olarak adlandırılır ve Ultimate Multisite → Ayarlar → Giriş ve Kayıt bölümünden etkinleştirilebilir._

Kullanıcı tablosu paylaşılsa da, kullanıcılar alt site yöneticileri veya süper yönetici tarafından alt sitelere eklenebilir ve alt sitelerden kaldırılabilir, hatta farklı alt sitelerde farklı kullanıcı rollerine sahip olabilirler.

## Performans Değerlendirmeleri

WordPress çoklu site, destekleyebileceği site sayısı açısından gerçekten güçlüdür. [WordPress.com](https://WordPress.com), Edublogs ve Campuspress'in hepsinin çoklu site tabanlı hizmetler olması ve her birinin binlerce site barındırması bunu kanıtlar.

Teoride tek bir WordPress çoklu site kurulumunda barındırabileceğiniz maksimum site sayısı yoktur, ancak pratikte tatmin edici şekilde çalıştırabileceğiniz site sayısı birçok farklı faktöre bağlı olarak büyük ölçüde değişebilir: sitelerin ne kadar dinamik olduğu, alt sitelere hangi plugin'lerin sunulduğu vb.

Genel kural olarak, ağınız ne kadar basitse o kadar iyidir. İçeriğin gerçekten dinamik olmadığı siteleri tercih etmek (bu onları agresif önbellekleme stratejileri için harika adaylar yapar) ve plugin yığınını olabildiğince hafif tutmak (aktif plugin sayısı ne kadar az o kadar iyi) barındırabileceğiniz alt site sayısını büyük ölçüde artırabilir.

En güzel yanı, her şey WordPress olduğu için performans iyileştirmeleri için zaten bildiğiniz ve sevdiğiniz araçların çoklu site ağı için de çalışacak olmasıdır.

Çoklu site için ana darboğaz veritabanıdır, ancak diğer her şey doğru kurulursa, endişelenmeniz gerekmeden önce birkaç bin siteye ulaşabilirsiniz. O noktada bile, aşamalı olarak eklenebilecek çözümler mevcuttur (örneğin veritabanı parçalama çözümleri gibi).
