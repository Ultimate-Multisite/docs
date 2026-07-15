---
title: ڈومین پروڈکٹس اور قیمتیں
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Products اور Pricing

Domain products وہ طریقے ہیں جن کے ذریعے آپ پرائسنگ، TLDs، WHOIS privacy، اور provider selection کو کنٹرول کرتے ہیں۔ ہر domain product ایک standard Multisite Ultimate product ہوتا ہے جس میں ایک اضافی **Domain Settings** ٹیب ہوتا ہے۔

## Domain product بنانا {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** پر جائیں
2. **Add New** پر کلک کریں
3. product type کو **Domain** پر سیٹ کریں
4. **Domain Settings** ٹیب کو configure کریں (نیچے دیکھیں)
5. Save کریں

Domain products product list میں ایک جامنی **Domain** badge کے ساتھ نظر آتے ہیں اور انہیں **Domain Products** ٹیب کا استعمال کرتے ہوئے filter کیا جا سکتا ہے۔

## Domain settings tab {#domain-settings-tab}

### Provider {#provider}

یہ منتخب کریں کہ کون سا registrar اس product کی رجسٹریشن کو سنبھالے گا۔ یہ Domain Seller settings میں سیٹ کردہ عالمی **Default provider** پر ڈیفالٹ ہوتا ہے۔

### Supported TLDs {#supported-tlds}

اگر آپ اسے خالی چھوڑ دیتے ہیں تو ایک **catch-all product** بنتا ہے جو ان تمام TLDs پر لاگو ہوتا ہے جو کسی دوسرے product سے match نہیں ہوتے۔

ایک comma-separated list of TLDs (مثلاً، `.com, .net, .org`) درج کریں تاکہ ایک **TLD-specific product** بن سکے جو صرف ان extensions پر لاگو ہو۔

**Product matching کیسے کام کرتا ہے:** جب کوئی کسٹمر domain سرچ کرتا ہے، تو addon سب سے زیادہ مخصوص (most specific) matching product کو منتخب کرتا ہے۔ ایک product جس کی TLD list میں `.com` ہے، وہ catch-all product پر ترجیح رکھتا ہے۔ اگر کوئی TLD-specific product match نہیں ہوتا، تو catch-all استعمال ہوتا ہے۔ اگر کوئی product موجود نہیں ہے، تو domain search نہیں دکھائی جائے گی۔

### Markup type {#markup-type}

تین modes یہ کنٹرول کرتے ہیں کہ آپ کی retail price کو wholesale cost سے کیسے calculate کیا جائے:

| Mode | یہ کیسے کام کرتا ہے |
|---|---|
| **Percentage** | یہ wholesale cost پر ایک فیصد اضافہ کرتا ہے۔ $10 کی wholesale domain پر 20% markup $12 دے گا۔ |
| **Fixed markup** | یہ ایک مقررہ ڈالر کی رقم شامل کرتا ہے۔ $10 کی domain پر $5 markup $15 دے گا۔ |
| **Fixed price** | یہ wholesale cost کو مکمل طور پر نظر انداز کرتا ہے۔ ہمیشہ وہ رقم چارج کرتا ہے جو آپ درج کرتے ہیں۔ |

### Introductory pricing {#introductory-pricing}

اسے enable کرنے سے آپ پہلے سال کی discounted price پیش کر سکتے ہیں۔ ایک علیحدہ **Introductory price** (پہلے سال کی قیمت) کو عام **Renewal price** (دوسرے سال اور اس کے بعد) کے ساتھ سیٹ کریں۔ کسٹمر کو دونوں قیمتیں checkout کے دوران نظر آئیں گی تاکہ وہ جان سکیں کہ renewal پر کیا توقع رکھنی ہے۔

### WHOIS privacy {#whois-privacy}

یہ کنٹرول کرتا ہے کہ کیا اس product کے ذریعے رجسٹرڈ domains کے لیے WHOIS privacy protection پیش کی جاتی ہے۔

| Setting | behaviour |
|---|---|
| **Disabled** | WHOIS privacy کبھی بھی پیش یا enable نہیں کی جاتی۔ |
| **Always Included** | WHOIS privacy رجسٹریشن پر خود بخود اور بغیر کسی چارج کے enable ہو جاتی ہے۔ |
| **Customer Choice** | checkout کے دوران ایک checkbox ظاہر ہوتا ہے۔ **Privacy price** کو ہر سال چارج کرنے کے لیے سیٹ کریں، یا اسے $0 پر چھوڑ دیں تاکہ یہ مفت پیش کیا جا سکے۔ |

Namecheap کے لیے، WHOIS privacy WhoisGuard استعمال کرتا ہے (ہمیشہ مفت)۔ OpenSRS کے لیے، یہ OpenSRS privacy service استعمال کرتا ہے (جس پر wholesale پر لاگت ہو سکتی ہے)۔

---

## TLD import اور sync {#tld-import-and-sync}

Domain products connected provider سے fetch کی گئی real-time wholesale pricing دکھاتے ہیں۔ اس کے کام کرنے کے لیے، TLDs کو import کیا جانا ضروری ہے۔

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** یہ تمام configure کردہ providers پر ایک scheduled cron job کے ذریعے روزانہ چلتا ہے۔

sync کے بعد، کسی بھی domain product کے Domain Settings tab پر جائیں اور TLD picker کا استعمال کرتے ہوئے دستیاب TLDs کو ان کی موجودہ wholesale prices کے ساتھ دیکھیں۔

---

## Auto-renewal {#auto-renewal}

Domain renewals کسٹمر کی membership status سے جڑے ہوتے ہیں:

- جب کوئی membership renew ہوتی ہے اور ایک domain linked ہوتا ہے، تو domain renewal خود بخود queue ہو جاتا ہے
- Renewal attempts کسٹمر کے active payment gateway کا استعمال کرتے ہیں
- ناکام renewals کو exponential backoff کے ساتھ خود بخود retry کیا جاتا ہے
- کامیاب renewals، ناکامیوں، اور آنے والی expirations کے لیے email notifications بھیجے جاتے ہیں

Domain lifecycle events کے لیے Email template IDs:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration {#admin-manual-domain-registration}

کسی کسٹمر کی طرف سے domain register کرنا، بغیر اس کے checkout سے گزرے:

1. **Network Admin › Ultimate Multisite › Register Domain** پر جائیں
2. کسٹمر کو منتخب کریں اور domain name درج کریں
3. registrant contact details (name, address, phone) پُر کریں
4. **Register** پر کلک کریں

domain record create ہو جاتا ہے اور کسٹمر کے account سے link ہو جاتا ہے۔
