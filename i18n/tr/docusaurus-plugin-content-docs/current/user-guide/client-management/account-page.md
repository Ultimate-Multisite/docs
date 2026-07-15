---
title: Müşteri Account Sayfası
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Müşterinizin Account Sayfası (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne atıfta bulunur.**_

Müşteriler ağınızda bir plana abone olduklarında, ödemeleri, üyelikleri, domainleri, plan sınırlamaları vb. hakkında önemli bilgiler içeren bir web sitesine ve onun Dashboard’una erişim kazanırlar...

Bu eğitimde, müşterinin Account sayfasında size rehberlik edeceğiz ve müşterilerinizin bu sayfada neleri görebileceğini ve yapabileceğini göstereceğiz.

## Account Sayfası {#the-account-page}

Account sayfasına, müşterinizin Dashboard’unda **Account** üzerine tıklayarak erişilebilir.

![Müşteri Dashboard’undaki Account menüsü](/img/account-page/account-menu.png)

Egemen kiracı ağlarda, Ultimate Multisite v2.13.0 bu müşteri yönetimi deneyimini ana sitede tutar. Bir müşteri egemen kiracıdan Account, ödeme, faturalandırma, fatura, site yönetimi, şablon değiştirme veya domain eşleme eylemlerini açarsa, ağ faturalandırma ve üyelik kayıtlarının yetkili kalması için eylem ana site müşteri paneline geri yönelir.

Müşteri egemen kiracıdan geldiğinde, ana site müşteri paneli kiracı siteye geri dönüş bağlantısı içerebilir. Geri dönüş bağlantısı yalnızca Ultimate Multisite geri dönüş hedefini müşterinin sitelerinden biri olarak doğrulayabildiğinde gösterilir; bu da kiracı iş akışını korurken keyfi yönlendirmeleri önler.

![Müşteri Account sayfası genel görünümü](/img/account-page/overview.png)

Bir müşteri buna tıkladıktan sonra üyeliğinin, fatura adresinin, faturalarının, domainlerinin, site sınırlamalarının genel görünümünü görecek ve ayrıca ****Site Şablonu** (ağınızda izin veriliyorsa)** değiştirebilecektir.

Ayrıca üyeliği başka bir plana değiştirebilir veya sunduğunuz başka bir paket ya da hizmeti satın alabilirler. Her bölüme ayrı ayrı bakalım.

### Üyeliğinizin Genel Görünümü: {#your-membership-overview}

Müşterilerinizin web sitesi adının hemen altındaki ilk blok, mevcut planlarının ve onunla birlikte satın alınan hizmetlerin/paketlerin genel görünümünü gösterir. Blok ayrıca üyelik numarasını, bunun için ödenen ilk tutarı, planın ve herhangi bir hizmetin/paketin ne kadar tuttuğunu ve bu üyelik için kaç kez faturalandırıldıklarını gösterir. Üyeliğin **Aktif** , **Süresi Dolmuş** veya **İptal Edilmiş** olup olmadığını da görebilirler.

![Planı, tutarı ve faturalandırma ayrıntılarını gösteren üyelik genel görünümü](/img/account-page/membership-card.png)

Bu bloğun hemen altında, müşterileriniz **Bu Site Hakkında** ve **Site Limitleri** bloklarını görebilir. Bu bloklar, planlarıyla gelen tüm sınırlamaları gösterir: disk alanı, yazılar, sayfalar, ziyaretler vb... Bu limitler, **Ultimate Multisite > Ürünler** içindeki her plan sayfasında yapılandırılabilir.

![Plan sınırlamalarını gösteren Bu Site Hakkında ve Site Limitleri blokları](/img/account-page/site-limits.png)

**Üyeliğiniz** öğesinin sağ tarafında müşteriler **Değiştir** üzerine tıklayabilir. Bu, onlara mevcut tüm planları ve paketleri/hizmetleri gösterecektir. Başka bir plan seçerlerse, üyeliğin mevcut sınırlamaları yerine o planın sınırlamaları geçerli olur; bunun düşürme veya yükseltme olması fark etmez.

Şimdi, müşterileriniz bu mevcut üyelik için daha fazla disk alanı veya ziyaret gibi paketler ya da hizmetler satın almayı seçerse, mevcut üyelik değiştirilmeyecek, yalnızca yeni paketler üyeliğe eklenecektir.

Kupon kodlarının bu üyelik değiştirme sayfasına eklenemeyeceğini unutmayın. Müşteri ilk üyelik satın alımında bir kupon kodu kullandıysa, kod bu yeni üyeliğe de uygulanacaktır.

### Fatura Adresini Güncelleme: {#updating-the-billing-address}

Account sayfasında müşterileriniz fatura adreslerini de güncelleyebilir. Tek yapmaları gereken _Fatura Adresi_ yanındaki **Güncelle** üzerine tıklamaktır.

![Güncelle düğmesiyle Fatura Adresi bölümü](/img/account-page/billing-address.png)

Müşteriniz için yeni bir pencere açılacaktır. Tek yapması gereken yeni adresi doldurmak ve _Değişiklikleri Kaydet_ üzerine tıklamaktır.

![Fatura adresini güncelleme formu](/img/account-page/billing-address-form.png)

### Site Şablonunu Değiştirme: {#changing-the-site-template}

Müşterilerinizin site şablonlarını değiştirmesine izin vermek için **Ultimate Multisite > Ayarlar > Siteler** bölümüne gitmeniz ve **Şablon Değiştirmeye İzin Ver** seçeneğini açmanız gerekir.

Ayrıca **Ultimate Multisite > Ürünler** bölümünde planlarınızı seçin ve **Site Şablonları** sekmesine gidin. **Site Şablonlarına İzin Ver** seçeneğinin açık olduğundan ve **Site Şablonu Seçim Modu** bölümünde **Kullanılabilir Site Şablonlarını Seç** seçeneğinin seçili olduğundan emin olun.

![Şablon seçim moduyla ürün site şablonları sekmesi](/img/config/product-site-templates.png)

Web sitenizdeki tüm kullanılabilir site şablonlarını görebileceksiniz. Hangilerini kullanılabilir yapmak istediğinizi ve bu plana abone olan müşterileriniz için hangilerinin kullanılabilir olmamasını istediğinizi seçin. Bu seçeneklerin ödeme formunu da etkilediğini unutmayın; bu nedenle **Kullanılamaz** olarak seçilen herhangi bir şablon, bu planın kayıt sayfasında görünmeyecektir.

Artık müşterileriniz Account sayfalarının içinde **Site Şablonunu Değiştir** üzerine tıklayabilir.

![Account sayfasındaki Site Şablonunu Değiştir düğmesi](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 yeniden tasarlanmış bir şablon değiştirme paneli gösterir. Panel, müşterilerin bir yedek seçmeden önce hangi şablonun aktif olduğunu görebilmesi için bir **mevcut şablon kartı** ile başlar.

Kullanılabilir site şablonlarından oluşan kalıcı bir ızgara, müşteriler seçeneklerini incelerken görünür kalır. Bu, mevcut seçimi gözden kaybetmeden planları için izin verilen şablonları karşılaştırmalarına yardımcı olur.

![Plan için kullanılabilir site şablonları listesi](/img/config/site-templates-list.png)

Geçmek istedikleri şablonu seçtikten sonra değişikliği onaylamaları istenecektir.

![Site şablonu değiştirme onay iletişim kutusu](/img/account-page/template-switch-confirm.png)

Onayı açıp **Geçişi İşle** üzerine tıkladıktan sonra, yeni site şablonu müşterinizin web sitesinde kullanılacaktır.

Müşteriler, siteyi şu anda atanmış template’e geri sıfırlamaları gerektiğinde bu panelden **Reset current template** seçeneğini de kullanabilir. Başka bir template’e geçmek gibi, bir template’i sıfırlamak site içeriğinin üzerine yazabilir; bu yüzden müşteriler sıfırlama işlemini yalnızca ne anlama geldiğini anladıklarında onaylamalıdır.

### Özel Domainler Ekleme: {#adding-custom-domains}

Müşterileriniz ayrıca Account sayfalarında bu plan için özel bir domain ekleme seçeneğine sahip olacaktır. Müşterilerinizin özel domainler kullanmasına izin vermek için **Ultimate Multisite > Settings >** **Domain Mapping** bölümüne gidin.

**Enable Domain Mapping** seçeneğini açın. Bu, müşterilerinizin network düzeyinde özel domainler kullanmasına izin verecektir.

Domain mapping’in ürün bazında etkinleştirilip etkinleştirilmediğini de kontrol etmeyi unutmayın; çünkü bir ürünün müşterilerinizin özel domainler kullanmasına izin vermemesini sınırlayabilirsiniz.

**Ultimate Multisite > Products** bölümüne gidin. Seçtiğiniz planı seçin ve **Custom Domains** sekmesine gidin. **Allow Custom Domains** seçeneğini açın.

![Özel Domainler sekmesi ve Allow Custom Domains anahtarı](/img/config/product-custom-domains.png)

Bu, bu belirli plana abone olan tüm müşterilerin özel domainler kullanmasına izin verecektir. Şimdi, Account sayfasında müşterileriniz **Add Domain** seçeneğine tıklayarak özel bir domain ekleyebilir.

![Account sayfasındaki Add Domain düğmesi](/img/account-page/add-domain-button.png)

Açılan ilk pencere, müşterilerinize bu özel domainin network’ünüzde çalışmasını sağlamak için DNS kayıtlarını nasıl güncelleyeceklerini anlatan bir mesaj gösterecektir.

![Özel domain eklerken gösterilen DNS talimatları](/img/account-page/add-domain-dns.png)

Bu mesaj **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bölümünden (sizin tarafınızdan) düzenlenebilir.

![Domain Mapping içindeki Add New Domain Instructions ayarı](/img/config/settings-domain-mapping.png)

Domain mapping ayarları sayfasının tam görünümü:

![Domain mapping ayarları tam sayfası](/img/config/settings-domain-mapping-full.png)

**Next Step** seçeneğine tıkladıktan sonra müşterileriniz özel domain adlarını ekleyebilir ve bu özel domainin birincil olup olmayacağını seçebilir. Müşterilerinizin web siteleri için birden fazla özel domain kullanabileceğini unutmayın; bu yüzden hangisinin birincil olacağını seçebilirler.

![Birincil domain seçeneğiyle özel domain adı girişi](/img/account-page/add-domain-primary.png)

**Add Domain** seçeneğine tıkladıktan sonra domain müşterinizin hesabına eklenecektir. Şimdi yapmaları gereken tek şey, bu özel domainin DNS kayıtlarını domain kayıt kuruluşlarında değiştirmektir.

### Şifre Değiştirme: {#changing-password}

Account Dashboard içinde müşterileriniz **Change Password** seçeneğine tıklayarak şifrelerini de değiştirebilir.

![Account sayfasındaki Change Password düğmesi](/img/account-page/change-password-button.png)

Bu, müşterilerinizin mevcut şifrelerini doldurmaları ve ardından kullanmak istedikleri yeni şifreyi girmeleri gereken yeni bir pencere gösterecektir.

![Mevcut ve yeni şifre alanları olan şifre değiştirme formu](/img/account-page/change-password-form.png)

### Tehlikeli Bölge: {#danger-zone}

**Danger Zone** bölümünde gösterilen iki seçeneğimiz de vardır: **Delete Site** ve **Delete Account**. Bu iki işlem geri alınamaz olduğu için ikisi de Danger Zone bölümündedir. Müşterileriniz web sitelerini veya hesaplarını silerse, onları geri kurtaramazlar.

![Delete Site ve Delete Account seçenekleriyle Danger Zone](/img/account-page/danger-zone.png)

Müşterileriniz bu iki seçenekten herhangi birine tıklarsa, web sitesini veya hesabı kaldırmak için seçeneği açmaları gereken bir pencere gösterilir ve bu işlemin geri alınamayacağı konusunda uyarılırlar.

![Delete Site onay iletişim kutusu](/img/account-page/delete-site-confirm.png)

![Delete Account onay iletişim kutusu](/img/account-page/delete-account-confirm.png)

Web sitelerini silerlerse, hesapları ve üyelikleri yine de etkilenmez. Yalnızca web sitelerindeki tüm içeriği kaybederler. Hesaplarını silerlerse, bu hesapla ilgili tüm web siteleri, üyelikler ve bilgiler kaybolur.
