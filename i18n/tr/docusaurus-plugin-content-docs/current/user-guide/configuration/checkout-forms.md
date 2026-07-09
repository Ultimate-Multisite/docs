---
title: Checkout Formları
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms {#checkout-forms}

Checkout Forms, yeni müşterileri dönüştürmeye çalışırken farklı yaklaşımları denemenin kolay ve esnek bir yoludur.

Ultimate Multisite 2.0, farklı alanlar, sunulan ürünler vb. ile istediğiniz kadar form oluşturmanızı sağlayan bir Checkout Form düzenleyicisi sunar.

Bu özelliğe erişmek için sol yan çubuktaki Checkout Forms menüsüne gidin.

![Checkout Forms listesi](/img/config/checkout-forms-list.png)

Bu sayfada, sahip olduğunuz tüm checkout formlarını görebilirsiniz.

Liste tablosu, her formun şu anda müşteriler tarafından kullanılabilir olup olmadığını doğrulayabilmeniz için bir **Durum** sütunu içerir:

| Durum | Anlamı |
|---|---|
| **Aktif** | Form, shortcode’unun veya kayıt sayfasının yayımlandığı her yerde kullanılabilir. |
| **İnaktif** | Form kaydedilmiştir ancak devre dışıdır. Siz tekrar etkinleştirene kadar müşteriler bununla checkout işlemini tamamlayamaz. |

Özellikle taslak veya sezonluk checkout formlarını canlı formlarınızın yanında tuttuğunuzda, herkese açık bir kayıt akışını düzenlemeden önce durum sütununu kullanın.

Yeni bir tane oluşturmak istiyorsanız, sayfanın üst kısmındaki Add Checkout Form’a tıklamanız yeterlidir.

Başlangıç noktanız olarak şu üç seçenekten birini seçebilirsiniz: tek adım, çok adımlı veya boş. Ardından, Go to the Editor’a tıklayın.

Başlangıç noktanız olarak **tek adım** veya **çok adımlı** seçtiğinizde, form şablonu artık varsayılan olarak bir **Şablon Seçimi** alanı içerir. Bu alan, müşterilerinizin kayıt süreci sırasında bir site şablonu seçmesine olanak tanır. Bunu yerinde bırakabilir, kaldırabilir veya düzenleyicideki diğer herhangi bir alan gibi yeniden konumlandırabilirsiniz.

![Checkout Form düzenleyicisi](/img/config/checkout-form-editor.png)

Alternatif olarak, adının altındaki seçeneklere tıklayarak zaten sahip olduğunuz formları düzenleyebilir veya çoğaltabilirsiniz. Burada ayrıca formun shortcode’unu kopyalama veya formu silme seçeneklerini de bulacaksınız.

![Checkout form üzerine gelme işlemleri](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Düzenleyicisine Genel Bakış {#checkout-form-editor-overview}

Checkout form düzenleyicisi, kayıt formlarınızı oluşturmak için kapsamlı bir arayüz sağlar. Düzenleyici düzenine genel bakış şöyledir:

![Checkout Form düzenleyicisine genel bakış](/img/config/checkout-form-editor-overview.png)

### Bir Checkout Formunu Düzenleme {#editing-a-checkout-form}

Farklı amaçlar için checkout formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Checkout form düzenleyicisine gittikten sonra formunuza bir ad (yalnızca dahili referans için kullanılacaktır) ve bir slug (örneğin shortcode’lar oluşturmak için kullanılır) verin.

![Checkout Form düzenleyicisi](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. Add New Checkout Step’e tıklayarak yeni bir adım ekleyebilirsiniz.

![Yeni Checkout Adımı Ekle](/img/config/checkout-form-add-step.png)

Modal pencerenin ilk sekmesinde, form adımınızın içeriğini doldurun. Ona bir ID, ad ve açıklama verin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![Checkout form adımı içerik sekmesi](/img/config/checkout-form-step-content.png)

Sonra, adımın görünürlüğünü ayarlayın. "Her zaman göster", "Yalnızca giriş yapmış kullanıcılara göster" veya "Yalnızca misafirlere göster" seçenekleri arasından seçim yapabilirsiniz.

![Checkout form adımı görünürlük sekmesi](/img/config/checkout-form-step-visibility.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Checkout form adımı stil sekmesi](/img/config/checkout-form-step-style.png)

Şimdi ilk adımımıza alanlar ekleme zamanı. Add New Field’a tıklayın ve istediğiniz bölüm türünü seçin.

![Alanları olan checkout form adımı](/img/config/checkout-form-step-with-fields.png)

Her alanın doldurulması gereken farklı parametreleri vardır. Bu ilk giriş için "Username" alanını seçeceğiz.

![Alan türü seçimi açılır menüsü](/img/config/checkout-form-field-type-dropdown.png)

![Username alanı içerik ayarları](/img/config/checkout-form-username-content.png)

![Username alanı görünürlük ayarları](/img/config/checkout-form-username-visibility.png)

![Username alanı stil ayarları](/img/config/checkout-form-username-style.png)

İhtiyacınız olduğu kadar çok adım ve alan ekleyebilirsiniz. Müşterilerinizin bir ürün seçmesi için ürünlerinizi göstermek üzere Pricing Table alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek istiyorsanız, Template Selection alanını ekleyin. Ve benzeri.

![Yeni Alan Ekle iletişim penceresi](/img/config/checkout-form-add-field-dialog.png)

_**Not:** username, email, password, site title, site URL, order summary, payment ve submit button, bir checkout formu oluşturmak için zorunlu alanlardır._

Checkout formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Preview düğmesini kullanabilirsiniz. Ayrıca mevcut bir kullanıcı veya ziyaretçi olarak görünüm arasında geçiş yapabilirsiniz

![Checkout Form önizleme düğmesi](/img/config/checkout-form-preview-button.png)

![Checkout Form önizleme modalı](/img/config/checkout-form-preview-modal.png)

Son olarak, Advanced Options’ta "Thank You" sayfası için mesajı yapılandırabilir, dönüşümleri izlemek için snippet’ler ekleyebilir, checkout formunuza özel CSS ekleyebilir veya formu belirli ülkelerle sınırlayabilirsiniz.

![Gelişmiş Seçenekler](/img/config/checkout-form-advanced.png)

Ayrıca sağ sütundaki bu seçeneği açıp kapatarak checkout formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilir ya da formu kalıcı olarak silebilirsiniz.

![Aktif geçiş düğmesi](/img/config/checkout-form-active.png)

Bir formu silmek için form işlemlerindeki silme seçeneğine tıklayın:

![Checkout form silme seçeneği](/img/config/checkout-form-delete.png)

Checkout formunuzu kaydetmeyi unutmayın!

![Kaydet düğmesi](/img/config/checkout-form-save.png)

Formunuzun shortcode’unu almak için Generate Shortcode’a tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Shortcode içeren kaydet düğmesi](/img/config/checkout-form-save.png)

### Pricing Table Alanı {#the-pricing-table-field}

**Pricing Table** alanı, müşterilerin bir plan seçebilmesi için ürünlerinizi checkout formunda gösterir. Bu alanı düzenlediğinizde çeşitli seçenekleri yapılandırabilirsiniz:

![Pricing Table alanı ayarları](/img/config/pricing-table-field-settings.png)

Pricing table’ın frontend kayıt formunda nasıl göründüğü şöyledir:

![Ön uç checkout fiyatlandırma tablosu](/img/config/frontend-checkout-pricing-table.png)

  * **Ürünler**: Hangi ürünlerin görüntüleneceğini ve hangi sırayla görüneceklerini seçin.
  * **Farklı Süreleri Zorla**: Etkinleştirildiğinde, şu anda seçili faturalandırma dönemi için eşleşen bir fiyat varyasyonları olup olmadığına bakılmaksızın tüm ürünler gösterilir. Devre dışı bırakıldığında (varsayılan), seçili dönem için varyasyonu olmayan ürünler gizlenir.
    ![Fiyatlandırma tablosu süreleri zorlama seçeneği](/img/config/pricing-table-force-durations.png)
  * **Önceden Seçildiğinde Gizle**: URL aracılığıyla zaten bir plan seçildiğinde fiyatlandırma tablosunu gizler (örn. `/register/premium`).
  * **Fiyatlandırma Tablosu Şablonu**: Fiyatlandırma tablosu için görsel şablonu seçin (Basit Liste, Eski, vb.).

Form, o ürünün checkout akışını tamamlamak için gereken alanları içermeden önce Pricing Table'a bir ürün eklerseniz, düzenleyici artık bir uyarı gösterir. Canlı bir kayıt formu için değişiklikleri yayımlamadan veya kaydetmeden önce eksik zorunlu alanı eklemek üzere uyarıyı kullanın.

### Dönem Seçimi Geçişi Ekleme {#adding-a-period-selection-toggle}

Ürünlerinizde [Fiyat Varyasyonları](creating-your-first-subscription-product#price-variations) yapılandırdıysanız (örn. aylık ve yıllık fiyatlandırma), checkout formunuza bir **Dönem Seçimi** alanı ekleyebilirsiniz. Bu alan, müşterilerin faturalandırma dönemleri arasında geçiş yapmasını sağlayan bir geçiş düğmesi görüntüler ve fiyatlandırma tablosu gerçek zamanlı olarak dinamik biçimde güncellenir.

#### 1. Adım: Ürünlerinizde Fiyat Varyasyonlarını Ayarlayın {#step-1-set-up-price-variations-on-your-products}

Dönem Seçimi alanını eklemeden önce, ürünlerinizde fiyat varyasyonlarının yapılandırıldığından emin olun. **Ultimate Multisite > Ürünler** bölümüne gidin, bir ürünü düzenleyin ve alternatif faturalandırma dönemleri eklemek için **Fiyat Varyasyonları** sekmesine gidin (örn. indirimli fiyatla Yıllık).

![Bir üründeki Fiyat Varyasyonları sekmesi](/img/config/product-price-variations-tab.png)

#### 2. Adım: Checkout Formunuza Dönem Seçimi Alanını Ekleyin {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Formları** bölümüne gidin ve checkout formunuzu düzenleyin.

2. **Fiyatlandırma Tablosu** alanınızı içeren adıma kadar aşağı kaydırın ve **Yeni Alan ekle**ye tıklayın.

3. Alan türü seçimi iletişim kutusunda **Dönem Seç**e tıklayın.

![Dönem Seç'i gösteren Yeni Alan Ekle iletişim kutusu](/img/config/checkout-form-add-field-dialog.png)

4. Dönem seçeneklerini yapılandırın. Her seçeneğin şunlara ihtiyacı vardır:
   * **Süre**: Sayı (örn. `1`)
   * **Süre birimi**: Dönem türü (Günler, Haftalar, Aylar veya Yıllar)
   * **Etiket**: Müşterilerin göreceği metin (örn. "Aylık", "Yıllık")

5. Daha fazla dönem seçeneği eklemek için **+ Seçenek Ekle**ye tıklayın. Bu seçenekler, ürünlerinizde yapılandırdığınız fiyat varyasyonlarıyla eşleşmelidir.

![Dönem Seçimi alan ayarları](/img/config/period-selection-field-settings.png)

6. Bir **Dönem Seçici Şablonu** seçin (Clean varsayılandır; özel CSS için hazır, basit stillendirilmiş bir seçici oluşturur).

7. **Alanı Kaydet**e tıklayın.

#### 3. Adım: Alanı Fiyatlandırma Tablosunun Üzerine Yerleştirin {#step-3-position-the-field-above-the-pricing-table}

En iyi kullanıcı deneyimi için Dönem Seçimi alanının checkout adımınızda Fiyatlandırma Tablosu alanından **önce** göründüğünden emin olun. Alanları sürükleyerek checkout formu düzenleyicisinde yeniden sıralayabilirsiniz. Böylece müşteriler önce bir faturalandırma dönemi seçer, ardından o döneme ait fiyatları görür.

![Alan sırasını gösteren checkout formu düzenleyicisi](/img/config/checkout-form-editor-with-fields.png)

#### Ön Uçta Nasıl Çalışır {#how-it-works-on-the-frontend}

Yapılandırıldıktan sonra, kayıt sayfanızı ziyaret eden müşteriler fiyatlandırma tablosunun üzerinde dönem seçiciyi görür. Farklı bir faturalandırma dönemine tıkladıklarında:

  * Fiyatlandırma tablosu, seçili dönem için fiyatları gösterecek şekilde anında güncellenir (sayfanın yeniden yüklenmesi gerekmez).
  * Pricing Table alanında **Farklı Süreleri Zorla** devre dışıysa, seçili dönem için fiyat varyasyonu olmayan ürünler gizlenir.
  * **Farklı Süreleri Zorla** etkinse, seçili dönem için bir varyasyonları olmasa bile tüm ürünler görünür kalır (varsayılan fiyatlarını gösterirler).

#### URL ile Bir Faturalandırma Dönemini Önceden Seçme {#pre-selecting-a-billing-period-via-url}

URL aracılığıyla bir ürünü ve faturalandırma dönemini de önceden seçebilirsiniz. Ultimate Multisite şu URL kalıplarını destekler:

  * `/register/premium` — Yalnızca "Premium" ürününü önceden seçer
  * `/register/premium/12` — Ürünü ve 12 aylık süreyi önceden seçer
  * `/register/premium/1/year` — Ürünü 1 yıllık süreyle önceden seçer

### Şablon Seçimi Alanı {#the-template-selection-field}

**Şablon Seçimi** alanı, müşterilerin checkout sırasında bir site şablonu seçmesini sağlar. Artık Ultimate Multisite v2.6.1'de eklenen **tek adımlı** ve **çok adımlı** checkout formu şablonlarına varsayılan olarak dahildir.

#### Alanı elle ekleme {#adding-the-field-manually}

v2.6.1'den önce oluşturulmuş bir formla çalışıyorsanız veya boş bir şablondan başladıysanız:

1. **Ultimate Multisite > Checkout Formları** bölümüne gidin ve checkout formunuzu düzenleyin.
2. Site ayrıntılarının toplandığı adımda **Yeni Alan ekle**ye tıklayın.
3. Alan türü iletişim kutusundan **Şablon Seçimi**ni seçin.
4. Alanı yapılandırın:
   - **Etiket** — Müşterilerin şablon ızgarasının üzerinde gördüğü başlık (örn. "Bir site şablonu seçin").
   - **Zorunlu** — Müşterilerin devam etmeden önce bir şablon seçmek zorunda olup olmadığı.

#### Nasıl çalışır {#how-it-works}

Bir müşteri checkout sırasında bir şablon seçtiğinde, Ultimate Multisite yeni sitesini hazırlarken bunu kullanır. Gösterilen şablonlar **Site Şablonları** listenizden gelir (**Ultimate Multisite > Site Şablonları**). Burada yalnızca müşterilere açık olarak işaretlenen şablonlar görünür.

### Checkout formu temel domainleri {#checkout-form-base-domains}

Ultimate Multisite v2.13.0, checkout formu **Site URL** alanlarında yapılandırılan domainleri ağ temel domainleri olarak ele alır. Müşterilerin `example.com` ve `sites.example.com` gibi bir veya daha fazla paylaşılan kayıt domaini altında siteler oluşturmasını istediğinizde alanın kullanılabilir-domain ayarlarını kullanın.

Paylaşılan checkout-form temel domainleri, site başına özel domain eşlemeleri olarak değerlendirilmez. Bir müşteri bu temellerden birinde bir alt dizin sitesi oluşturduğunda, Ultimate Multisite paylaşılan hostun yalnızca o tek siteye ait olmasını sağlayacak bir eşlenmiş-domain kaydı oluşturmaz. Paylaşılan host, aynı checkout form temelini kullanan kardeş siteler için kullanılabilir kalır.

Özel domainleri `customer-example.com` gibi müşteri başına eşlenmiş hostlar için saklayın. Checkout-form temel domainlerini, birçok sitenin kullanabileceği paylaşılan kayıt hostları için saklayın.

#### Alanı kaldırma {#removing-the-field}

Site template sunmuyorsanız, formunuzdan Template Selection alanını kaldırın. Müşteriler daha sonra **Ultimate Multisite > Settings > Site Templates** altında yapılandırılan varsayılan template hangisiyse onu alır.
