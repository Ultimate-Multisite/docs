---
title: Gudanar da tallafin ruju
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# مدیریت مالیات

Ultimate Multisite در افزونه اصلی ما یک ماژول برای جمع‌آوری مالیات دارد، بنابراین اگر نیاز دارید که مالیات‌های فروش را روی طرح‌ها، بسته‌ها و خدمات خود جمع‌آوری کنید، می‌توانید به راحتی بدون نصب هیچ افزونه اضافی این کار را انجام دهید.

برای شرکت‌هایی که در اروپا مستقر هستند، ما یک **افزونه** ارائه می‌دهیم که ابزارها و ویژگی‌هایی را برای بهتر پشتیبانی از انطباق با مالیات بر ارزش افزوده (VAT) اضافه می‌کند.

Ultimate Multisite به نمایندگی از شما اظهارنامه یا پرداخت مالیات به دولت نمی‌پردازد؛ ما فقط کمک می‌کنیم در زمان تراکنش، مالیات‌های مربوطه را جمع‌آوری کنید. **شما همچنان باید خودتان مالیات‌ها را پرداخت کنید.**

## فعال کردن جمع‌آوری مالیات

جمع‌آوری مالیات به صورت پیش‌فرض فعال نیست. برای فعال کردن آن، باید به مسیر **Ultimate Multisite > Settings > Taxes** بروید و تنظیم "Enable Taxes" (فعال کردن مالیات) را روشن کنید.

![تغییر وضعیت دکمه Enable Taxes در بالای صفحه تنظیمات مالیات](/img/config/settings-taxes-enable.png)

در اینجا نمای کامل صفحه تنظیمات مالیات آمده است:

![صفحه کامل تنظیمات مالیات](/img/config/settings-taxes-full.png)

همچنین می‌توانید تنظیمات مالیات را برای محصولات منفرد مشاهده کنید:

![تنظیمات مالیات برای محصولات](/img/config/settings-taxes.png)

### مالیات مشمول در مقابل مالیات غیرمشمول

به صورت پیش‌فرض، تمام قیمت‌های محصولات شما شامل مالیات نیست، به این معنی که مالیات‌ها **در قیمت محصول لحاظ نشده‌اند**. اگر ما تشخیص دهیم که مشتری باید مالیات بر یک خرید خاص پرداخت کند، ما مالیات‌ها را **روی** مبلغ کل اضافه خواهیم کرد.

اگر ترجیح می‌دهید مالیات‌ها در قیمت محصول شما لحاظ شوند، می‌توانید با فعال کردن تنظیم "Inclusive Tax" (مالیات شامل) این کار را انجام دهید.

![ردیف تغییر وضعیت Inclusive Tax زیر تنظیم Enable Taxes](/img/config/settings-taxes-inclusive.png)

فراموش نکنید که تغییراتی که ایجاد کرده‌اید را **ذخیره** کنید.

###

## ایجاد نرخ‌های مالیات

بعد از فعال کردن جمع‌آوری مالیات، شما باید با استفاده از ویرایشگر نرخ مالیات ما، برای مکان‌های خاص نرخ‌های مالیات تعریف کنید.

Inta za shiga da ka samu editor ɗin, ka danna maɓallin **Manage Tax Rates** a gefen baya (sidebar) na shafin tax settings.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

A shafin editor na tax rates, za ka iya ƙara sabbin Tax Rates ta hanyar danna maɓallin **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Za ka buƙaci ba kowane tax rate wani **title** (wanda ake amfani da shi a cikin invoices). Sannan za ka iya zaɓar **country** (dadi), **state**, da **city** (dadi) inda wannan tax zai dace. A ƙarshe, ka ƙara **tax rate in percents**.

### Tax Categories

Za ka iya ƙirƙirar ƙarin Tax Categories, don ƙara bambancin adadin tax ga nau'ikan kayayyaki daban-daban.

Danna **Add new Tax Category**, sannan ka rubuta sunan category ɗinka kuma ka danna **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Don bincika categories, danna **Switch** kuma zaɓi category ɗin da kake so ka ƙara sabbin tax ga shi.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Za ka iya samun wani tax category don wani kayayyaki ta hanyar tafiya zuwa **Product edit page** sannan zuwa tab ɗin Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

A wannan shafin sama, za ka iya aiki da maɓallin **Is Taxable?** don ba Ultimate Multisite kani ya san cewa bai kamata ya samu tax ga wannan kayayyaki ba.

## European VAT Support

كما ذكرنا سابقاً، لدينا إضافة متاحة للعملاء في الاتحاد الأوروبي لديهم متطلبات إضافية بسبب لوائح ضريبة القيمة المضافة الأوروبية (VAT).

أدواتنا الخاصة بضريبة القيمة المضافة تساعد في عدة أمور مهمة:

* تحميل سهل لمعدلات ضريبة القيمة المضافة للاتحاد الأوروبي؛
* جمع والتحقق من رقم ضريبة القيمة المضافة - والتسوية العكسية للكيانات المعفاة من ضريبة القيمة المضافة (مثل الشركات التي لديها أرقام ضريبية صالحة).

لتثبيت تلك الإضافة، اذهب إلى **Ultimate Multisite > Settings** ثم انقر على رابط الشريط الجانبي **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

سيتم توجيهك إلى صفحة الإضافات الخاصة بنا. هناك، يمكنك البحث عن **Ultimate Multisite VAT add-on** وتثبيته.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

بعد ذلك، اذهب إلى **Network Admin > Plugins** وقم بتفعيل تلك الإضافة على مستوى الشبكة بأكملها.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

إذا عدت إلى علامة التبويب **Tax Settings**، سترى خيارات جديدة متاحة. قم بتشغيل خيار **Enable VAT Support** لتفعيل أدوات ضريبة القيمة المضافة الجديدة. لا تنسَ **حفظ** إعداداتك!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### سحب معدلات ضريبة القيمة المضافة (Pulling on VAT Tax Rates)

إحدى الأدوات التي تضيفها عملية التكامل هي القدرة على تحميل معدلات الضرائب للدول الأعضاء في الاتحاد الأوروبي. يمكن القيام بذلك عن طريق زيارة صفحة محرر معدلات الضرائب بعد تفعيل دعم ضريبة القيمة المضافة للاتحاد الأوروبي.

A cikin ƙasan shafin, za ka ga zaɓuwar cire/tura VAT (Value Added Tax). Idan ka zaɓi nau'in yadda kake so a yi amfani da shi kuma ka danna maɓallin **Update EU VAT Rates**, zai bayyana jadawarta kuma ya shigar da ƙarami da yawa na asusun kuɗi ga kowane ƙasa a cikin EU. Sannan, kana buƙatar kawai a kayyatauwarsa (save).

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Zaka iya gyara ƙima sau da yawa bayan ka cire su. Don yin hakan, ka gyara lamba na jadawarta da kake buƙata kuma danna don kayyatauwarsa (save) ƙima na sabo.

### VAT Validation

Idan aka wuce tallafin VAT, Ultimate Multisite zai ƙara wani fildar a cikin shafin samun kuɗi (checkout form), a ƙasa na fildar adireshin kuɗi (billing address field). Wannan fildar za ta bayyana kawai ga abokan ciniki da suke wurin EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Sannan, Ultimate Multisite zai tabbatar da VAT Number kuma idan ya sake bayyana shi a matsayin wanda ya dace, za a yi amfani da hanyar "reverse charge mechanism" (hanyar ƙara kuɗi ta wajen wasu kasashen) kuma a sanya yawan asusun kuɗi zuwa 0% ga wannan order ɗin.
