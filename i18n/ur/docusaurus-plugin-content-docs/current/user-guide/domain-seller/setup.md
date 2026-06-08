---
title: سیٹ اپ اور فراہم کنندہ کی ترتیب
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: سیٹ اپ اور فراہم کنندہ کی ترتیب (Setup and Provider Configuration)

Domain Seller addon ایک گائیڈڈ سیٹ اپ ویزرڈ کے ساتھ آتا ہے جو آپ کو ہر ضروری قدم سے گزارتا ہے۔ یہ صفحہ ویزرڈ کے بہاؤ (flow) اور اس کے بعد فراہم کنندہ (providers) کو کیسے ترتیب دیں یا دوبارہ ترتیب دیں، اس پر بات کرتا ہے۔

## ضروریات (Requirements)

- **Multisite Ultimate** v2.4.12 یا اس سے زیادہ، جو network پر فعال ہو۔
- **PHP** 7.4+
- کم از کم ایک سپورٹڈ رجسٹرار کے لیے API credentials۔

## پہلی بار کا سیٹ اپ ویزرڈ (First-run setup wizard)

یہ سیٹ اپ ویزرڈ پہلی بار جب آپ پلاگ ان کو network پر فعال کرتے ہیں تو خود بخود شروع ہو جاتا ہے۔ یہ آپ کو کسی بھی وقت **Network Admin › Ultimate Multisite › Domain Seller Setup** سے بھی دستیاب ہے۔

### قدم 1 — ایک فراہم کنندہ کا انتخاب کریں (Choose a provider)

وہ رجسٹرار منتخب کریں جسے آپ جوڑنا چاہتے ہیں۔ سپورٹڈ آپشنز:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### قدم 2 — credentials درج کریں (Enter credentials)

ہر فراہم کنندہ کے لیے مختلف credential fields ہوتے ہیں:

**OpenSRS** — صارف نام (Username) اور پرائیویٹ key (OpenSRS Reseller Control Panel سے)

**Namecheap** — صارف نام (Username) اور API key (Account › Tools › API Access سے)

**GoDaddy** — API key اور secret (developer.godaddy.com سے)

**ResellerClub** — Reseller ID اور API key (ResellerClub control panel سے)

**NameSilo** — API key (namesilo.com › Account › API Manager سے)

**Enom** — Account ID اور API token

جتنی جگہ دستیاب ہو، **Sandbox mode** کو چیک کریں تاکہ لائیو جانے سے پہلے فراہم کنندہ کے ٹیسٹ ماحول پر ٹیسٹ کیا جا سکے۔

### قدم 3 — کنکشن کا ٹیسٹ کریں (Test the connection)

**Test Connection** پر کلک کریں۔ ویزرڈ credentials اور کنیکٹیویٹی کو تصدیق کرنے کے لیے ایک ہلکا API کال بھیجتا ہے۔ آگے بڑھنے سے پہلے کسی بھی credential کے مسائل کو ٹھیک کر لیں۔

### قدم 4 — TLDs درآمد کریں (Import TLDs)

تمام دستیاب TLDs اور wholesale pricing کو منسلک فراہم کنندہ سے کھینچنے کے لیے **Import TLDs** پر کلک کریں۔ یہ TLD list کو بھرتا ہے جو domain products میں استعمال ہوتی ہے۔ اگر فراہم کنندہ کے پاس TLD کی بڑی فہرست ہے تو اس درآمد میں 30–60 سیکنڈ لگ سکتے ہیں۔

TLDs کو روزانہ ایک بار ایک شیڈولڈ cron job کے ذریعے خود بخود دوبارہ سنک (re-synced) بھی کیا جاتا ہے۔

### قدم 5 — ایک domain product بنائیں (Create a domain product)

ویزرڈ 10% مارک اپ کے ساتھ ایک ڈیفالٹ کیچ-ال (catch-all) domain product بناتا ہے۔ آپ اس product کو فوراً ایڈٹ کر سکتے ہیں یا اسے چھوڑ کر **Ultimate Multisite › Products** کے تحت manually products بنا سکتے ہیں۔

مکمل product configuration guide کے لیے [Domain Products and Pricing](./domain-products) دیکھیں۔

---

## فراہم کنندہ کو دوبارہ ترتیب دینا (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** پر جائیں (یا پلاگ ان کی فہرست میں **Settings** پر کلک کریں۔)

سیٹنگز پیج میں یہ چیزیں شامل ہیں:

- **Enable domain selling** — پوری فیچر کو آن/آف کرنے کے لیے ٹوگل۔
- **Default provider** — domain searches اور نئے products کے لیے استعمال ہونے والا فراہم کنندہ۔
- **Max TLDs per search** — جب کوئی کسٹمر تلاش کرتا ہے تو کتنے TLDs کو چیک کیا جائے؛ زیادہ ویلیوز زیادہ آپشنز دکھاتی ہیں لیکن سست ہوتی ہیں۔
- **Availability cache duration** — دستیابی (availability) اور قیمتوں کے نتائج کو کتنی دیر تک cache کیا جائے؛ کم ویلیوز زیادہ درست ہوتی ہیں لیکن API کالز بڑھاتی ہیں۔
- **Manage domain products** — Products list کا فوری لنک۔
- **Configure providers** — فراہم کنندہ شامل کرنے یا دوبارہ ترتیب دینے کے لیے Integration Wizard کھولتا ہے۔

### دوسرا فراہم کنندہ شامل کرنا (Adding a second provider)

**Configure providers** پر کلک کریں اور نئے رجسٹرار کے لیے ویزرڈ دوبارہ چلائیں۔ آپ ایک ساتھ کئی فراہم کنندہ ترتیب دے سکتے ہیں۔ ہر domain product کو کسی مخصوص فراہم کنندہ کے ساتھ منسلک کریں، یا اسے ڈیفالٹ پر چھوڑ دیں۔

### TLDs کو دستی طور پر سنک کرنا (Syncing TLDs manually)

سیٹنگز پیج میں، کسی بھی ترتیب شدہ فراہم کنندہ کے ساتھ **Sync TLDs** پر کلک کریں تاکہ تازہ ترین قیمتیں کھینچی جا سکیں۔ یہ اس وقت مفید ہے جب کوئی فراہم کنندہ wholesale pricing کو اپ ڈیٹ کرتا ہے یا نئے TLDs شامل کرتا ہے۔

---

## Logs

ہر فراہم کنندہ اپنے لوگ چینل میں لکھتا ہے۔ Logs کو **Network Admin › Ultimate Multisite › Logs** کے تحت دیکھا جا سکتا ہے:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | تمام رجسٹریشن کی کوششیں (کامیاب اور ناکام) |
| `domain-seller-renewal` | تجدید (Renewal) کے کام کے نتائج |
| `domain-seller-opensrs` | خام OpenSRS API سرگرمی |
| `domain-seller-namecheap` | خام Namecheap API سرگرمی |
| `domain-seller-godaddy` | خام GoDaddy API سرگرمی |
| `domain-seller-resellerclub` | خام ResellerClub API سرگرمی |
| `domain-seller-namesilo` | خام NameSilo API سرگرمی |
| `domain-seller-enom` | خام Enom API سرگرمی |
