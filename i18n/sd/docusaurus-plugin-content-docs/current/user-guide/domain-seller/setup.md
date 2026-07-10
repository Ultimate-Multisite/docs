---
title: تنصيب ۽ پرووڊيئر کانگيشن
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# डोमेन سیلر: سیٹ اپ ۽ پرووائڊر کانفيجريشن {#domain-seller-setup-and-provider-configuration}

Domain Seller addon هڪ گائیڊed setup wizard سان همراه آهي جيڪا توهان کي هر ضرورتن واري قدم پر قدم تي رهي ٿي. هي صفحو wizard جو عمل ۽ ان کان پوءِ ڪيئن providers کي configure يا reconfigure ڪرڻ آهي، انهيءَ بابت معلومات ڏئي ٿو.

## گهرجن (Requirements) {#requirements}

- **Multisite Ultimate** v2.4.12 يا وڌيڪ، جيڪا network-activated هجي
- **PHP** 7.4+
- ڪلام ڪندڙ ڪنئي Supported registrar لاءِ API credentials

## پهرين بار شروع ٿيل setup wizard {#first-run-setup-wizard}

Setup wizard خود ان وقت خود چبو ٿو جڏهن توهان plugin کي pehli بار network-activate ڪندا آهيو. اهو هر وقت **Network Admin › Ultimate Multisite › Domain Seller Setup** کان موجود آهي.

### قدم 1 — هڪ provider چونڊيو {#step-1--choose-a-provider}

ان registrar کي چونڊيو جنهن سان توهان جوڳڻي (connect) ڪرڻ چاهيو. Supported options:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | ها | ها |
| Namecheap | نه | ها (WhoisGuard, مفت) |
| HostAfrica | ها | ها (ID protection) |
| Openprovider | ها | ها |
| Hostinger | هاست ٿيل domains لاءِ core Hostinger domain mapping جي ذريعي | ها |
| GoDaddy | نه | نه |
| ResellerClub | ها | نه |
| NameSilo | نه | نه |
| Enom | ها | نه |

### قدم 2 — credentials داخل ڪريو {#step-2--enter-credentials}

هر provider جا credential fields مختلف آهن:

**OpenSRS** — Username ۽ private key (OpenSRS Reseller Control Panel کان)

**Namecheap** — Username ۽ API key (Account › Tools › API Access کان)

**HostAfrica** — Domains Reseller API endpoint ۽ credentials HostAfrica reseller module کان. اڃا تائين ڪو separate sandbox endpoint document نه آهي؛ لائیو registration شروع ڪرڻ کان اڳ محفوظ read-only checks سان test ڪريو.

**Openprovider** — Username ۽ password جنهن ۾ API access enabled هجي. Optional sandbox mode Openprovider sandbox API جو استعمال ڪري ٿو، ۽ registrations لاءِ optional default customer handle کي دوبارہ استعمال ڪري سگهجي ٿو.

**Hostinger** — کور ہوسٹنگر کے بنیادی انٹیگریشن سے شیئرڈ hPanel API ٹوکن۔ یہی ٹوکن کور ڈومین میپنگ اور ڈومین سیلر رجسٹریشن کے آپریشنز کو چلاتی ہے۔

**GoDaddy** — API کیج اور سیکرٹ (developer.godaddy.com سے)

**ResellerClub** — ری سیلر آئی ڈی اور API کیج (ResellerClub کنٹرول پینل سے)

**NameSilo** — API کیج (namesilo.com › Account › API Manager سے)

**Enom** — اکاؤنٹ آئی ڈی اور API ٹوکن

اگر دستیاب ہو تو **Sandbox mode** چیک کریں تاکہ لائیو جانے سے پہلے فراہم کنندہ کے ٹیسٹ انوائرمنٹ کے خلاف ٹیسٹ کر سکیں۔

### قدم 3 — کنکشن کو ٹیسٹ کریں {#step-3--test-the-connection}

**Test Connection** پر کلک کریں۔ یہ وِزارڈ کریڈینشلز اور کنیکٹیویٹی کی تصدیق کے لیے ایک ہلکی API کال بھیجتا ہے۔ جاری رکھنے سے پہلے کسی بھی کریڈینشل مسائل کو ٹھیک کر لیں۔

### قدم 4 — TLDs درآمد کریں (Import TLDs) {#step-4--import-tlds}

اپنے منسلک فراہم کنندہ سے تمام دستیاب TLDs اور ہول سیل پرائسنگ حاصل کرنے کے لیے **Import TLDs** پر کلک کریں۔ یہ ڈومین پروڈکٹس میں استعمال ہونے والی TLD لسٹ کو بھر دیتا ہے۔ بڑی TLD کی کٹلاگ والے فراہم کنندگان کے لیے درآمد میں 30–60 سیکنڈ لگ سکتے ہیں۔

TLDs روزانہ ایک شیڈول شدہ کرون جاب کے ذریعے خود بخود دوبارہ ہم آہنگ (re-synced) بھی ہوتے ہیں۔

### قدم 5 — ایک ڈومین پروڈکٹ بنائیں {#step-5--create-a-domain-product}

وِزارڈ ایک ڈیفالٹ کیچ آل پروڈکٹ بناتا ہے جس پر 10% مارک اپ ہوتا ہے۔ آپ اس پروڈکٹ میں فوری طور پر ترمیم کر سکتے ہیں یا **Ultimate Multisite › Products** کے تحت دستی طور پر پروڈکٹس بنا کر اسے چھوڑ سکتے ہیں۔

مکمل پروڈکٹ کنفیگریشن گائیڈ کے لیے [Domain Products and Pricing](./domain-products) دیکھیں۔

---

## فراہم کنندہ کو دوبارہ ترتیب دینا (Reconfiguring a provider) {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller** پر جائیں (یا پلگ ان لسٹ میں **Settings** پر کلک کریں)۔

سیٹنگز پیج میں یہ چیزیں شامل ہیں:

- **Domain bechne (domain selling) enable karna** — is feature ko on/off karne ke liye toggle karein
- **Default provider** — woh provider jiska istemal domain search aur nayi products ke liye kiya jata hai
- **Max TLDs per search** — jab koi customer search karta hai to kitne TLDs check kiye jayenge; zyada values se zyada options dikhte hain lekin yeh slow ho jaate hain
- **Availability cache duration** — availability aur pricing results ko kitne waqt tak cache rakha jaye; kam values zyada sahi hoti hain lekin API calls badh jati hain
- **Manage domain products** — Products list ka quick link

- **Providers configure karna** — providers add ya reconfigure karne ke liye Integration Wizard kholega

### Doosra provider jorna (Adding a second provider) {#adding-a-second-provider}

**Configure providers** par click karein aur naye registrar ke liye wizard ko phir se chalaein. Aap ek hi waqt mein kai providers configure kar sakte hain. Har domain product ko kisi khaas provider ko assign karein, ya default par chhod dein.

### TLDs ko manually sync karna (Syncing TLDs manually) {#syncing-tlds-manually}

Settings page mein, kisi bhi configured provider ke bagal mein **Sync TLDs** par click karein taaki latest pricing aa jaye. Yeh tab kaam aata hai jab koi provider wholesale pricing update karta hai ya nayi TLDs add karta hai.

---

## Logs (Logs) {#logs}

Har provider apne alag log channel par likhta hai. Aap logs ko **Network Admin › Ultimate Multisite › Logs** ke andar dekh sakte hain:

| لاگ چینل | مواد |
|---|---|
| `domain-seller-registration` | تمام رجسٹریشن کوششیں (کامیابی اور ناکامی دونوں) |
| `domain-seller-renewal` | رینول جاب کے نتائج |
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

## فراہم کنندہ کی صلاحیت کے نوٹس (Provider capability notes) {#provider-capability-notes}

ہر رجسٹرار کا API ایک جیسا کام نہیں دکھاتا۔ یہ ایڈ آن ڈسپورٹڈ آپریشنز کو واضح ایڈمن فرنٹ ایریرز کے ساتھ ظاہر کرتا ہے بجائے اس کے کہ وہ خاموشی سے ناکام ہو جائے۔

- **HostAfrica** سب سے وسیع لائیو ریسیلر ورک فلو کی حمایت کرتا ہے، جس میں تلاش (lookup)، TLD/قیمت کا ہم آہنگی، رجسٹریشن، رینول، منتقلی، نیم سرور اپ ڈیٹس، DNS ریکارڈز، EPP کوڈز، رجسٹر لاک، اور آئی ڈی تحفظ شامل ہیں۔
- **Openprovider** ریسیلر قیمت پر TLD ہم آہنگی، رجسٹریشن، رینول، منتقلی، نیم سرور اپ ڈیٹس، DNS زونز، EPP کوڈز، رجسٹر لاک، اور WHOIS پرائیویسی کی حمایت کرتا ہے۔ یہ ایک مختصر وقت کے لیے رہنے والے bearer token سے تصدیق کرتا ہے جسے ایڈ آن خود بخود ریفریش کرتا رہتا ہے۔
- **Hostinger** شیئرڈ hPanel API ٹوکن کے ذریعے دستیابی تلاش (availability search)، رجسٹریشن، پورٹ فولیو لک اپ، نیم سرور اپ ڈیٹس، رجسٹر لاک، اور WHOIS پرائیویسی کی حمایت کرتا ہے۔ Hostinger کا عوامی Domains API ریسیلر/ wholesale قیمتوں، ان باؤنڈ منتقلی، واضح رینول، یا EPP کوڈ حاصل کرنے کو ظاہر نہیں کرتا؛ رینول خود بخود دوبارہ ہونے (auto-renew) کے لیے ہوتا ہے۔
