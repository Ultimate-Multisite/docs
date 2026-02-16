---
title: قطعه‌کدهای GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# نحوه استفاده از کدهای آماده Ultimate Multisite در مخزن GitHub

در مخزن GitHub مجموعه‌ای از کدهای آماده وجود دارد که کاربران Ultimate Multisite اغلب به آن‌ها نیاز دارند. این کدها قابلیت‌های کوچکی را اضافه می‌کنند، مثلاً افزودن اسکریپت Google Analytics به صفحات ثبت‌نام یا پنهان کردن یک متاباکس از داشبورد مدیریت.

در این مقاله یاد می‌گیرید چطور از این کدها استفاده کنید و دقیقاً آن‌ها را کجا قرار دهید.

کدهای آماده را می‌توانید از لینک زیر دریافت کنید:

https://github.com/next-press/wp-ultimo-snippets/

دو روش برای اضافه کردن کد وجود دارد:

  1. در فایل functions.php قالب

  2. Must-Use Plugins (mu-plugins)

# نحوه افزودن کد به فایل functions.php قالب

  1. وارد داشبورد مدیریت شبکه WordPress شوید و به مسیر Themes > Theme Editor بروید (تصویر زیر را ببینید).

  2. در صفحه "Edit Themes"، مطمئن شوید که قالب فعال شما در منوی کشویی بالا سمت راست صفحه انتخاب شده است (شماره ۳ در تصویر زیر).

  3. روی فایل functions.php در بخش "Theme Files" کلیک کنید تا فایل بارگذاری شود. به انتهای فایل بروید و کد آماده Ultimate Multisite را که از مخزن GitHub دریافت کرده‌اید، آنجا قرار دهید.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# نحوه ایجاد Must-Use Plugins (mu-plugins)

WordPress قابلیتی دارد که به شما امکان می‌دهد کدهای سفارشی را به‌صورت "Must-Use Plugins" یا به اختصار "mu-plugins" بارگذاری کنید.

این mu-plugin‌های ویژه قبل از همه افزونه‌های معمولی بارگذاری می‌شوند و امکان غیرفعال کردن آن‌ها وجود ندارد. در یک شبکه چندسایتی، کدهای این mu-plugin‌ها روی تمام سایت‌های نصب شده اجرا می‌شوند.

1\. با استفاده از FTP یا SSH به فایل‌های WordPress خود دسترسی پیدا کنید.

2\. در پوشه wp-content، یک پوشه جدید با نام mu-plugins بسازید.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. با استفاده از Notepad یا هر ویرایشگر کد دیگری، یک فایل PHP جدید روی کامپیوترتان با نام wu-snippet.php بسازید.

4\. کد آماده Ultimate Multisite را که از مخزن GitHub دریافت کرده‌اید، در این فایل قرار دهید و ذخیره کنید. همچنین می‌توانید کد زیر را در ابتدای فایل اضافه کنید تا mu plugin شما برچسب داشته باشد.
