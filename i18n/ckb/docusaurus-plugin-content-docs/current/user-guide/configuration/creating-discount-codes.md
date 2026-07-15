---
title: ساخت کۆدەکانی کەمکردنەوە
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# دروستکردنی كۆدي تخفيض (v2)

_**تێبینی گرنگ: ئەم بابەتە ئاماژەیە بۆ Ultimate Multisite وەرگرتینی 2.x.**_

لەگەڵ Ultimate Multisite دەتوانیت کۆدی تخفيض دروست بکەیت بۆ ئەوەی بەکارهێنەرەکانت تخفیف لەسەر سابسکرایبەکانیان بدەن. و دروستکردنیان ئاسانە!

## دروستکردن و دەستکاری كۆدی تخفيض {#creating-and-editing-discount-codes}

بۆ دروستکردن یان دەستکاری كۆدی تخفيض، بگواشبە **Ultimate Multisite > Discount Codes**.

![لیستی کۆدەکانی تخفيض — دۆخی پەت (empty state) پێش ئەوەی هیچ کۆدێک نەبوو](/img/config/discount-codes-empty.png)

لێرە لیستی ئەو کۆدەکانی تخفيض دەبینیت کە لە ئێستادا دروست کردووە.

دەتوانیت لەسەر **Add Discount Code** (زیادکردنی كۆدی تخفيض) بڵێیت بۆ دروستکردنی كۆدێکی نوێ یان دەتوانیت ئەوانە بگۆڕیت بە دەستکێشاندن و 클릭 کردنەوەی **Edit**.

![لیستی کۆدەکانی تخفيض لەگەڵ کارلێکە دەستکێشان (hover actions) کە لینکەکانی Edit و Delete دەردەخەن](/img/config/discount-codes-list-hover.png)

![دۆخی دڵنیایی كۆدی تخفيض لە سەری پەیجەکەدا](/img/config/discount-codes-add-button.png)

بۆ ئەو پەیجە دەڕۆیت کە لەوێ دروست یان دەستکاری کۆدی تخفیضت دەکەیت. لەم نموونەدا، ئێمە یەکێکی نوێ دروست دەکەین.

![پەیجی دەستکاری كۆدی تخفيض کە هەموو بەشەکان دیارن](/img/config/discount-code-edit.png)

بۆ ئەوەی ببینین ئەو ڕێکخراوان (settings) هەن لەم شوێنە:

**Enter Discount Code:** ئەمە تەنها ناوی كۆدی تخفيضتە. ئەمە کۆدێک نییە کە بەکارهێنەرەکانت پێویستیان بەکاربهێنن لە فۆرمەکەدا.

**Description:** لێرەدا دەتوانیت بە کورتی باس بکەیت کە ئەم کوپنە بۆ چییە.

![فیلدەکانی ناوی كۆدی تخفيض و وەسفییەک لە سەرەوەی پەیجی دەستکاری](/img/config/discount-code-description.png)

دەتوانیت کۆدی تخفيضەکە بە چالاک یان نادەستووە ببینیت:

![دۆخی چالاکی كۆدی تخفيض](/img/config/discount-code-active.png)

**Coupon code:** لێرە دەتوانیت ئەو کۆدان دیاری بکەیت کە بەکارهێنەرەکانت پێویستیان بە پێکەنین لە کاتی دابینکردنی شاپۆڕی (checkout) دەبێت.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Lir, le tu peux définir soit un **pourcentage**, soit un **montant fixe** d'argent pour votre code de réduction.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Appliquer aux renouvellements :** Si cette option est désactivée, ce code de réduction ne sera appliqué qu'au **premier paiement**. Tous les autres paiements n'auront pas de réduction. Si cette option est activée, le code de réduction sera valable pour tous les paiements futurs.

**Réduction sur les frais d'installation :** Si cette option est désactivée, le code coupon ne donnera **aucune réduction pour les frais d'installation** de la commande. Si cette option est activée, vous pouvez définir la réduction (pourcentage ou montant fixe) que ce code coupon appliquera aux frais d'installation de vos plans.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Actif :** Activez ou désactivez manuellement ce code coupon.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Sous **Options avancées**, nous avons les réglages suivants :

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limiter les utilisations :**

  * **Utilisations :** Ici, vous pouvez voir combien de fois le code de réduction a été utilisé.

  * **Utilisations maximales :** Ceci limitera le nombre de fois où les utilisateurs peuvent utiliser ce code de réduction. Par exemple, si vous mettez 10 ici, le coupon ne pourra être utilisé que 10 fois. Après cette limite, le code de réduction ne pourra plus être utilisé.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

تاريخ شروع و انقضا: در اینجا می‌توانید یک تاریخ شروع و/یا تاریخ انقضای برای کوپن خود اضافه کنید.

![فیلدهای تاریخ شروع و انقضا برای زمان‌بندی کد تخفیف](/img/config/discount-code-dates.png)

محدود کردن محصولات: اگر گزینه **Select products** را روشن کنید، همه محصولات شما نمایش داده می‌شوند. شما می‌توانید به صورت دستی (با روشن یا خاموش کردن آن) انتخاب کنید که کدام محصول می‌تواند از این کد کوپن استفاده کند. محصولاتی که در اینجا غیرفعال هستند، اگر مشتریان سعی کنند از این کد کوپن برای آن‌ها استفاده کنند، تغییری نخواهند داشت.

![بخش محدود کردن محصولات با کلیدهای سوئیچ مخصوص هر محصول](/img/config/discount-code-limit-products.png)

بعد از تنظیم تمام این گزینه‌ها، روی **Save Discount Code** کلیک کنید تا کوپن خود را ذخیره کرده و کار تمام شود!

![دکمه Save Discount Code در پایین صفحه ویرایش](/img/config/discount-code-save.png)

کوپن شما اکنون در لیستتان است و از آنجا می‌توانید برای **edit یا delete** (ویرایش یا حذف) روی آن کلیک کنید.

![ردیف کد تخفیف در لیست با عمل ها روی Edit و Delete هنگام نگه داشتن موس](/img/config/discount-codes-list-hover.png)

### استفاده از پارامترهای URL: {#using-url-parameters}

اگر می‌خواهید جداول قیمت‌گذاری خود را سفارشی کنید یا یک صفحه کد تخفیف زیبا برای وب‌سایت خود بسازید و بخواهید به طور خودکار یک کد تخفیف را در فرم پرداخت خود اعمال کنید، می‌توانید این کار را از طریق پارامترهای URL انجام دهید.

ابتدا، شما باید لینک قابل اشتراک (shareable link) برنامه خود را دریافت کنید. برای این کار، به **Ultimate Multisite > Products** بروید و یک طرح (plan) را انتخاب کنید.

روی دکمه **Click to Copy Shareable Link** کلیک کنید. این کار لینک قابل اشتراک مربوط به آن طرح خاص را به شما می‌دهد. در مورد ما، لینک قابل اشتراک داده شده [_**mynetworkdomain.com/register/premium/**_ بود.

![صفحه محصول با دکمه لینک قابل اشتراک](/img/config/products-list.png)

بۆ ئەوەی کۆدنی تخفیفەکەت بۆ ئەم پلاندانانە دیاریکراو بکاربهێنیت، تەنها پارامێتر **?discount_code=XXX** لەسەر URLەکە زیاد بکە. کە XXX ئەو کۆدی کوپنە دەبێت.

لە نموونەی ئێمەدا، ئێمە کۆدنی کوپن **50OFF** بۆ ئەم بەرهەمە دیاریکراو دەکارین.

URLی ئەم پلاندانانە و لەگەڵ کۆدنی تخفیفی 50OFF بکارئینان دەبێت وەک ئەمە دەربکەوێت: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
