---
title: Sizning Ro'yxatlash Formangizni Moslashtirish
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# Kayıt Formunuzu Özelleştirme

Ağınızı, WordPress platformu üzerinde çalışan diğer tüm SaaS sitelerinden farklı ve eşsiz göstermek için, Ultimate Multisite, **Checkout Forms** özelliğimiz ile kayıt ve giriş sayfalarınızı özelleştirmenize olanak tanır.

Yeni müşterileri dönüştürme yollarını denemek için kolay ve esnek bir yöntem olmalarına rağmen, bunlar çoğunlukla kişiselleştirilmiş kayıt formları oluşturmak için kullanılır. Bu makale, bunu nasıl yapabileceğinizi göstermeyi amaçlıyor.

## Giriş ve kayıt sayfaları:

Ultimate Multisite kurulduğunda, ana sitenizde otomatik olarak özel giriş ve kayıt sayfaları oluşturur. Bu varsayılan sayfaları istediğiniz zaman, **Ultimate Multisite > Ayarlar > Giriş ve Kayıt** sayfanızdan değiştirerek güncelleyebilirsiniz.

![Login and Registration settings page](/img/config/settings-general.png)

İşte giriş ve kayıt ayarları sayfasının tam görünümü:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Giriş ve Kayıt** sayfasında özelleştirebileceğiniz her bir seçeneğe yakından bakalım:

*   **Kayıt etkinleştir:** Bu seçenek, ağınızda kayıt özelliğini etkinleştirir veya devre dışı bırakır. Kapalı konuma getirilirse, müşterileriniz kayıt olup ürünlerinize abone olamayacaktır.

*   **E-posta doğrulama etkinleştir:** Bu seçenek açık konuma getirilirse, ücretsiz plan veya deneme süreli ücretli plan için abone olan müşteriler bir doğrulama e-postası alır ve web siteleri oluşturulabilmesi için doğrulama bağlantısına tıklamaları gerekir.

*   **Varsayılan kayıt sayfası:** Burası kayıt için varsayılan sayfadır. Bu sayfanın web sitenizde yayınlanmış olması ve bir kayıt formu (aynı zamanda checkout formu olarak da bilinir) içermesi gerekir; müşterilerinizin ürünlerinize abone olacağı yer burasıdır. İstediğiniz kadar çok kayıt sayfası ve checkout formu oluşturabilirsiniz, sadece checkout formunun kısa kodunu kayıt sayfasına eklemeyi unutmayın, aksi takdirde görünmeyecektir.

*   **Özel giriş sayfası kullan:** Bu seçenek, varsayılan `wp-login.php` sayfasından farklı, özelleştirilmiş bir giriş sayfası kullanmanıza olanak tanır. Bu seçenek açık konuma getirilirse, hangi sayfanın **Varsayılan giriş sayfası** seçeneğinde (hemen altında) kullanılacağını seçebilirsiniz.

*   **Orijinal giriş URL'sini (wp-login.php) gizle:** Orijinal giriş URL'sini gizlemek isterseniz, bu seçeneği açabilirsiniz. Bu, brute-force saldırılarını önlemek için kullanışlıdır. Bu seçenek etkinleştirilirse, Ultimate Multisite bir kullanıcı orijinal `wp-login.php` bağlantısına erişmeye çalıştığında 404 hatası gösterecektir.

*   **Senkron site yayınlamayı zorla:** Bir müşteri ağdaki bir ürüne abone olduktan sonra, yeni beklemede olan site gerçek bir ağ sitesine dönüştürülmelidir. Yayınlama süreci, Job Queue üzerinden, asenkron olarak gerçekleşir. Bu seçeneği etkinleştirerek yayınlamanın, kayıt işlemiyle aynı istekte gerçekleşmesini sağlayabilirsiniz.

Şimdi, giriş ve kayıt süreciyle hala ilgili olan diğer seçeneklere bakalım. Bunlar, aynı Giriş ve kayıt sayfasındaki **Diğer seçenekler** bölümünün hemen altında yer almaktadır:

*   **Varsayılan rol:** Bu, müşterilerinizin kayıt işlemi sonrasında web sitelerinde sahip olacağı roldür.

*   **Jumper'ı etkinleştir:** Yönetici alanında Jumper kısayolunu etkinleştirir. Jumper, yöneticilerin her menüyü gezmek zorunda kalmadan Ultimate Multisite ekranlarına, ağ nesnelerine ve diğer desteklenen hedeflere hızlıca atlamasını sağlar. Bu hızlı navigasyon aracını yönetici arayüzünden gizlemeyi tercih ediyorsanız kapatın.

*   **Kullanıcıları ana siteye de ekle:** Bu seçeneği etkinleştirmek, kayıt işleminden sonra kullanıcıyı ağınızın ana sitesine de ekleyecektir. Bu seçeneği etkinleştirirseniz, web sitenizdeki bu kullanıcıların **varsayılan rolünü** belirleme seçeneği de hemen altında görünecektir.

*   **Birden fazla hesap etkinleştir:** Kullanıcıların aynı e-posta adresiyle ağınızdaki farklı sitelerde hesap sahibi olmasına izin verir. Bu seçenek kapalıysa, müşterileriniz aynı e-posta adresiyle ağınızda çalışan başka web sitelerinde hesap oluşturamayacaktır.

İşte özelleştirebileceğiniz giriş ve kayıt ile ilgili tüm seçenekler! Ayarlarınızı düzenlemeyi bitirdikten sonra kaydetmeyi unutmayın.

## Birden fazla kayıt formu kullanma:

Ultimate Multisite 2.0, istediğiniz kadar çok form oluşturmanıza olanak tanıyan ve farklı alanlar, sunulan ürünler vb. eklemenize izin veren bir checkout form editörü sunar.

Hem giriş hem de kayıt sayfaları kısa kodlarla gömülüdür: giriş sayfasında **[wu_login_form]** ve kayıt sayfası için **[wu_checkout]**. Kayıt sayfasını, checkout formları oluşturarak daha da özelleştirebilirsiniz.

Bu özelliğe erişmek için sol kenar çubuğundaki **Checkout Forms** menüsüne gidin.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm checkout formlarını görebilirsiniz.

Yeni bir tane oluşturmak isterseniz, sayfanın üst kısmındaki **Add Checkout Form** butonuna tıklayın.

Başlangıç noktanız olarak bu üç seçenekten birini seçebilirsiniz: tek adımlı, çok adımlı veya boş. Ardından, **Editor'a Git** butonuna tıklayın.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatif olarak, zaten sahip olduğunuz formları, adının altındaki seçeneklere tıklayarak düzenleyebilir veya çoğaltabilirsiniz. Orada ayrıca formun kısa kodunu kopyalama veya formu silme seçeneklerini de bulacaksınız.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Tek adımlı veya çok adımlı seçerseniz, checkout formu çalışması için temel adımlarla önceden doldurulmuş olacaktır. Ardından, isterseniz ona ek adımlar ekleyebilirsiniz.

### Bir Checkout Formu Düzenleme:

Daha önce bahsettiğimiz gibi, farklı amaçlar için checkout formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Checkout form editörüne gittikten sonra formunuza bir isim (yalnızca dahili referans için kullanılacak) ve bir slug (örneğin kısa kod oluşturmak için kullanılır) verin.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. **Add New Checkout Step** butonuna tıklayarak yeni bir adım ekleyebilirsiniz.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal pencerenin ilk sekmesinde, formunuzun adım içeriğini doldurun. Ona bir ID, bir isim ve bir açıklama verin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Ardından, adımın görünürlüğünü ayarlayın. **Her zaman göster**, **Yalnızca giriş yapmış kullanıcılara göster** veya **Yalnızca misafirlere göster** seçeneklerinden birini seçebilirsiniz.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Şimdi, ilk adımımıza alanlar ekleme zamanı. Sadece **Add New Field** butonuna tıklayın ve istediğiniz bölüm türünü seçin.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Her alan doldurulması gereken farklı parametrelere sahiptir. Bu ilk giriş için **Kullanıcı Adı** alanını seçeceğiz.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

İhtiyacınız kadar çok adım ve alan ekleyebilirsiniz. Müşterilerinizin seçmesi için ürünlerinizi göstermek amacıyla Fiyat Tablosu (Pricing Table) alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek isterseniz, Şablon Seçimi (Template Selection) alanını ekleyin. Ve benzeri.

_**Not:** Checkout formunuzu oluşturduktan sonra bir ürün eklerseniz, ürünü Fiyat Tablosu bölümüne eklemeniz gerekecektir. Eklemeyi unutursanız, ürün müşterilerinize kayıt sayfasında görünmeyecektir._

_**Not 2:** checkout formu oluşturmak için kullanıcı adı, e-posta, şifre, site başlığı, site URL'si, sipariş özeti, ödeme ve gönder butonu zorunlu alanlardır._

Checkout formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Önizle (Preview) butonunu kullanabilirsiniz. Ayrıca mevcut bir kullanıcı veya ziyaretçi olarak görünüm arasında geçiş yapabilirsiniz.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Son olarak, **Gelişmiş Seçenekler** bölümünde **Teşekkürler** sayfası için mesajı yapılandırabilir, dönüşümleri izlemek için kod parçacıkları ekleyebilir, checkout formunuza özel CSS ekleyebilir veya belirli ülkelere kısıtlayabilirsiniz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Ayrıca, sağ sütundaki bu seçeneği açıp kapatarak veya formu kalıcı olarak silerek checkout formunuzu manuel olarak etkinleştirip devre dışı bırakabilirsiniz.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Checkout formunuzu kaydetmeyi unutmayın!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formunuzun kısa kodunu almak için **Generate Shortcode** butonuna tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Not:** Bu checkout formunun kayıt sayfanıza eklenmesi için bu kısa kodu kayıt sayfanıza eklemeniz gerekecektir._

## URL parametreleri aracılığıyla ürün ve şablon ön seçimi:

Ürünleriniz için özelleştirilmiş fiyat tabloları oluşturmak ve müşterinizin fiyat tablonuzdan veya şablonlarınız sayfanızdan seçtiği ürünü veya şablonu checkout formunda önceden seçmek isterseniz, bunun için URL parametrelerini kullanabilirsiniz.

### Planlar için:

**Ultimate Multisite > Ürünler > Bir plan seç** yolunu izleyin. Sayfanın üst kısmında **Paylaşılabilir Bağlantıyı Kopyala** butonunu görmelisiniz. Bu, bu özel planı checkout formunuzda önceden seçmek için kullanabileceğiniz bağlantıdır.

![Product page with shareable link button](/img/config/products-list.png)

Bu paylaşılabilir bağlantının yalnızca **Planlar** için geçerli olduğunu unutmayın. Paketler veya hizmetler için paylaşılabilir bağlantı kullanamazsınız.

### Şablonlar için:

Checkout formunuzda site şablonlarını önceden seçmek isterseniz, kayıt sayfanızın URL'sinde şu parametreyi kullanabilirsiniz: **?template_id=X**. "X" yerine **site şablonu ID numarası** gelmelidir. Bu numarayı almak için **Ultimate Multisite > Siteler** yolunu izleyin.

Kullanmak istediğiniz site şablonunun hemen altındaki **Yönet** butonuna tıklayın. SITE ID numarasını göreceksiniz. Bu numarayı, checkout formunuzda önceden seçilecek bu özel site şablonu için kullanın. Bu durumda, URL parametresi **?template_id=2** olacaktır.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Diyelim ki ağ web sitemiz [**www.mynetwork.com**](http://www.mynetwork.com) ve checkout formumuzun bulunduğu kayıt sayfamız **/register** sayfasında yer alıyor. Bu site şablonu önceden seçilmiş tam URL şu şekilde görünecektir: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

İsterseniz hem ürünleri hem de şablonları checkout formunuza önceden seçebilirsiniz. Yapmanız gereken tek şey, planın paylaşılabilir bağlantısını kopyalayıp sonuna şablon parametresini yapıştırmaktır. Sonuç şu şekilde olacaktır: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
