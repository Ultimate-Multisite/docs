---
title: ثبت‌نام حساب کاربری از طریق Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# رویداد: ثبت حساب کاربری از طریق Zapier

در مقاله [ادغام Ultimate Multisite با Zapier](zapier.md)، درباره نحوه استفاده از Zapier برای انجام اقدامات مختلف در Ultimate Multisite بر اساس تریگرها و رویدادها صحبت کردیم. در این مقاله، نشان می‌دهیم چگونه می‌توانید اپلیکیشن‌های شخص ثالث را یکپارچه کنید. ما از Google Sheets به عنوان منبع داده استفاده می‌کنیم و اطلاعات را برای ثبت حساب کاربری به Ultimate Multisite ارسال می‌کنیم.

ابتدا باید یک **Google Sheet** در Google Drive خود ایجاد کنید. مطمئن شوید که هر ستون را به درستی تعریف کرده‌اید تا بعداً بتوانید داده‌ها را به راحتی نگاشت کنید.

![Google Sheet با ستون‌هایی برای داده‌های مشتری](/img/admin/webhooks-list.png)پس از ایجاد Google Sheet، می‌توانید وارد حساب Zapier خود شوید و شروع به ساخت یک zap کنید.

![داشبورد Zapier برای شروع ساخت یک zap](/img/admin/webhooks-list.png)در فیلد جستجوی **"App event"** گزینه **"Google Sheets"** را انتخاب کنید.

![انتخاب Google Sheets به عنوان app event](/img/admin/webhooks-list.png)

سپس برای فیلد "**Event**" گزینه "**New spreadsheet row**" را انتخاب کنید و دکمه "**Continue**" را بزنید.

![انتخاب رویداد New spreadsheet row در Zapier](/img/admin/webhooks-list.png)مرحله بعدی از شما می‌خواهد که **Google Account** ای که **Google Sheet** در آن ذخیره شده را انتخاب کنید. پس فقط مطمئن شوید که حساب گوگل درست مشخص شده است.

![انتخاب Google Account برای Google Sheet](/img/admin/webhooks-list.png)

در بخش "**Set up trigger**"، باید صفحه گسترده و کاربرگ گوگلی که داده‌ها از آن می‌آیند را انتخاب و مشخص کنید. کافی است این موارد را پر کنید و دکمه "**Continue**" را بزنید.

![تنظیم تریگر با انتخاب صفحه گسترده و کاربرگ](/img/admin/webhooks-list.png)مرحله بعد "**test your trigger**" است تا مطمئن شوید که Google Sheet شما به درستی متصل شده است.

![مرحله تست تریگر در Zapier](/img/admin/webhooks-list.png)اگر تست موفقیت‌آمیز باشد، باید نتیجه‌ای ببینید که مقادیری از صفحه گسترده شما را نشان می‌دهد. روی "**Continue**" کلیک کنید تا ادامه دهید.

![تست موفق تریگر که مقادیر صفحه گسترده را نشان می‌دهد](/img/admin/webhooks-list.png)مرحله بعدی تنظیم اکشن دوم است که یک حساب کاربری در Ultimate Multisite ایجاد یا ثبت می‌کند. در فیلد جستجو "**Ultimate Multisite(2.0.2)**" را انتخاب کنید.

![انتخاب Ultimate Multisite به عنوان اپلیکیشن اکشن](/img/admin/webhooks-list.png)

در فیلد "**Event**"، گزینه "**Register an Account in Ultimate Multisite**" را انتخاب کنید و سپس دکمه "**Continue**" را بزنید.

![رویداد اکشن Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)در بخش "**Set up an action**"، فیلدهای مختلفی برای داده‌های مشتری، عضویت‌ها، محصولات و غیره می‌بینید. می‌توانید مقادیر موجود در Google Sheet خود را نگاشت کنید و آن‌ها را به فیلد مناسبی که باید پر شوند اختصاص دهید، همان‌طور که در تصویر زیر نشان داده شده است.

![نگاشت مقادیر Google Sheet به فیلدهای Ultimate Multisite](/img/admin/webhooks-list.png)

پس از نگاشت مقادیر، می‌توانید اکشن را تست کنید.

![تست اکشن ثبت حساب کاربری در Zapier](/img/admin/webhooks-list.png)
