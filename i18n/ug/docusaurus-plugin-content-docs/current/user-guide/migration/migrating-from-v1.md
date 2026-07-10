---
title: V1-den geçiş yapmak
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1-den 2-ye geçmek (Migrating from V1) {#migrating-from-v1}

## Ultimate Multisite eski 1.x sürüm ailesinden 2.x sürüm ailesine geçti. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite sürüm 2.0 ve sonrası kodun tamamen yeniden yazılması demektir، یعنی قدیمی نسخه و جدید نسخه بینشون خیلی کم مشترک هست. به همین دلیل، وقتی از 1.x به 2.x ارتقا می‌کنید، باید داده‌های خودتون رو به فرمتی منتقل کنید که نسخه‌های جدید بتونش بفهمند.

خوشبختانه، Ultimate Multisite 2.0+ **یه ابزار مهاجرت (migrator) همراه داره** که توی هسته برنامه ساخته شده و می‌تونه داده‌ها رو از نسخه قدیمی تشخیص بده و اون‌ها رو به فرمت جدید تبدیل کنه. این انتقال در طول **Setup Wizard** نسخه 2.0+ انجام میشه.

این درس توضیح می‌ده که ابزار مهاجرت چطور کار می‌کنه، در صورت بروز خطا چه کاری باید انجام بدید، و چطور مشکلات احتمالی که ممکنه توی این فرآیند پیش بیاد رو حل کنید.

_**مهم: قبل از اینکه شروع به ارتقاء از نسخه 1.x به نسخه 2.0 کنید، حتماً یک بکاپ از دیتابیس سایت خود تهیه کنید**_

## اولین مراحل (First steps) {#first-steps}

اولین مرحله دانلود فایل .zip پلاگین و نصب نسخه 2.0 روی داشبورد مدیریت شبکه خود هست.

بعد از اینکه [نسخه 2.0 رو نصب و فعال کردید](../getting-started/installing-ultimate-multisite.md)، سیستم به طور خودکار تشخیص می‌ده که Multisite شما روی نسخه قدیمی اجرا میشه و این پیام رو در بالای صفحه پلاگین می‌بینید.

_**توجه:** اگر Ultimate Multisite 1.x رو روی Multisite خود نصب دارید، گزینه‌ای برای جایگزینی پلاگین با نسخه‌ای که همین الان دانلود کردید خواهید داشت. لطفاً روی **Replace current with uploaded (جایگزین کردن فعلی با آپلود شده)** کلیک کنید._

<!-- تصویر در دسترس نیست: صفحه پلاگین که گزینه جایگزینی v1 با نسخه آپلود شده v2 را نشان می‌دهد -->

الدوامك تالار، اون ييچ گلی چی legacy add-ons ها یی نصب کردین و همزمان نسخه ۱.x رو نشون بدهد. اون دهیلیش باشی که استفاده کردین نسخه ۲.۰ و یا بعد از migration باید add-on رو ارتقا بدین، باوەتار دستورالعمل میاره.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

وقتی آماده بودین که ادامه بدین، می‌تونید روی دکمه‌ای که نوشته **Visit the Installer to finish the upgrade** کلیک کنید.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

بعد اون شما رو به صفحه نصب wizard با چند تا پیام خوش‌آمدگویی هدایت می‌کنه. فقط کافیه روی **Get Started** کلیک کنید تا به صفحه بعدی بروید.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

بعد از کلیک روی **Get Started**، اون شما رو به Pre-install Checks_._ هدایت می‌کنه. این صفحه اطلاعات سیستم و نصب وردپرس شما رو نشون می‌ده و بهتون میگه که آیا با **Ultimate Multisite's requirements** مطابقت داره یا نه.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

مرحله بعدی وارد کردن license key Ultimate Multisite و فعال کردن plugin هست. این کار تضمین می‌کنه که همه ویژگی‌ها، از جمله add-ons، روی سایت شما در دسترس خواهند بود.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

بعد از وارد کردن کلید خود، روی **Agree & Activate** کلیک کنید.

بعد از فعال شدن license، می‌تونید با کلیک روی **Install** در صفحه بعدی نصب واقعی رو شروع کنید. این کار به صورت خودکار فایل‌ها و دیتابیس لازم برای کارکرد نسخه ۲.۰ رو ایجاد می‌کنه.

## حالا، انتقال (Migration) süreci {#now-the-migration}

Migrator'da bir güvenlik özelliği var; bu özellik, tüm multisite'ınızı kontrol ederek Ultimate Multisite verilerinizin herhangi bir sorun olmadan taşınabileceğini doğrular. Süreci başlatmak için **Run Check** butonuna tıklayın.

Sonra kontrolü çalıştırdıktan sonra iki ihtimalle karşılaşırsınız: sonuç ya hata ile **with an error** ya da hata olmadan **without an error**.

### Hata ile (With Error) {#with-error}

Eğer bir hata mesajı alırsanız, hatayı düzeltmenize yardımcı olmaları için destek ekibimizle iletişime geçmeniz gerekecek. Bir ticket oluştururken lütfen **hata kaydını (error log)** sağlamayı unutmayın. Kaydı indirebilirsiniz veya destek ekibimize ulaşacağınızı belirten bağlantıya tıklayabilirsiniz. Bu, sayfanızın sağ tarafında size önceden doldurulmuş alanlar içeren bir yardım widget'ı açacak ve hata kayıtlarını açıklamada göreceksiniz.

_**Sistem bir hata bulduğu için, 2.0 sürümüne geçemezsiniz. Hata düzeltilene kadar ağınızı çalıştırmaya devam etmek için 1.x sürümüne geri dönebilirsiniz.**_

### Hata Olmadan (Without Error) {#without-error}

Eğer sistem herhangi bir hata bulamazsa, bir başarı mesajı göreceksiniz ve aşağıda **Migrate** butonu olacak; bu butonla migrasyon işlemine devam edebilirsiniz. Bu sayfada, ilerlemeden önce veritabanınızın yedeğini almanız gerektiğini hatırlatacağız, ki bunu şiddetle tavsiye ediyoruz. Zaten bir yedeğiniz varsa **Migrate**'a basın.

Ve hepsi bu kadar!

سیر و کار را ادامه دهید تا لوگوی خود و شبکه شما را به‌روز کنید یا Ultimate Multisite نسخه ۲.۰ منو و رابط کاربری جدید را مرور کردن شروع کنید. برید و کمی خوش بگذرانید.
