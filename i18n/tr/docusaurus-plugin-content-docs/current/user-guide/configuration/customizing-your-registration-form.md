---
title: Kayıt Formunuzu Özelleştirme
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Kayıt Formunuzu Özelleştirme

Ağınızı WordPress platformu üzerine kurulu diğer SaaS çözümlerinden farklı kılmak için Ultimate Multisite, **Checkout Formları** özelliğimiz sayesinde kayıt ve giriş sayfalarınızı özelleştirmenize olanak tanır.

Bu formlar, yeni müşterileri dönüştürmeye çalışırken farklı yaklaşımları denemenin kolay ve esnek bir yolu olsa da, asıl olarak kişiselleştirilmiş kayıt formları oluşturmak için kullanılır. Bu makale, bunu nasıl yapabileceğinizi göstermeyi amaçlamaktadır.

## Giriş ve kayıt sayfaları:

Ultimate Multisite kurulumunun ardından, ana sitenizde otomatik olarak özel giriş ve kayıt sayfaları oluşturulur. Bu varsayılan sayfaları istediğiniz zaman **Ultimate Multisite > Settings > Login & Registration** sayfasından değiştirebilirsiniz.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** sayfasında özelleştirebileceğiniz seçeneklerin her birine göz atalım:

  * **Enable registration:** Bu seçenek, ağınızda kayıt özelliğini etkinleştirir veya devre dışı bırakır. Kapalı konumdaysa, müşterileriniz kayıt olamaz ve ürünlerinize abone olamaz.

  * **Enable email verification:** Bu seçenek açık olduğunda, ücretsiz bir plana veya deneme süresi olan ücretli bir plana abone olan müşteriler bir doğrulama e-postası alır ve web sitelerinin oluşturulması için doğrulama bağlantısına tıklamaları gerekir.

  * **Default registration page:** Bu, kayıt için varsayılan sayfadır. Bu sayfanın web sitenizde yayınlanmış olması ve müşterilerinizin ürünlerinize abone olacağı bir kayıt formu (checkout formu olarak da bilinir) içermesi gerekir. İstediğiniz kadar kayıt sayfası ve checkout formu oluşturabilirsiniz, ancak checkout formu kısa kodunu kayıt sayfasına eklemeyi unutmayın, aksi takdirde form görünmez.

  * **Use custom login page:** Bu seçenek, varsayılan wp-login.php sayfası yerine özelleştirilmiş bir giriş sayfası kullanmanıza olanak tanır. Bu seçenek açıksa, giriş için hangi sayfanın kullanılacağını hemen altındaki **Default login page** seçeneğinden belirleyebilirsiniz.

  * **Obfuscate the original login url (wp-login.php)** : Orijinal giriş URL'sini gizlemek istiyorsanız bu seçeneği açabilirsiniz. Bu, kaba kuvvet saldırılarını önlemek için kullanışlıdır. Bu seçenek etkinleştirildiğinde, bir kullanıcı orijinal wp-login.php bağlantısına erişmeye çalıştığında Ultimate Multisite 404 hatası gösterir.

  * **Force synchronous site publication:** Bir müşteri ağınızdaki bir ürüne abone olduktan sonra, bekleyen yeni sitenin gerçek bir ağ sitesine dönüştürülmesi gerekir. Yayınlama işlemi Job Queue aracılığıyla eşzamansız olarak gerçekleşir. Yayınlamanın kayıt işlemiyle aynı istekte gerçekleşmesini zorlamak için bu seçeneği etkinleştirin.

Şimdi, giriş ve kayıt süreciyle ilgili diğer seçeneklere bakalım. Bunlar aynı Login & Registration sayfasındaki **Other options** bölümünün hemen altında yer alır:

  * **Default role:** Bu, müşterilerinizin kayıt işleminden sonra web sitelerinde sahip olacağı roldür.

  * **Add users to the main site as well:** Bu seçeneği etkinleştirmek, kullanıcıyı kayıt işleminden sonra ağınızın ana sitesine de ekler. Bu seçeneği etkinleştirirseniz, hemen altında bu kullanıcıların web sitenizdeki **varsayılan rolünü** belirleme seçeneği de görünür.

  * **Enable multiple accounts:** Kullanıcıların aynı e-posta adresiyle ağınızdaki farklı sitelerde hesap sahibi olmasına izin verir. Bu seçenek kapalıysa, müşterileriniz aynı e-posta adresiyle ağınızda çalışan diğer web sitelerinde hesap oluşturamaz.

Özelleştirebileceğiniz giriş ve kayıtla ilgili tüm seçenekler bunlar! Düzenlemeyi bitirdikten sonra ayarlarınızı kaydetmeyi unutmayın.

## Birden fazla kayıt formu kullanma:

Ultimate Multisite 2.0, farklı alanlar, sunulan ürünler vb. ile istediğiniz kadar form oluşturmanıza olanak tanıyan bir checkout form düzenleyicisi sunar.

Hem giriş hem de kayıt sayfaları kısa kodlarla gömülüdür: giriş sayfasında **[wu_login_form]** ve kayıt sayfasında **[wu_checkout]**. Checkout formları oluşturarak veya düzenleyerek kayıt sayfasını daha da özelleştirebilirsiniz.

Bu özelliğe erişmek için sol kenar çubuğundaki **Checkout Forms** menüsüne gidin.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Bu sayfada, sahip olduğunuz tüm checkout formlarını görebilirsiniz.

Yeni bir tane oluşturmak istiyorsanız, sayfanın üst kısmındaki **Add Checkout Form** butonuna tıklamanız yeterlidir.

Başlangıç noktanız olarak şu üç seçenekten birini seçebilirsiniz: tek adımlı, çok adımlı veya boş. Ardından **Go to the Editor** butonuna tıklayın.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatif olarak, mevcut formlarınızı adının altındaki seçeneklere tıklayarak düzenleyebilir veya kopyalayabilirsiniz. Orada ayrıca formun kısa kodunu kopyalama veya formu silme seçeneklerini de bulabilirsiniz.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Tek adımlı veya çok adımlı seçeneği seçerseniz, checkout formu çalışması için gereken temel adımlarla önceden doldurulmuş olarak gelir. Ardından isterseniz ekstra adımlar ekleyebilirsiniz.

### Checkout Formu düzenleme:

Daha önce belirttiğimiz gibi, farklı amaçlar için checkout formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Checkout form düzenleyicisine gittikten sonra, formunuza bir ad (yalnızca dahili referans için kullanılacak) ve bir slug (örneğin kısa kod oluşturmak için kullanılır) verin.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. **Add New Checkout Step** butonuna tıklayarak yeni bir adım ekleyebilirsiniz.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal pencerenin ilk sekmesinde, form adımınızın içeriğini doldurun. Bir ID, bir ad ve bir açıklama verin. Bu öğeler çoğunlukla dahili kullanım içindir.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Ardından, adımın görünürlüğünü ayarlayın. **Always show** (Her zaman göster), **Only show for logged in users** (Yalnızca giriş yapmış kullanıcılara göster) veya **Only show for guests** (Yalnızca ziyaretçilere göster) seçeneklerinden birini seçebilirsiniz.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Şimdi, ilk adımımıza alanlar ekleme zamanı. **Add New Field** butonuna tıklayın ve istediğiniz bölüm türünü seçin.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Her alanın doldurulması gereken farklı parametreleri vardır. Bu ilk giriş için **Username** alanını seçeceğiz.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

İhtiyacınız kadar adım ve alan ekleyebilirsiniz. Müşterilerinizin seçim yapması için ürünlerinizi görüntülemek istiyorsanız Pricing Table alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek istiyorsanız Template Selection alanını ekleyin. Ve böyle devam eder.

_**Not:** Checkout formunuzu oluşturduktan sonra bir ürün oluşturursanız, ürünü Pricing table bölümüne eklemeniz gerekir. Eklemezseniz, ürün kayıt sayfasında müşterilerinize görünmez._

_**Not 2:** username, email, password, site title, site URL, order summary, payment ve submit button bir checkout formu oluşturmak için zorunlu alanlardır._

Checkout formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Preview butonunu kullanabilirsiniz. Ayrıca mevcut bir kullanıcı veya ziyaretçi olarak görünüm arasında geçiş yapabilirsiniz.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Son olarak, **Advanced Options** bölümünde **Thank You** sayfası için mesajı yapılandırabilir, dönüşümleri izlemek için kod parçacıkları ekleyebilir, checkout formunuza özel CSS ekleyebilir veya belirli ülkelerle sınırlayabilirsiniz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Ayrıca sağ sütundaki bu seçeneği değiştirerek checkout formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilir ya da formu kalıcı olarak silebilirsiniz.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Checkout formunuzu kaydetmeyi unutmayın!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Formunuzun kısa kodunu almak için **Generate Shortcode** butonuna tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Not:** Bu checkout formunun kayıt sayfanıza eklenmesi için bu kısa kodu kayıt sayfanıza eklemeniz gerekir._

## URL parametreleri ile ürün ve şablon ön seçimi:

Ürünleriniz için özelleştirilmiş fiyatlandırma tabloları oluşturmak ve müşterinizin fiyatlandırma tablonuzdan veya şablonlar sayfasından seçtiği ürünü veya şablonu checkout formunda önceden seçili hale getirmek istiyorsanız, bunun için URL parametrelerini kullanabilirsiniz.

### **Planlar için:**

**Ultimate Multisite > Products > Select a plan** yolunu izleyin. Sayfanın üst kısmında **Click to copy Shareable Link** butonunu görmelisiniz. Bu, checkout formunuzda bu belirli planı önceden seçmek için kullanabileceğiniz bağlantıdır.

![Product page with shareable link button](/img/config/products-list.png)

Bu paylaşılabilir bağlantının yalnızca **Planlar** için geçerli olduğunu unutmayın. Paketler veya hizmetler için paylaşılabilir bağlantıları kullanamazsınız.

### Şablonlar için:

Checkout formunuzda site şablonlarını önceden seçmek istiyorsanız, kayıt sayfası URL'nizde **?template_id=X** parametresini kullanabilirsiniz. "X" yerine **site şablonu ID numarasını** yazmanız gerekir. Bu numarayı almak için **Ultimate Multisite > Sites** bölümüne gidin.

Kullanmak istediğiniz site şablonunun hemen altındaki **Manage** butonuna tıklayın. SITE ID numarasını göreceksiniz. Bu belirli site şablonunun checkout formunuzda önceden seçili olması için bu numarayı kullanmanız yeterlidir. Bizim örneğimizde URL parametresi **?template_id=2** olacaktır.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Diyelim ki ağ web sitemiz [**www.mynetwork.com**](http://www.mynetwork.com) ve checkout formumuzun bulunduğu kayıt sayfamız **/register** sayfasında. Bu site şablonunun önceden seçili olduğu tam URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** şeklinde görünecektir.

Ve isterseniz, hem ürünleri hem de şablonları checkout formunuzda önceden seçili hale getirebilirsiniz. Tek yapmanız gereken planın paylaşılabilir bağlantısını kopyalayıp sonuna şablon parametresini eklemektir. Sonuç [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** şeklinde görünecektir.
