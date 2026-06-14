---
title: د تخفیف کوډونه جوړول
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Codes جوړول (v2)

_**مهم یادداشت: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

با Ultimate Multisite شما می‌توانید کدهای تخفیف بسازید تا به مشتریان خود برای اشتراکشان تخفیف بدهید. و ساختن آنها خیلی راحت است!

## ساخت و ویرایش کدهای تخفیف

برای ساخت یا ویرایش یک کد تخفیف، به **Ultimate Multisite > Discount Codes** بروید.

![لیست کدهای تخفیف — وضعیت خالی قبل از وجود هر کدی](/img/config/discount-codes-empty.png)

در آنجا لیستی از کدهای تخفیفی که قبلاً ساخته‌اید خواهید داشت.

شما می‌توانید روی **Add Discount Code** کلیک کنید تا یک کوپن جدید بسازید یا با نگه داشتن ماوس روی آنها و کلیک کردن روی **Edit**، کدها را ویرایش کنید.

![لیست کدهای تخفیف با اقدامات هاور نشان‌دهنده لینک‌های Edit و Delete](/img/config/discount-codes-list-hover.png)

![دکمه افزودن کد تخفیف در هدر صفحه](/img/config/discount-codes-add-button.png)

شما به صفحه‌ای هدایت می‌شوید که در آن کوپن کد خود را ایجاد یا ویرایش خواهید کرد. در این مثال، ما یک کد جدید می‌سازیم.

![صفحه ویرایش کد تخفیف با نمایش تمام بخش‌ها](/img/config/discount-code-edit.png)

بیایید نگاهی به تنظیمات موجود اینجا بیندازیم:

**Enter Discount Code (وارد کردن کد تخفیف):** این فقط نام کد تخفیف شماست. این کدی نیست که مشتریان در فرم پرداخت نیاز داشته باشند از آن استفاده کنند.

**Description (توضیحات):** در اینجا می‌توانید به طور خلاصه توضیح دهید که این کوپن برای چه چیزی است.

![فیلدهای نام و توضیحات کد تخفیف در بالای صفحه ویرایش](/img/config/discount-code-description.png)

شما همچنین می‌توانید وضعیت فعال یا غیرفعال کد تخفیف را مشاهده کنید:

![وضعیت فعال بودن کد تخفیف](/img/config/discount-code-active.png)

**Coupon code (کد کوپن):** اینجاست که شما کدی را تعریف می‌کنید که مشتریان باید هنگام پرداخت وارد آن شوند.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**کوبون کُد (Discount):** اینجا، شما اپنی ڈسکاؤنٹ کوڈ کے لیے یا تو **فیصد (%)** یا ایک **مبلغ کی مقررہ رقم** سیٹ کر سکتے ہیں۔

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**تجدید پر لاگو کریں (Apply to renewals):** اگر یہ آپشن بند ہے، تو یہ ڈسکاؤنٹ کوڈ صرف **پہلی ادائیگی** پر ہی لاگو ہوگا۔ باقی تمام ادائیگیاں بغیر کسی رعایت کے ہوں گی۔ اگر یہ آپشن آن ہے، تو یہ ڈسکاؤنٹ کوڈ مستقبل کی تمام ادائیگियों کے لیے درست رہے گا۔

**سیٹ اپ فیس ڈسکاؤنٹ (Setup fee discount):** اگر یہ آپشن بند ہے، تو کوپن کوڈ آرڈر کی **سیٹ اپ فیس پر کوئی رعایت نہیں دے گا**۔ اگر یہ آپشن آن ہے، تو آپ وہ رعایت (فیصد یا مقررہ رقم) سیٹ کر سکتے ہیں جو یہ کوپن کوڈ آپ کے پلانز کی سیٹ اپ فیس پر لاگو کرے گا۔

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**فعال (Active):** اس کوپن کوڈ کو دستی طور پر فعال یا غیر فعال کریں۔

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**ایڈوانس آپشنز (Advanced Options)** کے تحت، ہمارے پاس یہ سیٹنگز ہیں:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**استعمال کی حد (Limit uses):**

  * **استعمال (Uses):** یہاں، آپ دیکھ سکتے ہیں کہ ڈسکاؤنٹ کوڈ کتنی بار استعمال ہو چکا ہے۔

  * **زیادہ سے زیادہ استعمال (Max uses):** یہ اس بات کو محدود کرے گا کہ صارفین اس ڈسکاؤنٹ کوڈ کا کتنی بار استعمال کر سکتے ہیں۔ مثال کے طور پر، اگر آپ یہاں 10 رکھتے ہیں، تو کوپن صرف 10 بار استعمال ہو سکتا ہے۔ اس حد کے بعد، کوپن کوڈ کا استعمال دوبارہ نہیں کیا جا سکے گا۔

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**شروع او انقضا تاریخ‌ها:** اینجا شما کوپن (coupon) برای شروع تاریخ و/یا پایان تاریخ اضافه করার اختیار خواهید داشت.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**محصور کردن محصولات:** اگر گزینه **Select products** را روشن کنید، همه محصولات شما به شما نمایش داده می‌شوند. شما می‌توانید با روشن یا خاموش کردن آن، دستی انتخاب کنید که کدام محصول می‌تواند از این کد کوپن استفاده کند. محصولاتی که در اینجا خاموش هستند، اگر مشتریان سعی کنند از این کد کوپن برای آن‌ها استفاده کنند، هیچ تغییری نخواهند داشت.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

بعد از تنظیم همه این گزینه‌ها، روی **Save Discount Code** کلیک کنید تا کوپن خود را ذخیره کنید و کار تمام است!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

کوپن شما حالا در لیستتان است و از آنجا می‌توانید برای **edit or delete** (ویرایش یا حذف) روی آن کلیک کنید.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### استفاده از پارامترهای URL:

اگر می‌خواهید جداول قیمت خود را سفارشی کنید یا برای وب‌سایتتان یک صفحه کوپن کد زیبا بسازید و بخواهید به طور خودکار یک کد تخفیف را روی فرم پرداخت (checkout form) اعمال کنید، می‌توانید این کار را از طریق پارامترهای URL انجام دهید.

ابتدا، شما باید لینک قابل اشتراک (shareable link) برنامه خود را بگیرید. برای این کار، به **Ultimate Multisite > Products** بروید و یک طرح (plan) را انتخاب کنید.

روی دکمه **Click to Copy Shareable Link** کلیک کنید. این کار لینک قابل اشتراک مربوط به آن طرح خاص را به شما می‌دهد. در مورد ما، لینک قابل اشتراک داده شده [_**mynetworkdomain.com/register/premium/**_ بود._

![Product page with shareable link button](/img/config/products-list.png)

د دې ځانګړي پلانमा خپل تخفيضي کوډ (discount code) کارولایي، فقط **?discount_code=XXX** په پارامتر اضافه کړئ. چې **XXX** هغه کوپن کوډ دی.

په مثال کې مونږ د دې ځانګړي محصول لپاره کوپن کوډ **50OFF** کارولایو.

د دې ځانګړي پلان او 50OFF تخفيضي کوډ کارولو لپاره URL په لاندې ډول ښکاري: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
