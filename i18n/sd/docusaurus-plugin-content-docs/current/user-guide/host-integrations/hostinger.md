---
title: هوستينجر (hPanel) انٽيغريشن
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## جائزہ

Hostinger هڪ مقبول ويب هاستينگ برائڊر آهي جنهن وڏي ڪنٽرول پينل "hPanel" نام سان جاني ٿو. Ultimate Multisite Hostinger integration توهان جي WordPress admin کان سڌي طرح domain mappings ۽ subdomains کي خود بخود منظم ڪرڻ لاءِ Ultimate Multisite ۽ Hostinger جي hPanel جو automatic domain syncing ممکن بڻائي ٿو.

## خصوصيتون

- hPanel ۾ addon domain جو خود بخود نڪرڻ
- hPanel ۾ subdomain جو خود بخود نڪرڻ (subdomain multisite installations لاءِ)
- جڏهن mappings مڪمل ڪيا ويندا ته domain جو حذف ٿي وڃي
- hPanel جي domain management API سان سلسلي ۾ آسان integration

## گهرجيون

Hostinger integration استعمال ڪرڻ لاءِ توهان کي انهن جي ضرورت آهي:

1. Hostinger جو هڪ account جيڪو hPanel تک رسائي ڏئي سگهي ٿو
2. Hostinger کان API token
3. توهان جي `wp-config.php` فائل ۾ هي constants تعريف ڪيا ويا آهن:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

اختياري طور تي، توهان هي به تعريف ڪري سگهو ٿا:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## ترتیب ڏيڻ جي تعليمات

### 1. پنهنجو Hostinger API Token جنريٽ ڪريو

1. پنهنجي Hostinger account ۾ لاگ ان ڪريو ۽ hPanel تک رسائي حاصل ڪريو
2. **Account Settings** → **API Tokens** تي وڃو
3. **Create New Token** تي ڪلڪ ڪريو
4. پنهنجي token کي هڪ تفصيلي نالو ڏيو (مثال: "Ultimate Multisite")
5. ضروري اجازتون چونڊيو:
   - Domain management
   - Subdomain management
6. جنريٽ ٿيل token کي كوب ڪريو ۽ محفوظ ڪريو

### 2. پنهنجي Account ID جوڳڻو

1. hPanel ۾، **Account Settings** → **Account Information** تي وڃو
2. توهان جي Account ID هن صفحا تي ڏيکاري ويندي آهي
3. هي ID كوب ڪري محفوظ ڪريو ته جيئن توهان نالي قدم لاءِ استعمال ڪري سگهو ٿا

### 3. wp-config.php ۾ constants شامل ڪريو

هي هي constants پنهنجي `wp-config.php` فائل ۾ شامل ڪريو:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

جيڪڏهن توهان جو Hostinger account ڪا ٻي API endpoint استعمال ڪري ٿو، ته توهان ان کي خود مطابق بنائ سگهو ٿا:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integration Enable गर्नुहोस्

1. پنهنجي WordPress admin ۾، **Ultimate Multisite > Settings** تي وڃو
2. **Domain Mapping** ٽاب تي ويندو رهيو
3. **Host Integrations** تائين سکرول ڪريو
4. **Hostinger (hPanel)** integration کي Enable ڪريو
5. **Save Changes** تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو

### Addon Domains (اضافي دوميني)

جيڪڏهن توهان Ultimate Multisite ۾ هڪ دومين مپ ڪريو ٿا:

1. Integration Hostinger جي API تائين درخواست پيحل نه ڇڏيندي ته دومين کي addon domain طور شامل ڪرڻ لاءِ
2. دومين کي توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيو ويندو آهي
3. جڏهن ڪو دومين مپ ختم ڪري ڇڏيو وڃي، ته integration خود بخود hPanel کان addon domain کي ختم ڪري ڇڏيندي

### Subdomains (سڀ دوميني)

Subdomain multisite installation لاءِ، جڏهن هڪ نئين سائيٽ جوٺي ٿي:

1. Integration پوري دومين کان subdomain جو حصو نکالندي
2. هو Hostinger جي API تائين درخواست پيحل نه ڇڏيندي ته subdomain شامل ڪرڻ لاءِ
3. Subdomain کي توهان جي root directory تي پوائنٽ ڪرڻ لاءِ configure ڪيو ويندو آهي

## اهم نوٽس

- Integration توهان جي account سان رابطو ڪرڻ لاءِ Hostinger جي REST API جو استعمال ڪري ٿو
- توهان جي API token ۾ دومين ۽ subdomain جي management لاءِ ضروري اجازتون hon ٿيون
- Integration DNS configuration کي سنڀالندي نه آهي؛ دومين کي پريشان ڪرڻ کان اڳ ئي توهان جي Hostinger account تي پوائنٽ ڪيو وڃي

- API requests HTTPS تي محفوظ طور تي ڪيا ويندا آهن
- پنهنجي API token کي محفوظ رکجو ۽ ان کي ڪڏهن به پنهنجي گهر ۾ نه ڏيو

## Troubleshooting (مسئلي حل)

### API Connection Issues (API جو رابطو جي مسئلن)

API token درست آهي ۽ ختم نه ٿي آهي، اهو تصديق ڪريو

اکاؤنٽ ID درست آهي، اهو چیک ڪريو

اهڙي API token کي ডومين مانيجمنٽ لاءِ ضروري اجازتون آهن، اهو يقينا ڪريو

Hostinger جو توهان جو اکاؤنٹ فعال آهي ۽ سٺي حالت ۾ آهي، اهو ضرور چیک ڪريو

### دامن شامل نه ٿيو

- Ultimate Multisite جي لاگز ۾ ڪا غلطي واري ميساجز ڏسو
- تصديق ڪريو ته دامن توهان جي Hostinger جو اکاؤنٹ ۾ پہلے کان شامل ناهي
- يقينا ڪريو ته توهان جي Hostinger جو اکاؤنٹ addon domains لاءِ محدود حد نه پهچايو آهي
- 확يہ ڪريو ته دامن صحيح طرح توهان جي Hostinger nameservers تي پوائنٽ ڪيل آهي

### SSL سرٽيفڪيٽ جي مسئلن ۾

- هي ان integration کي SSL سرٽيفڪيٽ ڏيڻ جو نظام نه ٿو سنڀاليندو
- Hostinger عام طور تي AutoSSL جي ذريعي مفت SSL سرٽيفڪيٽ فراهم ڪري ٿو
- توهان hPanel ۾ **SSL/TLS** تحت SSL سرٽيفڪيٽ کي خود مانيج ڪري سگهو ٿا
- يا ٻئي طور، Hostinger جي AutoSSL فيچر سان Let's Encrypt استعمال ڪري سگهو ٿا

## مدد

Hostinger integration سان اضافي مدد لاءِ، مهرباني ڪري ان تي رجوع ڪريو:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
