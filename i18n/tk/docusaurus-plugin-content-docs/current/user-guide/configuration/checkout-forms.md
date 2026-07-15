---
title: Sipariş Formları
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms, yeni müşterileri dönüştürmek için farklı yolları denemek istediğinizde çok kolay ve esnek bir yoldur.

Ultimate Multisite 2.0, istediğiniz kadar form oluşturmanıza olanak tanıyan bir Checkout Form editor sunar; bu editörde farklı alanlar, teklif edilen ürünler vb. olabilir.

Bu özelliğe erişmek için sol menüdeki Checkout Forms menüsüne gidin.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm checkout formlarını görebilirsiniz.

Liste tablosunda her bir formun müşteriler için şu anda mevcut olup olmadığını kontrol edebileceğiniz bir **Status** sütunu bulunur:

| Status | Anlamı |
|---|---|
| **Active** (Aktif) | Formun kısa kodunun veya kayıt sayfanızın yayınlandığı herhangi bir yerde kullanılabilir. |
| **Inactive** (Etkin Değil) | Form kaydedilmiş ancak devre dışı bırakılmış durumdadır. Tekrar etkinleştirene kadar müşteriler bu formla ödeme yapamazlar. |

Özellikle canlı formlarınızın yanında taslak veya mevsimlik checkout formlarını tuttuğunuz zaman, düzenlemeden önce status sütununu kullanın.

Yeni bir tane oluşturmak istiyorsanız, sayfanın en üstündeki Add Checkout Form'a tıklayın.

Başlangıç noktası olarak bu üç seçenekten birini seçebilirsiniz: tek adım (single step), çok adımlı (multi-step) veya boş (blank). Ardından Editöre Git'e tıklayın.

Başlangıç noktası olarak **tek adım** veya **çok adımlı** seçtiğinizde, form şablonunda varsayılan olarak bir **Template Selection** alanı bulunur. Bu alan, müşteriler kayıt işlemi sırasında bir site şablonu seçmelerine olanak tanır. Bunu yerinde bırakabilir, kaldırabilir veya editördeki diğer herhangi bir alan gibi yeniden konumlandırabilirsiniz.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativ, indiki adyndaňyzda görkezilen opsionalardan birini basyp, size bar bolan formalaryny redaktir edip ýa-da olar bilen taklalaýan tapawutly formalary döredip bilersiňiz. Orada şunlara hem girizgi koduny nusga etmek ýa-da formany silmek üçin opsional barlaglar bar.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Ünsahasy {#checkout-form-editor-overview}

Checkout form editor, sizden goşylyş (registration) formalaryňyzy döretmek üçin giňişleýin barlag berýär. Editorun görnüşi barada aşakdaky maglumatlary okap bilersiňiz:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Formyny Redaktir Etmek {#editing-a-checkout-form}

Siz dürli maksatlar üçin checkout formalary döredip bilersiňiz. Bu mysalda biz goşylyş formasy bilen işleýäris.

Checkout form editoruna geçip, formany bir adaty (içki sanamak üçin ulanyljak) we slug (mysal üçin shortcode döretmek üçin ulanylýan) berip bilersiňiz.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formalar ädimler we ulgamlardan ybaratdyr. "Add New Checkout Step" (New Checkout Adyny Goşmak) basyp, täze ädim goşyp bilersiňiz.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Modal pencerenin ilkinji tabında formanyň adatynda maglumatlary dolduryň. Ona bir ID, bir ad we bir düşündiriş (description) berip bilersiňiz. Bu zatlar esasan içi ulanylýar.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Soňra, ädimiň görkezilmegini (visibility) sozlaň. "Always show" (Her wagt görkez), "Only show for logged in users" (Diňe girişli ulanyjylar üçin görkez) ýa-da "Only show for guests" (Diňe meýil olmaganlar üçin görkez) arasından saýlaýarsyňyz.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Soňra, ädimiň stilini özleşdirip bilersiňiz. Bu opsional ulgamlardyr.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Indi biz ilkinji ädimimize ulgam goşmak üçin wehlangylydyk (field) goşmaly. Diňe "Add New Field" basyp, islediňizden bölümü saýlaň.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Her bir alanda doldurulması gereken farklı parametreler var. Bu ilk girişte "Username" (Kullanıcı Adı) alanını seçeceğiz.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

İhtiyacınız olan kadar adım ve alan ekleyebilirsiniz. Müşterilerinizin birini seçmesi için ürünlerinizi göstermek istiyorsanız, Fiyat Tablosu (Pricing Table) alanını kullanın. Müşterilerinizin şablon seçmesini istiyorsanız, Şablon Seçimi (Template Selection) alanını ekleyin ve benzerlerini yapabilirsiniz.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Not:** bir ödeme formu oluşturmak için username (kullanıcı adı), email (e-posta), password (şifre), site title (site başlığı), site URL (site adresi), order summary (sipariş özeti), payment (ödeme) ve submit button (gönder butonu) zorunlu alanlardır._

Ödeme formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Önizleme (Preview) butonunu kullanabilirsiniz. Ayrıca mevcut bir kullanıcı olarak mı yoksa ziyaretçi olarak mı görüntüleyeceğiniz arasında geçiş yapabilirsiniz.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Son olarak, Gelişmiş Seçenekler (Advanced Options) kısmından "Teşekkür Ederiz" (Thank You) sayfası için mesajı yapılandırabilir, dönüşümleri takip etmek için kod parçacıkları ekleyebilir, ödeme formunuza özel CSS ekleyebilir veya belirli ülkelere kısıtlayabilirsiniz.

![Advanced Options](/img/config/checkout-form-advanced.png)

Ayrıca bu seçeneği sağ sütunda açıp kapatarak ödeme formunuzu manuel olarak etkinleştirebilir veya kalıcı olarak silebilirsiniz.

![Active toggle](/img/config/checkout-form-active.png)

Formu silmek üçin, formu işlem (form actions) bölmesinde silme opsiyasyna basyň:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Sizden checkout formany saklamagy unutmaň!

![Save button](/img/config/checkout-form-save.png)

Formanyň shortcode-yny almak üçin, "Generate Shortcode" (Shortcode Üretmek) düwänesine basyň we modal pencerede görkezilen netijini ýazyp aluň.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Bahalar Tablasy Sahasy {#the-pricing-table-field}

**Pricing Table** (Bahalar Tablasy) sahasy sizden iňlisde, customerlary bir meýilnamany saýlamak üçin siziň önümleri checkout formasynda görkezýär. Bu sahasy redaktir etende, size birnäçe opsionany özara goýa bilersiňiz:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Bahalar tablasyny önümçilik (frontend) ýazgy formasynda nädip görkezýändigini aşakda görýärin:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Önümleri): Näme önümleri görkezmek isleýändigi we olaryň näme sırada görünjekdigini saýlaň.
  * **Force Different Durations** (Bölünji Wekili Zorlamak): Bu işi açanda, bellenilen ömür döwrüne (billing period) dogry bahala degişli bir üýtgeşme bar bolsa-olsa, ähli önümleri görkezýär. Eger bu işi ýapmasa (default), saýlanan döwür üçin üýtgeşmesi olmayan önümleri ýatlatyp saklaýar.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Önüni Saýlananda Ýatlatmak): Plan URL arkaly (mysal üçin `/register/premium`) önümçilikde saýlan bolsa, bahalar tablasyny ýatlatyp saklaýar.
  * **Pricing Table Template** (Bahalar Tablasy Şablonu): Bahalar tablasy üçin görnüşi şablonu saýlaň (Simple List, Legacy, we ş.m.).

Eger siz formany tamamlamak üçin zerur bolan önümçilikleri öz içine alýan bahalar tablasyna bir önümi goýýan bolsaňyz, redaktir şu wagt "warning" (uyman) görkezýär. Bu uywany ulanmaga çykan ýa-da işi saklamazdan öň, hyzmatda bolan ýazgy formasy üçin eksik zerur sahasy goýmak üçin ulanyň.

### Nokta Saýlaýjy Düğmeni Goşmak {#adding-a-period-selection-toggle}

Eger siz ürünlerinizde [Price Variations](creating-your-first-subscription-product#price-variations) (mysal üçin aylıgy we ýillik narğdaýy) goşmagyňyz bolsa, size checkout formanıza **Period Selection** (Döwletlik Saýlaýjy) ulgamy goşyp bilersiňiz. Bu ulgam müşderilere töhle wagtlary arasynda geçmek üçin düğme görkezýär we narğdaýy tablisa gerda gerdimde dinamiki ýa-da hakyky wagtda özüni üýtgedendir.

#### 1-nji Ädim: Ürünlerinizde Narğdaýy Varyasiýalary Goşmak {#step-1-set-up-price-variations-on-your-products}

Period Selection ulgamyny goşmazdan, ürünlerinizde narğdaýy varyasiýalary goşmagyňyz zerurdyginden habersiz bolmaly. **Ultimate Multisite > Products**-a gitdirin, bir üragy redaktir ediň we **Price Variations** tabyna geçiň, olaryň üçin başga töhle wagtlary goşyp bilersiňiz (mysal üçin ýillik narğdaýy kesgitlenip).

![Product-da Price Variations tabyny görkezýän resminji sanaw](/img/config/product-price-variations-tab.png)

#### 2-nji Ädim: Period Selection Ulgamyny Checkout Formanıza Goşmak {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. **Ultimate Multisite > Checkout Forms**-a gitdirin we checkout formanyzy redaktir ediň.

2. **Pricing Table** (Narğdaýy Tablisa) ulgamy bar bolan ädimi aşakla çykaryp **Add new Field** (New Field goşmak) düwmenine basyň.

3. Ulgam görnüşini saýlaýan dialogda, **Period Select**-e basyň.

![Period Select görkezýän Add New Field dialogyny görkezýän resminji sanaw](/img/config/checkout-form-add-field-dialog.png)

4. Döwletlik wagtlary goşandyryň. Her bir opsiyonyň şu zatlary bolmaly:
   * **Duration** (Wagty): Sany (mysal üçin `1`)
   * **Duration unit** (Wagty ühanasy): Wagtyň görnüşi (Günler, Hekaplary, Aylar ýa-da Ýyllar)
   * **Label** (Açyklyk): Müşderileri görjek tekst (mysal üçin "Monthly", "Annual")

5. Haslap wagtlary goşmak üçin **+ Add Option** düwmenine basyň. Bu opsiyalar, ürünlerinizde siz goşmagan narğdaýy varyasiýalar bilen sazlaşmaly bolmaly.

![Period Selection field settings görkezýän resminji sanaw](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** (Döwletlik Saýlaýjy Şablonyny) saýlaň (Clean defaultdyr, ol özüni sazlanmaga taýyn bolan sadala stilize ediji görnüşi görkezýär).

7. **Save Field** düwün.

#### 3-nji ädim: Alanı Narzalaýjy Tablanyň Üstüne Goýuň {#step-3-position-the-field-above-the-pricing-table}

Iň gowy ulanyjylar üçin, Period Selection alanyny narzalaýjy tablanyň üstünde görünendigini üpjün ediň. Siz alanlary narzalaýjy form editorda sürgün edip ýa-da dürli tertibe goýap bilersiňiz. Bu arkaly, iňlisler ilki bilen hasaplaýan döwrüni saýlaýarlar we soňra şol döwür üçin bahalary göräp bilýärler.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Frontendda Näme Görmeli? {#how-it-works-on-the-frontend}

Sazlanandan soň, sizden goşylyş sahhanasyna gelen iňlisler narzalaýjy tablanyň üstünde döwrüni saýlaýjyny göräsiz. Olar başga hasaplaýan döwür üçin düwärse:

  * Narzalaýjy tablaga soňky döwür üçin bahalary görkezmek üçin narzalaýjy tablaga beýleki döwrüni saýlsa, bahalar okam bolup biler (sahany ýa-da aşakdan ýüklemek gerek).
  * Narzalaýjy Tabla alanynyň **Force Different Durations** (Hasaplaýan Döwürleri Goramak) işi däldirilen bolsa, saýlanan döwr üçin bahasy üýtgeýän maglumatlary bolmadyk önümleri gizlenip biler.
  * Eger **Force Different Durations** işi aýdylsa, saýlanan döwür üçin dürli görnüşleri olmagyň sebäbinde ähli önümler görünýär (olary soňky bahalary bilen görkezýärler).

#### URL arkaly Narzalaýjy Döwürü Öňden Saýlamak {#pre-selecting-a-billing-period-via-url}

Siz hem URL arkaly önümi we hasaplaýan döwürü öňden saýlap bilersiňiz. Ultimate Multisite bu URL formatlaryny goldaýar:

  * `/register/premium` — Diňe "Premium" önümini öňden saýlar
  * `/register/premium/12` — Önümi we 12 aý döwürüni öňden saýlar
  * `/register/premium/1/year` — 1 ýylda döwür bilen önümi öňden saýlar

### Template Selection Alany {#the-template-selection-field}

**Template Selection** (Şablon Saýlaýjy) alanı iňlisler hasaplaýan sırada şablonu saýlap bilmegine mümkinçilik berýär. Bu indi Ultimate Multisite v2.6.1-de goşulanan **single step** we **multi-step** hasaplaýan form şablonlarynda awtomatiki görkezilýär.

#### Alanı Manual Goşmak {#adding-the-field-manually}

Eğer v2.6.1-den önce oluşturulmuş bir formla veya boş şablondan başlamış bir formla çalışıyorsanız:

1. **Ultimate Multisite > Checkout Forms** bölümüne gidin ve ödeme formunuzu düzenleyin.
2. Site detaylarının toplandığı adımda, **Add new Field** (Yeni Alan Ekle) butonuna tıklayın.
3. Alan türü diyalog kutusundan **Template Selection** (Şablon Seçimi) seçeneğini seçin.
4. Alanı şu şekilde yapılandırın:
   - **Label** (Etiket) — Müşterilerin şablon ızgarının üstünde gördüğü başlık (örneğin, "Bir site şablonu seçin").
   - **Required** (Zorunlu) — Müşterilerin ilerlemeden önce bir şablon seçip seçmemesi gerekiyor mu.

#### Nasıl Çalışır? {#how-it-works}

Müşteri ödeme sırasında bir şablon seçtiğinde, Ultimate Multisite yeni sitesini hazırlarken onu kullanır. Görünen şablonlar sizin **Site Templates** listenizden (**Ultimate Multisite > Site Templates**) gelir. Burada yalnızca müşterilere mevcut olan olarak işaretlenmiş şablonlar görünür.

### Checkout-form temel alan adları (base domains) {#checkout-form-base-domains}

Ultimate Multisite v2.13.0, ödeme formundaki **Site URL** alanlarında yapılandırılmış alan adlarını ağ temel alan adları (network base domains) olarak ele alır. Müşterilerin `example.com` ve `sites.example.com` gibi tek veya birden fazla paylaşılan kayıt alanları altında site oluşturmasını istediğinizde, alanın mevcut alan adı ayarlarını kullanın.

Paylaşılan ödeme formu temel alan adları, her bir siteye özel alan adı eşleştirmeleri olarak ele alınmaz. Bir müşterinin bu temellerden birinde alt dizinli (subdirectory) bir site oluşturması durumunda, Ultimate Multisite, paylaşılan ana sunucunun yalnızca o tek siteye ait olmasını sağlayacak bir eşleşmiş alan adı kaydı oluşturmaz. Paylaşılan ana sunucu, aynı ödeme formu temelini kullanan kardeş siteler için kullanılabilir kalır.

`customer-example.com` gibi her müşteri için özel eşleşmiş ana sunucular için özel alan adlarını koruyun. Birçok sitenin kullanabileceği paylaşılan kayıt ana sunucuları için ise ödeme formu temel alan adlarını saklayın.

#### Alanı Kaldırma {#removing-the-field}

Eger siz sayt şablonlaryny teklip etmeseniz, formanyzdan Şablon Seçimi (Template Selection) sarpyny almakdan soň, adamlar **Ultimate Multisite > Settings > Site Templates** aşyrynda saýlan wezipä görä default şablonu alarlar.
