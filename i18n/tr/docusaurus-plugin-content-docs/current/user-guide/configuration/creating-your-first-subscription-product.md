---
title: İlk Abonelik Ürününüzü Oluşturma
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# İlk Abonelik Ürününüzü Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale yalnızca Ultimate Multisite 2.x sürümü kullanıcıları içindir. 1.x sürümünü kullanıyorsanız,**_ **_**bu makaleye bakın**_**.

Ağınızı yönetmeye başlamak ve hizmetlerinizi potansiyel kullanıcılara satmak için farklı abonelik seçeneklerine sahip olmanız gerekir. Bu ürünleri nasıl oluşturursunuz? Sunabileceğiniz ürün türleri nelerdir? Bu makalede, ürünler hakkında bilmeniz gereken her şeyi ele alacağız.

## Ürün Türü

Ultimate Multisite ile müşterilerinize iki kategori ürün sunabilirsiniz: **planlar** ve **eklentiler** **(Order Bump)**. Eklentiler iki türe ayrılabilir: **paketler** ve **hizmetler**. Aralarındaki farkları ve özellikleri şimdi inceleyelim.

  * **Planlar**: Ultimate Multisite'ın temel ürünüdür. Müşteriniz ancak bir plana bağlıysa üyeliğe sahip olabilir. Bir plan, müşterilerinize ürün düzenleme sayfasında belirlediğiniz kısıtlamalarla birlikte bir veya daha fazla site (planınızın yapılandırmasına bağlı olarak) sağlar.

  * **Paketler**: Ultimate Multisite planlarının işlevlerini doğrudan etkileyen eklentilerdir. Müşterinizin satın aldığı orijinal planın kısıtlamalarını değiştirirler veya yeni kaynaklar, eklentiler ya da temalar eklerler. Örneğin, temel bir plan ayda 1.000 ziyarete izin verebilir ve bu sayıyı 10.000'e çıkaran bir paket sunabilirsiniz.

  * **Hizmetler**: Ultimate Multisite'ın işlevlerini değiştirmeyen eklentilerdir. Bunlar, müşterinizin satın aldığı plana ek olarak onlar için gerçekleştireceğiniz görevlerdir. Örneğin, müşteriniz tek bir siteye izin veren bir plan satın alabilir ve ayrıca bu sitenin tasarımını yaptıracak ekstra bir hizmet için ödeme yapabilir.

## Ürünleri Yönetme

Birçok kişi için Ultimate Multisite'taki **Ürünler** sekmesi **(Ultimate Multisite > Ürünler)** geleneksel bir barındırma ortamındaki planlarla eşdeğer tutulabilir.

Ultimate Multisite'ta Ürünler sekmesi, belirli bir ürün veya hizmete uygulanacak yapıyı ve kısıtlamaları tanımlar. Bu yapılar; ürün veya hizmet açıklaması, fiyat, vergiler ve izinleri kapsar.

Bu bölüm, Ultimate Multisite'ın bu temel yapı taşını anlamanıza yardımcı olacaktır.

![Ürünler listesi sayfası](/img/config/products-list.png)

## Ürün Ekleme

Plan, paket veya hizmet fark etmeksizin, yeni bir öğe tanımlamanın başlangıç noktası **Ultimate Multisite > Ürünler > Ürün Ekle** yoludur.

![Ürün Ekle butonu](/img/config/product-add-button.png)

Arayüz iki ana bölümden oluşur. Sol tarafta ürünün tanımlanmasına yardımcı olan çeşitli sekmeler, sağ tarafta ise ürünün temel fiyatını, aktif durumunu ve ürün görselini tanımlamak için birkaç bölüm bulunur.

![Ürün düzenleme sayfası genel görünümü](/img/config/product-edit-full.png)

### Açıklama

Temel ürün bilgileri, ürün adı ve açıklaması girilerek tanımlanabilir. Bu tanımlayıcılar; plan ve fiyat seçimi, faturalar, yükseltmeler ve benzeri yerlerde ürün bilgisinin gerekli olduğu her yerde görüntülenir.

![Ürün açıklama bölümü](/img/config/product-description.png)

### Fiyatlandırma Türü

Arayüzün sağ tarafında temel fiyatlandırma tanımlanabilir.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Ultimate Multisite üç farklı fiyatlandırma türünü destekler. **Ücretli** seçeneği, ağ yöneticisinden ürünün fiyatı ve faturalandırma sıklığı hakkında bilgi ister.

### Fiyatlandırma

Fiyat bileşeni, temel ürün fiyatını ve faturalandırma aralığını tanımlar.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Örneğin, 1 aylık ayarla 29,99$ fiyatı her ay 29,99$ faturalandırır. Benzer şekilde, 3 aylık ayarla 89,97$ fiyatı her çeyrekte bu tutarı faturalandırır.

### Faturalandırma Döngüleri

Faturalandırma döngüleri bölümü, yukarıda belirtilen faturalandırma aralığının sıklığını belirtir ve genellikle sözleşmeler veya sabit süreler bağlamında anlaşılır.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Örneğin, 1 aylık aralık ve 12 faturalandırma döngüsü ile 29,99$ fiyatlı bir ürün, sonraki 12 ay boyunca ürün için ayda 29,99$ faturalandırır. Başka bir deyişle, böyle bir ayar 12 ay süreyle ayda 29,99$ sabit fiyatlı bir dönem oluşturur ve ardından faturalandırmayı durdurur.

### Deneme Süresi

Deneme teklifi geçişini etkinleştirmek, ağ yöneticisinin ürün için bir deneme süresi tanımlamasına olanak tanır.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Deneme süresi boyunca müşteriler ürünü ücretsiz kullanabilir ve deneme süresi bitene kadar faturalandırılmazlar.

### Kurulum Ücreti

Planınıza bir kurulum ücreti de uygulayabilirsiniz.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Bu, müşterinizin ilk ödemede (plan fiyatına ek olarak) bu bölümde tanımladığınız ücrete karşılık gelen ekstra bir tutar ödeyeceği anlamına gelir.

### Aktif

Aktif geçişi, ürünün yeni kayıtlar için müşterilere sunulup sunulmadığını belirler.

![Aktif geçişi](/img/config/product-active.png)

Bu planda mevcut müşteriler varsa, geçişi devre dışı durumuna ayarlamak planı gelecekteki kayıtlardan kaldırarak etkin bir şekilde koruma altına alır. **Plandaki mevcut müşteriler**, yeni bir plana geçirilene veya plandan çıkarılana kadar **faturalandırılmaya devam edecektir**.

### Ürün Görseli

**Görsel Yükle** butonu, ağ yöneticisinin bir ürün görseli seçmek veya yüklemek için medya kütüphanesini kullanmasına olanak tanır.

![Ürün görseli bölümü](/img/config/product-image.png)

### Silme

**Ürünü Sil** butonu ürünü sistemden siler. Ürün yayınlandıktan sonra görünür.

![Ürün silme bölümü](/img/config/product-delete.png)

Diğer silme işlemlerinden farklı olarak, ürün herhangi bir çöp durumuna yerleştirilmez. Bu nedenle silindikten sonra işlem geri alınamaz.

### Ürün Seçenekleri

Temel düzey ürün bilgileri tanımlandıktan sonra, ürün seçenekleri ağ yöneticisinin ürünün belirli özelliklerini daha ayrıntılı tanımlamasına yardımcı olur.

#### Genel

**Genel** sekmesi, diğer ürüne özel sekmelerin hiçbirine uygulanamayan genel ürün özelliklerini tanımlar.

![Genel sekmesi](/img/config/product-general-tab.png)

Adından anlaşılacağı üzere **ürün slug'ı**, ürünün URL'lerde ve Ultimate Multisite'ın diğer alanlarında tanımlandığı slug'ı belirler.

Ultimate Multisite; Plan, Paket ve Hizmet olmak üzere birkaç ürün türünü destekler. **Ürün Seçenekleri** sekmeleri, belirtilen ürün türüne bağlı olarak dinamik olarak ayarlanır.

**Müşteri Rolü**, site oluşturulduğunda müşteriye atanan rolü belirtir. Çoğu ağ yöneticisi için bu, Ultimate Multisite varsayılanı veya Yönetici olacaktır. Ultimate Multisite varsayılan rolü **Ultimate Multisite > Ayarlar > Giriş ve Kayıt** bölümünde ayarlanabilir.

![Müşteri rolü ayarları](/img/config/product-customer-role-settings.png)

#### Yükseltme ve Düşürmeler

Bu sekme, müşterinin kendi seviyesi içinde kullanabileceği yükseltme ve düşürme yollarını belirtir.

Bu kavramı anlamak için, özel bir Ultimate Multisite kurulumunun müşterilerine öğrenme yönetim çözümleri sunduğu bir örneği düşünün. Bunu başarmak için üç plan (Temel, Plus ve Premium) tanımlanır ve her plan için belirli eklentiler etkinleştirilir (eklentileri nasıl etkinleştireceğiniz için bu bölümün ilerleyen kısımlarına bakın).

Ultimate Multisite kurulumu ayrıca iş web siteleri veya e-ticaret web siteleri için hizmet veriyorsa, bu planlar farklı eklentilerin kurulmasını ve etkinleştirilmesini gerektirebilir.

Bu bağlamda, e-öğrenme müşterilerinin e-ticaret planlarına geçiş yapmasına izin vermek istenmeyen ve sorunlu olabilir çünkü bu planlar, fiyatlandırma ve kısıtlamalar uygun bir eşleşme olmayabilir.

Bu nedenle, müşterinin yolunu kısıtlamak ve olayları önlemek için ağ yöneticisi bir plan grubu tanımlayabilir ve bu grup içinde müşterinin geçiş yapabileceği planları belirleyebilir.

![Yükseltme ve Düşürmeler sekmesi](/img/config/product-upgrades.png)

Bir plan grubu tanımlamak için **plan grubu** listesinde uyumlu planları belirtin. **Ürün sırası**, planların en düşükten en yükseğe nasıl sıralanacağını ve görüntüleneceğini belirler.

Ultimate Multisite ayrıca uygun eklenti ürünleri ve hizmetlerin planlara eklenebileceği bir **order bump** özelliği içerir. Bunlar, ödeme sırasında veya yükseltme sırasında planlara eklenebilecek ek öğeler olarak müşteriye sunulur.

#### Fiyat Varyasyonları

Fiyat varyasyonları, ağ yöneticisinin süreye bağlı olarak alternatif fiyatlandırma kademeleri belirlemesine olanak tanır. Bu ayar, 3 aylık, 6 aylık veya yıllık fiyatlandırma kademelerinin ya da kullanım durumuna göre belirlenen herhangi bir süre ve sıklığın oluşturulmasını mümkün kılar.

![Fiyat Varyasyonları sekmesi](/img/config/product-price-variations.png)

Fiyat varyasyonlarını oluşturmak için **fiyat varyasyonlarını etkinleştir** geçişini aktif duruma ayarlayın ve **Yeni Fiyat Varyasyonu Ekle** butonuna tıklayın.

Bir varyasyon girmek için varyasyonun süresini, dönemini ve fiyatını ayarlayın. Butona tekrar tıklayarak ek varyasyonlar girilebilir.

![Fiyat Varyasyonları sekmesi](/img/config/product-price-variations.png)

#### Vergiler

**Vergiler** sekmesi, **Ultimate Multisite > Ayarlar > Vergiler** bölümünde belirtilen vergi ayarları ve daha spesifik olarak tanımlanan vergi oranları ile uyumludur. Vergileri etkinleştirmek ve geçerli vergi oranlarını tanımlamak için lütfen **Ultimate Multisite: Ayarlar** belgelerine bakın.

![Vergiler sekmesi](/img/config/product-taxes.png)

Önceki bir örnekte, Kaliforniya (Amerika Birleşik Devletleri) müşterilerine uygulanabilir %7,25'lik yerel bir vergi oranı tanımlamıştık.

Vergi oranı **Ultimate Multisite > Ayarlar > Vergi Oranlarını Yönet** bölümünde tanımlandıktan sonra, ürün düzeyinde seçilebilir hale gelir.

![Vergiler sekmesi](/img/config/product-taxes.png)

Bir ürünün vergilendirilebilir bir öğe olduğunu belirtmek için **Vergilendirilebilir Mi** geçişini aktif duruma ayarlayın ve Vergi Kategorisi açılır menüsünden geçerli vergi oranını seçin.

#### Site Şablonları

Özünde, site şablonları müşterinin sitesine aboneliklerinin başlangıcında klonlanan tam WordPress web siteleridir.

![Site Şablonları sekmesi](/img/config/product-site-templates.png)

Ağ yöneticisi, şablon siteyi etkinleştirilmiş ve yapılandırılmış temalar, eklentiler ve içerikle normal bir WordPress sitesi olarak oluşturur ve yapılandırır. Şablon site müşteriye birebir klonlanır.

Bu sekme, ağ yöneticisinin yeni bir abonelikte site şablonlarının davranışını belirlemesine olanak tanır. Site şablonlarını kullanmak için **site şablonlarına izin ver** geçişini aktif durumuna ayarlayın.

**Site şablonu seçim modu**, abonelik süreci sırasında site şablonlarının davranışını tanımlar.

**Varsayılan** ayarı, ödeme formundaki adımları takip eder. Ağ yöneticisi ödeme sürecinde bir şablon seçim adımı tanımladıysa ve adım şablonlarla tanımlandıysa, bu ayar ödeme adımında belirlenen yönergeleri uygular.

**Site Şablonu Ata** seçeneği, belirtilen şablonun seçilmesini zorlar. Sonuç olarak, ödeme sürecindeki tüm şablon seçim adımları kaldırılır.

Son olarak, **Mevcut Site Şablonlarını Seç** seçeneği, ödeme adımında belirtilen şablonları bu ayarda seçilen şablonlarla geçersiz kılar. Müşterinin seçimine yardımcı olmak için önceden seçilmiş bir şablon da tanımlanabilir.

Sonuç olarak, ağ yöneticisi şablon seçiminin ödeme adımlarında gerçekleşmesini istiyorsa '_varsayılan_' ayarı yeterli olacaktır. Alternatif olarak, şablon seçimini kaldırmak ve kilitlemek ve seçimi plan ayarlarına devretmek için '_yeni şablon ata_' veya '_mevcut site şablonlarını seç_' seçenekleri tercih edilebilir.

#### Siteler

**Siteler** sekmesi, Ultimate Multisite'ın kısıtlamalar işlevselliğinin bir parçasıdır.

![Siteler sekmesi](/img/config/product-sites.png)

Bu ayar, bir müşterinin üyeliği kapsamında oluşturabileceği maksimum site sayısını belirtir.

Kısıtlamayı etkinleştirmek için **siteleri sınırla** geçişini aktif durumuna ayarlayın ve **site kotası** alanında maksimum site sayısını belirtin.

#### Ziyaretler

**Ziyaretler** sekmesi, Ultimate Multisite'ın kısıtlamalar sisteminin bir diğer parçasıdır. Bu ayar, müşterinin sitesine gelen benzersiz ziyaretçilerin sayılmasına ve ardından kısıtlanmasına olanak tanır.

![Ziyaretler sekmesi](/img/config/product-visits.png)

Pazarlama perspektifinden, ağ yöneticileri bu ayarı müşterileri limitler aşıldığında planlarını yükseltmeye teşvik etmek için kullanabilirler. Bu ayar ayrıca ağ yöneticisinin sistem kaynaklarını korumak için sitelere aşırı trafiği engellemesine ve önlemesine yardımcı olabilir.

Bu özelliği kullanmak için **benzersiz ziyaretleri sınırla** geçişini aktif durumuna ayarlayın ve **benzersiz ziyaret kotası** alanında maksimum benzersiz ziyaretçi sayısını belirtin.

Bu limit aşıldığında Ultimate Multisite, müşterinin sitesini sunmayı durduracak ve bunun yerine limitlerin aşıldığını belirten bir mesaj görüntüleyecektir.

#### Kullanıcılar

Ultimate Multisite'ın 'Kullanıcılar' kısıtlamaları, ağ yöneticisinin oluşturulabilecek ve rollere atanabilecek kullanıcı sayısına limitler koymasına olanak tanır.

![Kullanıcılar sekmesi](/img/config/product-users.png)

Kısıtlamalar özelliğini etkinleştirmek için **kullanıcıyı sınırla** geçişini sağa kaydırarak aktif durumuna ayarlayın.

Ardından, sınırlanacak her rol için yanındaki geçişi aktif duruma ayarlayın ve uygun alana maksimum üst limiti tanımlayın.

#### Gönderi Türleri

**Gönderi Türleri** sekmesi, ağ yöneticisinin WordPress'teki geniş gönderi türleri yelpazesine ayrıntılı limitler koymasına olanak tanır.

![Gönderi Türleri sekmesi](/img/config/product-post-types.png)

WordPress'in yapısı gereği, gönderiler ve gönderi türleri temel işlevselliğinin önemli bir bileşenidir ve bu nedenle Ultimate Multisite'ın kısıtlamalar sistemi, ağ yöneticisinin limitler oluşturmasına ve sürdürmesine yardımcı olmak için tasarlanmıştır.

Bu limit alt sistemini etkinleştirmek için **gönderi türlerini sınırla** geçişini sağa kaydırarak aktif durumuna ayarlayın.

Ardından, sınırlanacak her gönderi türü için sağa kaydırarak açın ve uygun alana maksimum üst limiti belirtin.

#### Disk Alanı

**Disk Alanı** sekmesi, ağ yöneticilerinin müşteriler tarafından tüketilen alanı kısıtlamasına olanak tanır.

![Disk Alanı sekmesi](/img/config/product-disk-space.png)

Tipik olarak bir WordPress multisite'ta çekirdek dosyalar tüm siteler arasında paylaşılır ve medya dosyaları ile yüklemeler için ayrı dizinler oluşturulur; bu ayarlar ve kısıtlamalar bunlara uygulanır.

Disk kullanım kısıtlamasını etkinleştirmek için **site başına disk boyutunu sınırla** geçişini sağa kaydırarak aktif durumuna ayarlayın.

Ardından, **disk alanı kotası** alanında megabayt cinsinden maksimum üst limiti belirtin.

#### Özel Domain

Bu seçeneği açarak özellikle bu planda özel domainlere izin verebilirsiniz.

![Özel Domainler sekmesi](/img/config/product-custom-domains.png)

#### Temalar

Ürün seçenekleri içindeki **Temalar** sekmesi, ağ yöneticisinin müşterilerin seçimi için temaları kullanılabilir hale getirmesine ve isteğe bağlı olarak temanın durumunu zorlamasına olanak tanır.

![Temalar sekmesi](/img/config/product-themes.png)

_**Not: Temaların müşterilere sunulabilmesi için ağ yöneticisi tarafından ağda etkinleştirilmiş olmaları gerekir.**_

![Ağ temaları sayfası](/img/config/product-themes-network-enabled.png)

**Görünürlük** seçeneği, bu temanın müşteri sitesindeki **Görünüm > Temalar** sekmesini görüntülerken görünür olup olmadığını tanımlar. Bu seçeneği **Gizli** olarak ayarlamak temayı görünümden kaldırır ve böylece seçme ve etkinleştirme yeteneğini kısıtlar.

![Temalar sekmesi](/img/config/product-themes.png)

**Davranış** seçimi, ağ yöneticisinin müşteri sitesi oluşturulduğunda temanın durumunu tanımlamasına olanak tanır.

**Kullanılabilir** durumunda tema, müşterinin kendi kendine etkinleştirmesi için kullanılabilir hale getirilir. Tersine, **Kullanılamaz** durumu müşteriden temayı etkinleştirme yeteneğini kaldırır. Son olarak, **Zorla Etkinleştir** seçeneği temanın seçilmesini ve etkinleştirilmesini zorlar, böylece site oluşturulduğunda varsayılan olarak ayarlanır.

#### Eklentiler

Temalar sekmesine benzer şekilde, Ultimate Multisite ağ yöneticisinin müşterilere eklentilerin görünürlüğünü ve yeni bir site oluşturulduğunda durumlarını tanımlamasına olanak tanır.

![Eklentiler sekmesi](/img/config/product-plugins.png)

**Görünürlük** açılır menüsü, eklentinin müşterinin sitesinde Eklentiler menü seçeneği aracılığıyla görüntülendiğinde görünür veya gizli olmasına olanak tanır.

Ağ yöneticisi, davranış açılır menüsündeki seçenekleri kullanarak eklentilerin davranışını daha da değiştirebilir.

![Eklentiler sekmesi](/img/config/product-plugins.png)

**Varsayılan** seçimi, müşteri tarafından seçilen site şablonunda tanımlanan eklenti durumunu uygular. Böylece şablon içinde etkinleştirilen eklentiler, şablon müşterinin sitesine klonlandığında etkin kalacaktır.

**Zorla Etkinleştir**, site oluşturulduğunda eklentiyi aktif duruma getirir ve tersine **Zorla Devre Dışı Bırak**, site oluşturulduğunda eklentiyi devre dışı bırakır. Her iki durumda da, eklentinin durumu müşteri tarafından WordPress Eklentiler menüsü aracılığıyla manuel olarak değiştirilebilir.

**Zorla Etkinleştir ve Kilitle** ayarı benzer şekilde çalışır ancak eklenti durumunun müşteri tarafından değiştirilmesini engeller. Böylece Zorla Etkinleştir ve Kilitle ayarı, eklentiyi aktif durumuna zorlayacak ve müşterinin devre dışı bırakmasını engelleyecektir. Benzer şekilde, **Zorla Devre Dışı Bırak ve Kilitle** ayarı eklentiyi pasif durumuna zorlayacak ve kullanıcının eklentiyi etkinleştirmesini engelleyecektir.

Ağ yöneticisi, şablonlar içindeki eklentiler ve eklenti durumları seçilirse bu ayarlardan etkilenebileceğinden, Zorla Etkinleştir ve Kilitle ve Zorla Devre Dışı Bırak ve Kilitle ayarlarını site şablonlarıyla birlikte değerlendirmek isteyebilir.

#### Kısıtlamaları Sıfırla

**Kısıtlamaları Sıfırla** sekmesi, üründe tanımlanan tüm özel limitleri sıfırlar. Kısıtlamaları sıfırlamak için **kısıtlamaları sıfırla** butonuna tıklayın.

![Kısıtlamaları Sıfırla sekmesi](/img/config/product-reset-limitations.png)

İşlemi onaylamak için **sıfırlamayı onayla** geçişini sağa kaydırarak aktif durumuna ayarlayın ve **kısıtlamaları sıfırla** butonuna tıklayın.

![Kısıtlamaları Sıfırla sekmesi](/img/config/product-reset-limitations.png)

## Ürünü Düzenleme, Çoğaltma veya Silme

Mevcut ürünler, **Ultimate Multisite > Ürünler** bölümüne gidip mevcut ürün adının üzerine gelerek düzenlenebilir, çoğaltılabilir veya silinebilir.

![Ürün üzerine gelme eylemleri](/img/config/product-hover-actions.png)
