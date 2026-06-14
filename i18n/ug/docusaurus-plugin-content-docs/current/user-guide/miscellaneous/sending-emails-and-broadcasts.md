---
title: E-mail va yirik xabar yuborish
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ইমেল gönderme və Yayım (v2)

_**ÇOX VACİB QEYD: Bu məqalə Ultimate Multisite versiya 2.x-i nəzərdə tutur.**_

Ultimate Multisite-da müştərilərlə əlaqə qurmaq üçün həm birbaşa e-poçt göndərməyə, həm də onların admin panellərinə xəbər yaymaq üçün elanlar göndərməyə imkan verən bir funksiya var.

## Yayım (Broadcasts) ilə müştərilərin panellərinə admin xəbərləri əlavə edin

Ultimate Multisite-ın yayım funksiyasını istifadə edərək, siz **admin xəbərlərini** istifadəçinizin alt saytının admin paneli (subsite admin dashboard) üzərinə əlavə edə bilərsiniz.

Bu, sistemin texniki baxımdan təmizlənməsi kimi elanlar etmək və ya mövcud müştərilərə yeni məhsullar və xidmətlər təklif etmək kimi işlər görmək istəsəniz çox faydalıdır. Admin xəbər sizin istifadəçinizin paneli üzərində belə görünəcək.

<!-- Screenshot unavailable: Müştəri alt saytının paneli üzərində admin xəbər yayımı göstərilir -->

Admin xəbərini başlatmaq üçün şəbəkə admin panellərinizə gedin və **Ultimate Multisite** menyusunun altında **Broadcasts** (Yayımlar) seçənəyini tapacaqsınız.

![Ultimate Multisite adminində Yayımlar siyahısı səhifəsi](/img/admin/broadcasts-list.png)

Mövcud yayımları redaktə edə bilərsiniz:

![Yayım redaktə interfeysi](/img/admin/broadcast-edit.png)

Bu səhifədən yuxarıdakı **Add Broadcast** (Yayım əlavə et) düyməsinə klikləyin.

Bu, hansı növ yayımı göndərmək istədiyinizi seçə biləcəyiniz Add broadcast modal pəncərəsini açacaq.

Sadəcə **Message** (Məktub/Xəbər) seçin və sonra **Next Step** (Növbəti addım) düyməsinə basın.

![Message seçilmiş yayım əlavə et modal pəncərəsi](/img/admin/broadcast-add-message.png)

Növbəti pəncərə sizdən ya **Target customer** (Hədəf müştəri) və ya **Target product** (Hədəf məhsul) soruşacaq. Qeyd edin ki, birbiri ilə daha çox istifadəçini və ya daha çox məhsulu seçə bilərsiniz.

کاربر حساب یا محصول جستجو کردن برای پیدا کردنشون باید کلمه مورد نظرت رو داخل فیلد تایپ کنی.

زیر فیلد **Message type** (نوع پیام)، می‌تونی رنگ اطلاعیه رو انتخاب کنی. این کار اهمیت فوری پیام شما رو بیشتر نشان میده.

بعد می‌تونی روی **Next Step** کلیک کنی.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

پنجره بعدی جاییه که می‌تونی با وارد کردن موضوع و محتوای پیام مورد نظرت برای کاربران، شروع به نوشتن پیام کنی.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

بعد از ساختن پیام، می‌تونی روی دکمه **Send** کلیک کنی.

و همین. اطلاعیه مدیر باید بلافاصله روی داشبورد کاربر نمایش داده بشه.

## ارسال ایمیل به مشتریان خود

با استفاده از قابلیت پخش (broadcast feature) Ultimate Multisite، می‌تونی یک ایمیل به کاربران خود بفرستی. شما این امکان رو دارید که ایمیل رو فقط برای کاربران خاصی بفرستی یا بر اساس محصول یا طرحی که آنها مشترک هستن، روی یک گروه خاص از کاربران هدف قرار بدی.

برای شروع پخش ایمیل، به داشبورد مدیر شبکه (network admin dashboard) خود برو و در منوی Ultimate Multisite، گزینه Broadcast رو پیدا خواهی کرد.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

از این صفحه، روی دکمه **Add broadcast** در بالا کلیک کن.

این کار پنجره مودال (modal window) Add broadcast رو باز می‌کنه که می‌تونی انتخاب کنی چه نوع پخشی رو می‌خوای بفرستی. برو و **Email** رو انتخاب کن بعد روی دکمه **Next Step** کلیک کن.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

پنجره بعدی ازت می‌پرسه که یا **Target customer** (مشتری هدف) یا **Target product** (محصول هدف) رو انتخاب کنی. توجه داشته باش که می‌تونی بیش از یک کاربر یا بیش از یک محصول را انتخاب کنی.

یک کاربر حساب یا محصول را جستجو کردن برای هر دو، باید کلمه کلیدی را داخل فیلد تایپ کنید.

وقتی مخاطب هدف خود را انتخاب کردید، می‌توانید روی **Next Step** کلیک کنید.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

پنجره بعدی جایی است که می‌توانید با وارد کردن موضوع و محتوا/پیامی که می‌خواهید به کاربران بفرستید، شروع به نوشتن ایمیل خود کنید.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

بعد از ساخت پیام خود، می‌توانید روی دکمه **Send** کلیک کنید.

و این هم اینکه چقدر ارسال ایمیل به کاربران نهایی با قابلیت broadcast خیلی آسان است.

## ایمیل‌های سیستمی (System emails)

ایمیل‌های سیستمی در Ultimate Multisite، آن **اطلاعیه‌های خودکار** هستند که سیستم بعد از کارهای خاصی مثل ثبت‌نام، پرداخت، نگاشت دامنه و غیره ارسال می‌کند. این ایمیل‌ها را می‌توان از تنظیمات Ultimate Multisite ویرایش یا تغییر داد. همچنین یک قابلیت وجود دارد که به شما اجازه می‌دهد تنظیمات موجود را از نصب دیگر Ultimate Multisite بازنشانی (reset) کرده و وارد کنید (import).

### بازنشانی و وارد کردن (Resetting & Importing)

نسخه‌های جدید Ultimate Multisite، و همچنین افزونه‌ها، گاهی ایمیل‌های جدیدی ثبت می‌کنند.

برای جلوگیری از تداخل و مشکلات دیگر، **ما قالب‌های ایمیل جدید را به صورت خودکار به عنوان ایمیل‌های سیستمی در نصب شما اضافه نمی‌کنیم**، مگر اینکه برای عملکرد صحیح یک ویژگی خاص حیاتی باشند.

با این حال، سوپر ادمین‌ها (super admins) و آژانس‌ها می‌توانند این ایمیل‌های تازه ثبت شده را از طریق ابزار importer وارد کنند. این فرآیند یک ایمیل سیستمی جدید با محتوا و تنظیمات قالب ایمیل جدید ایجاد می‌کند تا سوپر ادمین بتواند هر تغییری که بخواهد ایجاد کند یا آن را همان‌طور که هست نگه دارد.

#### نحوه وارد کردن ایمیل‌های سیستمی (How to import system emails)

Ultimate Multisite Ayarlar saytına gidin ve **Emails** sekmesine geçin.

![Ultimate Multisite ayarlarındaki Emails sekmesi, Sistem E-postaları bölümünü gösteriyor](/img/config/settings-emails-tab.png)

Sonra, yan menüden **Customize System Emails** düğmesine tıklayın.

<!-- Screenshot unavailable: Sistem E-Postalarını Özelleştirme düğmesi, Sistem E-Postaları yan panelinde gösteriliyor -->

Sistem E-Postaları sayfasında en üstte **Reset & Import** eylem düğmesini göreceksiniz. Bu düğmeye tıkladığınızda import ve sıfırlama penceresi açılacaktır.

![Sistem E-Postaları yönetim sayfasındaki Reset veya Import eylem düğmesi](/img/admin/system-emails-reset-import.png)

Ardından, Import Emails seçeneklerini açarak hangi sistem e-postalarının içe aktarılabileceğini görebilirsiniz.

<!-- Screenshot unavailable: Import Emails seçenekleri genişletilmiş olan Reset ve Import modalı -->

#### Sistem E-Postalarını Sıfırlama

Bazen, belirli bir e-posta şablonuna yaptığınız değişikliklerin artık işe yaramadığını fark edebilir ve onu **varsayılan durumuna** sıfırlamak isteyebilirsiniz.

Bu durumlarda iki seçeneğiniz var: ya sistem e-postasını tamamen silip (yukarıdaki talimatları kullanarak) tekrar içe aktarabilirsiniz - bu, gönderim metriklerini ve diğer şeyleri sileceği için bu yöntem en az tercih edilen yöntemdir.

Ya da o e-posta şablonunu sıfırlamak için **Reset & Import tool**'u kullanabilirsiniz.

Bir e-posta şablonunu sıfırlamak için yukarıdaki adımları izleyip Reset & Import aracına ulaşırsınız ve ardından **Reset** seçeneğini açıp varsayılan içeriğe geri döndürmek istediğiniz e-postaları seçebilirsiniz.

<!-- Screenshot unavailable: Reset ve Import seçenekleri genişletilmiş olan Reset E-posta sıfırlama modalı -->
