---
title: د چک اوټ فارمز
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms هم নতুন কাস্টমারদের রূপান্তর করার চেষ্টা করার সময় বিভিন্ন পদ্ধতি নিয়ে পরীক্ষা করার জন্য একটি সহজ এবং নমনীয় উপায়।

Ultimate Multisite 2.0 একটি Checkout Form editor অফার করে যা আপনাকে যত খুশি ফর্ম তৈরি করতে দেয়, যেখানে বিভিন্ন ফিল্ড, অফার করা পণ্য ইত্যাদি থাকতে পারে।

এই ফিচারে প্রবেশ করতে, বাম দিকের সাইডবারে Checkout Forms মেনুতে যান।

![Checkout Forms list](/img/config/checkout-forms-list.png)

এই পেজে আপনি আপনার সমস্ত checkout form দেখতে পাবেন।

তালিকা টেবিলে একটি **Status** কলাম অন্তর্ভুক্ত আছে যাতে আপনি নিশ্চিত করতে পারেন যে প্রতিটি ফর্ম বর্তমানে গ্রাহকদের জন্য উপলব্ধ কিনা:

| Status | অর্থ |
|---|---|
| **Active** | ফর্মটির শর্টকোড বা রেজিস্ট্রেশন পেজ যেখানেই প্রকাশিত হোক, তা ব্যবহার করা যেতে পারে। |
| **Inactive** | ফর্মটি সেভ করা আছে কিন্তু নিষ্ক্রিয়। আপনি এটি আবার সক্রিয় না করা পর্যন্ত গ্রাহকরা এর মাধ্যমে চেকআউট সম্পন্ন করতে পারবেন না। |

বিশেষ করে যখন আপনি আপনার লাইভ ফর্মগুলির পাশাপাশি ড্রাফ্ট বা মৌসুমী checkout form রাখতে চান, তখন পাবলিক রেজিস্ট্রেশন ফ্লো সম্পাদনা করার আগে স্ট্যাটাস কলামটি ব্যবহার করুন।

আপনি যদি একটি নতুন ফর্ম তৈরি করতে চান, তাহলে শুধু পেজের উপরে Add Checkout Form-এ ক্লিক করুন।

শুরুর বিন্দু হিসাবে আপনি এই তিনটি বিকল্পের মধ্যে যেকোনো একটি বেছে নিতে পারেন: single step (এক ধাপ), multi-step (বহু ধাপ) বা blank (খালি)। তারপর Go to the Editor-এ ক্লিক করুন।

যখন আপনি আপনার শুরুর বিন্দু হিসাবে **single step** বা **multi-step** নির্বাচন করেন, তখন ফর্ম টেমপ্লেটে ডিফল্টভাবে একটি **Template Selection** ফিল্ড অন্তর্ভুক্ত থাকে। এই ফিল্ডটি রেজিস্ট্রেশন প্রক্রিয়ার সময় আপনার গ্রাহকদের সাইট টেমপ্লেট বেছে নিতে দেয়। আপনি এটিকে যেমন অন্য কোনো ফিল্ডে রাখতে পারেন, তেমনই এটি রেখে দিতে পারেন, সরিয়ে ফেলতে পারেন বা পুনর্বিন্যাস করতে পারেন।

![Checkout Form editor](/img/config/checkout-form-editor.png)

په بل سره، تاسو کولی شئ د هغه فرمونه چې ورته لرئ په داسې حال کې چې د نوم یې کلیک وکړئ او د هغه نوم د زیرلاتی مرجع لپاره کارولای شي. তাত تاسو به هم امکانات ومومئ چې د فرم د shortcode کاپی کړئ یا فرم حذف کړئ.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Overview (د چیک آؤټ فرم ایډټر پر ګورنه) {#checkout-form-editor-overview}

د چیک آؤټ فرم ایډټر تاسو ته د خپل رეგისტრاشن فرمونه جوړولو لپاره یو جامع رابطې ورکوي. دا ایډټرको ترتیب پر ګورنه:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Checkout Form Editing (د چیک آؤټ فرم ویرایش) {#editing-a-checkout-form}

ستاسو کولی شئ د مختلف کارونو لپاره چیک آؤټ فرمونه جوړ کړئ. په دې مثال کې موږ به د رეგისტრاشن فرمول پر کار وکړو.

د چیک آؤټ فرم ایډټر ته ورسره راغله، خپل فرم یو نوم ورکړئ (چې یوازې داخلي مرجع لپاره کار کیږي) او یو slug (که د shortcode جوړولو لپاره کار کیږي).

![Checkout Form editor](/img/config/checkout-form-editor.png)

فرمونه له ګامونو او فیلدو څخه جوړ شوي دي. تاسو کولی شئ د "Add New Checkout Step" کلیک کولو وسیله ورکړئ ترڅو یو نوی ګام اضافه کړئ.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

د مودل ونډې په пърو ټب کې، خپل فرمको ګام د محتوا پпъл کړئ. ورسره یوه ID، نوم او توضیحات ورکړئ. دا شیان ډیره داخلي کارونه لپاره کار کیږي.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

بیا، د ګام ښکاره (visibility) تنظیم کړئ. تاسو کولی شئ تر "Always show" (هدا سمد ته ښکاره کړئ)، "Only show for logged in users" (فقط د لاگېل شوي کارکوونکو لپاره ښکاره کړئ) یا "Only show for guests" (فقط د مهمانو لپاره ښکاره کړئ) ترمنځ غوره وکړئ.

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

د وروستیو، د ګام سټایل تنظیم کړئ. دا اختیاري فیلونه دي.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

خاورې، اوس وخت دی چې موږ خپل په пърو کې اضافه کړل شوي فیلونه ورته اضافه کړو. یوازې کلیک وکړئ ترڅو "Add New Field" ورکړئ او هغه ډول انتخاب کړئ چې تاسو یې غواړئ.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

هر فیلدونه‌ها پارامترهای متفاوتی برای پر کردن دارند. برای این ورود اول، ما از فیلد "Username" (نام کاربری) را انتخاب می‌کنیم.

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

شما می‌توانید هر تعداد مرحله و فیلد مورد نیاز خود را اضافه کنید. برای نمایش محصولاتتان به مشتریان تا یکی را انتخاب کنند، از فیلد Pricing Table (جدول قیمت‌گذاری) استفاده کنید. اگر می‌خواهید اجازه دهید مشتریان یک قالب را انتخاب کنند، فیلد Template Selection (انتخاب قالب) را اضافه کنید و همینطور.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**توجه:** username (نام کاربری)، email (ایمیل)، password (رمز عبور)، site title (عنوان سایت)، site URL (آدرس سایت)، order summary (خلاصه سفارش)، payment (پرداخت)، و submit button (دکمه ارسال) فیلدهای اجباری برای ساخت یک فرم تسویه حساب هستند._

در حالی که روی فرم تسویه حساب خود کار می‌کنید، همیشه می‌توانید از دکمه Preview (پیش‌نمایش) استفاده کنید تا ببینید مشتریان فرم شما چگونه آن را خواهند دید. همچنین می‌توانید بین مشاهده به عنوان کاربر موجود یا بازدیدکننده جابه‌جا شوید.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

در نهایت، در Advanced Options (گزینه‌های پیشرفته)، می‌توانید پیام صفحه "Thank You" (ممنونیم) را تنظیم کنید، قطعاتی برای ردیابی تبدیل‌ها اضافه کنید، CSS سفارشی به فرم تسویه حساب خود اضافه کنید یا آن را محدود به کشورهای خاص کنید.

![Advanced Options](/img/config/checkout-form-advanced.png)

شما همچنین می‌توانید با روشن یا خاموش کردن این گزینه در ستون سمت راست، فرم تسویه حساب خود را دستی فعال یا غیرفعال کنید، یا فرم را به طور دائم حذف نمایید.

![Active toggle](/img/config/checkout-form-active.png)

فارم دغه حذف کول، په فارم عملونو کې "delete" (حذف) خپله انتخاب کوئ:

![Checkout form delete option](/img/config/checkout-form-delete.png)

نن به منسول کړئ چې خپل checkout form محفوظ کړئ!

![Save button](/img/config/checkout-form-save.png)

د خپل formको shortcode ترلاسه کولو لپاره، "Generate Shortcode" (shortcode تولید کړئ) باندې کلیک وکړئ او موډل ونډه کې ښودل نتیجه kopiere کړئ.

![Save button with shortcode](/img/config/checkout-form-save.png)

### د قیمت‌ निर्धारण جدول (Pricing Table Field) {#the-pricing-table-field}

**Pricing Table** поле ستاسو محصولاتو په checkout form کې ښیي ترڅو کستونکي بتوانن پلان غوره کړي. کله چې تاسو دا поле ویره کوئ، تاسو کولی شئ څو خپلو تنظیمات راټول کړئ:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

دا ده چې د frontend registration form کې قیمت‌ निर्धारण جدول څنګه ښکاري:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (محصولات)**: غوره کړئ چې کومو محصولات ښودل شي او دوی په کوم ترتیب کې ښکاري.
  * **Force Different Durations (د फरक دوراتو قوت ورکړئ)**: کله چې دا فعال وي، ټولې محصولات ښودل کیږي، پرته له دې چې آیا دوی د اوسني حسابي دوره لپاره هم مطابق قیمت بدلون لري یا نه. کله چې غیر فعال وي (default)، هغه محصولات چې د انتخاب شوي دورې لپاره بدلون نه لري، پټ شي.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (کله چې پیشتر انتخاب شوې وي پټ کړئ)**: کله چې یو پلان له URL (مثلاً `/register/premium`) له لارې قبایل شوی وي، د قیمت‌ निर्धारण جدول پټ کیږي.
  * **Pricing Table Template (د قیمت‌ निर्धारण جدول قالب)**: غوره کړئ چې د قیمت‌ निर्धारण جدول لپاره کوم بصري قالب غوره کړئ (Simple List، Legacy، او...).

که تاسو یو محصول Pricing Table ته اضافه کړئ تر دې وړاندې چې form هغه felونه شامل کړي چې د هغه محصولको checkout flow پوره کولو لپاره اړین دي، نو ویره اوس ښودل کیږي. له ویره څخه کار وکړئ که تاسو مخکې له آنلاین registration form د شائع کولو یا بدلونونو محفوظولو अونو وړاندې کومه لازمي поле اضافه کړئ.

### ددونکردن Toggle د انتخاب دوره {#adding-a-period-selection-toggle}

که که اگر تاسو په محصولاتو کې [Price Variations](creating-your-first-subscription-product#price-variations) تنظیم کړی وي (مثلاً شهري او سوهلي قیمتونه)، تاسو کولی شئ یو **Period Selection** فیلد په خپل چیک آؤټ فرم کې اضافه کړئ. دا فیلد یو toggle ښیي چې کارندوی ته اجازه ورکوي ترمنه د بیا کولو دورو ترمنه بدل شي، او قیمتونو جدول په ریل تایم کې dynamcially (په لحظه) بدلون کوي.

#### ګام ۱: د محصولاتو پر Price Variations تنظیم کړئ {#step-1-set-up-price-variations-on-your-products}

د Period Selection فیلد اضافه کولو څخه مخکې، ډاغه کیدای شي چې ستاسو محصولات کې price variations تنظیم شوي وي. ته ورسره **Ultimate Multisite > Products** ته لاړ شئ، یو محصول ویره کړئ، او تر **Price Variations** تب (tab) لاړ شئ ترڅو alternatve billing periods اضافه کړئ (مثلاً سوهلي قیمت په تخفیف شوي قیمت).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### ګام ۲: Period Selection فیلد د Ihr Checkout Form ته اضافه کړئ {#step-2-add-the-period-selection-field-to-your-checkout-form}

۱. ته ورسره **Ultimate Multisite > Checkout Forms** ته لاړ شئ او خپل checkout form ویره کړئ.

۲. تر هغه مرحله والی scroll وکړئ چې ستاسو **Pricing Table** فیلد دی او **Add new Field** باندې کلیک وکړئ.

۳. په فیلد ډول انتخاب کې، **Period Select** باندې کلیک وکړئ.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

۴. دورو خپله تنظیم کړئ. هر یوټی ته اړتیا ده:
   * **Duration**: د شمېر (مثلاً `1`)
   * **Duration unit**: د دور ډول (Days، Weeks، Months، یا Years)
   * **Label**: هغه متن چې کارندوی ویني (مثلاً "Monthly"، "Annual")

۵. تر **+ Add Option** کلیک وکړئ ترڅو ډېر دورونه اضافه کړئ. دا ټولې اوپشنونه باید د محصولاتو پر تاسو تنظیم شوي price variations سره مطابقت ولرو.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

۶. یو **Period Selector Template** غوره کړئ (Clean دی default، چې یو ساده stil شوی selector رندروي چې د custom CSS لپاره چمتو وي).

۷. **Save Field** داب یې کلیک وکړئ.

#### مرحله ۳: فیلډ ته قیمتहरूको तालिकाको माथि राख्नुहोस् {#step-3-position-the-field-above-the-pricing-table}

उत्तम प्रयोगकर्ता अनुभवका लागि, सुनिश्चित गर्नुहोस् कि अवधि चयन गर्ने (Period Selection) फیلड तपाईंको चेकआउट चरणमा मूल्य निर्धारण तालिका (Pricing Table) फیلडभन्दा **अघि** देखियोस्। तपाईंले चेकआउट फारम एडिटरमा फیلडहरूलाई ड्र्याग गरेर क्रम मिलाउन सक्नुहुन्छ। यसरी, ग्राहकहरू पहिले बिलिङ अवधि छान्छन् र त्यसपछि त्यो अवधिको लागि मूल्य हेर्छन्।

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### फ्रन्टएन्डमा यो कसरी काम गर्छ {#how-it-works-on-the-frontend}

एक पटक कन्फिगर गरिसकेपछि, तपाईंको दर्ता पृष्ठमा आउने ग्राहकहरूले मूल्य निर्धारण तालिकाभन्दा माथि अवधि चयनकर्ता देख्नेछन्। जब उनी कुनै फरक बिलिङ अवधिमा क्लिक गर्छन्:

  * मूल्य निर्धारण तालिका तुरुन्तै चयनित अवधिको लागि मूल्य देखाउन अद्यावधिक हुन्छ (पृष्ठ पुनः लोड गर्न आवश्यक छैन)।
  * यदि मूल्य निर्धारण तालिका फیلडमा **Force Different Durations** अक्षम गरिएको छैन भने, चयन गरिएको अवधिको लागि कुनै मूल्य परिवर्तन नभएका उत्पादनहरू लुकाइनेछ।
  * यदि **Force Different Durations** सक्षम गरिएको छ भने, चयनित अवधिमा कुनै परिवर्तन नभए पनि सबै उत्पादनहरू देखिने रहनेछन् (उनी आफ्नो डिफाल्ट मूल्य देखाउनेछन्)।

#### URL मार्फत बिलिङ अवधि पहिले नै चयन गर्ने {#pre-selecting-a-billing-period-via-url}

तपाईं URL मार्फत उत्पादन र बिलिङ अवधि पहिले नै चयन गर्न सक्नुहुन्छ। Ultimate Multisite ले यी URL ढाँचाहरूलाई समर्थन गर्दछ:

  * `/register/premium` — केवल "Premium" उत्पादन पहिले नै चयन गर्छ
  * `/register/premium/12` — उत्पादन र १२ महिनाको अवधिको लागि पहिले नै चयन गर्छ
  * `/register/premium/1/year` — १ वर्षको अवधि भएको उत्पादन पहिले नै चयन गर्छ

### टेम्प्लेट चयन फیلड (The Template Selection Field) {#the-template-selection-field}

**टेम्प्लेट चयन** फیلडले ग्राहकहरूलाई चेकआउटको समयमा साइट टेम्प्लेट छान्ने अनुमति दिन्छ। यो अब Ultimate Multisite v2.6.1 मा थपिएका **single step** र **multi-step** चेकआउट फारम टेम्प्लेटहरूमा डिफाल्ट रूपमा समावेश गरिएको छ।

#### फیلडलाई म्यानुअल रूपमा कसरी थप्ने {#adding-the-field-manually}

که تاسو د v2.6.1 څخه مخکې یا له یوې خالی قالب څخه جوړ شوی form سره کار کوئ:

۱. راده **Ultimate Multisite > Checkout Forms** ته لاړ شئ او خپل checkout form ویره کړئ.
۲. په هغه مرحله کې چې د سایت تفصیلات جمع کیږي، کلیک وکړئ پیلور **Add new Field**.
۳. له ډول فیلدونو (field type) پیغام کې **Template Selection** غوره کړئ.
۴. فیلد ته تنظیمات وکړئ:
   - **Label** — دا سرلیک دی چې کليان د قالبहरूको ګرید کې پورته ویني (مثال: "یو سایت قالب غوره کړئ").
   - **Required** — که آیا کليانو باید پر کار لاړ شي تر دې وړاندې یو قالب غوره کړي او نه.

#### څنګه کار کوي؟ {#how-it-works}

کله چې یو کليان په checkout کې یو قالب غوره کوي، Ultimate Multisite هغه وخت کاروي کله چې دوی خپل نوی سایت جوړوي. د ښودل شوي قالبان له ستاسو **Site Templates** لیست (**Ultimate Multisite > Site Templates**) څخه راځي. یوازې هغه قالبونه چې کليانو لپاره ترانهاده دي، په اینجا ښکاري.

### Checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 د checkout form **Site URL** فیلدو پر تنظیم شوي د domainو د شبکه بنسټی domain (network base domains) په توګه ګڼي. کله چې تاسو غواړئ چې کليانو له یو یا ډېر شریک شوی ثبت کولو د domainونو تحت سایتونه جوړول، لکه `example.com` او `sites.example.com`، نو فیلدको available-domain تنظیمات प्रयोग کړئ.

شریک شوي checkout-form base domains په پر ځانګړي سایتو لپاره custom domain mappings په توګه نه ګڼل کیږي. کله چې یو کليان د دوی له einي له هغې بنسټونو څخه یو subdirectory سایت جوړوي، Ultimate Multisite هغه record جوړوي چې شریک شوی host یوازې هغه سایت ته تعلق ورکړي. شریک شوی host د نورو همکارو سایتونو لپاره ترانهاده پاتې کیږي چې یوه شریک شوی checkout form base کاروي.

د پر ځانګړي کليان لپاره custom domains، لکه `customer-example.com`، یې ورته لرئ. د شریک شوي ثبت کولو hostونه یې ورته لرئ چې ډېر سایتونه کار کولی شي.

#### فیلد اخیستل {#removing-the-field}

---

که تاسو د سایت قالبونه وړاندې نه کوئ، نو له خپل فورم څخه د Template Selection (قالب انتخاب) خان منوچ کړئ. بیا کارونکي هغه پیشټ قالب ترلاسه کړي چې د **Ultimate Multisite > Settings > Site Templates** تحت تنظیم شوی وي.
