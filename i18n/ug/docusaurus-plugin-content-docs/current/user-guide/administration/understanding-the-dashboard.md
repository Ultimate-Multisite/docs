---
title: لوحة التحكمны тушунۇش
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Dashboard'u Anlamak

Ultimate Multisite'ın daha gelişmiş ayar seçeneklerine ve operasyonel yönlerine dalmadan önce, dashboard'a bir göz atalım.

WordPress eklentilerinin çoğu gibi, Ultimate Multisite **Ultimate Multisite** başlıklı ağ düzeyinde bir menü girişi oluşturur ve bunun altında birkaç alt menü girişi bulunur.

## Network Dashboard Widget'ları (Ağ Paneli Widget'ları) {#network-dashboard-widgets}

Ultimate Multisite, ağ düzeyindeki dashboard'a birkaç faydalı widget ekler. Bu dashboard'a gitmek için **My Sites → Network Admin → Dashboard** yolunu izleyin. Bu widget'lar ağ yöneticisine bilgiye ve yaygın işlemlere kolay erişim sağlamak için tasarlanmıştır.

![Ultimate Multisite widget'ları ile Ağ Paneli](/img/admin/network-dashboard-full.png)

### İlk Adımlar (First Steps) {#first-steps}

![İlk Adımlar widget'ı](/img/admin/network-dashboard-first-steps.png)

Bu widget, Ultimate Multisite'ın yeni bir kurulumunda görünür ve ağ yöneticisine ödeme yöntemini yapılandırma ve test hesabı oluşturma gibi ek görevleri tamamlaması gerektiğini hatırlatır.

### Özet (Summary) {#summary}

![Özet widget'ı](/img/admin/network-dashboard-summary.png)

Özet widget'ı gün içindeki kayıt sayılarını ve bu kayıtlardan elde edilen geliri raporlar. MRR (Aylık Tekrarlayan Gelir), gelir getiren üyeliklere sahip müşteriler genelinde beklenen toplam tutarı gösterir.

### Aktivite Akışı (Activity Stream) {#activity-stream}

![Aktivite Akışı widget'ı](/img/admin/network-dashboard-activity-stream.png)

Bu widget, Ultimate Multisite genelindeki olayları raporlar. Olaylar arasında kayıtlar, iptaller, site oluşturmalar, silinmeler ve diğer aktiviteler bulunur.

Daha ayrıntılı bir açıklama için lütfen dokümantasyonun Olaylar (Events) bölümüne bakın.

### Şu Anda (Right Now) {#right-now}

![Şu Anda widget'ı](/img/admin/network-dashboard-right-now.png)

این ابزار ویجت خلاصه‌ای کوتاه از کاربران و سایت‌های شبکه را نمایش می‌دهد. میانبرهای بالای آن به شما اجازه می‌دهند با یک کلیک به ایجاد سایت‌ها یا کاربران جدید دسترسی پیدا کنید.

### اخبار و بحث‌ها {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

این ویجت آخرین اخبار Ultimate Multisite را دریافت و نمایش می‌دهد. برای اطلاعات در مورد به‌روزرسانی‌ها، باگ‌های مهم و رفع مشکلات امنیتی به این ویجت توجه کنید.

## داشبورد Ultimate Multisite {#ultimate-multisite-dashboard}

در حالی که داشبورد سطح شبکه اطلاعات کلی در مورد کل شبکه را نشان می‌دهد، داشبورد Ultimate Multisite (که در منوی سطح بالا در Ultimate Multisite قرار دارد) اطلاعات مربوط به سرویس را نمایش می‌دهد.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### رشد درآمد تکرارشونده ماهانه (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

نمودار MRR (درآمد تکرارشونده ماهانه) یک تفکیک ماهانه از درآمد را در طول یک دوره ۱۲ ماه تقویمی نشان می‌دهد.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

درآمد جدید با رنگ آبی و لغو اشتراک‌ها با رنگ قرمز نمایش داده می‌شود.

### پشتیبانی محدوده تاریخ (Date-range Support) {#date-range-support}

بسته به تعداد مشتریان و فعالیت، آمار می‌توانند گیج‌کننده شوند. پشتیبانی محدوده‌تاریخ که در داشبورد تعبیه شده است، به مدیر شبکه اجازه می‌دهد فقط روی اطلاعات و بازه زمانی مورد نیاز تمرکز کند.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

محدوده تاریخ بر دوره‌ای از اطلاعات نمایش داده شده توسط ویجت‌های زیر مستقیماً، از جمله درآمد، عضویت‌های جدید، ثبت‌نام‌ها بر اساس کشور، ثبت‌نام‌ها بر اساس فرم و پربازدیدترین سایت‌ها حاکم است.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
برای اینکه ویجت **Most Visited Sites** کار کند، لطفاً در مسیر **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting** (فعال کردن محدودیت و شمارش بازدیدها) گزینه شمارش بازدید را فعال کنید.
:::
