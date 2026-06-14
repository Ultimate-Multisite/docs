---
title: Gudanar da Wurin
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# مدیریت سایت‌ها

سایت‌ها (یا زیرسایت‌ها) هسته کسب و کار WaaS شما هستند. Ultimate Multisite سه نوع سایت دارد:

- **مالک مشتری** — سایت‌هایی که متعلق به مشتریان خاص هستند
- **قالب‌های سایت** — سایت‌های از پیش تعریف شده‌ای که مشتریان می‌توانند آن‌ها را به عنوان نقطه شروع انتخاب کنند
- **سایت اصلی** — شبکه اصلی شما

## مشاهده سایت‌ها

برای دیدن تمام زیرسایت‌های شبکه خود، به مسیر **Ultimate Multisite → Sites** بروید. هر سایت با نوعش مشخص می‌شود و می‌توانید آن را بر اساس همه سایت‌ها (All Sites)، مالک مشتری (Customer-Owned)، قالب‌ها (Templates) یا در انتظار (Pending) فیلتر کنید.

![صفحه لیست سایت‌ها](/img/admin/sites-list.png)

## اضافه کردن یک سایت جدید

برای ایجاد یک سایت جدید، روی دکمه **Add Site** کلیک کنید. شما باید موارد زیر را ارائه دهید:

- **عنوان سایت (Site Title)** — نام سایت جدید
- **آدرس سایت (Site URL)** — دامنه/مسیر برای سایت
- **نوع سایت (Site Type)** — اینکه آیا این یک سایت مشتری، قالب یا سایت معمولی است

گزینه **Copy Site** به شما اجازه می‌دهد یک سایت جدید را بر اساس یک قالب سایت موجود ایجاد کنید. وقتی فعال شود، می‌توانید انتخاب کنید که از کدام قالب به عنوان نقطه شروع استفاده کنید. مطمئن شوید که **Copy Media on Duplication** برای شامل فایل‌های رسانه‌ای باشد.

## مدیریت یک سایت موجود

برای باز کردن صفحه **Edit Site** روی هر سایتی روی **Manage** کلیک کنید. در اینجا موارد زیر را خواهید یافت:

### اطلاعات پایه

نام سایت، نوع آن، شناسه سایت (Site ID) و توضیحات. همچنین دامنه نگاشت شده، عضویت مرتبط و حساب کاربری مشتری که مالک سایت است را مشاهده خواهید کرد.

### گزینه‌های سایت

قابلیت‌ها و محدودیت‌های سایت را پیکربندی کنید:

- **محدودیت بازدید (Visit limits)** — حداکثر تعداد بازدیدهای سایت
- **محدودیت حساب کاربری (User account limits)** — محدودیت‌های هر نقش کاربر
- **فضای دیسک (Disk space)** — سهم ذخیره‌سازی برای سایت
- **دامنه سفارشی (Custom domain)** — فعال کردن نگاشت دامنه برای این سایت
- **دید سایت‌ها و قالب‌ها (Plugin and theme visibility)** — کنترل اینکه کدام افزونه‌ها و قالب‌ها قابل مشاهده، پنهان یا از پیش فعال هستند

Akwai, a cikin gida da aka koya, wuraren yanar gizo suna bi ƙa'idar da aka sanya a matsayin yadda ake samun shiga (membership). Idan ka sanya ƙa'ida a matsayin wuri na site ɗin, wannan zai rage kafin ayyukan shiga.

### Shigarwa (Associations)

Da ƙasa za ka samu bayani game da:

- **Mapped domains** (yan gizo da aka haɗa) da ke shafi site
- **Membership** (shiga) da site yake bi a kansa
- **Customer account** (kaunan abokin ciniki) da aka haɗa da site

### Girar Wuri na Kananan Hanyar (Right Sidebar)

A gefen yau da kullum, za ka iya:

- **Enable/disable the site** (shigarwa ko rage shigarwa) ta hanyar wani babban abin da ake kira toggle button
- **Change the site type** (nau'in site ɗin) ko sake ba da mallakinsa
- **Set a site image/thumbnail** (hoton site/thumbnail) (wanda ake nuna shi a kan gidan farko don ƙirƙirar template na site)
- **Delete the site** (shafa site) dake da tsawon lokaci

:::warning
Shafa site ba shi da sauki. Site ɗin da kuma dukkan abubuwan da ke ciki za su ragu dake tsawon lokaci.
:::
