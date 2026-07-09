---
title: Domain Mapping کو کنفیگر کرنے کا طریقہ
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# ڈومین میپنگ کو کنفیگر کرنے کا طریقہ (v2)

_**اہم نوٹ: یہ مضمون Ultimate Multisite ورژن 2.x سے متعلق ہے۔**_

ایک پریمیم نیٹ ورک کی سب سے طاقتور خصوصیات میں سے ایک یہ صلاحیت ہے کہ ہم اپنے کلائنٹس کو اپنی سائٹس کے ساتھ ٹاپ لیول ڈومین منسلک کرنے کا موقع دے سکیں۔ آخرکار، کون سا زیادہ پیشہ ورانہ نظر آتا ہے: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) یا [_**joesbikeshop.com**_](http://joesbikeshop.com)؟ اسی لیے Ultimate Multisite یہ خصوصیت بلٹ اِن فراہم کرتا ہے، بغیر تھرڈ پارٹی plugins استعمال کرنے کی ضرورت کے۔

## ڈومین میپنگ کیا ہے؟

جیسا کہ نام سے ظاہر ہے، ڈومین میپنگ Ultimate Multisite کی فراہم کردہ وہ صلاحیت ہے جس کے ذریعے custom domain کی درخواست موصول کر کے اس درخواست کو نیٹ ورک میں اس متعلقہ site کے ساتھ میپ کیا جاتا ہے جس کے ساتھ وہ خاص ڈومین منسلک ہو۔

### اپنے Ultimate Multisite Network پر ڈومین میپنگ کیسے سیٹ اپ کریں

ڈومین میپنگ کو کام کرنے کے لیے آپ کی جانب سے کچھ سیٹنگ کی ضرورت ہوتی ہے۔ خوش قسمتی سے، Ultimate Multisite آپ کے لیے مشکل کام خودکار بنا دیتا ہے تاکہ آپ آسانی سے تقاضے پورے کر سکیں۔

Ultimate Multisite کی انسٹالیشن کے دوران، وزرڈ خودکار طور پر **sunrise.php** کو مقررہ فولڈر میں کاپی اور انسٹال کر دے گا۔ **وزرڈ آپ کو اس وقت تک آگے بڑھنے نہیں دے گا جب تک یہ مرحلہ مکمل نہ ہو جائے**۔

<!-- اسکرین شاٹ دستیاب نہیں: sunrise.php مرحلے کے ساتھ Ultimate Multisite انسٹالیشن وزرڈ -->

اس کا مطلب ہے کہ جیسے ہی Ultimate Multisite انسٹالیشن وزرڈ آپ کا نیٹ ورک سیٹ اپ کرنا مکمل کر لے، آپ فوراً custom domain میپ کرنا شروع کر سکتے ہیں۔

نوٹ کریں کہ Ultimate Multisite میں ڈومین میپنگ لازمی نہیں ہے۔ آپ کے پاس WordPress Multisite کی مقامی ڈومین میپنگ function یا کوئی اور ڈومین میپنگ حل استعمال کرنے کا اختیار ہے۔

اگر آپ کو دوسرے ڈومین میپنگ حلوں کے لیے جگہ بنانے کی خاطر Ultimate Multisite ڈومین میپنگ کو غیر فعال کرنے کی ضرورت ہو، تو آپ یہ خصوصیت **Ultimate Multisite > Settings > Domain Mapping** کے تحت غیر فعال کر سکتے ہیں۔

![ڈومین میپنگ سیٹنگز صفحہ جس میں admin redirect، mapping message اور DNS اختیارات دکھائے گئے ہیں](/img/config/domain-mapping-settings.png)

اس اختیار کے بالکل نیچے، آپ **Force Admin Redirect** کا اختیار بھی دیکھ سکتے ہیں۔ یہ اختیار آپ کو کنٹرول کرنے دیتا ہے کہ آیا آپ کے customers اپنے custom domain اور subdomain دونوں پر اپنے admin dashboard تک رسائی حاصل کر سکیں گے یا صرف ان میں سے ایک پر۔

اگر آپ **Force redirect to mapped domain** منتخب کرتے ہیں، تو آپ کے customers صرف اپنے custom domains پر اپنے admin dashboard تک رسائی حاصل کر سکیں گے۔

**Force redirect to** **network domain** کا اختیار بالکل الٹ کام کرے گا - آپ کے customers کو صرف اپنے subdomain پر اپنے dashboards تک رسائی کی اجازت ہو گی، چاہے وہ اپنے custom domains پر sign in کرنے کی کوشش کریں۔

اور **Allow access to the admin by both mapped domain domain and network domain** کا اختیار انہیں subdomain اور custom domain دونوں پر اپنے admin dashboards تک رسائی دیتا ہے۔

![Admin Redirect ڈراپ ڈاؤن پھیلا ہوا، جس میں تین redirect اختیارات دکھائے گئے ہیں](/img/config/domain-mapping-redirect-options.png)

custom domain میپ کرنے کے دو طریقے ہیں۔ پہلا یہ ہے کہ آپ اپنے network admin dashboard سے super admin کے طور پر domain name میپ کریں، اور دوسرا subsite admin dashboard کے ذریعے account page کے تحت ہے۔

لیکن اپنے نیٹ ورک کی کسی subsite کے ساتھ custom domain میپ کرنا شروع کرنے سے پہلے، آپ کو یہ یقینی بنانا ہو گا کہ domain name کی **DNS settings** درست طور پر کنفیگر کی گئی ہیں۔

###

### یہ یقینی بنانا کہ ڈومین کی DNS سیٹنگز درست طور پر کنفیگر کی گئی ہیں

میپنگ کے کام کرنے کے لیے، آپ کو یہ یقینی بنانا ہو گا کہ جس ڈومین کو آپ میپ کرنے کا ارادہ رکھتے ہیں وہ آپ کے Network کے IP address کی طرف اشارہ کر رہا ہے۔ نوٹ کریں کہ آپ کو Network IP address چاہیے - اس ڈومین کا IP address جہاں Ultimate Multisite انسٹال ہے - نہ کہ اس custom domain کا IP address جسے آپ میپ کرنا چاہتے ہیں۔ کسی مخصوص ڈومین کا IP address تلاش کرنے کے لیے، مثال کے طور پر ہم [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) پر جانے کی تجویز دیتے ہیں۔

ڈومین کو درست طور پر میپ کرنے کے لیے، آپ کو اپنی **DNS** کنفیگریشن میں ایک **A RECORD** شامل کرنا ہو گا جو اس **IP address** کی طرف اشارہ کرے۔ DNS management مختلف domain registrars کے درمیان بہت زیادہ مختلف ہوتی ہے، لیکن اگر آپ " _Creating A Record on XXXX_ " تلاش کریں جہاں XXXX آپ کا domain registrar ہو (مثلاً: " _Creating A Record on_ _GoDaddy_ ")، تو اس بارے میں آن لائن کافی tutorials دستیاب ہیں۔

اگر آپ کو یہ کام کروانے میں مشکل پیش آ رہی ہو، تو **اپنے domain registrar support سے رابطہ کریں** اور وہ اس حصے میں آپ کی مدد کر سکیں گے۔

اگر آپ اپنے clients کو اپنے domains خود میپ کرنے کی اجازت دینے کا ارادہ رکھتے ہیں، تو انہیں اس حصے کا کام خود کرنا ہو گا۔ اگر وہ A Record بنانے سے قاصر ہوں تو انہیں اپنے registrar support system کی طرف رہنمائی کریں۔

### Super Admin کے طور پر custom domain name میپ کرنا

جب آپ اپنے نیٹ ورک پر super admin کے طور پر logged in ہوں، تو آپ **Ultimate Multisite > Domains** کے تحت جا کر custom domain names آسانی سے شامل اور manage کر سکتے ہیں۔

![Ultimate Multisite میں Domains فہرست کا صفحہ](/img/admin/domains-list.png)

اس صفحے کے تحت، آپ اوپر **Add Domain** بٹن پر کلک کر سکتے ہیں اور اس سے ایک modal window کھلے گی جہاں آپ **custom domain name**، **وہ subsite** جس پر آپ custom domain name لاگو کرنا چاہتے ہیں، سیٹ اور پُر کر سکتے ہیں، اور یہ فیصلہ کر سکتے ہیں کہ آیا آپ اسے **primary domain** name کے طور پر سیٹ کرنا چاہتے ہیں یا نہیں (نوٹ کریں کہ آپ **ایک subsite پر متعدد domain names میپ** کر سکتے ہیں)۔

![Add Domain modal جس میں domain name، site picker اور primary domain toggle شامل ہیں](/img/admin/domain-add-modal.png)

تمام معلومات درج کرنے کے بعد، آپ نیچے موجود **Add Existing Domain** بٹن پر کلک کر سکتے ہیں۔

اس سے custom domain کی DNS معلومات کی تصدیق اور بازیافت کا عمل شروع ہو جائے گا۔ آپ صفحے کے نیچے ایک لاگ بھی دیکھیں گے تاکہ آپ اس عمل کی پیروی کر سکیں جس سے یہ گزر رہا ہے۔ اس عمل کو مکمل ہونے میں چند منٹ لگ سکتے ہیں۔

Ultimate Multisite v2.13.0 اس وقت داخلی domain ریکارڈ بھی خودکار طور پر بناتا ہے جب کسی host پر نئی سائٹ بنائی جاتی ہے جسے فی سائٹ domain کے طور پر برتا جانا چاہیے۔ اگر host نیٹ ورک کا بنیادی domain ہے، یا **Site URL** field پر configure کیے گئے مشترکہ checkout-form بنیادی domains میں سے ایک ہے، تو خودکار mapped-domain ریکارڈ چھوڑ دیا جاتا ہے تاکہ مشترکہ بنیادی domain اسے استعمال کرنے والی ہر سائٹ کے لیے دستیاب رہے۔

جب کوئی customer Domain Seller v1.3.0 یا اس سے نئے ورژن کے ذریعے نیا domain register کرتا ہے، تو Ultimate Multisite خودکار طور پر registered domain کو default کے طور پر customer کی network سائٹ سے map کر دیتا ہے۔ Administrators کو کامیاب registration کے بعد الگ mapped-domain ریکارڈ شامل کرنے کی ضرورت نہیں رہتی، الا یہ کہ وہ primary-domain flag، activation state، یا SSL handling جیسے options کو adjust کرنا چاہیں۔

**Stage** یا status کو **Checking DNS** سے **Ready** میں تبدیل ہو جانا چاہیے اگر سب کچھ درست طور پر set up ہے۔

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

اگر آپ domain name پر click کریں، تو آپ اس کے اندر کچھ options دیکھ سکیں گے۔ آئیے ان پر ایک مختصر نظر ڈالتے ہیں:

![stage، سائٹ، active، primary اور SSL toggles کے ساتھ domain detail page](/img/admin/domain-edit.png)

**Stage:** یہ وہ stage ہے جس پر domain موجود ہے۔ جب آپ پہلی بار domain شامل کرتے ہیں، تو غالباً یہ **Checking DNS** stage پر ہوگا۔ process DNS entries کو check کرے گا اور confirm کرے گا کہ وہ درست ہیں۔ پھر، domain کو **Checking SSL** stage پر رکھا جائے گا۔ Ultimate Multisite check کرے گا کہ domain کے پاس SSL ہے یا نہیں اور آپ کے domain کو **Ready** یا **Ready (without SSL)** کے طور پر categorize کرے گا۔

**Site:** وہ subdomain جو اس domain سے associated ہے۔ mapped domain اس مخصوص سائٹ کا content دکھائے گا۔

**Active:** آپ domain کو activate یا deactivate کرنے کے لیے اس option کو on یا off کر سکتے ہیں۔

**Is Primary Domain?:** آپ کے customers ہر سائٹ کے لیے ایک سے زیادہ mapped domain رکھ سکتے ہیں۔ اس option کو استعمال کریں تاکہ select کیا جا سکے کہ آیا یہ مخصوص سائٹ کے لیے primary domain ہے۔

**Is Secure?:** اگرچہ Ultimate Multisite domain کو enable کرنے سے پہلے check کرتا ہے کہ domain کے پاس SSL certificate ہے یا نہیں، آپ manually select کر سکتے ہیں کہ domain کو SSL certificate کے ساتھ یا بغیر load کرنا ہے۔ نوٹ کریں کہ اگر website کے پاس SSL certificate نہیں ہے اور آپ اسے SSL کے ساتھ زبردستی load کرنے کی کوشش کرتے ہیں، تو یہ آپ کو errors دے سکتی ہے۔

### Subsite user کے طور پر custom domain name mapping

Subsite administrators اپنے subsite admin dashboard سے بھی custom domain names map کر سکتے ہیں۔

سب سے پہلے، آپ کو یہ یقینی بنانا ہوگا کہ آپ **Domain mapping** settings کے تحت اس option کو enable کریں۔ نیچے screenshot دیکھیں۔

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

آپ اس option کو **Plan** level یا **Ultimate Multisite > Products** پر product options کے تحت بھی set یا configure کر سکتے ہیں۔

![product edit page پر Custom Domains section](/img/config/product-custom-domains.png)

جب ان میں سے کوئی options enable ہوں اور کسی subsite user کو custom domain names map کرنے کی اجازت ہو، تو subsite user کو **Account** page کے تحت **Domains** نامی metabox نظر آنا چاہیے۔

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

user **Add Domain** button پر click کر سکتا ہے اور یہ کچھ instructions کے ساتھ ایک modal window دکھائے گا۔

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

پھر user **Next Step** پر click کر کے custom domain name شامل کرنے کے لیے آگے بڑھ سکتا ہے۔ وہ یہ بھی choose کر سکتے ہیں کہ یہ primary domain ہوگا یا نہیں۔

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** پر click کرنے سے custom domain کی DNS information verify اور fetch کرنے کا process شروع ہوگا۔

### Domain Syncing کے بارے میں

Domain Syncing ایک process ہے جہاں Ultimate Multisite custom domain name کو آپ کے hosting account میں add-on domain کے طور پر شامل کرتا ہے **تاکہ domain mapping کام کرے**۔

Domain syncing خودکار طور پر ہوتا ہے اگر آپ کے hosting provider کی Ultimate Multisite domain mapping feature کے ساتھ integration ہو۔ فی الحال، یہ hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ اور _Cpanel_ ہیں۔

جب host-provider integration active ہو، تو Ultimate Multisite newly created sites کے لیے provider-side DNS یا subdomain creation task کو enqueue بھی کر سکتا ہے۔ اگر کوئی integration اس task کے لیے listening نہیں کر رہی، تو background job کو skip کر دیا جاتا ہے تاکہ no-op queue entries سے بچا جا سکے۔ mapped domains کے لیے DNS اور SSL checks normal domain-stage process کے ذریعے جاری رہتے ہیں۔

آپ کو اس integration کو Ultimate Multisite settings میں **Integration** tab کے تحت activate کرنا ہوگا۔

![Ultimate Multisite settings میں hosting providers دکھانے والا Integrations tab](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_نوٹ کریں کہ اگر آپ کا hosting provider اوپر ذکر کردہ providers میں سے نہیں ہے،**تو آپ کو domain name کو manually sync یا add کرنا ہوگا** اپنے hosting account میں._
