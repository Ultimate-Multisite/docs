---
title: WordPress Multisite-in kya hai?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite Nedir?

WordPress'in çekirdek yapısı içinde, 2010 yılında WordPress 3.0'ın piyasaya sürülmesiyle kökenleri bulunan 'Multisite' adında bir özellik bulunur. O zamandan beri, yeni özellikler eklemek ve güvenliği artırmak amacıyla birçok revizyon geçirdi.

Özünde, bir WordPress multisite'ı şöyle düşünebilirsiniz: Bir Üniversite tek bir WordPress kurulumu kullanır, ancak her fakülte kendi WordPress sitesini yönetir.

##

## WordPress Multisite Tam Olarak Ne Demek?

Multisite, birden fazla sitenin tek bir WordPress kurulumunu paylaşmasına olanak tanıyan bir WordPress özelliğidir. Multisite etkinleştirildiğinde, orijinal WordPress sitesi, genellikle **site ağı** olarak adlandırılan bir yapıyı destekleyecek şekilde dönüştürülür.

Bu ağ, dosya sistemini (bu şu anlama gelir ki **plugin'ler ve theme'ler de paylaşılır**), veritabanını, WordPress çekirdek dosyalarını, wp-config.php dosyasını vb. paylaşır.

Bu, WordPress, tema ve plugin güncellemelerinin, dosya sistemindeki aynı dosyaları paylaştıkları için, ağınızdaki tüm siteler için yalnızca bir kez yapılması gerektiği anlamına gelir.

Bu gerçek, multisite'ın ana avantajlarından biridir, çünkü yönettiğiniz site sayısını artırırken, müşterilerinizin sitelerini sürdürmek için yapmanız gereken görev sayısını aynı tutmanıza olanak tanır.

##

## Alt Alan Adı mı Yoksa Alt Dizin mi?

WordPress multisite çalıştırmanın iki modu vardır ve normal WordPress kurulumunuzu multisite kurulumuna dönüştürürken birini seçmeniz gerekir:

**Alt Alan Adı (Subdomain):** örn.: [site.domain.com](http://site.domain.com)

…veya

**Alt Dizin (Subdirectory):** örn.: [yourdomain.com/site](http://yourdomain.com/site)

Her modun, bu kararı verirken dikkate almanız gereken avantajları ve dezavantajları vardır.

Ancak dikkat edilmesi gereken önemli bir nokta var: bir karar verdikten sonra, ağınızı alt dizinden alt alan adına veya tam tersi bir yöne değiştirmek gerçekten zordur – özellikle de zaten birkaç site oluşturduysanız.

Bu kararı vermeden önce, aklınızda tutmanız gereken birkaç nokta şunlardır:

**Alt Dizin Modu**, kurulum ve bakım açısından en kolay moddur. Bunun nedeni, tüm sitelerin ana alan adına bağlı yollar olmasıdır (örneğin [yourdomain.com/subsite](http://yourdomain.com/subsite)). Sonuç olarak, ana alan adı için yalnızca **bir SSL sertifikasına** ihtiyacınız olur ve bu tüm ağı kapsar.

Aynı zamanda, URL yapısı nedeniyle, Google ve diğer çoğu arama motoru, alt dizin tabanlı ağınızdaki tüm alt siteleri tek bir dev site olarak kabul edecektir. Sonuç olarak, nihai müşterilerinizin alt sitelere eklediği içerikler, örneğin, açılış sitenizin SEO performansını etkileyebilir. Etki düzeyi tartışmalıdır ve böyle bir düzenlemenin SEO performansı için hatta faydalı olabileceğine dair bir argüman vardır.

**Alt Alan Adı Modu** kurulması biraz daha karmaşıktır, ancak URL yapısı (örneğin [subsite.yournetwork.com](http://subsite.yournetwork.com)) genellikle "daha profesyonel" görünür.

Alt alan adı modunu kurmanın ana zorluklarından biri, tüm ağ için SSL kapsamıdır (HTTPS). Bunun nedeni, tarayıcıların alt alan adlarını izole varlıklar olarak görmesidir. Sonuç olarak, ağınızdaki her alt alan adı için farklı bir SSL sertifikasına veya **Wildcard SSL sertifikası** adı verilen özel bir sertifikaya ihtiyacınız olacaktır. Son yıllarda, hosting sağlayıcıları ve paneller SSL sağlama konusunda gelişiyor ve bazıları, iki mod arasındaki karmaşıklık farkını kapatarak, tek tıkla wildcard sertifikaları sunuyor.

Alt dizin modunun aksine, alt alan adı tabanlı bir ağdaki alt siteler, arama motorları tarafından ayrı web siteleri olarak kabul edilir, bu da bir alt sitede bulunan içeriğin diğer alt sitelerin SEO performansını hiç etkilemeyeceği anlamına gelir.

## Süper Yönetici (The Super Admin)

Tek siteli WordPress kurulumları, sınırsız sayıda kullanıcı eklemenize ve bu kullanıcılara farklı izinlere sahip farklı kullanıcı rolleri vermenize olanak tanır.

WordPress Multisite'ta, yeni bir kullanıcı türü açılır: **süper yönetici** – ve yeni bir admin paneli açılır: **ağ yöneticisi paneli**.

Adından da anlaşılacağı gibi, süper yönetici ağ üzerinde süper güçlere sahiptir; tüm alt sitelerini, plugin'lerini, theme'lerini, her şeyi yönetebilir!

Tek siteli WordPress kurulumunuzu multisite'a dönüştürdüğünüzde, tek sitenin orijinal yöneticisi otomatik olarak süper yöneticiye yükseltilir.

Plugin'ler ve theme'ler, yalnızca süper yöneticiler tarafından ağ yöneticisi panelinden kurulabilir veya kaldırılabilir. Alt site yöneticileri, süper yönetici ağ bir plugin etkinleştirmediği sürece, bu plugin'leri veya theme'leri etkinleştirme veya devre dışı bırakma seçeneğine sahip olabilirler.

_Not: Gördüğünüz gibi, birini ağınıza davet etmek ve ona süper yönetici statüsü vermek, bu kullanıcıya ağınız üzerinde tam kontrol sağlar. Örneğin, diğer süper yöneticiler bile sizin süper yönetici statünüzü kaldırabilir, bu da sizi kendi ağ yöneticisi panelinizden etkili bir şekilde dışarıda bırakır. Ultimate Multisite müşterilerinin, ek süper yöneticilerin ne yapabileceği konusunda ayrıntılı kontrol sahibi olmasını sağlamak için, Support Agents adında bir eklentimiz var. Bu eklenti, sadece görevlerini yerine getirmek için ihtiyaç duyabilecekleri izinlere sahip ayrı bir kullanıcı türü olan bir 'ajan' oluşturmanıza olanak tanır._

## Alt Siteler Arasında Neler Paylaşılır, Neler Paylaşılmaz?

Daha önce bahsettiğimiz gibi, WordPress multisite'ın temel avantajlarından biri, tüm alt sitelerin aynı yapılandırmaları, çekirdek dosyaları, theme'leri, plugin'leri, WordPress çekirdek dosyaları vb. paylaşmasıdır.

Ancak, alt site bazında güzelce sınırlandırılmış (scoped) öğeler de vardır.

- Örneğin, her alt site kendi yükleme (uploads) klasörüne sahip olur. Sonuç olarak, bir alt sitenin kullanıcıları tarafından yapılan yüklemeler başka bir alt sitede erişilemez.

- Her alt sitenin kendi özel admin paneli vardır ve süper yönetici tarafından ağ düzeyinde etkinleştirilmedikçe plugin'leri veya theme'leri etkinleştirip devre dışı bırakabilir.

- Çoğu veritabanı tablosu her alt site için oluşturulur, bu da gönderilerin, yorumların, sayfaların, ayarların ve daha fazlasının her alt site için sınırlandırıldığı anlamına gelir.

## WordPress Multisite'ta Kullanıcı Yönetimi

WordPress multisite'ta hassas bir konu kullanıcı yönetimidir. WordPress kullanıcı tablosu, tüm alt siteler arasında paylaşılan birkaç tablodan biridir.

Bu düzenleme, ağınızla ne inşa etmeyi planladığınıza bağlı olarak bazı sorunlar çıkarabilir. Aşağıdaki örnek, en acil olanı göstermeye yardımcı olur.

Şu senaryoyu hayal edin:

Bir WordPress multisite ağı oluşturuyorsunuz ve e-ticaret mağazası sahibi olmak isteyen insanlara aylık ücret karşılığında alt siteler sunmaya başlıyorsunuz.

İlk ödeme yapan müşteriniz John geliyor. John için ağınızda bir site oluşturuyor, gerekli tüm plugin'leri kuruyor ve ardından John'un mağazasını yönetebilmesi için bir kullanıcı oluşturuyorsunuz.

Ardından ikinci bir müşteri, Alice geliyor. Onun için de aynı şeyi yapıyorsunuz ve o da artık ağınızda bir mağazaya sahip.

John ve Alice her ikisi de müşteriniz, ancak birbirlerini tanımıyorlar. Daha da önemlisi, aralarından biri diğerinin mağaza web sitesini ziyaret ederse, bu mağazanın aynı site ağı üzerinde barındırıldığını bilmenin bir yolu yok.

Bir gün John yeni bir çift ayakkabı alması gerekiyor ve Alice'in mağazasında mükemmel olanları buluyor. Satın almayı bitirmeye çalıştığında, "e-posta zaten kullanımda" hatası alıyor, ki bu tuhaf çünkü John, Alice'in web sitesini ziyaret ettiği ilk zaman olduğunu %100 biliyor.

Burada olan şey, John'un kullanıcısının tüm ağ genelinde paylaşılmasıdır, bu yüzden Alice'in sitesinde bir hesap oluşturmaya çalıştığında, WordPress aynı e-posta adresine sahip bir kullanıcının zaten var olduğunu algılar ve bir hata verir.

_Not: Kullanım senaryonuza bağlı olarak bunun ne kadar kötü olabileceğinin farkındayız, bu yüzden Ultimate Multisite, mevcut bir kullanıcı için normal kontrolleri atlayan ve aynı e-posta adresi kullanılarak birden fazla hesap oluşturulmasına izin veren bir seçeneğe sahiptir. Her hesap bir alt siteye bağlıdır, bu nedenle çarpışma riski minimumda tutulur. Yukarıdaki örnekte, John bir hata almayacak ve ayakkabıları sorunsuz bir şekilde satın alabilecektir. Bu seçeneğe Enable Multiple Accounts denir ve Ultimate Multisite → Settings → Login & Registration'dan etkinleştirilebilir._

Kullanıcı tablosu paylaşılsa bile, kullanıcılar alt site yöneticileri veya süper yönetici tarafından alt sitelere eklenebilir ve kaldırılabilir ve hatta farklı alt sitelerde farklı kullanıcı rollerine sahip olabilirler.

## Performans Hususları

WordPress multisite, destekleyebileceği site sayısı açısından gerçekten güçlüdür. Bu, [WordPress.com](https://WordPress.com), Edublogs ve Campuspress gibi hizmetlerin hepsinin multisite tabanlı olması ve her birinin binlerce site barındırması gerçeğiyle test edilebilir.

Teorik olarak tek bir WordPress multisite kurulumunda barındırabileceğiniz maksimum site sayısı olmasa da, pratikte sorunsuz çalıştırabileceğiniz site sayısı, birçok farklı faktöre bağlı olarak büyük ölçüde değişebilir: siteler ne kadar dinamik, alt sitelere hangi plugin'ler mevcut vb.

Genel bir kural olarak, ağınız ne kadar basit olursa, o kadar iyidir. İçeriğin gerçekten dinamik olmadığı (bu da onları agresif önbellekleme stratejileri için harika aday yapar) siteleri tercih etmek ve plugin yığınını mümkün olduğunca hafif tutmak (aktif plugin sayısı ne kadar azsa o kadar iyi) barındırabileceğiniz alt site sayısını önemli ölçüde artırabilir.

En iyi yanı ise, burada her şey WordPress olduğu için, performans iyileştirmeleri için zaten bildiğiniz ve sevdiğiniz aynı araçlar multisite ağı için de işe yarayacağıdır.

Multisite için ana darboğaz veritabanıdır, ancak diğer her şey doğru ayarlanmışsa, endişelenmeniz için birkaç bin site geçebilir. Hatta o zaman bile, o noktada kademeli olarak eklenebilecek çözümler vardır (örneğin veritabanı şarding çözümleri gibi).
