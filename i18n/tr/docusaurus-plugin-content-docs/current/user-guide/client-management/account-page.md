---
title: Müşteri Hesap Sayfası
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Müşterinizin Hesap Sayfası (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümünü kapsamaktadır.**_

Müşteriler ağınızdaki bir plana abone olduğunda, ödemeleri, üyelikleri, alan adları, plan sınırlamaları ve daha fazlası hakkında önemli bilgiler içeren bir web sitesine ve kontrol paneline erişim kazanırlar.

Bu rehberde, müşteri hesap sayfasını adım adım inceleyecek ve müşterilerinizin bu sayfada neler görebileceğini ve neler yapabileceğini öğreneceksiniz.

## Hesap Sayfası

Hesap sayfasına, müşterinizin kontrol panelindeki **Account** seçeneğine tıklayarak ulaşılır.

![Müşteri kontrol panelindeki Account menüsü](/img/admin/dashboard.png)

![Müşteri hesap sayfasına genel bakış](/img/admin/dashboard.png)

Müşteri bu seçeneğe tıkladığında, üyeliğine, fatura adresine, faturalarına, alan adlarına ve site sınırlamalarına ilişkin bir genel bakış görür. Ayrıca **Site Template** değişikliği de yapabilir (ağınızda buna izin veriliyorsa).

Müşteriler ayrıca üyeliklerini başka bir plana geçirebilir veya sunduğunuz ek paketleri ya da hizmetleri satın alabilir. Şimdi her bölümü ayrı ayrı inceleyelim.

### Üyeliğinize Genel Bakış:

Müşterilerinizin web sitesi adının hemen altındaki ilk blok, mevcut planlarının ve bu planla birlikte satın aldıkları hizmet/paketlerin genel görünümünü sunar. Bu blok ayrıca üyelik numarasını, başlangıçta ödenen tutarı, plan ve hizmet/paket maliyetlerini ve bu üyelik için kaç kez faturalandırıldıklarını gösterir. Üyeliğin **Active** (Aktif), **Expired** (Süresi Dolmuş) veya **Canceled** (İptal Edilmiş) durumda olup olmadığını da görebilirler.

![Plan, tutar ve fatura bilgilerini gösteren üyelik genel bakışı](/img/admin/memberships-list.png)

Bu bloğun hemen altında, müşterileriniz **About This Site** ve **Site Limits** bloklarını görebilir. Bu bloklar, planlarıyla gelen tüm sınırlamaları gösterir: disk alanı, yazılar, sayfalar, ziyaretler vb. Bu limitler, **Ultimate Multisite > Products** altındaki her plan sayfasında yapılandırılabilir.

![Plan sınırlamalarını gösteren About This Site ve Site Limits blokları](/img/admin/dashboard.png)

**Your Membership** bölümünün sağ tarafında müşteriler **Change** seçeneğine tıklayabilir. Bu, tüm mevcut planları ve paketleri/hizmetleri gösterir. Başka bir plan seçerlerse, mevcut üyelik sınırlamaları yerine yeni planın sınırlamaları geçerli olur - plan yükseltme veya düşürme fark etmeksizin.

Müşterileriniz mevcut üyelikleri için paket veya hizmet satın almayı tercih ederse - örneğin daha fazla disk alanı veya ziyaret hakkı - mevcut üyelik değişmez, sadece yeni paketler üyeliğe eklenir.

Bu üyelik değiştirme sayfasında kupon kodları eklenemez. Müşteri ilk üyelik satın alımında bir kupon kodu kullandıysa, bu kod yeni üyeliğe de uygulanır.

### Fatura Adresini Güncelleme:

Hesap sayfasında müşterileriniz fatura adreslerini de güncelleyebilir. Tek yapmaları gereken _Billing Address_ yanındaki **Update** seçeneğine tıklamaktır.

![Update düğmeli Billing Address bölümü](/img/admin/customers-list.png)

Müşterinize yeni bir pencere açılacaktır. Yapması gereken tek şey yeni adresi doldurmak ve _Save Changes_ düğmesine tıklamaktır.

![Fatura adresi güncelleme formu](/img/admin/customers-list.png)

### Site Şablonunu Değiştirme:

Müşterilerinizin site şablonlarını değiştirmesine izin vermek için **Ultimate Multisite > Settings > Sites** bölümüne gidin ve **Allow Template Switching** seçeneğini etkinleştirin.

Ayrıca **Ultimate Multisite > Products** bölümünde planlarınızı seçin ve **Site Templates** sekmesine gidin. **Allow Site Templates** seçeneğinin etkin olduğundan ve **Site Template Selection Mode** bölümünde **Choose Available Site Templates** seçeneğinin seçili olduğundan emin olun.

![Şablon seçim modlu Product site templates sekmesi](/img/config/product-site-templates.png)

Web sitenizde kullanılabilir tüm site şablonlarını görebilirsiniz. Bu plan altında abone olan müşterilerinize hangi şablonların sunulacağını ve hangilerinin sunulmayacağını seçin. Bu seçeneklerin ödeme formunu da etkilediğini unutmayın; **Not Available** olarak işaretlenen şablonlar, bu plan için kayıt sayfasında görünmez.

Artık müşterileriniz hesap sayfalarında **Change Site Template** seçeneğine tıklayabilir.

![Hesap sayfasındaki Change Site Template düğmesi](/img/admin/dashboard.png)

Bu plan için kullanılabilir tüm Site Şablonlarının listesi müşterinize gösterilecektir.

![Plan için kullanılabilir site şablonları listesi](/img/config/site-templates-list.png)

Geçmek istedikleri şablonu seçtikten sonra, değişikliği onaylamaları istenecektir.

![Site şablonu değiştirme onay penceresi](/img/admin/dashboard.png)

Onay seçeneğini etkinleştirip **Process Switch** düğmesine tıkladıktan sonra, müşterinizin web sitesinde yeni site şablonu kullanılmaya başlanacaktır.

### Özel Alan Adı Ekleme:

Müşterileriniz hesap sayfasında bu plan için özel alan adı ekleme seçeneğine de sahip olacaktır. Müşterilerinizin özel alan adı kullanmasına izin vermek için **Ultimate Multisite > Settings > Domain Mapping** bölümüne gidin.

**Enable Domain Mapping** seçeneğini etkinleştirin. Bu, müşterilerinizin ağ genelinde özel alan adları kullanmasına olanak tanır.

Ürün bazında da alan adı eşlemenin etkin olup olmadığını kontrol etmeyi unutmayın - çünkü bir ürünü müşterilerinizin özel alan adı kullanmasına izin vermeyecek şekilde sınırlayabilirsiniz.

**Ultimate Multisite > Products** bölümüne gidin. İstediğiniz planı seçin ve **Custom Domains** sekmesine gidin. **Allow Custom Domains** seçeneğini etkinleştirin.

![Allow Custom Domains seçeneğini içeren Custom Domains sekmesi](/img/config/product-custom-domains.png)

Bu, söz konusu plana abone olan tüm müşterilerin özel alan adı kullanmasına izin verecektir. Artık hesap sayfasında müşterileriniz **Add Domain** seçeneğine tıklayarak özel alan adı ekleyebilir.

![Hesap sayfasındaki Add Domain düğmesi](/img/admin/domains-list.png)

Açılan ilk pencere, müşterilerinize bu özel alan adının ağınızda çalışması için DNS kayıtlarını nasıl güncelleyeceklerine dair talimatlar içeren bir mesaj gösterecektir.

![Özel alan adı eklerken gösterilen DNS talimatları](/img/admin/domains-list.png)

Bu mesaj, sizin tarafınızdan **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bölümünden düzenlenebilir.

![Domain Mapping içindeki Add New Domain Instructions ayarı](/img/config/settings-domain-mapping.png)

**Next Step** düğmesine tıkladıktan sonra müşterileriniz özel alan adlarını girebilir ve bu alan adının birincil alan adı olup olmayacağını seçebilir. Müşterilerinizin web siteleri için birden fazla özel alan adı kullanabileceğini unutmayın, bu nedenle hangisinin birincil olacağını seçebilirler.

![Birincil alan adı seçeneği ile özel alan adı giriş alanı](/img/admin/domains-list.png)

**Add Domain** düğmesine tıkladıktan sonra alan adı müşterinizin hesabına eklenecektir. Artık tek yapmaları gereken, alan adı kayıt şirketinde bu özel alan adının DNS kayıtlarını değiştirmektir.

### Şifre Değiştirme:

Hesap panelinde müşterileriniz **Change Password** seçeneğine tıklayarak şifrelerini de değiştirebilir.

![Hesap sayfasındaki Change Password düğmesi](/img/admin/dashboard.png)

Bu, müşterilerinizin mevcut şifrelerini ve kullanmak istedikleri yeni şifreyi girmeleri gereken yeni bir pencere açacaktır.

![Mevcut ve yeni şifre alanlarını içeren şifre değiştirme formu](/img/admin/dashboard.png)

### Tehlikeli Bölge:

**Danger Zone** bölümünde gösterilen iki seçenek de bulunmaktadır: **Delete Site** ve **Delete Account**. Her ikisi de Tehlikeli Bölge'de yer almaktadır çünkü bu iki işlem geri alınamaz. Müşterileriniz web sitelerini veya hesaplarını silerse, bunları geri kurtaramazlar.

![Delete Site ve Delete Account seçeneklerini içeren Danger Zone](/img/admin/dashboard.png)

Müşterileriniz bu iki seçenekten birine tıklarsa, web sitesini veya hesabı kaldırma seçeneğini etkinleştirmeleri gereken bir pencere gösterilecek ve bu işlemin geri alınamayacağı konusunda uyarılacaklardır.

![Site silme onay penceresi](/img/admin/dashboard.png)

![Hesap silme onay penceresi](/img/admin/dashboard.png)

Web sitelerini silerlerse, hesapları ve üyelikleri etkilenmez. Sadece web sitelerindeki tüm içeriği kaybederler. Hesaplarını silerlerse, bu hesaba ait tüm web siteleri, üyelikler ve bilgiler kaybolur.
