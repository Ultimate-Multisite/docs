---
title: پێناساندنی فۆرم تۆمارکردنەکەت
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# گۆڕینی فۆرم تۆمارکردن

بۆ ئەوەی تۆڕەکەت لە هەموو ئەو SaaS یێن دی تر کە لەسەر پلاتفۆرمی WordPress دروست کراون، جیاواز بێت، Ultimate Multisite دەبێت ڕێگە بدات بە گۆڕینی لاگین و تۆمارکردنی تایبەتی خۆت بە ئامێنەی **Checkout Forms** ئێمە.

لە کاتی ئەوەی ئەم فۆرمە بۆ هەوڵدان لەسەر ڕێگاکانی جیاوازدا بەکارهێنیت بۆ گۆڕینی کڕیارە نوێکان، چەند شێوازێکی ئاسان و نادەروستن، بەڵام زۆربەی کات بۆ دروستکردنی فۆرم تۆمارکردنی تایبەت بە خۆت بەکاردێت. ئەم بابەتە مەبەستەکەی ئەوەیە کە دەربکەیت چۆن ئەوە بکەیت.

## لاگین و صفحات تۆمارکردن:

کاتێک Ultimate Multisite دامەزراو، بە شێوەیەکی ئۆتۆماتیک لەسەر سایت سەرەکییەکەت، صفحات تایبەتی لاگین و تۆمارکردنی دروست دەکات. دەتوانیت ئەم صفحاتە هەر کاتێک بگۆڕیت بە ڕۆیشتن بۆ یەکێک لەو لایەنە: **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

لێرەدا بینینی تەواوی لایەنەکانی تنظیمووی لاگین و تۆمارکردن دەبین:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

بۆ هەر یەک لە ئەو هەڵبژاردنەی کە دەتوانیت لەسەر **Login & Registration** دەکەیت، بی ببینین:

  * **Enable registration (گشکردنەوەی تۆمارکردن):** ئەم لایەنە ڕێگە دەدات بە چالاککردنی یان نادەروستکردنی تۆمارکردن لە تۆڕەکەت. ئەگەر نادەروست بکرێت، کڕیارەکانت ناهێنیت کە بتوانن تۆمار بکەن و سەر بە پڕۆژەکانت ناچن.

  * **Enable email verification (گشکردنەوەی پشکنینی ئیمایل):** ئەگەر ئەم لایەنە چالاک بکرێت، کڕیارانی کە بۆ پلانی بێ بەرامبەر یان پلانی فەرمی لەگەڵ ماوەیەکی تاقیکردنەوە تۆمار دەکەن، ئیمەی پشکنینی وەردەگرن و دەبێت لایەنەکە بە لینکەکەی پشکنین 클릭 بکەن بۆ ئەوەی سایتەکانی دروست بکرێن.

* **صفحة ثبت‌نام پیش‌فرض (Default registration page):** این صفحه برای ثبت‌نام پیش‌فرض است. شما باید این صفحه را در وب‌سایت خود منتشر کنید و یک فرم ثبت‌نام (که به آن فرم تسویه حساب هم می‌گویند) داشته باشد - جایی که مشتریان شما محصولاتتان را مشترک خواهند شد. می‌توانید هر تعداد صفحه ثبت‌نام و فرم تسویه حساب ایجاد کنید، فقط به یاد داشته باشید که شورت‌کد فرم تسویه حساب را در صفحه ثبت‌نام قرار دهید، در غیر این صورت نمایش داده نخواهد شد.

* **استفاده از صفحه ورود سفارشی (Use custom login page):** این گزینه به شما اجازه می‌دهد از یک صفحه ورود سفارشی، غیر از صفحه پیش‌فرض wp-login.php استفاده کنید. اگر این گزینه را روشن کنید، می‌توانید انتخاب کنید که کدام صفحه برای ورود در گزینه **صفحه ورود پیش‌فرض (Default login page)** (محل قرارگیری آن دقیقاً زیر است) استفاده شود.

* **پنهان کردن آدرس اصلی ورود (wp-login.php):** اگر می‌خواهید آدرس اصلی ورود را مخفی کنید، می‌توانید این گزینه را روشن کنید. این کار برای جلوگیری از حملات بروت‌فورس مفید است. اگر این گزینه فعال باشد، Ultimate Multisite زمانی که کاربر سعی کند به لینک اصلی wp-login.php دسترسی پیدا کند، خطای 404 نمایش می‌دهد.

* **اجبار انتشار همزمان سایت (Force synchronous site publication):** پس از اینکه یک مشتری در یک شبکه محصول مشترک شد، سایت جدید در وضعیت معلق باید به یک سایت واقعی شبکه تبدیل شود. این فرآیند انتشار از طریق Job Queue و به صورت ناهمزمان انجام می‌شود. با فعال کردن این گزینه، می‌توانید مجبور کنید که انتشار همزمان با ثبت‌نام اتفاق بیفتد.

حالا بیایید سایر گزینه‌هایی را ببینیم که همچنان برای فرآیند ورود و ثبت‌نام مرتبط هستند. آن‌ها در زیر **سایر گزینه‌ها (Other options)** در همان صفحه ورود و ثبت‌نام قرار دارند:

* **نقش پیش‌فرض (Default role):** این نقشی است که مشتریان شما پس از فرآیند ثبت‌نام در وب‌سایت خود خواهند داشت.

* **Karanjo Jumper:** Enable Jumper enables shkurtcut-a Jumper na zona admin. Jumper fehram administrators bi shûrîna zêr (Ultimate Multisite screens), objekte network, û dinên din yên piştgirî bi rêya çiqas ji bo girêdana her menu nevezin. Ew bi ştefa ye ku ew ji bo pênasekirina çiqas ji bo interface-a adminê bêne paşkirin.

* **Kullanıcıyan jî li site-a sereke biafirînin:** Fehramandina vê seçyona jî kullanıcıya piştira proses-a đăng ký bi site-a sereka network-ê we biafirîne. Heger ew seçyone bi kariride, yek seçyone ji bo tayin kirina **rolê default** (default role) yê ev kullanıcıyan li web-sites-ê we jî rojê paş wê derê dê derê pîr be.

* **Fehramandina hesabên mezin:** Bi izin berîne ku bizran bi hesabên nav siteyên cuda yên network-ê we bi asta emayê (email address) yawin bin hev. Heger ev seçyone bê karir e, mîna bizran ne dikarin hesab bi siteyên din yên ku li ser network-ê we de rojê bi asta emayê yawin biafirînin.

Û ew an jî hewcekirin ji bo login û đăng ký ku tu dikarin yanî! Ne bi xatirê parastina setyên xwe piştira bergeştin.

## Bingelî karê đăng kýyên mezin:

Ultimate Multisite 2.0 mîna editor-a formê checkout (checkout form editor) an jî izin bidije ku tu vê formên cuda yên hûn dixwazin çêbikin, bi felên cuda, û pênasekirin cuda, hewl.

Hem login page û registration page bi shortcodesan têne şûrtkirin: **[wu_login_form]** li login page û **[wu_checkout]** بۆ registration page. Tu dikarin registration page-ê jî bi çêkirina an jî çêkirina formên checkout (checkout forms) cuda, زیاتر yanî customize bike.

Ji bo mergiman vê featurê, ji menu-ya **Checkout Forms** roja berê, li piştira çendeyan (left side-bar), biajin.

![Menu-ya Checkout Forms di nav barê de](/img/config/checkout-forms-list.png)

Li vê page-ê, tu dikarin hem checkout forms-ên ku hûn hene bibînin.

Heger tu dixwazî yek nû çêbikî, tenê li ser **Add Checkout Form** roja berê ji bo wê biajin.

تەنتەرە یەکێک لەم سێ ڕەوتنی وەک خاڵی دەستپێکی خۆت هەڵبژێرە: چەند هەنگاوێک، چەند هەنگاوێک، یان پەت. پاشان، بۆ ئەوەی **گواستن بۆ ئیدیتەرەکە** بگەڕێ، clique بکە.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

یان بە شێوەیەکی دیکە دەتوانیت ئەو فۆرمەکانەی کە لە ئێستادا هەن بگۆڕیت یان دووبارە بکەیتەوە بە clique کردن لەسەر هەڵبژاردنەکانی خوارەوە لە نزیک لە ناونیشانەکەی. لێرەدا، دەتوانیت هەمان کات هەڵبژاردنی بۆ کۆپیی شورتکۆدی فۆرمەکە یان دیاریکردنی فۆرمەکە دابنێیت.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

ئەگەر هەڵبژاردنی چەند هەنگاوێک یان چەند هەنگاوێک بکەیت، فۆرمەکە پێشوەخت بە هەنگاوە بنەڕەتییە بۆ ئەوەی کار بکات. پاشان، ئەگەر دەتەوێت، دەتوانیت هەنگاوە زیاتر زیاد بکەیت.

### گۆڕینی فۆرمێکی چەکا (Checkout Form):

وەک پێشتر داوتەوە، دەتوانیت بۆ ئامانجە جیاواز فۆرمەکانی چەکا دروست بکەیت. لەم نموونەدا، کار دەکەین لەسەر فۆرم تۆمارکردن (registration form).

پاش ئەوەی بگاتە ئیدیتەر فۆرمەکە، ناونیشانێک بدە بە فۆرمەکەت (کە تەنها بۆ بیرەوەری ناوخۆیییە) و یەک ڕێگای شورتکۆد (shortcode) بدە (بۆ نموونە).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

فۆرمەکان لە چەند هەنگاو و فیلدەکان پێکهاتوون. دەتوانیت هەنگاوی نوێ زیاد بکەیت بە clique کردن لەسەر **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

لە تابلۆی یەکەم (first tab)ی پەنجرەی modalەکەدا، ناوەڕۆکی هەنگاو فۆرمەکەت پڕ بکە. پێی ID، ناونیشان و وەسفی بدە. ئەم بابەتانە زۆرتر بە شێوەیەکی ناوخۆیی بەکاردێن.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

پاشان، بینینی هەنگاوەکە دیاری بکە. دەتوانیت لە نێوان **Always show** (هەمیشە نیشان بدە)، **Only show for logged in users** (تەنها بۆ بەکارهێنەرانی تۆمارکراو نیشان بدە) یان **Only show for guests** (تەنها بۆ کارمەندەکان نیشان بدە) هەڵبژێریت.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

لە کۆتاییدا، ستایلیی پۆلەکە دیاری بکە. ئەمە فیلدەکانی اختیارین.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

ئێستا کاتێکە بۆ زیادکردنی فیلد بۆ هەنگاوی یەکەممان. تەنها بۆ **Add New Field** کلیک بکە و جۆری بەشی (section) کە دەتەوێت هەڵبژێرە.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

هەر فیلدێک پاشکۆری جیاواز هەیە کە دەبێت پڕ بکرێنەوە. بۆ ئەم دەستپێکی سەرەتاییە، ئێمە **Username** (ناوی بەکارهێنەر) فیلدەکە هەڵدەبینین.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

تۆ دەتوانیش هەر هەنگاو و فیلدێک کە پێویستیت بێت زیاد بکەیت. بۆ نیشاندانی بەرهەمەکانت بۆ کڕیارەکان بۆ ئەوەی یەکێکیان هەڵبژێرن، لە فیلدی **Pricing Table** (خاڵاسازیราق) بەکاربهێنە. ئەگەر دەتەوێت کلاینتەکانت شێوازێک هەڵبژێرن، فیلدی **Template Selection** (هەڵبژاردنی شێواز) زیاد بکە. و هتد.

_**تێبینی:** ئەگەر دوای دروستکردنی فۆرمەکە، بەرهەمێک دروست بکەیت، دەبێت ئەو بەرهەمە لە بەشی Pricing Table دا زیاد بکەیت. ئەگەر زیاد نەکرێت، بەرهەمەکە بۆ کڕیارەکانت لە لایەنی Registration page (واژینکردن) نیشان دەدرێت._

_**تێبینی ٢:** username، email، password، site title، site URL، order summary، payment، و submit button فیلدەکانی پێویستن بۆ دروستکردنی فۆرمێکی کۆتاییدا._

لە کاتی کارکردندا لەسەر فۆرمەکەدا، دەتوانیت هەمیشە دغریقی **Preview** (پیشبین) بەکاربهێنیت بۆ ئەوەی ببینیت کە کڕیارەکان فۆرمەکە چۆن دەبینن. هەروەها دەتوانیت لە نێوان بینینی وەک بەکارهێنەرێکی هێشتا یان بینینی وەک سەردەفست (visitor) گۆڕانکاری بکەیت.

![ปุ่ม معاينةฟอร์มชำระเงินในตัวแก้ไขแบบฟอร์ม](/img/config/checkout-form-preview-button.png)![การดูตัวอย่างฟอร์มชำระเงินสำหรับผู้เยี่ยมชมหรือผู้ใช้ปัจจุบัน](/img/config/checkout-form-preview-modal.png)

สุดท้าย ในส่วน **Advanced Options** คุณสามารถตั้งค่าข้อความสำหรับหน้า **Thank You** เพิ่มโค้ดสั้นๆ เพื่อติดตาม Conversion, เพิ่ม CSS ที่กำหนดเองให้กับฟอร์มชำระเงินของคุณ หรือจำกัดการใช้งานเฉพาะบางประเทศได้

![ตัวเลือกขั้นสูงพร้อมหน้า Thank You, การติดตาม Conversion และ CSS ที่กำหนดเอง](/img/config/checkout-form-advanced.png)

คุณยังสามารถเปิดหรือปิดฟอร์มชำระเงินของคุณด้วยตนเองโดยการสลับตัวเลือกนี้ในคอลัมน์ด้านขวา หรือลบฟอร์มทิ้งอย่างถาวรก็ได้

![ปุ่มสลับสถานะและการลบสำหรับฟอร์มชำระเงิน](/img/config/checkout-form-active.png)

อย่าลืมบันทึกฟอร์มชำระเงินของคุณนะ!

![ปุ่มบันทึกฟอร์มชำระเงิน](/img/config/checkout-form-save.png)

ในการรับ shortcode ของฟอร์ม คุณสามารถคลิกที่ **Generate Shortcode** และคัดลอกผลลัพธ์ที่แสดงในหน้าต่าง modal ได้เลย

![หน้าต่าง Generate Shortcode พร้อม shortcode สำหรับคัดลอก](/img/config/checkout-form-editor.png)

_**หมายเหตุ:** คุณจะต้องเพิ่ม shortcode นี้ลงในหน้า registration ของคุณเพื่อให้ฟอร์มชำระเงินนี้ปรากฏอยู่บนหน้านั้น_

## การเลือกผลิตภัณฑ์และเทมเพลตล่วงหน้าผ่าน URL parameters:

ถ้าคุณต้องการสร้างตารางราคาที่ปรับแต่งเองสำหรับผลิตภัณฑ์ของคุณ และเลือกผลิตภัณฑ์หรือเทมเพลตที่จะให้ลูกค้าเลือกจากหน้า pricing table หรือ templates ของคุณในฟอร์มชำระเงิน คุณสามารถใช้ URL parameters สำหรับเรื่องนี้ได้

### **สำหรับแผน (plans):**

ไปที่ **Ultimate Multisite > Products > Select a plan** คุณจะเห็นปุ่ม **Click to copy Shareable Link** อยู่ด้านบนของหน้า นี่คือลิงก์ที่คุณสามารถใช้เพื่อเลือกแผนเฉพาะเจาะจงนี้ในฟอร์มชำระเงินของคุณได้เลย

![หน้าผลิตภัณฑ์พร้อมปุ่มลิงก์ที่แชร์ได้](/img/config/products-list.png)

تذكرة: ئەم لینکە تەنها بۆ **Planes** (پلانەکان) بەکار دێت. ناتوانین لەسەر پەکێجەکان یان خزمەتگوزئینانەکان بەم لینکە بەکار بهێنن.

### بۆ قالبەکان (templates):

ئەگەر دەتەوێت پێشوەختەی قالبەکانی سایت لە فۆرمێکی پاراستنی تۆدا هەڵبژێریت، دەتوانیت ئەم پەرەستە بەکاربهێنیت: **?template_id=X** لەسەر لینکی ڕاگرتنی (registration page URL). پێویستە "X" بە **بۆچوونی ID قالب سایتەکە** بگۆڕیت. بۆ گرتنی ئەم ژمارەیە، ببە}}{\Ultimate Multisite > Sites}.

لە خوارەوەی ئەو قالبەی دەتەوێت بەکاربهێنیت، لەسەر **Manage** clique بکە. دەتوانیت ژمارەی SITE ID ببینیت. تەنها ئەم ژمارەیە بۆ ئەم قالبە تایبەتە بەکار بهێنن بۆ ئەوەی پێشوەخت بێت لە فۆرم پاراستنی تۆدا. لە حاڵەتی ئێمە، پەرەستەی URLەکە دەبێت وەک **?template_id=2** بێت.

![سێبۆری لیستێک کە نیشاندای ID قالب سایت دەدات](/img/config/site-templates-list.png)

بیستە ئەگەر دەتەوێت هەردوو پڕۆدۆکتی و قالبەکان پێشوەخت بکەیت لە فۆرم پاراستنی تۆدا. هەموو کاری کە دەبێت ئەوەیە کە لینکە بەشارەبەخۆیی (shareable link)ی پلانی کپی بکەیت و پەرەستەی قالبەکە لە کۆتاییەکەوە چێگریت. وەک ئەمە دەربکەوێت: **www.mynetwork.com/register/premium-plan/?template**

پاش بەوەی کە لینکەکە بۆ ئەوەی پێشوەخت بێت، پەرەستەی قالبەکە لە کۆتاییەکەوە چێگریت. وەک ئەمە دەربکەوێت: **www.mynetwork.com/register/premium-plan/?template_id=2**.
