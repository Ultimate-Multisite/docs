---
title: İlk Abonelik Ürününüzü Oluşturma
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# İlk Abonelik Ürününüzü Oluşturma (v2) {#creating-your-first-subscription-product-v2}

_**ÖNEMLİ NOT: Bu makale yalnızca Ultimate Multisite sürüm 2.x kullanıcıları içindir. Sürüm 1.x kullanıyorsanız,**_ **_**bu makaleye bakın**_**.

Ağınızı çalıştırmaya başlamak ve hizmetlerinizi potansiyel kullanıcılara satmaya başlamak için farklı abonelik seçeneklerine sahip olmanız gerekir. Bu ürünleri nasıl oluşturursunuz? Sunabileceğiniz ürün türleri nelerdir? Bu makalede, ürünler hakkında bilmeniz gereken her şeyi ele alacağız.

## Ürün Türü {#product-type}

Ultimate Multisite ile müşterilerinize iki ürün kategorisi sunabilirsiniz: **planlar** ve **ek ürünler** **(Sipariş Artırımı)**. Ek ürünler iki türe ayrılabilir: **paketler** ve **hizmetler**. Sırada bunların farklarını ve özelliklerini göreceğiz.

  * **Planlar** : Ultimate Multisite'in temel ürünü. Müşterinizin üyeliği yalnızca bir plana bağlıysa olabilir. Bir plan, müşterilerinize ürün düzenleme sayfanızda belirlediğiniz sınırlamalarla bir veya daha fazla site sağlar (bu, planınızın yapılandırmalarına bağlıdır).

  * **Paketler** : Ultimate Multisite planlarının işlevlerini doğrudan etkileyen ek ürünler. Müşterinizin satın aldığı orijinal plandaki sınırlamaları değiştirir veya yeni kaynaklar, pluginler ya da temalar ekler. Örneğin, temel bir plan ayda 1.000 ziyarete izin verebilir ve siz bu sayıyı 10.000'e çıkaran bir paketi kullanıma sunabilirsiniz.

  * **Hizmetler:** Ultimate Multisite'in işlevlerini değiştirmeyen ek ürünler. Bunlar, müşterinizin satın aldığı plana ek olarak onun için gerçekleştireceğiniz görevlerdir. Örneğin, müşteriniz tek bir siteye izin veren bir plan satın alabilir ve ayrıca bu sitenin tasarımını yapacak ekstra bir hizmet için ödeme yapabilir.

## Ürünleri Yönetme {#managing-products}

Birçok kişi için Ultimate Multisite içindeki **Ürünler** sekmesi **(Ultimate Multisite > Ürünler)** geleneksel bir hosting ortamındaki planlarla eş tutulabilir.

Ultimate Multisite içinde Ürünler sekmesi, belirli bir ürün veya hizmet için geçerli olan yapıyı ve sınırlamaları tanımlar. Bu yapılar ürün veya hizmet açıklamasına, fiyata, vergilere ve izinlere kadar uzanır.

Bu bölüm, Ultimate Multisite'in bu temel yapı taşını anlamanıza rehberlik edecektir.

![Ürünler listesi sayfası](/img/config/products-list.png)

## Ürün Ekleme {#adding-products}

Bir plan, paket veya hizmet olsun; yeni bir öğe tanımlamanın giriş noktası **Ultimate Multisite > Ürünler > Ürün Ekle** yoludur.

![Ürün Ekle düğmesi](/img/config/product-add-button.png)

Arayüz iki baskın bölüm içerir. Solda ürünün tanımlanmasına yardımcı olan birkaç sekme, sağda ise ürünün temel fiyatını, aktif durumunu ve ürün görselini tanımlamak için birkaç bölüm bulunur.

![Ürün düzenleme sayfasına genel bakış](/img/config/product-edit-full.png)

### Açıklama {#description}

Temel ürün bilgileri, bir ürün adı ve açıklaması sağlanarak tanımlanabilir. Bu tanımlayıcılar; plan ve fiyatlandırma seçimi, faturalar, yükseltmeler ve benzeri yerler gibi ürün bilgilerinin gerekli olduğu her yerde görüntülenir.

![Ürün açıklaması bölümü](/img/config/product-description.png)

### Fiyatlandırma Türü {#pricing-type}

Arayüzün sağ tarafında temel fiyatlandırma tanımlanabilir.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Ultimate Multisite üç farklı fiyatlandırma türünü destekler. **Ücretli** seçeneği, ağ yöneticisinden ürünün fiyatı ve faturalandırma sıklığı hakkında bilgi ister.

### Fiyatlandırma {#pricing}

Fiyat bileşeni, temel ürün fiyatını ve faturalandırma aralığını tanımlar.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

böylece 1 ay ayarıyla $29.99 örnek fiyatı her ay $29.99 olarak faturalandırılır. Benzer şekilde, 3 ay ayarıyla $89.97 tutarındaki bir fiyat, her çeyrekte bu tutarı faturalandırır.

### Faturalandırma Döngüleri {#billing-cycles}

Faturalandırma döngüleri bölümü, yukarıda belirtilen faturalandırma aralığının sıklığını belirtir ve genellikle sözleşmeler veya sabit süreler bağlamında anlaşılır.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Örneğin, 1 aylık aralığa ve 12 faturalandırma döngüsüne sahip $29.99 ürün fiyatı, sonraki 12 ay boyunca ürün için ayda $29.99 faturalandırır. Başka bir deyişle, böyle bir ayar 12 ay boyunca ayda $29.99 tutarında sabit fiyatlı bir dönem oluşturur ve ardından faturalandırmayı durdurur.

### Deneme Süresi {#trial-period}

Deneme teklifi anahtarını etkinleştirmek, ağ yöneticisinin ürün için bir deneme süresi tanımlamasına olanak tanır.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Deneme süresi boyunca müşteriler ürünü ücretsiz olarak kullanabilir ve deneme süresi dolana kadar faturalandırılmazlar.

### Kurulum Ücreti {#setup-fee}

Planınıza bir kurulum ücreti de uygulayabilirsiniz.

![Fiyatlandırma ve kaydetme bölümü](/img/config/product-pricing-save.png)

Bu, müşterinizin ilk tahsilatta (plan fiyatına ek olarak) bu bölümde tanımladığınız ücrete karşılık gelen ekstra bir tutar ödeyeceği anlamına gelir.

### Aktif {#active}

Aktif anahtarı, ürünün yeni kayıtlar için müşterilere sunulup sunulmadığını etkili biçimde tanımlar.

![Aktif anahtarı](/img/config/product-active.png)

Bu planda mevcut müşteriler varsa, anahtarı devre dışı durumuna getirmek planı etkili biçimde eski müşteriler için korur ve gelecekteki kayıtlardan kaldırır. **Plandaki mevcut müşteriler**, yeni bir plana geçirilene veya plandan kaldırılana kadar **faturalandırılmaya devam eder**.

### Ürün Görseli {#product-image}

**Görsel Yükle** düğmesi, ağ yöneticisinin bir ürün görseli seçmek veya yüklemek için medya kitaplığını kullanmasına olanak tanır.

![Ürün görseli bölümü](/img/config/product-image.png)

### Sil {#delete}

**Ürünü Sil** düğmesi ürünü sistemden siler. Ürün yayımlandıktan sonra görünür.

![Ürün silme bölümü](/img/config/product-delete.png)

Diğer silme işlemlerinden farklı olarak, ürün herhangi bir çöp durumuna yerleştirilmez. Bu nedenle silindikten sonra işlem geri alınamaz.

### Ürün Seçenekleri {#product-options}

Temel düzeyde ürün bilgileri tanımlandıktan sonra, ürün seçenekleri ağ yöneticisinin ürünün belirli niteliklerini daha ayrıntılı tanımlamasına yardımcı olur.

#### Genel {#general}

**Genel** sekmesi, ürüne özel diğer sekmelerden herhangi biri için geçerli olmayan ürünün genel niteliklerini tanımlar.

![Genel sekmesi](/img/config/product-general-tab.png)

Kendini açıklayan **ürün slug** değeri, ürünün URL'lerde ve Ultimate Multisite içindeki diğer alanlarda tanımlandığı slug değerini belirler.

Ultimate Multisite; Plan, Paket ve Hizmet olmak üzere çeşitli ürün türlerini destekler. **Ürün Seçenekleri** sekmeleri, belirtilen ürün türüne bağlı olarak dinamik şekilde ayarlanır.

**Müşteri Rolü**, site oluşturulduğunda müşteriye atanan rolü belirtir. Çoğu ağ yöneticisi için bu genellikle Ultimate Multisite varsayılanı veya Yönetici olacaktır. Ultimate Multisite varsayılan rolü **Ultimate Multisite > Settings > Login & Registration** bölümünde ayarlanabilir.

![Müşteri rolü ayarları](/img/config/product-customer-role-settings.png)

#### Yükseltmeler ve Düşürmeler {#up--downgrades}

Bu sekme, müşterinin kendi belirli kademesi içinde kullanabileceği yükseltme ve düşürme yollarını belirtir.

Bu kavramı anlamak için, niş bir Ultimate Multisite kurulumunun müşterilerine öğrenme yönetimi çözümleri sağladığı bir örneği düşünün. Bunu başarmak için üç plan (Basic, Plus ve Premium) tanımlanır ve her plan için belirli pluginler etkinleştirilir (pluginlerin nasıl etkinleştirileceğine ilişkin talimatlar için bu bölümün ilerleyen kısmına bakın).

Ultimate Multisite kurulumu ayrıca işletme web sitelerine veya eCommerce web sitelerine hizmet veriyorsa, bu planlar farklı pluginlerin yüklenmesini ve etkinleştirilmesini gerektirebilir.

Bu nedenle, eLearning müşterilerinin eCommerce planlarına geçiş yapmasına izin vermek istenmeyen ve sorunlu bir durum olur; çünkü bu planlar, fiyatlandırma ve sınırlamalar uygun bir eşleşme olmayabilir.

Dolayısıyla, müşterinin yolunu kısıtlamak ve olayları önlemek için ağ yöneticisi bir plan grubu tanımlayabilir ve bu grup içinde müşterinin geçiş yapabileceği planları belirtebilir.

![Yükseltmeler ve Düşürmeler sekmesi](/img/config/product-upgrades.png)

Bir plan grubu tanımlamak için **plan grubu** listesinde uyumlu planları belirtin. **ürün sırası**, planların en düşükten en yükseğe nasıl sıralanacağını ve görüntüleneceğini belirler.

Ultimate Multisite ayrıca, uygun eklenti ürünlerin ve hizmetlerin planlara eklenebildiği bir **order bump** özelliği de içerir. Bunlar, checkout sırasında veya bir yükseltme esnasında planlara eklenebilecek ek öğeler olarak müşteriye sunulur.

#### Fiyat Varyasyonları {#price-variations}

Fiyat varyasyonları, ağ yöneticisinin süreye bağlı olarak alternatif fiyatlandırma kademeleri belirtmesine olanak tanır. Bu ayar, aynı ürün için aylık, üç aylık, yıllık veya başka herhangi bir faturalandırma döneminin sunulmasını mümkün kılar. Örneğin, bir ürünü $29.99/ay olarak ve indirimli yıllık seçenekle $249.99/yıl olarak ayarlayabilirsiniz.

![Fiyat Varyasyonları sekmesi](/img/config/product-price-variations-tab.png)

Fiyat varyasyonları oluşturmak için **Fiyat Varyasyonlarını Etkinleştir** anahtarını etkin konuma getirin ve **Yeni Fiyat Varyasyonu ekle** düğmesine tıklayın.

![Ürün fiyat varyasyonları](/img/config/product-price-variations.png)

Bir varyasyon girmek için varyasyonun süresini, dönemini ve fiyatını ayarlayın. Düğmeye tekrar tıklayarak ek varyasyonlar girilebilir.

Örneğin, temel ürün fiyatınız aylık $29.99 ise şunları ekleyebilirsiniz:

  * **3 Ay** $79.99 (aylığa göre küçük bir indirim)
  * **1 Yıl** $249.99 (yıllık taahhüt için önemli bir indirim)

:::tip Frontend'de Faturalandırma Dönemi Anahtarı Görüntüleme

Fiyat varyasyonları tek başına frontend checkout'a bir geçiş anahtarı veya switch eklemez. Müşterilerin faturalandırma dönemleri arasında geçiş yapmasına (örn. Aylık / Yıllık) izin vermek için checkout formunuza bir **Dönem Seçimi** alanı eklemeniz gerekir. Adım adım talimatlar için [Checkout Formları: Dönem Seçimi Anahtarı Ekleme](checkout-forms#adding-a-period-selection-toggle) bölümüne bakın.
:::

#### Vergiler {#taxes}

**Vergiler** sekmesi, **Ultimate Multisite > Settings > Taxes** bölümünde belirtilen vergi ayarlarıyla ve daha özel olarak tanımlanan vergi oranlarıyla uyumludur. Vergileri etkinleştirmek ve geçerli vergi oranlarını tanımlamak için lütfen **Ultimate Multisite: Settings** içindeki dokümantasyona bakın.

![Vergiler sekmesi](/img/config/product-taxes.png)

Önceki bir örnekte, California'daki (Amerika Birleşik Devletleri) müşteriler için geçerli olan %7.25 yerel vergi oranı tanımlamıştık.

Vergi oranı **Ultimate Multisite > Settings > Manage Tax Rates** bölümünde tanımlandıktan sonra ürün düzeyinde seçilebilir hale gelir.

![Vergiler sekmesi](/img/config/product-taxes.png)

Bir ürünün vergilendirilebilir bir öğe olduğunu belirtmek için **Vergilendirilebilir** anahtarını etkin konuma getirin ve Vergi Kategorisi açılır menüsünden geçerli vergi oranını seçin.

#### Site Şablonları {#site-templates}

Özünde, site şablonları müşterinin aboneliğinin başlangıcında müşterinin sitesine klonlanan eksiksiz WordPress web siteleridir.

![Site Şablonları sekmesi](/img/config/product-site-templates.png)

Ağ yöneticisi, şablon siteyi etkinleştirilmiş ve yapılandırılmış temalar, pluginler ve içerikle normal bir WordPress sitesi olarak oluşturur ve yapılandırır. Şablon site müşteriye birebir klonlanır.

Bu sekme, ağ yöneticisinin yeni bir abonelikte site şablonlarının davranışını belirtmesine olanak tanır. Bu plan için site şablonlarından yararlanmak üzere **Site Şablonlarına İzin Ver** anahtarını etkin durumuna getirin.

**Site Şablonlarına İzin Ver** devre dışı bırakıldığında, bir checkout formu, paylaşılabilir bağlantı veya URL parametresi şablonları normalde kullanılabilir hale getirse bile plandaki müşteriler şablon seçemez. Ultimate Multisite artık bu sınırı mevcut giriş noktaları genelinde bir fallback zinciri aracılığıyla uygular: önce plan ayarları, ardından checkout-form şablon ayarları, ardından önceden seçilmiş veya URL ile sağlanan şablonlar kontrol edilir. Bu, plan sınırlarını tutarlı tutar ve şablonların bunları sunmaması gereken ürünler için görünmesini önler.

**Site şablonu seçim modu**, abonelik süreci sırasında site şablonlarının davranışını tanımlar.

**V** **arsayılan** ayar, ödeme formundaki adımları izler. Ağ yöneticisi ödeme sürecinde bir şablon seçim adımı tanımlamışsa ve bu adım şablonlarla tanımlanmışsa, bu ayar ödeme adımında belirlenen yönergelere uyar.

**S** **ite Şablonu Ata** seçeneğini belirtmek, belirtilen şablonun seçimini zorunlu kılar. Sonuç olarak, ödeme sürecindeki tüm şablon seçim adımları kaldırılır.

Son olarak, **M** **evcut Site Şablonlarını Seç** seçeneği, ödeme adımında belirtilen şablonları bu ayarda seçilen şablonlarla geçersiz kılar. Müşteriye seçimde yardımcı olmak için önceden seçilmiş bir şablon da tanımlanabilir.

Sonuç olarak ağ yöneticisi şablon seçiminin ödeme adımlarında gerçekleşmesini istiyorsa ' _default_ ' ayarı yeterli olacaktır. Alternatif olarak, şablon seçimini kaldırıp kilitlemek ve seçimi plan ayarlarına devretmek için ' _assign new template_ ' veya ' _choose available site templates_ ' seçenekleri tercih edilebilir.

#### Siteler {#sites}

**Siteler** sekmesi, Ultimate Multisite'ın sınırlama işlevselliğinin bir parçasıdır.

![Siteler sekmesi](/img/config/product-sites.png)

Bu ayar, bir müşterinin üyeliği kapsamında oluşturabileceği maksimum site sayısını belirtir.

Sınırlamayı etkinleştirmek için **siteleri sınırla** anahtarını etkin duruma getirin ve **site hakkı** alanında maksimum site sayısını belirtin.

#### Ziyaretler {#visits}

**Ziyaretler** sekmesi, Ultimate Multisite'ın sınırlamalar sisteminin başka bir parçasıdır. Bu ayar, bir müşterinin sitesine gelen benzersiz ziyaretçilerin sayılmasına ve sonrasında kısıtlanmasına olanak tanır.

![Ziyaretler sekmesi](/img/config/product-visits.png)

Pazarlama açısından ağ yöneticileri, sınırlara ulaşıldığında müşterileri planlarını yükseltmeye teşvik etmek için bu ayardan yararlanabilir. Bu ayar ayrıca ağ yöneticisinin sistem kaynaklarını korumak amacıyla sitelere gelen aşırı trafiği azaltmasına ve önlemesine yardımcı olabilir.

Bu özelliği kullanmak için **benzersiz ziyaretleri sınırla** anahtarını etkin duruma getirin ve **benzersiz ziyaret kotası** alanında maksimum benzersiz ziyaretçi sayısını belirtin.

Bu sınıra ulaşıldığında Ultimate Multisite, sınırların aşıldığını belirten bir mesaj göstermek yerine müşterinin sitesini sunmayı durdurur.

#### Kullanıcılar {#users}

Ultimate Multisite'ın 'Kullanıcılar' sınırlamaları, ağ yöneticisinin oluşturulabilecek ve rollere atanabilecek kullanıcı sayısına sınırlar koymasına olanak tanır.

![Kullanıcılar sekmesi](/img/config/product-users.png)

Sınırlamalar özelliğini etkinleştirmek için **kullanıcıyı sınırla** anahtarını sağa kaydırarak etkin duruma getirin.

Ardından, sınırlandırılacak her rol için yanındaki anahtarı etkin duruma getirin ve uygun alanda maksimum üst sınırı tanımlayın.

#### Yazı Türleri {#post-types}

**Yazı Türleri** sekmesi, ağ yöneticisinin WordPress içindeki geniş yazı türleri dizisine ayrıntılı sınırlar koymasına olanak tanır.

![Yazı Türleri sekmesi](/img/config/product-post-types.png)

WordPress'in yapısı nedeniyle yazılar ve yazı türleri, temel işlevselliğinin önemli bir bileşenidir; bu nedenle Ultimate Multisite'ın sınırlamalar sistemi, ağ yöneticisine sınırlar belirleme ve sürdürme konusunda yardımcı olmak üzere tasarlanmıştır.

Bu sınırlar alt sistemini etkinleştirmek için **yazı türlerini sınırla** anahtarını sağa kaydırarak etkin duruma getirin.

Ardından, sınırlandırılacak her yazı türü için anahtarı sağa kaydırarak açın ve uygun alanda maksimum üst sınırı belirtin.

#### Disk Alanı {#disk-space}

**Disk Alanı** sekmesi, ağ yöneticilerinin müşteriler tarafından tüketilen alanı kısıtlamasına olanak tanır.

![Disk Alanı sekmesi](/img/config/product-disk-space.png)

Genellikle bir WordPress multisite içinde çekirdek dosyalar tüm siteler arasında paylaşılır ve bu ayarların ve sınırlamaların uygulandığı medya dosyaları ve yüklemeler için ayrı dizinler oluşturulur.

Disk kullanımı sınırlamasını etkinleştirmek için **site başına disk boyutunu sınırla** anahtarını sağa kaydırarak etkin duruma getirin.

Ardından, **disk alanı hakk** ı alanında megabayt cinsinden maksimum üst sınırı belirtin.

#### Özel Alan Adı {#custom-domain}

Bu seçeneği açarak, özel alan adlarına özellikle bu planda izin verebilirsiniz.

![Özel Alan Adları sekmesi](/img/config/product-custom-domains.png)

#### Temalar {#themes}

Ürün seçenekleri içindeki **Temalar** sekmesi, ağ yöneticisinin temaları müşterilerin seçimine sunmasına ve isteğe bağlı olarak temanın durumunu zorunlu kılmasına olanak tanır.

![Temalar sekmesi](/img/config/product-themes.png)

_**Not: Temaların müşterilere sunulabilmesi için ağ yöneticisi tarafından ağ genelinde etkinleştirilmiş olmaları gerekir.**_

![Ağ temaları sayfası](/img/config/product-themes-network-enabled.png)

**görünürlük** seçeneği, müşterinin kendi sitesi içinde **Görünüm > Temalar** sekmesini görüntülerken bu temanın görünür olup olmadığını tanımlar. Bu seçeneği **Gizli** olarak ayarlamak, temayı görünümden kaldırır ve böylece seçme ve etkinleştirme olanağını kısıtlar.

![Temalar sekmesi](/img/config/product-themes.png)

**davranış** seçimi, ağ yöneticisinin müşteri sitesi oluşturulduğunda temanın durumunu tanımlamasına olanak tanır.

**K** **ullanılabilir** durumunda tema, müşterinin kendi kendine etkinleştirmesi için kullanılabilir hale getirilir. Buna karşılık, **Kullanılamaz** durumu müşteriden temayı etkinleştirme olanağını kaldırır. Son olarak, **Zorla Etkinleştir** seçeneği temanın seçimini ve etkinleştirilmesini zorunlu kılar; böylece site oluşturulduğunda varsayılan olarak ayarlanır.

#### Eklentiler {#plugins}

Temalar sekmesine benzer şekilde, Ultimate Multisite ağ yöneticisinin eklentilerin müşterilere görünürlüğünü ve yeni bir site oluşturulduğunda durumlarını tanımlamasına olanak tanır.

![Eklentiler sekmesi](/img/config/product-plugins.png)

**görünürlük** açılır menüsü, eklentinin müşteri tarafından kendi sitesinde Eklentiler menü seçeneği üzerinden görüntülendiğinde görünür ya da gizli olmasını sağlar.

Ağ yöneticisi, davranış açılır menüsündeki seçenekleri kullanarak eklentilerin davranışını daha fazla değiştirebilir.

![Eklentiler sekmesi](/img/config/product-plugins.png)

**Varsayılan** seçimi, müşteri tarafından seçilen site şablonunda tanımlanan eklenti durumuna uyar. Böylece şablon içinde etkinleştirilmiş eklentiler, şablon müşterinin sitesine klonlandığında etkin kalır.

**Zorla Etkinleştir**, site oluşturulduğunda eklentiyi etkin duruma getirir; buna karşılık **Zorla Devre Dışı Bırak**, site oluşturulduğunda eklentiyi devre dışı bırakır. Bu iki durumda da eklentinin durumu, müşteri tarafından WordPress Eklentiler menüsü üzerinden manuel olarak değiştirilebilir.

**Zorla Etkinleştir ve Kilitle** ayarı benzer şekilde çalışır ancak eklenti durumunun müşteri tarafından değiştirilmesini engeller. Böylece Zorla Etkinleştir ve Kilitle ayarı, eklentiyi etkin durumuna zorlar ve müşterinin onu devre dışı bırakmasını engeller. Benzer şekilde, **Zorla Devre Dışı Bırak ve Kilitle** ayarı eklentiyi devre dışı durumuna zorlar ve kullanıcının eklentiyi etkinleştirmesini engeller.

Ağ yöneticisi, Zorla Etkinleştir ve Kilitle ile Zorla Devre Dışı Bırak ve Kilitle ayarlarını site şablonlarıyla birlikte değerlendirmek isteyebilir; çünkü şablonlardaki eklentiler ve eklenti durumları, seçilmeleri halinde bu ayarlardan etkilenebilir.

#### Sınırlamaları Sıfırla {#reset-limitations}

**Sınırlamaları Sıfırla** sekmesi, ürün üzerinde tanımlanan tüm özel sınırları sıfırlar. Sınırlamaları sıfırlamak için **sınırlamaları sıfırla** düğmesine tıklayın.

![Sınırlamaları Sıfırla sekmesi](/img/config/product-reset-limitations.png)

İşlemi onaylamak için **sıfırlamayı onayla** anahtarını sağ tarafta etkin durumuna kaydırın ve **sınırlamaları sıfırla** düğmesine tıklayın.

![Sınırlamaları Sıfırla sekmesi](/img/config/product-reset-limitations.png)

## Ürünü Düzenle, Çoğalt veya Sil {#edit-duplicate-or-delete-product}

Mevcut ürünler, **Ultimate Multisite > Ürünler** yoluna gidilip mevcut ürün adının üzerine gelinerek düzenlenebilir, çoğaltılabilir veya silinebilir.

![Ürün üzerine gelme eylemleri](/img/config/product-hover-actions.png)
