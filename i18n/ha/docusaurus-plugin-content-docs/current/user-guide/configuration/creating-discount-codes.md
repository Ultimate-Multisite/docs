---
title: Gano Kodin Samun Daɗi
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ساخت کدهای تخفیف (نسخه ۲)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

با Ultimate Multisite شما می‌توانید کدهای تخفیف بسازید تا به مشتریان خود برای اشتراک‌هایشان تخفیف بدهید. و ساخت آن‌ها خیلی راحت است!

## ساخت و ویرایش کدهای تخفیف {#creating-and-editing-discount-codes}

برای ساخت یا ویرایش یک کد تخفیف، به **Ultimate Multisite > Discount Codes** بروید.

![لیست کدهای تخفیف — حالت خالی قبل از وجود هر کدی](/img/config/discount-codes-empty.png)

در آنجا لیستی از کدهای تخفیفی که قبلاً ساخته‌اید خواهید داشت.

می‌توانید روی **Add Discount Code** کلیک کنید تا یک کوپن جدید بسازید یا می‌توانید با نگه داشتن ماوس روی آن‌ها و کلیک کردن روی **Edit**، کدها را ویرایش کنید.

![لیست کدهای تخفیف با اقدامات هاور نشان دهنده لینک‌های Edit و Delete](/img/config/discount-codes-list-hover.png)

![دکمه افزودن کد تخفیف در هدر صفحه](/img/config/discount-codes-add-button.png)

شما به صفحه‌ای هدایت خواهید شد که در آن کوپن کد خود را می‌سازید یا ویرایش می‌کنید. در این مثال، ما یکی جدید می‌سازیم.

![صفحه ویرایش کد تخفیف با نمایش تمام بخش‌ها](/img/config/discount-code-edit.png)

بیایید نگاهی به تنظیمات موجود اینجا بیندازیم:

**Enter Discount Code (وارد کردن کد تخفیف):** این فقط نام کد تخفیف شماست. این کدی نیست که مشتریان شما باید در فرم پرداخت از آن استفاده کنند.

**Description (توضیحات):** در اینجا می‌توانید به طور خلاصه توضیح دهید که این کوپن برای چه چیزی است.

![فیلدهای نام و توضیحات کد تخفیف در بالای صفحه ویرایش](/img/config/discount-code-description.png)

همچنین می‌توانید وضعیت فعال یا غیرفعال کد تخفیف را مشاهده کنید:

![وضعیت فعال بودن کد تخفیف](/img/config/discount-code-active.png)

**Coupon code (کد کوپن):** اینجاست که کدی را تعریف می‌کنید که مشتریان باید هنگام پرداخت وارد آن شوند.

![Khaddar koodin wuri wuri inda inda dawowar wurin shigo](https://example.com/img/config/discount-code-coupon-field.png)

**Wuri:** A'a, a cikin wannan wurin za ka iya sanya ko **shari'a (percentage)** ko **ya'yan kuɗi na gaba (fixed amount)** ga koodin kupon ɗinka.

![Sanya yawan kupon da shari'a ko ya'yan kuɗi](https://example.com/img/config/discount-code-amount.png)

**Aiki ga sake samun:** Idan wannan zaɓin an yi shi (toggled off), wannan koodin kupon zai aiki kawai ga **samun kuɗi na farko**. Duk wani samun kuɗi da ya zo bayan hakan ba za su samu kupon. Idan wannan zaɓin an yi shi (toggled on), koodin kupon zai dace ga duk samun kuɗi masu zuwa.

**Kudin shiga:** Idan wannan zaɓin an yi shi (toggled off), koodin kupon **ba zai ba da wani kupon ga kuɗin shiga** na order ɗinka. Idan wannan zaɓin an yi shi (toggled on), za ka iya sanya kupon (shari'a ko ya'yan kuɗi) da zai dace ga kuɗin shiga na tsarin ku.

![Zaɓuwar aiki ga sake samun da kuɗin shiga](https://example.com/img/config/discount-code-renewals.png)

**Aiki:** Za ka iya samar ko rage wannan koodin kupon ne ta kai (manually activate or deactivate).

![Zaɓuwar aiki don samar ko rage koodin kupon manali](https://example.com/img/config/discount-code-active.png)

A ƙarƙashin **Advanced Options** (Zaɓuwar Girma), muna da waɗannan tsammanin:

![Zaɓuwar girman koodin kupon](https://example.com/img/config/discount-code-advanced.png)

**Bincike amfani:**

  * **Amfani (Uses):** A nan za ka iya gani yawan lokacin da aka yi amfani da koodin kupon.

  * **Daidai na amfani (Max uses):** Wannan zai rage yawan lokacin da masu amfani za su iya amfani da wannan koodin kupon. Misali, idan ka saka 10 nan, koodin kupon zai iya amfani da shi kawai 10 manfi. Binciken da ya yi tsakanawa ba za a iya amfani da koodin kupon dake.

![Sanya daidai na amfani tare da lamba na amfani da yawan amfani na yanzu da ƙaramin amfani](https://example.com/img/config/discount-code-limit-uses.png)

**تاریخ شروع و انقضا:** در اینجا شما می‌توانید یک تاریخ شروع و/یا تاریخ انقضای برای کوپن خود اضافه کنید.

![فیلدهای تاریخ شروع و انقضا برای زمان‌بندی کد تخفیف](/img/config/discount-code-dates.png)

**محدود کردن محصولات:** اگر گزینه **Select products** را روشن کنید، همه محصولات شما نمایش داده می‌شوند. شما می‌توانید به صورت دستی (با روشن یا خاموش کردن آن) انتخاب کنید که کدام محصول می‌تواند از این کد تخفیف استفاده کند. محصولاتی که در اینجا خاموش هستند، اگر مشتریان سعی کنند از این کد تخفیف برای آن‌ها استفاده کنند، هیچ تغییری نخواهند داشت.

![بخش محدود کردن محصولات با کلیدهای سوئیچ مخصوص هر محصول](/img/config/discount-code-limit-products.png)

بعد از تنظیم تمام این گزینه‌ها، روی **Save Discount Code** کلیک کنید تا کوپن خود را ذخیره کرده و کارتان تمام شود!

![دکمه Save Discount Code در پایین صفحه ویرایش](/img/config/discount-code-save.png)

کوپن شما حالا در لیست شماست و از آنجا می‌توانید برای **edit or delete** (ویرایش یا حذف) روی آن کلیک کنید.

![ردیف کد تخفیف در لیست با عمل ها روی Edit و Delete](/img/config/discount-codes-list-hover.png)

###

### استفاده از پارامترهای URL: {#using-url-parameters}

اگر می‌خواهید جداول قیمت خود را سفارشی کنید یا یک صفحه کد تخفیف زیبا برای وب‌سایت خود بسازید و بخواهید به طور خودکار یک کد تخفیف را در فرم پرداخت خود اعمال کنید، می‌توانید این کار را از طریق پارامترهای URL انجام دهید.

ابتدا، شما باید لینک قابل اشتراک (shareable link) برنامه خود را دریافت کنید. برای این کار، به **Ultimate Multisite > Products** بروید و یک طرح (plan) را انتخاب کنید.

روی دکمه **Click to Copy Shareable Link** کلیک کنید. این کار لینک قابل اشتراک مربوط به آن طرح خاص را به شما می‌دهد. در مورد ما، لینک قابل اشتراک داده شده [_**mynetworkdomain.com/register/premium/**_ بود.

![صفحه محصول با دکمه لینک قابل اشتراک](/img/config/products-list.png)

Donawa don amfani da kudin rashin kuɗi (discount code) a wannan tsarin, ka ƙara lambar **?discount_code=XXX** ga URL ɗin. Inda **XXX** shine kudin kupon ɗin.

A misalinmu nan, za mu yi amfani da kudin kupon **50OFF** ga wannan kayan musamman.

URL na wannan tsarin musamman tare da a bayar da kudin rashin kuɗi 50OFF zai yi kamar haka: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
