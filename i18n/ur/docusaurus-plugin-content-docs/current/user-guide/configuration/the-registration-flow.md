---
title: رجسٹریشن کا عمل
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# رجسٹریشن کا بہاؤ (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

صارفین آپ کے نیٹ ورک میں مختلف طریقوں سے رجسٹر ہو سکتے ہیں۔ وہ آپ کا رجسٹریشن فارم استعمال کر سکتے ہیں یا پہلے سے منتخب کردہ plan کے لیے ایک شیئر کرنے کے قابل لنک استعمال کر سکتے ہیں۔ یہاں ہم آپ کو دکھائیں گے کہ آپ کے صارفین دستیاب راستوں کو استعمال کرتے ہوئے آپ کے نیٹ ورک پر کیسے رجسٹر ہو سکتے ہیں اور آپ کے نیٹ ورک پر رجسٹر ہونے کے بعد کیا ہوتا ہے۔

## رجسٹریشن فارم کا استعمال: {#using-the-registration-form}

یہ معیاری رجسٹریشن عمل ہے۔ آپ ایک **checkout form** کے ساتھ رجسٹریشن صفحہ بناتے ہیں اور یہی وہ جگہ ہوگی جہاں آپ کے صارفین آپ کے نیٹ ورک پر رجسٹر ہونے اور کسی plan کو سبسکرائب کرنے کے لیے جائیں گے۔ اگر آپ چاہیں تو آپ کے پاس متعدد رجسٹریشن صفحات ہو سکتے ہیں، ہر ایک مختلف رجسٹریشن فارم کے ساتھ۔

رجسٹریشن کے لیے پہلے سے طے شدہ صفحہ [_**yourdomain.com/register**_](http://yourdomain.com/register) ہے، لیکن آپ اسے کسی بھی وقت **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** پر تبدیل کر سکتے ہیں۔

جب کوئی صارف آپ کے رجسٹریشن صفحے پر پہنچتا ہے (عام طور پر **Sign in** یا **Buy now** بٹن پر کلک کر کے)، تو وہ وہاں آپ کا رجسٹریشن فارم دیکھے گا۔

![رجسٹریشن صفحے پر دکھایا گیا رجسٹریشن فارم](/img/frontend/registration-form.png)

یہاں checkout form کی ایک مثال ہے جیسا کہ یہ frontend پر ظاہر ہوتا ہے:

![Frontend checkout رجسٹریشن فارم](/img/config/checkout-frontend-registration.png)

انہیں صرف تمام لازمی فیلڈز بھرنے ہوں گے - ای میل، صارف نام، پاس ورڈ، وغیرہ... - اور plan کی ادائیگی کرنی ہوگی یا اگر وہ مفت plan کے لیے یا آزمائشی مدت والے paid plan کے لیے بغیر ادائیگی کی معلومات کے رجسٹر ہو رہے ہیں تو اپنے ای میل پتے کی تصدیق کرنی ہوگی۔

"Thank you" صفحے پر، وہ ایک پیغام دیکھیں گے جو انہیں بتائے گا کہ آیا انہیں اپنے ای میل پتے کی تصدیق کرنے کی ضرورت ہے یا ان کی ویب سائٹ پہلے ہی فعال ہو چکی ہے اور وہ اسے استعمال کرنا شروع کر سکتے ہیں۔

![رجسٹریشن کے بعد شکریہ کا صفحہ](/img/frontend/registration-thank-you.png)

اگر ای میل پتے کی تصدیق ضروری ہو، تو انہیں اپنے ای میل ان باکس میں جا کر تصدیقی لنک پر کلک کرنا ہوگا۔ اگر ان کے ای میل پتے کی تصدیق نہیں ہوتی تو ان کی ویب سائٹ فعال نہیں ہوگی۔

اگر انہوں نے paid plan پر رجسٹر کیا ہے یا آپ کے نیٹ ورک پر ای میل تصدیق لازمی نہیں ہے، تو checkout کے فوراً بعد ان کی ویب سائٹ فعال ہو جائے گی اور انہیں اپنے dashboard میں sign in کرنے کے لیے ایک لنک دکھایا جائے گا۔

![Dashboard میں sign in کرنے کے لنک کے ساتھ site فعال](/img/frontend/site-activated.png)

## شیئر کرنے کے قابل لنک کا استعمال: {#using-a-shareable-link}

شیئر کرنے کے قابل لنک استعمال کر کے رجسٹر ہونے کا عمل بنیادی طور پر رجسٹریشن فارم جیسا ہی ہے، فرق صرف یہ ہے کہ شیئر کرنے کے قابل لنک استعمال کرتے ہوئے آپ کے صارفین checkout form پر پہلے سے منتخب کردہ product یا ویب سائٹ template رکھ سکتے ہیں (URL parameters کے ذریعے products اور templates کو پہلے سے منتخب کرنے والے سیکشن سے رجوع کریں) یا شاید coupon code شامل ہو سکتا ہے (URL Parameters استعمال کرنے والے سیکشن سے رجوع کریں)۔

رجسٹریشن کا عمل وہی رہے گا: انہیں اپنا نام، صارف نام، ای میل پتہ، ویب سائٹ کا نام اور عنوان، وغیرہ... بھرنا ہوگا، لیکن plan یا site template ان کے لیے پہلے ہی سے منتخب ہوگا۔

### Manual Payments استعمال کر کے رجسٹریشن: {#registering-using-manual-payments}

اگر آپ PayPal، Stripe یا Ultimate Multisite یا اس کی add-on integrations کی طرف سے پیش کردہ کوئی اور payment gateway استعمال نہیں کرنا چاہتے، تو آپ اپنے صارفین کے لیے manual payments استعمال کر سکتے ہیں۔ اس طرح، آپ اپنے نیٹ ورک پر ان کے رجسٹر ہونے کے بعد انہیں اپنے ترجیحی payment processor پر ادائیگی کے لیے invoice بنا سکتے ہیں۔

رجسٹریشن کا عمل بالکل اوپر جیسا ہی ہوگا، لیکن رجسٹریشن صفحے پر آپ کے صارفین ایک پیغام دیکھیں گے جس میں بتایا جائے گا کہ ادائیگی مکمل کرنے کے لیے مزید ہدایات کے ساتھ انہیں ایک ای میل موصول ہوگی۔

![رجسٹریشن کے دوران manual payment پیغام](/img/frontend/registration-manual-notice.png)

اور رجسٹریشن مکمل ہونے کے بعد، وہ ادائیگی کی وہ ہدایات دیکھیں گے جو آپ نے مقرر کی ہیں (اور انہیں یہ اپنی ای میل پر بھی موصول ہوں گی)۔

![رجسٹریشن کے بعد دکھائی گئی ادائیگی کی ہدایات](/img/frontend/registration-payment-instructions.png)

ادائیگی کی ہدایات **Ultimate Multisite > Settings > Payments** پر **Manual** ادائیگی کا آپشن آن کرنے کے بعد تبدیل کی جا سکتی ہیں:

![payment instructions فیلڈ کے ساتھ Manual payment toggle](/img/config/manual-gateway-settings.png)

جب آپ کے صارفین manual payment مکمل کر کے آپ کو تصدیق بھیج دیں، تو customer membership اور ویب سائٹ کو فعال کرنے کے لیے آپ کو **دستی طور پر ادائیگی کی تصدیق** کرنی ہوگی۔

ایسا کرنے کے لیے، **Ultimate Multisite > Payments** پر جائیں اور customer payment تلاش کریں۔ اسے اب بھی **Pending** status دکھانا چاہیے۔

![Pending manual payment کے ساتھ payments list](/img/admin/payments-list.png)

payment number پر کلک کریں اور آپ اس کا status **Completed** میں تبدیل کر سکیں گے۔

![Payment details page](/img/admin/payment-edit.png)

![Payment status کو Completed میں تبدیل کرنا](/img/admin/payment-status-completed.png)

اس کا status **Completed** میں تبدیل کرنے کے بعد، آپ کو **Activate membership** پیغام نظر آنا چاہیے۔ اس customer سے وابستہ membership اور ویب سائٹ کو فعال کرنے کے لیے اس آپشن کو **on** کریں۔ پھر، **Save Payment** پر کلک کریں۔

![Activate membership toggle اور Save Payment بٹن](/img/admin/payment-activate-membership.png)

اب آپ کے customer کو dashboard اور ان تمام features تک رسائی حاصل ہونی چاہیے جن کے لیے انہوں نے سبسکرائب کیا ہے۔
