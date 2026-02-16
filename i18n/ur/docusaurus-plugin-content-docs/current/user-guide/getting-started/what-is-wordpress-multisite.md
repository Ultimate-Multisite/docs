---
title: WordPress Multisite کیا ہے؟
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite کیا ہے؟

WordPress اپنی بنیادی خصوصیات میں 'Multisite' نامی ایک فیچر فراہم کرتا ہے جس کی ابتدا 2010 میں WordPress 3.0 کی لانچ کے وقت ہوئی تھی۔ اس کے بعد سے اس میں کئی تبدیلیاں کی گئی ہیں جن کا مقصد نئے فیچرز متعارف کرانا اور سیکیورٹی کو مضبوط بنانا تھا۔

سادہ الفاظ میں، WordPress multisite کو اس طرح سمجھا جا سکتا ہے: ایک یونیورسٹی WordPress کی ایک ہی installation رکھتی ہے لیکن ہر فیکلٹی اپنی الگ WordPress سائٹ چلاتی ہے۔

## 

## WordPress Multisite دراصل کیا ہے؟

Multisite WordPress کا ایک فیچر ہے جو متعدد سائٹس کو ایک ہی WordPress installation شیئر کرنے کی اجازت دیتا ہے۔ جب multisite فعال ہوتا ہے، تو اصل WordPress سائٹ کو **سائٹس کے نیٹ ورک** میں تبدیل کر دیا جاتا ہے۔

یہ نیٹ ورک فائل سسٹم شیئر کرتا ہے (یعنی **plugins اور themes بھی شیئر ہوتے ہیں**)، ڈیٹابیس، WordPress core فائلز، wp-config.php وغیرہ۔

اس کا مطلب ہے کہ WordPress، theme، اور plugin updates آپ کی تمام نیٹ ورک سائٹس کے لیے صرف ایک بار کرنے کی ضرورت ہے کیونکہ وہ فائل سسٹم پر ایک ہی فائلز شیئر کرتی ہیں۔

یہ بات multisite کے اہم فوائد میں سے ایک ہے، کیونکہ یہ آپ کو اپنی سائٹس کی تعداد بڑھانے کی اجازت دیتی ہے جبکہ اپنے گاہکوں کی سائٹس کی دیکھ بھال کے لیے درکار کاموں کی تعداد یکساں رہتی ہے۔

## 

## Subdomain یا Subdirectory؟

WordPress multisite چلانے کے دو طریقے ہیں – اور جب آپ اپنی عام WordPress installation کو multisite میں تبدیل کرتے ہیں تو آپ کو ایک کا انتخاب کرنا ہوگا:

**Subdomain:** مثال: [site.domain.com](http://site.domain.com)

…یا

**Subdirectory:** مثال: [yourdomain.com/site](http://yourdomain.com/site)

ہر طریقے کے اپنے فوائد اور نقصانات ہیں جن پر آپ کو یہ فیصلہ کرتے وقت غور کرنا ہوگا۔

ایک اہم بات یاد رکھیں: ایک بار فیصلہ کرنے کے بعد، اپنے نیٹ ورک کو subdirectory سے subdomain یا اس کے برعکس تبدیل کرنا واقعی مشکل ہے – خاص طور پر اگر آپ نے پہلے سے کچھ سائٹس بنا لی ہیں۔

یہ فیصلہ کرنے سے پہلے، کچھ باتیں ذہن میں رکھیں:

**Subdirectory Mode** سیٹ اپ اور دیکھ بھال کے لحاظ سے سب سے آسان طریقہ ہے۔ ایسا اس لیے ہے کیونکہ تمام سائٹس صرف مرکزی domain سے جڑے paths ہیں (مثلاً [yourdomain.com/subsite](http://yourdomain.com/subsite))۔ نتیجتاً، آپ کو صرف مرکزی domain کے لیے **ایک SSL certificate** کی ضرورت ہے اور وہ پورے نیٹ ورک کو cover کر لے گا۔

اسی وقت، اس کی URL ساخت کی وجہ سے، Google اور دیگر search engines آپ کے subdirectory-based نیٹ ورک کی تمام subsites کو ایک بڑی سائٹ سمجھیں گے۔ نتیجتاً، آپ کے گاہکوں کی طرف سے subsites پر شامل کیا گیا مواد آپ کی landing سائٹ کی SEO کارکردگی کو متاثر کر سکتا ہے۔ اس اثر کی سطح قابل بحث ہے اور یہ دلیل بھی دی جا سکتی ہے کہ اس طرح کا انتظام SEO کارکردگی کے لیے فائدہ مند بھی ہو سکتا ہے۔

**Subdomain Mode** سیٹ اپ کرنے میں تھوڑا پیچیدہ ہے، لیکن اس کی URL ساخت (مثلاً [subsite.yournetwork.com](http://subsite.yournetwork.com)) عام طور پر "زیادہ پیشہ ورانہ" نظر آتی ہے۔

Subdomain mode سیٹ اپ کرنے میں ایک بڑا چیلنج پورے نیٹ ورک کے لیے SSL coverage (HTTPS) ہے۔ بات یہ ہے کہ browsers subdomains کو الگ الگ entities سمجھتے ہیں۔ نتیجتاً، آپ کو اپنے نیٹ ورک کے ہر subdomain کے لیے الگ SSL certificate کی ضرورت ہوگی، یا ایک خاص قسم کا certificate جسے **Wildcard SSL certificate** کہتے ہیں۔ حالیہ برسوں میں، hosting providers اور panels نے SSL provisioning میں بہتری لائی ہے اور کچھ ایک کلک پر wildcard certificates فراہم کرتے ہیں، جس سے سیٹ اپ کی پیچیدگی کے لحاظ سے دونوں طریقوں کا فرق کم ہو گیا ہے۔

Subdirectory mode کے برعکس، subdomain-based نیٹ ورک پر subsites کو search engines الگ الگ websites سمجھتے ہیں، جس کا مطلب ہے کہ ایک subsite پر موجود مواد دوسری subsites کی SEO کارکردگی کو بالکل متاثر نہیں کرتا۔

## Super Admin

Single-site WordPress installations آپ کو لامحدود تعداد میں users شامل کرنے اور ان users کو مختلف اجازتوں کے ساتھ مختلف user roles دینے کی اجازت دیتی ہیں۔

WordPress Multisite میں، ایک نئی قسم کا user سامنے آتا ہے: **super admin** – اور ایک نیا admin panel بھی: **network admin panel**۔

جیسا کہ نام سے ظاہر ہے، super admin کے پاس نیٹ ورک پر مکمل اختیارات ہوتے ہیں، وہ تمام subsites، plugins، themes، سب کچھ manage کر سکتا ہے!

جب آپ اپنی single-site WordPress installation کو multisite میں تبدیل کرتے ہیں، تو single site کا اصل admin خود بخود super admin میں upgrade ہو جاتا ہے۔

Plugins اور themes صرف super admins کی طرف سے network admin panel سے install یا uninstall کیے جا سکتے ہیں۔ Subsite admins پھر ان plugins یا themes کو activate یا deactivate کر سکتے ہیں جب تک کہ super admin کسی plugin کو network activate نہ کر دے، جو اسے تمام subsites کے لیے ہمیشہ فعال رہنے پر مجبور کرتا ہے۔

_نوٹ: جیسا کہ آپ دیکھ سکتے ہیں، کسی کو اپنے نیٹ ورک میں مدعو کرنا اور انہیں super admin کا درجہ دینا اس user کو آپ کے نیٹ ورک پر مکمل کنٹرول دیتا ہے۔ مثال کے طور پر، دوسرے super admins آپ کا super admin درجہ بھی ہٹا سکتے ہیں، جس سے آپ اپنے ہی network admin panel سے باہر ہو جائیں گے۔ Ultimate Multisite کے گاہکوں کو اس پر تفصیلی کنٹرول دینے کے لیے کہ اضافی super admins کیا کر سکتے ہیں، ہمارے پاس Support Agents نامی ایک add-on ہے۔ یہ add-on آپ کو ایک اور قسم کا user بنانے کی اجازت دیتا ہے – ایک agent – جس کے پاس صرف وہی اجازتیں ہوں جو انہیں نیٹ ورک پر اپنے کام کرنے کے لیے درکار ہیں۔_

## Subsites میں کیا شیئر ہوتا ہے اور کیا نہیں

جیسا کہ ہم نے پہلے بتایا، WordPress multisite کے اہم فوائد میں سے ایک یہ ہے کہ تمام subsites ایک ہی configurations، core فائلز، themes، plugins، WordPress core فائلز وغیرہ شیئر کرتی ہیں۔

تاہم، کچھ عناصر ہیں جو ہر subsite کی سطح پر الگ رکھے جاتے ہیں۔

\- مثال کے طور پر، ہر subsite کا اپنا uploads فولڈر ہوتا ہے۔ نتیجتاً، ایک مخصوص subsite کے users کی طرف سے کیے گئے uploads دوسری subsite پر قابل رسائی نہیں ہوتے۔

\- ہر subsite کا اپنا dedicated admin panel ہوتا ہے اور وہ plugins یا themes کو activate یا deactivate کر سکتی ہے جب تک کہ انہیں super admin نے network active نہ کیا ہو۔

\- زیادہ تر database tables ہر subsite کے لیے بنائی جاتی ہیں، یعنی posts، comments، pages، settings اور بہت کچھ ہر subsite کے لیے الگ ہوتا ہے۔

## WordPress Multisite پر User Management

WordPress multisite پر ایک نازک موضوع user management ہے۔ WordPress user table ان چند tables میں سے ایک ہے جو تمام subsites میں شیئر ہوتی ہے۔

یہ انتظام کچھ مسائل پیدا کر سکتا ہے جو اس بات پر منحصر ہے کہ آپ اپنے نیٹ ورک سے کیا بنانا چاہتے ہیں۔ نیچے دی گئی مثال سب سے اہم مسئلے کو واضح کرنے میں مدد کرتی ہے۔

درج ذیل منظر کا تصور کریں:

آپ ایک WordPress multisite نیٹ ورک بناتے ہیں اور ان لوگوں کو ماہانہ فیس پر subsites پیش کرنا شروع کرتے ہیں جو e-commerce store رکھنا چاہتے ہیں۔

آپ کو اپنا پہلا ادائیگی کرنے والا گاہک ملتا ہے – جان۔ آپ جان کے لیے اپنے نیٹ ورک پر ایک سائٹ بناتے ہیں، تمام ضروری plugins install کرتے ہیں، پھر جان کے لیے ایک user بناتے ہیں تاکہ وہ اپنا store manage کر سکے۔

پھر ایک دوسری گاہک آتی ہے – ایلس۔ آپ اس کے لیے بھی یہی کرتے ہیں اور اب اس کا بھی آپ کے نیٹ ورک پر ایک store ہے۔

جان اور ایلس دونوں آپ کے گاہک ہیں، لیکن وہ ایک دوسرے کو نہیں جانتے۔ اہم بات یہ ہے کہ اگر ان میں سے کوئی دوسرے کی store ویب سائٹ دیکھے، تو یہ جاننے کا کوئی طریقہ نہیں کہ یہ store اسی نیٹ ورک پر host ہے۔

ایک دن، جان کو نئے جوتوں کی ضرورت ہوتی ہے اور اسے ایلس کے store میں بالکل صحیح جوتے مل جاتے ہیں۔ جب وہ خریداری مکمل کرنے کی کوشش کرتا ہے، تو اسے "email already in use" کا error message ملتا ہے، جو عجیب ہے کیونکہ جان کو 100% یقین ہے کہ یہ پہلی بار ہے جب اس نے ایلس کی ویب سائٹ دیکھی ہے۔

یہاں جو ہوا وہ یہ ہے کہ جان کا user پورے نیٹ ورک میں شیئر ہے لہذا جب وہ ایلس کی سائٹ پر checkout کے لیے اکاؤنٹ بنانے کی کوشش کرتا ہے، WordPress پتہ لگا لیتا ہے کہ اسی email address والا user پہلے سے موجود ہے اور error دیتا ہے۔

_نوٹ: ہم جانتے ہیں کہ آپ کے استعمال کے لحاظ سے یہ کتنا برا ہو سکتا ہے، اس لیے Ultimate Multisite میں ایک آپشن ہے جو موجودہ user کی عام چیکنگ کو bypass کرتا ہے، جس سے ایک ہی email address سے متعدد اکاؤنٹس بنائے جا سکتے ہیں۔ ہر اکاؤنٹ ایک subsite سے منسلک ہوتا ہے، لہذا ٹکراؤ کا خطرہ کم سے کم رہتا ہے۔ اوپر دی گئی مثال میں، جان کو error message نہیں ملتا اور وہ بغیر کسی مسئلے کے جوتے خرید سکتا۔ اس آپشن کو Enable Multiple Accounts کہتے ہیں، اور اسے Ultimate Multisite → Settings → Login & Registration میں فعال کیا جا سکتا ہے۔_

اگرچہ user table شیئر ہے، لیکن subsite admins یا super admin users کو subsites میں شامل اور ہٹا سکتے ہیں، اور ان کے مختلف subsites پر مختلف user roles بھی ہو سکتے ہیں۔

## کارکردگی کے تحفظات

WordPress multisite واقعی طاقتور ہے جب بات اس سائٹس کی تعداد کی آتی ہے جو یہ support کر سکتا ہے۔ اس کا اندازہ اس بات سے لگایا جا سکتا ہے کہ [WordPress.com](https://WordPress.com)، Edublogs، اور Campuspress سب multisite-based services ہیں اور ہر ایک ہزاروں سائٹس host کرتی ہے۔

اگرچہ نظریاتی طور پر ایک WordPress multisite installation پر آپ کتنی سائٹس host کر سکتے ہیں اس کی کوئی زیادہ سے زیادہ حد نہیں ہے، عملی طور پر آپ کتنی سائٹس اطمینان بخش طریقے سے چلا سکتے ہیں یہ کئی مختلف عوامل پر منحصر ہے: سائٹس کتنی dynamic ہیں، subsites کے لیے کون سے plugins دستیاب ہیں، وغیرہ۔

عام اصول کے طور پر، آپ کا نیٹ ورک جتنا سادہ ہو، اتنا بہتر ہے۔ ایسی سائٹس کو ترجیح دینا جہاں مواد واقعی dynamic نہیں ہے (جو انہیں جارحانہ caching strategies کے لیے بہترین امیدوار بناتی ہے) اور plugin stack کو ہلکا رکھنا (active plugins کی تعداد جتنی کم ہو اتنا بہتر) آپ کی host کی جانے والی subsites کی تعداد کو نمایاں طور پر بڑھا سکتا ہے۔

سب سے اچھی بات یہ ہے کہ چونکہ یہ سب WordPress ہے، کارکردگی میں بہتری کے لیے وہی ٹولز جو آپ پہلے سے جانتے اور پسند کرتے ہیں وہ multisite نیٹ ورک کے لیے بھی کام کریں گے۔

Multisite کے لیے سب سے بڑی رکاوٹ database ہے لیکن اگر باقی سب کچھ صحیح طریقے سے سیٹ اپ ہے، تو کچھ ہزار سائٹس سے پہلے آپ کو اس کی فکر کرنے کی ضرورت نہیں۔ اس کے بعد بھی، ایسے حل ہیں جو اس مقام پر بتدریج شامل کیے جا سکتے ہیں (جیسے database sharding solutions، مثال کے طور پر)۔
