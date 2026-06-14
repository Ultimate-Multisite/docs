---
title: Тохируулгын хуудсууд
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms гэдэг нь шинэ хэрэглэгчдийг худалдан авагчаар оруулах арга барилыг туршиж үзэхэд хялбар бөгөөд уян хатан арга юм.

Ultimate Multisite 2.0-т таны хүссэн хэдэн төрлийн хэлбэр, өөр өөр талбарууд, санал болгож буй бүтээгдэхүүн зэрэг олон янзын форматыг үүсгэх боломжтой Checkout Form editor байна.

Энэ функцийг ашиглахын тулд зүүн талын side-bar дээрх Checkout Forms меню руу орно.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Энэ хуудсан дээр та өөрийн үүсгэсэн бүх checkout forms-ийг харах боломжтой.

List table-д **Status** багана байна, ингэснээр та аль хэдэн form одоо хэрэглэгчдэд ашиглагдаж байгаа эсэхийг баталгаажуулж болно:

| Status | Мэдэгдэл |
|---|---|
| **Active** | Энэхүү form нь түүний shortcode эсвэл бүртгэлийн хуудас х어нээ танилцуулагдсан газраас хамаагүй ашиглагдаж болно. |
| **Inactive** | Энэхүү form нь хадгалагдсан боловч идэвхгүй байна. Та үүнийг дахин идэвхжүүлэх хүртэл хэрэглэгчид checkout хийх боломжгүй. |

Ялангуяа та жишир (draft) эсвэл улирлын checkout forms-ийг өөрийн жинхэнэ (live) forms-той хамт хадгалдаг үед status баганаар ашиглах нь зүйтэй.

Хэрэв шинэ form үүсгэх гэж байгаа бол хуудсанд дээрх Add Checkout Form-ийг дарна.

Эхлэлийн цэг болгох гурван сонголтоос аль нэгийг танд сонгож болно: single step (нэг алхамтай), multi-step (олон алхамтай) эсвэл blank (хоосон). Дараа нь Editor руу орохын тулд дарна.

Хэрэв та **single step** эсвэл **multi-step**-ийг эхлэлийн цэг болгосон бол form template-д анхдаа **Template Selection** (Template сонголт)-ийн талбар багтдаг. Энэ талбараар таны хэрэглэгчид бүртгэл хийх үед site template-ийг сонгож болно. Та үүнийг байрласан байлгаж болно, ашиглахгүй болгож болно эсвэл editor дэх бусад талбаруудтай ижил байдлаар байршлыг өөрчилж болно.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Та өөрөөр хэлэхэд, та аль хэдийн байгаа загваруудыг нэрний доорх сонголтуудаар засах эсвэл хуулж авах боломжтой. Тэндээ л та загварыг хуулбарлах shortcode-ийг хуулж авахад эсвэл загварыг устгах сонголтуудыг олно.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor-ийн ерөнхий өгөгдөл

Checkout form editor нь таны бүртгэлийн загваруудыг бүтээхэд зориулсан бүрэн интерфейсийг харуулдаг. Энд редакторийн байрлалын талаар ерөнхи ойлголт байна:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Form-ийг засах

Та өөр зорилготой checkout form-ууд үүсгэж болно. Энэ жишээнд бид бүртгэлийн загварыг ашиглана.

Checkout form editor руу орсон дараа, таны загварт нэр (зөвхөн дотоод дурсамжийн зорилгоор ашиглагдана) болон slug (жишээлбэл shortcode үүсгэхэд ашиглагддаг) өгнө.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Загварууд нь алхам ба талбаруудаас бүрддэг. Add New Checkout Step-ийг дарж шинэ алхам нэмж болно.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Модал цонхны анхны таб дээр таны загварын алхамд агуулгыг бөглөнө. Түүнд ID, нэр ба тайлбарыг өгнө. Эдгээр зүйлсийг ихэвчлэн дотоод хэрэглээнд ашигладаг.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Дараа нь алхмыг харагдах байдлыг тохируулна. Та "Always show" (Үргэлж харуулах), "Only show for logged in users" (Зөвхөн нэвтэрсэн хэрэглэгчдэд харуулах) эсвэл "Only show for guests" (Зөвхөн зочин хүмүүст харуулах) гэсэн сонголтуудын аль нэгийг сонгож болно.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Эцэст нь алхамд байгаа загварыг тохируулна. Эдгээр нь сонголт байдаг талбарууд юм.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Одоо бид анхны алхам руу талбарууд нэмэх цаг боллоо. Зүгээр л Add New Field-ийг дарж хүссэн хэсгийн төрлийг сонгоно.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Нэг талбарт өгөгдсөн параметрүүд байдаг. Эхний алхам бол бид "Username" (Хэрэглэгчийн нэр)-ийг сонгоно.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Та хэр их алхам, талбарыг нэмж болно. Хэрэв таны бүтээгдэхүүнийг үйлчлүүлэгчдийн сонгоход харуулахыг хүсвэл "Pricing Table" (Үнийн хүснэгт)-ийг ашиглана. Хэрэв та өөрийн үйлчлүүлэгчдэд загвар сонгох боломжийг олгохыг хүсвэл "Template Selection" (Загвар сонголт)-ийг нэмнэ. Мөн ийм байна.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Анхаарах зүйл:** checkout form үүсгэхийн тулд username, email, password, site title (сайтын нэр), site URL (сайтын хаяг), order summary (идэвхтэй захиалгын хураангуй), payment (буцааж олголт) болон submit button (Ирмэг дарна) гэсэн талбарууд заавал байх ёстой._

Checkout form-оо ажиллаж байх үедээ Preview (Урьдчилан үзэх) товчийг ашиглан үйлчлүүлэгч ямар харагдахыг харж болно. Мөн одоо байгаа хэрэглэгч эсвэл зочин гэсэн хувилбаруудыг солих боломжтой.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Эцэст нь, Advanced Options (Дээд тохиргоо)-д "Thank You" (Баярлалаа) хуудсанд илгээх мессежийг тохируулах, conversion-ыг хянах snippet-үүдийг нэмэх, checkout form-д өөрийн CSS-ийг оруулж нэмэх эсвэл зарим улсад хязгаарлах зэрэг үйлдлүүдийг хийх боломжтой.

![Advanced Options](/img/config/checkout-form-advanced.png)

Мөн та баруун баганын энэ сонголтыг асааж, унтрааж болно, эсвэл form-ыг бүрмөсөөр хаях боломжтой.

![Active toggle](/img/config/checkout-form-active.png)

Формыг устгахын тулд форму үйлдлүүлэх (form actions) хэсгээс "delete" сонголтыг дарна уу:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Таны checkout формыг хадгалахыг мартаарай!

![Save button](/img/config/checkout-form-save.png)

Формын shortcode-ийг авахын тулд "Generate Shortcode" (Shortcode үүсгэх)-ийг дарж, модаль цонхонд харагдах үр дүнг хуулна уу.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Үнийн хүснэгтийн талбар (The Pricing Table Field)

**Pricing Table** (Үнийн хүснэгт)-ийн талбар нь checkout form дээр таны бүтээгдэхүүнүүдийг харуулдаг бөгөөд үйлчлүүлэгчид төлөвлөгөө сонгох боломжийг олгодог. Энэ талбарыг өөрчилж байхад та хэд хэдэн тохиргоо хийж болно:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Frontend registration form дээр үнийн хүснэгт яаж харагдахыг энд харж байна:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Бүтээгдэхүүн): Харуулах бүтээгдэхүүнийг сонгож, тэдгээрийн дарааллыг тохируулна.
  * **Force Different Durations** (Өөр хугацааг хүчээр оруулах): Хэрэв энэ нь ирүүлсэн бол, одоо сонгосон төлбөрийн үеийн таарсан үнийн өөрчлөлт байгаа эсэхээс үл хамааран бүх бүтээгдэхүүнүүд харагдана. Хэрэв энэ нь ирүүлсэн биш бол (default), сонгосон хугацаанд тохирох өөрчлөлтгүй бүтээгдэхүүнүүд нуугдана.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Урьдчилан сонгосон үед нуух): Хэрэв төлөвлөгөө URL-ээр аль хэдийн сонгогдсон бол (жишээ нь `/register/premium`), үнийн хүснэгтийг нуудаг.
  * **Pricing Table Template** (Үнийн хүснэгтийн загвар): Үнийн хүснэгтийн харагдах загварыг сонгоно (Simple List, Legacy гэх мэт).

Хэрэв та form-д бүтээгдэхүүнийг Pricing Table руу нэмэхэд, тэр бүтээгдэхүүний checkout flow-г дуусгах шаардлагатай талбарууд оруулагдаагүй бол редактор анхааруулга гарч ирнэ. Жишээлбэл, жиширмэл registration form-ын хувьд, ямар нэгэн зай босгох шаардлагатай талбарыг хэвлэх эсвэл өөрчлөлт хадгалахын өмнө энэ анхааруулгыг ашиглан дутуу шаардлагатай талбарыг нэмнэ үү.

### Хугацаа сонгох товчлуур нэмэх

Хэрэв таны бүтээгдэхүүнд [Үнийн өөрчлөлт](creating-your-first-subscription-product#price-variations)-ыг (жишээлбэл, сарын ба жилийн үнэ) тохируулсан бол та төлбөрийн маягт **Хугацаа сонгох** (Period Selection) талбарыг нэмж болно. Энэ талбар нь хэрэглэгчдэд төлбөр хийх хугацаануудын хооронд шилжих боломжийг олгодог товчлуур байх бөгөөд үнийн хүснэгт бодит цагийн дагуу өөрчлөгдөнө.

#### Алхам 1: Бүтээгдэхүүнд Үнийн өөрчлөлтийг тохируулах

Хугацаа сонгох талбарыг нэмэхээс өмнө, таны бүтээгдэхүүн дээр үнийн өөрчлөлт тохируулсан эсэхийг шалгана уу. **Ultimate Multisite > Products** руу орж, бүтээгийг засах дараа **Price Variations** (Үнийн өөрчлөлт) таб руу очиж, өөр төлбөрийн хугацаануудыг нэмнэ (жишээлбэл, хямд үнээр Жилийн).

![Product-ын Price Variations таб](/img/config/product-price-variations-tab.png)

#### Алхам 2: Төлбөрийн маягт Хугацаа сонгох талбарыг нэмэх

1. **Ultimate Multisite > Checkout Forms** руу очиж, төлбөрийн маягаа засна.

2. Таны **Pricing Table** (Үнийн хүснэгт) талбар байгаа алхам руу доо шилжихээс гадна **Add new Field** (Шинэ талбар нэмэх)-ыг дарна уу.

3. Талбарын төрөл сонгох диалогт **Period Select**-ийг сонгоно.

![Period Select байгаа Add New Field диалог](/img/config/checkout-form-add-field-dialog.png)

4. Хугацааны сонголтуудыг тохируулна. Нэг сонголтод дараах зүйлс шаардлагатай:
   * **Duration** (Хугацаа): Тоо (жишээлбэл, `1`)
   * **Duration unit** (Хугацааны нэгж): Хугацааны төрөл (Өдөр, Долоо хоног, Сарын эсвэл Жил)
   * **Label** (Нэр): Хэрэглэгч харах текст (жишээлбэл, "Сарын", "Жилийн")

5. Нэмэлт хугацааны сонголтуудыг нэмэхэд **+ Add Option**-ыг дарна уу. Эдгээр сонголтууд таны бүтээгдэхүүн дээр тохируулсан үнийн өөрчлөлттэй таарч байх ёстой.

![Period Selection талбарын тохиргоо](/img/config/period-selection-field-settings.png)

6. **Period Selector Template** (Хугацаа сонгогч загвар)-ыг сонгоно (Clean нь анхны утга бөгөөд энэ нь өөр CSS-ээр тохируулах боломжтой энгийн хэлбэрийн сонгогчийг харуулдаг).

7. **Save Field**-и дараарай дар.

#### Қадам 3: Тавсифий жадвалдан олдин тавсифи коршуучу (Pricing Table) талабарын жойланг

Хамгийн сайн хэрэглэгчийн туршлагаас хангахаар, Period Selection (Үеийн сонголт)-ийн талаарх талбарыг Checkout-ийн алхамд Pricing Table (Тавсифий жадвал) талаас **өмнө** гарч байгаа эсэхийг шалгаарай. Та checkout form editor дээр талбаруудыг удирдахын тулд тэдгээрийг татах боломжтой. Ингэснээр хэрэглэгчид эхлээд төлбөрийн хугацааг сонгоод, дараа нь тэр хугацааны үнийг харах болох юм.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Frontend дээр ажиллах байдал

Тохируулсны дараа, таны бүртгэл хийж буй хэрэглэгчид registration page-д pricing table-ийн дээд талд period selector (үеийн сонголт)-ыг харах болно. Тэд өөр төлбөрийн хугацааг сонгоход:

  * Pricing table нь сонгосон үеийн үнийг шууд шинэчилнэ (шаардлагагүй дахин ачаалт хийх шаардлагагүй).
  * Хэрэв Pricing Table талбарт **Force Different Durations** (Өөр хугацааг хүчээр тохируулах) гэсэн сонголт идэвхгүй бол, сонгосон үеийн үнийн өөрчлөлт байхгүй бүтээгдээр харагдахгүй байна.
  * Хэрэв **Force Different Durations** идэвхтэй бол, сонгосон үеийн хувилбар (variation) байхгүй ч бүх бүтээгдээр нь харагдана (тэдний анхны үнэ гарч ирнэ).

#### URL-ээр төлбөрийн хугацааг урьдчилан сонгох

Та мөн URL-ийн замаар бүтээгдэхүүн болон төлбөрийн хугацааг урьдчилан сонгож болно. Ultimate Multisite нь дараах URL загваруудыг дэмждэг:

  * `/register/premium` — Зөвхөн "Premium" бүтээгдэхүүнийг урьдчилан сонгоно
  * `/register/premium/12` — Бүтээгдэхүүн болон 12 сарын хугацааг урьдчилан сонгоно
  * `/register/premium/1/year` — 1 жилийн хугацаатай бүтээгдэхүүнийг урьдчилан сонгоно

### Template Selection (Тэмдэглэгээний сонголт) талбар

**Template Selection** (Тэмдэглэгээний сонголт)-ийн талбар нь хэрэглэгч checkout хийх үед сайтны загварыг сонгох боломжийг олгодог. Энэ нь Ultimate Multisite v2.6.1-д нэмэгдсэн **single step** (нэг алхамтай) болон **multi-step** (олон алхамтай) checkout form templates-д анх байдаг.

#### Талбарыг гараар нэмэх

Хэрэв та v2.6.1-ээс өмнө бүтээсэн формтой ажиллаж байгаа эсвэл хоосон загвараас эхэлсэн бол:

1. **Ultimate Multisite > Checkout Forms** руу очиж, checkout form-оо засах хэрэгтэй.
2. Вэб сайтын дэлгэрэнгүй мэдээлэл цуглуулдаг алхамд **Add new Field** (Шинэ талбаer нэмэх) дээр дарна уу.
3. Талбарын төрөл сонгох дуудлагаас **Template Selection** (Загвар сонголт)-ыг сонгоно.
4. Талбарыг дараах байдлаар тохируулна:
   - **Label** — Хэрэглэгчдэд загварын сетүүрийн дээд талд харагдах гарчиг (жишээ нь "Сайтны загварыг сонгоно").
   - **Required** — Хэрэглэгч үргэлжлүүлэхийн өмнө загвар сонгох ёстой эсэх.

#### Энэ яаж ажилладаг вэ?

Хэрэглэгч checkout хийх явцад загварыг сонговол, Ultimate Multisite түүнийг шинэ сайт үүсгэхэд ашиглана. Харагдах загварууд нь таны **Site Templates** (Ultimate Multisite > Site Templates)-ээс ирж байна. Зөвхөн хэрэглэгчдэд боломжтой гэж тэмдэглэсэн загварууд л энд гарна.

### Checkout-form base domains

Ultimate Multisite v2.13.0 checkout form дээрх **Site URL** талбаруудад тохируулсан доменүүдийг сүлжээний үндсэн домен (network base domains) гэж үзнэ. Хэрэв хэрэглэгчдэд `example.com` болон `sites.example.com` зэрэг нэг эсвэл түүнээс дээш хуваалцсан бүртгэл хийх домен дээр сайт үүсгэх гэж байгаа бол талбарын **available-domain** тохиргоог ашиглана уу.

Хуваалцсан checkout form base domains нь тухайн сайт бүрт өөрийн домен (per-site custom domain) гэсэн утгаар үзэгдэхгүй. Хэрэв хэрэглэгч эдгээрийн аль нэг үндэс дээр дэд каталогтой сайт үүсгэвэл, Ultimate Multisite тухайн хуваалцсан хост нь зөвхөн тэр сайттай холбоотой байхыг харуулдаг mapped-domain (тохиргосон домен) бүртгэл үүсгэхгүй. Хуваалцсан хост нь ижил checkout form base ашигладаг өөр сайтуудад боломжтой хэвээр үлдэнэ.

`customer-example.com` зэрэг тухайн хэрэглэгчдэд зориулсан тохиргосон доменүүдийг хадгална уу. Олон сайт ашиглах боломжтой хуваалцсан бүртгэл хост (shared registration hosts) -ын хувьд checkout form base domains-ыг хадгалаарай.

#### Талбарыг арилгах

Хэрэв та сайтны загварууд (site templates) санал болгохгүй бол, таны ерөнхий маягт (form) байгаа "Template Selection" (Загвар сонголт)-ийг хасч авах хэрэгтэй. Ингэснээр үйлчлүүлэгчид **Ultimate Multisite > Settings > Site Templates** дотор тохируулсан анхны загварыг авна.
