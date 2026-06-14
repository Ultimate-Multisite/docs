---
title: سورة نماشلار
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms، жаңы мизони кийинки мизони сатууда ян다рак тажмалар көрүү үчүн оңай ва мувофиқ йўлдирмишdir.

Ultimate Multisite 2.0 да сиз хоҳласан кўп хил шаклдаги формаларни, турли майдончалар, таклиф этилган маҳсулотлар ва бошқа нарсалар билан яратишин имконият берадиган Checkout Form editor-ини тақдим этади.

Бу хусусиятига кириш учун сол томонидаги менюдан (left side-bar) Checkout Forms-га ўтинг.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Бу саҳда сизга барча эга бўлган checkout formларни кўра оласиз.

Список жадвали **Status** устунини ўз ичига олади, бу орқали ҳар бир форма ҳозирда мизони учун мавжуд эканлигини тасдиқлашингиз мумкин:

| Status | Ma'nosi |
|---|---|
| **Active** | Форманинг шорткод ёки роғдорлик саҳифаси нимада бўлса, уни ҳар қандай жойда ишлатиш мумкин. |
| **Inactive** | Форма сақланган, лекин бекор қилинган. Уни қайта фаоллаштиргандан олдин мизони бу билан чекаут қилиш имконияти йўқ. |

Асосан, дарафт ёки мавсумий checkout formларни ўз ҳаётдаги формалар билан бирга сақлаб туриб бўлсак, бекор қилинган ёки фаол ҳолатдаги формалардан олдин статус устунидан фойдаланинг.

Янги битта яратишни истасангиз, фақат саҳаннинг юзида "Add Checkout Form" ни босинг.

Сиз бу учта танловдан бирини бошланғич нуқта сифати сифати танлашингиз мумкин: single step (бир қадам), multi-step (кўп қадамли) ёки blank (холо). Кейин, Editorga ўтиш учун босинг.

Асосан **single step** ёки **multi-step** ни бошланғич нуқта сифати танласангиз, форма шакли одатда **Template Selection** майдончасини ўз ичига олади. Бу майдонча мизони учун сизнинг мизони жараёни давомида сайт шаклини танлаш имкониятини беради. Сиз уни ўзидагидек қолдириб туша оласиз, уни олиб ташлашингиз ёки Editorдаги бошқа майдончалар каби жойлаштиришингиз мумкин.

![Checkout Form editor](/img/config/checkout-form-editor.png)

دیگر، شما قبلاً داشتن فرم‌ها را نامlarının altındaki seçeneklere tıklayarak düzenleyebilir veya çoğaltabilirsiniz. Orada ayrıca formun shortcode'unu kopyalama veya formu silme seçeneklerini de bulabilirsiniz.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Genel Bakış

Checkout form editor, kayıt formlarınızı oluşturmak için kapsamlı bir arayüz sağlar. İşte editör düzeninin genel bir görünümü:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Bir Checkout Formu Düzenleme

Farklı amaçlar için checkout formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Checkout form editörüne gittiğinizde, formunuza bir isim verin (bu sadece dahili referans için kullanılacak) ve bir slug (örneğin shortcode oluşturmak için kullanılan).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. Yeni bir adım eklemek için Add New Checkout Step'e tıklayabilirsiniz.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal penceresinin ilk sekmesinde, formunuzun adımının içeriğini doldurun. Ona bir ID, bir isim ve bir açıklama verin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Ardından, adımın görünürlüğünü ayarlayın. "Her zaman göster", "Sadece giriş yapmış kullanıcılar için göster" veya "Sadece misafirler için göster" seçeneklerinden birini seçebilirsiniz.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Şimdi ilk adımımıza alan ekleme zamanı geldi. Sadece Add New Field'a tıklayın ve istediğiniz bölüm tipini seçin.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Ҳамоҳанг ҳар як тавсифи (field) ўзгарадаётган параметрларга ээдир. Бу аввалин кириш учун, биз "Username" (Фарзиланиши) тавсифини танлаймиз.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Сиз ҳар қанча қайтинг ва тавсифи (step) ва тавсифларни (field) илақач танлашингиз мумкин. Мижозларингиз учун маҳсулотларини танлашга бериш учун "Pricing Table" (Баҳоловчи жадвали) тавсифини ишлатинг. Агар сиз мижозларингиз учун шаблон танлашга рухсат бермоқчи бўлсангиз, "Template Selection" (Шаблон танлаш) тавсифини қўшинг. Ва шу каби.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Эслатма:** checkout form yaratish учун username, email, password, site title, site URL, order summary (тартиб хулоса), payment (маолув), ва submit button (юрик тугмаси) мажбурий тавсифлардир._

Checkout form ишлаётганингизда, мижозларингиз формни қандай кўришини кўриш учун ҳар доим Preview (Мушора) тугмачини ишлата оласиз. Шунингдек, мавжуд фойдаланувчи сифати ёки меҳмон сифатида кўриш ўртасида ўзгариб туришингиз мумкин.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Ниҳоят, Advanced Options (Юқори даража танзимлари) бўйича "Thank You" (Раҳмат) саҳифаси учун хабарни тадбир қилишингиз мумкин, конверсияларни кузатиш учун фрагментларни (snippets) қўшишингиз мумкин, checkout formга махсус CSS қўшишингиз ёки уни аниқ мамлакатларга чеклашингиз мумкин.

![Advanced Options](/img/config/checkout-form-advanced.png)

Шунингдек, ўнг томондаги танзим (option) ни ичида тугмаларни учоқлаш (toggle) орқали checkout formни ўз ичида ёки бекор қилишингиз мумкин, ёки формни доимий равишда ўлдириб ташлашингиз мумкин.

![Active toggle](/img/config/checkout-form-active.png)

نموذج (form) ниго باش qilish üçin, modeldegi "delete" opsiyonasyna basyň:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Sizden checkout formany saklamagy unutmaň!

![Save button](/img/config/checkout-form-save.png)

Formanyň shortcode-unu almak üçin, "Generate Shortcode" (Shortcode Üretmek) düwäsesine basyň we modal oynagysynda görkezilen netijeni kopyalaň.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Narahatçylyk caryhanasy (The Pricing Table Field)

**Pricing Table** (Narahatçylyk Caryhanasy) alanı sizden satyn alyjylara plan tanlamagy mümkin bolan şaklyňizni checkout formanynda görkezýär. Bu alanı redaktir etende, siz birnäçe opsiyany özüňize goşyp bilersiňiz:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Narahatçylyk caryhanasy önümçilik formanynyň öňünde nädip görünýändigini aşakda görkezýärin:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Önümçilikler): Näme önümleri görkezip bermegi we olaryň näçe sırada görünjekdigini saýlaň.
  * **Force Different Durations** (Bizi Başga Süreleri Zorlamak): Bu işi açanda, bellenilen narahatçylyk caryhanasy barada dogry narapda bolmasa hem, ähli önümleri görkezýär. Kapaly bolsa (default), saýlanan döwür üçin narapda olmadığı önümleri ýatlatýar.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Öňünden Saýlananda Ýatlatmak): Plan URL arkaly (mysal üçin `/register/premium`) öňünden saýlan bolsa, narahatçylyk caryhanasy ýatlatylýar.
  * **Pricing Table Template** (Narahatçylyk Caryhanasy Şablonu): Narahatçylyk caryhanasy üçin wizual şablonu saýlaň (Simple List, Legacy, we ş.m.).

Eger siz formany tamamlamak üçin zerur bolan önümün narahatçylyk caryhanasyna girmezden önce onu Pricing Table-a goşsan bolsa, redaktir şu wagt "warning" (uybulma) görkezýär. Käbir öňki ýazmalardan soňda ýaşaýan resminam formany üçin eksport etmeden ýa-da sazlamaçdan önce bu uybulmagy ulanmaga çalyşyň we ýok bolan zerur alanı goşyp bilersiňiz.

### Dönem Seçimi Anahtarını Ekleme

Eğer ürünlerinizde [Fiyat Varyasyonları](creating-your-first-subscription-product#price-variations) yapılandırdıysanız (örneğin aylık ve yıllık fiyatlandırma), ödeme formunuza bir **Dönem Seçimi** alanı ekleyebilirsiniz. Bu alan, müşterilerin faturalandırma dönemleri arasında geçiş yapmalarına olanak tanıyan bir anahtar gösterir ve fiyat tablosu gerçek zamanlı olarak dinamik şekilde güncellenir.

#### Adım 1: Ürünlerinizde Fiyat Varyasyonlarını Ayarlayın

Dönem Seçimi alanını eklemeden önce, ürünlerinizin fiyat varyasyonlarının ayarlandığından emin olun. **Ultimate Multisite > Products**'a gidin, bir ürünü düzenleyin ve alternatif faturalandırma dönemlerini (örneğin indirimli yıllık) eklemek için **Price Variations** sekmesine gidin.

![Ürün üzerindeki Fiyat Varyasyonları sekmesi](/img/config/product-price-variations-tab.png)

#### Adım 2: Dönem Seçimi Alanını Ödeme Formunuza Ekleyin

1. **Ultimate Multisite > Checkout Forms**'a gidin ve ödeme formunuzu düzenleyin.

2. **Pricing Table** alanınızın bulunduğu adıma aşağı kaydırın ve **Add new Field**'a tıklayın.

3. Alan türü seçme penceresinde, **Period Select**'e tıklayın.

![Period Select gösteren Ekleme Yeni Alan diyaloğu](/img/config/checkout-form-add-field-dialog.png)

4. Dönem seçeneklerini yapılandırın. Her seçeneğin şunlara ihtiyacı vardır:
   * **Duration (Süre)**: Sayı (örneğin `1`)
   * **Duration unit (Süre birimi)**: Dönem türü (Günler, Haftalar, Aylar veya Yıllar)
   * **Label (Etiket)**: Müşterilerin göreceği metin (örneğin "Aylık", "Yıllık")

5. Daha fazla dönem seçeneği eklemek için **+ Add Option**'a tıklayın. Bu seçenekler, ürünlerinizde yapılandırdığınız fiyat varyasyonlarıyla eşleşmelidir.

![Dönem Seçimi alan ayarları](/img/config/period-selection-field-settings.png)

6. Bir **Period Selector Template (Dönem Seçici Şablonu)** seçin (Varsayılan Clean'dir, bu da özel CSS için hazır basit bir seçici oluşturur).

۷. **Save Field** düğmesine tıklayın.

#### üçüncü adım: Alanı Fiyat Tablosunun Üstüne Yerleştirme

En iyi kullanıcı deneyimi için, Dönem Seçim (Period Selection) alanının ödeme tablosundan önce göründüğünden emin olun. Ödeme formu düzenleyicisinde alanları sürükleyerek yeniden sıralayabilirsiniz. Bu şekilde müşteriler önce bir fatura dönemini seçer ve sonra o döneme ait fiyatları görürler.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Ön Yüzde Nasıl Çalışır

Ayarladıktan sonra, kayıt sayfanızı ziyaret eden müşteriler dönem seçicisini fiyat tablosunun üstünde göreceklerdir. Farklı bir fatura dönemi seçtiklerinde:

  * Fiyat tablosu anında seçilen döneme ait fiyatları göstermek için güncellenir (sayfa yeniden yüklenmesine gerek yoktur).
  * Eğer Fiyat Tablosu alanındaki **Force Different Durations** (Farklı Süreleri Zorla) kapalıysa, seçilen dönem için fiyatı değişmeyen ürünler gizlenecektir.
  * Eğer **Force Different Durations** açıksa, seçilen döneme ait bir varyasyonu olmasa bile tüm ürünler görünür kalır (varsayılan fiyatlarını göstereceklerdir).

#### URL Üzerinden Fatura Dönemi Ön Seçimi Yapma

Ayrıca URL aracılığıyla bir ürünü ve fatura dönemini önceden seçebilirsiniz. Ultimate Multisite bu URL şablonlarını destekler:

  * `/register/premium` — Sadece "Premium" ürünü önceden seçer
  * `/register/premium/12` — Ürünü ve 12 aylık süreyi önceden seçer
  * `/register/premium/1/year` — 1 yıllık süreyle ürünü önceden seçer

### Şablon Seçim Alanı (The Template Selection Field)

**Şablon Seçimi** alanı, müşterilerin ödeme sırasında bir site şablonu seçmesini sağlar. Bu alan artık Ultimate Multisite v2.6.1'de eklenen **tek adım** ve **çok adımlı** ödeme formu şablonlarında varsayılan olarak mevcuttur.

#### Alanı manuel olarak ekleme

Əgər siz v2.6.1-dən əvvəl yaradılmış bir formla və ya boş şablonla başlanmış bir formla işləyirsinizsə:

1. **Ultimate Multisite > Checkout Forms**-a gedin və checkout formunuzu redaktə edin.
2. Sayt detalları toplanan addımda, **Add new Field**-a basın.
3. Field tipi pəncərəsində **Template Selection**-ı seçin.
4. Field-i konfiqurasiya edin:
   - **Label** — Müştərilərin şablon qridinin üstündə gördüyü başlıq (məsələn, "Sayt şablonunu seçin").
   - **Required** — Müştərilər davam etməzdən əvvəl bir şablon seçməlidirmi.

#### Necə işləyir?

Müştəri checkout zamanı bir şablon seçəndə, Ultimate Multisite yeni saytlarını təmin edərkən onu istifadə edir. Burada göstərilən şablonlar sizin **Site Templates** siyahınızdan (**Ultimate Multisite > Site Templates**) gəlir. Yalnız müştərilərə mövcud olan kimi işarələnmiş şablonlar burada görünür.

### Checkout-form bazası domenləri

Ultimate Multisite v2.13.0, checkout formunun **Site URL** sahəsində konfiqurasiya edilmiş domenləri şəbəkə bazası domenləri kimi qəbul edir. Müştərilərin `example.com` və `sites.example.com` kimi bir və ya daha çox ortaq qeydiyyat domenləri altında saytlar yaratmasını istədiyiniz zaman sahənin mövcud domen ayarlarından istifadə edin.

Ortaq checkout-form bazası domenləri, hər sayta xüsusi domen eşləşməsi kimi qəbul edilmir. Müştəri bu bazalardan birində alt qovluq (subdirectory) saytı yaratdıqda, Ultimate Multisite həmin ortaq hostun yalnız o sayta aid olmasını təmin edən bir mapped-domain qeydi yaratmır. Ortak host, eyni checkout forması bazasını istifadə edən oxşar saytlar üçün mövcud qalır.

Müştəri xüsusi müştərilərə bağlı eşləşmə domenləri (məsələn, `customer-example.com`) üçün onları saxlayın. Bir çox sayt tərəfindən istifadə edilə bilən ortaq qeydiyyat hostları üçün checkout forması bazası domenlərini saxlayın.

#### Field-i silmək

اگر شما سایت قالب‌ها (site templates) ارائه نمی‌ده‌اید، فرم از فیلد انتخاب قالب (Template Selection) را بردارید. در این صورت، مشتریان از هر قالبی که در **Ultimate Multisite > Settings > Site Templates** تنظیم شده باشد استفاده خواهند کرد.
