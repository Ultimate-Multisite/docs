---
title: Bayanan wajen fitarwa
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Shaidinaiji (Notes of Release) {#release-notes}

## Versiyun 2.13.0 — Wajara a ranar da 2026-06-05 {#version-2130--released-on-2026-06-05}

- Ƙarin: An ƙara tallafin sovereign-tenant ga asusun abokin ciniki, checkout, billing, wuri (site), takardar bayarwa (invoice), canza tsarin (template switching), da hanyoyin haɗa domain don wajen tenant su iya bincika abokan ciniki zuwa wurin gida don ayyukan da aka kula.
- Ƙarin: An ƙara bincike na sabunta amana ga samun sabunta kuɗi (renewal-credential checks) ga shawarwar da ke tabbas, don gwamnaye su yi nasara ba tare da su sake sabunta kai tsaye idan ba a samu shafi na billing ko subscription ko vault token ba.
- Ƙarin: An ƙara hanyar fitarwa ta HMAC-verified loopback ga samar da wuri da aka tsara (pending site creation) don yin samun nasara fiye daidai a wuraren da ake sakawa sabbin ayyuka na bayan gaba (background jobs).
- Ƙarin: An ƙara hanyoyin da masu haɓaka za su iya amfani da su don SSO URLs, domain base domains na checkout-form, da samar da rekodoin domain ne kawai idan ba a yi amfani da su.
- Gyaran: SSO yanzu ya fi inganci a kan domain-domain da aka haɗa, ziyarar masu bayarwa na waje (anonymous broker visits), logout, da tsakanin abubuwan da ke shafar plugin daban-daban.
- Gyaran: Yanzu samar da wuri da aka tsara yana da kyau daga bayanan da suka yi ƙarewa (stale publish flags) kuma ba zai sa abokan ciniki su taba kan shafin samarwa wuri ba.
- Gyaran: Rekodoin domain ba a ƙirƙira ga domain base checkout-form na haɗin gwiwa, kuma an yi barin ayyukan bayan gaba na sakawa (host-provider background jobs) idan ba a yi amfani da su ba.
- Gyaran: An tafi da wasu abubuwan da ke tsakanin checkout, billing address, password reset, email verification, template switching, tours, da dashboard na abokin ciniki don hana hanyoyin abokan ciniki na yau da kullun su yi tsanani.
- Gyaran: Emails da ake tura yanzu suna riƙe sirrin masu karɓar bayanan su yayin da ake motsa su ba tare da kuskuren SMTP/plugin na ƙarshe ba idan ƙuntunan karɓuwa ko hanyoyin tura imel ke yi nasara.
- Gyaran: An hana wasu abubuwan tsakanin sabunta samun sabunta (membership renewals), nuna lokacin ƙarewa, da samun kuɗi su sa iyakacin ƙarshe nan take, rashin cin zarafi, ko rashin karɓar kuɗi na buƙata.
- Inganci: An gwada compatibility ta WordPress har zuwa 7.0, an sake gina kayan Vue na samarwa a kan npm sources, kuma Cypress end-to-end coverage yanzu yana gwada ƙarin hanyoyin checkout, setup, SSO, da gateway.

## نسختن 2.12.0 — گشتاکارايە لە ڕۆژی 2026-05-15 {#version-2120--released-on-2026-05-15}

- نوێ: Hostinger (hPanel) را وەک پڕۆڤایدرێکی میزبانی پشتگیران بە افزودن کردویم کە دامنه هاپەڕək (domain mapping) هم پشتیبانی мекунад.
- نوێ: Site Exporter инчунин ҳоلانҳои импорти шабакаи (network import bundles) ройгон менамояд, то ба даст овардани мунтазам вароқти сайт дар тамоми шабака осонтар бошад.
- Навъ: Эпоилаҳои BCC инчунин ҳолати "undisclosed-recipients" (маълумот нашодан) -ро истифода мебаранд, то номҳои гирифтагон аз ҷо нишон нашаванд.
- Навъ: Санаи паёмбарӣ баъди оғоз (Membership expiration date) ҳангори сабти он бо арзиши не-санаи инкорплӣ (non-date value) ба таври дуруст муайян мешавад.
- Навъ: Таҷдидоти гирифтагон дар Stripe оғоз мекунад ва бе тавони истифодаи API-и `deleteDiscount` -ро кишвандагӣ намекунад.
- Навъ: Рӯйхатсозӣ (SSO redirects) дар сайтиҳое, ки دامнашон ибората шудааст, инчунин маҳдуд карда мешаванд то аз такрорҳои беосос ба даст оварда шавад.
- Навъ: Инструменти интихоби тасвир (image picker) дар ройхати гузариш (Setup wizard) ҳолати дониши модели маълумотӣ (data model) заминаи онро дуруст таъмин мекунад.
- Навъ: CLI-и Site Exporter ин танзими собиқаи тасвири шабакаи сайтро ба таври дуруст ҳифз менамояд.
- Беҳтар шуд: `wp-cli` аз бандҳои плагин ба кор дароварда шуд, ки ҳаҷми плагинро кам кардааст.

## نسختن 2.11.0 — گشتاکارايە لە ڕۆژی 2026-05-11 {#version-2110--released-on-2026-05-11}

- نوێ: Site exports инчунин `index.php` -и худро банд мекунанд, то ZIP метавонад дар мизби мустаҳкам бе инстали плагин ҷудо имконият дода без инстали плагини дигар.
- نوێ: Экспорт шабака (Network export) иҷозат медиҳад, ки администраторҳо ҳамаи сайти фарзандониро дар як архив ба таври ягона аз саҳифаи администри Site Export экспорти кунанд.
- نوێ: Иҷозати плании "Site Templates" (Шаблонҳои сайт) омода шуд, ки бо занҷири иваз (fallback chain) таъмин карда мешавад, то мавҷудияти шаблонҳо ба маҳдудиятҳои план дуруст тавон дода шавад.
- نوێ: Муҳаррири формаи Checkout оид ба он огоҳӣ медиҳад, ки агар як маҳсулот бо истифода аз як сохтори зарурӣ (required field) иҷозат накардашуда илова карда шавад.
- نوێ: Таббаи танзимоти Импорт/Экспорт ҳолати онро ба таври равшан тавсиф мекунад ва бо мустақимат ба инчунин инструменти Site Export пайваст аст.

## نسختن 2.10.0 — گشتاکارايە لە ڕۆژی 2026-05-05 {#version-2100--released-on-2026-05-05}

- جديد: آلة توجيه إعداد PayPal للمدخلات اليدوية مع بوابة OAuth لتهيئة البوابة بسلاسة.
- جديد: تم إعادة تصميم لوحة تحكم العميل عند التبديل بين القوالب باستخدام بطاقة **current-template**، وشبكة دائمة (persistent grid)، وزر **Reset current template**.
- إصلاح: لم يعد تبديل القالب يعلق واجهة المستخدم بسبب فشل AJAX.
- إصلاح: تم تأمين حالات أذونات تبديل القوالب ضد الوصول غير المصرح به.
- إصلاح: تم التحقق من مدخلات تجاوز الموقع قبل الحفظ.
- إصلاح: تظهر مطالبة عنوان الفواتير الآن عندما يكون العنوان فارغًا.
- إصلاح: تم حل إشعارات إلغاء دعم PHP 8.1 للتحويل من null إلى string.
- إصلاح: يتم تحميل القوالب التي يتم تحميلها بشكل كسول (lazy-loaded) قبل خطاف التهيئة لمنع مشاكل التوقيت.
- إصلاح: يتم احترام مسار SSO المصفى عبر جميع تدفقات تسجيل الدخول.
- إصلاح: تم الحفاظ على خيارات هوية الموقع الفارغ عند الحفظ.

## الإصدار 2.9.0 — صدر في 2026-04-30 {#version-290--released-on-2026-04-30}

- جديد: تمت إضافة تصدير واستيراد للموقع الواحد تحت **Tools > Export & Import**.
- إصلاح: يتم الآن تقديم ملفات ZIP للتصدير عبر نقطة نهاية تنزيل مصادق عليها (authenticated download endpoint).
- إصلاح: تم تصحيح مخاطر حقن SQL ومشاكل الاستعلام في استعلامات التصدير/الاستيراد المعلقة.
- إصلاح: لا يتم نشر الموقع المعلق عندما يتحقق المسؤول يدويًا من بريد العميل.
- إصلاح: يتم تنظيف سجلات pending_site الأيتيمة عند فقدان العضوية.
- إصلاح: تم تصحيح تباعد التنقل في الإعدادات والبحث المرتبط بالمرساة (anchor navigation).
- إصلاح: تظهر المواقع المعلقة أولاً في عرض جميع المواقع (All Sites view).
- إصلاح: تمت إضافة رأس User-Agent لمزود لقطات الشاشة (mShots) لمنع أخطاء 403.
- إصلاح: تم حل التبعية الدائرية لجدول cron للاستيراد.
- إصلاح: تم توحيد معرفات الجولة (Tour IDs) إلى شرطات سفلية في مفاتيح إعدادات المستخدم.
- تحسين: يتم استخدام ZipArchive الآن بدلاً من Alchemy/Zippy لتحقيق توافق أفضل.

## الإصدار 2.8.0 — صدر في 2026-04-29 {#version-280--released-on-2026-04-29}

- Baya: Jumper toggle an ƙirƙirar "Other Options" settings UI a cikin tsarin.
- Baya: Sannan saddar "Status column" a cikin jadawalin forms na checkout.
- Baya: Ajiye file loader na Addon sunrise don ƙara ƙarin bayanan custom MU-plugin sunrise extensions.
- Tabbatarwa: An cire wannan tsarin nuna matsaloli (error-reporting opt-in setting) daga shafin settings.
- Gyara: Katin wajen gode wa kai (thank-you page site card) — hoton an ƙara ƙarawa kuma hanyoyin sadarwa sun yi kyau.
- Gyara: An canza gudanar da screenshot daga thum.io zuwa WordPress.com mShots.
- Gyara: Ayyukan rubuta wajen shiga (Registration) da Role na asali yanzu suna da ƙarin da ya dace a lokacin shiga sabon hanya.
- Gyara: `get_site_url()` ba ta barin shi kamar haka ba idan domain yana da port.
- Gyara: An yi wa hotunan media (media files) gabaɗaya yanzu suke aiki sosai idan tsarin `copy_media` ya kasance ba shi da wani abu.
- Gyara: Object cache an yi masa gyara sauya bayan an rubuta sitemeta bayan an aiki da network-activate.
- Gyara: An samar da domain na musamman (custom domain) ne kawai a matsayin gaba idan aka tabbatar da DNS ga domain mai sassa uku.
- Gyara: An cire shiga samun kuɗi (membership) idan an tsaftace kuɗin da ya ƙare.
- Gyara: Babban tsarin yawan kalmar wajen biya (Password strength checker) ya tabbas bayan an yi shi a lokacin bayar da shaidar shiga kai tsaye.
- Gyara: An daina sake dubawa na shafi na shawarar gode wa kai (thank-you page) idan hanya ta shiga ba ta wajen shiga sabon hanya ba.
- Gyara: Zaɓin rubuta WordPress core a lokacin ƙarfafa plugin da ajiye settings ya yi daidai bayan an aiki da activation da kuma ajiya settings.
- Gyara: An ƙara tsarin hana dubawa na ƙaramin wuri (Null expiration guard) a cikin `calculate_expiration` don dacewa da PHP 8.4.
- Gyara: An hana dubawa na shiga biyu idan abokin ciniki ya sami kuɗin samun shi (membership) da aka yi aiki.
- Gyara: An ƙara bincike na wani abu ba shi da wuri (Null check) ga `date_expiration` a cikin checkout.
- Gyara: An ƙarfafa tsarin samarwa hanya (Site provisioning) — an gyara iyakoki, yadda ake samun kuɗin samun shi, da kuma promotion na domain.
- Gyara: Labalin nuna matsayi na shiga baya (Pre-install check status label) ya yi daidai ne ba "Activated" ba idan binciken ya yi nasara ba.
- Gyara: Domain da aka yi amfani da shi don hanyoyin tabbatar da imel (email verification URLs).
- Gyara: Shiga kai na asali bayan an kammala checkout idan ba a saka wajen kalmar sirri ba.
- Gyara: Kuɗin samun shi na dabarun kyauta ba ya ƙare yanzu — an yi masa matsayin tsarin da ke cikinsa (lifetime).

- Shiga: Wajiri da wajara ta ainiya ba zaɓi bayarwa har zuwa lokacin da abin gani ya tabbatar imel.
- Shiga: Babban lissafi (endpoint) na SES v2 da hanyar da aka tsara (identity route) an gyara.
- Shiga: Hook ɗin `wu_inline_login_error` an fitarwa a cikin blokin gano wajiri kafin a tura bayanan.
