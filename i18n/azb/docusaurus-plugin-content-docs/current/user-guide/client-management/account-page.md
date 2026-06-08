---
title: Kliant Akount Paji
sidebar_position: 14
_i18n_hash: 5eabf7a1ac4c1e867c6e627bbf1f2954
---
# Müşterinizin Hesap Sayfası (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Müşterileriniz ağınızda bir plana abone olduklarında, ödemeleri, üyelikleri, alan adları, plan kısıtlamaları vb. hakkındaki önemli bilgileri içeren bir web sitesi ve kontrol paneline erişim sağlarlar.

Bu eğitimde, size müşteri hesap sayfasını adım adım gösterecek ve müşterilerinizin bu sayfada neler görebileceğini ve neler yapabileceğini öğreneceksiniz.

## Hesap Sayfası

Hesap sayfasına, müşterinizin dashboard'ı içindeki **Hesap** bölümüne tıklayarak ulaşabilirsiniz.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

![Customer account page overview](/img/account-page/overview.png)

Müşteri bu sayfaya tıkladıktan sonra, üyelik bilgilerinin genel bir özetini, faturalandırma adresini, faturaları, alan adlarını, site kısıtlamalarını görecek ve ayrıca **Site Şablonunu** (ağınızda izin verilmişse) değiştirebilecektir.

Ayrıca üyeliğini başka bir plana yükseltebilir veya sunduğunuz başka bir paket ya da hizmet satın alabilir. Her bir bölümü ayrı ayrı inceleyelim.

### Üyelik Genel Bakışı:

Müşterinizin web sitesi adının hemen altındaki ilk blok, mevcut planının ve bu planla birlikte satın alınan hizmet/paketlerin bir özetini gösterir. Bu blok aynı zamanda üyelik numarasını, başlangıçta ödenen tutarı, planın ve herhangi bir hizmet/paket maliyetini ve bu üyelik için kaç kez faturalandırıldığını gösterir. Ayrıca üyeliğin **Aktif** , **Süresi Dolmuş** veya **İptal Edilmiş** olup olmadığını da görebilirler.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Bu bloğun hemen altında, müşterileriniz **Bu Site Hakkında** ve **Site Sınırlamaları** bloklarını görebilirler. Bu bloklar, plana bağlı tüm kısıtlamaları gösterir: disk alanı, gönderi, sayfa, ziyaret sayısı vb... Bu limitler, **Ultimate Multisite > Ürünler** sayfasındaki her bir plan için yapılandırılabilir.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

**Üyeliğiniz** bölümünün sağ tarafında, müşteriler **Değiştir** butonuna tıklayabilirler. Bu, mevcut tüm planları ve paket/hizmetleri gösterecektir. Başka bir plan seçerlerse, planın kısıtlamaları, üyelik için mevcut kısıtlamaların yerine geçer; ister düşürsün ister yükseltsin fark etmez.

Şimdi, müşterileriniz bu mevcut üyelik için paket veya hizmet satın almayı seçerse - örneğin daha fazla disk alanı veya ziyaret sayısı - mevcut üyelik değişmeyecek, sadece yeni paketler ona eklenecektir.

Kupon kodlarının bu üyelik değiştirme sayfasında eklenemediğini unutmayın. Eğer müşteri ilk üyelik satın alımında bir kupon kodu kullandıysa, bu kod yeni üyeliğe de uygulanacaktır.

### Faturalandırma Adresini Güncelleme:

Hesap sayfasında, müşterileriniz faturalandırma adreslerini de güncelleyebilirler. Sadece _Faturalandırma Adresi_ yanındaki **Güncelle** butonuna tıklamaları yeterlidir.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Müşterinize yeni bir pencere açılacaktır. Yapması gereken tek şey yeni adresi doldurmak ve _Değişiklikleri Kaydet_ butonuna tıklamaktır.

![Update billing address form](/img/account-page/billing-address-form.png)

### Site Şablonunu Değiştirme:

Müşterilerinizin site şablonlarını değiştirmesine izin vermek için **Ultimate Multisite > Ayarlar > Siteler** bölümüne gitmeli ve **Şablon Değiştirme İzni** seçeneğini açmalısınız.

Ayrıca, **Ultimate Multisite > Ürünler** bölümünde planlarınızı seçin ve **Site Şablonları** sekmesine gidin. **Site Şablonları İzni** seçeneğinin açık olduğundan ve **Site Şablonu Seçim Modu** altında **Mevcut Site Şablonlarını Seç** seçeneğinin seçili olduğundan emin olun.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Web sitenizdeki tüm mevcut site şablonlarını görebileceksiniz. Hangi şablonları kullanıma sunmak istediğinizi ve hangi şablonların bu plan kapsamında abone olan müşterilerinize gösterilmemesi gerektiğini seçin. Bu seçeneğin aynı zamanda ödeme formunu da etkilediğini unutmayın, bu nedenle **Kullanılamaz** olarak seçilen herhangi bir şablon, bu plan için kayıt sayfasında görünmeyecektir.

Artık müşterileriniz hesap sayfalarında **Site Şablonunu Değiştir** butonuna tıklayabilirler.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0, yeniden tasarlanmış bir şablon değiştirme paneli gösteriyor. Panel, müşterilerin bir yenisini seçmeden önce hangi şablonun aktif olduğunu görebilmeleri için bir **mevcut-şablon kartı** ile başlar.

Müşteriler seçeneklerini incelerken, mevcut seçimi gözden kaybetmemelerine yardımcı olmak için, mevcut site şablonlarının kalıcı bir ızgarası görünür kalır.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Değiştirmek istediği şablonu seçtikten sonra, değişikliği onaylaması istenecektir.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Onay düğmesini açıp **Değişikliği İşle** butonuna tıkladıktan sonra, yeni site şablonu müşterinizin web sitesinde kullanılacaktır.

Müşteriler, siteyi şu anda atanmış şablona geri döndürmeleri gerektiğinde bu panelden **Mevcut şablonu sıfırla** özelliğini de kullanabilirler. Başka bir şablona geçmek gibi, bir şablonu sıfırlamak site içeriğini üzerine yazabilir, bu yüzden müşteriler yalnızca sıfırlama işlemini anladıklarında onay vermelidir.

### Özel Alan Adı Ekleme:

Müşterileriniz, hesap sayfalarında bu plan için özel bir alan adı ekleme seçeneğine de sahip olacaklar. Müşterilerinizin özel alan adları kullanmasına izin vermek için **Ultimate Multisite > Ayarlar >** **Alan Adı Eşleştirme** bölümüne gidin.

**Alan Adı Eşleştirme'yi Etkinleştir** seçeneğini açın. Bu, müşterilerinizin ağ düzeyinde özel alan adları kullanmasına izin verecektir.

Ayrıca, alan adının ürün bazında etkinleştirilip etkinleştirilmediğini kontrol etmeyi unutmayın; çünkü bir ürünü müşterilerinizin özel alan adları kullanmasını engellemek için sınırlayabilirsiniz.

**Ultimate Multisite > Ürünler** bölümüne gidin. İstediğiniz planı seçin ve **Özel Alan Adları** sekmesine gidin. **Özel Alan Adlarına İzin Ver** seçeneğini açın.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Bu, bu özel plana abone olan tüm müşterilerin özel alan adları kullanmasına izin verecektir. Şimdi, Hesap sayfasında, müşterileriniz **Alan Adı Ekle** butonuna tıklayarak özel bir alan adı ekleyebilirler.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Açılan ilk pencere, müşterilerin bu özel alan adının ağınızda çalışması için DNS kayıtlarını nasıl güncelleyeceklerine dair bir talimat mesajı gösterecektir.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Bu mesaj, **Ultimate Multisite > Ayarlar > Alan Adı Eşleştirme > Yeni Alan Adı Talimatları Ekle** bölümünden (siz tarafından) düzenlenebilir.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

İşte alan adı eşleştirme ayarları sayfasının tam görünümü:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

**Sonraki Adım** butonuna tıkladıktan sonra, müşterileriniz özel alan adlarını ekleyebilir ve bu özel alan adının birincil alan adı olup olmayacağını seçebilirler. Müşterilerinizin web siteleri için birden fazla özel alan adı kullanabileceğini unutmayın, bu yüzden hangisinin birincil olacağını seçebilirler.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

**Alan Adı Ekle** butonuna tıkladıktan sonra, alan adı müşterinizin hesabına eklenir. Artık yapması gereken tek şey, bu özel alan adının DNS kayıtlarını kendi alan adı kayıt kuruluşunda değiştirmektir.

### Şifre Değiştirme:

Hesap dashboard'ı içinde, müşterileriniz **Şifre Değiştir** butonuna tıklayarak şifrelerini de değiştirebilirler.

![Change Password button on account page](/img/account-page/change-password-button.png)

Bu, müşterilerinizin mevcut şifrelerini ve ardından kullanmak istedikleri yeni şifreyi doldurması gereken yeni bir pencere gösterecektir.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Tehlike Bölgesi:

Ayrıca **Tehlike Bölgesi** kısmında gösterilen iki seçeneğimiz daha var: **Siteyi Sil** ve **Hesabı Sil**. Her ikisi de Tehlike Bölgesi'nde yer alıyor çünkü bu iki işlem geri alınamaz. Müşterileriniz web sitelerini veya hesaplarını silerlerse, bunları geri getiremezler.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Müşterileriniz bu iki seçenekten herhangi birine tıklarlarsa, web sitesini veya hesabı kaldırmak için bir düğme açmaları ve bu işlemin geri alınamayacağı konusunda uyarılmaları gereken bir pencere gösterilecektir.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Web sitelerini silerlerse, hesapları ve üyelikleri hala dokunulmamış olacaktır. Sadece web sitelerindeki tüm içeriği kaybedeceklerdir. Hesaplarını silerlerse, tüm web siteleri, üyelikler ve bu hesapla ilgili tüm bilgiler kaybolacaktır.
