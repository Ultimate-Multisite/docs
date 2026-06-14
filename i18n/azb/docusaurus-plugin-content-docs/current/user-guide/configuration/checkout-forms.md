---
title: Checkout Forms
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Ödül Formları

Ödül Formları, yeni müşterileri dönüştürmeye çalışırken farklı yaklaşımları denemek için kolay ve esnek bir yoldur.

Ultimate Multisite 2.0, istediğiniz kadar form oluşturmanıza, farklı alanlar, sunulan ürünler vb. eklemenize olanak tanıyan bir Ödül Formu düzenleyicisi sunar.

Bu özelliğe ulaşmak için sol kenar çubuğundaki Ödül Formları menüsüne gidin.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Bu sayfada oluşturduğunuz tüm ödül formlarını görebilirsiniz.

Liste tablosu, her formun şu anda müşterilere kullanılıp kullanılamayacağını kontrol etmeniz için bir **Durum** sütunu içerir:

| Durum | Anlamı |
|---|---|
| **Aktif** | Form, kısa kodu veya kayıt sayfası yayınlandığı her yerde kullanılabilir. |
| **Pasif** | Form kaydedilmiş ancak devre dışı bırakılmış. Tekrar etkinleştirmediğiniz sürece müşteriler bu formla ödeme tamamlayamaz. |

Özellikle canlı formlarınızın yanında taslak veya mevsimlik ödül formları tutuyorsanız, genel bir kayıt akışını düzenlemeden önce durum sütununu kullanın.

Yeni bir form oluşturmak isterseniz, sayfanın üst kısmındaki Ödül Formu Ekle'ye tıklayın.

Başlangıç noktası olarak bu üç seçenekten birini seçebilirsiniz: tek adımlı, çok adımlı veya boş. Ardından, Düzenleyici'ye Git'e tıklayın.

**Tek adımlı** veya **çok adımlı** başlangıç noktasını seçtiğinizde, form şablonu varsayılan olarak bir **Şablon Seçimi** alanı içerir. Bu alan, müşterilerinizin kayıt süreci sırasında bir site şablonu seçmesine olanak tanır. Bu alanı yerinde bırakabilir, kaldırabilir veya düzenleyicideki diğer alanlar gibi yeniden konumlandırabilirsiniz.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatif olarak, mevcut formlarınızı altlarındaki seçeneklere tıklayarak düzenleyebilir veya çoğaltabilirsiniz. Orada ayrıca formun kısa kodunu kopyalama veya formu silme seçeneklerini de bulacaksınız.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Ödül Formu Düzenleyici Genel Bakış

Ödül formu düzenleyicisi, kayıt formlarınızı oluşturmak için kapsamlı bir arayüz sağlar. Düzenleyici düzenine genel bir bakış aşağıdadır:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Bir Ödül Formunu Düzenleme

Farklı amaçlar için ödül formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Ödül formu düzenleyicisine gittikten sonra, formunuza bir isim (yalnızca dahili referans için kullanılacak) ve bir slug (örneğin, kısa kodlar oluşturmak için kullanılır) verin.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. Yeni bir ödül formu adımı eklemek için Yeni Ödül Formu Adımı Ekle'ye tıklayabilirsiniz.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal pencerenin ilk sekmesinde, formunuzun adım içeriğini doldurun. Ona bir ID, bir isim ve bir açıklama verin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![Checkout form step](/img/config/checkout-form-step.png)

Ardından, adımın görünürlüğünü ayarlayın. "Her zaman göster", "Yalnızca giriş yapmış kullanıcılar için göster" veya "Yalnızca misafirler için göster" seçeneklerinden birini seçebilirsiniz.

![Checkout form step](/img/config/checkout-form-step.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Checkout form step](/img/config/checkout-form-step.png)

Şimdi, ilk adımımıza alanlar ekleme zamanı. Sadece Yeni Alan Ekle'ye tıklayın ve istediğiniz bölüm türünü seçin.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Her alan doldurulması gereken farklı parametrelere sahiptir. Bu ilk giriş için "Kullanıcı Adı" alanını seçeceğiz.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

İhtiyacınız kadar adım ve alan ekleyebilirsiniz. Müşterilerinizin seçmesi için ürünlerinizi göstermek için Fiyatlandırma Tablosu alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek istiyorsanız, Şablon Seçimi alanını ekleyin. Ve benzeri.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Not:** kullanıcı adı, e-posta, şifre, site başlığı, site URL'si, sipariş özeti, ödeme ve gönder düğmesi, bir ödül formu oluşturmak için zorunlu alanlardır._

Ödül formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Önizle (Preview) düğmesini kullanabilirsiniz. Ayrıca mevcut bir kullanıcı veya bir ziyaretçi olarak görünüm arasında geçiş yapabilirsiniz.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Son olarak, Gelişmiş Seçenekler'de "Teşekkürler" sayfası için mesajı yapılandırabilir, dönüşü izlemek için kod parçacıkları ekleyebilir, ödül formunuza özel CSS ekleyebilir veya belirli ülkelere kısıtlayabilirsiniz.

![Advanced Options](/img/config/checkout-form-advanced.png)

Ayrıca, sağ sütundaki bu seçeneği açıp kapatarak veya formu kalıcı olarak silerek ödül formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilirsiniz.

![Active toggle](/img/config/checkout-form-active.png)

Bir formu silmek için, form eylemlerindeki silme seçeneğine tıklayın:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ödül formunuzu kaydetmeyi unutmayın!

![Save button](/img/config/checkout-form-save.png)

Formunuzun kısa kodunu almak için Kısa Kod Oluştur'a tıklayın ve modal pencerede gösterilen sonucu kopyalayın.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Fiyatlandırma Tablosu Alanı

**Fiyatlandırma Tablosu** alanı, müşterilerin bir plan seçebilmesi için ödül formunda ürünlerinizi gösterir. Bu alanı düzenlediğinizde, birkaç seçeneği yapılandırabilirsiniz:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Fiyatlandırma tablosunun ön yüzde kayıt formunda nasıl göründüğü aşağıdadır:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

*   **Ürünler**: Hangi ürünlerin gösterileceğini ve hangi sırada görüneceğini seçin.
*   **Farklı Süreleri Zorla**: Etkinleştirildiğinde, tüm ürünler, mevcut faturalandırma dönemi için eşleşen bir fiyat varyasyonu olsun ya da olmasın gösterilir. Devre dışı bırakıldığında (varsayılan), seçilen dönem için varyasyonu olmayan ürünler gizlenir.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
*   **Önceden Seçiliyse Gizle**: URL aracılığıyla bir plan zaten seçilmişse (örneğin, `/register/premium`), fiyatlandırma tablosunu gizler.
*   **Fiyatlandırma Tablosu Şablonu**: Fiyatlandırma tablosu için görsel şablonu seçin (Basit Liste, Eski vb.).

Bir ürünü, form o ürünün ödeme akışını tamamlamak için gereken alanları içermeden önce Fiyatlandırma Tablosu'na eklerseniz, düzenleyici şimdi bir uyarı gösterir. Canlı bir kayıt formu için değişiklikleri yayınlamadan veya kaydetmeden önce eksik zorunlu alanı eklemek için bu uyarılardan yararlanın.

### Bir Dönem Seçimi Anahtarı Ekleme

Ürünlerinizde [Fiyat Varyasyonları](creating-your-first-subscription-product#price-variations) yapılandırdıysanız (örneğin, aylık ve yıllık fiyatlandırma), ödül formunuza bir **Dönem Seçimi** alanı ekleyebilirsiniz. Bu alan, müşterilerin faturalandırma dönemleri arasında geçiş yapmasına olanak tanıyan bir anahtar gösterir ve fiyatlandırma tablosu gerçek zamanlı olarak dinamik şekilde güncellenir.

#### Adım 1: Ürünlerinizde Fiyat Varyasyonları Ayarlama

Dönem Seçimi alanını eklemeden önce, ürünlerinizin fiyat varyasyonları yapılandırıldığından emin olun. **Ultimate Multisite > Ürünler**'e gidin, bir ürünü düzenleyin ve alternatif faturalandırma dönemleri eklemek için **Fiyat Varyasyonları** sekmesine gidin (örneğin, indirimli yıllık fiyat).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Adım 2: Dönem Seçimi Alanını Ödül Formunuza Ekleme

1. **Ultimate Multisite > Ödül Formları**'na gidin ve ödül formunuzu düzenleyin.

2. **Fiyatlandırma Tablosu** alanınızın bulunduğu adıma kadar aşağı kaydırın ve Yeni Alan Ekle'ye tıklayın.

3. Alan türü seçme iletişim kutusunda, Dönem Seçimi'ne tıklayın.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Dönem seçeneklerini yapılandırın. Her seçeneğin şunlara ihtiyacı vardır:
   * **Süre**: Sayı (örneğin, `1`)
   * **Süre birimi**: Dönem türü (Gün, Hafta, Ay veya Yıl)
   * **Etiket**: Müşterilerin göreceği metin (örneğin, "Aylık", "Yıllık")

5. Daha fazla dönem seçeneği eklemek için + Seçenek Ekle'ye tıklayın. Bu seçenekler, ürünlerinizde yapılandırdığınız fiyat varyasyonlarıyla eşleşmelidir.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

Alan seçeneklerini doğrudan da yapılandırabilirsiniz:

<!-- Screenshot unavailable: Period selection field options -->

6. Bir **Dönem Seçici Şablonu** seçin (Temiz varsayılandır, bu da özel CSS için hazır basit bir stilize edici oluşturur).

7. Alanı Kaydet'e tıklayın.

#### Adım 3: Alanı Fiyatlandırma Tablosu Üzerine Konumlandırma

En iyi kullanıcı deneyimi için, Dönem Seçimi alanının ödül formu adımınızda Fiyatlandırma Tablosu alanından **önce** görünmesini sağlayın. Alanları sürükleyerek ödül formu düzenleyicisinde yeniden sıralayabilirsiniz. Bu şekilde, müşteriler önce bir faturalandırma dönemi seçer ve ardından o döneme ait fiyatları görür.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Ön Yüzde Nasıl Çalışır

Yapılandırıldıktan sonra, kayıt sayfanızı ziyaret eden müşteriler dönem seçicisini fiyatlandırma tablosunun üzerinde göreceklerdir. Farklı bir faturalandırma dönemine tıkladıklarında:

*   Fiyatlandırma tablosu anında güncellenerek seçilen döneme ait fiyatları gösterir (sayfa yenileme gerektirmez).
*   Eğer Fiyatlandırma Tablosu alanında **Farklı Süreleri Zorla** devre dışıysa, seçilen dönem için fiyat varyasyonu olmayan ürünler gizlenecektir.
*   Eğer **Farklı Süreleri Zorla** etkinse, ürünler seçilen dönem için varyasyonları olmasa bile görünür kalır (varsayılan fiyatlarını gösterirler).

#### URL Üzerinden Faturalandırma Dönemi Ön Seçimi

Ayrıca bir ürünü ve faturalandırma dönemini URL üzerinden önceden seçebilirsiniz. Ultimate Multisite şu URL kalıplarını destekler:

*   `/register/premium` — Yalnızca "Premium" ürününü önceden seçer
*   `/register/premium/12` — Ürünü ve 12 aylık süreyi önceden seçer
*   `/register/premium/1/year` — Ürünü 1 yıllık bir süreyle önceden seçer

### Şablon Seçimi Alanı

**Şablon Seçimi** alanı, müşterilerin ödeme sırasında bir site şablonu seçmesine olanak tanır. Artık Ultimate Multisite v2.6.1'de eklenen **tek adımlı** ve **çok adımlı** ödül formu şablonlarına varsayılan olarak dahil edilmiştir.

#### Alanı Manuel Olarak Ekleme

v2.6.1'den önce oluşturulmuş veya boş bir şablondan başlatılmış bir formla çalışıyorsanız:

1. **Ultimate Multisite > Ödül Formları**'na gidin ve ödül formunuzu düzenleyin.
2. Site detaylarının toplandığı adımda, Yeni Alan Ekle'ye tıklayın.
3. Alan türü iletişim kutusundan Şablon Seçimi'ni seçin.
4. Alanı yapılandırın:
   - **Etiket** — Müşterilerin şablon ızgarasının üzerinde gördüğü başlık (örneğin, "Bir site şablonu seçin").
   - **Zorunlu** — Müşterilerin devam etmeden önce bir şablon seçmesi gerekiyor mu.

#### Nasıl Çalışır

Bir müşteri ödeme sırasında bir şablon seçtiğinde, Ultimate Multisite bunu yeni sitesini oluştururken kullanır. Gösterilen şablonlar, **Site Şablonları** listenizden (**Ultimate Multisite > Site Şablonları**) gelir. Yalnızca müşterilere açık olarak işaretlenmiş şablonlar burada görünür.

#### Alanı Kaldırma

Eğer site şablonu sunmuyorsanız, Şablon Seçimi alanını formunuzdan kaldırın. Müşteriler o zaman **Ultimate Multisite > Ayarlar > Site Şablonları** altında yapılandırılmış varsayılan şablonu alacaktır.
