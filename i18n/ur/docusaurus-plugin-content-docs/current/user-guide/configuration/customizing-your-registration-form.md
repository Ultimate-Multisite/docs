---
title: اپنے رجسٹریشن فارم کو اپنی مرضی کے مطابق بنانا
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# اپنے رجسٹریشن فارم کو اپنی مرضی کے مطابق بنائیں

اپنے نیٹ ورک کو WordPress پلیٹ فارم پر بنے دوسرے SaaS سے مختلف بنانے کے لیے، Ultimate Multisite آپ کو ہماری **Checkout Forms** فیچر کے ذریعے اپنے رجسٹریشن اور لاگ ان صفحات کو اپنی مرضی کے مطابق بنانے کی سہولت دیتا ہے۔

اگرچہ یہ نئے گاہکوں کو تبدیل کرنے کی کوشش میں مختلف طریقوں کے ساتھ تجربہ کرنے کا ایک آسان اور لچکدار طریقہ ہیں، لیکن زیادہ تر یہ ذاتی نوعیت کے رجسٹریشن فارم بنانے کے لیے استعمال ہوتے ہیں۔ اس مضمون کا مقصد آپ کو دکھانا ہے کہ آپ یہ کیسے کر سکتے ہیں۔

## لاگ ان اور رجسٹریشن صفحات:

Ultimate Multisite انسٹال ہونے پر، یہ خود بخود آپ کی مین سائٹ پر اپنی مرضی کے مطابق لاگ ان اور رجسٹریشن صفحات بناتا ہے۔ آپ ان ڈیفالٹ صفحات کو کسی بھی وقت **Ultimate Multisite > Settings > Login & Registration** صفحے پر جا کر تبدیل کر سکتے ہیں۔

![Login and Registration settings page](/img/config/settings-general.png)

آئیے **Login & Registration** صفحے پر ہر ایک آپشن پر نظر ڈالتے ہیں جسے آپ اپنی مرضی کے مطابق بنا سکتے ہیں:

  * **Enable registration:** یہ آپشن آپ کے نیٹ ورک پر رجسٹریشن کو فعال یا غیر فعال کرے گا۔ اگر یہ بند ہے، تو آپ کے گاہک رجسٹر نہیں ہو سکیں گے اور آپ کی مصنوعات کی سبسکرپشن نہیں لے سکیں گے۔

  * **Enable email verification:** اگر یہ آپشن آن ہے، تو جو گاہک مفت پلان یا ٹرائل پیریڈ والے بامعاوضہ پلان کی سبسکرپشن لیتے ہیں، انہیں تصدیقی ای میل ملے گی اور انہیں اپنی ویب سائٹس بنانے کے لیے تصدیقی لنک پر کلک کرنا ہوگا۔

  * **Default registration page:** یہ رجسٹریشن کا ڈیفالٹ صفحہ ہے۔ اس صفحے کو آپ کی ویب سائٹ پر شائع ہونا چاہیے اور اس میں رجسٹریشن فارم (جسے checkout form بھی کہتے ہیں) ہونا چاہیے - جہاں آپ کے کلائنٹس آپ کی مصنوعات کی سبسکرپشن لیں گے۔ آپ جتنے چاہیں رجسٹریشن صفحات اور checkout forms بنا سکتے ہیں، بس یاد رکھیں کہ رجسٹریشن صفحے پر checkout form shortcode ڈالیں، ورنہ یہ ظاہر نہیں ہوگا۔

  * **Use custom login page:** یہ آپشن آپ کو ڈیفالٹ wp-login.php صفحے کے بجائے ایک اپنی مرضی کے مطابق لاگ ان صفحہ استعمال کرنے کی اجازت دیتا ہے۔ اگر یہ آپشن آن ہے، تو آپ **Default login page** آپشن (بالکل نیچے) پر منتخب کر سکتے ہیں کہ لاگ ان کے لیے کون سا صفحہ استعمال ہوگا۔

  * **Obfuscate the original login url (wp-login.php):** اگر آپ اصل لاگ ان URL چھپانا چاہتے ہیں، تو آپ یہ آپشن آن کر سکتے ہیں۔ یہ brute-force حملوں کو روکنے کے لیے مفید ہے۔ اگر یہ آپشن فعال ہے، تو Ultimate Multisite 404 ایرر دکھائے گا جب کوئی صارف اصل wp-login.php لنک تک رسائی حاصل کرنے کی کوشش کرے گا۔

  * **Force synchronous site publication:** جب کوئی گاہک نیٹ ورک پر کسی پروڈکٹ کی سبسکرپشن لیتا ہے، تو نئی زیر التواء سائٹ کو ایک حقیقی نیٹ ورک سائٹ میں تبدیل کرنا ہوتا ہے۔ اشاعت کا عمل Job Queue کے ذریعے، غیر ہم وقت طور پر ہوتا ہے۔ اشاعت کو سائن اپ کی اسی درخواست میں کرنے کے لیے اس آپشن کو فعال کریں۔

اب، آئیے لاگ ان اور رجسٹریشن کے عمل سے متعلق دیگر آپشنز دیکھتے ہیں۔ یہ اسی Login & registration صفحے پر **Other options** کے بالکل نیچے ہیں:

  * **Default role:** یہ وہ کردار ہے جو آپ کے گاہکوں کو سائن اپ کے عمل کے بعد ان کی ویب سائٹ پر ملے گا۔

  * **Add users to the main site as well:** اس آپشن کو فعال کرنے سے سائن اپ کے عمل کے بعد صارف کو آپ کے نیٹ ورک کی مین سائٹ میں بھی شامل کر دیا جائے گا۔ اگر آپ اس آپشن کو فعال کرتے ہیں، تو آپ کی ویب سائٹ پر ان صارفین کا **default role** سیٹ کرنے کا آپشن بھی بالکل نیچے ظاہر ہوگا۔

  * **Enable multiple accounts:** صارفین کو آپ کے نیٹ ورک کی مختلف سائٹس پر ایک ہی ای میل ایڈریس کے ساتھ اکاؤنٹس رکھنے کی اجازت دیں۔ اگر یہ آپشن بند ہے، تو آپ کے گاہک آپ کے نیٹ ورک پر چلنے والی دیگر ویب سائٹس پر ایک ہی ای میل ایڈریس کے ساتھ اکاؤنٹ نہیں بنا سکیں گے۔

اور یہ لاگ ان اور رجسٹریشن سے متعلق تمام آپشنز ہیں جنہیں آپ اپنی مرضی کے مطابق بنا سکتے ہیں! ترمیم مکمل کرنے کے بعد اپنی سیٹنگز محفوظ کرنا نہ بھولیں۔

## متعدد رجسٹریشن فارمز کا استعمال:

Ultimate Multisite 2.0 ایک checkout form ایڈیٹر پیش کرتا ہے جو آپ کو جتنے چاہیں فارم بنانے کی اجازت دیتا ہے، مختلف فیلڈز، پیشکش میں مصنوعات، وغیرہ کے ساتھ۔

لاگ ان اور رجسٹریشن دونوں صفحات shortcodes کے ساتھ ایمبیڈ ہیں: لاگ ان صفحے پر **[wu_login_form]** اور رجسٹریشن صفحے کے لیے **[wu_checkout]**۔ آپ checkout forms بنا کر یا بلڈ کر کے رجسٹریشن صفحے کو مزید اپنی مرضی کے مطابق بنا سکتے ہیں۔

اس فیچر تک رسائی کے لیے، بائیں سائیڈ بار پر **Checkout Forms** مینو پر جائیں۔

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

اس صفحے پر، آپ اپنے تمام checkout forms دیکھ سکتے ہیں۔

اگر آپ نیا بنانا چاہتے ہیں، تو صفحے کے اوپر **Add Checkout Form** پر کلک کریں۔

آپ اپنے نقطہ آغاز کے طور پر ان تین آپشنز میں سے ایک منتخب کر سکتے ہیں: single step، multi-step یا blank۔ پھر، **Go to the Editor** پر کلک کریں۔

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

متبادل طور پر، آپ اپنے موجودہ فارمز کے نام کے نیچے آپشنز پر کلک کر کے انہیں ایڈٹ یا ڈپلیکیٹ کر سکتے ہیں۔ وہاں، آپ کو فارم کا shortcode کاپی کرنے یا فارم کو حذف کرنے کے آپشنز بھی ملیں گے۔

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

اگر آپ single step یا multi-step منتخب کرتے ہیں، تو checkout form پہلے سے بنیادی مراحل کے ساتھ پری پاپولیٹڈ ہوگا تاکہ یہ کام کرے۔ پھر، اگر آپ چاہیں، تو آپ اس میں اضافی مراحل شامل کر سکتے ہیں۔

### Checkout Form کی ترمیم:

جیسا کہ ہم نے پہلے ذکر کیا، آپ مختلف مقاصد کے لیے checkout forms بنا سکتے ہیں۔ اس مثال میں ہم رجسٹریشن فارم پر کام کریں گے۔

checkout form ایڈیٹر پر جانے کے بعد، اپنے فارم کو ایک نام دیں (جو صرف داخلی حوالے کے لیے استعمال ہوگا) اور ایک slug (shortcodes بنانے کے لیے استعمال ہوتا ہے، مثال کے طور پر)۔

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

فارمز مراحل اور فیلڈز پر مشتمل ہوتے ہیں۔ آپ **Add New Checkout Step** پر کلک کر کے نیا مرحلہ شامل کر سکتے ہیں۔

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window کے پہلے ٹیب پر، اپنے فارم کے مرحلے کا مواد بھریں۔ اسے ایک ID، نام اور تفصیل دیں۔ یہ آئٹمز زیادہ تر داخلی طور پر استعمال ہوتے ہیں۔

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

اگلا، مرحلے کی مرئیت سیٹ کریں۔ آپ **Always show**، **Only show for logged in users** یا **Only show for guests** میں سے منتخب کر سکتے ہیں۔

![Checkout step visibility options](/img/config/checkout-form-step.png)

آخر میں، مرحلے کی اسٹائل کنفیگر کریں۔ یہ اختیاری فیلڈز ہیں۔

![Checkout step style configuration](/img/config/checkout-form-step.png)

اب، ہمارے پہلے مرحلے میں فیلڈز شامل کرنے کا وقت ہے۔ بس **Add New Field** پر کلک کریں اور جس قسم کا سیکشن چاہتے ہیں اسے منتخب کریں۔

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

ہر فیلڈ کے مختلف پیرامیٹرز ہوتے ہیں جو بھرنے ہوتے ہیں۔ اس پہلی انٹری کے لیے، ہم **Username** فیلڈ منتخب کریں گے۔

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

آپ جتنے مراحل اور فیلڈز چاہیں شامل کر سکتے ہیں۔ اپنے گاہکوں کو مصنوعات دکھانے کے لیے تاکہ وہ ایک منتخب کریں، Pricing Table فیلڈ استعمال کریں۔ اگر آپ اپنے کلائنٹس کو ٹیمپلیٹ چننے دینا چاہتے ہیں، Template Selection فیلڈ شامل کریں۔ اور اسی طرح۔

_**نوٹ:** اگر آپ اپنا checkout form بنانے کے بعد کوئی پروڈکٹ بناتے ہیں، تو آپ کو Pricing table سیکشن میں پروڈکٹ شامل کرنی ہوگی۔ اگر آپ اسے شامل نہیں کرتے، تو پروڈکٹ رجسٹریشن صفحے پر آپ کے گاہکوں کو نظر نہیں آئے گی۔_

_**نوٹ 2:** username، email، password، site title، site URL، order summary، payment، اور submit button checkout form بنانے کے لیے لازمی فیلڈز ہیں۔_

جب آپ اپنے checkout form پر کام کر رہے ہوں، آپ ہمیشہ Preview بٹن استعمال کر کے دیکھ سکتے ہیں کہ آپ کے کلائنٹس فارم کو کیسے دیکھیں گے۔ آپ موجودہ صارف یا وزیٹر کے طور پر دیکھنے کے درمیان بھی بدل سکتے ہیں۔

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

آخر میں، **Advanced Options** پر آپ **Thank You** صفحے کے لیے پیغام کنفیگر کر سکتے ہیں، کنورژنز ٹریک کرنے کے لیے snippets شامل کر سکتے ہیں، اپنے checkout form میں custom CSS شامل کر سکتے ہیں یا اسے مخصوص ممالک تک محدود کر سکتے ہیں۔

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

آپ دائیں کالم میں اس آپشن کو ٹوگل کر کے اپنے checkout form کو دستی طور پر فعال یا غیر فعال بھی کر سکتے ہیں، یا فارم کو مستقل طور پر حذف کر سکتے ہیں۔

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

اپنا checkout form محفوظ کرنا نہ بھولیں!

![Save Checkout Form button](/img/config/checkout-form-save.png)

اپنے فارم کا shortcode حاصل کرنے کے لیے **Generate Shortcode** پر کلک کریں اور modal window پر دکھائے گئے نتیجے کو کاپی کریں۔

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**نوٹ:** اس checkout form کو اپنے رجسٹریشن صفحے میں شامل کرنے کے لیے آپ کو یہ shortcode اپنے رجسٹریشن صفحے میں شامل کرنا ہوگا۔_

## URL پیرامیٹرز کے ذریعے مصنوعات اور ٹیمپلیٹس کو پہلے سے منتخب کرنا:

اگر آپ اپنی مصنوعات کے لیے اپنی مرضی کے مطابق pricing tables بنانا چاہتے ہیں اور checkout form پر وہ پروڈکٹ یا ٹیمپلیٹ پہلے سے منتخب کرنا چاہتے ہیں جو آپ کا گاہک آپ کی pricing table یا templates صفحے سے چنتا ہے، تو آپ اس کے لیے URL پیرامیٹرز استعمال کر سکتے ہیں۔

### **پلانز کے لیے:**

**Ultimate Multisite > Products > Select a plan** پر جائیں۔ آپ کو صفحے کے اوپر **Click to copy Shareable Link** بٹن نظر آنا چاہیے۔ یہ وہ لنک ہے جسے آپ اپنے checkout form پر اس مخصوص پلان کو پہلے سے منتخب کرنے کے لیے استعمال کر سکتے ہیں۔

![Product page with shareable link button](/img/config/products-list.png)

نوٹ کریں کہ یہ shareable link صرف **Plans** کے لیے درست ہے۔ آپ packages یا services کے لیے shareable links استعمال نہیں کر سکتے۔

### ٹیمپلیٹس کے لیے:

اگر آپ اپنے checkout form پر site templates پہلے سے منتخب کرنا چاہتے ہیں، تو آپ اپنے رجسٹریشن صفحے کے URL پر پیرامیٹر: **?template_id=X** استعمال کر سکتے ہیں۔ "X" کو **site template ID نمبر** سے بدلنا ہوگا۔ یہ نمبر حاصل کرنے کے لیے، **Ultimate Multisite > Sites** پر جائیں۔

جس site template کو آپ استعمال کرنا چاہتے ہیں اس کے بالکل نیچے **Manage** پر کلک کریں۔ آپ کو SITE ID نمبر نظر آئے گا۔ بس اس مخصوص site template کو اپنے checkout form پر پہلے سے منتخب کرنے کے لیے یہ نمبر استعمال کریں۔ ہمارے معاملے میں یہاں، URL پیرامیٹر **?template_id=2** ہوگا۔

![Sites list showing site template ID](/img/config/site-templates-list.png)

فرض کریں ہماری نیٹ ورک ویب سائٹ [**www.mynetwork.com**](http://www.mynetwork.com) ہے اور ہمارا checkout form والا رجسٹریشن صفحہ **/register** صفحے پر واقع ہے۔ اس site template کے ساتھ پہلے سے منتخب مکمل URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** کی طرح نظر آئے گا۔

اور اگر آپ چاہیں، تو آپ اپنے checkout form پر مصنوعات اور ٹیمپلیٹس دونوں کو پہلے سے منتخب کر سکتے ہیں۔ آپ کو بس پلان کا shareable link کاپی کرنا ہے اور آخر میں template پیرامیٹر چسپاں کرنا ہے۔ یہ [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** کی طرح نظر آئے گا۔
