---
title: ساخت کۆدێنانی کەمکردنەوەکان
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# دروستکردنی کدهای تخفیف (نسخه ۲)

_**نکته مهم: این مقاله به نسخه ۲.x Ultimate Multisite اشاره دارد.**_

با Ultimate Multisite می‌تونید کدهای تخفیف بسازید تا به مشتریانتان برای اشتراک‌هایشان تخفیف بدهید. و ساختن آن‌ها خیلی راحته!

## ایجاد و ویرایش کدهای تخفیف

برای ساخت یا ویرایش یک کد تخفیف، به مسیر **Ultimate Multisite > Discount Codes** بروید.

![لیست کدهای تخفیف — حالت خالی قبل از وجود هر کدی](/img/config/discount-codes-empty.png)

در آنجا لیستی از کدهای تخفیفی که قبلاً ساخته‌اید خواهید داشت.

می‌توانید روی **Add Discount Code** کلیک کنید تا یک کوپن جدید بسازید، یا می‌توانید با نگه داشتن ماوس روی آن‌ها و کلیک کردن روی **Edit**، کدها را ویرایش کنید.

![لیست کدهای تخفیف با نشان دادن لینک‌های Edit و Delete هنگام هاور](/img/config/discount-codes-list-hover.png)

![دکمه افزودن کد تخفیف در هدر صفحه](/img/config/discount-codes-add-button.png)

شما به صفحه‌ای هدایت می‌شوید که در آن کوپن کد خود را ایجاد یا ویرایش خواهید کرد. در این مثال، ما یک کد جدید می‌سازیم.

![صفحه ویرایش کد تخفیف با نمایش تمام بخش‌ها](/img/config/discount-code-edit.png)

بیایید نگاهی به تنظیمات موجود اینجا بیندازیم:

**Enter Discount Code (وارد کردن کد تخفیف):** این فقط نام کد تخفیف شماست. این کدی نیست که مشتریان در فرم پرداخت نیاز داشته باشند از آن استفاده کنند.

**Description (توضیحات):** در اینجا می‌توانید به طور خلاصه توضیح دهید که این کوپن برای چه چیزی است.

![فیلدهای نام و توضیحات کد تخفیف در بالای صفحه ویرایش](/img/config/discount-code-description.png)

همچنین می‌توانید وضعیت فعال یا غیرفعال بودن کد تخفیف را مشاهده کنید:

![وضعیت فعال بودن کد تخفیف](/img/config/discount-code-active.png)

**Coupon code (کد کوپن):** اینجاست که کدی را تعریف می‌کنید که مشتریان باید هنگام پرداخت وارد آن شوند.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**تخفیف:** لەم شوێنە دەتوانیت یەکێک لە **پێنزۆنەکە (percentage)** یان **بەرەهێنانێکی دیاریکراو (fixed amount)** بۆ کۆد تخفیفتان دیاری بکەیت.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**بۆ نوێکردنەوەی خزمەتگوزارییەکاندا بەکارهێنانی:** ئەگەر ئەم کارە دەستکاری بکرێت وەک نادیر (off)، ئەم کۆد تخفیفە تەنها بۆ **پێشەم پێیەتی** بەکار دەهێنرێت. هەموو بڕیەکانی دیکە تخفیفیان نییە. ئەگەر ئەم کارە چالاک بکرێت (on)، کۆد تخفیفەکە بۆ هەموو بڕی داهاتوو بەستراوەتەوە.

**تخفیفی بۆ کارگێڕکردنی سیستەم:** ئەگەر ئەم کارە نادیر بکرێت، کۆد تخفیفەکە **هیچ تخفیفی بۆ کارگێڕکردنی سەرەتایی (setup fee)**ی داواکارییەکە نادات. ئەگەر ئەم کارە چالاک بکرێت، دەتوانیت تخفیفێک دیاری بکەیت (پێنزۆن یان بەرەهێنانێکی دیاریکراو) کە ئەم کۆد تخفیفە بۆ کارگێڕکردنی سەرەتایی پلاندانانەکەت بەکار بهێنێت.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**چالاک (Active):** دەتوانیت ئەم کۆد تخفیفە بە شێوەیەکی دەستکرد چالاک یان نادیر بکەیتەوە.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

لە **Advanced Options** (بۆری تایبەت)، ئەم ڕێکخستنە هەیە:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**محدودکردنی بەکارهێنان:**

  * **Uses (بەکارهێنانی):** لەم شوێنە دەتوانیت ببینیت چەند جار کۆد تخفیفەکە بەکار هاتووە.

  * **Max uses (ماکزیمال بەکارهێنان):** ئەمە ڕێگری دەکات لەو کاتەی بەکارهێنەران دەتوانن ئەم کۆد تخفیفە بەکار بهێنن. بۆ نموونە، ئەگەر 10 لێرە بنووسیت، کۆد تخفیفەکە تەنها 10 جار دەتوانیت بەکار بهێنرێت. دوای ئەم سنوورە، زیاتر ناتوانرێت بەکاری بهێنرێت.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**تاريخ شروع و انقضا:** اینجا شما می‌توانید برای کوپن خود یک تاریخ شروع و/یا تاریخ انقضا اضافه کنید.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**محدود کردن محصولات:** اگر گزینه **Select products** را روشن کنید، همه محصولات شما نمایش داده می‌شوند. شما می‌توانید به صورت دستی (با روشن یا خاموش کردن آن) انتخاب کنید که کدام محصول می‌تواند از این کد کوپن استفاده کند. محصولاتی که در اینجا غیرفعال هستند، اگر مشتریان سعی کنند از این کد کوپن برای آن‌ها استفاده کنند، تغییری نخواهند داشت.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

بعد از تنظیم تمام این گزینه‌ها، روی **Save Discount Code** کلیک کنید تا کوپن خود را ذخیره کنید و کار تمام است!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

کوپن شما حالا در لیستتان قرار دارد و از آنجا می‌توانید برای **edit or delete** (ویرایش یا حذف) روی آن کلیک کنید.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### استفاده از پارامترهای URL:

اگر می‌خواهید جداول قیمت خود را سفارشی کنید یا یک صفحه کد کوپن زیبا برای وب‌سایتتان بسازید و بخواهید به طور خودکار یک کد تخفیف را در فرم پرداخت (checkout form) خود اعمال کنید، می‌توانید این کار را از طریق پارامترهای URL انجام دهید.

ابتدا، باید لینک قابل اشتراک (shareable link) مربوط به طرح خود را دریافت کنید. برای این کار، به **Ultimate Multisite > Products** بروید و یک طرح را انتخاب کنید.

روی دکمه **Click to Copy Shareable Link** کلیک کنید. این کار لینک قابل اشتراک مخصوص آن طرح خاص را به شما می‌دهد. در مورد ما، لینک قابل اشتراک داده شده [_**mynetworkdomain.com/register/premium/**_ بود._

![Product page with shareable link button](/img/config/products-list.png)

بۆ ئەوەی کۆدێسکونی خۆت بۆ ئەم پلانی تایبەتە بەکاربهێنیت، تەنها پارامێترەکەی **?discount_code=XXX** لەسەر URLەکە زیاد بکە. کە XXX ئەو کۆدی کوپنە.

لە نموونەی ئێمەدا، ئێمە کۆدێسکونی **50OFF** بۆ ئەم بەرهەمە تایبەتە دەکارین بەکاربهێنین.

URLی ئەم پلانی تایبەتە و لەگەڵ کۆدێسکونی 50OFF زیادکراوە، وەک ئەمە دەربکەوێت: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
