---
title: ترتیب اور فراہم کنندہ کی تشکیل
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: سیٹ اپ اور فراہم کنندہ کی تشکیل

Domain Seller ایڈآن ایک رہنمائی شدہ سیٹ اپ وزرڈ کے ساتھ آتا ہے جو آپ کو ہر مطلوبہ مرحلے سے گزارتا ہے۔ یہ صفحہ وزرڈ کے بہاؤ اور بعد میں فراہم کنندگان کو تشکیل یا دوبارہ تشکیل دینے کا طریقہ بیان کرتا ہے۔

## تقاضے {#requirements}

- **Multisite Ultimate** v2.4.12 یا اس سے زیادہ، نیٹ ورک پر فعال
- **PHP** 7.4+
- کم از کم ایک معاون رجسٹرار کے لیے API اسناد

## پہلی بار چلنے والا سیٹ اپ وزرڈ {#first-run-setup-wizard}

سیٹ اپ وزرڈ پہلی بار plugin کو نیٹ ورک پر فعال کرنے پر خودکار طور پر شروع ہوتا ہے۔ یہ کسی بھی وقت **Network Admin › Ultimate Multisite › Domain Seller Setup** سے بھی دستیاب ہے۔

### مرحلہ 1 — فراہم کنندہ منتخب کریں {#step-1--choose-a-provider}

وہ رجسٹرار منتخب کریں جس سے آپ جڑنا چاہتے ہیں۔ معاون اختیارات:

| فراہم کنندہ | DNS نظم | WHOIS رازداری |
|---|---|---|
| OpenSRS | ہاں | ہاں |
| Namecheap | نہیں | ہاں (WhoisGuard، مفت) |
| HostAfrica | ہاں | ہاں (ID تحفظ) |
| Openprovider | ہاں | ہاں |
| Hostinger | ہوسٹڈ ڈومینز کے لیے بنیادی Hostinger ڈومین میپنگ کے ذریعے | ہاں |
| GoDaddy | نہیں | نہیں |
| ResellerClub | ہاں | نہیں |
| NameSilo | نہیں | نہیں |
| Enom | ہاں | نہیں |

### مرحلہ 2 — اسناد درج کریں {#step-2--enter-credentials}

ہر فراہم کنندہ کے اسناد کے فیلڈز مختلف ہیں:

**OpenSRS** — صارف نام اور نجی کلید (OpenSRS Reseller Control Panel سے)

**Namecheap** — صارف نام اور API کلید (Account › Tools › API Access سے)

**HostAfrica** — HostAfrica ری سیلر ماڈیول سے Domains Reseller API endpoint اور اسناد۔ فی الحال کوئی علیحدہ sandbox endpoint دستاویزی نہیں ہے؛ لائیو رجسٹریشنز چلانے سے پہلے محفوظ صرف پڑھنے والے چیکس کے ساتھ جانچ کریں۔

**Openprovider** — API رسائی فعال کے ساتھ صارف نام اور پاس ورڈ۔ اختیاری sandbox mode Openprovider sandbox API استعمال کرتا ہے، اور ایک اختیاری طے شدہ کسٹمر ہینڈل رجسٹریشنز کے لیے دوبارہ استعمال کیا جا سکتا ہے۔

**Hostinger** — بنیادی Hostinger انضمام سے مشترکہ Hostinger hPanel API token۔ یہی token بنیادی domain mapping اور Domain Seller رجسٹریشن آپریشنز کو چلاتا ہے۔

**GoDaddy** — API کلید اور secret (developer.godaddy.com سے)

**ResellerClub** — Reseller ID اور API کلید (ResellerClub control panel سے)

**NameSilo** — API کلید (namesilo.com › Account › API Manager سے)

**Enom** — Account ID اور API token

لائیو جانے سے پہلے فراہم کنندہ کے آزمائشی ماحول کے خلاف جانچ کے لیے جہاں دستیاب ہو **Sandbox mode** کو چیک کریں۔

### مرحلہ 3 — کنکشن کی جانچ کریں {#step-3--test-the-connection}

**Test Connection** پر کلک کریں۔ وزرڈ اسناد اور کنیکٹیویٹی کی تصدیق کے لیے ایک ہلکی API کال بھیجتا ہے۔ جاری رکھنے سے پہلے اسناد کے کسی بھی مسئلے کو درست کریں۔

### مرحلہ 4 — TLDs درآمد کریں {#step-4--import-tlds}

منسلک فراہم کنندہ سے تمام دستیاب TLDs اور تھوک قیمتیں کھینچنے کے لیے **Import TLDs** پر کلک کریں۔ یہ domain products کے ذریعے استعمال ہونے والی TLD فہرست کو آباد کرتا ہے۔ بڑے TLD کیٹلاگز والے فراہم کنندگان کے لیے درآمد میں 30–60 سیکنڈ لگ سکتے ہیں۔

TLDs ایک طے شدہ cron job کے ذریعے روزانہ ایک بار خودکار طور پر دوبارہ ہم آہنگ بھی کیے جاتے ہیں۔

### مرحلہ 5 — ایک ڈومین پروڈکٹ بنائیں {#step-5--create-a-domain-product}

وزرڈ 10% مارک اپ کے ساتھ ایک طے شدہ catch-all ڈومین پروڈکٹ بناتا ہے۔ آپ اس پروڈکٹ کو فوراً ترمیم کر سکتے ہیں یا چھوڑ کر **Ultimate Multisite › Products** کے تحت products دستی طور پر بنا سکتے ہیں۔

مکمل پروڈکٹ تشکیل گائیڈ کے لیے [ڈومین Products اور قیمتیں](./domain-products) دیکھیں۔

---

## فراہم کنندہ کو دوبارہ تشکیل دینا {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller** پر جائیں (یا plugin فہرست میں **Settings** پر کلک کریں)۔

Settings صفحہ میں شامل ہے:

- **ڈومین فروخت فعال کریں** — پوری خصوصیت کو آن/آف کریں
- **طے شدہ فراہم کنندہ** — ڈومین تلاشوں اور نئے products کے لیے استعمال ہونے والا فراہم کنندہ
- **ہر تلاش میں زیادہ سے زیادہ TLDs** — جب گاہک تلاش کرے تو کتنے TLDs چیک کرنے ہیں؛ زیادہ قدریں زیادہ اختیارات دکھاتی ہیں مگر سست ہوتی ہیں
- **دستیابی cache مدت** — دستیابی اور قیمتوں کے نتائج کو کتنی دیر cache کرنا ہے؛ کم قدریں زیادہ درست ہوتی ہیں مگر API کالز بڑھاتی ہیں
- **ڈومین products کا نظم کریں** — Products فہرست کا فوری لنک
- **فراہم کنندگان کو تشکیل دیں** — فراہم کنندگان شامل یا دوبارہ تشکیل دینے کے لیے Integration Wizard کھولتا ہے

### دوسرا فراہم کنندہ شامل کرنا {#adding-a-second-provider}

**فراہم کنندگان کو تشکیل دیں** پر کلک کریں اور نئے رجسٹرار کے لیے وزرڈ دوبارہ چلائیں۔ آپ بیک وقت متعدد فراہم کنندگان تشکیل دے سکتے ہیں۔ ہر ڈومین product کو ایک مخصوص فراہم کنندہ سے منسوب کریں، یا اسے default پر چھوڑ دیں۔

### TLDs کو دستی طور پر ہم آہنگ کرنا {#syncing-tlds-manually}

Settings صفحہ میں، تازہ ترین قیمتیں کھینچنے کے لیے کسی بھی تشکیل شدہ فراہم کنندہ کے ساتھ **Sync TLDs** پر کلک کریں۔ یہ اس وقت مفید ہے جب فراہم کنندہ تھوک قیمتیں اپ ڈیٹ کرے یا نئے TLDs شامل کرے۔

---

## لاگز {#logs}

ہر فراہم کنندہ اپنے لاگ چینل میں لکھتا ہے۔ لاگز **Network Admin › Ultimate Multisite › Logs** کے تحت دیکھے جا سکتے ہیں:

| لاگ چینل | مواد |
|---|---|
| `domain-seller-registration` | تمام رجسٹریشن کوششیں (کامیابی اور ناکامی) |
| `domain-seller-renewal` | تجدید job کے نتائج |
| `domain-seller-opensrs` | خام OpenSRS API سرگرمی |
| `domain-seller-namecheap` | خام Namecheap API سرگرمی |
| `domain-seller-hostafrica` | خام HostAfrica API سرگرمی |
| `domain-seller-openprovider` | خام Openprovider API سرگرمی |
| `domain-seller-hostinger` | خام Hostinger API سرگرمی |
| `domain-seller-godaddy` | خام GoDaddy API سرگرمی |
| `domain-seller-resellerclub` | خام ResellerClub API سرگرمی |
| `domain-seller-namesilo` | خام NameSilo API سرگرمی |
| `domain-seller-enom` | خام Enom API سرگرمی |

---

## فراہم کنندہ کی صلاحیت کے نوٹس {#provider-capability-notes}

ہر رجسٹرار API ایک جیسی کارروائیاں ظاہر نہیں کرتی۔ ایڈآن غیر معاون کارروائیوں کو خاموشی سے ناکام ہونے کے بجائے واضح ایڈمن کے سامنے آنے والی خرابیوں کے ساتھ دکھاتا ہے۔

- **HostAfrica** سب سے وسیع live reseller ورک فلو کی حمایت کرتا ہے، جس میں lookup، TLD/pricing sync، registration، renewal، transfer، nameserver updates، DNS records، EPP codes، registrar lock، اور ID protection شامل ہیں۔
- **Openprovider** reseller-priced TLD sync، registration، renewal، transfers، nameserver updates، DNS zones، EPP codes، registrar lock، اور WHOIS privacy کی حمایت کرتا ہے۔ یہ مختصر مدت کے bearer token کے ساتھ تصدیق کرتا ہے جسے addon خودکار طور پر refresh کرتا ہے۔
- **Hostinger** مشترکہ hPanel API token کے ذریعے availability search، registration، portfolio lookup، nameserver updates، registrar lock، اور WHOIS privacy کی حمایت کرتا ہے۔ Hostinger کا public Domains API reseller/wholesale pricing، inbound transfer، explicit renewal، یا EPP-code retrieval ظاہر نہیں کرتا؛ renewals صرف auto-renew ہیں۔
