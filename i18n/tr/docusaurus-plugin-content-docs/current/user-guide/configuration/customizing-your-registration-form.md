---
title: Kayıt Formunuzu Özelleştirme
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Kayıt Formunuzu Özelleştirme

Ağınızın WordPress platformu üzerine inşa edilmiş diğer tüm SaaS’lerden benzersiz görünmesini sağlamak için Ultimate Multisite, **Checkout Forms** özelliğimizle kayıt ve giriş sayfalarınızı özelleştirmenize olanak tanır.

Yeni müşterileri dönüştürmeye çalışırken farklı yaklaşımları denemek için kolay ve esnek bir yol olsalar da, çoğunlukla kişiselleştirilmiş kayıt formları oluşturmak için kullanılırlar. Bu makale, bunu nasıl yapabileceğinizi göstermeyi amaçlar.

## Giriş ve kayıt sayfaları: {#login-and-registration-pages}

Ultimate Multisite kurulumu sırasında, ana sitenizde otomatik olarak özel giriş ve kayıt sayfaları oluşturur. Bu varsayılan sayfaları istediğiniz zaman **Ultimate Multisite > Settings > Login & Registration** sayfanıza giderek değiştirebilirsiniz.

![Giriş ve Kayıt ayarları sayfası](/img/config/settings-general.png)

Giriş ve kayıt ayarları sayfasının tam görünümü şöyle:

![Giriş ve Kayıt ayarları tam sayfası](/img/config/settings-login-registration-full.png)

**Login & Registration** sayfasında özelleştirebileceğiniz seçeneklerin her birine bakalım:

  * **Kaydı etkinleştir:** Bu seçenek ağınızda kaydı etkinleştirir veya devre dışı bırakır. Kapalı duruma getirilirse, müşterileriniz kayıt olamaz ve ürünlerinize abone olamaz.

  * **E-posta doğrulamayı etkinleştir:** Bu seçenek açık duruma getirilirse, ücretsiz bir plana veya deneme süresi olan ücretli bir plana abone olan müşteriler bir doğrulama e-postası alır ve web sitelerinin oluşturulması için doğrulama bağlantısına tıklamaları gerekir.

  * **Varsayılan kayıt sayfası:** Bu, kayıt için varsayılan sayfadır. Bu sayfanın web sitenizde yayımlanmış olması ve müşterilerinizin ürünlerinize abone olacağı bir kayıt formu (checkout form olarak da bilinir) içermesi gerekir. İstediğiniz kadar kayıt sayfası ve checkout form oluşturabilirsiniz; yalnızca checkout form shortcode’unu kayıt sayfasına koymayı unutmayın, aksi takdirde görünmez.

  * **Özel giriş sayfası kullan:** Bu seçenek, varsayılan wp-login.php sayfası dışında özelleştirilmiş bir giriş sayfası kullanmanıza olanak tanır. Bu seçenek açık duruma getirilirse, giriş için hangi sayfanın kullanılacağını **Varsayılan giriş sayfası** seçeneğinde (hemen aşağıda) seçebilirsiniz.

  * **Orijinal giriş url’sini gizle (wp-login.php)** : Orijinal giriş URL’sini gizlemek istiyorsanız bu seçeneği açabilirsiniz. Bu, kaba kuvvet saldırılarını önlemek için kullanışlıdır. Bu seçenek etkinleştirilirse, bir kullanıcı orijinal wp-login.php bağlantısına erişmeye çalıştığında Ultimate Multisite 404 hatası gösterir

  * **Eşzamanlı site yayımlamayı zorla:** Bir müşteri bir ağdaki bir ürüne abone olduktan sonra, yeni bekleyen sitenin gerçek bir ağ sitesine dönüştürülmesi gerekir. Yayımlama işlemi Job Queue aracılığıyla eşzamansız olarak gerçekleşir. Yayımlamanın kayıtla aynı istekte gerçekleşmesini zorlamak için bu seçeneği etkinleştirin.

Şimdi, giriş ve kayıt süreciyle hâlâ ilgili olan diğer seçeneklere bakalım. Bunlar aynı Login & registration sayfasında **Diğer seçenekler** bölümünün hemen altındadır:

  * **Varsayılan rol:** Bu, kayıt sürecinden sonra müşterilerinizin web sitelerinde sahip olacağı roldür.

  * **Jumper’ı etkinleştir:** Yönetici alanında Jumper kısayolunu etkinleştirir. Jumper, yöneticilerin her menüde gezinmeden Ultimate Multisite ekranlarına, ağ nesnelerine ve desteklenen diğer hedeflere hızlıca atlamasına olanak tanır. Bu hızlı gezinme aracını yönetici arayüzünden gizlemeyi tercih ediyorsanız kapatın.

  * **Kullanıcıları ana siteye de ekle:** Bu seçeneği etkinleştirmek, kayıt sürecinden sonra kullanıcıyı ağınızın ana sitesine de ekler. Bu seçeneği etkinleştirirseniz, bu kullanıcıların web sitenizdeki **varsayılan rolünü** ayarlamak için bir seçenek de hemen aşağıda görünür.

  * **Birden fazla hesabı etkinleştir:** Kullanıcıların aynı e-posta adresiyle ağınızdaki farklı sitelerde hesap sahibi olmasına izin verin. Bu seçenek kapalıysa, müşterileriniz aynı e-posta adresiyle ağınızda çalışan diğer web sitelerinde hesap oluşturamaz.

Giriş ve kayıtla ilgili özelleştirebileceğiniz tüm seçenekler bu kadar! Düzenlemeyi bitirdikten sonra ayarlarınızı kaydetmeyi unutmayın.

## Birden fazla kayıt formu kullanma: {#using-multiple-registration-forms}

Ultimate Multisite 2.0, farklı alanlar, sunulan ürünler vb. ile istediğiniz kadar form oluşturmanıza olanak tanıyan bir checkout form düzenleyicisi sunar.

Hem giriş hem de kayıt sayfaları shortcodes ile yerleştirilmiştir: giriş sayfasında **[wu_login_form]** ve kayıt sayfası için **[wu_checkout]**. Checkout forms oluşturarak veya yapılandırarak kayıt sayfasını daha da özelleştirebilirsiniz.

Bu özelliğe erişmek için sol kenar çubuğundaki **Checkout Forms** menüsüne gidin.

![Kenar çubuğundaki Checkout Forms menüsü](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm checkout forms’u görebilirsiniz.

Yeni bir tane oluşturmak istiyorsanız, sayfanın üst kısmındaki **Checkout Form Ekle** seçeneğine tıklamanız yeterlidir.

Başlangıç noktanız olarak şu üç seçenekten birini seçebilirsiniz: tek adım, çok adım veya boş. Ardından, **Düzenleyiciye Git** seçeneğine tıklayın.

![Tek adım, çok adım veya boş seçenekleriyle Checkout Form ekleme](/img/config/checkout-forms-list.png)

Alternatif olarak, adının altındaki seçeneklere tıklayarak zaten sahip olduğunuz formları düzenleyebilir veya çoğaltabilirsiniz. Burada formun shortcode’unu kopyalama veya formu silme seçeneklerini de bulacaksınız.

![Düzenle, çoğalt ve sil seçenekleriyle checkout form üzerine gelme eylemleri](/img/config/checkout-form-hover-actions.png)

Tek adım veya çok adım seçerseniz, checkout form çalışması için gerekli temel adımlarla önceden doldurulmuş olur. Ardından isterseniz buna ekstra adımlar ekleyebilirsiniz.

### Bir Checkout Form’u Düzenleme: {#editing-a-checkout-form}

Daha önce belirttiğimiz gibi, farklı amaçlar için checkout forms oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Checkout form düzenleyicisine gittikten sonra, formunuza bir ad (yalnızca dahili referans için kullanılacak) ve bir slug (örneğin shortcakes oluşturmak için kullanılır) verin.

![Ad ve kısa ad alanları olan ödeme formu düzenleyici](/img/config/checkout-form-name-slug.png)

Formlar adımlardan ve alanlardan oluşur. **Yeni Ödeme Adımı Ekle** seçeneğine tıklayarak yeni bir adım ekleyebilirsiniz.

![Yeni Ödeme Adımı Ekle düğmesi](/img/config/checkout-form-add-step.png)

Modal pencerenin ilk sekmesinde formunuzun adım içeriğini doldurun. Ona bir ID, bir ad ve bir açıklama verin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![ID, ad ve açıklama içeren ödeme adımı içerik sekmesi](/img/config/checkout-form-step-content.png)

Ardından, adımın görünürlüğünü ayarlayın. **Her zaman göster** , **Yalnızca oturum açmış kullanıcılara göster** veya **Yalnızca misafirlere göster** seçenekleri arasından seçim yapabilirsiniz.

![Ödeme adımı görünürlük seçenekleri](/img/config/checkout-form-step-visibility.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Ödeme adımı stil yapılandırması](/img/config/checkout-form-step-style.png)

Şimdi, ilk adımımıza alanlar ekleme zamanı. Sadece **Yeni Alan Ekle** seçeneğine tıklayın ve istediğiniz bölüm türünü seçin.

![Yeni Alan Ekle düğmesi](/img/config/checkout-form-add-field-button.png)![Alan türü seçim açılır menüsü](/img/config/checkout-form-field-type-dropdown.png)

Her alanın doldurulması gereken farklı parametreleri vardır. Bu ilk giriş için **Kullanıcı Adı** alanını seçeceğiz.

![Kullanıcı adı alanı yapılandırması](/img/config/checkout-form-username-content.png)![Kullanıcı adı alanı parametreleri](/img/config/checkout-form-username-visibility.png)![Kullanıcı adı alanı ek ayarları](/img/config/checkout-form-username-style.png)

İhtiyacınız olduğu kadar adım ve alan ekleyebilirsiniz. Müşterilerinizin birini seçmesi için ürünlerinizi göstermek üzere Fiyatlandırma Tablosu alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek istiyorsanız, Şablon Seçimi alanını ekleyin. Ve benzeri.

![Şablon seçimi alanı olan ödeme formu düzenleyici](/img/config/checkout-form-with-template-field.png)

_**Not:** Ödeme formunuzu oluşturduktan sonra bir ürün oluşturursanız, ürünü Fiyatlandırma tablosu bölümüne eklemeniz gerekir. Eklemerseniz, ürün kayıt sayfasında müşterilerinize görünmez._

_**Not 2:** kullanıcı adı, e-posta, parola, site başlığı, site URL’si, sipariş özeti, ödeme ve gönder düğmesi bir ödeme formu oluşturmak için zorunlu alanlardır._

Ödeme formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Önizleme düğmesini kullanabilirsiniz. Ayrıca mevcut bir kullanıcı veya ziyaretçi olarak görünüm arasında geçiş yapabilirsiniz.

![Ödeme formu düzenleyicisindeki Önizleme düğmesi](/img/config/checkout-form-preview-button.png)![Ziyaretçi veya mevcut kullanıcı olarak ödeme formu önizlemesi](/img/config/checkout-form-preview-modal.png)

Son olarak, **Gelişmiş Seçenekler** içinde **Teşekkürler** sayfası için mesajı yapılandırabilir, dönüşümleri izlemek için snippet’ler ekleyebilir, ödeme formunuza özel CSS ekleyebilir veya bunu belirli ülkelerle sınırlandırabilirsiniz.

![Teşekkürler sayfası, dönüşüm takibi ve özel CSS içeren Gelişmiş Seçenekler](/img/config/checkout-form-advanced.png)

Ayrıca sağ sütundaki bu seçeneği değiştirerek ödeme formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilir ya da formu kalıcı olarak silebilirsiniz.

![Ödeme formu için etkinleştirme anahtarı ve silme seçeneği](/img/config/checkout-form-active.png)

Ödeme formunuzu kaydetmeyi unutmayın!

![Ödeme Formunu Kaydet düğmesi](/img/config/checkout-form-save.png)

Formunuzun kısa kodunu almak için **Kısa Kod Oluştur** seçeneğine tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Kopyalanacak kısa kodu içeren Kısa Kod Oluştur modali](/img/config/checkout-form-editor.png)

_**Not:** Bu ödeme formunun kayıt sayfanıza eklenmesi için bu kısa kodu kayıt sayfanıza eklemeniz gerekir._

## Ürünleri ve şablonları URL parametreleri aracılığıyla önceden seçme: {#pre-selecting-products-and-templates-via-url-parameters}

Ürünleriniz için özelleştirilmiş fiyatlandırma tabloları oluşturmak ve müşterinizin fiyatlandırma tablonuzdan veya şablonlar sayfasından seçtiği ürünü ya da şablonu ödeme formunda önceden seçmek istiyorsanız, bunun için URL parametrelerini kullanabilirsiniz.

### **Planlar için:** {#for-plans}

**Ultimate Multisite > Ürünler > Bir plan seç** bölümüne gidin. Sayfanın üst kısmında **Paylaşılabilir Bağlantıyı Kopyalamak İçin Tıklayın** düğmesini görmelisiniz. Bu, ödeme formunuzda bu belirli planı önceden seçmek için kullanabileceğiniz bağlantıdır.

![Paylaşılabilir bağlantı düğmesi olan ürün sayfası](/img/config/products-list.png)

Bu paylaşılabilir bağlantının yalnızca **Planlar** için geçerli olduğunu unutmayın. Paketler veya hizmetler için paylaşılabilir bağlantıları kullanamazsınız.

### Şablonlar için: {#for-templates}

Ödeme formunuzda site şablonlarını önceden seçmek istiyorsanız, kayıt sayfası URL’nizde şu parametreyi kullanabilirsiniz: **?template_id=X**. "X", **site şablonu ID numarası** ile değiştirilmelidir. Bu numarayı almak için **Ultimate Multisite > Siteler** bölümüne gidin.

Kullanmak istediğiniz site şablonunun hemen altındaki **Yönet** seçeneğine tıklayın. SITE ID numarasını göreceksiniz. Bu belirli site şablonunun ödeme formunuzda önceden seçilmesi için sadece bu numarayı kullanın. Buradaki örneğimizde URL parametresi **?template_id=2** olur.

![Site şablonu ID’sini gösteren siteler listesi](/img/config/site-templates-list.png)

Diyelim ki ağ web sitemiz [**www.mynetwork.com**](http://www.mynetwork.com) ve ödeme formumuzun bulunduğu kayıt sayfamız **/register** sayfasında yer alıyor. Bu site şablonu önceden seçilmiş tam URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** gibi görünür.

İsterseniz hem ürünleri hem de şablonları ödeme formunuzda önceden seçebilirsiniz. Yapmanız gereken tek şey planın paylaşılabilir bağlantısını kopyalayıp şablon parametresini sonuna yapıştırmaktır. Şöyle görünür: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
