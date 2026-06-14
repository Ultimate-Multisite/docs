---
title: Yin da za ka gyara shafin rajista mai tsari
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Ƙirƙirar Fassarar Shigarwa (Registration Form)

Don yin bikin yanarku ya yi wani abu na musamman daga duk wani SaaS da aka gina a kan WordPress platform, Ultimate Multisite yana ba ku damar canza shigarwar da shiga (registration) da shiga (login) ta hanyar ƙarin mu'amalarmu **Checkout Forms** feature.

Kamar yadda su ne hanya mai sauƙi kuma mai sauƙin gwada daban-daban hanyoyin lokacin da kuke so ku canza abubuwa don tura sabbin abokan ciniki, ana amfani da su sosai don ƙirƙirar shigarwar da ta fi dacewa da mutum ɗaya. Wannan rubutun yana nufin nuna maka yadda za ka yi hakan.

## Shafin Shiga da Shigarwa (Login and registration pages):

Bayan an install Ultimate Multisite, yana samar da shafin shiga da shigarwa na musamman a kan wajen gida ɗinka. Za ka iya canza waɗannan shafuka na asali kowane lokaci ta hanyar tafiya zuwa shafin **Ultimate Multisite > Settings > Login & Registration** ɗinka.

![Login and Registration settings page](/img/config/settings-general.png)

Ga bayani mai cikakken bayanin shafin shiga da shigarwa:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Mu duba kowane zaɓi da za ka iya canza a shafin **Login & Registration**:

  * **Enable registration (Atsawawa ga shigarwa):** Wannan zaɓi zai samar ko ya hana shigarwar a kan yanarku. Idan aka yi masa "off" (hanyar), abokan ciniki ba za su iya yin rijista da shiga cikin kayayyakin ku ba.

  * **Enable email verification (Atsawawa ga tabbatar da imel):** Idan wannan zaɓin an yi masa "on" (hanyar), abokan ciniki waɗanda suka yi rajista don tsarin tallafi mai kyau ko kuma wani tsari mai gwaji zai samu imel na tabbatarwa kuma za su buƙaci danna link na tabbatarwa domin shafuka su ƙare.

* **صفحه ثبت‌نام پیش‌فرض (Default registration page):** این صفحه برای ثبت‌نام پیش‌فرض است. باید این صفحه را روی وب‌سایت خود منتشر کنید و یک فرم ثبت‌نام (که به آن فرم تسویه حساب یا checkout form هم می‌گویند) داشته باشد - جایی که مشتریان شما محصولاتتان را مشترک خواهند شد. شما می‌توانید هر تعداد صفحه ثبت‌نام و فرم تسویه حساب ایجاد کنید، فقط یادتان باشد که شورت‌کد فرم تسویه حساب را در صفحه ثبت‌نام قرار دهید، وگرنه نمایش داده نخواهد شد.

  * **استفاده از صفحه ورود سفارشی (Use custom login page):** این گزینه به شما اجازه می‌دهد از یک صفحه ورود سفارشی استفاده کنید، غیر از صفحه پیش‌فرض wp-login.php. اگر این گزینه را روشن کنید، می‌توانید انتخاب کنید که کدام صفحه برای ورود در گزینه **صفحه ورود پیش‌فرض (Default login page)** (که درست زیر آن قرار دارد) استفاده شود.

  * **مخفی کردن آدرس اصلی ورود (wp-login.php):** اگر می‌خواهید آدرس اصلی ورود را پنهان کنید، می‌توانید این گزینه را روشن کنید. این کار برای جلوگیری از حملات brute-force مفید است. اگر این گزینه فعال باشد، Ultimate Multisite زمانی که کاربر سعی کند به لینک اصلی wp-login.php دسترسی پیدا کند، خطای 404 نمایش می‌دهد.

  * **اجبار انتشار همزمان سایت (Force synchronous site publication):** بعد از اینکه یک مشتری در یک شبکه محصول مشترک شد، سایت جدید و منتظر نیاز دارد تبدیل به یک سایت واقعی شبکه شود. این فرآیند انتشار از طریق Job Queue به صورت ناهمزمان انجام می‌شود. فعال کردن این گزینه باعث می‌شود که انتشار دقیقاً در همان درخواست ثبت‌نام اتفاق بیفتد.

حالا بیایید ببینیم سایر گزینه‌هایی که هنوز برای فرآیند ورود و ثبت‌نام مرتبط هستند چه چیزهایی هستند. آن‌ها درست زیر **سایر گزینه‌ها (Other options)** در همان صفحه ورود و ثبت‌نام قرار دارند:

  * **نقش پیش‌فرض (Default role):** این نقشی است که مشتریان شما پس از فرآیند ثبت‌نام روی وب‌سایت خود خواهند داشت.

* **Fasahar Jumper (Enable Jumper):** Wannan yana ba da damar amfaniyar Jumper shortcut a cikin khuwan admin. Jumper tana ba masu gudanarwa damar su shiga cikin sauran manhajoji na Ultimate Multisite, abubuwan ne na wakar (network objects), da sauransu cikin sauri ba tare da yin bincike a kowane menu ba. Idan kuna son a yi hakan, ku yi ƙarawa (turn it off) idan kuna so a ɓoye wannan kayan sauyi tafiya mai sauri daga interface na admin.

* **Ƙara masu amfani zuwa wurin gida:** Ba da wannan za ka ba damar ƙara wannan mai amfani zuwa wurin gida (main site) na wakar ku bayan an kammala tsarin shiga (signup process). Idan kuna ba da wannan damar, wata hanya ta saida **default role** (role na asali) ga waɗannan masu amfani a shafin ku za ta bayyana ne nan ƙasa.

* **Ba da damar kayan aiki da dama:** Ba da damar wannan zai ba masu amfani damar samun ayaka (accounts) a wuraren daban-daban na wakar ku tare da idan suna da imel ɗin gaba. Idan wannan damar tana lalata, abokan hulɗarka ba za su iya ƙirƙirar ayaka a shafuka daban-daban da ke aiki a cikin wakar ku tare da imel ɗin gaba.

Kamar haka ne, waɗannan su ne kowane zaɓi da za ka iya gyara dangane da shiga (login) da kuma shiga (registration)! Kada ku manta a tsara ayyukan ku bayan an kammala gyarawa.

## Amfani da ƙirar shiga (registration forms) da dama:

Ultimate Multisite 2.0 tana ba damar gyaran manhajar shiga (checkout form editor) wadda ta ba ka damar samar da kowane yawan manhajoji da kake so, tare da fildomawa daban-daban, kayan aiki da ake bayarwa, da sauransu.

Kowa daga cikin shafun shiga (login page) da shafin shiga (registration page) an haɗa su da shortcodes: **[wu_login_form]** a shafin shiga kuma **[wu_checkout]** ga shafin shiga. Za ka iya gyara shafin shiga ta ƙara ko samar da manhajoji na shiga (checkout forms).

Don samun wannan ƙwarewar, ku je menu na **Checkout Forms**, a gefen ƙasa (left side-bar).

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

A wannan shafin, za ka iya gani duk manhajoji na shiga da kake da su.

Idan kana so ka ƙara wadda ba ta wuce, kawai danna **Add Checkout Form** a mafi sama na shafi.

Tuna zaɓi ɗaya daga cikin waɗannan tsawon uku a matsayin farko: single step (mataki ɗaya), multi-step (matakai da yawa) ko blank (ba wani). Sannan, danna don **Tabbawa zuwa Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Ko kuma, za ka iya gyara ko dubara waɗannan forms da kake da su ta hanyar danna kan waɗannan zaɓuɓɓuka a ƙasa sunan su. A nan ma za ka samu zaɓuɓɓukan sao ko shafi (shortcode) na form ɗin ko kuma shafa form ɗin.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Idan ka zaɓi single step ko multi-step, form ɗin checkout zai shafi da matakan na asali don ya yi aiki. Sannan, idan kana so, za ka iya ƙara matakai masu yawa ga shi.

### Gyaran Checkout Form:

Kamar yadda muka ambata a baya, za ka iya samar da forms na checkout don bambancin ayyuka. A wannan misali za mu yi aiki kan form na rijista (registration form).

Bayan ka tafiya zuwa editor na form ɗin checkout, ba shi wani magana (name) (wanda zai'urci ne kawai don amfani na gida) da slug (wanda ake amfani da shi don samar da shortcodes, misali).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms suna tsara da matakai da makamancin aiki (fields). Za ka iya ƙara sabon mataki ta hanyar danna kan **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

A farkon tab na modal window, ka cika abin da ake bukata a cikin matakin form ɗinka. Ka ba shi ID, magana (name) da bayani (description). Waɗannan abubuwa mafi yawa ana amfani da su ne don amfani na gida kawai.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Na gaba, ka sanya bayanin matakin (visibility). Za ka zaɓi tsakanin **Always show** (Akawo a nuna), **Only show for logged in users** (Nuna kawai ga masu shiga), ko **Only show for guests** (Nuna kawai ga abokan hoto/guests).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

باید حالا تنظیمات سبک مرحله (step style) رو انجام بدید. اینها فیلدهای اختیاری هستن.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

حالا وقت اضافه کردن فیلدها به اولین مرحله‌مون رسیده. فقط روی **Add New Field** کلیک کنید و نوع بخشی که می‌خواید رو انتخاب کنید.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

هر فیلدی پارامترهای متفاوتی داره که باید پر بشن. برای این ورود اول، ما فیلد **Username** رو انتخاب می‌کنیم.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

می‌تونید هر تعداد مرحله و فیلدی که نیاز دارید اضافه کنید. برای نمایش محصولاتتون به مشتری‌ها تا یکی رو انتخاب کنن، از فیلد **Pricing Table** استفاده کنید. اگر می‌خواید اجازه بدید مشتریان شما یک قالب (template) رو انتخاب کنند، فیلد **Template Selection** رو اضافه کنید و همینطور.

_**توجه:** اگر بعد از ساخت فرم تسویه حساب خود محصولی ایجاد کنید، باید آن محصول را در بخش جدول قیمت‌گذاری (Pricing table section) اضافه کنید. اگر اضافه نکنید، محصول برای مشتریان شما در صفحه ثبت نام نمایش داده نخواهد شد._

_**توجه ۲:** username، email، password، site title، site URL، order summary، payment و submit button فیلدهای اجباری برای ساخت یک فرم تسویه حساب هستند._

در حالی که روی فرم تسویه حساب خود کار می‌کنید، همیشه می‌توانید از دکمه **Preview** استفاده کنید تا ببینید مشتریان شما فرم را چگونه خواهند دید. همچنین می‌توانید بین مشاهده به عنوان کاربر موجود یا بازدیدکننده جابه‌جا شوید.

![Daga babban bayanan wajen samun shiga (checkout form preview)](/img/config/checkout-form-preview-button.png)![Bincike wajen samun shiga a matsayin ziyarar ko amfan da suka samu](/img/config/checkout-form-preview-modal.png)

A ƙarshe, a cikin **Advanced Options** (Zaɓuwar Girma Mai Girma), za ka iya tsara saƙon da zai bayyana a shafin **Thank You**, ƙara ƙananan rubutu don bin hanyoyin samun kuɗi (conversions tracking), ƙara CSS na musamman ga wajen samun shiga, ko kuma baka ba shi ga wasu ƙasashe.

![Advanced Options tare da shafin Thank You, bin hanyoyin samun kuɗi, da CSS na musamman](/img/config/checkout-form-advanced.png)

Zaka iya samarwa ko hana wajen samun shiga ta kai tsaye ta hanyar canza wannan zaɓin a sassa mai yauke (right column), ko kuma ka cire shi daka ba shi gaba ɗaya.

![Wannan babban maida da zaɓin cire wajen samun shiga](/img/config/checkout-form-active.png)

Kada manta ka ajiye wajen samun shigarka!

![Babban maida na ajiya wajen samun shiga (Save Checkout Form button)](/img/config/checkout-form-save.png)

Don samun shortcode na wajen samun shiga, danna kan **Generate Shortcode** (Samun Shortcode) kuma ka ɗau kayan aiki da aka nuna a cikin window na modal.

![Modal na samar da shortcode tare da shortcode don ajiya](/img/config/checkout-form-editor.png)

_**Gargaɗi:** Dole ka ƙara wannan shortcode a shafin rikodinka (registration page) domin a iya saka wannan wajen samun shiga a shi._

## Samun zaɓuwar kayayyaki da mallaka (templates) ta hanyar URL parameters:

Idan kana so ka ƙirƙira jadawalin farashin musamman ga kayayyakin ka kuma ka gina (pre-select) wajen samun shiga wani kayayyaki ko template da abokin ciniki ya zaɓa daga jadawalin farashinka ko shafin templates, za ka iya amfani da URL parameters don wannan.

### **Don tsarin shiga (plans):**

Danna zuwa **Ultimate Multisite > Products > Select a plan**. Za ka ga babban maida na **Click to copy Shareable Link** a mafi sama na shafi. Wannan shi ne link da za ka iya amfani da shi don gina wajen samun shiga wani tsarin shiga (plan) na musamman.

![Shafin kayayyaki tare da babban maida na mallaka](/img/config/products-list.png)

Gargaɗi cewa wannan link na raba shi ne kawai don **Plans** (tsarin kuɗi). Ba za ka iya amfani da link na raba don packages ko sabbin ayyuka ba.

### Don templates:

Idan kana so ka zaɓi site templates a cikin wajen shiga checkout ɗinka, za ka iya amfani da parameter ɗin: **?template_id=X** a URL ɗin shigarwa (registration page) ɗinka. Dole ne a mayar da "X" da **lambale na site template**. Don samun wannan lambalin, tafiya zuwa **Ultimate Multisite > Sites**.

Danna kan **Manage** a ƙasa na site template da kake so ka yi amfani da shi. Za ka ga lambar SITE ID. Ka yi amfani da wannan lambar kawai don wannan site template na musamman ya zama mai zaɓi a wajen shiga checkout ɗinka. A wannan yanayin, parameter ɗin URL zai kasance **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Ina gaya maka cewa website na gida (network website) shine [**www.mynetwork.com**](http://www.mynetwork.com) kuma wajen shigarwa da wajen checkout ɗinmu yana kan hanyar **/register**. Duk URL-in da ya haɗa wannan site template mai zaɓi zai yi maka kamar haka: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kuma idan kana so ka zaɓi koyaushe (products) da templates a wajen shiga checkout ɗinka, duka abin da kake bukata shi ne ita ce a dubawa link na raba plan kuma ka saka parameter na template a ƙarshensa. Zai yi kamar haka: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
