---
title: Fassarar Bayan da ake Samun Bayan Kuɗi
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Forms Na Bayar (Checkout Forms)

Forms Na Bayar wani hanyar mai sauƙi da mai sauƙin don gwada hanyoyi daban-daban lokacin da kake so ka canza sabbin abokan ciniki zuwa makamalar ku.

Ultimate Multisite 2.0 yana ba ka babban maida hankali (Checkout Form editor) wanda ke ba ka damar ƙirƙirar kowane nau'in forms da kake so, tare da fildomai daban-daban, kayayyaki da ake bayarwa, da sauransu.

Don samun wannan ƙwarewar, tafiya zuwa babban menu na Checkout Forms a gefen ƙasa (left side-bar).

![Checkout Forms list](/img/config/checkout-forms-list.png)

A wannan shafin, za ka iya gani dukkan forms na bayarar ku.

Saddar jadawalin yana nuna sarakunan **Status** don in tabbatar maka ko kowane form yana dawo ga abokan ciniki a yanzu:

| Status | Ma'ana |
|---|---|
| **Active** | Za a iya amfani da wannan form a duk inda aka fitar da shortcode ko shafin wajen rubuta (registration page). |
| **Inactive** | An rufe shi amma an yi masa ƙyanta. Abokan ciniki ba za su iya kammala bayarar ku dashi da shi har sai ka sake samar da shi. |

Yi amfani da sarakunan status kafin ka gyara wajen rubuta shafin wajen rubuta (registration flow) mai turawa, musamman idan kana kiyaye forms na bayarar daddawa ko na musamman tare da forms na bayarar ku na gaske.

Idan kana so ka ƙirƙira wani sabon, kawai ka danna Add Checkout Form a mafi sama na shafi.

Za ka iya zaɓar ɗaya daga cikin waɗannan zaɓuɓɓukan uku a matsayin farko: single step (mataki ɗaya), multi-step (matakai da yawa) ko blank (ba wani abu). Sannan, danna don tafiya zuwa Editor.

Idan ka zaɓi **single step** ko **multi-step** a matsayin farko, shabillarin form yanzu yana nuna sarakunan **Template Selection** a matsayin asali. Wannan sarakuna yana ba abokan ciniki damar za su zaɓi template na wuri yayin da ake rubuta bayarar ku. Za ka iya bar shi kusa, cire shi, ko mayar da shi inda kake so kamar yadda kake mayar da kowane fildomai a cikin editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Bisa kuma gyara ko dubi wa shafuka da kake da shi ta hanyar danna kan zaɓuɓɓukan da ke ƙasa a gefen sunan shi. A nan kuma za ka samu zaɓuɓɓukan sao mai rubutu (shortcode) na wajen form ɗin ko kuma sanyin form ɗin.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Bincike na Sansa Form Ƙara Kuɗi (Checkout Form Editor Overview) {#checkout-form-editor-overview}

Sansan form ɗin ƙara kuɗi yana ba ka wani hanyar da taƙaitaccen don gina wa shafukan rubutu (registration forms) dinka. Ga bincike kan tsarin sansa:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Gyara Sansa Form Ƙara Kuɗi (Editing a Checkout Form) {#editing-a-checkout-form}

Za ka iya ƙirƙirar shafukan rubutu na kuɗai don bambancin ayyuka daban-daban. A wannan misali za mu yi a kan wani shafi na shiga (registration form).

Bayan kana tafiya zuwa sansan form ɗin ƙara kuɗai, ka ba shi wani magana (wanda za'a amfani da shi kawai don mai da hankali na gida) kuma wani slug (wanda ake amfani da shi don samar da shortcodes, misali).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Form ɗin yana tsara da matakai da makamalar (fields). Za ka iya ƙara sabon mataki ta hanyar danna kan Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

A farkon tab na window ɗin modal, ka cika abubuwan da suka shafi matakin form ɗinka. Ba da shi ID, magana (name) kuma bayani (description). Waɗannan abubuwa mafi yawa ana amfani da su ne kawai a cikin gida.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Na gaba, ka sanya bayyanar matakin. Za ka iya zaɓar tsakanin "Always show" (Akawo ya nuna shi koyaushe), "Only show for logged in users" (Nuna shi kawai ga masu shiga), ko "Only show for guests" (Nuna shi kawai ga abokan hoto).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

A ƙarshe, ka tsara nau'in matakin. Waɗannan su ne makamalar da ba dole ba a yi su.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Yanzu, ya kamata mu ƙara makamalar (fields) ga farkon matakinmu. Ka danna don Add New Field kuma zaɓi nau'in sashi da kake so.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Kowane fild yana ƙarin siffofi da ake cika. Don wannan farkon shiga, za mu zaɓi fildin "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Za ka iya ƙara kowane mataki da fildin da kake bukata. Don nuna kayayyakin ka ga abokan ciniki su za su zabi ɗaya, yi amfani da fildin Pricing Table. Idan kana so ka bari abokan ciniki su zaɓi template, ka ƙara fildin Template Selection. Kuma haka sauransu.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Gargaɗi:** username, email, password, site title, site URL, order summary, payment, da kuma submit button siffofin wajibne ne don samar da wani checkout form._

Bayan kana aiki da checkout form ɗinka, za ka iya amfani da Preview button don ganin yadda abokan ciniki za su gani wannan form ɗin. Za ka iya tafiya tsakanin nuna shi a matsayin mai amfani da wuri ko wanda ke zuwa.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

A ƙarshe, a Advanced Options za ka iya tsara saƙon da ake bayarwa ga shafin "Thank You", ƙara snippets don bin hanyoyin canzawa (conversions), ƙara CSS na musamman ga checkout form ɗinka ko bincika shi ga wasu ƙasashe.

![Advanced Options](/img/config/checkout-form-advanced.png)

Za ka iya kuma samar da aiki ko kawar da checkout form ɗinka ta kai tsaye ta hanyar canza wannan damar (toggle) a sannan, ko kuma shafa shi daka ba.

![Active toggle](/img/config/checkout-form-active.png)

تا حذف کردن یک فرم، روی گزینه delete در بخش actions فرم کلیک کنید:

![Checkout form delete option](/img/config/checkout-form-delete.png)

فراموش نکنید که فرم چک‌اوت خود را ذخیره کنید!

![Save button](/img/config/checkout-form-save.png)

برای گرفتن shortcode فرم خود، روی Generate Shortcode کلیک کنید و نتیجه‌ای که در پنجره modal نمایش داده می‌شود را کپی کنید.

![Save button with shortcode](/img/config/checkout-form-save.png)

### فیلد جدول قیمت‌گذاری (The Pricing Table Field) {#the-pricing-table-field}

فیلد **Pricing Table** محصولات شما را در فرم چک‌اوت نمایش می‌دهد تا مشتریان بتوانند یک طرح (plan) را انتخاب کنند. وقتی این فیلد را ویرایش می‌کنید، می‌توانید چندین گزینه را تنظیم کنید:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

اینکه جدول قیمت‌گذاری در فرم ثبت نام فرانت‌اند چگونه ظاهر می‌شود:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (محصولات)**: انتخاب کنید که کدام محصولات نمایش داده شوند و ترتیب نمایش آن‌ها چگونه باشد.
  * **Force Different Durations (اجبار به دوره‌های متفاوت)**: وقتی این گزینه فعال است، همه محصولات بدون توجه به اینکه آیا برای دوره صورت‌حساب فعلی تغییر قیمت متناظر دارند یا خیر، نمایش داده می‌شوند. وقتی غیرفعال باشد (پیش‌فرض)، محصولاتی که برای دوره انتخاب شده تغییری در قیمت ندارند پنهان می‌شوند.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (پنهان کردن هنگام پیش‌انتخاب)**: جدول قیمت‌گذاری زمانی که یک طرح از طریق URL قبلاً انتخاب شده باشد (مثلاً `/register/premium`) پنهان می‌شود.
  * **Pricing Table Template (قالب جدول قیمت‌گذاری)**: قالب بصری را برای جدول قیمت‌گذاری انتخاب کنید (مانند Simple List، Legacy و غیره).

اگر قبل از اینکه فرم شامل فیلدهای لازم برای تکمیل فرآیند چک‌اوت آن محصول باشد، یک محصول به Pricing Table اضافه کنید، ویرایشگر اکنون یک هشدار نشان می‌دهد. از این هشدار استفاده کنید تا قبل از انتشار یا ذخیره تغییرات برای یک فرم ثبت نام زنده، فیلد مورد نیاز را اضافه کنید.

### Shiga Wajin da Zaɓar Makaddar {#adding-a-period-selection-toggle}

Idan ka shirya [Price Variations](creating-your-first-subscription-product#price-variations) a kan kayayyakin ka (misali farashin kowace wata ko shekara), za ka iya ƙara wani makonshikin **Period Selection** a cikin shafin checkout ɗinka. Wannan makonshiki yana nuna toggle wanda ke ba masu siyarwa damar canzawa tsakanin wuraren biyan kuɗi, kuma jadawalin farashi yana canzawa da sauri a zahiri.

#### Mataki na 1: Shirya Price Variations a Kan Kayayyakin Ka {#step-1-set-up-price-variations-on-your-products}

Kafin ka ƙara makonshikin Period Selection, tabbatar cewa kayayyakin ka suna da price variations an shirya. Zuwa **Ultimate Multisite > Products**, gyara wani kayayyaki, kuma tafiya zuwa tabin **Price Variations** don ƙara wuraren biyan kuɗi na bambanci (misali shekara a farashin da aka rage).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Mataki na 2:Ƙara Makonshikin Period Selection a Shafin Checkout Ɗinka {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Zuwa **Ultimate Multisite > Checkout Forms** kuma gyara shafin checkout ɗinka.

2. Tafiya wajen matakin da ke da makonshikin **Pricing Table** ɗinka kuma danna **Add new Field**.

3. A cikin zaɓin nau'in makonshiki, danna **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Shirya zaɓuwar makaddara. Kowane zaɓi yana buƙatar:
   * **Duration**: Adadin (misali `1`)
   * **Duration unit**: Nau'in makaddara (Days, Weeks, Months, ko Years)
   * **Label**: Rububuci da masu siyarwa za su gani (misali "Monthly", "Annual")

5. Danna **+ Add Option** don ƙara wasu zaɓuwar makaddara. Waɗannan zaɓuwar dole ne su yi daidai da price variations da ka shirya a kan kayayyakin ka.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Zaɓi **Period Selector Template** (Clean shine mafi yawan amfani, wanda ke samar da wani mai tsari mai sauƙi wanda ya shafi CSS na musamman).

7. دکمه **Save Field** رو بزنید.

#### مرحله 3: قرار دادن فیلد بالاتر از جدول قیمت‌گذاری {#step-3-position-the-field-above-the-pricing-table}

برای اینکه بهترین تجربه کاربری رو داشته باشید، مطمئن بشید که فیلد انتخاب دوره (Period Selection) قبل از فیلد جدول قیمت‌گذاری در مرحله پرداخت شما نمایش داده بشه. شما می‌تونید فیلدها رو بکشید تا ترتیبشون رو توی ویرایشگر فرم پرداخت تغییر بدید. این کار باعث می‌شه مشتری اول یک دوره صورتحساب رو انتخاب کنه و بعد قیمت‌های اون دوره رو ببینه.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### چطور در فرانت‌اند (Frontend) کار می‌کنه {#how-it-works-on-the-frontend}

وقتی تنظیمش کردید، مشتری‌هایی که به صفحه ثبت‌نام شما مراجعه می‌کنن، انتخاب دوره رو بالای جدول قیمت‌گذاری می‌بینن. وقتی اون‌ها روی یک دوره صورتحساب متفاوت کلیک می‌کنن:

  * جدول قیمت‌گذاری بلافاصله به‌روز می‌شه و قیمت‌های دوره انتخابی رو نشون می‌ده (نیازی به بارگذاری مجدد صفحه نیست).
  * اگر **Force Different Durations** در فیلد جدول قیمت‌گذاری غیرفعال باشه، محصولاتی که برای دوره انتخاب شده تغییر قیمتی ندارن پنهان می‌شن.
  * اگر **Force Different Durations** فعال باشه، همه محصولات حتی اگه برای دوره انتخابی تغییر نداشته باشن هم قابل مشاهده باقی می‌مونن (قیمت پیش‌فرضشون رو نشون می‌دن).

#### انتخاب پیش‌فرض یک دوره صورتحساب از طریق URL {#pre-selecting-a-billing-period-via-url}

شما همچنین می‌تونید یک محصول و دوره صورتحساب رو از طریق آدرس URL از قبل انتخاب کنید. Ultimate Multisite از این الگوهای URL پشتیبانی می‌کنه:

  * `/register/premium` — فقط محصول "Premium" رو پیش‌انتخاب می‌کنه
  * `/register/premium/12` — محصول و دوره 12 ماهه رو پیش‌انتخاب می‌کنه
  * `/register/premium/1/year` — محصول با دوره 1 ساله رو پیش‌انتخاب می‌کنه

### فیلد انتخاب قالب (Template Selection Field) {#the-template-selection-field}

فیلد **Template Selection** به مشتری اجازه می‌ده در طول پرداخت، یک قالب سایت رو انتخاب کنه. این فیلد حالا به صورت پیش‌فرض در قالب‌های فرم پرداخت تک مرحله‌ای (**single step**) و چند مرحله‌ای (**multi-step**) که در Ultimate Multisite v2.6.1 اضافه شده‌اند، وجود داره.

#### افزودن دستی فیلد {#adding-the-field-manually}

Idan kuna aiki da wani form wanda aka ƙirƙira kafin v2.6.1, ko kuma an fara daga wata template mai tsabta:

1. Zuwa **Ultimate Multisite > Checkout Forms** ka gyara checkout form ɗinka.
2. A matakin inda ake samun bayanan site (site details), danna **Add new Field**.
3. Ka zaɓi **Template Selection** daga wajen zaɓin nau'in fildin (field type dialog).
4. Ka tsara fildin:
   - **Label** — Wannan shi ne labarin da abokan ciniki suke gani a sama na grid ɗin template (misali, "Zaɓi template na site").
   - **Required** — Ko abokan ciniki dole ne za su zaɓi template kafin su ci son ci gaba.

#### Yadda yake aiki {#how-it-works}

Idan wani customer ya zaɓi template yayin da ake ci son ci gaba (checkout), Ultimate Multisite zai yi amfani da shi lokacin da ake samarwa da sabon site ɗin sa. Template-template da aka nuna suna zuwa daga cikin jadawalin **Site Templates** ɗinka (**Ultimate Multisite > Site Templates**). Hanya-haye (templates) da aka alamar su na mai amfani a kan abokan ciniki ne kawai za su bayyana nan.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 tana alayar domain-domain da aka tsara a fildin **Site URL** ɗin checkout form a matsayin network base domains. Yi amfani da tsarin available-domain na fildin idan kana so abokan ciniki su ƙirƙiro sites a kan wata ko wasu domain-dami na rajista (registration domains) da aka raba, kamar `example.com` da `sites.example.com`.

Domain-domain na asali na checkout form da aka raba ba su yi amfani da tsarin haɗin domain na site ɗin musamman ba. Idan wani customer ya ƙirƙiro subdirectory site a kan wata daga cikin waɗannan base domains, Ultimate Multisite ba zai ƙirƙira rekodi na mapped-domain wanda zai sa host na raba ya zama na wani site kawai. Host na raba yana da sauki don sites masu biyu (sibling sites) da ke amfani da kanin checkout form base ɗin sama.

Ka riƙe domain-dami na musamman ga hosts na mapped per-customer, kamar `customer-example.com`. Ka riƙe domain-dami na asali na checkout form don hosts na rajista na raba wa sites da yawa za su iya amfani da su.

#### Cire fildin {#removing-the-field}

Idan zaɓar shafin (site templates) ba ka ba da shi, ka kawo wuri na zaɓar model ko girbi (Template Selection field) daga wajumarka. Abin da faransa, abin da ke gaba ita ce gwamnatin zaɓi wancin model da aka tsara a ƙawun **Ultimate Multisite > Settings > Site Templates**.
