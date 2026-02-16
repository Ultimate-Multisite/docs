---
title: Hestia کنٹرول پینل انٹیگریشن
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel انٹیگریشن

اس گائیڈ میں بتایا گیا ہے کہ Ultimate Multisite Hestia انٹیگریشن کو کیسے ترتیب دیں تاکہ آپ کے نیٹ ورک میں میپ کیے گئے ڈومینز خود بخود Hestia میں Web Domain Aliases کے طور پر شامل (اور ہٹائے) جا سکیں۔

- Hestia CLI حوالہ: v-add-web-domain-alias / v-delete-web-domain-alias
- سرکاری REST API دستاویزات: https://hestiacp.com/docs/server-administration/rest-api.html

## یہ کیا کرتا ہے
- جب Ultimate Multisite میں کوئی ڈومین میپ ہوتا ہے، تو انٹیگریشن Hestia API کو کال کر کے یہ چلاتا ہے:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- جب کوئی ڈومین میپنگ ہٹائی جاتی ہے، تو یہ چلتا ہے:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping سیٹنگز میں آپ کی "Auto-create www subdomain" سیٹنگ کے مطابق `www.` alias بھی شامل/ہٹایا جا سکتا ہے۔

## ضروریات
- ایک موجودہ Hestia Web Domain جو پہلے سے آپ کی WordPress انسٹالیشن کی طرف اشارہ کرتا ہو۔ انٹیگریشن اس بنیادی ڈومین سے aliases منسلک کرے گا۔
- Hestia API تک رسائی فعال ہو۔ آپ پاس ورڈ یا API hash/token استعمال کر کے تصدیق کر سکتے ہیں۔

API رسائی فعال کرنے اور تصدیق کی تفصیلات کے لیے Hestia کی REST API دستاویزات دیکھیں:
https://hestiacp.com/docs/server-administration/rest-api.html

## ترتیب (Wizard → Integrations → Hestia)
درج ذیل اقدار فراہم کریں:

- `WU_HESTIA_API_URL` (ضروری)
  - بنیادی API endpoint، عام طور پر `https://your-hestia-host:8083/api/`۔
- `WU_HESTIA_API_USER` (ضروری)
  - Hestia صارف جو API کمانڈز کے لیے استعمال ہوتا ہے (اکثر `admin`)۔
- `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` (کم از کم ایک)
  - تصدیق کا ایک طریقہ منتخب کریں: پاس ورڈ یا API hash/token۔
- `WU_HESTIA_ACCOUNT` (ضروری)
  - Hestia میں Web Domain کا اکاؤنٹ (مالک)؛ یہ CLI کی پہلی آرگیومنٹ ہے۔
- `WU_HESTIA_WEB_DOMAIN` (ضروری)
  - موجودہ Hestia Web Domain جو آپ کی WordPress سائٹ چلاتا ہے (aliases یہاں منسلک ہوں گے)۔
- `WU_HESTIA_RESTART` (اختیاری؛ ڈیفالٹ `yes`)
  - alias تبدیلیوں کے بعد سروسز کو ری سٹارٹ/ری لوڈ کرنا ہے یا نہیں۔

آپ wizard کو یہ constants `wp-config.php` میں ڈالنے دے سکتے ہیں، یا انہیں خود دستی طور پر بیان کر سکتے ہیں۔

## سیٹ اپ کی تصدیق
- wizard کے "Testing" مرحلے میں، plugin API کے ذریعے `v-list-web-domains <WU_HESTIA_ACCOUNT> json` کال کرتا ہے۔ کامیاب جواب کنیکٹیویٹی اور تصدیق کی تصدیق کرتا ہے۔
- ڈومین میپ کرنے کے بعد، Hestia میں چیک کریں: Web > بنیادی ڈومین > Aliases۔ آپ کو نیا alias شامل نظر آنا چاہیے۔

## نوٹس اور تجاویز
- یقینی بنائیں کہ `WU_HESTIA_WEB_DOMAIN` پہلے سے موجود ہے اور `WU_HESTIA_ACCOUNT` کی ملکیت میں ہے۔
- اگر SSL ضروری ہے، تو سرٹیفکیٹس Hestia میں منظم کریں۔ یہ انٹیگریشن فی الحال صرف aliases سنبھالتا ہے۔
- آپ کی Domain Mapping "www subdomain" سیٹنگ کے مطابق plugin `www.<domain>` بھی شامل/ہٹا سکتا ہے۔

## API کال کی مثال (cURL)
نیچے ایک تصوراتی مثال ہے (اپنے ماحول کے مطابق ایڈجسٹ کریں)۔ درست پیرامیٹرز کے لیے سرکاری دستاویزات دیکھیں۔

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (یا &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (شامل کرنے والا alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

ہٹانے کے لیے، `cmd=v-delete-web-domain-alias` اور وہی args استعمال کریں۔

## مسائل کا حل
- API سے HTTP ایرر: تصدیق کریں کہ `WU_HESTIA_API_URL` قابل رسائی ہے اور `/api` شامل ہے۔
- تصدیق کی غلطیاں: `WU_HESTIA_API_USER` اور یا تو `WU_HESTIA_API_PASSWORD` یا `WU_HESTIA_API_HASH` کی تصدیق کریں۔
- لاگز میں "Missing account/base domain": یقینی بنائیں کہ `WU_HESTIA_ACCOUNT` اور `WU_HESTIA_WEB_DOMAIN` سیٹ ہیں اور Hestia میں درست ہیں۔

## حوالہ جات
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI حوالہ (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
